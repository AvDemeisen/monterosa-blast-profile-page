import { useState } from 'react';
import { DropdownContainer, DropdownHeader, DropdownList, DropdownItem } from './styles';

const options = ['Option 1', 'Option 2', 'Option 3'];

interface dropDownProps {
  setMethod: any;
}

const Dropdown = ({ setMethod }: dropDownProps) => {
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
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
