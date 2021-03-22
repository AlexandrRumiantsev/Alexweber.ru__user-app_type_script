import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/share/Loader/Loader";


  const WithLoader = ({Component, get, block, type}) => {
   const dispatch = useDispatch();
    

    React.useEffect(() => {
      dispatch(get);
    },[dispatch]);
  
  const page = useSelector(state => state[block][type]);

  return (page == null || page == undefined || page.length == 0) 
          ? <Loader />
          : <Component 
                  content={ page }
                />
    
  }


export default WithLoader;