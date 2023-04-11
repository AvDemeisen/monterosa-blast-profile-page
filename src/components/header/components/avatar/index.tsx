import { Wrapper } from './styles';

interface AvatarProps {
  isActive?: boolean;
  src: string;
  alt: string;
}

const Avatar = ({ isActive = true, src, alt }: AvatarProps) => (
  <Wrapper isActive={isActive} src={src} alt={alt} />
);
export default Avatar;
