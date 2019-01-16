import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 300px;
  border-radius: 5px;
  margin: 20px 10px;
  padding: 10px;
  text-align: center;
  background-color: white;
  box-shadow: 0px 3px 14px -2px rgba(0,0,0,0.25);
  cursor: pointer;
  transition: all .2s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 3px 14px -2px rgba(0,0,0,0.5);
  }
`
export const Image = styled.img`
  height: 70%;
`

export const Name = styled.div`
  color: #479019;
  font-size: 22px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const Tagline = styled.div`
  color: #A9A9A9;
  font-size: 15px;
`
