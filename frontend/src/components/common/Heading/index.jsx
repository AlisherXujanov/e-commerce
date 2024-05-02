import './style.scss'

/* eslint-disable react/prop-types */
function Heading({ title, page }) {
    return (
        <div className="heading-wrapper">
            <h1>{title}</h1>
            <p>
                Home. Pages. 
                <span>{page}</span>
            </p>        
        </div>
    );
}

export default Heading;