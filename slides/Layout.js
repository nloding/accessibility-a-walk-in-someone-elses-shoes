import React, { Fragment } from 'react'
import styled from 'styled-components'
import Footer from './Footer'

const Wrapper = styled.main`
  width: 100vw;
  height: 95vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span>#a11yInTheirShoes</span>
      <span><a href="https://twitter.com/NathanLoding">@NathanLoding</a></span>
    </Footer>
  </Fragment>
)

export default Layout