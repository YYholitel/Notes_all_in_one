现在是6月11日19.00，笨人因为考试 时间紧迫，因此 复习刻不容缓，现在打算 速通这个学期没怎么学的 JAVA 。

整个笔记没有完全按照原本PPt顺序 ，存在个人的理解下的调换和移动。

xdm祝我好运上82 分！（代码块可以当作考题？）
最终来结愿 ，获得了90 分 ，并且这三个月让自己有了很大的改变 
考了GRE ，学了DL ，RL ，DSAA ，Probability ! 发了iclr ,记得征程的开始 

# L1 JAVA 基本概念 
	keys: complie/interpret 概念， java program书写格式 ，JDK识别，类名的书写规则，大驼峰tricks,转义字符的识别

- 高级语言  ：人类可读的语言，e.g C++ ,JAVA ......
- 低级语言： （某汇编，）
- 机器语言 ：Binary commands....
- **compiler** (注意拼写) 把 高级语言转化成机器语言 
- interpreter ：直接运行高级语言 

- 运行过程
- 文件的后缀要注意！
![[Pasted image 20260611205808.png]]

```java
//正确的写法
java Hello 
javac Hello.java
```
 ```java
 //乱来
 java Hello.class //已经有类名
	 javac Hello (编译过程，但是没有文件命名)
 ```

- JRE 运行环境

- JVM 虚拟机 ，运行 java program

- JRE 参考图片

- ![[Pasted image 20260611210059.png]]
（还有 suporting files)
 - JDK Java Development Kit 0![[Pasted image 20260611210246.png]]
	了解框架即可


# 类的声明 
```java
public class Welcome1
```
- 限定词
- Identifiers 
	- **书写规则** 
			只有 a-z ,A-Z .0-9 ,$,_
			不能以数字开头 
	- 大小写敏感 （Main /main ) 
	- 大驼峰和小驼峰
## e.g 
判断下面的名字是否能做 identifiers
```java

asd
12# //false
3214 

ture //false 
null //false 
String // true ,for String is a Class
System // true
enum //false
```

# 方法声明
	方法是java特有的称呼，可以理解为函数



## 实参和形参 
argments

parameters 
	对一个方法定义 的 当然是 形参！ 
# The Newline Character \n 换行符 


# Escape Character 转移字符 

 -  escape sequence  由 Escape  charater + charcter组成 

![[Pasted image 20260611220936.png]]

\t  约等于 tab 
常见语法如上 ，注意（3中转义是固定方向的

# 格式化输出 
在 **格式化字符串** 里， 格式说明符(format specifiers) 使用 %开头 ，%叫做占位符（placeholder)

+ .2f：数字保留小数点精度

 - 开背
![[Pasted image 20260611225558.png]]

注意 %d 为 整数 ，%x基本不考
# Debugging 纠错 
根据错误类型 ， 指出修改方法 
## CE (Compile-time Error)
报错原因：
 - 语法不合规范

特征： 
- 直接 **不能被执行**

## RE （Runtime Error)
 e.g for RE 
 - ArithmeticException /数组越界 
  - 执行时 **Abruptly terminated**

## LE (Logical Errors)
 - 输出结果和实际要求不符
 - 一般是 logical Error 
# L2 数据类型和 计算 
	程序的本质是数据和操作，因此我们关注以下问题：数据长什么样 ？ 数据能做什么？（运算）？数据能够储存多大空间 ？ 数据范围有多大？ 数据出错怎么办？（溢出，精度丢失，除0 异常） 

	核心考点 ： int(规范，精度问题，溢出)，float(单精双精，有效位，占位符),char(unicode,16),引入,整数除法, 自增，短路求值,assignment tricks
	

数据类型反映了其可被操作的行为，以及存储的空间。

# Data Types

	
## primitive types 
包括以下类：

---

-  Integral Types : byte(8 bits) ,short (16 bits ),int(32 bits) , long(64 bits) (从小到大 ，字节分/别占用)
	- 特征： 循环输入（127+1 = -128）
			编码左侧第一个数表示 正负 （ 0为 正 ，1 为 负）

---

 - Floating-point types: float （32 bits,单精度 ，小数有效为 7位）,double(64 bits，双精度，有效位为 16位) 
		 -书写规范  
				float 需要加上 f

---

 - The boolean data type: true/ fasle


---

 - char data type : characters 
	 - char type是 16bits 的万国码 
	 ```java
	 char c2 = '\u5357' // 注意使用单引号 
	 ```
Type Cast 类型转换 

 - 直接在右侧赋值语句加上（primitive type） （因为赋值语句挂在右边） 
 - type cast 会对元数据的 **拷贝** 操作 

```java
int total  =1  ; 
int gradeCounter = 1 ;
int average;
average = (double) total/ gradeCounter ; //double  只对 total生效 ，而gradeCounter会隐式提升
```

# Type Promotion 
	  如何转换数据类型？ 
## 方法
  - Type cast
  - 隐式转换

## 规则 

#  变量的声明
参数可以被初始化同时被赋值
```java
int a = 3 + 4 ;
```
# Arithmetic computation 
## 数据的输入 
 - 使用 java.util.Scanner 类 ，
 - import 告诉编译器 使用的 类
 - 调用的 类统称为 Java Application Programming Interface (API)

---
 ```java
 import java.util.Scanner; //一定要小心分隔符！
 ...
 Scanner input = new Scanner(System.in); //对于静态语言，必须使用 type + name形式输出 
 ```
### next 和 nextLine()
next ： 不读却 间隔符和换行符；
nextLine()作为换行符会读取空格 ； 

## 二元操作符

| Op  | Use | Desciption     | e.g                                           |
| --- | --- | -------------- | --------------------------------------------- |
| +   |     |                |                                               |
| -   |     |                |                                               |
| *   |     |                |                                               |
| /   |     | 注意整数除法直接舍去；只要有 | int x = 3 ; int y = 2 ; int z = x /y // z = 1 |
| %   |     |                |                                               |
| ^   | XOR | 异或             |                                               |

```java
int x = 5 / 2.0;   // 5/2.0 = 2.5（double），不能放进 int
double x = 5 / 2;      // 还是 2.0 ❌
double y = 5.0 / 2;    // 2.5 ✅
```
## 操作顺序 

# Evaluation order of arithmetic expressions 

## Predecence

## Associativity


在相同的优先级里，计算是 **从左到右的** ，除了 **assignment operator**

---

如果有括号 ，那么最内层的结构是拥有最高优先级的
 - java 不承认  符号连用和混用

```java
a <= b <= c // invalid
a ++ - // invalid
```

---

## Conditional expressions  条件表达式
An expression that can be true or false ;

- 注意不要把条件表达式和赋值搞混再一起

- 自增(Postincrementing)注意一下

- 短路求值

```java
// 自增： 
int a = 6; 
int b = ++a ; //相当于 对 a操作完 再用b 
// a , b 值都是 7

int a   = 6 ;
int b = a ++ ;

```

---

```java
if(a && b ) ///短路求值 ，前值false 自动结束
if(c || d) //同上 ，前值为true  自动结束
```
```java
int a = 10;
int b = 0;

if (b != 0 && a / b > 5) {
    System.out.println("OK");
} else {
    System.out.println("NO");
} // 程序是否报错？ 
// no ! 短路！
```
# L3 控制流

	我们不是说了程序就是数据和执行吗？
		 关注以下核心： else; 三路控制； indentation无关性； 语法tricks((if);); switch ; if()生命周期;

---

# 控制结构
## Sequential   Flows 顺序结构 

---

## Conditional Flow 条件结构

 - if statement 
	 - 只在条件为 真时执行
	

---

 - if ... else statement  双路选择 
 
	 - else 不需要条件语句
	
	 - else没有花括号时只识别上一句if, 是 **与缩进无关**的
	
	 - （）条件句后不要加 ；，因为不是 完整的句子 
	![[Pasted image 20260612154421.png]]


![[Pasted image 20260612154351.png]]
 
 ![[Pasted image 20260612154404.png]]
 - switch statement 多路选择
 
 - 语法糖： 三元操作符? ;
```java
String result = student >= 670 ? "Passed" : "Failed"
```


---

## Repetitive Flow  循环结构

 一般循环结构的边界控制使用 **计数器** 控制的循环
 
 - while 

 - for 

 - 如果在条件语句内赋值变量，变量存储在栈区，生命周期为{}内；
 
 - switch 
	  - switch 不能使用 double 或者 float;

		- 如果不使用break ,则将从第一个匹配的位置开始一直执行 （渗透）直到出现 break /default
![[Pasted image 20260612190345.png]]
 
 - do { }.... while（）； 
 
   相比于while ,do内语句会先执行 整个语句至少只执行一次 
 
 - 分号还是 要写在最后面 


```java 
for (int i = 0 ; i <3 ; i ++){

System.out.print(i+" ");

}
System.out.print("循环结束") ;
//CE ，因为i没有被定义 
```
# 边界值控制的循环（Sentinel-Controlled Repetition)
	 如何控制循环？

- 适用于数字随机的过程（arbitrary number)

 - 使用 -1 作为退出边界 


# 循环的跳过
	什么时候结束循环？ 用什么形式结束循环？

## break Statement

 会使循环直接被破坏
## continue Statement

 - 在 while  和do ... while里，continue会直接进入下一个循环
 
 - 在for  statement里 ，会使得自增符增加，之后再次循环 

# L4 Arrays
	 核心考点： 数组的声明和创建 ；a.length属性和方法对比；数组打印foreach
# 基本性质

- fixed-size 长度固定

- same-type 类型相同

-  nonprimitive types  引用类型 （作为一个类存在）

# 数组的声明和创建 
```java
int [] Array; // 只声明
int [] doubleArray = new int [30]; //声明长度 
doubleArray [0] = 6 ;
```
- 数组声明不占据空间 ，因此需要初始化之后才能使用；

- 创建新数组的时候 ，需要使用new结构字；

- 一但被创建，就不能被修改；

- 如果不赋值， 自动指派默认值，对intergral是 数字 0 ；对char是 \u0000;对boolean 是false
# 数组的初始化

```java
int [] n = new int [] {10,20,30,40,50,60};

int [] w ={10,20,30,40,50,60}; //语法糖

```

# 数组的访问
## 属性访问
- 因为数组 是 **基本数据类型** ，因此显示长度使用 a.length(没有括号 ，不是方法 ，是 属性)

 - 数组的index =position -1 ; 数组越界会产生RuntimeError: ArrayIndexOutOfBounds Exception

| 数组      | String (类) | ArrayList,HashMap |
| ------- | ---------- | ----------------- |
| .length | .length()  | .size()           |
|         |            |                   |
```java
String s = "Java";
int[] a = {1, 2, 3};
ArrayList<Integer> list = new ArrayList<>();
list.add(10);

System.out.println(s.length());   // 输出？
System.out.println(a.length);     // 输出？
System.out.println(list.size());  // 输出？
```
# 数组的打印

 - 单个元素的打印必须要toString)( );不然会打印地址  ，但是char是个例外

```java
int[] intArr = {65, 66, 67};
char[] charArr = {'A', 'B', 'C'};

System.out.println(intArr);   // [I@15db9742
System.out.println(charArr);  // ABC
```
  - 多个元素的打印，不能直接打印数组 ，需要循环遍历
# foreach 语句
```
for(double e : myList){
	System.out.pritnln(e);
}
```
 foreach具有以下优点
  - 语法糖
  - 不会越界
  - 访问安全，哪怕实在语句块中，也只能修改 **拷贝**
	 - 如果要修改，需要调用myList的属性


```java
class Student {
    int score;
    Student(int s) { score = s; }
}

Student[] students = {new Student(60), new Student(70)};
for (Student s : students) {
    s.score = 100;        // 这一行能修改原对象吗？
}
System.out.println(students[0].score);
```
# 数组的拷贝 
 - 如果对list 1赋值到list 2 ,那么会赋值拷贝 
![[Pasted image 20260613145736.png]]
# 多维数组的使用
## 声明和初始化 
```java
int [][] gradebook ;
gradbook = new int [3][4];

//也可以部分声明
int [][] b = new int [2][] ; 
```
也可以直接一口气初始化
```java
int [][] gradebook = new int [][] {{1,2},{3,4}};
//
```


# Ragged Arrays 
	 本质是数组里存数组 
注意所有的书写形式就好了 ，每个数组里要装数组就独立看 ，不要乱来 

```java
	b[2] = {7,8,9};
//只有数组的声明的时候可以省略new int ; 如果这样没办法识别是数组所以是乱来 
```
# 多维数组的使用 

# L5  方法 
	 按值传递； 参数提升 ；char方法的使用 ；可变长度参数列表；

# 方法的声明和唤起 
![[Pasted image 20260613154439.png]]
 - Method name  和Parameters共同生成Method Binding 
  - 形式参数使用逗号分隔，而不是; 

# 参数传递 
 - java 只有按值传递
 - 对于primitive type ,方法内传入其拷贝
 - 对于 reference type，方法内传入其 **地址的拷贝**
```java
void change(int x) {
    x = 99;
}

int a = 10;
change(a);
System.out.println(a); // 10，不是 99
```
```java
void change(int[] arr) {
    arr[0] = 99;
}

int[] a = {10, 20};
change(a);
System.out.println(a[0]); // 99 ✅
```
```java
void change(int[] arr) {
    arr = new int[]{99, 100};
}

int[] a = {10, 20};
change(a);
System.out.println(a[0]); // 10 ❌ 改不了，因为换的是副本的指向
```
# 命令行实参 

![[Pasted image 20260613155811.png]]

# 参数提升：

	 其实可以和TypeCast一起记忆

- 参数提升发生在 除了 **boolean**的基本类型中 
![[Pasted image 20260407111007.png]]
- 记得String不是基本类型！ 
```java
boolean b = (boolean) 1;   // ❌ 编译错误
String s = (String) 123;   // ❌ 编译错误
char c = (char) 97;   // ✅ 合法，c = 'a'
int x = (int) 'a';    // ✅ 合法，x = 97
```

## 关于char
- char 是一个数字 
```java
char c = 'A';
System.out.println(c);   // A
System.out.println(c + 1); // 66（char 提升为 int）
```
 - byte short 不能转自动Char , 必须要 显示转换 
```java
byte b = 65;
char c = b;   // ❌ 编译错误
char c = (char) b;   // ✅
```
- char Array可以直接打印
```java
int[] intArr = {65, 66};
char[] charArr = {'A', 'B'};

System.out.println(intArr);   // [I@15db9742（地址）
System.out.println(charArr);  // AB（打印字符序列）
```
 - char 可以转  int （promotion) , 但是反过来要强转（会截断）
 ```java
 char c = 'A';
int x = c;      // ✅ 自动转（65）
char c2 = x;    // ❌ int → char 需要强转
char c3 = (char) x; // ✅
 ```

byte $\in-128,127$

# 可变长度参数列表 
	 其实是语法糖

在 parameter里  类型处使用省略号 ... ，可以传入自由长度的数组 

![[Pasted image 20260613161846.png]]
## 特点 
 - 唯一传参 
 - 放在最后
 - 其实 是数组 

# method call stack 方法调用栈

 - 方法被调用的 时候 ，JVM会创造激活记录（栈帧），储存调用的实参和形参。
 - 栈顶会执行这个方法
 - 栈遵循 LIFO原则 ,可以使用 push方法和 pop 方法调用和弹出 
 - 方法完成后 ， 返回值回调 ，栈出 ，GC启动

# 方法重载 

## 方法签名 

一个方法由它的方法名 ，传入参数类型和顺序决定
## Method Overloading 
方法重载允许同方法名但是不同传入参数的方法存在


![[Pasted image 20260613192430.png|386]]
但是这个办法就不能被区分 
# 模块化编程
## 方法抽象


# Constructor 构造器 

![[Pasted image 20260414103952.png]]
# l7 Strings / Wrapper Classes
	 关注 char，String ， equals() , == 方法 ; compareTo()的比较规则 ; StringBuilder()构造器的初始化 ；包装类：Interger/Character ; 

# String 

## String 基本属性 
String是一个类 ，属于 **java.lang** 包里 
## String 的初始化 ： 
```java
String s1 = new String ("hello world'');
String s2  = new String();

String s3 = new String(charArray, 3,2); //取第四行开始的后两个位置的元素
```
	  回忆一下Array的 初始化，构造器的 初始化 

## APIS
### equals（）;和 == 
~~equals（) 比较两个 String的值 ，而== 还会额外比较地址~~

### compareTo() 
无论长度 ，逐位比较两个参数的 

![[Pasted image 20260613222809.png]]

## Immutability 不可变性 

- String 一经生成 ，便不会改变 
# StringBuilder
 
总结所有的连接符的表示方法？ 
## StringBuilder 构造器

- 直接构造 默认16 char

- 可以指定长度

- 可以指定内容 ，使用 双引号 扩出来 
![[Pasted image 20260613223345.png]]
## append方法 

# 包装类

vs to primitive type 
 包装类可以 使用 方法
 ![[Pasted image 20260428105836.png]]
## character Method 

## Integer 和  Double  Method

Integer.parseInt()
Double.parseDouble() 
接入String 

# 包装类 Wrapper Class 

- 八大基本类型都提供了包装类 ：

- 注意名称都是全写！注意~~Integer~~和 ~~Character~~

-  泛型里必须使用包装类，否则就会报错

```java
// 这样写会报错！ArrayList 只能存对象，不能存基本类型
ArrayList<int> list = new ArrayList<>();  // ❌ 错误

// 必须用包装类
ArrayList<Integer> list = new ArrayList<>();  // ✅ 正确
list.add(5);      // 自动装箱：int → Integer
int a = list.get(0); // 自动拆箱：Integer → int
```
 
 - parseInt（）把 String  参数变化成了 十进制的 整数值
 
 - Double.parseDouble(String s )则把
# 自动包装和自动拆箱

```java
int a = 1 ;
Integer b = a ; // a的拷贝自动变成包装类
```
# l6 面向对象编程 
	注意无参构造器 ；String的初始化 ；equals()和== ； 
# 类
 - 设计一个类
 - 包含具体的实例对象，具体对象可以是各种属性
 - 调用方法 
# 类的声明
![[Pasted image 20260613195849.png]]

分别为 Access modifier /  key word / class name 


- 类分为头部和尾部  
- 类具有返回值 
- class name一般使用 大驼峰 命名法 

# Instantiation 
- 创建类相当于创建了新的数据类型(java is extensible language)，其是索引类
-  实例化时需要加上字眼new
- .作为成员操作符连接 

# 类的属性 
- 属性声明形式即变量声明 ；
- 
# ACCESS CONTROL
我们为了维护数据的安全 ，设置了  private 的方法 ，

private 只能在这个类里使用 

但是如果我们要 使用这个private的 数据怎么办呢？ 这时候就需要 使用 getter / setter  方法 

# getter/ setter methods 


```java
getter ：

return/print 

setter : 

```

# 构造器实例化


## 构造器重载 
 - 名字必须和类名一致
 - 不能有任何返回值 ，即使是 void
## 默认构造器
- 如果没有显示调用构造器 ，那么Java会自动调用隐式构造器 并为 实例变量赋上默认值 
![[Pasted image 20260613220153.png]]
![[Pasted image 20260613220158.png]]

# 
# Lesson  8 面向对象进阶
	 关注 ：String属于 java.lang包 ；静态成员的访问性；类的访问权限； 类成员访问权限 


# this 关键词

- this.指代field，与形参相区分

- this()也可以指代当前类的其他构造器 
# 组合
 - Has-a 关系 ， 和 继承 Is-a 关系 要相区分 


# 静态成员
- 非静态成员每次实例化的时候就会产生一个拷贝（数据声明就不会） （方法内部） 
- 静态成员代表了全类共同信息，且只会有一个拷贝（类内部共享）
- ~~静态方法不能调用非静态成员（实例变量和实例方法）~~
![[Pasted image 20260614110724.png]]

![[Pasted image 20260614111835.png]]

- 静态方法里不能调用  this. 
- main(Strings[] args )也是静态方法

# 实例成员 


# Packages
	 key: 管理和复用 
 - 包的声明： 必须使用public 
- 包的使用： 可以使用import语句构造 ，同时只能用 **一次** 且都放在 开头；

	语段：
	```java
	package sustech.CS101
	public class Time{
		private int hour ;
		private int minutes;
		private int second
	}
	```
## 包的引入
```java
import java.util.Scanner ;
```
### 多重类引入 
```java
import java.util * ;✳号代表全引入 
```

### 静态引入 
  - 静态的实例变量可以不使用类名和成员操作符作用
  ```java
  sqrt(4.0);
  ```

# 类的访问权限
- 一个类内部可以有多个类

- 最外层类一定要是public or package-private ，private不能修饰最外层符， 如果最外侧使用 final字样，那么整个类都不能被继承 


# 类成员访问权限 

## 访问权限：
	 顺便和继承的一起记忆下来 

![[Pasted image 20260524135750.png]]

- no modifier  又叫做package-private，**包内可以被访问，但是子类不能,不同包也不能**
``` java
package p1;

class Parent {
    int value = 10;  // package-private
}

package p2;
import p1.Parent;

class Test {
    public static void main(String[] args) {
        Parent p = new Parent();
        System.out.println(p.value);
    }
}

```

- private field字段在子类存在，但是不能 **使用** ，除非使用public/protected方法 

```java
class Parent {
    private int value = 100;
    public int getValue() { return value; }
}

class Child extends Parent { }

public class Test {
    public static void main(String[] args) {
        Child c = new Child();
        System.out.println(c.getValue());
    }
} //public方法成功调用private field  
```

- protected 的类不能再全局范围内使用 

```java
// 父类
class Parent {
    protected void doSomething() { }
}

// ✅ 正确：从 protected 升级为 public
class Child extends Parent {
    public void doSomething() { }
}

// ❌ 错误：从 protected 降级为 无修饰符（更严格）
class Child extends Parent {
    void doSomething() { }  // 编译错误！
}
```
访问权限只能高不能低

- no-modifier=package-private   只有子类和父类同包的时候 ，才能够使用private -method

- private ： subclass 不能继承任何的私有成员 
# final 关键词 

- final用来描述 **常数，类和方法**

- 一旦被创建 ，就需要被赋值 ，且之后不能被改变

```java
final int age =32 ; //直接构造 
```

```java
public class Name{
final int age ;
class Name ( int age ){
	this.age = age ;
 }
} //不直接赋值的话，必须使用构造器赋值，否则编译错误 
```
 
 - 如果是 static final，因为叠加了静态方法 ，因此只能初始化直接赋值 ，而不是 构造器赋值 

 ```java

 class Test {
    static final int A;   // ❌ static final 不能在构造器里赋值
    Test() { A = 10; }
}
 ```
 
  - String / System  类都是final类 
  
# 枚举类
- 枚举类内用 {，，，} 分割符号
- 每个类都使用大写 
```java
public enum Direction{
	NORTH,SOUTH,EAST,WEST;
}
```
 - 枚举类也是引用类型  
 - 枚举类的对象的声明直接使用 成员变量符+四个常数 
 ```java
 Direction d = Direction.EAST ;
 
 ```
 
 - 枚举类的打印可以直接打印 ，也可以.toString(); (和Char类似)
 
 -  枚举类的构造器不使用public字段 否则直接CE 
 
 - 枚举类的所有成员变量都是默认static final 字段 

## 一、整体架构：Java 运行时内存

text

Java Runtime Memory
        │
        ├── Heap Memory（堆内存）
        │   └── 存储所有对象（包括数组）
        │
        └── Stack Memory（栈内存）
            └── 存储方法执行信息（局部变量、引用）

---

## 二、Heap Memory（堆内存）

### 核心特征

| 特征       | 说明                   |
| -------- | -------------------- |
| **存储内容** | 所有对象（包括数组）           |
| **创建时机** | `new` 关键字创建对象时       |
| **生命周期** | 直到没有引用指向它（变成垃圾）      |
| **访问范围** | 全局访问（只要有引用，任何地方都能访问） |
| **管理方式** | 由垃圾回收器（GC）自动管理       |

### 示例

java

Object obj = new Object();  // 对象在堆中创建

int[] arr = new int[10];    // 数组也在堆中

String s = "Hello";         // 字符串常量也在堆中

---

## 三、Stack Memory（栈内存）

### 核心特征

| 特征       | 说明                |
| -------- | ----------------- |
| **存储内容** | 方法调用时的局部变量、参数、返回值 |
| **存储方式** | LIFO（后进先出）        |
| **生命周期** | 方法调用时创建，方法结束时销毁   |
| **访问范围** | 仅当前方法可见           |
| **大小**   | 比堆内存小得多           |

### 栈帧（Stack Frame）

每次调用方法，JVM 会创建一个新的栈帧：

- 存储局部变量（基本类型的值、对象的引用）
    
- 方法结束后，栈帧被**自动销毁**
    

---

## 四、堆 vs 栈 对比表

| 对比维度     | 堆内存（Heap） | 栈内存（Stack）   |
| -------- | --------- | ------------ |
| **存储内容** | 对象本身      | 局部变量、引用、方法调用 |
| **生命周期** | 长（直到成为垃圾） | 短（方法结束就销毁）   |
| **访问速度** | 较慢        | 较快           |
| **大小**   | 大         | 小            |
| **管理方式** | 垃圾回收（GC）  | 自动（方法结束释放）   |
| **线程共享** | 所有线程共享    | 每个线程独立       |

---

## 五、垃圾回收（Garbage Collection）

### 核心概念

> 自动回收**不再被引用的对象**所占用的内存

### 什么时候对象变成"垃圾"？

java

String s1 = "Hello World";     // 创建对象，s1 引用它
s1 = s1.concat("!");           // 创建新对象 "Hello World!"
                               // 原来的 "Hello World" 不再被引用 → 变成垃圾

### 图解过程

text

步骤1: String s1 = "Hello World";
       s1 ──────→ [Hello World]
       
步骤2: s1 = s1.concat("!");
       s1 ──────→ [Hello World!]
       
原来的 [Hello World] 没有引用指向它 → 变成垃圾 → GC 回收

### 为什么要垃圾回收？

- ❌ 不回收 → 内存泄漏（memory leak）
    
- ✅ 自动回收 → 程序员不用手动 `free()` 或 `delete`

## super的两种用法

super(参数)
super.方法名（）

# Method Overriding 
方法重写 ： 
a subclass can override accessible (non-private) instance methods of the superclass

The overriding method in subclass must have the same method signature with the overriden method in the superclass

方法改写中的继承 对 **非静态**的实例变量 适用，但要求要有相同的方法签名。

## overriding toString() Method
toString() 是一类方法，每个类都是直接或者间接的从Object中继承, 反映出一个对象的特征；

- 隐式调用时，会把object转化成 String;
- 因此，可能出现十六进制的 哈希码
- 本质是 a placeholder,占位符；
。

## Overriding equals(Object) Method 改写 重载方法 

- 同样从Object 继承
-  自动检查两个对象是否相同 (基于引用的比较)
- 改写后成为 （**基于状态** 的比较）


# Access Level of Overriding Method 

- 无论是重载方法还是modifiers的访问权 ，都遵循 只高不低原则

## Return Type of  Overriding Method 协同返回 

返回遵循 只高不低原则，

因此 子类可以 返回 **子类** 类型 /父类类型 


```java
// 不使用协变返回类型
class Product {
    public Product clone() {
        return new Product(...);
    }
}

class Book extends Product {
    // ❌ 必须返回 Product，不能返回更具体的 Book
    @Override
    public Product clone() {
        return new Book(...);  // 虽然可以返回 Book 对象，但类型声明是 Product
    }
}

// 使用时需要强制转换
Book book = new Book(...);
Book cloned = (Book) book.clone();  // ⚠️ 必须强制转换，麻烦且不安全
```

# L9 Inheritance 继承 
	注意  is a relationship,类的继承 ，接口的继承 ，构造器的调用（父类有参和父类无参）  toString改写（隐式调用 ，placeholder)  ; override权限（权限扩增 ，return 细化）  ；变量访问（hiding, super ,多态） 
# Class Hierarychy  类层次结构 
## 直接超类 Direct Superclass 
##  间接超类： 
- 即某个子类成为另外一个类的父类的形式
# 类的继承  
- 继承是一个 is-a relationship (区分 composition 是has a 的关系)
- 所有的类最初都继承于 java.lang.object类里 
- 类的继承只能是一个方向的 
- 类的实现是可以多接口的
```java
    class Student extends Person           // ✅ 一个父类
             implements Runnable,      // ✅ 多个接口
                        Serializable
```
# 接口的继承
接口可以多继承（也可以多接口） 
```java
 interface A { }
interface B { }
interface C extends A, B { }           // ✅ 接口可以多继承
```
# 构造器的继承和调用
	 方法重载的调用问题 

## 继承
- 构造器不是类，因此不能被继承 
## 调用 
-  父类有无参构造器，子类没有构造器 ，可以隐式调用父类构造器

```java
class Parent {
    public Parent() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    // 没有写任何构造器
}

public class Test {
    public static void main(String[] args) {
        Child c = new Child();
    }
} 
```

- 父类有无参构造器 ，子类有有参数构造： 默认调用无参， 再调用有参

```java
class Parent {
    Parent() {
        System.out.println("A");
    }
}

class Child extends Parent {
    Child(int x) {
        System.out.println("B");
    }
}

public class Test {
    public static void main(String[] args) {
        new Child(5);
    }
}
```
- 父类没有无参构造器，子类需要显式调用super() **有参** 构造器;
```java
class Parent {
    Parent(int x) {
        System.out.println("A");
    }
}

class Child extends Parent {
    Child() {
        super(10);
        System.out.println("B");
    }
}

public class Test {
    public static void main(String[] args) {
        new Child();
    }
}
```
## super
 - super  可调用父类构造器
	 - 父类如果有无参构造器 ，子类可以直接继承
	 - 没有无参构造器 ，子类必须显式写在第一行
（题目前面有）
 - super.()可以调用父类实例方法
 - super. 可以调用父类成员方法
# Method Overriding
- 方法重写实现了继承中的多态
- 方法签名必须相同
- 可以使用@Override注解 *不是一定*
## toString()重写
- 所有的toString() 都从 Object里 直接继承 

- 返回String
- 如果对象需要被转换，则会 **隐式** 使用toString()方法 
-  如果不被改写，那么会返回 “名称+@+HashMap的十六进制”的值
-  它是 占位符（placeholder)，子类可以通过重写改方法自定义字符串的表示
```java
class Student { }

public class Test {
    public static void main(String[] args) {
        Student s = new Student();
        System.out.println(s);
    }
}
```
```java
class Student {
    private String name;
    Student(String name) { this.name = name; }
    
    @Override
    public String toString() {
        return "Student: " + name;
    }
}

public class Test {
    public static void main(String[] args) {
        Student s = new Student("Alice");
        System.out.println(s);
    }
}
```
## equals重写 

# 方法重载的权限设计  

- 改写只针对可访问的继承对象改写

- Overrride的权限只能提升 ，不能下降 

-  子类的方法签名必须相同

-  协变返回： return type的类型 可以是 父类的子类 

```java  //跨包，不能改写 

package p1;
class Parent {
    void show() { }   // package-private
}

package p2;
import p1.Parent;
class Child extends Parent {
    void show() { }
}

```
```java
//权限提升 
class Parent {
    protected void show() { }
}

class Child extends Parent {
    public void show() { }
}
```
```java
class Parent {
    public void show() { }
}

class Child extends Parent {
    protected void show() { }
}
```

``` java
class Parent {
    void show(int x) { }
}

class Child extends Parent {
    void show() { }
}
```
```java
class Parent {
    void show(int x) { }
}

class Child extends Parent {
    void show() { }
} //协变返回  ，类型提升 
```
## 隐藏 
 -  发生在同名变量中 
 
 - 父类 **实例变量和静态成员** 不支持 **改写** ，但是 子类的 改写会被 隐藏


 ```java
  class Parent {
    static void show() { System.out.println("Parent"); }
}

class Child extends Parent {
    static void show() { System.out.println("Child"); }
}

Parent p = new Child(); //多态 
p.show(); //输出 Parent 
 ```


---
# SUM ：变量访问的大一统格式 
 - 有super，直接看父类 
 - 无super ,有多态 ，直接看引用类型
 - 多态类里没有 ，就看父类

```java
//无super,有多态 
class Parent { String name = "Parent"; }
class Child extends Parent { String name = "Child"; }

Parent p = new Child();
System.out.println(p.name);
```
```java
class Parent { String name = "Parent"; }
class Child extends Parent { String name = "Child"; }

Parent p = new Child();
System.out.println(p.name); //有super ,看父类
```
 
# L10 Polymorphism 多态 
	 关注多态调用大一统；  抽象类的实例化（ps:runtime的只有动态绑定和实例化）(无new);抽象类的继承；抽象方法和字样 
# 多态  
	 
## 多态行为 

	只要区分什么是编译过程发生的 ，什么是在运行时发生的就好了。 
	
- 父类引用指向子类对象
```java
Animal animal = new Fish() ; 
```

```java
Fish fish = new Animal() ; //错误的 
```

- 父类引用（reference type )在编译中被识别 , type在 JVM中被识别 

-  动态绑定：**调用实例方法时** ，使用 acutual type 方法

![[Pasted image 20260614203216.png]]
	
	- 如果父类没有该实例方法， JVM能跑 ，但是 compilationError （其实是JVM都没有跑起来） 

```java
class Animal { }
class Fish extends Animal {
    void sleepEyesOpen() { }
}

Animal a = new Fish();
a.sleepEyesOpen();
```
- **访问实例变量** 和 **静态方法** 的时候 ，使用父类引用

 **
```java
class Animal {
    void sleepEyesOpen() { }
}
class Fish extends Animal {
    void sleepEyesOpen() { }
}

Animal a = new Fish();
a.sleepEyesOpen();
```
- 向下转型 ：通过向下转型 ，实现动态绑定中 调用 **子类的特殊实例方法 
- 向下转型可能导致ClassCastException错误 ，需要使用instanceof  方法 判断
- ```
  Animal a = new Bird();
  Fish f = (Fish) a;
  ```
# 方法绑定
	
## 动态绑定
上文已有
## 静态绑定
- 叫做early binding / compile-time binding 
- 编译器根据实际类型调用
- 典例有 Method Overloading , private/static Method 
	-  private/static Method 隐式自带 final 字样
# 成员访问SUM ： 
- 终极口诀：只有非private，非static的方法 看实际类型
```java
/*
 * 一句话规则：
 * 只有【普通实例方法】看实际对象（动态绑定）
 * 其他所有（实例变量、静态变量、静态方法）看引用类型（静态绑定）
 */

class Parent {
    String name = "P";
    static String type = "P";
    void show() { System.out.print("P "); }
    static void stat() { System.out.print("P "); }
}

class Child extends Parent {
    String name = "C";
    static String type = "C";
    void show() { System.out.print("C "); }
    static void stat() { System.out.print("C "); }
}

public class Test {
    public static void main(String[] args) {
        Parent p = new Child();

        System.out.print(p.name + " ");   // 实例变量 → 看引用 Parent → P
        System.out.print(p.type + " ");   // 静态变量 → 看引用 Parent → P
        p.show();                         // 实例方法 → 看实际对象 Child → C
        p.stat();                         // 静态方法 → 看引用 Parent → P
    }
}

// 输出结果：P P C P
// 正确答案：B
```

# 抽象类：abstract Class

## 具体类和具体方法
 
 - 具体类的方法是具体方法

	- 具体方法提供了实现 

 - 具体方法可以被实例化


## 抽象类

- 多态中子类的独特方法可以通过抽象类实现

- 抽象类不能 被**实例化**
```java
abstract class Animal {
    abstract void sound();
}

Animal a = new Animal(); // 不能被实例化,实例化是在JVM发生的 
```
- ~~抽象类可以有非抽象方法，构造器，实例变量和实例方法~~
```java
abstract class Animal {
    String name;
    
    Animal(String name) {
        this.name = name;
    }
    
    void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name);
    }
}

public class Test {
    public static void main(String[] args) {
        Animal a = new Dog("Buddy");
        a.eat();
    } // 结果是 Buddyis eating
}
```
- 只有抽象方法的类必须要有abstract 字样
```java
class Animal {
    abstract void sound();
}
```
 - 抽象**类**不能含有Static/final ，但是可以有静态**成员**和final**成员** 
  ```java
// 以下哪些是编译错误的？

abstract class Animal {
    static int count = 0;           // I
    final String name = "Animal";   // II
    abstract final void sound();    // III
    final void breathe() { }        // final 方法 ✅
}

final abstract class Bird { }       // IV
  ```
### 抽象类的继承
- 对于抽象类里的抽象方法，子类必须提供实现方法，否则子类也要求声明为抽象类 
```java
abstract class Animal {
    abstract void sound();
    abstract void move();
}

class Dog extends Animal {
    void sound() { System.out.println("bark"); }
    // void move() 没有实现
}

abstract class Cat extends Animal {
    void sound() { System.out.println("meow"); }
    // move 留待更具体的子类实现
}

class Tiger extends Cat {
    void move() { System.out.println("run"); }
}
问：哪些类是编译错误的？

A. Dog 和 Cat  
B. 只有 Dog  
C. 只有 Cat  
D. Dog、Cat、Tiger 都正确

✅ **答案：A**
```
## 抽象方法
 - 抽象方法 不能含有 static /private/final字样 

# CH 11 interface 

# java接口
- 接口类似于抽象类，是一种特殊的 **类** 
-  使用interface 关键字
- 接口可以包含声明
- 字段自带 **public** static final 
- 不可以含 **构造方法** 
```java
interface I {
    I() { }          // 第 1 处
}// 错误

abstract class A {
    A() { }          // 第 2 处
}

enum E {
    E() { }          // 第 3 处
}
```

## 接口的实现 
- 使用implements实现接口 （注意拼写）
- 要么使用具体类实现 interface的所有的方法 ，要么使用抽象类


## 接口的使用 
- 接口也是 引用类型
- 接口不能直接实例化 
```java
interface Animal { }

abstract class Dog implements Animal { }

class Cat implements Animal { }

public class Test {
    public static void main(String[] args) {
        Animal a1 = new Animal();   // 第 1 处
        Animal a2 = new Dog();      // 第 2 处
        Animal a3 = new Cat();      // 第 3 处
    }
}
```
- 实现了该接口的类可以视为该接口的类型 

- 接口不能继承类，不能有构造器和构造方法，也不能实例化
```java
interface A { }
interface B { }
class C { }

interface D extends A, B { }        // 第 1 处
interface E extends C { }            // 第 2 处
abstract class F extends C { }       // 第 3 处
```

# CH13 泛型
	 关注泛型声明 ，有界参数类型限定范围（extend，包装类),接口的泛型
 

# 泛型方法
## 泛型的声明 
```java
public static <T> void rintArray (T [] array){
for (T element : array) System.out.printf("%s", element);
System.out.println();
}
```
- 使用类型参数 限定范围  
 - 编译过程中 ，编译器首先精准匹配方法，如果没有 ，则调用 **泛型方法**，最后检查 类型的兼容性

```java
public static void printArray(T[] array) { for (T element : array) System.out.printf("%s ", element); //隐式调用 toString方法 

System.out.println(); }
```
# 泛型方法的优点： 
- 自动匹配
- 类型安全 

## Bounded Type Parameter  有界类型参数  
### 类的泛型
 - extend字样代表限定了Number类
 - 注意一定是要包装类！
```java
public static <T extends Number? int sum (T x , T y){
return ....
}
```

### 对接口的泛型
```java
public static <T extends Comparable<T>>  int sum (T w ,T j){
}
```

# 泛型类 Generic classes
 - 也叫做参数化类
## 泛型类的 声明 

```java
private List<T> ele;
public void push (T item){
elements.add(item);
}
public T pop (){
return elements.remove(elements.sieze()-10);
}
}
```
 - 参数可以包含多个参数，使用逗号说明； 
 ```java
 public class Pair<K, V> { }
public static <T, U> void print(T t, U u) { }
 ```

# 泛型的继承
- Erasure:编译时 ，T会转变为上界（对参数和类和返回方法都适用） 
- 泛型的赋值： 
	- 参数类型相同： 父类引用可以指向子类
```java
// 类型参数相同：可以
ArrayList<String> → List<String>   ✅

// 类型参数不同：不可以
List<String> → List<Object>        ❌
List<Animal> list = new ArrayList<Dog>(); //错误的 
```



# Excetption Handling 异常抛出 

# Execptions 异常抛出

JAVA 中有两种 异常：
- ArithmeticException 数学计算 错误
- InputMismatchException 输入类型错误

输出错误时，方法调用栈就会显示。

The name (type) of the exception . 
Stack Trace 栈迹
|   |   |
|---|---|
|异常类型|如 `ArithmeticException`|
|异常消息|如 `/ by zero`|
|堆栈元素|异常发生时的调用路径（从上到下：调用顺序）|
|异常抛出点|堆栈顶部的行号|
# Exception handling 
异常处理能提高鲁棒性和容错性

## 
### 1 基本语法

java

try {
    // 可能抛出异常的代码
} catch (ExceptionType1 e1) {
    // 处理类型1的异常
} catch (ExceptionType2 e2) {
    // 处理类型2的异常
}

**规则**：

- `try` 块后必须紧跟至少一个 `catch` 或 `finally`
    
- 异常参数 `e1` 是 catch 块中的**局部变量**
    
- catch 块按顺序匹配，**第一个匹配的执行**
### 3.2 执行流程（终止模型）

1. 异常发生 → **跳过 try 块剩余语句**
    
2. 控制转移到**第一个匹配的 catch 块**
    
3. 执行 catch 块中的代码
    
4. 退出 try-catch 语句，继续执行后续代码
# try -catch statement syntax 
·
```java
try{
code that throw an exception 
}
catch{
code that handles type1 exception 
}
finally {
}

```

InputMismatch Exception 必须要用 Scanner.nextline()清除

ArithmeticException不需要清除

| 类型                   | 说明              | 是否需要处理                    |
| -------------------- | --------------- | ------------------------- |
| **Error**            | JVM 内部错误（如内存溢出） | ❌ 不应捕获，无法恢复               |
| **RuntimeException** | 未检查异常，通常由程序缺陷导致 | 可选，编译器不强制                 |
| **其他 Exception**     | 检查异常，通常由外部环境导致  | ✅ **必须**处理（catch 或 throws |
## 五、检查异常 vs 未检查异常

| 特性    | 未检查异常                                        | 检查异常                                  |
| ----- | -------------------------------------------- | ------------------------------------- |
| 父类    | `RuntimeException`                           | `Exception`（非 RuntimeException）       |
| 原因    | 程序缺陷                                         | 外部环境问题                                |
| 编译器要求 | 可以不处理                                        | **必须** catch 或 declare                |
| 例子    | `ArithmeticException`、`NullPointerException` | `IOException`、`FileNotFoundException` |


# finally 块
finally 无论结果都会执行；
# java 的异常体系 ：  

## 类层次结构 
所有的 异常都继承自 Throwable类上
Throwable有两个子类：
ERROR （JVM的内部错误） 应用程序不应该捕获；（直接终止） 

Exception 程序中应该处理的异常；

### 检查类异常  Checked Exception 
继承自Exception ,但不是 RuntimeException的 子类， 因此必须要  try-catch结构/ 或者在方法签名中声明 ；
e.g IOException/FileNotFoundException 

###  非检查型异常
继承自 RuntimeException 
不强制处理 ，因此编译器不会检查 ， 一般是程序错误逻辑错误导致 ；
e.g 
ArithmeticException ,NullPointerException  


# 处理异常的 关键字 

public void readFile(String path) throws (FileNotFoundException,IOException)

## throw  

```java
public void checkAge(int age){
if(age<0){
	throw new IllegalArgumentException( "年龄不能为负数")
}

```
使用的位置为 方法内部 
## throws

```java
public void readFile(String path) throws FileNotFoundException,IOException{
	FileReader reader = new FileReader(path);
}
```
使用的位置在 方法签名中 

# 常见的 异常处理方法 

printStackTrace()
打印堆栈跟踪信息 到 标准错误流
getMessage(){
返回异常的 详细描述 信息 
}
getStackTrace(){

}

stub

# 链式异常 （chained Exception)

封装原始 异常 

caused by 信息 

# 自定义异常 

# Assertion 断言 

assert expression 
如果expression 为 false ,那么 抛出 AssertionError


assert expression expression1:expression2 :抛出 AssertionError,把expression2 作为错误信息。
```java
public class AssertionExample{
		public static void main (Strings [] args){
		Scanner input =new Scanner (System.in);
		System.out.print();
		int number = input.nextInt();
		
		assert (number >= 0 && number <10 ) :"bad number" + number ;
	}
}
```

如果 expression1 为false ,那么抛出 AssertionError ,

启用：
java -ea ClassName;
条件 为 false时 ，抛出 AssertionError.

	aa