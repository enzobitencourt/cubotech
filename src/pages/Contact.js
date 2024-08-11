import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }


    return (
        <>
            <h2>Contact Page</h2>
            <button onClick={goToHome}>Aqui 2</button>
        </>
    );
}

export default Contact;
