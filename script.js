/* globals Docute */

new Docute({

  target: '#docute',
  sourcePath: 'http://moxiaofei.com/markdown/',

  //顶部导航栏
  nav: [
    {
      title: '主页',
      link: '/README'
    },
    {
      title: '工具',
      children: [
        {
          title: 'Spectrum',
          link: 'https://spectrum.chat/your-community'
        },
        {
          title: 'Discord',
          link: 'https://discord.app/your-discord-server'
        }
      ]
    },
    {
      title: 'GitHub',
      link: 'https://github.com/shufei021/rookie-book'
    },
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
    }
  ],
  
})
