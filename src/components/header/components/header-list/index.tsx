import { Wrapper, ListItem, ItemData, ItemLabel } from './styles';

interface HeaderListProps {
  rank: number;
  score: number;
  streak: number;
}

const HeaderList = ({ score, rank, streak }: HeaderListProps) => (
  <Wrapper>
    <ListItem>
      <ItemData>{score}</ItemData>
      <ItemLabel>Score</ItemLabel>
    </ListItem>
    <ListItem>
      <ItemData>#{rank}</ItemData>
      <ItemLabel>Position</ItemLabel>
    </ListItem>
    <ListItem>
      <ItemData>{streak}</ItemData>
      <ItemLabel>Streak</ItemLabel>
    </ListItem>
  </Wrapper>
);
export default HeaderList;
