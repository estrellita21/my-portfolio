import { Link } from 'react-scroll';
import { BiHomeAlt, BiTrophy, BiUser } from "react-icons/bi";
import { BsTelephoneMinus } from "react-icons/bs";

function Nav() {
  return (
    <div className="Nav">
        <ul>
            <Link 
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500} 
                scrolling='horizontal'
                >

                <li>
                    <BiHomeAlt className='menu-icon'/>
                    Home
                </li>
            </Link>

            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500} >

                <li>
                    <BiUser className='menu-icon'/>
                    About
                </li>
            </Link>

            <Link
                activeClass="active"
                to="achievement"
                spy={true}
                smooth={true}
                duration={500} >

                <li>
                    <BiTrophy className='menu-icon'/>
                    Achievements
                </li>
            </Link>

            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500} >

                <li>
                    <BsTelephoneMinus className='menu-icon'/>
                    Contact
                </li>
            </Link>
        </ul>
    </div>
  );
}

export default Nav;
