import { Wrapper, VerticalList, Data } from './styles';
import Progress from '../Progress';

interface HeaderCardProps {
  rank: number;
}
const HeaderCard = ({ rank }: HeaderCardProps) => (
  <Wrapper>
    <VerticalList>
      <span>foo</span>
      <span>Level {rank + 1} </span>
    </VerticalList>

    <Progress progress={40} />
  </Wrapper>
);
export default HeaderCard;
