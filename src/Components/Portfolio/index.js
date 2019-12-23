import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {PortFolioSection,PortFolioTitle,Span,PortFolioList,
  PortFolioItem,ImagerWrapper,Image,Overlay,OverlaySpan} from './style.js';


const Portfoilo = () => {

  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get('../json.js').then(res => {setImages(res.data.portfolio)})
  }, [])

  const portfolioImages = images.map((imageItem) => {
     return (
      <ImagerWrapper key={imageItem.id}>
      <Image src={imageItem.image} alt="image" />
      <Overlay>
          <OverlaySpan>
              Show Image
          </OverlaySpan>
      </Overlay>
  </ImagerWrapper>
     )
  })
  
    return (
      <PortFolioSection>
            <PortFolioTitle><Span>My</Span> Portfolio</PortFolioTitle>
            <PortFolioList>
                <PortFolioItem active>All</PortFolioItem>
                <PortFolioItem>HTML</PortFolioItem>
                <PortFolioItem>Photoshop</PortFolioItem>
                <PortFolioItem>Wordpress</PortFolioItem>
                <PortFolioItem>Mobile</PortFolioItem>
            </PortFolioList>
            
            <div className="box">
                
                {portfolioImages}
               
            </div>
            
        </PortFolioSection>
    );
  
 
}

export default Portfoilo;
