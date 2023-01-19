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
      { text: "项目", link: "/projects/" },
      { text: "荣誉和奖项",link:"/honer/"},
      { text: "关于", link: "/about/" },
      { text: "GitHub", link: "https://github.com/TSMC-lab" }
    ],
    sidebar: {
      '/honer/':genSidebarConfig('Honer')
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
      collapsable: false,
      children: [
        '',
        '2022',
        '2021',
      ]
    }
  ]
}

