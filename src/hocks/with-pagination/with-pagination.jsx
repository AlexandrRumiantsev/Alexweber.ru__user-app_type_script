//https://coderoad.ru/30440297/React-js-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B0-%D0%B2%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-%D1%80%D0%B5%D0%BA%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D0%BE%D0%B2-%D0%B2-React-createElement

import * as css from './with-pagination.css'

import * as React from 'react'

var _this = this;

export function PaginationPanel(props) {
    return <ul className={css.pagPanel}>
        {Array.prototype.map.call(
            Object.keys(withPagination.sortForPagination( props.countOnPage, props.items)),
            function (item) {
                return <li className={css.pagElem} key={item}>
                    {btn(item, props.setCurrentPage, props.currentPage)}
                </li>;
            }, _this)}
    </ul>;
}

const btn = (number, setCurrentPage, currentPage) => React.createElement(
    "button",
    {
        onClick: () => { setCurrentPage(number - 1) },
        className: currentPage == number ?  css.pagButtonAcive : css.pagButton
    },
    ++number
)

export const withPagination = {

    sortForPagination: (count, data) => {


        let counterElem = 0;
        let counterCell = 0;
        let sortArray = {};

        data.forEach(function (element) {

            if (counterElem == count) {
                counterCell++;
                counterElem = 0;
            }

            if (!sortArray[counterCell])
                sortArray[counterCell] = [];

            sortArray[counterCell][counterElem] = element;

            counterElem++;
        })

        return sortArray
    },
    render: (countOnPage, data, callback) => {

        return callback(
            withPagination.sortForPagination(countOnPage, data)
        )

    }
}