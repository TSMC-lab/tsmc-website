module.exports = {
  title: "TSMC lab",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    search: false,
    nav: [
      { text: "主页", link: "/" },
      { text: "成果展示", link: "/projects/" },
      { 
        text: "成员",
        link:"/members/",
        items:[
          { text: '2017',link:"/members/2017"},
          { text: '2018',link:"/members/2018"},
          { text: '2019',link:"/members/2019"},
          { text: '2020',link:"/members/2020"},
        ]
      },
      { text: "关于", link: "/about/" },
      { text: "EN", link:"/en/"},
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
      title,
      collapsable: true,
      children: [
        '2017',
        '2018',
        '2019',
        '2020',
      ]
    }
  ]
}

