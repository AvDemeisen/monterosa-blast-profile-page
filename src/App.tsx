import { useEffect, useState } from 'react';
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
  const [badges, setBadges] = useState(null);
  const [ranking, setRanking] = useState({ rank: 0, score: 0 });
  const [gameData, setGameData] = useState<any>(null);
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

  useEffect(() => {
    if (accessToken) {
      const fetchProfileData = () => {
        fetch(profileUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setProfileData(data.data.profile);
            setGameData(data.data.gamify.data);
            setBadges(data.data.gamify.data.badges);
          })
          .catch((error) => {
            console.error(error);
          });
      };

      fetchProfileData();
      const intervalId = setInterval(fetchProfileData, refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      fetch(gamificationUrl)
        .then((response) => response.json())
        .then((data) => {
          setRanking({
            rank: data.data.rank || 0,
            score: data.data.score || 0,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      const fetchRankingData = () => {
        fetch(gamificationUrl)
          .then((response) => response.json())
          .then((data) => {
            setRanking({
              rank: data.data.rank || 0,
              score: data.data.score || 0,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      };

      fetchRankingData();
      const intervalId = setInterval(fetchRankingData, refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [accessToken]);

  const updateScore = (points: number) => {
    fetch(
      `${gamificationBaseUrl}/projects/${projectId}/scores/2ffe8e46-616d-40ce-a1f0-0e5d0da729d3`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
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
  }, [userId]);

  const updatePoints = (points: number, operation: string) => {
    fetch(`${baseUrl}user/game-profile`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectId,
        strategy,
        data: {
          type: 'points',
          operation,
          value: points,
        },
      }),
    })
      .then((response) => response.json())
      // .then((rs) => console.log(rs))
      .catch((error) => console.error(error));
  };

  const updateBadges = () => {
    const body = JSON.stringify({
      projectId,
      strategy,
      data: {
        type: 'badges',
        operation: 'add',
        value: 1,
      },
    });

    fetch(profileUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((response) => response.json())
      .then((rs) => console.log(rs))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === '9' || event.code === 'Digit9') {
        updateBadges();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [badges]);

  useEffect(() => {
    const handleKeyDown = (event: { keyCode: number }) => {
      if (event.keyCode === 49) {
        updatePoints(1000, 'add');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [userId]);

  return (
    <Wrapper>
      <GlobalStyle />
      <>
        {profileData ? (
          <>
            <Header
              url={baseUrl}
              projectId={projectId}
              data={profileData}
              badges={badges}
              ranking={ranking}
            />
            <Main data={gameData} badges={badges} />
          </>
        ) : (
          <Loader>LOADING</Loader>
        )}
      </>
    </Wrapper>
  );
}

export default App;
