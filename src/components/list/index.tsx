import { Wrapper, Item } from './styles';
import Label from '../label';
import Data from '../data';
interface ListProps {
  list: { label: string, data: any }[];
}

const List = ({list}: ListProps) => <Wrapper>
    {list.map(({label, data}) => <Item>
<Label text={label}/>
<Data text={data}/>
    </Item>)}
  </Wrapper>


export default List