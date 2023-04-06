import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-decoration: none;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 16px 0;
`;
export const ItemLabel = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--header-text);
  opacity: 0.54;
`;

export const ItemData = styled.h4`
  font-size: 18px;
  font-weight: 800;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--header-text);
  margin: 0;
`;
