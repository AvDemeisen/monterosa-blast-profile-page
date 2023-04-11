import styled, { css } from 'styled-components';

import 'react-tabs/style/react-tabs.css';

export const Wrapper = styled.main`
  background-color: transparent;

  height: 100%;
`;

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

export const Panel = styled.div``;

export const Tabs = styled(TabsBase)`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: var(--tabs-background);
`;

export const TabList = styled(TabListBase)`
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: var(--light-grey);
  }
`;

export const Tab = styled(TabBase)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 0;

  text-decoration: none;
  cursor: pointer;
  height: 50px;

  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;

  color: var(--tab-color);

  ${({ selected }) =>
    selected &&
    css`
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      color: var(--tab-color-active);
    `};

  :focus-visible {
    outline: none;
  }
`;

export const TabPanel = styled(TabPanelBase)`
  color: black;
`;

export const Indicator = styled.div<IndicatorProps>`
  height: 4px;
  position: absolute;
  left: ${({ left }) => left}%;
  width: ${({ widthOfTab }) => widthOfTab}%;
  bottom: 0;
  transition: left 0.5s ease;
  background-color: var(--tab-indicator);
  z-index: 2;
`;
