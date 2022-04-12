import { configureStore} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './sagas'
import rootReducer from './reducers'

const isDev = process.env.NODE_ENV === 'development'
const idProd = process.env.NODE_ENV === 'production'


const sagaMiddleware = createSagaMiddleware()

export const createStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: isDev,
        middleware: [sagaMiddleware]
    })
    sagaMiddleware.run(rootSaga)
    return store
    
}

const wrapper = createWrapper(createStore, 
    {debug: isDev }
)
export default wrapper