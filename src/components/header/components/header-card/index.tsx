import { Wrapper, VerticalList } from './styles';
import Foo from '@/components/foo';
import levelBg from '@/assets/level-bg.jpg';
interface HeaderCardProps {
  rank: number;
}
const HeaderCard = ({ rank }: HeaderCardProps) => (
  <Wrapper style={{ backgroundImage: `url(${levelBg})` }}>
    <VerticalList>
      <span>foo</span>
      <span>Level {rank + 1} </span>
    </VerticalList>

    <Foo progress={40} />
  </Wrapper>
);
export default HeaderCard;
