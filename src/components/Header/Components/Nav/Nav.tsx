import * as React from 'react'
import Link from 'next/link'
import NavLink from 'next/link'
import * as css from './Nav.css'
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
const myRef = React.createRef();

export const Nav = props => {
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
    <nav className={css.topMenu}>
      
    <NavLink href="/">
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
    </NavLink>
    <NavLink
      href="/projects"
      >
      <div 
        className={css.svgWrapper}
        >
        <svg className={router.route == "/projects" ? css.active : ""} height="60" width="320" xmlns="http://www.w3.org/2000/svg">
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
    </NavLink>
    <NavLink href="/papers"
    
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
    </NavLink>
  </nav>
  )
}
