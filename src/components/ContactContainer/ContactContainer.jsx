import styles from '../ContactContainer/ContactContainer.module.css';

import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import ContactForm from '../ContactForm/ContactForm';

import UserMenu from 'components/UserMenu';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

const ContactConatiner = props => {
  const token = useSelector(state => state.contacts.token);
  return (
    <>
      {token && (
        <Fragment>
          <div className={styles.body}>
            <div className={styles.left}>
              <UserMenu />
              <h2>Phonebook</h2>
              <ContactForm />
            </div>
            <div className={styles.right}>
              <h2>Contacts</h2>
              <ContactFilter />
              <ContactList data={props.data} />
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
};
ContactConatiner.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactConatiner;
