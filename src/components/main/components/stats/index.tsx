import { Wrapper, Item } from './styles';
import Label from '../../../../components/text/label';
import Data from '../../../../components/text/data';
interface StatsProps {
  data: {
    achievementId: string;
    description: string;
    name: string;
  }[];
}

const Stats = ({ data }: StatsProps) => (
  <Wrapper>
    {data.map(({ name, description, achievementId }) => (
      <Item key={achievementId}>
        <Label text={name} opacity={'0.54'} />
        <Data text={description} />
      </Item>
    ))}
  </Wrapper>
);

export default Stats;
