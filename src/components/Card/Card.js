import React from 'react'
import { Wrapper, Image, Name, Tagline } from './styled.js'

const Card = props => (
  <Wrapper onClick={props.openModal}>
    <Image src={props.image}/>
    <Name>{props.name}</Name>
    <Tagline>{props.tagline}</Tagline>
  </Wrapper>
)

export default Card
