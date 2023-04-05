import { useState } from 'react';
import editIcon from '../../assets/edit-icon.png';
import tickIcon from '../../assets/tick-icon.png';
import { Wrapper, EditButton, UserDetails, Avatar, Name, Description, VerticalList, ListItem, ItemLabel, ItemData } from './styles'

interface HeaderProps {
  url: string;
  data: any

  projectId: any;
}
const Header = ({ url, projectId, data }: HeaderProps) => {
  const [edit, setEdit] = useState(false)
  const [formEdited, setFormEdited] = useState(false);
  const [name, setName] = useState(data.username);
  const [avatar, setAvatar] = useState(data.appProfile.imageUrl);
  const [description, setDescription] = useState(data.userId);

  // const clickHandler = () => {
  //   if (formEdited) {
  //     saveChanges();
  //   }
  //   setEdit(!edit);
  // }

  // const saveChanges = async () => {

  //   const res = await fetch(url, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       strategy: "simplified",
  //       provider: "noLogin",
  //       projectId,
  //       data: {
  //         appProfile: {
  //           events: {
  //             match_one: {
  //               score: 123,
  //             },
  //             match_x: {
  //               screen_name: description,
  //               avatar: avatar,
  //               level: 99
  //             }
  //           },
  //         }
  //       }
  //     })
  //   });

  //   if (!res.ok) {
  //     console.error(`Failed to save user data: ${res.status} - ${res.statusText}`);
  //   } else {
  //     setEdit(!edit);
  //     setFormEdited(false);
  //     setMethod({ ...data, name, description });
  //   }
  // }

  // const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  //   setFormEdited(true);
  // };

  // const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDescription(event.target.value);
  //   setFormEdited(true);
  // };

  return (
    <Wrapper>
      <UserDetails>
        {/* <EditButton>
        <img src={edit ? tickIcon : editIcon} alt="Icon" />
        </EditButton> */}
        <Avatar src={avatar} alt={name}/>
        <Name 
          disabled
          edit={false}  
          // onChange={handleNameChange}
          value={name} 
        />
        <Description 
          disabled={!edit} 
          edit={edit} 
          // onChange={handleDescriptionChange}
          value={description} 
        />
      </UserDetails>
      <VerticalList>
        <ListItem>
          <ItemData>{data.level}</ItemData>
          <ItemLabel>level</ItemLabel>
        </ListItem>
        <ListItem>
          <ItemData>###</ItemData>
          <ItemLabel>Label</ItemLabel>
        </ListItem>
        <ListItem>
          <ItemData>###</ItemData>
          <ItemLabel>Label</ItemLabel>
        </ListItem>
      </VerticalList>
    </Wrapper>
)
}

export default Header