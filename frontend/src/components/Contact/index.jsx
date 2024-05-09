import './style.scss'
import { context } from '../../state'
import { useContext } from 'react'

function Contact() {
    const state = useContext(context)

    return (
        <>
            <div style={{ backgroundColor: state.productBoolean ? 'brown' : 'green' }} className="contact-items">
                <div className="text">
                    <h1>{state.conText}</h1>
                </div>
                <div style={{ backgroundColor: state.backgroundChan }} className="bgChan">
                    <p>change background</p>
                </div>
            </div>
        </>
    );
}

export default Contact;