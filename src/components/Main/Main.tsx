import * as React from 'react'
import {getMain} from "../../store/actions/main";
import WithLoader from "../../hocks/with-loader/with-loader";

export const Main = () => {

  function createMarkup(html) {
    return {__html: html};
  }

  const PageContent = ({content}) => {
    return <div 
            dangerouslySetInnerHTML={createMarkup(content['content'].rendered)}
          >
          </div>
  }

  return <WithLoader Component={PageContent} get={getMain()} block={'main'} type={'page'} />

}
    
export default Main;

