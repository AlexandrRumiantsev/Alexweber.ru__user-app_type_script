import * as css from './Loader.css'

const Loader = () => (
    <div className={css.overlay}><div className={css.loadholder}>
        <div className={css.loader}>
            <span className={css.text}>Loading</span>
        </div>
    </div>
    <div id="particleCanvasBlue"></div>
    <div id="particleCanvasWhite"></div></div>
)

export default Loader;