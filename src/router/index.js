import { Redirect } from 'react-router-dom'
import Discover from '../pages/discover'
import Friend from '../pages/friend'
import Mine from '../pages/mine'
import Player from '../pages/player'

import Recommend from  '../pages/discover/c-cmp/recommend'
import Singer from  '../pages/discover/c-cmp/singer'
import Ranking from  '../pages/discover/c-cmp/ranking'
import Radio from  '../pages/discover/c-cmp/radio'
import NewDisc from '../pages/discover/c-cmp/new-disc'
import PlayList from '../pages/discover/c-cmp/playlist'
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
    }
]
export default routes;