import Label from '@/components/text/label';
import Data from '@/components/text/data';
import Progress from '@/components/progress';

import { Wrapper, Item, Card, CardInner } from './styles';

interface RewardsProps {
  list: { label: string; data: string; total: string; progress: any }[];
}

const Rewards = ({ list }: RewardsProps) => (
  <Wrapper>
    {list.map(({ label, data, total, progress }, i) => (
      <Item key={i}>
        <Card completed={i % 2 == 0}>
          <CardInner>
            <Label text={label} color="white" />
            <div>
              <Data text={`${data}/`} color="white" />
              <Data text={total} color="grey" />
            </div>
          </CardInner>
          <Progress progress={progress} />
        </Card>
      </Item>
    ))}
  </Wrapper>
);

export default Rewards;
