import * as React from 'react'
import * as css from './Paper.css'
import { getPaper } from "../../../store/actions/papers";
import WithLoader from "../../../hocks/with-loader/with-loader";
import Head from 'next/head';
import { useRouter } from 'next/router'

export const Paper = () => {

  const router = useRouter();

  function createMarkup(html) {
    return { __html: html };
  }

  const PageContent = ({ content }) => {

    return <>
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
  }

  return <WithLoader Component={PageContent} get={getPaper(router.query['id'])} block={'papers'} type={'item'} />
}

export default Paper;

