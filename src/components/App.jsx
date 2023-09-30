import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BallTriangle } from  'react-loader-spinner'
import { ContactsList } from "./ContactsList/ContactsList";
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactsFilter } from "./ContactsFilter/ContactsFilter";
import { Section } from "./Section.styled";
import { fetchContacts } from "redux/operations";

export const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error)


   return(
    <>
      <Section>
        <AddContactForm/>
      </Section>
      <Section>
        <h2>Contacts:</h2>
        <ContactsFilter/>
        {isLoading && !error && <BallTriangle/>}
        {error && <p>{error.message}</p>}
        <ContactsList />
      </Section>
    </>)}