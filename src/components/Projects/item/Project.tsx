import * as React from 'react'
import Head from 'next/head';

import * as css from '../Projects.css'
import { getProject } from "../../../store/actions/projects";
import {BASE_URL} from '../../../const'
import {WithLoader} from "../../../hocks/with-loader/with-loader";

const Project = ({content}) => (
  <>
    <Head>
        <title>{content.name}</title>
        <meta name="description" content={content.discr} />
        <meta property="og:url" content={`http://alexweber.ru/${content.url}`} />
        <meta property="og:site_name" content="alexweber" />
        <meta property="og:image" content={content.fullimg} />
        <meta property="og:title" content={content.name} />
      </Head>
    <div className={css.projectsDetail}>
      <img className={css.detailImg} src={`${BASE_URL}${content['fullimg']}`} />
      <h1>
        <a href={content.url}>
          {content.name}
        </a>
      </h1>
    </div>
  </>
)

export default WithLoader(Project, getProject, 'projects', 'item');