import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm'
const Home = () => {
    return (
        <div class="grid-2">
            <div className="">
                <ContactForm />
            </div>
            <div className="">
                <Contacts />
            </div>
        </div>
    )
}

export default Home
