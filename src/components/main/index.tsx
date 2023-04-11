import { SetStateAction, useState } from 'react';
import Stats from './components/stats';
import Badges from './components/badges';
import Rewards from './components/rewards';

import 'react-tabs/style/react-tabs.css';
import { Wrapper, Panel, Tab, Tabs, TabList, TabPanel, Indicator } from './styles';
function MyTabs({ data, badges }: any) {
  const { achievements, points } = data;
  const [activeTab, setActiveTab] = useState(0);
  const left = activeTab * 33;

  const handleTabChange = (index: SetStateAction<number>) => {
    setActiveTab(index);
  };

  return (
    <Wrapper>
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <TabList>
          <Tab>Stats</Tab>
          <Tab>Badges</Tab>
          <Tab>Rewards</Tab>
          <Indicator left={left} widthOfTab={33} />
        </TabList>
        <Panel>
          <TabPanel>
            <Stats data={achievements} />
          </TabPanel>

          <TabPanel>
            <Badges data={badges} />
          </TabPanel>

          <TabPanel>
            <Rewards list={points} />
          </TabPanel>
        </Panel>
      </Tabs>
    </Wrapper>
  );
}

export default MyTabs;
