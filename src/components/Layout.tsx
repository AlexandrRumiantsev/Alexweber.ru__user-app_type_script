import * as React from 'react'
import {Header} from './Header/Header'
import Head from 'next/head'
import { Player } from 'video-react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";


    
   
 

export const Layout: React.FunctionComponent = props => {

  const [positionMenu, setPositionMenu] = useState('');

  function handleScroll() {

    if(document.documentElement.scrollTop > 100){
      if(typeof window.store.menu.current == 'object'){
        setPositionMenu('fixed')
        $(window.store.menu.current).css({
           "animation": "pulse 2s",
           "animation-iteration-count": 1,
           "animation-fill-mode": "forwards",
        });
      }
    }else{
      setPositionMenu('')
      $(window.store.menu.current).css({
        "animation": "pulserevert 2s",
        "animation-iteration-count": 1,
        "animation-fill-mode": "forwards",
     });
    }  
  }  
  
  if (typeof window === 'undefined') console.log('Window is not there')
    else window.addEventListener('scroll', handleScroll);

  

  return (
    <div id="layout">
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Header positionMenu={positionMenu}/>
    <main>
      {props.children}
    </main>
    <div id="smoke">
      <video id="nubexVideo" width="100%" height="auto" preload="auto" autoplay="true" loop="true" muted="muted">
        <source src="../../static/Fog.mp4"></source>
      </video>
    </div>
  </div>
  )
  
}
