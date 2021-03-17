import {Layout} from '../../../src/components/Layout'
import {Paper} from '../../../src/components/Papers/item/Paper'

export async function getStaticPaths() {
  const response = await fetch(
    'http://api.alexweber.ru/wp-json/wp/v2/posts?_embed'
  )
  /*
  const postList = await response.json()
  return {
    paths: [ postList.map((post) => {
      return {
        params: {
          id: `...${post.id}`,
        },
      }
    })],
    fallback: false,
  }
  */
  const postList = await response.json()
  const paths = postList.map((post) => {
    return {
      params: {
        id: post.id.toString(),
        index: 'index'
      }
    }
  });
  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({ params }) {
  // fetch single post detail
  const response = await fetch(
    `http://api.alexweber.ru/wp-json/wp/v2/posts/${params.id}`
  )
  const post = await response.json()
  return {
    props: post,
  }
}

export default props => {
  console.log(props);
  return (
    <Layout>
      <Paper/>
    </Layout>
  )
}
  