import completedIcon from '../../assets/completed-icon.png';
import lockedIcon from '../../assets/locked-icon.png';
import { Wrapper, Item, Image, Status, Icon, Empty } from './styles';
import Label from '../label';
import Data from '../data';
interface ListProps {
  data: {
    badgeId: string;
    description: string;
    name: string;
  }[];
}

const ProgressList = ({ data }: ListProps) => (
  <Wrapper>
    {data.map(({ badgeId, description, name }, i) => (
      <Item key={badgeId}>
        {i % 2 == 0 ? <Image src="https://placehold.co/96" /> : <Empty />}

        <>
          <Label text={name} />
          <Data text={description} color="grey" />
        </>

        <Status>
          <Icon src={i % 2 == 0 ? completedIcon : lockedIcon} alt="Icon" />
          <Data
            text={i % 2 == 0 ? 'Completed' : 'Incomplete'}
            color={i % 2 == 0 ? 'green' : 'black'}
          />
        </Status>
      </Item>
    ))}
  </Wrapper>
);

export default ProgressList;
