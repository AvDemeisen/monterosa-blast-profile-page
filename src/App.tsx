import { useEffect } from 'react';
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
import useFetchData from '@/hooks/use-access';
import useProfile from '@/hooks/use-profile';
import useRank from '@/hooks/use-rank';

import { updateScore } from './helpers/updateScore';
import { updatePoints } from './helpers/updatePoints';
import { updateBadges } from './helpers/updateBadges';

function App() {
  const refreshInterval = 60000;
  const checkUrl = `${baseUrl}user/check?projectId=${projectId}&strategy=${strategy}&deviceId=${deviceId}&provider=${provider}`;
  const profileUrl = `${baseUrl}user/game-profile?projectId=${projectId}&strategy=${strategy}`;
  const gamificationUrl = (id: string) =>
    `${gamificationBaseUrl}/projects/${projectId}/leaderboards/overall/users/${id}`;
  const { userId, accessToken, error: accessError } = useFetchData(checkUrl, Authorization);

  const {
    profileData,
    gameData,
    badges,
    error: profileError,
  } = useProfile(accessToken, profileUrl, refreshInterval);

  const { ranking, error: rankError } = useRank(
    accessToken,
    userId,
    gamificationUrl,
    refreshInterval,
  );

  const handleKeyDown = (event: { key: string; keyCode: number; code: string }) => {
    if (event.key === '+') {
      updateScore(gamificationBaseUrl, projectId, userId, 10);
    } else if (event.key === '-') {
      updateScore(gamificationBaseUrl, projectId, userId, -10);
    } else if (event.keyCode === 49) {
      updatePoints(baseUrl, accessToken, projectId, strategy, 10, 'add');
    } else if (event.key === '9' || event.code === 'Digit9') {
      updateBadges(projectId, strategy, profileUrl, accessToken);
    }
  };

  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [userId]);

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
