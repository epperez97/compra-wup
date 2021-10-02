import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { Badge, Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import '../assets/styles/badge.css'

const Header = ({total, lenCar, buildMsg}) => {
    return (
        <div>
            <Navbar color="success">
                <Nav >
                    <NavItem>
                        <NavLink disable="true">Precio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disable="true">{total}</NavLink>
                    </NavItem>
                    <NavItem >
                        <a href={buildMsg()} target="_blank" rel="noreferrer noopener">
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
                </Nav>
            </Navbar>
        </div>
    )
}
export default Header;