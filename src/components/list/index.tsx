import { Wrapper, Item } from './styles';
import Label from '../label';
import Data from '../data';
interface ListProps {
  data: { 
    achievementId: string;
    description: string;
    name: string; 
  }[];
}

const List = ({data}: ListProps) => <Wrapper>
    {data.map(({name, description, achievementId}) => <Item key={achievementId}>
<Label text={name}/>
<Data text={description}/>
    </Item>)}
  </Wrapper>


export default List