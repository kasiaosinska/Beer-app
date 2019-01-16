import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
`

export const LinkElement = styled(Link)`
 text-decoration: none;
 width: 100%;
 
 @media (min-width: 576px) {
  width: 50%;
 }
 
 @media (min-width: 768px) {
  width: 33%;
 }
 
 @media (min-width: 992px) {
  width: 25%;
 }
 
 @media (min-width: 1200px) {
  width: 20%;
 }
`
