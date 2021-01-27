import * as React from 'react'
import {getMain} from "../../store/actions/main";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../share/Loader/Loader.jsx";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
console.log(TransitionGroup)

export const Main = () => {

  const [timeoutFlag, setFlagTimeout] = React.useState(false)

  
  const dispatch = useDispatch();
  const page = useSelector(state => state.main.page);

  function createMarkup(html) {
    return {__html: html};
  }
  
  const PageContent = ({content}) => {

      return <div 
              dangerouslySetInnerHTML={createMarkup(content)} 
            ></div>
  }
  
  
 
  React.useEffect(() => {
    dispatch(getMain());
  
    setTimeout(function() { 
      $('#overlay').animate({ opacity: 0 }, 1000);
      setTimeout(function() {
        setFlagTimeout(true)
      }, 500)
    }, 5000)
    
  }, []);


  return (page.content == undefined || timeoutFlag == false) 
          ?  <Loader /> 
          :  <PageContent content={page.content.rendered}/>


  }
    
  export default Main;

