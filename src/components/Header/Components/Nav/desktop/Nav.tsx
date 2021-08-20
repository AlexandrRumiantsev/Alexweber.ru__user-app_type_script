import * as React from 'react'
import Link from 'next/link'

import * as css from './Nav.css'
const myRef = React.createRef<HTMLDivElement>();
import { useRouter } from 'next/router'
import { MENU } from '../../../const'

export const NavDesctop = ({positionMenu}) => {

  const router = useRouter()

  if (typeof window === 'undefined') console.log('Window is not there')
  else {
    window['myStore'] = {};
    window['myStore'].menu = myRef;
  }

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
    { Object.keys(MENU).map((el) => (
        <Link href={MENU[el].LINK}>
          <div 
            className={css.svgWrapper}>
            <svg 
                className={router.route == MENU[el].LINK ? css.active : ""} 
                height="60" 
                width="320" 
                xmlns="http://www.w3.org/2000/svg"
            >
              <rect 
                id="main-rect" 
                className={css.shape} 
                height="60" 
                width="320" 
              />
            </svg>
            <div 
              onMouseLeave={(e) => leaveFocusLink(e.target)}
              onMouseEnter={(e) => enterFocusLink(e.target)} 
              className={css.text}
            >
              {MENU[el].NAME}
            </div>
          </div>
        </Link>
    ))}
  </nav>
  )
}
