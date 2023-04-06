import { Wrapper, VerticalList } from './styles';
import Foo from '@/components/foo';

interface HeaderCardProps {
  rank: number;
}
const HeaderCard = ({ rank }: HeaderCardProps) => (
  <Wrapper>
    <VerticalList>
      <span>foo</span>
      <span>Level {rank + 1} </span>
    </VerticalList>

    <Foo progress={40} />
  </Wrapper>
);
export default HeaderCard;
