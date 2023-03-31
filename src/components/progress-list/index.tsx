import { Wrapper, Item, ProgressContainer, Percentage, Progress } from './styles';
import Label from '../label';
import Data from '../data';
interface ListProps {
  list: { label: string, data: string, total: string, progress: number}[];
}

const ProgressList = ({list}: ListProps) => <Wrapper>
  {list.map(({label, data, total, progress}) => 
    <Item>
            <ProgressContainer value={progress}>
             <Label text={label}/>
 <>      
 <Data text={`${data}/`}  color="black"/>
 <Data text={total}  color="grey"/>
 </>
        <Progress id="css"  max="100"  value={progress} />
      </ProgressContainer>
    </Item>
    )}
  </Wrapper>


export default ProgressList

