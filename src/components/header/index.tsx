import { useState } from 'react';
import editIcon from '../../assets/edit-icon.png';
import tickIcon from '../../assets/tick-icon.png';
import { Wrapper, EditButton, UserDetails, Avatar, Name, Description, VerticalList, ListItem, ItemLabel, ItemData } from './styles'

interface HeaderProps {
  url: string;
data: any
  setMethod: any;
}
const Header = ({ url, data, setMethod }: HeaderProps) => {
  const [edit, setEdit] = useState(false)
  const [formEdited, setFormEdited] = useState(false);
  const [name, setName] = useState(data.name);
  const [avatar, setAvatar] = useState(data.avatar);
  const [description, setDescription] = useState(data.description);

  const clickHandler = () => {
    if (formEdited) {
      saveChanges();
    }
    setEdit(!edit);
  }
  const projectId = 'e1940dd8-845c-49d0-82ee-f60d3e150370';
  const externalId = '99f7898b3371001423147fef24c732012b28dc1b89d3006716e473ac236fd91a';
  const saveChanges = async () => {

    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        strategy: "simplified",
        provider: "noLogin",
        projectId,
        externalId,
        data: {
          appProfile: {
            events: {
              match_one: {
                score: 123,
                claims: [
                  "pro",
                  "lucky_dip"
                ]
              },
              match_x: {
                screen_name: description,
                avatar: avatar,
                level: 99
              }
            },
          }
        }
      })
    });

    if (!res.ok) {
      console.error(`Failed to save user data: ${res.status} - ${res.statusText}`);
    } else {
      setEdit(!edit);
      setFormEdited(false);
      setMethod({ ...data, name, description });
    }
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setFormEdited(true);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
    setFormEdited(true);
  };

  return (
    <Wrapper>
      <UserDetails>
        <EditButton onClick={edit ? saveChanges : clickHandler}>
        <img src={edit ? tickIcon : editIcon} alt="Icon" />
        </EditButton>
        <Avatar src={avatar} alt={name}/>
        <Name 
          disabled
          edit={false}  
          onChange={handleNameChange}
          value={name} 
        />
        <Description 
          disabled={!edit} 
          edit={edit} 
          onChange={handleDescriptionChange}
          value={description} 
        />
      </UserDetails>
      <VerticalList>
        <ListItem>
          <ItemData>###</ItemData>
          <ItemLabel>Label</ItemLabel>
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