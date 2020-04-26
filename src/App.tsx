import * as React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import { Resume } from './resume'

import styles from './App.module.css'
// @ts-ignore
import profileImg from './assets/IMG_0416.JPG'

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/graphql' : '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.sidebar}>
        <img src={profileImg} className={styles.sidebarProfileImg} alt="profile" />
        <div className={styles.sidebarDetail}>
          <h1 className={styles.sidebarName}>Wyatt Pultz</h1>
          <div>
            <strong>
              <a href="mailto:wpultz@gmail.com">Email</a>
              {' | '}
              <a href="https://linkedin.com/in/wyatt-pultz-42360232" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </strong>
          </div>
          <div className={styles.sidebarDesc}>
            Web developer residing in the Richmond, VA area with a track record of quality work and leadership
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Resume />
      </div>
    </ApolloProvider>
  )
}

export default App
