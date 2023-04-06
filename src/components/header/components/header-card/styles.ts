import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 72px;
  width: 100%
  border-radius: 8px;
  padding: 8px;
  background: var(--header-card-background);
  background-position: center center;
  border-radius: 8px;
  background-size: cover;
  gap: 8px;
`;

export const VerticalList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Data = styled.span`
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0em;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;
