import React from 'react'
import "./Navbar.css"
import avatar from "../../../dashFotos/avatar.svg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faHome, faUtensils, faPhone, faUsers, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'



const Navbar = ({sideBarOpen, openSideBar}) => {
	return (
		<nav className="navbar">
			<div className="nav_icon" onClick = {() => openSideBar()}>
				<FontAwesomeIcon icon={faHome} className="icono-nav-icon"/>
			</div>
			<div className="navbar__left">
				<a>Suscriptores</a>
				<a>Video</a>
				<a className="active_link">Admin</a>
			</div>
			<div className="navbar__right">
				<a>
					<FontAwesomeIcon icon={faHome} className="icono-navbar-right"/>
				</a>
				<a>
					<FontAwesomeIcon icon={faHome} className="icono-navbar-right"/>
				</a>
				<a>
					<img width="30" src={avatar} alt="avatar"/>
				</a>
			</div>
		</nav>
	)
}

export default Navbar