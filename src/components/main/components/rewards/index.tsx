import Data from '@/components/text/data';
import Progress from '@/components/foo';

import {
  Wrapper,
  Item,
  Card,
  CardInner,
  TextContainer,
  DataContainer,
  Description,
} from './styles';

interface RewardsProps {
  list: {
    pointId: string;
    description: string;
    name: string;
    score: number;
    total: number;
  }[];
}

const percentage = (partialValue: number, totalValue: number): number => {
  return (100 * partialValue) / totalValue;
};

const Rewards = ({ list }: RewardsProps) => (
  <Wrapper>
    {list.map(({ pointId, description, name, score, total = 100 }, i) => (
      <Item key={pointId}>
        <Card completed={score >= total}>
          <CardInner>
            <TextContainer>
              <Description bold>{name}</Description>
              <Description>{description}</Description>
            </TextContainer>

            <DataContainer>
              <Data text={`${score} `} color="grey" />
              <Data text={` / ${total}`} color="white" />
            </DataContainer>
          </CardInner>
          <Progress progress={percentage(score, total)} />
        </Card>
      </Item>
    ))}
  </Wrapper>
);

export default Rewards;
