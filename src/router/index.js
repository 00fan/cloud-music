import { Redirect } from 'react-router-dom'
import React from 'react'

// import Discover from '../pages/discover'
// import Friend from '../pages/friend'
// import Mine from '../pages/mine'
// import Player from '../pages/player'
// import Song from '../pages/song/index'

// import Recommend from  '../pages/discover/c-cmp/recommend'
// import Singer from  '../pages/discover/c-cmp/singer'
// import Ranking from  '../pages/discover/c-cmp/ranking'
// import Radio from  '../pages/discover/c-cmp/radio'
// import NewDisc from '../pages/discover/c-cmp/new-disc'


const Discover=React.lazy(()=>(import('../pages/discover')))
const Friend=React.lazy(()=>import('../pages/friend'))
const Mine=React.lazy(()=>import('../pages/mine'))
const Player=React.lazy(()=>import('../pages/player'))
const Song=React.lazy(()=>import('../pages/song/index'))


const Recommend=React.lazy(()=>import('../pages/discover/c-cmp/recommend'))
const Singer=React.lazy(()=>import('../pages/discover/c-cmp/singer'))
const Ranking=React.lazy(()=>import('../pages/discover/c-cmp/ranking'))
const Radio=React.lazy(()=>import('../pages/discover/c-cmp/radio'))
const NewDisc=React.lazy(()=>import('../pages/discover/c-cmp/new-disc'))
const PlayList=React.lazy(()=>import('../pages/discover/c-cmp/playlist'))
const routes = [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to='/discover' />
        )
    },
    {
        path: '/discover',
        component: Discover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path: '/discover/recommend',
                component: Recommend
            },
            {
                component:Ranking,
                path:'/discover/ranking'
            },
            {
                component:PlayList,
                path:'/discover/playlist'
            },
            {
                component:Radio,
                path:'/discover/radio'
            },
            {
                component:Singer,
                path:'/discover/singer'
            },
            {
                component:NewDisc,
                path:'/discover/new-disc'
            },

        ]
    },
    {
        path: '/player',
        exact: true,
        component: Player
    },
    {
        path: '/friend',
        exact: true,
        component: Friend
    },
    {
        path: '/mine',
        exact: true,
        component: Mine
    },
    {
        path:'/song',
        component:Song
    }
]
export default routes;