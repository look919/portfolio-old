import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'

import p1 from '../img/pt-1.png'
import p2 from '../img/pt-2.png'
import p3 from '../img/pt-3.png'

 


const ProjectsPage = () => {
    
    return(
        <div className="content">

            <Header title='Projects'/>
            
            <div>
                <button className = "btn btn__inline">
                    <Link 
                    className="btn btn__inline" 
                    to={{
                    pathname: '/projects/progressTracker',
                    state: {
                        title: 'Progress Tracker',
                        description: 'Very Simple application to track progress in learning, its still better than writing it in a notebook. Thats my first project that uses Javascript and JSON.',
                        photos: '../img/pt-1.png'
                    }
                    }} >
                    Progress Tracker &rarr;
                    </Link>
                </button>
            </div>

            <h4 className="project-page__heading-quarternary">C++ projects: </h4>

            <div>
                <button className = "btn btn__inline">
                    <Link 
                    className="btn btn__inline" 
                    to={{
                        pathname: '/projects/threeInOne',
                        state: {
                            title: 'Three games in one',
                            description: 'There it all started, this is my first bigger project. An application written in Qt Creator that combines three simple games: WordGuesser, Ships and memory game into one project.It turned out that I was not very original with ideas, but we have what we have.',
                            photos: 'baba'
                        }
                        }} >
                        Three games in one &rarr;
                    </Link>
                </button>
            </div>
            <div>
                <button className = "btn btn__inline">
                    <Link 
                    className="btn btn__inline" 
                    to={{
                        pathname: '/projects/chess',
                        state: {
                            title: 'Chess game',
                            description: 'My biggest project so far and also last using C++ and Qt Creator. It took me around 2 months. Game is fully functional, includes pinning figures, en passant move, discover and double checks. I must admit that i found several bugs in the game but i decided not to dive into this project anymore, in order to focus on Web developing.',
                            }
                        }} >
                        Chess game &rarr;
                    </Link>
                </button>
            </div>
            <Nav/>
        </div>
    )}

export default ProjectsPage


//<ProjectModal />





