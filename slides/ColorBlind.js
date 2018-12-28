import React from 'react'
import Layout from './Layout'

export default ({ children }) => (
  <div
    style={{
      backgroundColor: '#de7367',
      color: '#8e9a5b'
    }}>
        <Layout>
            {children}
        </Layout>
  </div>
)