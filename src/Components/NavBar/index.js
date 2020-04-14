import React from 'react'
import {Link} from 'react-router-dom'
import {NavBarSection, ListItem, UlList, Anchor, Logo, LogoText} from './style'

const NavBar = () => {
    return(
        
        <NavBarSection>           
            <div className="container">               
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>               
                <UlList>
                    <ListItem><Link className="StyledLink" to="/">Home</Link></ListItem>
                    <ListItem><Anchor>Work</Anchor></ListItem>
                    <ListItem><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem><Anchor>Resume</Anchor></ListItem>
                    <ListItem><Anchor>About</Anchor></ListItem>
                    <ListItem><Link className="StyledLink" to="/contact">Contact</Link></ListItem>
                </UlList>              
            </div>
        </NavBarSection>
    )
}

export default NavBar