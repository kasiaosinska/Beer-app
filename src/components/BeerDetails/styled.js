import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  overflow: auto;
  width: 100%;
  height: 100%;
`

export const Modal = styled.div`
  position: absolute;
  top: 40px;
  left: 20%;
  right: 20%;
  padding: 40px;
  margin-bottom: 40px;
  z-index: 11;
  background: #fefefe;
  border: #333333 solid 0px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 20px;
    left: 10%;
    right: 10%;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const TopBox = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const LinkElement = styled(Link)`
  text-decoration: none;
  width: 30%;
  border: 1px solid #CFCFCF;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 8px; 
  margin-right: 5%;
  
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
    img {
      height: 100px;
      margin-bottom: 10px;
    }
  }
  
  span {
    margin: 0 auto;
  }
 
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
    margin-right: 0;
  }
`

export const List = styled.div`
  display: flex;
  
  a:last-child {
    margin-right: 0;
  }
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const ImageBox = styled.div`
  @media (max-width: 768px) {
    margin: 0 auto 40px auto;
  }
`

export const Image = styled.img`
  height: 300px;
  padding-right: 30px;
  
  @media (max-width: 768px) {
    padding-right: 0;
  }
`

export const Title = styled.div`
  color: #686868;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
`
export const Description = styled.div`
  color: #A9A9A9;
  font-size: 13px;
  font-weight: 300;
  font-family: Roboto;
`

export const Tagline = styled.div`
  color: #808080;
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: 400;
  
  &:after{
    content: '';
    display: block;
    width: 40px;
    border-bottom: 4px solid #479019;
    margin-top: 8px;
  }
`

export const Box = styled.div`
  margin: 20px 0;
`

export const Details = styled.div`
  color: #A9A9A9;
  margin-right: 15px;
  display: inline-block;
  
  @media (max-width: 768x) {
    display: block;
  }
`

export const BoldText = styled.span`
  color: #808080;
  font-weight: 700;
`

export const ListElement = styled.li`
  color: #A9A9A9;
  font-size: 13px;
  font-weight: 300;
  font-family: Roboto;
  margin-top: 3px;
`

