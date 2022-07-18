import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { i18n } = useTranslation();

    function changeLanguage(language) {
        i18n.changeLanguage(language);
      }

    return (

        <nav>

                <div className='options'>

                    <a className='hover-underline-animation'>
                        Home
                    </a>

                    <a className='hover-underline-animation' onClick={() => changeLanguage("en")}>
                            English
                    </a>

                    <a className='hover-underline-animation' onClick={() => changeLanguage("es")}>
                            Español
                    </a>

                </div>

                <div className='options2'>

                    <a href='https://www.linkedin.com/in/omar-alejandro-s%C3%A1nchez-cuevas-91b521216/' target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                    </a>

                    <a href='https://twitter.com/dev_osanchez' target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>

                </div>

        </nav>

    );

};

export default Navbar;