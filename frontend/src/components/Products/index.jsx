import './style.scss'
import { context } from '../../state'
import { useContext } from 'react'

function Products() {
    const state = useContext(context)
    const isRed = true;
    return (
        <>
            <div className="all-items">
                <div className="table">
                    <div
                        className="div">
                        <input type="text"
                            onChange={(e) => { state.dispatch({ type: 'setConText', value: e.target.value }) }}
                            value={state.conText}
                        />
                    </div>
                    <div style={{ backgroundColor: state.backgroundChan }} className="div"><input
                        type="color"
                        value={state.backgroundChan}
                        onChange={(e) => { state.dispatch({ type: 'setBackgroundChan', value: e.target.value }) }}
                    />
                    </div>
                    <div className="div"><button
                        onClick={(e) => { state.dispatch({ type: 'setProductBoolean' }) }}
                        style={{ backgroundColor: state.productBoolean ? 'red' : 'green' }}
                    >
                        check
                    </button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Products; 