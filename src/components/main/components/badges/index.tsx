import completedIcon from '@/assets/completed-icon.png';
import lockedIcon from '@/assets/locked-icon.png';
import Label from '@/components/text/label';
import Data from '@/components/text/data';
import { Wrapper, Item, Image, Status, Icon, Empty } from './styles';

interface ListProps {
  data: {
    badgeId: string;
    description: string;
    name: string;
    image: string;
  }[];
}

const Badges = ({ data }: ListProps) => (
  <Wrapper>
    {data.map(({ badgeId, description, name, image }, i) => (
      <Item key={badgeId}>
        {i % 2 == 0 ? <Image src="https://placehold.co/96" /> : <Empty />}

        <>
          <Label text={name} color="black" />
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

export default Badges;
