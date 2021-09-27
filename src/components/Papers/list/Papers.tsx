import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components';

import * as css from './Papers.css'
import { getPapers } from "../../../store/actions/papers";
import {WithLoader} from "../../../hocks/with-loader/with-loader";

const Papers = ({content}) => (
    <div className={css.paperPage}>
      {
        content.map((n) => {
          let Paragraph = styled.div`
              background: url(${n._embedded['wp:featuredmedia'][0].source_url}) no-repeat;'
          `;
          return (
            <Link key={n.id} href={`/papers/${n.id}`}>
              <div className={css.papersContainer}>
                <Paragraph
                  className={css.fonPaper}
                >
                  <div className={css.fonPaperContainer}>
                    <h2 className={css.fonPaperTitle}>{n.title.rendered} </h2>
                    <h3 className={css.fonPaperDiscr}>{n.title.rendered}</h3>
                  </div>
                  <div className={css.paperItem}>
                    <span>
                      <img src='http://localhost:8080/img/close-icon.png' />
                    </span>
                  </div>
                  <div className={css.paperItemBtn}>
                    <i className={css.faComment} aria-hidden="true">
                    </i>
                    <span className={css.itemBtn}></span>
                  </div>
                </Paragraph>
              </div>
            </Link>
          );
        })
      }
    </div >
  )

export default WithLoader(Papers, getPapers, 'papers', 'list' );

