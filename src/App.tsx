import { useEffect, useState } from 'react';

import Header from './components/header';
import Main from './components/main';
import { Wrapper, Loader, GlobalStyle } from './App.styles';
import { Authorization, gamificationBaseUrl, baseUrl, projectId, deviceId, strategy, provider } from './constants'

function App() {

  const [accessToken, setAccessToken] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [ranking, setRanking] = useState({rank: 0, score: 0})
  const [gameData, setGameData] = useState(null)
  const [userId, setUserId] = useState(null)

  const checkUrl = `${baseUrl}user/check?projectId=${projectId}&strategy=${strategy}&deviceId=${deviceId}&provider=${provider}`;
  const profileUrl = `${baseUrl}user/game-profile?projectId=${projectId}&strategy=${strategy}`;
  const gamificationUrl = `${gamificationBaseUrl}/projects/${projectId}/leaderboards/overall/users/${userId}`
  useEffect(() => {
    fetch(checkUrl, {
      headers: {
        Authorization
      }
    })
      .then(response => response.json())
      .then(data => {
        setUserId(data.data.userId);
        setAccessToken(data.data.accessToken);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (accessToken) {
      fetch(profileUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(response => response.json())
        .then(data => {
          setProfileData(data.data.profile);
          setGameData(data.data.gamify.data)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      fetch(gamificationUrl)
        .then(response => response.json())
        .then(data => {
          setRanking({
            rank: data.data.rank || 0,
            score: data.data.score || 0
          })
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [accessToken]);
console.log(gameData)
  return (
    <Wrapper>
            <GlobalStyle />
            <>
            {profileData ? (
      <>
      <Header url={baseUrl} projectId={projectId} data={profileData} ranking={ranking}/>
      <Main data={gameData}/>
      </>
      ) : <Loader>LOADING</Loader>}
            </>

    </Wrapper>
  );
};

export default App;


