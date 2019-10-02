import {createStore, combineReducers} from 'redux'

//ACTIONS

const chooseProject = (selectedProject) => ({
    type: 'CHOOSE_PROJECT',
    selectedProject
})

const modalOptionDefaultState = {
    selectedProject: undefined
}
    
const modalReducer = (state = modalOptionDefaultState, action) => {
    switch(action.type){
        case 'CHOOSE_PROJECT': {
            return action.selectedProject
        }
        default: 
            return state;
    }
}

const storeExport = () => {
    const store = createStore(
        combineReducers({
            selectedProject: modalReducer
        })
    );

    return store
}



export {storeExport,chooseProject,modalReducer}