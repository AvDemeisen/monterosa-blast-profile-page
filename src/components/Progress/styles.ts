import styled from 'styled-components';

interface ProgressProps {
  progress: number;
}

export const Wrapper = styled.div<ProgressProps>`
  width: 100%;
  height: 8px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: ${({ progress }) =>
    `linear-gradient(90deg,white ${progress}%, rgba(255, 255, 255, 0.25) 0)`};
`;
