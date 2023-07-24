import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import SciFiLogo from '../assets/wasteland_logo.jpg';

function Navigation() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const NavBar = styled.nav`
        background-color: #313f45;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        position: sticky;
        top: 0;
        z-index: 20;
        margin-bottom: 15px;
    `
    const NavContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80px;
        max-width: 1500px;
    `
    const NavBarLink = styled(NavLink)`
        color: #ffdd40;
        text-decoration: none;
        padding: 0.5rem 1rem;
        height: 100%;
        border-bottom: 3px solid transparent;
    `
    const ListContainer = styled.ul`
        display: flex;
        list-style: none;
        text-align: center;
        margin-right: 2rem;
    `
    const ListItems = styled.li` 
    line-height: 40px;
    margin-right: 1rem;
    `
    const LogoContainer = styled.div`
        display: block;
        max-width: 80px;
        max-height: 80px;
    `
    const NavIcon = styled.div`
        display: none;
    `
    const NavLogo = styled.img`
        padding: 2px
        height: 76px;
        width: 76px;
        object-fit: contain;

    `
    return (
        <>
        <NavBar id='navigation-bar'>
            <LogoContainer>
                    <NavLogo src={SciFiLogo} />
            </LogoContainer>
          <NavContainer className="nav-container">

            <NavBarLink exact to="/" className="nav-logo">
              Sci-Fi Wasteland
            </NavBarLink>
  
            <ListContainer className={click ? "nav-menu active" : "nav-menu"}>
              <ListItems className="nav-item">
                <NavBarLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavBarLink>
              </ListItems>
              <ListItems className="nav-item">
                <NavBarLink
                  exact
                  to="/mods"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Mods
                </NavBarLink>
              </ListItems>
              <ListItems className="nav-item">
                <NavBarLink
                  exact
                  to="/donate"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Donate
                </NavBarLink>
              </ListItems>
              <ListItems className="nav-items">
                <NavBarLink
                    to='https://discord.gg/pm7cP7YC2Y'
                    target="_blank"
                    activeClassName="active"
                    className='nav-links'
                    onClick={handleClick}
                >
                    <i className="fa-brands fa-discord fa-bounce" />
                </NavBarLink>
              </ListItems>
            </ListContainer>

            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </NavContainer>
        </NavBar>
      </>
    )
}

export default Navigation;