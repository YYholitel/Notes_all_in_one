	 什么是PR？什么是Merge？如何规范化管理自己的代码和实现多人协作 ？ 

# basis

 - local repository / remote repository 

# grammar
git init.  初始化 
- 表示文件夹受到git 仓库管理 
- 生成.git文件 
- .git文件记录了所有的 历史版本
.gitignore文件
 - git自动忽略
 - 文件内： 
	 - filename直接写
	 - file_folder /加上左斜号
git commit 
- 更新链式历史记录 
- detached 分离头指针

- commmit hash提交哈希
![[Pasted image 20260713141844.png]]

## 撤回
discard
放弃未更改的文件
reset
把仓库强制退回到历史状态
revert 
多人协作中生成反向commit ，抵销某次commit 
# branch 
- branch 通过指针独立并列版本
	- 处在分支时叫做 **feature**
- Merge实现分支版本合并
	- 不合并就不能在  main上面看到feature
- 删除分支
- 除了分离头指针，还可以在历史版本 feature更安全
# head 

# gitwork tree
- 适合并行开发
-  开辟文件夹 
- 合并后删除

# 冲突
手动决定
![[Pasted image 20260714122108.png]]
# 多人协作
- fork
- 本地打开fork项目
- 修改
- feature总是先pull ,在本地 **处理冲突** ，最后 再push上去
## cherry pick
  feature实现部分

# rebase
 