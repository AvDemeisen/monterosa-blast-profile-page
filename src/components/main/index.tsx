import { SetStateAction, useState } from 'react';
import List from '../list';
import ProgressList from '../progress-list';
import CardList from '../card-list';

import 'react-tabs/style/react-tabs.css';
import { Wrapper,  Tab, Tabs, TabList, TabPanel, Indicator} from './styles';
function MyTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const left = activeTab * 33

  const handleTabChange = (index: SetStateAction<number>) => {
    setActiveTab(index);
  };

  const list = [
    {
      label: 'One',
      data: '###',
      total: '###',
      progress: 80
    },
    {
      label: 'Two',
      data: '###',
      total: '###',
      progress: 20
    },
    {
      label: 'Three',
      data: '###',
      total: '###',
      progress: 40
    },
    {
      label: 'Four',
      data: '###',
      total: '###',
      progress: 60
    }
  ]

  return (
    <Wrapper>
    <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
      <TabList>
        <Tab>Tab one</Tab>
        <Tab>Tab two</Tab>
        <Tab>Tab three</Tab>
        <Indicator left={left} widthOfTab={33} />
      </TabList>
      <TabPanel>
        <List list={list}/>
      </TabPanel>
      <TabPanel>
      <ProgressList list={list}/>
      </TabPanel>
      <TabPanel>
      <CardList list={list}/>
      </TabPanel>
    </Tabs>
    </Wrapper>

  );
}

export default MyTabs;
