import * as React from 'react'
import * as css from './Paper.css'
import { getPaper } from "../../../store/actions/papers";
import {WithLoader} from "../../../hocks/with-loader/with-loader";
import Head from 'next/head';
import { useRouter } from 'next/router'
import {createMarkup} from '../../../utils/createMarkup'


const Paper = ({ content }) => {

  const router = useRouter();

  return(
    <>
      <Head>
        <title>{content.title.rendered}</title>
        <meta name="description" content={content.excerpt.rendered} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`http://alexweber.ru/${router.asPath}`} />
        <meta property="og:site_name" content="alexweber" />
        <meta property="og:image" content={content._embedded['wp:featuredmedia'][0].source_url} />
        <meta property="og:title" content={content.title.rendered} />
        <meta property="og:description" content={content.excerpt.rendered}></meta>
      </Head>
      <div
        dangerouslySetInnerHTML={createMarkup(content.content.rendered)}
        className={css.paperContent}
      ></div>
    </>
  )
}

export default WithLoader(Paper, getPaper, 'papers', 'item');

