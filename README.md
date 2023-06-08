# 使用说明

**在使用前**：

1. **首先确定你已经在organization里，拥有对仓库的更改权限，否则你将无法上传**
2. 确保你已经安装了[Node.js](https://nodejs.org) 以及 [yarn](https://yarnpkg.com)

使用下列命令来配置

```bash
# 下载
git clone git@github.com:TSMC-lab/tsmc-website.gi
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

# 使用须知

1. 本项目采用**vuepress**框架进行编写，每一个md文件都代表一个页面，大家修改时，修改对应的模块即可，尽量不要动其他人的模块，根目录的**README.md**是整个文档的主页，其他每个文件夹下的md文件分别对应不同的页面，详情可自行查看
2. 如果要添加其他的页面，请添加其他的md文件，然后在**config.js**中进行配置，
3. 如果你要添加其他组件，请自己编写vue文件，并在你的md文件中引用即可，组件都写在**components**文件夹里
4. 如果需要了解更多关于该网页的知识，你可以查看文档[[vuepress](https://vuepress.vuejs.org/zh/)]和[[vue](https://cn.vuejs.org/)]
# 致谢

感谢[@imfing](https://github.com/imfing)的项目模版,本实验室lab主页使用了他的模版进行修改。
