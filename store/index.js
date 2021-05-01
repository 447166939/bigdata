import { applyMiddleware, createStore,combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'
import commonSaga from './modules/common/saga'
import themeSaga from './modules/theme/saga'
import { commonReducer, namespace as commonNamespace} from './modules/common/reducer'
import {themeReducer, namespace as themeNameSpace} from './modules/theme/reducer'
import { createWrapper } from 'next-redux-wrapper'
export function* rootSaga() {
    yield all([
        ...commonSaga,
        ...themeSaga,
    ])
}
const rootReducer = combineReducers({
    [commonNamespace]: commonReducer,
    [themeNameSpace]: themeReducer,
})
const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))
    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}

export const wrapper = createWrapper(makeStore, { debug: true })
