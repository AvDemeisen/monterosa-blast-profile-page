import { Wrapper, EditButton, UserDetails, Avatar, Name, Description, VerticalList, ListItem, ItemLabel, ItemData } from './styles'

interface HeaderProps {
data: any
  setMethod: any;
}

const Header = ({data, setMethod}: HeaderProps) => {
  const handleTextChange = (e: any, type: string) => {
    const newName = e.target.value;
    setMethod({ ...data, [type]: newName });
  };

  return (
    <Wrapper>
      <UserDetails>
        <EditButton />
        <Avatar src={data.avatar} alt={data.name}/>
        <Name value={data.name} onChange={(e) => handleTextChange(e, 'name')} />
        <Description value={data.description} onChange={(e) => handleTextChange(e, 'description')} />
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