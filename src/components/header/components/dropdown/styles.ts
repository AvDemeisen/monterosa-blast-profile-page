import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownHeader = styled.div`
  padding: 10px;
  background-color: var(--dropdown-background);
  color: var(--dropdown-text);
  border: 1px solid var(--dropdown-border);
  cursor: pointer;
  padding: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 50px;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: var(--dropdown-background);
  border: 1px solid var(--dropdown-border);
  border-top: none;
  color: var(--dropdown-text);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 3;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const Arrow = styled.div`
  height: 0;
  width: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid var(--dropdown-text);
  margin-left: 8px;
  border-radius: 4px;
`;
