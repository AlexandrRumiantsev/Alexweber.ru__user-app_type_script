import * as React from 'react'
import * as classnames from 'classnames'
import * as css from './Home.css'


import {getProjects} from "../store/actions/projects";

import { useSelector, useDispatch } from "react-redux";


export const Home = () => {


  
  const dispatch = useDispatch();
  const list = useSelector(state => state.projects.list);
 
  React.useEffect(() => {
    dispatch(getProjects());
  }, []);

  if (list.length == 0) {
    return <h1>LOAD..</h1>;
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

