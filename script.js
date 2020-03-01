/* globals Docute */

new Docute({

  target: '#docute',
  sourcePath: './docs/',

  //顶部导航栏
  nav: [
    {
      title: '主页',
      link: '/'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/shufei021/rookie-book'
    },
    {
      title: '工具',
      children: [
        {
          title: '图片转base64',
          link: 'http://moxiaofei.com/rookie-book/tool/imgtobase64/index.html'
        },
        {
          title: '图片取色',
          link: 'http://moxiaofei.com/rookie-book/tool/getcolor/index.html'
        }
      ]
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
    },
    {
      title: '算法',
      links: [
        {
          title: '数组相关',
          link: '/algorithm/al-1',
        },
        {
          title: 'CSS3时钟',
          link: '/case/clock-case',
        }
      ]
    },
    {
      title: '案例',
      links: [
        {
          title: '仿博客园日历',
          link: '/case/date-case',
        },
        {
          title: 'CSS3时钟',
          link: '/case/clock-case',
        }
      ]
    }
  ],
  
})
