
# 概率的公理化定义 
## Non-negativity 
## Additivity 有限可加性 


# 条件概率
- 本质就是给定 token情况下 预测 Y
- $$
Q_{\theta} (y|x)
$$
# Baye's  Theroem 
贝叶斯定理 
$$
P(B_{i}|A) = \frac{P(B_{i})P(A|B_{i})}{P(A)} = P(B_{i} ) \frac{P(A|B_{i})}{\Sigma _{i} P(B_{i})P(A|B_{i})} 
$$ 
 - 转化先验概率和后验概率 

# 随机变量 
- 本质是一个映射函数（ 从哪里映射到哪里？ ） 
- 
## 离散型随机变量 
- discrete r.v can be decribed as PMF 

## 连续型随机变量 
 - continous r.v can be described as PDF 
 - CNF（累计分布函数 ） ：
## CNF的性质 
 - p(a_i) >= 0 (非负性)

- $\Sigma_{i}p(a_{i}) =1$ (Normalization )

## 对于 PDF
写做： 
$f(x) \geq 0,\forall x \in \mathbb{R}$
$$
\int_{-\infty}^{\infty} f(x) \, dx = 1  
$$
概率密度函数 
 - 包含负概率 
 - 点集合不算入概率 
## CNF 累计分布函数 
数学符号可以表示为 ： 
$F(X) = P(X\leq x) ,\forall x \in \mathbb{R}$

 - 概率密度函数 积分积出累计分布函数 
 - 累计分布函数 左极限为 -0 ； 右极限为1 ；
 - 区间函数可以直接使用 牛莱计算 

## 期望 和方差 
- 定义式： $Var(X) =E(X-E(X))^{2}=\Sigma(x-E(x)p_{i})$
- 化简式： 
 - $Var(X) = E(X-E(X))^{2}$
## common discrete Distributions   离散分布  

- Bernoulli Distribution 伯努利分布 
- $p(x) = p^{x}(1-p)^{1-x}$ (PNF) 
- 
 - binomial distribution 二项分布 $X~ Binomial (n,p)$
	 -  就是n重伯努利分布 
		-  E(x ) = np , var = np(1-p)

 - geometric distribution 几何分布 
	 - 相当于伯努利试验反复做，直到A出现
	 - $$
p(x) = p(1-p)^{x-1}
$$

 - $$
E(x) =\frac{1}{p}
$$
 $$
Var(x) = \frac{1-p}{p^{2}
}
$$

 - 无记忆性 
$$
P(X>m +n|X> m  ) = P(X>n)

$$
	- 无论前面的状态如何， 现在的状态都是重新计算的 


 - 超几何分布 （ 从盒子中抽出x个设备 ） 
		不抽回取样的个数是多少个； 

 - Poisson distribution 泊松分布 
	 - in a given space /time : how much of the random accident happens
	 - 当时间符合 彼此独立 ；速度稳定，同时发生概率小时，一般会考虑； 
	- $$
P(X=K) \frac{\lambda ^{k}e^{ -\lambda }}{k!} 
$$
 + 泊松分布就是 伯努利试验的极限的分布 ； 

 - $\lambda: 发生的总次数 ；k目前发生的次数$
	 -   也可以理解为：给定发生次数区间内发生小于x 的次数的概率是多少  

  - Possion的期望和方差都是  $λ$
## common continous Distributions 常见的连续分布 

 - 均匀分布 
	  $f(x) =\left( \frac{1}{b-a}  \right),(a<x<b ), =0(otherwise )$
- CNF？ 期望 ？ 方差？ 
- $Var(X) = \frac{(b-a)^{2}}{12}$

 - Exponential distribution 指数分布 


- 指数分布
$$
f(x) = \lambda e^{-\lambda x }
$$
$$
E(x) = \frac{1}{\lambda}
$$
$$
Var(x) =\frac{1}{\lambda^{2}}
$$
	- 泊松过程
		- 相比于静止的泊松分布 ，泊松过程可以理解为在每个时间点里的泊松过程的集合
		- 假设每个时间点为 λ的泊松分布 ，有t个时间点 ，那么泊松过程可以用 $Possion(\lambda t)去$描述 
			 - 独立增量 
					 -  描述如何计算给定时间内的次数（使用N(3)- N(2))形式  
			 - 平稳增量 

## Normal distibution 正态分布 
PDF: 
$$
f(x)= \frac{1}{\sqrt{ 2\pi  }\sigma} \frac{e^{ -(x-\mu)^{2} }}{2\sigma^{2}}
,  x \in \mathbb{R}
$$
or , 
$$
X \~  N(\mu,\sigma^{2})
 $$

当 $N\in(0,1)$时， 我们把他叫做 Standard Normal distribution   /gausssian distribution 
$$
\phi(x) = \frac{1}{\sqrt{ 2\pi }}e^{ -x^{2}/2 }

$$
	- N(0,1)的CDF为 
$$
\phi(x)  =P(X\leq x) =\int_{-\infty}^{=x} \frac{1}{\sqrt{ 2\pi }}e^{ -\mu^{2}/2 }  \, dx 
$$

- β分布 
- γ分布（不讲——）
## 题形： 高斯分布转化 
* 转化标准方差 
$P\left( \frac{x-\mu}{\sigma} >X \right)=P(\frac{X-\mu}{\sigma})$
- 代入标准公式 
![[fdee76c0fb9fd11df6249a24ff1e7d46.jpg]]

# 随机变量的变换 
## 离散变量的变换 
$$
P(Y =y) = \Sigma_{x:g(x)=y} P(X=x )
$$
 - 对能够产生y的x概率直接简单相加 


## 连续变量的变换 
- CDF 法
	- 求CDF
	- 代入y
	 - 求导 
### 单调函数的计算 ： 
 - 单调，那么就更简单了
$$
f_{Y} (y) =|h'(y)  | \cdot f_{X} (h(y))  
~ ~ when  \ \ h(y_{ }) is  \ the \ inverse \ of g(Y)
$$


## 琴生不等式 
 - 描述凹凸函数的 嵌套期望变换之间关系 
	 -  $$
g(tx+(1-t)y) \geq tg(x)+(1-t)g(y)
$$
 - if the function is convex up ; then
	 - E(g(X) )>= g(E(X)) (E在外面的大 )

## 信息量
- 定义 $I(X) =-\log p(x)$
	-   概率越小， 信息量越大 
### 信息可加
- 对于独立事件： 
  $I(A,B) =-\log p(A)\cdot p(B) =-\log p(A) -\log p(B)=I(A) +I(B)$
## 熵 
 - 描述信息的不确定性
 - 本质就是对信息量的平均,其值大于0 
	 - 离散形式：
	 - $$
H(x) = -\Sigma p(x)\log p(x)

$$
- 连续形式 ： 
- $$
H(x) = -\int_{}^{} p(x)\log p(x)
$$
- higher confidence = lower entropy 

## 交叉熵 
- $H(P,Q)= -\Sigma_{x} P(x)\log Q(x)$ 
	- Q(x)是预测概率 ，P(x)是实际概率 
	- 描述Q去预测的数据，要给出多大代价 
## KL 散度

$$
D_{KL} (P||Q) = \Sigma P(X)\log P(X) -\Sigma P(x) \log Q(x)  = H(P) -H(P,Q) \ \ (discrete \ form)
$$
- 就是信息熵减去交叉熵
- 可以理解为模型误差带来的代价
- 可以理解为
	- CE = Entropy +KL 
	- KL >= 0 ; 当误差为0时（p(x)= q(x)) ,KL=0 
		- proof :就是琴生不等式

##  MLE最大似然 

## 贝叶斯推理 

# 联合分布
## 随机向量
参考随机变量 , 这里是level up 版本 

## joint CDF 联合累计分布函数
$$
F(X,Y) =P(X\leq x, Y\leq y ) ,\forall x,y \in \mathbb{R}
$$
### propeties 
- F（x,y)  =P(A ＆ B)
- $F(\infty ,\infty ) = 1,$
- $F(-\infty,y)= F(x,-\infty) = 0$
- $F(-\infty,-\infty) = 0$
## marginal CDF 边缘累计分布函数 
 - 相当于去除一个变量 
	 - 直接to infnty / 积分实现 

- 联合密度分布函数可以定义边缘密度函数 ，但是反过来不成立 （维度收缩） 
## 条件CDF (条件密度)
 - 给定y/ x时， 如何观测另一个变量的值
- 条件分布= 联合分布 /边缘分布 
$$f_{Y|X} (y|x) = f_{X,Y} (x,y)/f_{X}(x)
$$

- 如果 $f_{Y|X}(y|x) =f_{Y}(y)$ ,则x,y变量之间独立 

## 随机变量独立定理 
 - $$
F(x_{1},x_{2},\dots,x_{n}) =F_{X}(x_{1})\cdot\dots \cdot F_{X}(x_{n}) 
$$  对于累计分布函数 ，如果多事件的累计分布函数的值相当于 每个独立的累计分布函数的乘积，那么各个事件相互独立 
- 如果各个变量相互独立，它们的联合分布可以拆解为各自边缘分布的乘积（参考最大似然） 
### 独立随机变量的均值和方差 
-$$
E(g(X)h(Y)) =E(g(X))E(h(Y))
$$
- 均值可拆乘，方差可拆加

$$
Var(g(X)\pm h(Y)) = Var(g(X)) + Var(h(Y))
$$
## 协方差矩阵
  - 定义式： 描述两个变量的方差是否一起变化 

$$
Cov(X,Y) =E[(X-E(X))(Y-E(y))]
$$

-  或者： 
- $$
Cov(X,Y) = E(XY)-E(X)E(Y)
$$
### 协方差矩阵的性质 
 
 - 定性分析 ： 如果随机变量是独立的 ，那么他们的协方差矩阵一定是 0 ；但是反之不亦然
 （补充） 
 - 协方差只能检验线性关系
![[77023344f11f324ece2b5537ab57115c.jpg]]
## 相关系数 ： 
 - 无量纲值 ，证明两个变量之间的相关性
$$
cor(X,Y) =\frac{cov(X,Y)}{\sqrt{ Var(x)Var(y) }}
$$
 - 描述的是两个变量之间的线性关系 
 proof: 
  $Var(y) =(1-\rho^{2}_{xy})$

## 条件期望 

- 顾名思义
-  离散的条件期望 
$$
E(X|Y=y) = \Sigma _{k=1}^{\infty} x_{k} p(X=x_{k}|Y=y) 
$$
 - 连续的条件期望 
 - $$
E(X|Y=y)  = \int_{-\infty}^{\infty} xf_{X|Y}(x|y) \, dx 
$$ 
	 - 结果是一个关于y的函数 
- 
## 全期望公式 
- $$E[X]=E(E[X|Y]) 
$$
 -  本质就是条件期望的加权平均 ，其中 **随机变量** Y 代表了各种情况

## 多元变量函数的取值 
 -  for function f(x,y)  
 $$
\begin{align}
 & f_{z} (z) = \int_{\infty}^{\infty} \,f(z-y,y)dy = \int_{-\infty}^{\infty} \,f(x,z-x)dx \\
 &   \\
 & if X , Y  are   \ independent \\
 & f_{z} = f_{X} * f_{Y}
  = -\int_{-\infty}^{\infty} f_{X}(z-y)f_{Y}(y) dy =\\
\end{align}
 $$
  fz也叫做 convolution （卷积） 
   - 理解 ：f_X 就是 一个概率 ，而 卷积描述了所有 可能构成z的概率的集合 
## Gamma 分布 
- 类似 泊松分布 ，表示第一![[77eaab8108205968126f2031ce4836e5.jpg]]次等待事件需要的整体时间是多少？ 
## 独立多重正态分布
$$
\begin{align}
 &  for  \ random \ variables ,  X_{1} ,X_{2}, X_{3}  , X\dots \\
 & a_{1}X_{1} + a_{2}X_{2} + \dots+  \~ N(\Sigma_{i=1}^{n }a_{i}\mu_{i},\Sigma _{i=1} ^{ n }a_{i}^{2}\sigma^{2})
\end{align}
$$
 - 符合线性相加原理


## 中心极限定理 CLT 





## CLT 中心极限定理    