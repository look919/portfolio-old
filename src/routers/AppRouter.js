import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'


import WelcomePage from '../components/WelcomePage'
import SkillPage from '../components/SkillPage'
import ProjectsPage from '../components/ProjectsPage'
import ProjectPage from '../components/ProjectPage'
import ContactPage from '../components/ContactPage'




const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={WelcomePage} exact={true}/>
                <Route path="/projects" component={ProjectsPage} exact={true}/>
                <Route path="/projects/:name" component={ProjectPage} />
                <Route path="/skills" component={SkillPage} />
                <Route path="/contact" component={ContactPage} />
            </Switch>
        </div>     
    </BrowserRouter>
)

export default AppRouter