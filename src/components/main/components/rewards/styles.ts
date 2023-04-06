import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;
export const Item = styled.li``;

interface CardProps {
  completed: boolean;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 8px;
  gap: 8px;

  width: 100%;
  height: 96px;
  color: var(--card-text);
  background-color: ${({ completed }) => (completed ? 'var(--complete)' : 'var(--incomplete)')};
  border-radius: 8px;
`;

export const CardInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
interface ProgressProps {
  progress: number;
}
