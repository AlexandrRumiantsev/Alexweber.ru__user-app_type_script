import * as React from 'react'
import * as classnames from 'classnames'
import * as css from './Papers.css'

import styled from 'styled-components';

import { getPaper } from "../../../store/actions/papers";
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../share/Loader/Loader.jsx";
import Link from '../../../pages/projects/:id/node_modules/next/link'


export const Paper = () => {

    const [timeoutFlag, setFlagTimeout] = React.useState(false)

    const router = useRouter();
    const dispatch = useDispatch();
    const item = useSelector(state => state.papers['item']);
    const postVariants = {
        initial: { scale: 0.96, y: 30, opacity: 0 },
        enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
        exit: {
            scale: 0.6,
            y: 100,
            opacity: 0,
            transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
        }
    };

    function createMarkup(html) {
        return {__html: html};
      }

    const PageContent = ({content}) => {

        return <div 
                dangerouslySetInnerHTML={createMarkup(content)} 
              ></div>
    }

    
    

    React.useEffect(() => {
        if (typeof window === 'undefined') { console.log('Window is not there') } else{
            let id = window.location.pathname.split('/').pop()
            dispatch(getPaper(id));
        }
        setTimeout(function () {
            $('#overlay').animate({ opacity: 0 }, 1000);
            setTimeout(function () {
                setFlagTimeout(true)
            }, 1000)
        }, 1000)
    }, []);

   
    console.log(item);
    return (item == undefined || timeoutFlag == false) 
          ?  <Loader /> 
          :  <PageContent content={item.excerpt.rendered}/>
}

export default Paper;

