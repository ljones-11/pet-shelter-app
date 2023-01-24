import React from 'react'
import styled from 'styled-components'


const FooterStyle = styled.footer`
  background-color: #fd5564;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-family: 'Gotham Rounded';
  font-size: 18px;

`

const Footer = () => {
  return (
  <FooterStyle> 
    <p> 1 Barkroad, G43 A03 Glasgow</p>
    <p>Call us on: 0123 456 123</p>
    <p>furFinder@furFinder.com</p>

  </FooterStyle>
  )
}

export default Footer
