import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {storeExport, chooseProject} from './Redux/configureStore'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './sass/main.scss'

const store = storeExport()

store.subscribe(() => {
    console.log(store.getState())
})




store.dispatch(chooseProject('ProgressTracker'))
store.dispatch(chooseProject(''))



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

