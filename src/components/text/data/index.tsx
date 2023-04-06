import { Text } from './styles';

interface DataProps {
  text: string | number;
  color?: string;
}
const Data = ({ text, color = 'black' }: DataProps) => <Text color={color}>{text}</Text>;

export default Data;
