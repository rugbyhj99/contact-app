import React, { useEffect, useState,  } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'


const ContactList = () => {
    const { contactList, searchBoxText } = useSelector(state => ({ contactList: state.contactList, searchBoxText: state.searchBoxText }));
    const [ filterName, setFilterName ] = useState([]);
    console.log(contactList);
    
    
    useEffect( () => {
      if (searchBoxText !== ""){
        let filterList = contactList.filter((item) => item.name.includes(searchBoxText));
        setFilterName(filterList);
      } else {
        setFilterName(contactList);
      }
    }, [searchBoxText, contactList])
    

  return (
    <div >
        <SearchBox />
        {
          filterName.map((item, index) => (
            <ContactItem item={item} key={index} />
          ))
        }

    </div>
  )
}

export default ContactList