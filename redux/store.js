import { configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './sagas'
import rootReducer from './reducers'
import { createWrapper } from 'next-redux-wrapper'

const sagaMiddleware = createSagaMiddleware()

export const createStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: [sagaMiddleware]
    })
    sagaMiddleware.run(rootSaga)
    return store
    
}

export const wrapper = createWrapper(createStore, 
    {debug: process.env.NODE_ENV !== 'production' }
)