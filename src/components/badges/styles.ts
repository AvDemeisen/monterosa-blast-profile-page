import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 8px;
  gap: 8px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid grey;
  padding: 8px;
`;

export const Image = styled.img`
  height: 96px;
  width: 96px;
  border-radius: 50%;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Icon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 4px;
`;
