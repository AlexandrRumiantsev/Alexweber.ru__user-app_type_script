import * as React from 'react'
import {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {getStore} from '../src/store/index'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <Provider store={getStore()}>
        <Component {...pageProps} />
      </Provider>
  )
}