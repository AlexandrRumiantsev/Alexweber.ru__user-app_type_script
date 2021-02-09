import * as React from 'react'
import * as classnames from 'classnames'
import * as css from './Papers.css'

import styled from 'styled-components';
import { useRouter } from 'next/router'

import { getPapers } from "../../../store/actions/papers";

import { useSelector, useDispatch } from "react-redux";
import Loader from "../../share/Loader/Loader.jsx";
import Link from 'next/link'


export const Papers = () => {

  const [timeoutFlag, setFlagTimeout] = React.useState(false)
  const dispatch = useDispatch();
  const list = useSelector(state => state.papers.list);

  React.useEffect(() => {
    dispatch(getPapers());

    setTimeout(function () {
      $('#overlay').animate({ opacity: 0 }, 1000);
      setTimeout(function () {
        setFlagTimeout(true)
      }, 500)
    }, 1000)

  }, []);

  if (list.length == 0 || timeoutFlag == false) {
    return <Loader />;
  }
  
  return (<div className={css.paperPage}>
    {
      list.map((n) => {

        let Paragraph = styled.div`
          background: url(${n.source_url}) no-repeat;'
      `;
        return (
          <Link href={`/papers/${n.id}`}>
          <div className={css.papersContainer}>
          <Paragraph 
              className={css.fonPaper}
              >
              <div className={css.fonPaperContainer}>        
                <h2 className={css.fonPaperTitle}>{ n.title.rendered } </h2>
                <h3 className={css.fonPaperDiscr}>{ n.title.rendered }</h3>
              </div> 
              <div className={css.paperItem}>
                <span>
                      <img src='http://localhost:8080/img/close-icon.png' />
                </span>
            </div>
            <div className={css.paperItemBtn}>
                <i className={css.faComment} aria-hidden="true">
                  </i> 
                    <span className={css.itemBtn}>
                    
                    </span>
            </div>
          </Paragraph>
          </div >
          </Link>
              );
})
  }
  </div >  
  )}

export default Papers;

