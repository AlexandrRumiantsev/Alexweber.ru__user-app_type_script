import * as React from 'react'
import * as classnames from 'classnames'
import * as css from './Papers.css'


import {getPapers} from "../../store/actions/papers";

import { useSelector, useDispatch } from "react-redux";
import Loader from "../share/Loader/Loader.jsx";
import Link from 'next/link'


export const Papers = () => {
  
  const [timeoutFlag, setFlagTimeout] = React.useState(false)

  
  const dispatch = useDispatch();
  const list = useSelector(state => state.papers.list);
  console.log(list);


  
 
  React.useEffect(() => {
    dispatch(getPapers());
    
    setTimeout(function() { 
      $('#overlay').animate({ opacity: 0 }, 1000);
      setTimeout(function() {
        setFlagTimeout(true)
      }, 500)
    }, 1000)
    
  }, []);

  if (list.length == 0 || timeoutFlag == false) {
    return <Loader />;
  }
  
  return (<div>
      {
      list.map((n) => {

        return (
            <figure>
              <figcaption>
              {n.title.rendered}
              </figcaption>
            </figure>
        )
      })
    }  
  </div>);


  }
    
  export default Papers;

