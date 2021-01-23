import React, { memo,Suspense } from 'react'

import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import routes from './router/index'
import store from './store/index'


import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import ToTop from './components/to-top'
import Player from './pages/song/c-cmp/player-app/index'
function App(props) {
    return (
        <Provider store={store}>
            <HashRouter>
                <ToTop></ToTop>
                <AppHeader></AppHeader>
                <Suspense fallback='loading'>
                    {/* 路由懒加载需要用到Suspense */}
                    {renderRoutes(routes)}
                </Suspense>
                
                <Player></Player>

                <AppFooter></AppFooter>
                <div style={{ height: '60px' }}></div>
            </HashRouter>
        </Provider>
    )
}
export default memo(App)