import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';




import * as css from '../Projects.css'
import {getProjects} from "../../../store/actions/projects";
import Loader from "../../share/Loader/Loader.jsx";

import Images from "../../share/Images/Images.tsx";
import MyComponent from "../../../../../react-aw-lib/dist";
import {withPagination, createPaginationPanel, HelloWorldFunc} from "../../../hocks/with-pagination/with-pagination";
import { useState, useMemo } from 'react';

export const Projects = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [countOnPage, setCountOnPage] = useState(4);

  const router = useRouter();
  const dispatch = useDispatch();

  React.useEffect(() => {

   dispatch(
    getProjects()
   )

   
  }, [dispatch])

  const list = useSelector((state:any) => state.projects.list);

  const click = (page) => { console.log(setCurrentPage)}
  
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
      <div className={css.cards}>
        {withPagination.render(countOnPage, list, (sorteredList) => {
              return sorteredList[currentPage].map((n) => {
                return (
                    <Link key={n.id} href={`/projects/${n.id}`}>
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
        })}
        <HelloWorldFunc setCurrentPage={setCurrentPage} countOnPage={countOnPage} items={list} user={'thiom'} currentPage={currentPage}/>
      </div>
      
    </>
  )
}
    
  export default Projects;

