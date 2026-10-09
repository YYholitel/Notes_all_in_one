# VIM
首先进入的是命令模式，统一回到命令模式
-  i :输入模式
- :底线命令模式
	- :w : 保存文件
	- ：q 退出 
	- ：q! 强制退出
  - 使用 vim进创建文件 ：
	  - vim filename

# Shell 语法 
## 操作文件和系统
- ls  看文件目录
- ls -la  看隐藏文件 
- ls -d */  看文件夹 
- pwd看文件地址 

 - find . -name "file.txt" 查看file 文件 
 -  find . -name"*.py" 后缀 

- grep -r "keyword" .  找含有特定字的文件

- touch file.txt 创建新文件
- echo "hello" > file.txt 覆盖一句话到 文件里 
- chcho "world" >> file.txt 追加 ...


  -  code file.txt 用vscode打开 

- cat file.txt 查看小文件
- vim file.txt vim打开并编辑
- nano file.txt nano打开
	- ctrl+o 保存
	- ctrl+x退出


- file file.txt 看文件类型


 - cp file.txt folder 复制文件到文件夹 
 - cp -r folder_A folder_B 复制文件夹到文件夹 
 - mv folder_A folder_B

- rm file.txt删除文件 
- rm -rf folder/删除文件夹 
- mkdir -p 多层文件夹 

 - df -h 看剩余空间  
## 写脚本
- nano/vim file_name.txt
- chmod +x file_name.txt 加权限 
- ./my_first_script.sh 运行
	-  echo""打印
	- 命令直接执行
	- sleep 2 等2s
	- for i in {1..5} ; do 循环
	- exit 0  退出
- bash file_name.txt 直接运行也可以 
## 跑进程
