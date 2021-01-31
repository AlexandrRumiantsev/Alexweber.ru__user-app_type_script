import * as React from 'react'
import * as css from '../Projects.css'
import { getProject } from "../../../store/actions/projects";

import { useSelector, useDispatch } from "react-redux";
import Loader from "../../share/Loader/Loader.jsx";

import { useRouter } from 'next/router'

export const Project = () => {


    const [timeoutFlag, setFlagTimeout] = React.useState(false)

    const router = useRouter();
    const dispatch = useDispatch();
    const item = useSelector(state => state.projects['item']);
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



    if (typeof window === 'undefined') { console.log('Window is not there') } else{
        let id = window.location.pathname.split('/').pop()
        dispatch(getProject(id));
    }
    

    React.useEffect(() => {
        setTimeout(function () {
            $('#overlay').animate({ opacity: 0 }, 1000);
            setTimeout(function () {
                setFlagTimeout(true)
            }, 500)
        }, 1000)
    }, [item]);

    if (item == null || timeoutFlag == false) {
        return (
            <Loader />
        )
    }
    return (

                        <div 
                        className={css.projectsDetail}
        >
            <img className={css.detailImg} src={`http://api.alexweber.ru/${item['fullimg']}`} />
            <h1>
                <a 
        href={item.url}
      >
        { item.name }
      </a>
    </h1>   
  </div >)
  
    


  }

  Project.getInitialProps = async (context) => {
    const props = {
        name: '"next.js-typescript-starter-kit" from client'
      }
      const server = !!context.req
      console.log(server);
      if (server) {
        props.name = await mockFetchName()
      }
    
      return props
  }

  async function mockFetchName() {
    return '"next.js-typescript-starter-kit" from server'
  }

export default Project;

