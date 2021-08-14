import * as React from 'react';
import { useContext } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';




import * as css from '../Projects.css'
import {getProjects} from "../../../store/actions/projects";
import Loader from "../../share/Loader/Loader.jsx";
import Images from "../../share/Images/Images";

//import {TransitionGroup}  from "react-transition-group";
//import {TransitionGroup, CSSTransitionGroup}  from "react-transition-group";
//import CSSTransition  from "react-transition-group";

import { animated, useTransition } from 'react-spring'
import ReactCSSTransitionGroup from 'react-transition-group'; 

import {withPagination, HelloWorldFunc} from "../../../hocks/with-pagination/with-pagination";
import { useState, useMemo } from 'react';



export const Projects = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [countOnPage, setCountOnPage] = useState(4);
  const [ref, setRef] = useState(React.createRef());


  const setterCurrentPage = (page) => {
    new Promise((resolve, reject) => {
    ref.current.setAttribute("style", "transform: translate(0, 130%);transition: 5s;");
    
    setTimeout(() => {
      resolve();
    }, 3000);  

    }).then(() => {
      setCurrentPage(page)
      console.log(ref);
      ref.current.setAttribute("style", "transform: translate(0, 0);transition: 5s;");
    })
    
  }

  const router = useRouter();
  const dispatch = useDispatch();

  React.useEffect(() => {

   dispatch(
    getProjects()
   )

   
  }, [dispatch])



  const list = useSelector((state:any) => state.projects.list);
  
  if (list.length == 0) {
    return (
      <Loader />
    )
  }


  return (
    <>
      <Head>
          <title>Проекты</title>
          <meta name="description" content='Портфолио' />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`http://alexweber.ru/${router.asPath}`} />
      </Head>

        <div ref={ref} className={css.cards} >
          {withPagination.render(countOnPage, list, (sorteredList) => {
                return sorteredList[currentPage].map((n) => {
                  return (
                      <Link key={n.id} href={`/projects/${n.id}`}>
                        <figure className={css.card}>
                          <Images 
                            src={`http://api.alexweber.ru/${n.previmg}`} 
                            errorImg={'static/images/other/lazy_loader/error.gif'}
                            placeholderImg={'static/images/other/lazy_loader/lazy.gif'}
                          />
                          <figcaption>
                            <p>{ n.name }</p>
                            <p>{ n.discr }</p>
                          </figcaption>
                        </figure>
                      </Link>
                  )
                })
          })}
        <HelloWorldFunc 
          setCurrentPage={setterCurrentPage} 
          countOnPage={countOnPage} 
          items={list} 
          user={'thiom'} 
          currentPage={currentPage}
        />
        </div>
    </>
  )
}
    
  export default Projects;

