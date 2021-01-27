import * as React from 'react'
import {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {getStore} from '../src/store/index'

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
            <Provider store={getStore()}>
              <Component {...pageProps} />
            </Provider>
      
  )
}