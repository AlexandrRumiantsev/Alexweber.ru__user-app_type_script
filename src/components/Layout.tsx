import * as React from 'react'
import {Header} from './Header/Header'
import Head from 'next/head'
import { Player } from 'video-react';

export const Layout: React.FunctionComponent = props =>
  <div id="layout">
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Header/>
    <main>
      {props.children}
    </main>
    <div id="smoke">
      <video id="nubexVideo" width="100%" height="auto" preload="auto" autoplay="true" loop="true" muted="muted">
        <source src="../../static/Fog.mp4"></source>
      </video>
    </div>
  </div>
