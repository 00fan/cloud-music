import React, { memo } from 'react'

import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import routes from './router/index'
import store from './store/index'


import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
function App(props) {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppHeader></AppHeader>
                {renderRoutes(routes)}
                <AppFooter></AppFooter>
            </HashRouter>
        </Provider>
    )
}
export default memo(App)