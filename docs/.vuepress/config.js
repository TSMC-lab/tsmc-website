module.exports = {
  title: "TSMC Club",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/register-components',
      {
        componentsDir: './components'
      }
    ]
  ],
  themeConfig: {
    search: false,
    nav: [
      { text: "主页", link: "/" },
      { text: "成果展示", link: "/projects/" },
      { 
        text: "成员",
        link:"/members/",
        items:[
          {text:'教师',link:"/members/teacher"},
          {text:'学生',link:"/members/student/",items:[
            { text: '2017',link:"/members/students/2017"},
            { text: '2018',link:"/members/students/2018"},
            { text: '2019',link:"/members/students/2019"},
            { text: '2020',link:"/members/students/2020"},
          ]},
        ]
      },
      { text: "关于", link: "/about/" },
      // { text: "EN", link:"/en/"},
      // { text: "GitHub", link: "https://github.com/TSMC-lab" }
    ],
    sidebar: {
      '/members/':genSidebarConfig('成员')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title: '教师',   // 必要的
      path: '/members/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        // 'members/teachers/gsk',
        // 'members/teachers/lh',
      ]
    },
    {
      title: '学生',
      children: [
        '/members/students/2017',
        '/members/students/2018',
        '/members/students/2019',
        '/members/students/2020',
      ],
      initialOpenGroupIndex: -1 // 可选的, 默认值是 0
    }
  ]
}

