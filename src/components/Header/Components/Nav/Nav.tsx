import * as React from 'react'
import Link from 'next/link'

import * as css from './Nav.css'
const myRef = React.createRef<HTMLDivElement>();
import { useRouter } from 'next/router'

if (typeof window === 'undefined') console.log('Window is not there')
else {
  window['myStore'] = {};
  window['myStore'].menu = myRef;
}


export const Nav = ({positionMenu}) => {

  const router = useRouter()


  const leaveFocusLink = (el) => {
    $(el).parent().find('rect').animate(
      {
        'stroke-dashoffset': '-474px'
      }, 
      500)
  }
  const enterFocusLink = (el) => {
    $(el).parent().find('rect').animate(
      {
        'stroke-dashoffset': '-4'
      }, 
      500)
  }

  return (
    <nav ref={myRef} className={css.topMenu + ' ' + positionMenu}>
      
    <Link href="/">
      <div 
        className={css.svgWrapper}>
        <svg className={router.route == "/" ? css.active : ""} height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect id="main-rect" className={css.shape} height="60" width="320" />
        </svg>
        <div 
          onMouseLeave={(e) => leaveFocusLink(e.target)}
          onMouseEnter={(e) => enterFocusLink(e.target)} 
          className={css.text}
        >
          ГЛАВНАЯ
        </div>
      </div>
    </Link>
    <Link
      href="/projects"
      >
      <div 
        className={css.svgWrapper}
        >
        <svg className={router.route == "/projects" || router.route == "/projects/[id]" ? css.active : ""} height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect id="main-rect" className={css.shape} height="60" width="320" />
        </svg>
        <div 
          onMouseLeave={(e) => leaveFocusLink(e.target)}
          onMouseEnter={(e) => enterFocusLink(e.target)}
          className={css.text}
        >
          ПОРТФОЛИО
          </div>
      </div>
    </Link>
    <Link href="/papers"
    
    >
      <div 
        className={css.svgWrapper}
        >
        <svg className={router.route == "/papers" ? css.active : ""} height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect id="main-rect" className={css.shape} height="60" width="320" />
        </svg>
        <div 
          className={css.text}
          onMouseLeave={(e) => leaveFocusLink(e.target)}
          onMouseEnter={(e) => enterFocusLink(e.target)}
        >
          СТАТЬИ
        </div>
      </div>
    </Link>
  </nav>
  )
}
