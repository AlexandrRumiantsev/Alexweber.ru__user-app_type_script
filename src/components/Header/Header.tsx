import * as React from 'react'
import {Nav} from './Components/Nav/Nav'
import * as css from "./Header.css"

export const Header = ({positionMenu}) =>
  <div className={css.navContainer}>
    <Nav positionMenu={positionMenu} />
  </div>
