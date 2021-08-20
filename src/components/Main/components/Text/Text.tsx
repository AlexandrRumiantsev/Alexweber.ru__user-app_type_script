import * as React from 'react'
import * as css from './Text.css'

export const Text = ({text}) => (
    <div className={css.text_overlay}>
        {text.split('').map((el)=>{
            return <span>{el}</span>
        })}
    </div>   	 	 
)
    
export default Text;