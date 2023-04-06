import { Wrapper } from './styles';

interface ProgressProps {
  progress: number;
}

const Progress = ({ progress }: ProgressProps) => <Wrapper progress={progress} />;

export default Progress;
