import { useState } from 'react';
import editIcon from '@/assets/edit-icon.png';
import tickIcon from '@/assets/tick-icon.png';
import profileHeader from '@/assets/profile-header.jpg';
import { Wrapper, EditButton, Inner, UserDetails, Avatar, Name, Description } from './styles';
import HeaderList from './components/header-list';
import HeaderCard from './components/header-card';

interface HeaderProps {
  url: string;
  data: any;
  ranking: { rank: number; score: number };
  projectId: any;
}
const Header = ({ url, projectId, data, ranking }: HeaderProps) => {
  const [edit, setEdit] = useState(false);
  const [formEdited, setFormEdited] = useState(false);
  const [name, setName] = useState(data.username);
  const [avatar, setAvatar] = useState(data.appProfile.imageUrl);
  const [description, setDescription] = useState(data.userId);

  return (
    <Wrapper style={{ backgroundImage: `url(${profileHeader})` }}>
      <Inner>
        <EditButton>
          <img src={edit ? tickIcon : editIcon} alt="Icon" />
        </EditButton>
        <Avatar src={avatar} alt={name} />
        <UserDetails>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </UserDetails>
        <HeaderList rank={ranking.rank} score={ranking.score} />
        <HeaderCard rank={ranking.rank} />
      </Inner>
    </Wrapper>
  );
};

export default Header;
