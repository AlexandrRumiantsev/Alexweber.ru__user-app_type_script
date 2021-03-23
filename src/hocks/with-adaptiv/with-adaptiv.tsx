import React from 'react';
import { useState } from 'react';

  const WithAdaptiv = ({Desctop, Mobile, ...props}) => {
   


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
        <Desctop {...props} />
    :  
        <Mobile {...props} />
    
  }


export default WithAdaptiv;