import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { Badge, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import '../assets/styles/badge.css'
import logo from '../assets/logo.jpg'

const Header = ({total, lenCar, buildMsg}) => {
    return (
        <div>
            <Navbar className="navbar fixed-top cart" color="primary">
                <NavbarBrand>
                    <img src={logo} alt="logo" width="90" height="90"></img>
                </NavbarBrand>
                    <NavItem className="px-10">
                        <h3 disable="true">Precio</h3>
                    </NavItem>
                    <NavItem>
                        <h3 >{total}</h3>
                    </NavItem>
                    <NavItem className="mar">
                        <a  href={buildMsg()} target="_blank" rel="noreferrer noopener">
                             <FontAwesomeIcon 
                                icon={faShoppingCart} 
                                size="3x"
                                flip="horizontal" 
                                color="black"
                            />
                            <span
                                className="rounded-badge"
                            >
                                {lenCar}
                            </span>
                        </a>
                    </NavItem>
            </Navbar>
        </div>
    )
}
export default Header;