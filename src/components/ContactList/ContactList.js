import { Wrapper, Item } from './ContactList.styled';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdPerson, IoIosBackspace } from 'react-icons/io';
import { deleteContact } from 'components/Redux/contactsSlice';
import { getContacts, getFilter } from 'components/Redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);
  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );
  return (
    <>
      <Wrapper>
        {visibleContacts.map(contact => (
          <Item key={contact.id}>
            <p>
              <span>
                <IoMdPerson />
              </span>
              {contact.name}: {contact.number}
            </p>

            <Button
              type="button"
              onClick={() => handleDeleteButton(contact.id)}
              variant="outlined"
              startIcon={<IoIosBackspace />}
              size="small"
            >
              Delete
            </Button>
          </Item>
        ))}
      </Wrapper>
    </>
  );
};
