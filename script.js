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
      title: 'webpack',
      link: '/前端/前端工程化构建工具/webpack/webpack0'
    },
    {
      title: 'git',
      link: '/前端/项目版本控制/git'
    },
    {
      title: '开发相关网站',
      link: '/开发相关网站/dev-about'
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
    {
      title: 'GitHub',
      link: 'https://github.com/shufei021/rookie-book'
    }
  ],
  
  //侧边栏
  sidebar: [
    {
      title: 'Vue',
      openInNewTab:true,
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
        }
      ]
    },
    {
      title: '工具函数',
      children: [
        {
          title: 'url',
          link: '/工具函数/url',
        },
        {
          title: 'date',
          link: '/工具函数/date',
        },
        {
          title: 'generater',
          link: '/工具函数/generater',
        },
        {
          title: 'preview',
          link: '/工具函数/preview',
        }
      ]
    },
    {
      title: '算法',
      links: [
        {
          title: '算法题-1',
          link: '/algorithm/al-1',
        },
        {
          title: '算法题-2',
          link: '/algorithm/al-2',
        },
        {
          title: '算法题-3',
          link: '/algorithm/al-3',
        },
        {
          title: '算法题-4',
          link: '/algorithm/al-4',
        }
      ]
    },
    {
      title: 'leetcode算法',
      links: [
        {
          title: '个人leetcode题解',
          link: '/Leetcode算法/c-1',
        },
        {
          title: 'leetcode第1题',
          link: '/Leetcode算法/leetcode-1.md',
        },
        {
          title: 'leetcode第2题',
          link: '/Leetcode算法/leetcode-2.md',
        },
        {
          title: 'leetcode第3题',
          link: '/Leetcode算法/leetcode-3.md',
        },
        {
          title: 'leetcode第4题',
          link: '/Leetcode算法/leetcode-4.md',
        },
        {
          title: 'leetcode第5题',
          link: '/Leetcode算法/leetcode-5.md',
        },
        {
          title: 'leetcode第7题',
          link: '/Leetcode算法/leetcode-7.md',
        },
        {
          title: 'leetcode第8题',
          link: '/Leetcode算法/leetcode-8.md',
        },
        {
          title: 'leetcode第93题',
          link: '/Leetcode算法/leetcode-93.md',
        }
      ]
    },
    {
      title: 'Polyfill',
      links: [
        {
          title: 'Polyfill',
          link: '/Polyfill/Polyfill',
        }
      ]
    },
    {
      title: '技巧篇',
      links: [
        {
          title: 'skill',
          link: '/skill/skill',
        }
      ]
    },
    {
      title: '组件',
      links: [
        {
          title: 'vue组件',
          link: '/skill/skill',
        }
      ]
    },
    {
      title: '插件',
      links: [
        {
          title: '回到顶部插件',
          link: '/skill/skill',
        }
      ]
    },
    
    {
      title: '案例',
      links: [
        {
          title: '日历',
          link: '/case/date-case',
        },
        {
          title: '时钟',
          link: '/case/clock-case',
        }
      ]
    },
    {
      title: '开源项目',
      links: [
        {
          title: 'picker-card',
          link: '/开源项目/picker-card',
        },
        {
          title: 'rookie-localstorage-web',
          link: '/开源项目/rookie-localstorage-web',
        }
      ]
    },
    {
      title: '面试相关',
      links: [
        {
          title: '安全类',
          link: '/面试相关/安全类',
        },
        {
          title: '错误监控类',
          link: '/面试相关/错误监控类',
        },
        {
          title: '通信类',
          link: '/面试相关/通信类',
        },
        {
          title: '渲染机制类',
          link: '/面试相关/渲染机制类',
        },
        {
          title: 'http协议类',
          link: '/面试相关/http协议类',
        },
        {
          title: '前端兼容问题',
          link: '/面试相关/前端兼容问题',
        },
        {
          title: '页面性能类',
          link: '/面试相关/页面性能类',
        },
        {
          title: '继承',
          link: '/面试相关/继承',
        },
        {
          title: '原型链',
          link: '/面试相关/原型链',
        },
        {
          title: 'JS高级',
          link: '/面试相关/JS高级',
        }
      ]
    }
  ],
  
})
