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
  const [description, setDescription] = useState(data.description);

  const clickHandler = () => {
    if (formEdited) {
      saveChanges();
    }
    setEdit(!edit);
  }

  const saveChanges = async () => {

    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data, name, description })
    });

    if (!res.ok) {
      console.error(`Failed to save user data: ${res.status} - ${res.statusText}`);
    } else {
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
        <Avatar src={data.avatar} alt={data.name}/>
        <Name 
          disabled={!edit} 
          edit={edit}  
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