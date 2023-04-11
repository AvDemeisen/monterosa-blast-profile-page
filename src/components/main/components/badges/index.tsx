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

import one from '@/assets/badges/1.png';
import two from '@/assets/badges/2.png';
import three from '@/assets/badges/3.png';

const imageMap = {
  1: one,
  2: two,
  3: three,
} as any;

const Badges = ({ data }: ListProps) => {
  const completed = true;
  return (
    <Wrapper>
      {data.map(({ badgeId, description, name, image }, i) => (
        <Item key={badgeId}>
          {completed ? <Image src={imageMap[i + 1]} /> : <Empty />}

          <>
            <Label text={name} color="black" />
            <Data text={description} color="grey" />
          </>

          <Status>
            <Icon src={completed ? completedIcon : lockedIcon} alt="Icon" />
            <Data
              text={completed ? 'Completed' : 'Incomplete'}
              color={completed ? 'green' : 'black'}
            />
          </Status>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Badges;
