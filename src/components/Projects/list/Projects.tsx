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

import {withPagination, PaginationPanel} from "../../../hocks/with-pagination/with-pagination";
import { useState, useMemo } from 'react';

import type { ProjectState } from '../../../@types/projects';

export const Projects = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [countOnPage, setCountOnPage] = useState(4);
  const [ref, setRef] = useState(React.createRef<HTMLInputElement>());


  const setterCurrentPage = (page) => {
    new Promise<void>((resolve, reject) => {

    ref.current.setAttribute(
      "style", 
      "transform: translate(0, 130%);transition: 5s;"
    );
    
    setTimeout(() => {
      resolve();
    }, 3000);  

    }).then(() => {
      setCurrentPage(page)
      ref.current
        .setAttribute(
          "style", 
          "transform: translate(0, 0);transition: 5s;"
        ) as unknown as HTMLElement;;
    })
    
  }

  const router = useRouter();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      getProjects()
    )
  }, [dispatch])


  const list = useSelector((state:ProjectState) => state.projects.list);
  
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
        <PaginationPanel 
          setCurrentPage={setterCurrentPage} 
          countOnPage={countOnPage} 
          items={list} 
          currentPage={currentPage}
        />
        </div>
    </>
  )
}
    
  export default Projects;

