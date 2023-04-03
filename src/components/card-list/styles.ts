import styled from 'styled-components'

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`
export const Item = styled.li`
`
export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
padding: 8px;
gap: 8px;

width: 100%;
height: 96px;
color: white;
background: #000000;
border-radius: 8px;
`;

export const CardInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
interface ProgressProps {
  progress: number;
}
export const Progress = styled.div<ProgressProps>`
width: 100%;
height: 8px;

background: rgba(255, 255, 255, 0.2);
border-radius: 8px;
background: ${({ progress }) =>
    `linear-gradient(90deg,white ${progress}%, rgba(255, 255, 255, 0.25) 0)`};
`