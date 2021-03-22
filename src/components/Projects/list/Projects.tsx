import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useState } from 'react';



import * as css from '../Projects.css'
import {getProjects} from "../../../store/actions/projects";
import Loader from "../../share/Loader/Loader.jsx";

export const Projects = () => {
  


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
      <div className={css.cards}>
          {
          list.map((n) => {
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
        }  
      </div>
    </>
  )
}
    
  export default Projects;

