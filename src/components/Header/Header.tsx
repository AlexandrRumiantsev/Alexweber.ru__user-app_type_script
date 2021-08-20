import * as React from 'react'
import {NavDesctop} from './Components/Nav/desktop/Nav';
import {NavMobile} from './Components/Nav/mobile/Nav';
import * as css from "./Header.css"

import WithAdaptiv from '../../hocks/with-adaptiv/with-adaptiv';

export const Header = ({positionMenu}) => ( 
  <div className={css.navContainer}> 
      <WithAdaptiv
        Desctop={NavDesctop}
        Mobile={NavMobile}
        positionMenu={positionMenu}
        css={css}
      />
  </div>
)
  
