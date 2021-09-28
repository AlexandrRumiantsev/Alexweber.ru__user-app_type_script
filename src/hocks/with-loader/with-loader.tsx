import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router'

import Loader from "../../components/share/Loader/Loader";

const WithLoader = (Component, get, block, type) => () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const page = useSelector(state => state[block][type]);

  React.useEffect(() => {
    router.query['id'] 
      ? dispatch(get(router.query['id'])) 
      : dispatch(get());
    }, [dispatch]);

  return page.length === 0 || typeof page == undefined
            ? <Loader /> 
            : <Component content={ page } /> 
};


export {WithLoader};

