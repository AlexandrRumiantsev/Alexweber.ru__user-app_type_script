import * as React from 'react'
import {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {getStore} from '../src/store/index'

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import { AnimatePresence } from 'framer-motion';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AnimatePresence exitBeforeEnter>
      <Provider store={getStore()}>
        <Component {...pageProps} />
      </Provider>
    </AnimatePresence>
            
      
  )
}