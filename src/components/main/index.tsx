import { SetStateAction, useState } from 'react';
import List from '../list';
import ProgressList from '../progress-list';
import CardList from '../card-list';

import 'react-tabs/style/react-tabs.css';
import { Wrapper,  Tab, Tabs, TabList, TabPanel, Indicator} from './styles';
function MyTabs({data}: any) {
  const { achievements, badges, points} = data;
  const [activeTab, setActiveTab] = useState(0);
  const left = activeTab * 33

  const handleTabChange = (index: SetStateAction<number>) => {
    setActiveTab(index);
  };

  return (
    <Wrapper>
    <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
      <TabList>
        <Tab>Achievements</Tab>
        <Tab>Tab two</Tab>
        <Tab>Tab three</Tab>
        <Indicator left={left} widthOfTab={33} />
      </TabList>
      <TabPanel>
        <List data={achievements}/>
      </TabPanel>
      <TabPanel>
      <ProgressList data={badges}/>
      </TabPanel>
      <TabPanel>
      <CardList list={points}/>
      </TabPanel>
    </Tabs>
    </Wrapper>

  );
}

export default MyTabs;
