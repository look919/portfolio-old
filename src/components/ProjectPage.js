import React from 'react'
import {Link} from 'react-router-dom'

import Nav from './Nav'

import chessImage from '../img/chess-1.png'
import threeGamesInOneImage from '../img/threegamesinone.png'
import progressTrackerImage from '../img/pt.png'
import portfolioImage from '../img/portfolio.png'
import bookYourTimeImage from '../img/bookyourtime.png'


const ProjectPage = (props) => {


    return (
    <div className="container">
        <div className="content single-project">
            <h1 className="single-project__title">{props.location.state.title}</h1>
            <div className="single-project__container">    
                <div className="single-project__description">               
                    <p className="single-project__text">{props.location.state.description}</p>
                    {
                        props.location.state.title === 'Book Your Time' && 
                        <div className="single-project__links">
                            <a className="single-project__link" href="https://bookyourtime.herokuapp.com/" target="_blank">Link &rarr;</a> 
                            <a className="single-project__link" href="https://github.com/look919/Book-Your-Time" target="_blank">Github &rarr;</a>
                        </div>
                    }
                    {
                        props.location.state.title === 'Portfolio' && 
                        <div className="single-project__links">
                            <a className="single-project__link" href="https://tomasz-wirkus-portfolio.herokuapp.com/" target="_blank">Link &rarr;</a> 
                            <a className="single-project__link" href="https://github.com/look919/portfolio" target="_blank">Github &rarr;</a>
                        </div>
                    }
                    {
                        props.location.state.title === 'Progress Tracker' && 
                        <div className="single-project__links">
                            <a className="single-project__link" href="http://progresstracker.surge.sh/index.html#" target="_blank">Link &rarr;</a> 
                            <a className="single-project__link" href="https://github.com/look919/Progress-Tracker" target="_blank">Github &rarr;</a>
                        </div>
                    }
                    {
                        props.location.state.title === 'Three games in one' && 
                        <div className="single-project__links">
                            <a className="single-project__link" href="https://www.youtube.com/watch?v=SC5MxK_dTsI" target="_blank">Link &rarr;</a> 
                            <a className="single-project__link" href="https://github.com/look919/Three-games-in-one-Qt" target="_blank">Github &rarr;</a>
                        </div>
                    }
                    {
                        props.location.state.title === 'Chess game' && 
                        <div className="single-project__links">
                            <a className="single-project__link" href="https://www.youtube.com/watch?v=oQRxG5nHmoY" target="_blank">Link &rarr;</a> 
                            <a className="single-project__link" href="https://github.com/look919/Chess-game-Qt" target="_blank">Github &rarr;</a>
                        </div>
                    }

                    <button className = "btn btn__action">
                        <Link to="/projects" className="single-project__btn btn__go-back">Go back</Link>
                    </button>
                </div>
                <div className="single-project__photos">
                    {props.location.state.title==='Book Your Time' && <img src={`/${bookYourTimeImage}`} alt="Img" className="single-project__photo single-project__photo--byt"/>}
                    {props.location.state.title==='Portfolio' && <img src={`/${portfolioImage}`} alt="Img" className="single-project__photo single-project__photo--portfolio"/>}
                    {props.location.state.title==='Progress Tracker' && <img src={`/${progressTrackerImage}`} alt="Img" className="single-project__photo single-project__photo--pt"/>}

                    {props.location.state.title==='Three games in one' && <img src={`/${threeGamesInOneImage}`} alt="Img" className="single-project__photo single-project__photo--tgio" />}
                    {props.location.state.title==='Chess game' && <img src={`/${chessImage}`} alt="Img" className="single-project__photo single-project__photo--chess" />}
                    


                </div>
            </div>
        </div>

        <Nav/>
    </div>
    )
    
}

export default ProjectPage
//<img src={`/${tgioOne}`}/>