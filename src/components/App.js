import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper } from './App.styled';

export const App = () => {
  return (
      <Wrapper>
        <h1> Phonebook</h1>
        <ContactForm />
        <h1> Contacts</h1>
        <Filter />
        <ContactList />
      </Wrapper>
  );
};
