import React from 'react';
import {AboutSection,AboutInfo,InfoTitle,Span,InfoDir,InfoDes,Anchor} from './style.js'


const About = () => {
  
    return (
      <AboutSection>
            <div class="container">
                <AboutInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDes>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDes>
                    <InfoDes>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDes>
                </AboutInfo>
            </div>
        </AboutSection>
        
    );
  
 
}

export default About;
