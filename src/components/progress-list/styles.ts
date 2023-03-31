import styled, { keyframes} from 'styled-components';

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 16px;
  gap: 16px;
  --size: 128px;

`
export const Item = styled.li`
`



export const progressAnimation = (value: number) => keyframes`
  to {
    --progress-value: 0;
  }
  to {
    --progress-value: ${value};
  }
`;

interface CssProgressProps {
  value:  number;
}

export const ProgressContainer = styled.div<CssProgressProps>`

--progress-value: ${({value}) => value};
  width: 128px;
  height: 128px;
  margin: auto;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;


  background: 
    radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
    conic-gradient(lightgrey
 calc(var(--progress-value) * 1%), pink 0);
  animation: ${({value}) => progressAnimation(value)} 300ms ease-in-out;
  transition: all 300ms ease;
`;

export const Percentage = styled.div`
  counter-reset: percentage var(--progress-value);
  content: counter(percentage) '%';
`;

export const Progress = styled.progress`
  visibility: hidden;
  width: 0;
  height: 0;
`;



export const CssProgress = styled(ProgressContainer)`
`;


