import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { Text, Wrapper } from './Filter.styled';
import { updateFilter } from '../Redux/contactsSlice';
export const Filter = () => {
  const dispatch = useDispatch();

  const onInputChange = e => {
    const filterValue = e.target.value;
    dispatch(updateFilter(filterValue));
  };
  return (
    <Wrapper>
      <Text>Find contacts by name</Text>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
