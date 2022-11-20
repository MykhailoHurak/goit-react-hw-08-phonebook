import styles from '../ContactFilter/ContactFilter.module.css';

import { Input } from '@mui/material';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'redux/Contacts/phonebook-actions';


const ContactFilter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <p className={styles.p}>Find contacts by name</p>
      <Input
        className={styles.input}
        type="text"
        value={filter}
        onChange={e => {
          dispatch(actions.setFilter(e.target.value));
        }}
      />
    </Fragment>
  );
};

export default ContactFilter;
