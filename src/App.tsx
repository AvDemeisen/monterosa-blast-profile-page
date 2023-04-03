import { useState } from 'react';
import useSWR from 'swr';
import Header from './components/header';
import Main from './components/main';
import { Wrapper } from './App.styles';

function App() {
  const [profile, setProfile] = useState({
    avatar: '',
    name: '',
    description: ''
  });

  const projectId = 'e1940dd8-845c-49d0-82ee-f60d3e150370';
  const externalId = '99f7898b3371001423147fef24c732012b28dc1b89d3006716e473ac236fd91a';
  const url = `https://m-id-public-api-dev-dev.monterosa.cloud/v1/user?projectId=${projectId}&externalId=${externalId}&strategy=simplified`

  const { data, error } = useSWR(url,
    async (url: string) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      return data;
    }
  );

  if (error) {
    console.log(error)
    return <div>Failed to load profile data</div>;
  }
  if (!data) return <div>Loading...</div>;

  if (!data.data.username) {
    return <div>User not found</div>;
  }

  if (profile.name !== data.data.username) {
    setProfile({
      avatar: data.data.appProfile.events.match_x.avatar,
      name: data.data.username,
      description: data.data.appProfile.events.match_x.screen_name
    });
  }

  return (
    <Wrapper>
      <Header url={url} data={profile} setMethod={setProfile} />
      <Main />
    </Wrapper>
  );
}

export default App;
