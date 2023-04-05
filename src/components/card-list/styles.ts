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
background: #E83E7E;
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
