import * as React from 'react'
import { getMain } from "../../store/actions/main";
import WithLoader from "../../hocks/with-loader/with-loader";

import AnimateKeyframesPanel from '../Anim/Anim';
import Text from './components/Text/Text';
import {createMarkup} from '../../utils/createMarkup.js'

import {
  MAIN_TITLE, 
  AUTHOR_NAME, 
  MAIN_PHOTO_PATH,
  BLOCK,
  TYPE,
} from './const'

export const Main = () => {

  const PageContent = ({ content }) => (
      <>
      <div
        dangerouslySetInnerHTML={createMarkup(content['content'].rendered)}
      />
      <div id="main-page">
        <div id="main-page">
          <div className="content">
            <div>
              <Text text={MAIN_TITLE}/>
              <span className="text2">{AUTHOR_NAME}</span>
            </div>
          </div>
          <img 
            className='main-page__img' 
            src={MAIN_PHOTO_PATH} 
          />
        </div>
      </div>
      <AnimateKeyframesPanel />
    </>
  )

  return <WithLoader 
            Component={PageContent} 
            get={getMain()} 
            block={BLOCK} 
            type={TYPE} 
          />

}

export default Main;

