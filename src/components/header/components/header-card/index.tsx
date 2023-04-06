import { Wrapper, VerticalList, DataContainer } from './styles';
import Foo from '@/components/foo';
import levelBg from '@/assets/level-bg.jpg';
import Data from '@/components/text/data';
interface HeaderCardProps {
  rank: number;
}

const get_last_two_digits = (number: number): number => number % 100;

const HeaderCard = ({ rank }: HeaderCardProps) => (
  <Wrapper style={{ backgroundImage: `url(${levelBg})` }}>
    <VerticalList>
      <DataContainer>
        <Data text={`${rank * 10} /`} color="pale" />
        <Data text={'/ 10,000xp'} color="white" />
      </DataContainer>

      <span>Level {rank / 10} </span>
    </VerticalList>

    <Foo progress={get_last_two_digits(rank)} />
  </Wrapper>
);
export default HeaderCard;
