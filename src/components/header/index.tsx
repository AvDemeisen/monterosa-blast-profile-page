import { useState } from 'react';
import editIcon from '../../assets/edit-icon.png';
import tickIcon from '../../assets/tick-icon.png';
import {
  Wrapper,
  EditButton,
  Inner,
  UserDetails,
  Avatar,
  Name,
  Description,
  VerticalList,
  ListItem,
  ItemLabel,
  ItemData,
} from './styles';
import HeaderCard from '../header-card';

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
    <Wrapper>
      <Inner>
        <EditButton>
          <img src={edit ? tickIcon : editIcon} alt="Icon" />
        </EditButton>
        <Avatar src={avatar} alt={name} />
        <UserDetails>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </UserDetails>
        <VerticalList>
          <ListItem>
            <ItemData>{ranking.score}</ItemData>
            <ItemLabel>Score</ItemLabel>
          </ListItem>
          <ListItem>
            <ItemData>{ranking.rank}</ItemData>
            <ItemLabel>Position</ItemLabel>
          </ListItem>
          <ListItem>
            <ItemData>###</ItemData>
            <ItemLabel>Streak</ItemLabel>
          </ListItem>
        </VerticalList>
        <HeaderCard rank={ranking.rank} />
      </Inner>
    </Wrapper>
  );
};

export default Header;
