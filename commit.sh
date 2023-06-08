# 仅限内部成员修改使用，为了防止有人不知道该怎么提交，所以写了这个脚本
# 请不要随意修改该脚本，如果有需要，请联系管理员
# 首先需要配置好Git和GitHub的SSH
# 其次需要确定你已经加入了TSMC organization
# 以下是git操作的流程
# 添加文件
git add .
# 提交文件，引号内为提交信息，可以更改
git commit -m "update"
# 推送到远程仓库
git push git@github.com:TSMC-lab/tsmc-website.git HEAD

