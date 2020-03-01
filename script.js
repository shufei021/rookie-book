/* globals Docute */

new Docute({

  target: '#docute',
  sourcePath: './docs/',

  //顶部导航栏
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Prototype',
      link: '/prototype',
    }
  ],

  //侧边栏
  sidebar: [
    {
      title: 'Vue全家桶',

      links: [
        {
          title: 'Vue',
          link: '/前端/Vue全家桶/vue/vue',
        },
        {
          title: 'Vuex',
          link: '/前端/Vue全家桶/vuex/vuex',
        },
        {
          title: 'Vue-router',
          link: '/前端/Vue全家桶/vue-router/vue-router'
        },
        {
          title: 'Axios',
          link: '/前端/Vue全家桶/axios/axios'
        },
        {
          title: 'Element-ui',
          link: '/前端/Vue全家桶/elenemnt-ui/elenemnt-ui'
        }
      ]
    },
  ],
  
})
