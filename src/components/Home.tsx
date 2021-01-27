import * as React from 'react'
import * as classnames from 'classnames'
import * as css from './Home.css'


import {getProjects} from "../store/actions/projects";

import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/share/Loader/Loader.jsx";



export const Home = () => {
  
  const [timeoutFlag, setFlagTimeout] = React.useState(false)

  
  const dispatch = useDispatch();
  const list = useSelector(state => state.projects.list);
  ;


  
 
  React.useEffect(() => {
    dispatch(getProjects());
    
    setTimeout(function() { 
      $('#overlay').animate({ opacity: 0 }, 1000);
      setTimeout(function() {
        setFlagTimeout(true)
      }, 500)
    }, 5000)
    
  }, []);

  if (list.length == 0 || timeoutFlag == false) {
    return <Loader />;
  }

      return <div className={classnames('test', css.home)}>
        <ul>
        {      
        list.map((project) => {
          return (
             <div>{project.name}</div>
          );
        })
        
      }
        </ul>
    </div> 
    
    


  }
    
  export default Home;

