import { Text } from './styles';

interface DataProps {
  text: string | number;
  color?: string;
  align?: string;
}
const Data = ({ text, color = 'black', align = 'center' }: DataProps) => (
  <Text color={color} align={align}>
    {text}
  </Text>
);

export default Data;
