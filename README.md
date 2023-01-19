# 使用说明

**须知**：

1. **首先确定你已经在organization里，拥有对仓库的更改权限。**
2. 确保你已经安装了[Node.js](https://nodejs.org) 以及 [yarn](https://yarnpkg.com)

使用下列命令来配置

```bash
git clone git@github.com:lizzy-0323/vuepress-homepage.
cd vuepress-homepage
# 运行配置脚本
bash config.sh
```

## 发布

**将文件打包并上传到github服务器**

```
bash deploy.sh
```

## 本地调试

**如果你想要进行本地的调试，请采用以下命令打开本地调试服务器：**

```
bash run.sh
```

## 特点

- 支持Markdown以及emoji
- 发布较为容易
- 基于[Vue.js](https://vuejs.org/)以及[VuePress](https://vuepress.vuejs.org/)模版制作，你可以参考[VuePress](https://vuepress.vuejs.org/)的官方文档对本网站模版进行更新美化。

# 修改须知

1. 大家修改时，修改对应的模块即可，尽量不要动其他人的模块，根目录的*README.md*是整个文档的主页，其他每个文件夹下的*README.md*分别对应不同的页面，详情可自行查看
2. 奖项相关信息可能较多，需要大家在*honer*文件夹下新建对应的年份或者奖项分组md，然后在*config.js*里配置相关的路由
3. **整个项目的配置和修改都在*config.js*里进行，如果你要添加其他插件，请确保Github Pages撑得住：）**，添加自己编写的组件，需要写在*components*文件夹里

# 致谢

感谢[@imfing](https://github.com/imfing)的项目模版,本实验室lab主页使用了他的模版进行修改。
