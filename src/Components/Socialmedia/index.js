import React from 'react';
import {SocialMedia,Social,Icon,SocialDes,Span,SpanInfo} from './style.js'

import axios from 'axios'; 

class Socialmedia extends React.Component {

  state = {
    social: []
  }

  componentDidMount() {
    axios.get('../json.js').then(res => {this.setState({
      social: res.data.social
    })})
  }

  render() {

    const {social} = this.state
    const socialList = social.map((socialItem) => {
      return(
        <Social key= {socialItem.id} item={socialItem.id}>
        <Icon className ={socialItem.icon}></Icon>
        <SocialDes>
            <Span>{socialItem.title}</Span>
            <SpanInfo>{socialItem.body}</SpanInfo>
        </SocialDes>
    </Social>
      )
    })
    return (
      <SocialMedia>
            
      {socialList}
      
    </SocialMedia>
  
    )
  }
    
 
}

export default Socialmedia;
