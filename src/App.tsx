import { useEffect, useState } from 'react';

import Header from './components/header';
import Main from './components/main';
import { Wrapper, Loader } from './App.styles';
import { Authorization, baseUrl, projectId, deviceId, strategy, provider } from './constants'

function App() {

  const [accessToken, setAccessToken] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [gameData, setGameData] = useState(null)

  const checkUrl = `${baseUrl}user/check?projectId=${projectId}&strategy=${strategy}&deviceId=${deviceId}&provider=${provider}`;
  const profileUrl = `${baseUrl}user/game-profile?projectId=${projectId}&strategy=${strategy}`;

  useEffect(() => {
    fetch(checkUrl, {
      headers: {
        Authorization
      }
    })
      .then(response => response.json())
      .then(data => {
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
          console.log(data)
          setProfileData(data.data.profile);
          setGameData(data.data.gamify.data)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [accessToken]);

  return (
    <Wrapper>
    {profileData ? (
      <>
        <Header url={baseUrl} projectId={projectId} data={profileData} />
      <Main data={gameData}/>
      </>
      ) : <Loader>LOADING</Loader>}
    </Wrapper>
  );
};

export default App;


