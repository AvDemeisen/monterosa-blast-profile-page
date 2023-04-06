import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Header from './components/header';
import Main from './components/main';
import { Wrapper, Loader, GlobalStyle } from './App.styles';
import {
  Authorization,
  gamificationBaseUrl,
  baseUrl,
  projectId,
  deviceId,
  strategy,
  provider,
} from './constants';

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [ranking, setRanking] = useState({ rank: 0, score: 0 });
  const [gameData, setGameData] = useState(null);
  const [userId, setUserId] = useState(null);
  const refreshInterval = 60000;

  const checkUrl = `${baseUrl}user/check?projectId=${projectId}&strategy=${strategy}&deviceId=${deviceId}&provider=${provider}`;
  const profileUrl = `${baseUrl}user/game-profile?projectId=${projectId}&strategy=${strategy}`;
  const gamificationUrl = `${gamificationBaseUrl}/projects/${projectId}/leaderboards/overall/users/${userId}`;

  useEffect(() => {
    fetch(checkUrl, {
      headers: {
        Authorization,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserId(data.data.userId);
        setAccessToken(data.data.accessToken);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => res.json());

  const { data: rankingData, error: rankingError } = useSWR(gamificationUrl, fetcher, {
    refreshInterval,
  });

  useEffect(() => {
    if (accessToken) {
      fetch(profileUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProfileData(data.data.profile);
          setGameData(data.data.gamify.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [accessToken]);

  useEffect(() => {
    if (rankingError) {
      console.error(rankingError);
    }
    if (rankingData) {
      setRanking({
        rank: rankingData.data.rank || 0,
        score: rankingData.data.score || 0,
      });
    }
  }, [rankingData, rankingError]);

  const updateScore = (points: number) => {
    fetch(
      `${gamificationBaseUrl}/projects/${projectId}/scores/2ffe8e46-616d-40ce-a1f0-0e5d0da729d3`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: '64b4562c-0af6-422e-87f2-10489b9a2daa',
          projectId,
          points,
        }),
      },
    )
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === '+') updateScore(10);
      else if (event.key === '-') updateScore(-10);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  console.log(rankingData);
  return (
    <Wrapper>
      <GlobalStyle />
      <>
        {profileData ? (
          <>
            <Header url={baseUrl} projectId={projectId} data={profileData} ranking={ranking} />
            <Main data={gameData} />
          </>
        ) : (
          <Loader>LOADING</Loader>
        )}
      </>
    </Wrapper>
  );
}

export default App;
