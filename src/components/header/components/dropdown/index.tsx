import { Key, useState } from 'react';
import { DropdownContainer, DropdownHeader, DropdownList, DropdownItem, Arrow } from './styles';

const options = ['Option 1', 'Option 2', 'Option 3'];

interface dropDownProps {
  setMethod: any;
  data: any;
}

const Dropdown = ({ setMethod, data }: dropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setMethod(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={handleDropdownClick}>
        {selectedOption || 'Select an option'}
        <Arrow />
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {data.slice(0, 3).map(({ name }: any, index: Key | null | undefined) => (
            <DropdownItem key={index} onClick={() => handleOptionClick(name)}>
              {name}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
