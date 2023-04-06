import { Wrapper, VerticalList } from './styles';
import Foo from '@/components/foo';
import levelBg from '@/assets/level-bg.jpg';
interface HeaderCardProps {
  rank: number;
}

const get_last_two_digits = (number: number): number => number % 100;

const HeaderCard = ({ rank }: HeaderCardProps) => (
  <Wrapper style={{ backgroundImage: `url(${levelBg})` }}>
    <VerticalList>
      <span>foo</span>
      <span>Level {rank / 10} </span>
    </VerticalList>

    <Foo progress={get_last_two_digits(rank)} />
  </Wrapper>
);
export default HeaderCard;
