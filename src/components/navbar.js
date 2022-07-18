import { FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Navbar = () => {

    return (

        <nav>

                <div className='options'>

                    <a className='hover-underline-animation'>
                        Home
                    </a>

                    <a className='hover-underline-animation'>
                        English
                    </a>

                    <a className='hover-underline-animation'>
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