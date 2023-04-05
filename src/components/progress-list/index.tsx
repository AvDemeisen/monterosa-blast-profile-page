import { Wrapper, Item, ProgressContainer, Percentage, Progress } from './styles';
import Label from '../label';
import Data from '../data';
interface ListProps {
  data: { 
    badgeId: string; 
    description: string; 
    name: string;
  }[];
}

const ProgressList = ({data}: ListProps) => <Wrapper>
  {data.map(({badgeId, description, name}, index) => 
    <Item key={badgeId}>
      <ProgressContainer value={index * 10}>
        <Label text={name}/>
        <Data text={description}  color="grey"/>
        <Progress id="css"  max="100"  value={index * 10} />
      </ProgressContainer>
    </Item>
    )}
  </Wrapper>


export default ProgressList

