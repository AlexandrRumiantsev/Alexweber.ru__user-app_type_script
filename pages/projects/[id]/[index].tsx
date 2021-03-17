import {Layout} from '../../../src/components/Layout'
import {Project} from '../../../src/components/Projects/item/Project'

export async function getStaticPaths() {
  const response = await fetch(
    'http://api.alexweber.ru/wp-json/wp/v2/get_portfolio_all'
  )
  const postList = await response.json()
  return {
    paths: postList.map((post) => {
      return {
        params: {
          id: `${post.id.toString()}`,
          index: 'index'
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // fetch single post detail
  const response = await fetch(
    `http://api.alexweber.ru/wp-json/wp/v2/get_portfolio_item?id=${params.id}`
  )
  const post = await response.json()
  return {
    props: post,
  }
}

export default props => 
  <Layout>
    <Project/>
  </Layout>
