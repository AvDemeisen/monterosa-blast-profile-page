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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

interface DescriptionProps {
  bold?: boolean;
}

export const Description = styled.span<DescriptionProps>`
  font-size: 14px;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  width: 200px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;
