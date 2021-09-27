import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/share/Loader/Loader";

const WithLoader = (Component, get, block, type) => () => {

  const dispatch = useDispatch();
  const page = useSelector(state => state[block][type]);

  React.useEffect(() => dispatch( get() ), [dispatch]);

  return page.length === 0 || typeof page == undefined
            ? <Loader /> 
            : <Component content={ page } /> 
};


export {WithLoader};

