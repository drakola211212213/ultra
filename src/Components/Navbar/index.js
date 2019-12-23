import React from 'react';
import {Link} from 'react-router-dom';
import {NavBarSection,Logo,LogoText,UlList,ListItem,Anchor} from './style.js';    

      
      
      const Navbar = () => {
        
          return (
            <NavBarSection>
                  
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
       
                <UlList className="ul-list">
                    <ListItem className="list-item"><Link className="anchor" to="/">Home</Link></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">About</Anchor></ListItem>
                    <ListItem className="list-item"><Link className="anchor" to="/contact">Contact</Link></ListItem>
                </UlList>
                
            </div>
            
        </NavBarSection>
          );
        
      }

     export default Navbar;
      
      

