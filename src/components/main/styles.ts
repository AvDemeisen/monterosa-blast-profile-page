import styled from 'styled-components';

export const Wrapper = styled.main`
background-color: #fff;

`

import {
  Tab as TabBase,
  Tabs as TabsBase,
  TabList as TabListBase,
  TabPanel as TabPanelBase,
} from 'react-tabs';



interface IndicatorProps {
  readonly left: number;
  readonly widthOfTab: number;
}



export const Tabs = styled(TabsBase)`
  width: 100%;
`;

export const TabList = styled(TabListBase)`
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3,  minmax(auto, 1fr));
  justify-content: center;
  margin: 0 16px;

  &::after {
    content: '';
    position: absolute;
    left: -16px;
    bottom: 0;
    height: 2px;
    width: calc(100% + 32px);
    background-color: grey;
  }
`;

export const Tab = styled(TabBase)`

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  border-color: transparent;
  border-style: solid;
  border-width: 0;

  text-decoration: none;
  cursor: pointer;
height: 50px;

font-weight: 700;
font-size: 14px;
line-height: 16px;
text-align: center;

color: var(--tab-color);

:focus-visible {
    outline: none;
}
`;

export const TabPanel = styled(TabPanelBase)``;

export const Indicator = styled.div<IndicatorProps>`
  height: 4px;
  position: absolute;
  left: ${({ left }) => left}%;
  width: ${({ widthOfTab }) => widthOfTab}%;
  bottom: 0;
  transition: left 0.5s ease;
  background-color: hotpink;
  z-index: 2;
`;
