import * as React from 'react'
import * as classnames from 'classnames'
import * as css from '../Projects.css'
import Link from 'next/link'


import {getProjects} from "../../../store/actions/projects";

import { useSelector, useDispatch } from "react-redux";
import Loader from "../../share/Loader/Loader.jsx";

import { useRouter } from 'next/router'

export const Projects = () => {
  
  const [timeoutFlag, setFlagTimeout] = React.useState(false)

  const router = useRouter();
  const dispatch = useDispatch();
  const list = useSelector(state => state.projects.list);
  
  const postVariants = {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };


  
 
  React.useEffect(() => {
    dispatch(getProjects());
    
    setTimeout(function() { 
      $('#overlay').animate({ opacity: 0 }, 1000);
      setTimeout(function() {
        setFlagTimeout(true)
      }, 500)
    }, 1000)
    
  }, []);

  if (list.length == 0 || timeoutFlag == false) {
    return (
      <Loader />
    )
  }
  
  return (
  <div className={css.cards}>
      {
      list.map((n) => {

        return (
            <Link href={`/projects/${n.id}`}>
            <figure className={css.card}>
              <img src={`http://api.alexweber.ru/${n.previmg}`} />
              <figcaption>
                <p>{ n.name }</p>
                <p>{ n.discr }</p>
              </figcaption>
            </figure>
            </Link>
        )
      })
    }  
  </div>)
    


  }
    
  export default Projects;

