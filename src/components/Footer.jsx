import React, { useState } from 'react';
import '@styles/components/Footer.scss';
import ricky_morty from '@images/ricky_morty.png'

const Footer = () => {

    const [animation, setAnimation] = useState(false)

    const handleClick = () => {
        if(!animation) {
            setAnimation(!animation)
            setTimeout(()=>{
                setAnimation(false)
            }, 5000)
        }
    }

    return (
        <footer className='Footer'>
            <img 
                className={animation ? 'Footer--characters Footer--characters-animation' : 'Footer--characters'} 
                onClick={handleClick}
                src={ricky_morty} 
                alt="ricky&morty"
             />
        </footer>
    );
}

export default Footer;