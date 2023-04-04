import { useState } from 'react';
import useSWR from 'swr';
import Header from './components/header';
import Main from './components/main';
import { Wrapper } from './App.styles';

function App() {
  const urlSearchParams = new URLSearchParams(new URL(window.location.href).search);
  const projectId = urlSearchParams.get('projectId');
  const externalId = urlSearchParams.get('externalId');

  const [profile, setProfile] = useState({
    avatar: '',
    name: '',
    description: '',
    level: 0,
    matches: []
  });

  const url = `https://m-id-public-api-dev-dev.monterosa.cloud/v1/user?projectId=${projectId}&externalId=${externalId}&strategy=simplified`

  const { data, error } = useSWR(url,
    async (url: string) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      return data;
    }
  );

  if (error) return <div>Failed to load profile data</div>;
  if (!data) return <div>Loading...</div>;
  if (!data.data.username) return <div>User not found</div>;
  
  if (profile.name !== data.data.username) setProfile({
    avatar: data.data.appProfile.events.match_x.avatar,
    name: data.data.username,
    description: data.data.appProfile.events.match_x.screen_name,
    level: data.data.appProfile.events.match_x.level,
    matches: []
  });

  return (
    <Wrapper>
      <Header url={url} projectId={projectId} externalId={externalId} data={profile} setMethod={setProfile} />
      <Main />
    </Wrapper>
  );
}

export default App;
