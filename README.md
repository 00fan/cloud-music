#使用React编写的的云音乐PC web项目，接口来源开源的接口
线上项目地址：http://121.4.252.64:4000/
##
项目以完成如下功能：
> 推荐页面：
> 1. 热门推荐
> 2. 轮播图
> 3. 榜单

> 歌曲播放：
> 1. 暂停，快进选择
> 2. 歌曲的顺序，循环，单曲播放功能

> 排行榜页面：
> 1. 各种榜单的切换

##项目规范：
> 项目全部使用函数式组件，并且全面使用hook
> + 函数式组件全部用memo包裹，避免不必要的渲染
> + 内部状态使用useState

>css采用all in js 思想
> + 局部样式采用styled-component
> + 全局采用普通css

> 状态管理：
> + 内部状态使用useState
> + 业务数据全放在redux中管理

> redux
> + redux结合immutableJS
> + 每个模块有自己独立的reducer,通过combineReducer合并
> + 网络请求放在actionCreatoes中，redux-thunk
> + 不再使用connect,直接采取redux hooks

> 网络请求采用axios
> + 对axios进行二次封装；
> +  所有的模块请求放到一个请求文件种单独管理；

> 项目使用AntDesign

