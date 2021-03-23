import * as React from 'react'
import Link from 'next/link'

import * as css from './Nav.css'
const myRef = React.createRef<HTMLDivElement>();
const menuRef = React.createRef<HTMLDivElement>();
import { useRouter } from 'next/router'

import { useState } from 'react';

if (typeof window === 'undefined') console.log('Window is not there')
else {
  window['myStore'] = {};
  window['myStore'].menu = myRef;
}


export const NavMobile = ({positionMenu}) => {

  const [active, setActive] = useState(false);

  const handlerMenu = () => {

    $(menuRef.current).animate({
      height: "toggle"
    }, 1500, function() {
      // Animation complete.
      active == false ? setActive(true) : setActive(false);
    });
    
  }

  return (
    <header className={css.menuMobile}>
      <nav className={css.nav}>
      <input type="checkbox" className={css.navCb} id="menu-cb" />
      <div className={css.navContent}>
      { active ? <img onClick={handlerMenu} src="static/images/menu/cancel.svg" /> : <img onClick={handlerMenu} src="static/images/menu/burger.svg" /> }
        <div ref={menuRef} className={css.navItem}>
          <Link href="/">
            <img src="static/images/menu/homepage.svg" />
          </Link>
          <Link
            href="/projects"
            >
            <img src="static/images/menu/portfolio.svg" />
          </Link>
          <Link href="/papers">
            <img src="static/images/menu/document.svg" />
          </Link>
        </div> 
        
      </div>
    </nav>
    </header> 
  )
}
