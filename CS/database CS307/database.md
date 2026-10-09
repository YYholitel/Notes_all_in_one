# 关系数据库 

## basis
- rows也叫做 records,  tuples 
- colomns也叫做Attributes 
- 每个column都储存一片数据
- 保证操作是原子性的 
- 键不允许重复 

![[Pasted image 20260907113917.png]]
- 键通过Attribute实现区分  
- 主键确保信息唯一性 primary key 
## Normalization 

### 1NF 第一范式 
- each column should only contain ONE piece of information 

# ER 实体关系模型 
 - 遇到复合的数据表 ，直接使用会导致冗余 
 - 考虑refactoring继续拆表 

## Entity 
## Relation 

## Cardinality 
- 关系的数量结构

## ER图 连接表 

# Data Definiton 数据的定义和操作 
## DDL 数据定义语言 
- DDL定义了数据的shcema,定义核心问题：
	- lab有哪些列表
	- 每列是什么类型
	- 哪些不能为空 
	- 哪些是主键
	- 哪些组合是唯一的 
### create 

### Intergrity constraints 
- 通过限制，防止脏数据进入数据库 

### authorization 

# 

postgre -> database (gre.lihanyao) -> schema -> table 
 - 树形结构 ；
 - a schema contains many table ? 
 - 
## DML  数据操作语言 
- DML定义了如何操作数据 
- 核心操作包括 **增删查改**
### Structured Query Language （SQL） 
- SQL 操作关系表，实现数据移动
- 常见SQL操作有：

	- Select 选行
	- Project 选列 
	- join 连表 



# 常见q: 
Q1：Can a schema be shared across two databases?
 Can a table be shared across two schemas?
Q3：A schema contains many tables?
Creating a table means a new row has been stored? no , INSERT 
Create table 成功后可以确认 Column 还是 Row？