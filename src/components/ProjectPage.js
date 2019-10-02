import React from 'react'
import {Link} from 'react-router-dom'





const ProjectPage = (props) => {
    console.log(props)
    return (
    <div className="single-project">
        <h1>{props.location.state.title}</h1>
        <div className="single-project__container">
            <p className="single-project__text">{props.location.state.description}</p>

            <div className="single-project__photos">
                
                
            </div>
        </div>

        <button className = "btn btn__go-back">
            <Link to="/projects" className = "btn btn__go-back">
            Go back
            </Link>
        </button>
    </div>
    )
    
}

export default ProjectPage