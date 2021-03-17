import * as React from 'react'
import * as css from '../Projects.css'
import { getProject } from "../../../store/actions/projects";
import Loader from "../../share/Loader/Loader.jsx";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import Head from 'next/head';



export const Project = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const item = useSelector((state: any) => state.projects['item']);

  React.useEffect(() => {
    dispatch(getProject(router.query['id']));
  }, [])


  if (item == null) {
    return (
      <Loader />
    )
  }
  return (
    <>
    <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.discr} />
        <meta property="og:url" content={`http://alexweber.ru/${item.url}`} />
        <meta property="og:site_name" content="alexweber" />
        <meta property="og:image" content={item.fullimg} />
        <meta property="og:title" content={item.name} />
      </Head>
    <div
      className={css.projectsDetail}
    >
      <img className={css.detailImg} src={`http://api.alexweber.ru/${item['fullimg']}`} />
      <h1>
        <a
          href={item.url}
        >
          {item.name}
        </a>
      </h1>
    </div >
    </>)




}



export default Project;

