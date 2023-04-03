import { Wrapper, Item, Card, CardInner, Progress } from './styles';
import Label from '../label';
import Data from '../data';
interface CardListProps {
  list: { label: string, data: string, total: string, progress: any }[];
}

const CardList = ({list}: CardListProps) => <Wrapper>
    {list.map(({label, data, total, progress}) => <Item key={label}>

<Card>
  <CardInner>
 
    <Label text={label} color="white"/>
<div>
<Data text={`${data}/`}  color="white"/>
<Data text={total}  color="grey"/>
</div>
  </CardInner>
  <Progress progress={progress} />
</Card>

    </Item>)}
  </Wrapper>


export default CardList