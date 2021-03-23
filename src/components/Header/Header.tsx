import * as React from 'react'
import { useState } from 'react';
import {NavDesctop} from './Components/Nav/desktop/Nav';
import {NavMobile} from './Components/Nav/mobile/Nav';
import * as css from "./Header.css"

import WithAdaptiv from '../../hocks/with-adaptiv/with-adaptiv';

export const Header = ({positionMenu}) => {

  /*
  const [mobile, setMobile] = useState(null);

  if (typeof window === 'undefined') console.log('Window is not there')
  else {

      React.useEffect(() => {
          setMobile(
            window.innerWidth < 970 
              ? true
              : false
          );
      }, [])

      
      window.addEventListener("resize", function () {

        window.innerWidth < 970 && mobile == false ? setMobile(true) : '';
        window.innerWidth > 970 && mobile == true ? setMobile(false) : '';

      });
  }
  
  
   return mobile == false ? 
    <div className={css.navContainer}> 
      <NavDesctop positionMenu={positionMenu} />
    </div> 
   : 
    <div className={css.navContainer}> 
      <NavMobile positionMenu={positionMenu} />
    </div>;
    */

   return( 
    <div className={css.navContainer}> 
        <WithAdaptiv
          Desctop={NavDesctop}
          Mobile={NavMobile}
          positionMenu={positionMenu}
          css={css}
        />
    </div>
   )
}
  
