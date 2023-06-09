import { useEffect, useState } from 'react';
import editIcon from '@/assets/edit-icon.png';
import one from '@/assets/badges/1.png';
import two from '@/assets/badges/2.png';
import three from '@/assets/badges/3.png';
import profileHeader from '@/assets/profile-header.jpg';
import { Wrapper, EditButton, Inner, UserDetails, Name, Description, Button } from './styles';
import HeaderList from './components/header-list';
import HeaderCard from './components/header-card';
import Carousel from './components/carousel';
import Avatar from './components/avatar';
import DropDown from './components/dropdown';

interface HeaderProps {
  url: string;
  data: any;
  ranking: { rank: number; score: number };
  projectId: any;
  badges: any;
}
const Header = ({ url, projectId, data, badges, ranking }: any) => {
  const [edit, setEdit] = useState(false);
  const [formEdited, setFormEdited] = useState(false);
  const [name, setName] = useState(data.username);
  const [avatar, setAvatar] = useState(data.appProfile.imageUrl);
  const [description, setDescription] = useState(data.userId);
  const [carouselList, setCarouselList] = useState();

  const imageMap = {
    1: one,
    2: two,
    3: three,
  } as any;

  const modifiedBadges = badges.map((badge: any, index: number) => ({
    ...badge,
    image: badge.badgeId === 0 ? badge.image : imageMap[index + 1],
  }));
  const newBadge = { badgeId: 0, description, name, image: avatar };
  modifiedBadges.push(newBadge);

  useEffect(() => {
    if (badges) {
      const modifiedBadges = badges.slice(0, 3).map((badge: any, index: number) => ({
        ...badge,
        image: imageMap[index + 1],
      }));

      const newBadge = { badgeId: 0, description, name, image: avatar };
      modifiedBadges.push(newBadge);
      setCarouselList(modifiedBadges);
    }
  }, [badges]);

  return (
    <Wrapper style={{ backgroundImage: `url(${profileHeader})` }}>
      <Inner>
        {edit ? null : (
          <EditButton onClick={() => setEdit(!edit)}>
            <img src={editIcon} alt="Icon" />
          </EditButton>
        )}
        {edit && carouselList ? (
          <Carousel badges={carouselList} setMethod={setAvatar} />
        ) : (
          <Avatar src={avatar} alt={name} />
        )}
        <UserDetails>
          <Name
            value={name}
            edit={edit}
            disabled={!edit}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {edit ? (
            <DropDown setMethod={setDescription} data={badges} />
          ) : (
            <Description>{description}</Description>
          )}
        </UserDetails>
        <HeaderList rank={ranking.rank} score={ranking.score} streak={ranking.streak} />
        {edit ? (
          <Button onClick={() => setEdit(!edit)}>Save Changes</Button>
        ) : (
          <HeaderCard rank={ranking.score} />
        )}
      </Inner>
    </Wrapper>
  );
};

export default Header;
