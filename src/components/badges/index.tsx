import completedIcon from '../../assets/completed-icon.png';
import { Wrapper, Item, Image, Status, Icon} from './styles';
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
  {data.map(({badgeId, description, name}) => 
    <Item key={badgeId}>
        <Image src="https://placehold.co/96" />
        <>
        <Label text={name}/>
        <Data text={description}  color="grey"/>
        </>

        <Status>
        <Icon src={completedIcon} alt="Icon" />
        <Data text={'completed'}  color="green"/>
        </Status>

    </Item>
    )}
  </Wrapper>


export default ProgressList

