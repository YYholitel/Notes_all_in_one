# U-MATH：150 道纯文本积分学题人工核查

来源：[官方数据集 toloka/u-math](https://huggingface.co/datasets/toloka/u-math)。原始 split：`test`。许可：MIT。

筛选条件：`subject == "integral_calc"` 且 `has_image == false`。共 150 道，按原数据顺序编号。题目和参考答案原文完整保留，未翻译、改写或自动判断正确性。编号便于交流，原始 UUID 用于追溯。

这些题是积分学评测候选，包含不定积分、定积分及其他积分应用。请逐题填写核查栏。保留为评测数据，不混入训练集。参考答案有时包含多个结果或自然语言，不能默认全部能用一个标量答案评分。

核查建议：先核查 001–020。题型可填“定积分求值 / 不定积分 / 应用题 / 其他”；自动评分可填“可以 / 需要改评分器 / 不可以”；是否保留可填“是 / 否 / 待定”，并记录理由。尚未填写的条目均未审核。

Markdown 的数学公式可在支持 LaTeX 的阅读器中显示。JSONL 文件保存相同 150 道题的原始字段，便于后续程序读取。

获取时间（UTC）：2026-10-09T15:47:34+00:00。

原始 Parquet SHA-256：`9cc4042a4b61a148f4b28c02ffb3bfc11114937e31d9d6ead190f18e0f9da074`。

## 001

原始 ID：`00f6affb-905a-4109-a78e-2dde7a0b83ac`

**题目原文**

Solve the integral:
$$
\int \frac{ 1 }{ \sin(x)^7 \cdot \cos(x) } \, dx
$$

**参考答案原文**

$\int \frac{ 1 }{ \sin(x)^7 \cdot \cos(x) } \, dx$ = $C+\ln\left(\left|\tan(x)\right|\right)-\frac{3}{2\cdot\left(\tan(x)\right)^2}-\frac{3}{4\cdot\left(\tan(x)\right)^4}-\frac{1}{6\cdot\left(\tan(x)\right)^6}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 002

原始 ID：`040dbb94-2747-4799-89f8-dd544c248a9c`

**题目原文**

Consider the function $f(x) = x^2$ on $[-1,1]$ and the partition $\left\{-1, -\frac{ 1 }{ 2 }, \frac{ 1 }{ 4 }, 1\right\}$. Find the upper and lower sums.

**参考答案原文**

The upper sum is: $\frac{23}{16}$
The lower sum is: $\frac{11}{64}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 003

原始 ID：`05ea9929-8cbb-432b-bbbb-ec1e74c9f401`

**题目原文**

Compute the integral:
$$
-2 \cdot \int x^{-4} \cdot \left(4+x^2\right)^{\frac{ 1 }{ 2 }} \, dx
$$

**参考答案原文**

$-2 \cdot \int x^{-4} \cdot \left(4+x^2\right)^{\frac{ 1 }{ 2 }} \, dx$ = $C+\frac{1}{6}\cdot\left(\frac{4}{x^2}+1\right)\cdot\sqrt{\frac{4}{x^2}+1}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 004

原始 ID：`08c72d46-1abd-49e1-9c9c-ce509902be6e`

**题目原文**

Solve the integral:
$$
\int \left(\frac{ x+4 }{ x-4 } \right)^{\frac{ 3 }{ 2 }} \, dx
$$

**参考答案原文**

$\int \left(\frac{ x+4 }{ x-4 } \right)^{\frac{ 3 }{ 2 }} \, dx$ = $C+\sqrt{\frac{x+4}{x-4}}\cdot(x-20)-12\cdot\ln\left(\left|\frac{\sqrt{x-4}-\sqrt{x+4}}{\sqrt{x-4}+\sqrt{x+4}}\right|\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 005

原始 ID：`0c0ba3db-1470-4c36-975c-91ff5f51986f`

**题目原文**

Compute the integral:
$$
\int \sin(x)^4 \cdot \cos(x)^6 \, dx
$$

**参考答案原文**

$\int \sin(x)^4 \cdot \cos(x)^6 \, dx$ = $C+\frac{1}{320}\cdot\left(\sin(2\cdot x)\right)^5+\frac{1}{128}\cdot\left(\frac{3\cdot x}{2}-\frac{\sin(4\cdot x)}{2}+\frac{\sin(8\cdot x)}{16}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 006

原始 ID：`0cdec09c-5655-41df-856e-2a1537553741`

**题目原文**

Compute the volume of the solid formed by rotating about the x-axis the area bounded by the axes and the parabola $x^{\frac{ 1 }{ 2 }}+y^{\frac{ 1 }{ 2 }}=6^{\frac{ 1 }{ 2 }}$.

**参考答案原文**

Volume = $\pi\cdot\frac{72}{5}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 007

原始 ID：`0d1189b8-7da9-4918-b7c1-eca7aeebe695`

**题目原文**

Calculate the integral:
$$
\int_{-\sqrt{5}}^{\sqrt{5}} \frac{ 4 \cdot x^7+6 \cdot x^6-12 \cdot x^5-14 \cdot x^3-24 \cdot x^2+2 \cdot x+4 }{ x^2+2 } \, dx
$$

**参考答案原文**

$\int_{-\sqrt{5}}^{\sqrt{5}} \frac{ 4 \cdot x^7+6 \cdot x^6-12 \cdot x^5-14 \cdot x^3-24 \cdot x^2+2 \cdot x+4 }{ x^2+2 } \, dx$ = $20\cdot\sqrt{5}+4\cdot\sqrt{2}\cdot\arctan\left(\frac{\sqrt{5}}{\sqrt{2}}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 008

原始 ID：`0e30e42e-91dc-4962-9046-59dc3f6fcbd1`

**题目原文**

Compute the integral:
$$
-10 \cdot \int \frac{ \cos(5 \cdot x)^4 }{ \sin(5 \cdot x)^3 } \, dx
$$

**参考答案原文**

$-10 \cdot \int \frac{ \cos(5 \cdot x)^4 }{ \sin(5 \cdot x)^3 } \, dx$ = $C+3\cdot\cos(5\cdot x)+\frac{\left(\cos(5\cdot x)\right)^3}{1-\left(\cos(5\cdot x)\right)^2}-\frac{3}{2}\cdot\ln\left(\frac{1+\cos(5\cdot x)}{1-\cos(5\cdot x)}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 009

原始 ID：`0ffdf602-5652-4443-8918-b7a0da6d9e63`

**题目原文**

Solve the integral:
$$
\int \frac{ \cos(x)^3 }{ \sin(x)^9 } \, dx
$$

**参考答案原文**

$\int \frac{ \cos(x)^3 }{ \sin(x)^9 } \, dx$ = $C-\left(\frac{1}{3}\cdot\left(\cot(x)\right)^6+\frac{1}{4}\cdot\left(\cot(x)\right)^4+\frac{1}{8}\cdot\left(\cot(x)\right)^8\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 010

原始 ID：`126c4165-b3d5-4470-8412-08e79d9821cf`

**题目原文**

Calculate the integral:
$$
\int \frac{ \sqrt[5]{x}+\sqrt[5]{x^4}+x \cdot \sqrt[5]{x} }{ x \cdot \left(1+\sqrt[5]{x^2}\right) } \, dx
$$

**参考答案原文**

$\int \frac{ \sqrt[5]{x}+\sqrt[5]{x^4}+x \cdot \sqrt[5]{x} }{ x \cdot \left(1+\sqrt[5]{x^2}\right) } \, dx$ = $C+5\cdot\arctan\left(\sqrt[5]{x}\right)+\frac{5}{4}\cdot\sqrt[5]{x}^4$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 011

原始 ID：`13021374-3ba0-4635-a682-b456cc9bd8c6`

**题目原文**

Compute the integral:
$$
\int_{0}^3 \frac{ 1 }{ x^2 + 2 \cdot x - 8 } \, dx
$$

**参考答案原文**

$\int_{0}^3 \frac{ 1 }{ x^2 + 2 \cdot x - 8 } \, dx$ = $\infty$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 012

原始 ID：`147944c5-b782-48c5-a664-d66deb92d9a7`

**题目原文**

Compute the integral:
$$
\int \frac{ 4 \cdot x+\sqrt{4 \cdot x-5} }{ 5 \cdot \sqrt[4]{4 \cdot x-5}+\sqrt[4]{(4 \cdot x-5)^3} } \, dx
$$

**参考答案原文**

$\int \frac{ 4 \cdot x+\sqrt{4 \cdot x-5} }{ 5 \cdot \sqrt[4]{4 \cdot x-5}+\sqrt[4]{(4 \cdot x-5)^3} } \, dx$ = $C+25\cdot\sqrt[4]{4\cdot x-5}+\frac{1}{5}\cdot\sqrt[4]{4\cdot x-5}^5-\frac{4}{3}\cdot\sqrt[4]{4\cdot x-5}^3-\frac{125}{\sqrt{5}}\cdot\arctan\left(\frac{1}{\sqrt{5}}\cdot\sqrt[4]{4\cdot x-5}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 013

原始 ID：`15e0826d-2594-436a-a05c-e9872b5222e4`

**题目原文**

Solve the integral:
$$
\int \frac{ -9 \cdot \sqrt[3]{x} }{ 9 \cdot \sqrt[3]{x^2} + 3 \cdot \sqrt{x} } \, dx
$$

**参考答案原文**

$\int \frac{ -9 \cdot \sqrt[3]{x} }{ 9 \cdot \sqrt[3]{x^2} + 3 \cdot \sqrt{x} } \, dx$ = $-\left(C+\frac{1}{3}\cdot\sqrt[6]{x}^2+\frac{2}{27}\cdot\ln\left(\frac{1}{3}\cdot\left|1+3\cdot\sqrt[6]{x}\right|\right)+\frac{3}{2}\cdot\sqrt[6]{x}^4-\frac{2}{3}\cdot\sqrt[6]{x}^3-\frac{2}{9}\cdot\sqrt[6]{x}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 014

原始 ID：`16e404c3-c9da-465c-a97d-0b7a6e1e5ef9`

**题目原文**

Compute the integral:
$$
\int \frac{ 6 }{ \sin(3 \cdot x)^6 } \, dx
$$

**参考答案原文**

$\int \frac{ 6 }{ \sin(3 \cdot x)^6 } \, dx$ = $-\frac{2\cdot\cos(3\cdot x)}{5\cdot\sin(3\cdot x)^5}+\frac{24}{5}\cdot\left(-\frac{\cos(3\cdot x)}{9\cdot\sin(3\cdot x)^3}-\frac{2}{9}\cdot\cot(3\cdot x)\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 015

原始 ID：`18fc468f-42f0-4606-b4f3-92f1f552c344`

**题目原文**

Calculate the integral:
$$
I = \int 4 \cdot \cos\left(3 \cdot \ln(2 \cdot x)\right) \, dx
$$

**参考答案原文**

The final answer: $\frac{1}{10}\cdot\left(C+4\cdot x\cdot\cos\left(3\cdot\ln(2\cdot x)\right)+12\cdot x\cdot\sin\left(3\cdot\ln(2\cdot x)\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 016

原始 ID：`1db212f0-2fac-410d-969d-fe3b5b55d076`

**题目原文**

Solve the integral:
$$
\int \frac{ 3 }{ \sin(2 \cdot x)^7 \cdot \cos(-2 \cdot x) } \, dx
$$

**参考答案原文**

$\int \frac{ 3 }{ \sin(2 \cdot x)^7 \cdot \cos(-2 \cdot x) } \, dx$ = $C+\frac{3}{2}\cdot\left(\ln\left(\left|\tan(2\cdot x)\right|\right)-\frac{3}{2\cdot\left(\tan(2\cdot x)\right)^2}-\frac{3}{4\cdot\left(\tan(2\cdot x)\right)^4}-\frac{1}{6\cdot\left(\tan(2\cdot x)\right)^6}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 017

原始 ID：`1fd375be-b4ea-4035-b84a-c91779dafe26`

**题目原文**

Compute the integral:
$$
\int \frac{ x-\sqrt[3]{4 \cdot x^2}-\sqrt[6]{2 \cdot x} }{ x \cdot \left(4+\sqrt[3]{2 \cdot x}\right) } \, dx
$$

**参考答案原文**

$\int \frac{ x-\sqrt[3]{4 \cdot x^2}-\sqrt[6]{2 \cdot x} }{ x \cdot \left(4+\sqrt[3]{2 \cdot x}\right) } \, dx$ = $C+36\cdot\ln\left(\left|4+\sqrt[3]{2}\cdot\sqrt[3]{x}\right|\right)+\frac{\left(3\cdot2^{\frac{2}{3}}\right)}{4}\cdot x^{\frac{2}{3}}-3\cdot\arctan\left(\frac{1}{2^{\frac{5}{6}}}\cdot\sqrt[6]{x}\right)-9\cdot\sqrt[3]{2}\cdot\sqrt[3]{x}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 018

原始 ID：`2590af47-b424-44fb-9ea3-cd88319511c1`

**题目原文**

Calculate $I=\int_{\pi}^{\frac{ 5 }{ 4 } \cdot \pi}{\frac{ \sin(2 \cdot x) }{ \left(\cos(x)\right)^4+\left(\sin(x)\right)^4 } \, dx}$

**参考答案原文**

The final answer: $I=\frac{\pi}{4}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 019

原始 ID：`275f7ceb-f331-4a3f-96ec-346e6d81b32a`

**题目原文**

Solve the integral:
$$
\int \frac{ 1 }{ \sin(8 \cdot x)^5 } \, dx
$$

**参考答案原文**

The final answer: $C+\frac{1}{128}\cdot\left(2\cdot\left(\tan(4\cdot x)\right)^2+6\cdot\ln\left(\left|\tan(4\cdot x)\right|\right)+\frac{1}{4}\cdot\left(\tan(4\cdot x)\right)^4-\frac{2}{\left(\tan(4\cdot x)\right)^2}-\frac{1}{4\cdot\left(\tan(4\cdot x)\right)^4}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 020

原始 ID：`28aee58e-6261-4432-b15d-ef0d23395d05`

**题目原文**

Leaves of deciduous trees fall in an exponential rate during autumn. A large maple has 10,000 leaves and the wind starts blowing. If there are 8,000 leaves left after 3 hours, how many will be left after 4 hours?

**参考答案原文**

There will be $7426$ leaves after 4 hours.

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 021

原始 ID：`2aee6b67-afa7-427f-90a3-daffc1044c8f`

**题目原文**

Compute the integral:
$$
\int \sin(2 \cdot x)^6 \cdot \cos(2 \cdot x)^2 \, dx
$$

**参考答案原文**

Answer is: $\frac{1}{32}\cdot x-\frac{1}{32}\cdot\frac{1}{8}\cdot\sin(8\cdot x)-\frac{1}{8}\cdot\frac{1}{4}\cdot\frac{1}{3}\cdot\sin(4\cdot x)^3+\frac{1}{128}\cdot x-\frac{1}{128}\cdot\frac{1}{16}\cdot\sin(16\cdot x)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 022

原始 ID：`2d16ea33-5993-4872-a76a-a21c70e522b5`

**题目原文**

Compute the integral:
$$
\int \cos\left(\frac{ x }{ 2 }\right)^4 \, dx
$$

**参考答案原文**

$\int \cos\left(\frac{ x }{ 2 }\right)^4 \, dx$ = $\frac{\sin\left(\frac{x}{2}\right)\cdot\cos\left(\frac{x}{2}\right)^3}{2}+\frac{3}{4}\cdot\left(\sin\left(\frac{x}{2}\right)\cdot\cos\left(\frac{x}{2}\right)+\frac{x}{2}\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 023

原始 ID：`2d64140b-ec41-43b2-aa47-a02a2b515f51`

**题目原文**

Compute the integral:
$$
\int x^{-4} \cdot \left(3+x^2\right)^{\frac{ 1 }{ 2 }} \, dx
$$

**参考答案原文**

$\int x^{-4} \cdot \left(3+x^2\right)^{\frac{ 1 }{ 2 }} \, dx$ = $C-\frac{1}{9}\cdot\left(1+\frac{3}{x^2}\right)\cdot\sqrt{1+\frac{3}{x^2}}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 024

原始 ID：`2e6afcbe-7883-4e94-9b96-cfc96e2841fc`

**题目原文**

Solve the integral:
$$
\int 3 \cdot \cot(-7 \cdot x)^6 \, dx
$$

**参考答案原文**

$\int 3 \cdot \cot(-7 \cdot x)^6 \, dx$ = $C-\frac{3}{7}\cdot\left(\frac{1}{5}\cdot\left(\cot(7\cdot x)\right)^5+\cot(7\cdot x)-\frac{1}{3}\cdot\left(\cot(7\cdot x)\right)^3-\arctan\left(\cot(7\cdot x)\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 025

原始 ID：`2fe7cf5b-86d4-417a-a942-46e2194625eb`

**题目原文**

Solve the integral:
$$
\int \cot(x)^4 \, dx
$$

**参考答案原文**

$\int \cot(x)^4 \, dx$ = $C+\cot(x)-\frac{1}{3}\cdot\left(\cot(x)\right)^3-\arctan\left(\cot(x)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 026

原始 ID：`30b647a3-04b2-4224-8e1d-9a46f4fe6103`

**题目原文**

Solve the integral:
$$
\int \left(\frac{ x+3 }{ x-3 }\right)^{\frac{ 3 }{ 2 }} \, dx
$$

**参考答案原文**

$\int \left(\frac{ x+3 }{ x-3 }\right)^{\frac{ 3 }{ 2 }} \, dx$ = $C+\sqrt{\frac{x+3}{x-3}}\cdot(x-15)-9\cdot\ln\left(\left|\frac{\sqrt{x-3}-\sqrt{x+3}}{\sqrt{x-3}+\sqrt{x+3}}\right|\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 027

原始 ID：`324f58d5-6dfb-461d-9750-6e713fedb6f6`

**题目原文**

Compute the length of the arc $y = 3 \cdot \ln(2 \cdot x)$ between the points $x = \sqrt{7}$ and $x = 4$.

**参考答案原文**

Arc Length: $1+\frac{3}{2}\cdot\ln\left(\frac{7}{4}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 028

原始 ID：`34f480a3-bc95-4865-8a8a-cf0132878a01`

**题目原文**

Compute the integral:
$$
\int_{0}^1 \frac{ \sqrt{x}+1 }{ \sqrt[3]{x}+1 } \, dx
$$

**参考答案原文**

$\int_{0}^1 \frac{ \sqrt{x}+1 }{ \sqrt[3]{x}+1 } \, dx$ = $3\cdot\ln(2)+\frac{3\cdot\pi}{2}-\frac{409}{70}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 029

原始 ID：`37e7e328-accc-4a28-98f7-7391204c2892`

**题目原文**

Compute the integral:
$$
\int x^{-6} \cdot \left(1+x^2\right)^{\frac{ 1 }{ 2 }} \, dx
$$

**参考答案原文**

$\int x^{-6} \cdot \left(1+x^2\right)^{\frac{ 1 }{ 2 }} \, dx$ = $C+\frac{1}{3}\cdot\left(\frac{1}{x^2}+1\right)\cdot\sqrt{\frac{1}{x^2}+1}-\frac{1}{5}\cdot\left(\frac{1}{x^2}+1\right)^2\cdot\sqrt{\frac{1}{x^2}+1}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 030

原始 ID：`39955d74-b26d-4d7d-ae27-b93ee45f74dc`

**题目原文**

Compute the area of the figure bounded by curves $y = 2 \cdot x^2$, $y = 1 + x^2$, lines $x = 3$, $x = -2$, and the $x$-axis.

**参考答案原文**

Area = $\frac{46}{3}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 031

原始 ID：`3ae4b0b6-dcdf-4733-a2ff-2f6cccad2598`

**题目原文**

Compute the integral:
$$
\int \frac{ -4 }{ 3+\sin(4 \cdot x)+\cos(4 \cdot x) } \, dx
$$

**参考答案原文**

$\int \frac{ -4 }{ 3+\sin(4 \cdot x)+\cos(4 \cdot x) } \, dx$ = $C-\frac{2}{\sqrt{7}}\cdot\arctan\left(\frac{2}{\sqrt{7}}\cdot\left(\frac{1}{2}+\tan(2\cdot x)\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 032

原始 ID：`3bf5f05a-3a2f-4939-9cc2-52605b9db700`

**题目原文**

Solve the integral:
$$
\int \sqrt{\frac{ -16 \cdot \sin(-10 \cdot x) }{ 25 \cdot \cos(-10 \cdot x)^9 }} \, dx
$$

**参考答案原文**

$\int \sqrt{\frac{ -16 \cdot \sin(-10 \cdot x) }{ 25 \cdot \cos(-10 \cdot x)^9 }} \, dx$ = $C+\frac{2}{25}\cdot\left(\frac{2}{3}\cdot\left(\tan(10\cdot x)\right)^{\frac{3}{2}}+\frac{2}{7}\cdot\left(\tan(10\cdot x)\right)^{\frac{7}{2}}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 033

原始 ID：`3d4817ab-4cb4-447a-ac9f-43a2d7a16970`

**题目原文**

Compute the integral:
$$
\int \frac{ 8 }{ 7 \cdot x^2 \cdot \sqrt{5 \cdot x^2-2 \cdot x+1} } \, dx
$$

**参考答案原文**

Answer is: $\frac{8}{7}\cdot\left(C-\sqrt{5+\frac{1}{x}^2-\frac{1\cdot2}{x}}-\ln\left(\left|\frac{1}{x}+\sqrt{5+\frac{1}{x}^2-\frac{1\cdot2}{x}}-1\right|\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 034

原始 ID：`3dc0ac7f-8b58-4f46-a326-120c0d57d1dc`

**题目原文**

Compute the integral:
$$
\int \frac{ \sqrt{25+x^2} }{ 5 \cdot x } \, dx
$$

**参考答案原文**

$\int \frac{ \sqrt{25+x^2} }{ 5 \cdot x } \, dx$ = $C+\frac{1}{2}\cdot\ln\left(\left|\frac{\sqrt{25+x^2}-5}{5+\sqrt{25+x^2}}\right|\right)+\frac{1}{5}\cdot\sqrt{25+x^2}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 035

原始 ID：`3e091f07-ec1a-4a3f-a368-62e4012f1399`

**题目原文**

Compute the integral:
$$
\int \sin\left(\frac{ x }{ 2 }\right)^5 \, dx
$$

**参考答案原文**

$\int \sin\left(\frac{ x }{ 2 }\right)^5 \, dx$ = $-\frac{2\cdot\sin\left(\frac{x}{2}\right)^4\cdot\cos\left(\frac{x}{2}\right)}{5}+\frac{4}{5}\cdot\left(-\frac{2}{3}\cdot\sin\left(\frac{x}{2}\right)^2\cdot\cos\left(\frac{x}{2}\right)-\frac{4}{3}\cdot\cos\left(\frac{x}{2}\right)\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 036

原始 ID：`3f808070-9259-416b-a36a-b19055958dcb`

**题目原文**

Solve the integral:
$$
\int \tan(x)^4 \, dx
$$

**参考答案原文**

$\int \tan(x)^4 \, dx$ = $C+\frac{1}{3}\cdot\left(\tan(x)\right)^3+\arctan\left(\tan(x)\right)-\tan(x)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 037

原始 ID：`42ad9bcd-2e08-48bf-b2c5-8cbbbf1603db`

**题目原文**

The region bounded by the arc of the curve $y = \sqrt{2} \cdot \sin(2 \cdot x)$, $0 \le x \le \frac{ \pi }{ 2 }$, is revolved around the x-axis. Compute the surface area of this solid of revolution.

**参考答案原文**

Surface Area: $\frac{\pi}{4}\cdot\left(12\cdot\sqrt{2}+\ln\left(17+12\cdot\sqrt{2}\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 038

原始 ID：`46efe3d6-df69-43e8-a52b-d85c524aab17`

**题目原文**

Compute the integral:
$$
\int \frac{ -1 }{ \sqrt[3]{\tan\left(\frac{ x }{ 2 }\right)} } \, dx
$$

**参考答案原文**

$\int \frac{ -1 }{ \sqrt[3]{\tan\left(\frac{ x }{ 2 }\right)} } \, dx$ = $C+\frac{1}{2}\cdot\ln\left(\left|1+\sqrt[3]{\tan\left(\frac{1}{2}\cdot x\right)}\cdot\tan\left(\frac{1}{2}\cdot x\right)-\sqrt[3]{\tan\left(\frac{x}{2}\right)^2}\right|\right)-\sqrt{3}\cdot\arctan\left(\frac{1}{\sqrt{3}}\cdot\left(2\cdot\sqrt[3]{\tan\left(\frac{x}{2}\right)^2}-1\right)\right)-\ln\left(1+\sqrt[3]{\tan\left(\frac{x}{2}\right)^2}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 039

原始 ID：`47a11349-0386-4969-9263-d3cdfcc98cb9`

**题目原文**

Evaluate the integral:
$$
I = \int \left(x^3 + 3\right) \cdot \cos(2 \cdot x) \, dx
$$

**参考答案原文**

The final answer: $\frac{1}{256}\cdot\left(384\cdot\sin(2\cdot x)+128\cdot x^3\cdot\sin(2\cdot x)+192\cdot x^2\cdot\cos(2\cdot x)-96\cdot\cos(2\cdot x)-256\cdot C-192\cdot x\cdot\sin(2\cdot x)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 040

原始 ID：`4881a8a3-a6ab-40be-aa32-3b272f2dc704`

**题目原文**

Compute the integral:
$$
\int \frac{ -3 \cdot \tan(4 \cdot x) }{ \sqrt{\sin(4 \cdot x)^4+\cos(4 \cdot x)^4} } \, dx
$$

**参考答案原文**

$\int \frac{ -3 \cdot \tan(4 \cdot x) }{ \sqrt{\sin(4 \cdot x)^4+\cos(4 \cdot x)^4} } \, dx$ = $C-\frac{3}{8}\cdot\ln\left(\sqrt{1+\tan(4\cdot x)^4}+\tan(4\cdot x)^2\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 041

原始 ID：`49b9c6d5-e705-4fd6-ae01-f4731cbf0fa5`

**题目原文**

Solve the integral:
$$
\int \frac{ \sin(x)^5 }{ \cos(x)^4 } \, dx
$$

**参考答案原文**

$\int \frac{ \sin(x)^5 }{ \cos(x)^4 } \, dx$ = $C+\frac{2}{\cos(x)}+\frac{1}{3\cdot\left(\cos(x)\right)^3}+\cos(x)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 042

原始 ID：`4afe68d6-980e-4422-a4cb-58f6988fee7a`

**题目原文**

Compute the integral:
$$
8 \cdot \int \cot(-4 \cdot x)^5 \cdot \csc(4 \cdot x)^4 \, dx
$$

**参考答案原文**

$8 \cdot \int \cot(-4 \cdot x)^5 \cdot \csc(4 \cdot x)^4 \, dx$ = $C+\frac{1}{3}\cdot\left(\cot(4\cdot x)\right)^6+\frac{1}{4}\cdot\left(\cot(4\cdot x)\right)^8$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 043

原始 ID：`4c1292e1-d4b3-4acf-afaf-eaac62f2662d`

**题目原文**

Compute the integral:
$$
\int \frac{ -1 }{ x^2 \cdot \left(3+x^3\right)^{\frac{ 5 }{ 3 }} } \, dx
$$

**参考答案原文**

$\int \frac{ -1 }{ x^2 \cdot \left(3+x^3\right)^{\frac{ 5 }{ 3 }} } \, dx$ = $C+\frac{1}{9}\cdot\sqrt[3]{1+\frac{3}{x^3}}+\frac{1}{18\cdot\left(1+\frac{3}{x^3}\right)^{\frac{2}{3}}}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 044

原始 ID：`4e3604b8-d25e-467e-bb05-b739b155a1e8`

**题目原文**

Compute the integral:
$$
\int \frac{ x-\sqrt[3]{x^2}-\sqrt[6]{x} }{ x \cdot \left(4+\sqrt[3]{x}\right) } \, dx
$$

**参考答案原文**

$\int \frac{ x-\sqrt[3]{x^2}-\sqrt[6]{x} }{ x \cdot \left(4+\sqrt[3]{x}\right) } \, dx$ = $C+\frac{3}{2}\cdot\sqrt[3]{x^2}+60\cdot\ln\left(\left|4+\sqrt[3]{x}\right|\right)-3\cdot\arctan\left(\frac{1}{2}\cdot\sqrt[6]{x}\right)-15\cdot\sqrt[3]{x}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 045

原始 ID：`4fbf3770-e3dd-4d3d-87ac-825d1fa83719`

**题目原文**

Compute the integral:
$$
3 \cdot \int \left(\cos\left(\frac{ x }{ 6 }\right)\right)^6 \, dx
$$

**参考答案原文**

$3 \cdot \int{\left(\cos\left(\frac{ x }{ 6 }\right)\right)^6 d x}$ = $C+\frac{9}{2}\cdot\sin\left(\frac{x}{3}\right)+\frac{15}{16}\cdot x+\frac{27}{32}\cdot\sin\left(\frac{2\cdot x}{3}\right)-\frac{3}{8}\cdot\left(\sin\left(\frac{x}{3}\right)\right)^3$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 046

原始 ID：`50f9b4f4-fe8f-40e1-8b8c-56f2c06fd385`

**题目原文**

Solve the integral:
$$
\int \left(\frac{ x+6 }{ x-6 } \right)^{\frac{ 3 }{ 2 }} \, dx
$$

**参考答案原文**

$\int \left(\frac{ x+6 }{ x-6 } \right)^{\frac{ 3 }{ 2 }} \, dx$ = $C+\sqrt{\frac{x+6}{x-6}}\cdot(x-30)-18\cdot\ln\left(\left|\frac{\sqrt{x-6}-\sqrt{x+6}}{\sqrt{x-6}+\sqrt{x+6}}\right|\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 047

原始 ID：`531fbc44-4d03-459d-bc47-0dd40bf62702`

**题目原文**

Find the area bounded by the curves $y = 3 \cdot x + 3$, $y = 3 \cdot \cos(x)$, and $y = 0$.

**参考答案原文**

Area: $\frac{9}{2}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 048

原始 ID：`5381ca65-50cc-430f-b450-b4e00e2e6040`

**题目原文**

Compute the integral:
$$
\int \frac{ 1 }{ \left(\cos(5 \cdot x)\right)^3 } \, dx
$$

**参考答案原文**

$\int \frac{ 1 }{ \left(\cos(5 \cdot x)\right)^3 } \, dx$ = $C+\frac{\sin(5\cdot x)}{10\cdot\left(\cos(5\cdot x)\right)^2}+\frac{1}{10}\cdot\ln\left(\left|\tan\left(\left(\frac{5}{2}\right)\cdot x+\frac{\pi}{4}\right)\right|\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 049

原始 ID：`548e5105-3474-4300-9672-0196f2a27c1a`

**题目原文**

Compute the integral:
$$
2 \cdot \int \left(\cos\left(\frac{ x }{ 4 }\right)\right)^6 \, dx
$$

**参考答案原文**

$2 \cdot \int{\left(\cos\left(\frac{ x }{ 4 }\right)\right)^6 d x}$ = $C+2\cdot\sin\left(\frac{x}{2}\right)+\frac{3}{8}\cdot\sin(x)+\frac{5}{8}\cdot x-\frac{1}{6}\cdot\left(\sin\left(\frac{x}{2}\right)\right)^3$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 050

原始 ID：`59a56679-d33b-4d05-8931-d23bf94bac14`

**题目原文**

The velocity of a bullet from a rifle can be approximated by $v(t) = 6400 \cdot t^2 - 6505 \cdot t + 2686$ where $t$ is seconds after the shot and $v$ is the velocity measured in feet per second. This equation only models the velocity for the first half-second after the shot: $0 \le t \le 0.5$. What is the total distance the bullet travels in $0.5$ sec?

**参考答案原文**

The total distance is: $796.54166667$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 051

原始 ID：`59b0822d-ad82-45a7-a9c0-aaf87e74534c`

**题目原文**

Solve the integral:
$$
\int -16 \cdot \sin(-3 \cdot x)^4 \cdot \cos(-3 \cdot x)^2 \, dx
$$

**参考答案原文**

$\int -16 \cdot \sin(-3 \cdot x)^4 \cdot \cos(-3 \cdot x)^2 \, dx$ = $-x+\frac{\sin(12\cdot x)}{12}+\frac{\sin(6\cdot x)}{12}-\frac{\sin(18\cdot x)}{36}+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 052

原始 ID：`5a655b20-28b1-46be-9cdf-2c37ea9ff252`

**题目原文**

Solve the integral:
$$
\int \sqrt{\frac{ 4 \cdot \sin(4 \cdot x) }{ 9 \cdot \cos(4 \cdot x)^9 }} \, dx
$$

**参考答案原文**

$\int \sqrt{\frac{ 4 \cdot \sin(4 \cdot x) }{ 9 \cdot \cos(4 \cdot x)^9 }} \, dx$ = $C+\frac{1}{9}\cdot\left(\tan(4\cdot x)\right)^{\frac{3}{2}}+\frac{1}{21}\cdot\left(\tan(4\cdot x)\right)^{\frac{7}{2}}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 053

原始 ID：`5ba7658c-7761-4d8c-8b36-495732a2732d`

**题目原文**

Solve the integral:
$$
\int 2 \cdot \cot(14 \cdot x)^6 \, dx
$$

**参考答案原文**

$\int 2 \cdot \cot(14 \cdot x)^6 \, dx$ = $C-\frac{1}{7}\cdot\left(\frac{1}{5}\cdot\left(\cot(14\cdot x)\right)^5+\cot(14\cdot x)-\frac{1}{3}\cdot\left(\cot(14\cdot x)\right)^3-\arctan\left(\cot(14\cdot x)\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 054

原始 ID：`5bd25e22-ae72-4e7d-b526-af88e4214542`

**题目原文**

Compute the integral:
$$
\int \frac{ 1 }{ 2 \cdot \sin\left(\frac{ x }{ 2 }\right)^6 } \, dx
$$

**参考答案原文**

$\int \frac{ 1 }{ 2 \cdot \sin\left(\frac{ x }{ 2 }\right)^6 } \, dx$ = $C-\frac{1}{5}\cdot\left(\cot\left(\frac{x}{2}\right)\right)^5-\frac{2}{3}\cdot\left(\cot\left(\frac{x}{2}\right)\right)^3-\cot\left(\frac{x}{2}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 055

原始 ID：`5d216ea8-1451-4963-a04a-80e5f673fd43`

**题目原文**

Compute the integral:
$$
\int \sin\left(\frac{ x }{ 2 }\right)^6 \cdot \cos\left(\frac{ x }{ 2 }\right)^2 \, dx
$$

**参考答案原文**

$\int \sin\left(\frac{ x }{ 2 }\right)^6 \cdot \cos\left(\frac{ x }{ 2 }\right)^2 \, dx$ = $\frac{\sin\left(\frac{x}{2}\right)^7\cdot\cos\left(\frac{x}{2}\right)}{4}+\frac{1}{8}\cdot\left(-\frac{1}{3}\cdot\sin\left(\frac{x}{2}\right)^5\cdot\cos\left(\frac{x}{2}\right)-\frac{5}{12}\cdot\sin\left(\frac{x}{2}\right)^3\cdot\cos\left(\frac{x}{2}\right)-\frac{5}{8}\cdot\sin\left(\frac{x}{2}\right)\cdot\cos\left(\frac{x}{2}\right)+\frac{5}{16}\cdot x\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 056

原始 ID：`5e0fca6c-a20d-4a5c-bab2-e2ee9121e589`

**题目原文**

Compute the integral:
$$
3 \cdot \int \frac{ \cos(2 \cdot x)^4 }{ \sin(2 \cdot x) } \, dx
$$

**参考答案原文**

$3 \cdot \int \frac{ \cos(2 \cdot x)^4 }{ \sin(2 \cdot x) } \, dx$ = $\frac{3}{2}\cdot\left(C+\frac{1}{3}\cdot\left(\cos(2\cdot x)\right)^3+\cos(2\cdot x)-\frac{1}{2}\cdot\ln\left(\frac{\left|1+\cos(2\cdot x)\right|}{\left|\cos(2\cdot x)-1\right|}\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 057

原始 ID：`617b2571-094d-4b7b-9de5-6e1c7d7eaddc`

**题目原文**

Compute the integral:
$$
\int \frac{ \sin\left(\frac{ x }{ 2 }\right)^4 }{ \cos\left(\frac{ x }{ 2 }\right)^2 } \, dx
$$

**参考答案原文**

$\int \frac{ \sin\left(\frac{ x }{ 2 }\right)^4 }{ \cos\left(\frac{ x }{ 2 }\right)^2 } \, dx$ = $\frac{2\cdot\sin\left(\frac{x}{2}\right)^3}{\cos\left(\frac{x}{2}\right)}-\frac{3}{2}\cdot x+\frac{3}{2}\cdot\sin(x)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 058

原始 ID：`64067e9f-bbfb-48b1-b763-734ea00fe8e4`

**题目原文**

Find the integral:
$$
\int \frac{ \arcsin(4 \cdot x) }{ \sqrt{4 \cdot x+1} } \, dx
$$

**参考答案原文**

Answer is: $\frac{1}{2}\cdot\sqrt{4\cdot x+1}\cdot\arcsin(4\cdot x)-\left(C-\sqrt{1-4\cdot x}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 059

原始 ID：`674563c1-43e2-47d9-be85-2566027df8cc`

**题目原文**

Compute the integral:
$$
4 \cdot \int \cos(4 \cdot x)^4 \, dx
$$

**参考答案原文**

$4 \cdot \int \cos(4 \cdot x)^4 \, dx$ = $\frac{\sin(4\cdot x)\cdot\cos(4\cdot x)^3}{4}+3\cdot\left(\frac{1}{8}\cdot\sin(4\cdot x)\cdot\cos(4\cdot x)+\frac{x}{2}\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 060

原始 ID：`674ce6c5-cc42-4940-87a7-f55788a5f6c9`

**题目原文**

Solve the integral:
$$
\int 2 \cdot \tan(-10 \cdot x)^4 \, dx
$$

**参考答案原文**

$\int 2 \cdot \tan(-10 \cdot x)^4 \, dx$ = $C+\frac{1}{5}\cdot\left(\frac{1}{3}\cdot\left(\tan(10\cdot x)\right)^3+\arctan\left(\tan(10\cdot x)\right)-\tan(10\cdot x)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 061

原始 ID：`68996589-17fd-459a-946d-71f87e57b7a3`

**题目原文**

Find $I=\int \frac{ 5 }{ 1+\sqrt{(x+1)^2+1} } \, dx$.

**参考答案原文**

The final answer: $I=5\cdot\ln\left(x+1+\sqrt{x^2+2\cdot x+2}\right)+\frac{10}{x+2+\sqrt{x^2+2\cdot x+2}}+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 062

原始 ID：`69536a3f-0fe2-40fc-8f40-9642f76f67b1`

**题目原文**

Calculate the integral:
$$
\int \frac{ M \cdot x + N }{ \left( x^2 + p \cdot x + q \right)^m } \, dx
$$
where $M = 4$, $N = 5$, $p = 2$, $q = 9$, and $m = 2$.

**参考答案原文**

$\int \frac{ M \cdot x + N }{ \left( x^2 + p \cdot x + q \right)^m } \, dx$ = $C+\frac{x+1}{128+16\cdot(x+1)^2}+\frac{\sqrt{2}}{64}\cdot\arctan\left(\frac{1}{2\cdot\sqrt{2}}\cdot(x+1)\right)-\frac{2}{8+(x+1)^2}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 063

原始 ID：`69980591-c61d-4569-9d4a-dc1f584a059b`

**题目原文**

Find the mass of an oversized hockey puck of radius 2 in. with density function $\rho(x) = x^3 - 2 \cdot x + 5$ that is centered at the origin.

**参考答案原文**

$m$ = $\frac{332\cdot\pi}{15}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 064

原始 ID：`6b3c2531-9f19-4e7b-9266-5b329b94ce58`

**题目原文**

Solve the integral:
$$
\int \frac{ 7 }{ \sin(-2 \cdot x)^3 \cdot \cos(2 \cdot x)^2 } \, dx
$$

**参考答案原文**

$\int \frac{ 7 }{ \sin(-2 \cdot x)^3 \cdot \cos(2 \cdot x)^2 } \, dx$ = $-7\cdot\left(C+\frac{3}{8}\cdot\ln\left(\left|\cos(2\cdot x)-1\right|\right)+\frac{1}{2\cdot\cos(2\cdot x)}+\frac{1}{8\cdot\left(1+\cos(2\cdot x)\right)}+\frac{1}{8\cdot\left(\cos(2\cdot x)-1\right)}-\frac{3}{8}\cdot\ln\left(\left|1+\cos(2\cdot x)\right|\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 065

原始 ID：`6b629d16-c2b1-4623-82b2-02dbc4e7f2e4`

**题目原文**

Compute the integral using the Substitution Rule:
$$
\int \frac{ x^2+3 }{ \sqrt{(2 \cdot x-5)^3} } \, dx
$$

**参考答案原文**

The final answer: $C+\frac{60\cdot x+(2\cdot x-5)^2-261}{12\cdot\sqrt{2\cdot x-5}}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 066

原始 ID：`6bd3ca7c-5934-4620-8202-14e34d1af387`

**题目原文**

Compute the integral:
$$
-\int \frac{ \cos\left(\frac{ x }{ 2 }\right)^4 }{ \sin\left(\frac{ x }{ 2 }\right)^3 } \, dx
$$

**参考答案原文**

$-\int \frac{ \cos\left(\frac{ x }{ 2 }\right)^4 }{ \sin\left(\frac{ x }{ 2 }\right)^3 } \, dx$ = $C+3\cdot\cos\left(\frac{1}{2}\cdot x\right)+\frac{\left(\cos\left(\frac{1}{2}\cdot x\right)\right)^3}{1-\left(\cos\left(\frac{1}{2}\cdot x\right)\right)^2}-\frac{3}{2}\cdot\ln\left(\frac{1+\cos\left(\frac{1}{2}\cdot x\right)}{1-\cos\left(\frac{1}{2}\cdot x\right)}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 067

原始 ID：`70d6b1ed-272e-406b-853f-826b497f9b81`

**题目原文**

Solve the integral:
$$
\int 5 \cdot \cos(3 \cdot x)^6 \, dx
$$

**参考答案原文**

$\int 5 \cdot \cos(3 \cdot x)^6 \, dx$ = $\frac{5}{8}\cdot\left(\frac{5}{2}\cdot x+\frac{2\cdot\sin(6\cdot x)}{3}+\frac{\sin(12\cdot x)}{8}-\frac{\sin(6\cdot x)^3}{18}\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 068

原始 ID：`710e1a90-6ff1-4545-a62e-9c4e38632819`

**题目原文**

Evaluate $\int_{0}^\pi \sin(5 \cdot x) \cdot \sqrt{\cos(5 \cdot x)} \, dx$ using substitution.

**参考答案原文**

The final answer: $\frac{2+2\cdot\sqrt{-1}}{15}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 069

原始 ID：`722661f3-5831-4484-beba-4d3d1b7997eb`

**题目原文**

Find the arc length of the parametric curve given by $x(t) = \frac{ 1 }{ 6 } \cdot t^3$, $y(t) = \frac{ 1 }{ 9 } \cdot t^3$ on $[1,3]$.

**参考答案原文**

The final answer: $\frac{1573}{90}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 070

原始 ID：`73d9da66-451f-4585-a1cb-d03ba5a29318`

**题目原文**

Compute the integral:
$$
\int \frac{ 6 \cdot x^3-7 \cdot x^2+3 \cdot x-1 }{ 2 \cdot x-3 \cdot x^2 } \, dx
$$

**参考答案原文**

Answer is: $-x^2+x-\frac{1}{3}\cdot\ln\left(\left|x-\frac{2}{3}\right|\right)+\frac{1}{2}\cdot\ln\left(\left|1-\frac{2}{3\cdot x}\right|\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 071

原始 ID：`73de1a56-66c6-4eac-929a-6307d780e875`

**题目原文**

Compute the integral:
$$
\int \frac{ x+2 }{ \sqrt{6+10 \cdot x+25 \cdot x^2} } \, dx
$$

**参考答案原文**

$\int \frac{ x+2 }{ \sqrt{6+10 \cdot x+25 \cdot x^2} } \, dx$ = $\frac{1}{25}\cdot\sqrt{6+10\cdot x+25\cdot x^2}+\frac{9}{25}\cdot\ln\left(1+5\cdot x+\sqrt{1+(5\cdot x+1)^2}\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 072

原始 ID：`756c8302-f766-4e1a-980a-9d56e3adf724`

**题目原文**

Compute the integral:
$$
\int \frac{ \sqrt{1+x^2} }{ x } \, dx
$$

**参考答案原文**

$\int \frac{ \sqrt{1+x^2} }{ x } \, dx$ = $\sqrt{x^2+1}+\frac{1}{2}\cdot\ln\left(\left|\frac{\sqrt{x^2+1}-1}{\sqrt{x^2+1}+1}\right|\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 073

原始 ID：`774c7757-4ed5-43ae-b623-dac59dd300e8`

**题目原文**

Compute the integral:
$$
\int \frac{ \cos(2 \cdot x)^4 }{ \sin(2 \cdot x)^3 } \, dx
$$

**参考答案原文**

$\int \frac{ \cos(2 \cdot x)^4 }{ \sin(2 \cdot x)^3 } \, dx$ = $C+\frac{3}{8}\cdot\ln\left(\frac{1+\cos(2\cdot x)}{1-\cos(2\cdot x)}\right)-\frac{\left(\cos(2\cdot x)\right)^3}{4-4\cdot\left(\cos(2\cdot x)\right)^2}-\frac{3}{4}\cdot\cos(2\cdot x)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 074

原始 ID：`7836bb59-a1e0-4aff-ba47-a97fb07b38df`

**题目原文**

Solve the integral:
$$
\int 3 \cdot \sin(2 \cdot x)^4 \cdot \cos(2 \cdot x)^2 \, dx
$$

**参考答案原文**

$\int 3 \cdot \sin(2 \cdot x)^4 \cdot \cos(2 \cdot x)^2 \, dx$ = $\frac{3}{16}\cdot\left(x-\frac{\sin(8\cdot x)}{8}-\frac{\sin(4\cdot x)}{8}+\frac{\sin(12\cdot x)}{24}\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 075

原始 ID：`7e2fda44-9aea-49f6-88a4-cf14f2342966`

**题目原文**

Compute the integral:
$$
\int \frac{ x + \sqrt[3]{x^2} + \sqrt[6]{x} }{ x \cdot \left(1 + \sqrt[3]{x}\right) } \, dx
$$

**参考答案原文**

$\int \frac{ x + \sqrt[3]{x^2} + \sqrt[6]{x} }{ x \cdot \left(1 + \sqrt[3]{x}\right) } \, dx$ = $C+6\cdot\left(\frac{1}{4}\cdot\sqrt[6]{x}^4+\arctan\left(\sqrt[6]{x}\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 076

原始 ID：`802213f1-06e1-4063-b572-53eecf9dc2fc`

**题目原文**

Evaluate the integral:
$$
I = \int 2 \cdot \ln\left(\sqrt{2-x}+\sqrt{2+x}\right) \, dx
$$

**参考答案原文**

The final answer: $2\cdot x\cdot\ln\left(\sqrt{2-x}+\sqrt{2+x}\right)-\left((C+x)-2\cdot\arcsin\left(\frac{x}{2}\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 077

原始 ID：`80f9d7db-f542-4e35-b4cf-2748290a1ac3`

**题目原文**

Compute the integral:
$$
\int \frac{ \tan(x) }{ \sqrt{\sin(x)^4+\cos(x)^4} } \, dx
$$

**参考答案原文**

$\int \frac{ \tan(x) }{ \sqrt{\sin(x)^4+\cos(x)^4} } \, dx$ = $\frac{1}{2}\cdot\ln\left(\tan(x)^2+\sqrt{\tan(x)^4+1}\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 078

原始 ID：`8221ca9b-f6a2-4cfb-bf1a-ae2a389b6481`

**题目原文**

Use the table of integrals to evaluate the integral $\int{\left(\sin(y)\right)^2 \cdot \left(\cos(y)\right)^3 \, dy}$.

Use this link to access the table of integrals: [Table of Integrals](https://openstax.org/books/calculus-volume-2/pages/a-table-of-integrals)

**参考答案原文**

1. Submit the formula used: $\int{\left(\sin(u)\right)^n \cdot \left(\cos(u)\right)^m d u}=-\frac{ \left(\sin(u)\right)^{n-1} \cdot \left(\cos(u)\right)^{m+1} }{ n+m }+\frac{ n-1 }{ n+m } \cdot \int{\left(\sin(u)\right)^{n-2} \cdot \left(\cos(u)\right)^m d u}$, $\int{\left(\cos(u)\right)^3 d u}=\frac{ 1 }{ 3 } \cdot \left(2+\left(\cos(u)\right)^2\right) \cdot \sin(u)+c$ (For example: to evaluate $\int{(x+3)^2 \, dx}$ you would use and submit the formula $\int{u^n \, du}=\frac{ u^{n+1} }{ n+1 }+C$).
2. $\int{\left(\sin(y)\right)^2 \cdot \left(\cos(y)\right)^3 \, dy}$ = $-\frac{\sin(y)\cdot\left(\cos(y)\right)^4}{5}+\frac{1}{5}\cdot\frac{1}{3}\cdot\left(2+\left(\cos(y)\right)^2\right)\cdot\sin(y)+c$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 079

原始 ID：`849aee88-91bf-42c9-9241-e0e9af266311`

**题目原文**

Compute the integral:
$$
\int \frac{ \sqrt{4+x^2} }{ x } \, dx
$$

**参考答案原文**

$\int \frac{ \sqrt{4+x^2} }{ x } \, dx$ = $C+\sqrt{4+x^2}+\ln\left(\left|\frac{\sqrt{4+x^2}-2}{2+\sqrt{4+x^2}}\right|\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 080

原始 ID：`8b6247a5-a9f0-4677-85d6-0fa43fc2112e`

**题目原文**

Compute the integral:
$$
\int \frac{ x^3 }{ \sqrt{4 \cdot x^2+4 \cdot x+5} } \, dx
$$

**参考答案原文**

$\int \frac{ x^3 }{ \sqrt{4 \cdot x^2+4 \cdot x+5} } \, dx$ = $\left(\frac{1}{12}\cdot x^2-\frac{5}{48}\cdot x-\frac{5}{96}\right)\cdot\sqrt{4\cdot x^2+4\cdot x+5}+\frac{5}{16}\cdot\ln\left(x+\frac{1}{2}+\sqrt{1+\left(x+\frac{1}{2}\right)^2}\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 081

原始 ID：`8c977a56-0dd0-452c-9507-031e63011412`

**题目原文**

Compute the integral:
$$
\int \frac{ 1 }{ (x-3) \cdot \sqrt{10 \cdot x-24-x^2} } \, dx
$$

**参考答案原文**

$\int \frac{ 1 }{ (x-3) \cdot \sqrt{10 \cdot x-24-x^2} } \, dx$ = $-\frac{2}{\sqrt{3}}\cdot\arctan\left(\frac{\sqrt{-x^2+10\cdot x-24}}{\sqrt{3}\cdot x-4\cdot\sqrt{3}}\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 082

原始 ID：`8f13f29c-a3fe-4521-89ee-432b3b7d5ed5`

**题目原文**

Compute the integral:
$$
\int \frac{ 2 \cdot x-1 }{ \sqrt{8 \cdot x^2+4 \cdot x-10} } \, dx
$$

**参考答案原文**

$\int \frac{ 2 \cdot x-1 }{ \sqrt{8 \cdot x^2+4 \cdot x-10} } \, dx$ = $\frac{1}{32\cdot\sqrt{2}}\cdot\left(16\cdot\sqrt{4\cdot x^2+2\cdot x-5}-24\cdot\ln\left(\left|2+4\cdot\sqrt{4\cdot x^2+2\cdot x-5}+8\cdot x\right|\right)\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 083

原始 ID：`90da470f-024e-4d4e-b939-1df2b667308e`

**题目原文**

A square with side $a$ rotates about a straight line passing through its vertex and forming an angle $\varphi$ with its diagonal $\frac{ \pi }{ 4 }<\varphi<\frac{ \pi }{ 2 }$. Find
1. the volume of the solid of revolution and
2. its surface area.

**参考答案原文**

1. Volume of a solid of revolution = $a^3\cdot\pi\cdot\sqrt{2}\cdot\sin(\varphi)$
2. Surface area = $4\cdot a^2\cdot\pi\cdot\sqrt{2}\cdot\sin(\varphi)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 084

原始 ID：`91977d68-1456-4183-adfa-842c006b5f66`

**题目原文**

A tank initially holds 100 gallons of soapy water, containing 5 oz of soap. At $t = 0$, more soap solution is poured in containing 10 oz of soap/gallon at a rate of 1 gal/min. Allowing for the even dispersal of the soap, the new solution leaves the tank at the same rate. Find the amount of soap in the water after 5 minutes.

**参考答案原文**

$y=53.5267$ oz of soap

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 085

原始 ID：`91d22b7a-9491-435e-8a92-9e52cb7e9722`

**题目原文**

Compute the integral:
$$
3 \cdot \int \cos(3 \cdot x)^6 \, dx
$$

**参考答案原文**

$3 \cdot \int \cos(3 \cdot x)^6 \, dx$ = $C+\frac{1}{4}\cdot\sin(6\cdot x)+\frac{3}{64}\cdot\sin(12\cdot x)+\frac{15}{16}\cdot x-\frac{1}{48}\cdot\left(\sin(6\cdot x)\right)^3$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 086

原始 ID：`9242ceb3-9913-44c4-9a79-9c36913afcf5`

**题目原文**

Find the antiderivative of $-\frac{ 1 }{ x \cdot \sqrt{1-x^2} }$.

**参考答案原文**

$\int \left( -\frac{ 1 }{ x \cdot \sqrt{1-x^2} } \right) \, dx$ = $C+\ln\left(\frac{1+\sqrt{1-x^2}}{|x|}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 087

原始 ID：`955b81aa-a7d4-4f0b-9a5f-7b40054eb1f2`

**题目原文**

Compute the integral:
$$
\int \frac{ x }{ \left(x^2-4 \cdot x+8\right)^2 } \, dx
$$

**参考答案原文**

$\int \frac{ x }{ \left(x^2-4 \cdot x+8\right)^2 } \, dx$ = $C+\frac{x-2}{2\cdot\left(8+2\cdot(x-2)^2\right)}+\frac{1}{8}\cdot\arctan\left(\frac{1}{2}\cdot(x-2)\right)-\frac{1}{2\cdot\left(x^2-4\cdot x+8\right)}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 088

原始 ID：`9713a882-0b56-418e-870b-ffca88ceedd6`

**题目原文**

Solve the integral:
$$
\int \frac{ 6 }{ \cos(-4 \cdot x)^7 \cdot \sin(4 \cdot x) } \, dx
$$

**参考答案原文**

$\int \frac{ 6 }{ \cos(-4 \cdot x)^7 \cdot \sin(4 \cdot x) } \, dx$ = $C+\frac{3}{2}\cdot\left(\frac{3}{2\cdot\left(\cot(4\cdot x)\right)^2}+\frac{3}{4\cdot\left(\cot(4\cdot x)\right)^4}+\frac{1}{6\cdot\left(\cot(4\cdot x)\right)^6}-\ln\left(\left|\cot(4\cdot x)\right|\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 089

原始 ID：`9bb35eb9-1b58-4bda-9328-697780d41d06`

**题目原文**

Compute the integral:
$$
\int \frac{ \sin(x)^4 }{ \cos(x) } \, dx
$$

**参考答案原文**

$\int \frac{ \sin(x)^4 }{ \cos(x) } \, dx$ = $C-\frac{1}{2}\cdot\ln\left(\left|\frac{1-\sin(x)}{1+\sin(x)}\right|\right)-\frac{1}{3}\cdot\left(\sin(x)\right)^3-\sin(x)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 090

原始 ID：`9d959d14-7b9a-4159-a162-048d3b44d728`

**题目原文**

Solve the integral:
$$
\int \frac{ -8 \cdot \cos(-4 \cdot x)^3 }{ 5 \cdot \sin(-4 \cdot x)^9 } \, dx
$$

**参考答案原文**

$\int \frac{ -8 \cdot \cos(-4 \cdot x)^3 }{ 5 \cdot \sin(-4 \cdot x)^9 } \, dx$ = $C-\frac{2}{5}\cdot\left(\frac{1}{3}\cdot\left(\cot(4\cdot x)\right)^6+\frac{1}{4}\cdot\left(\cot(4\cdot x)\right)^4+\frac{1}{8}\cdot\left(\cot(4\cdot x)\right)^8\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 091

原始 ID：`9f291789-5366-4314-8c23-34f9d11ce96d`

**题目原文**

Compute the volume of the solid formed by rotating about the x-axis the area bounded by the axes and the parabola $x^{\frac{ 1 }{ 2 }}+y^{\frac{ 1 }{ 2 }}=3^{\frac{ 1 }{ 2 }}$.

**参考答案原文**

Volume = $\pi\cdot\frac{9}{5}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 092

原始 ID：`a05cd0c6-c878-437a-8b28-5137e7036859`

**题目原文**

Compute the integral:
$$
\int \frac{ 3 }{ 4 \cdot x^2 \cdot \sqrt{5 \cdot x^2-2 \cdot x+1} } \, dx
$$

**参考答案原文**

Answer is: $\frac{3}{4}\cdot\left(C-\sqrt{5+\frac{1}{x}^2-\frac{1\cdot2}{x}}-\ln\left(\left|\frac{1}{x}+\sqrt{5+\frac{1}{x}^2-\frac{1\cdot2}{x}}-1\right|\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 093

原始 ID：`a14e11ca-bae3-4aa2-9e08-d7b73a0e3f5a`

**题目原文**

Calculate the integral:
$$
\int_{-\sqrt{2}}^{\sqrt{2}} \frac{ 23 \cdot x^7+7 \cdot x^6-130 \cdot x^5-72 \cdot x^3-112 \cdot x^2+4 \cdot x+7 }{ x^2+4 } \, dx
$$

**参考答案原文**

$\int_{-\sqrt{2}}^{\sqrt{2}} \frac{ 23 \cdot x^7+7 \cdot x^6-130 \cdot x^5-72 \cdot x^3-112 \cdot x^2+4 \cdot x+7 }{ x^2+4 } \, dx$ = $7\cdot\arctan\left(\frac{1}{\sqrt{2}}\right)-\frac{392\cdot\sqrt{2}}{15}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 094

原始 ID：`a2102909-944e-4b02-bcfb-74f3d7ebf95b`

**题目原文**

Compute the integral:
$$
3 \cdot \int x^{-8} \cdot \left(9+x^2\right)^{\frac{ 1 }{ 2 }} \, dx
$$

**参考答案原文**

$3 \cdot \int x^{-8} \cdot \left(9+x^2\right)^{\frac{ 1 }{ 2 }} \, dx$ = $C+\frac{2}{1215}\cdot\left(1+\frac{9}{x^2}\right)^2\cdot\sqrt{1+\frac{9}{x^2}}-\frac{1}{729}\cdot\left(1+\frac{9}{x^2}\right)\cdot\sqrt{1+\frac{9}{x^2}}-\frac{1}{1701}\cdot\left(1+\frac{9}{x^2}\right)^3\cdot\sqrt{1+\frac{9}{x^2}}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 095

原始 ID：`a674c2d7-a34b-478c-a2db-568882e13a76`

**题目原文**

The chain of length $200$ rises up, winding on the winch. Compute the work of the weight force when lifting the chain, neglecting the size of the winch, if the running meter of the chain weighs $50$ kg.

**参考答案原文**

$W$ = $-1000000$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 096

原始 ID：`a77b8f2c-9d90-4790-8e66-137b7346b88c`

**题目原文**

Compute the integral:
$$
\int \frac{ -\sin(2 \cdot x)^4 }{ \cos(2 \cdot x) } \, dx
$$

**参考答案原文**

$\int \frac{ -\sin(2 \cdot x)^4 }{ \cos(2 \cdot x) } \, dx$ = $\frac{1}{2}\cdot\left(C+\frac{1}{3}\cdot\left(\sin(2\cdot x)\right)^3+\sin(2\cdot x)-\frac{1}{2}\cdot\ln\left(\frac{\left|1+\sin(2\cdot x)\right|}{\left|\sin(2\cdot x)-1\right|}\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 097

原始 ID：`a84a369a-f932-4e1b-81d4-3ba80b0674d9`

**题目原文**

Compute the integral:
$$
\int \frac{ \sin(x)^2 \cdot \cos(x) }{ \sin(x) + \cos(x) } \, dx
$$

**参考答案原文**

$\int \frac{ \sin(x)^2 \cdot \cos(x) }{ \sin(x) + \cos(x) } \, dx$ = $C+\frac{1}{4}\cdot\left(\ln\left(1+\tan(x)\right)+\ln\left(\left|\cos(x)\right|\right)\right)-\frac{1}{4}\cdot\left(1+\tan(x)\right)\cdot\left(\cos(x)\right)^2$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 098

原始 ID：`a9c9f912-3c8e-4269-b099-4025c1d4eabb`

**题目原文**

Compute the integral:
$$
\int \frac{ 2 \cdot x+\sqrt{x-2} }{ \sqrt[4]{x-2}+\sqrt[4]{(x-2)^3} } \, dx
$$

**参考答案原文**

$\int \frac{ 2 \cdot x+\sqrt{x-2} }{ \sqrt[4]{x-2}+\sqrt[4]{(x-2)^3} } \, dx$ = $C+20\cdot\sqrt[4]{x-2}+\frac{8\cdot1}{5}\cdot\sqrt[4]{x-2}^5-20\cdot\arctan\left(\sqrt[4]{x-2}\right)-\frac{1\cdot4}{3}\cdot\sqrt[4]{x-2}^3$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 099

原始 ID：`aaf96d92-2e6d-4d51-9302-ebdab0643835`

**题目原文**

Compute the integral:
$$
\int \frac{ 4 \cdot x-\sqrt[3]{36 \cdot x^2}-\sqrt[6]{6 \cdot x} }{ x \cdot \left(1+\sqrt[3]{6 \cdot x}\right) } \, dx
$$

**参考答案原文**

$\int \frac{ 4 \cdot x-\sqrt[3]{36 \cdot x^2}-\sqrt[6]{6 \cdot x} }{ x \cdot \left(1+\sqrt[3]{6 \cdot x}\right) } \, dx$ = $C+5\cdot\ln\left(\left|1+\sqrt[6]{6\cdot x}^2\right|\right)+\sqrt[6]{6\cdot x}^4-5\cdot\sqrt[6]{6\cdot x}^2-6\cdot\arctan\left(\sqrt[6]{6\cdot x}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 100

原始 ID：`ab60fd32-4edd-4d98-9274-20131190ef32`

**题目原文**

Compute the integral:
$$
\int \frac{ x^3 }{ \sqrt{x^2+x+1} } \, dx
$$

**参考答案原文**

$\int \frac{ x^3 }{ \sqrt{x^2+x+1} } \, dx$ = $\left(\frac{1}{3}\cdot x^2-\frac{5}{12}\cdot x-\frac{1}{24}\right)\cdot\sqrt{x^2+x+1}+\frac{7}{16}\cdot\ln\left(\left|x+\frac{1}{2}+\sqrt{x^2+x+1}\right|\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 101

原始 ID：`ab849658-cfda-452a-9ade-f2e14d96048a`

**题目原文**

Compute the integral:
$$
\int \frac{ -3 }{ e^{4 \cdot x} + \sqrt{1 + e^{8 \cdot x}} } \, dx
$$

**参考答案原文**

$\int \frac{ -3 }{ e^{4 \cdot x} + \sqrt{1 + e^{8 \cdot x}} } \, dx$ = $C-\frac{1}{4}\cdot\left(\frac{3}{e^{4\cdot x}+\sqrt{1+e^{8\cdot x}}}+3\cdot\ln\left(\frac{e^{4\cdot x}+\sqrt{1+e^{8\cdot x}}-1}{1+e^{4\cdot x}+\sqrt{1+e^{8\cdot x}}}\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 102

原始 ID：`ae7253eb-638d-404d-8764-16d3eca93f52`

**题目原文**

Compute the integral:
$$
\int \frac{ 1 }{ \left(\cos(2 \cdot x)\right)^3 } \, dx
$$

**参考答案原文**

$\int \frac{ 1 }{ \left(\cos(2 \cdot x)\right)^3 } \, dx$ = $C+\frac{\sin(2\cdot x)}{4\cdot\left(\cos(2\cdot x)\right)^2}+\frac{1}{4}\cdot\ln\left(\left|\tan\left(\frac{1}{2}\cdot\left(2\cdot x+\frac{\pi}{2}\right)\right)\right|\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 103

原始 ID：`aee39c3c-776c-45db-a4b1-78f279287461`

**题目原文**

Compute the volume of the solid formed by rotating about the x-axis the area bounded by the axes and the parabola $x^{\frac{ 1 }{ 2 }}+y^{\frac{ 1 }{ 2 }}=2^{\frac{ 1 }{ 2 }}$.

**参考答案原文**

Volume = $\frac{8\cdot\pi}{15}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 104

原始 ID：`b1cbb170-d4d2-4f07-81f3-ee4094350ade`

**题目原文**

Compute the integral:
$$
\int \frac{ 3 \cdot x+\sqrt[3]{9 \cdot x^2}+\sqrt[6]{3 \cdot x} }{ x \cdot \left(4+\sqrt[3]{3 \cdot x}\right) } \, dx
$$

**参考答案原文**

$\int \frac{ 3 \cdot x+\sqrt[3]{9 \cdot x^2}+\sqrt[6]{3 \cdot x} }{ x \cdot \left(4+\sqrt[3]{3 \cdot x}\right) } \, dx$ = $C+3\cdot\arctan\left(\frac{\sqrt[6]{3}}{2}\cdot\sqrt[6]{x}\right)+36\cdot\ln\left(\left|4+\sqrt[3]{3}\cdot\sqrt[3]{x}\right|\right)+\frac{\left(3\cdot3^{\frac{2}{3}}\right)}{2}\cdot x^{\frac{2}{3}}-9\cdot\sqrt[3]{3}\cdot\sqrt[3]{x}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 105

原始 ID：`b3573d9a-dceb-44bb-bd9a-009f13c4cc13`

**题目原文**

Compute the integral:
$$
\int \frac{ \tan(2 \cdot x) }{ \sqrt{\sin(2 \cdot x)^4+\cos(2 \cdot x)^4} } \, dx
$$

**参考答案原文**

$\int \frac{ \tan(2 \cdot x) }{ \sqrt{\sin(2 \cdot x)^4+\cos(2 \cdot x)^4} } \, dx$ = $C+\frac{1}{4}\cdot\ln\left(\sqrt{1+\tan(2\cdot x)^4}+\tan(2\cdot x)^2\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 106

原始 ID：`b5c10639-0db9-4bd6-8b11-e245dac06e15`

**题目原文**

Solve the integral:
$$
\int \frac{ 4 \cdot \cos(6 \cdot x)^3 }{ 9 \cdot \sin(6 \cdot x)^9 } \, dx
$$

**参考答案原文**

$\int \frac{ 4 \cdot \cos(6 \cdot x)^3 }{ 9 \cdot \sin(6 \cdot x)^9 } \, dx$ = $C-\frac{2}{27}\cdot\left(\frac{1}{3}\cdot\left(\cot(6\cdot x)\right)^6+\frac{1}{4}\cdot\left(\cot(6\cdot x)\right)^4+\frac{1}{8}\cdot\left(\cot(6\cdot x)\right)^8\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 107

原始 ID：`b6943d35-373f-44b1-8886-587ed5656553`

**题目原文**

$\int \frac{ 7+2 \cdot x-4 \cdot x^2 }{ 2 \cdot x^2+x-3 } \, dx$

**参考答案原文**

$\int \frac{ 7+2 \cdot x-4 \cdot x^2 }{ 2 \cdot x^2+x-3 } \, dx$ = $-2\cdot x+\ln\left(\left|2\cdot x^2+x-3\right|\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 108

原始 ID：`b726f1ca-7edd-47ed-918f-b9fc63c3a1d9`

**题目原文**

Solve the integral:
$$
\int \left(\frac{ x+1 }{ x-1 }\right)^{\frac{ 3 }{ 2 }} \, dx
$$

**参考答案原文**

$\int \left(\frac{ x+1 }{ x-1 }\right)^{\frac{ 3 }{ 2 }} \, dx$ = $C+\sqrt{\frac{x+1}{x-1}}\cdot(x-5)-3\cdot\ln\left(\left|\frac{\sqrt{x-1}-\sqrt{x+1}}{\sqrt{x-1}+\sqrt{x+1}}\right|\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 109

原始 ID：`b78b640e-2077-4261-8d0d-6af62d82047e`

**题目原文**

Compute the integral:
$$
\int \sin(3 \cdot x)^6 \cdot \cos(3 \cdot x)^2 \, dx
$$

**参考答案原文**

Answer is: $\frac{1}{32}\cdot x-\frac{1}{32}\cdot\frac{1}{12}\cdot\sin(12\cdot x)-\frac{1}{8}\cdot\frac{1}{6}\cdot\frac{1}{3}\cdot\sin(6\cdot x)^3+\frac{1}{128}\cdot x-\frac{1}{128}\cdot\frac{1}{24}\cdot\sin(24\cdot x)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 110

原始 ID：`b8a1a55a-f36b-4033-9813-55d603b2edd9`

**题目原文**

Compute the integral:
$$
\int \frac{ -2 }{ e^{3 \cdot x} + \sqrt{1 + e^{6 \cdot x}} } \, dx
$$

**参考答案原文**

$\int \frac{ -2 }{ e^{3 \cdot x} + \sqrt{1 + e^{6 \cdot x}} } \, dx$ = $C-\frac{1}{3}\cdot\left(\frac{2}{e^{3\cdot x}+\sqrt{1+e^{6\cdot x}}}+2\cdot\ln\left(\frac{e^{3\cdot x}+\sqrt{1+e^{6\cdot x}}-1}{1+e^{3\cdot x}+\sqrt{1+e^{6\cdot x}}}\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 111

原始 ID：`b9cdefb2-0696-45ba-a3d0-d4804c70d4f0`

**题目原文**

Calculate the integral:
$$
\int_{-\sqrt{2}}^{\sqrt{2}} \frac{ 2 \cdot x^7+3 \cdot x^6-10 \cdot x^5-7 \cdot x^3-12 \cdot x^2+x+1 }{ x^2+2 } \, dx
$$

**参考答案原文**

$\int_{-\sqrt{2}}^{\sqrt{2}} \frac{ 2 \cdot x^7+3 \cdot x^6-10 \cdot x^5-7 \cdot x^3-12 \cdot x^2+x+1 }{ x^2+2 } \, dx$ = $\frac{5\cdot\pi-64}{10\cdot\sqrt{2}}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 112

原始 ID：`bea9777f-c66e-48e1-b32b-f2795b3f8c4f`

**题目原文**

Compute the integral:
$$
\int \frac{ -12 }{ \sin(6 \cdot x)^6 } \, dx
$$

**参考答案原文**

$\int \frac{ -12 }{ \sin(6 \cdot x)^6 } \, dx$ = $C+2\cdot\cot(6\cdot x)+\frac{2}{5}\cdot\left(\cot(6\cdot x)\right)^5+\frac{4}{3}\cdot\left(\cot(6\cdot x)\right)^3$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 113

原始 ID：`c1c7b5c8-ba37-4871-9cc7-79a575e299a1`

**题目原文**

Calculate the integral:
$$
\int \frac{ 3 \cdot x + 4 }{ \left( x^2 + 1 \cdot x + 7 \right)^2 } \, dx
$$

**参考答案原文**

$\int \frac{ 3 \cdot x + 4 }{ \left( x^2 + 1 \cdot x + 7 \right)^2 } \, dx$ = $\frac{\frac{5}{27}\cdot x-\frac{38}{27}}{\frac{27}{4}+\left(x+\frac{1}{2}\right)^2}+\frac{30\cdot\sqrt{3}}{729}\cdot\arctan\left(\sqrt{\frac{4}{27}}\cdot\left(x+\frac{1}{2}\right)\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 114

原始 ID：`c57bcca2-8fe0-433f-98b9-bd31a9a66e49`

**题目原文**

Solve the integral:
$$
\int \frac{ 4 }{ \cos(-3 \cdot x)^3 \cdot \sin(-3 \cdot x)^2 } \, dx
$$

**参考答案原文**

$\int \frac{ 4 }{ \cos(-3 \cdot x)^3 \cdot \sin(-3 \cdot x)^2 } \, dx$ = $C+\frac{4}{3}\cdot\left(\frac{3}{4}\cdot\ln\left(\left|1+\sin(3\cdot x)\right|\right)-\frac{1}{2\cdot\left(\left(\sin(3\cdot x)\right)^2-1\right)}\cdot\sin(3\cdot x)-\frac{3}{4}\cdot\ln\left(\left|\sin(3\cdot x)-1\right|\right)-\frac{1}{\sin(3\cdot x)}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 115

原始 ID：`c600dd96-8ec6-4564-8cfc-0dcecb9d1084`

**题目原文**

Solve the integral:
$$
2 \cdot \int \sin(-2 \cdot x)^5 \cdot \cos(2 \cdot x)^2 \, dx
$$

**参考答案原文**

$2 \cdot \int \sin(-2 \cdot x)^5 \cdot \cos(2 \cdot x)^2 \, dx$ = $C+\frac{1}{3}\cdot\left(\cos(2\cdot x)\right)^3+\frac{1}{7}\cdot\left(\cos(2\cdot x)\right)^7-\frac{2}{5}\cdot\left(\cos(2\cdot x)\right)^5$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 116

原始 ID：`c9286655-d7f7-45da-a36c-6736332eca0d`

**题目原文**

Compute the integral:
$$
3 \cdot \int \frac{ \cos(3 \cdot x)^4 }{ \sin(3 \cdot x)^3 } \, dx
$$

**参考答案原文**

$3 \cdot \int \frac{ \cos(3 \cdot x)^4 }{ \sin(3 \cdot x)^3 } \, dx$ = $C+\frac{3}{4}\cdot\ln\left(\frac{1+\cos(3\cdot x)}{1-\cos(3\cdot x)}\right)-\frac{\left(\cos(3\cdot x)\right)^3}{2-2\cdot\left(\cos(3\cdot x)\right)^2}-\frac{3}{2}\cdot\cos(3\cdot x)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 117

原始 ID：`cb72c058-1dd3-47a6-bf34-25ab75f7a436`

**题目原文**

Find the integral:
$$
\int \frac{ 4 \cdot x^2+25 \cdot x+7 }{ \sqrt{x^2+8 \cdot x} } \, dx
$$

**参考答案原文**

$\int \frac{ 4 \cdot x^2+25 \cdot x+7 }{ \sqrt{x^2+8 \cdot x} } \, dx$ = $(2\cdot x+1)\cdot\sqrt{x^2+8\cdot x}+3\cdot\ln\left(\left|x+4+\sqrt{x^2+8\cdot x}\right|\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 118

原始 ID：`cc733108-05a4-4478-9f32-0eea85157535`

**题目原文**

Compute the volume of the solid formed by rotating about the x-axis the area bounded by the axes and the parabola $x^{\frac{ 1 }{ 2 }}+y^{\frac{ 1 }{ 2 }}=5^{\frac{ 1 }{ 2 }}$.

**参考答案原文**

Volume = $\pi\cdot\frac{25}{3}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 119

原始 ID：`ccfa5962-71e5-4955-bc2d-c91098f2cd13`

**题目原文**

Solve the integral:
$$
\int \frac{ 20 \cdot \cos(-10 \cdot x)^3 }{ 21 \cdot \sin(-10 \cdot x)^7 } \, dx
$$

**参考答案原文**

$\int \frac{ 20 \cdot \cos(-10 \cdot x)^3 }{ 21 \cdot \sin(-10 \cdot x)^7 } \, dx$ = $C+\frac{1}{21}\cdot\left(\frac{1}{2}\cdot\left(\cot(10\cdot x)\right)^4+\frac{1}{3}\cdot\left(\cot(10\cdot x)\right)^6\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 120

原始 ID：`ce47631d-a24b-4d1b-8f75-aeaf64f9da34`

**题目原文**

Solve the integral:
$$
-\int \frac{ 1 }{ \cos(x)^3 \cdot \sin(x)^2 } \, dx
$$

**参考答案原文**

$-\int \frac{ 1 }{ \cos(x)^3 \cdot \sin(x)^2 } \, dx$ = $C+\frac{\sin(x)}{2\cdot\left(\left(\sin(x)\right)^2-1\right)}+\frac{3}{4}\cdot\ln\left(\left|\sin(x)-1\right|\right)+\frac{1}{\sin(x)}-\frac{3}{4}\cdot\ln\left(\left|1+\sin(x)\right|\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 121

原始 ID：`ceae34e5-3a64-44a0-95c9-a2e5f16fe8ae`

**题目原文**

Find the area of the figure enclosed between the curves $y = 4 \cdot x^2$, $y = \frac{ x^2 }{ 3 }$, and $y = 2$.

**参考答案原文**

Area: $\frac{\left(8\cdot\sqrt{3}-4\right)\cdot\sqrt{2}}{3}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 122

原始 ID：`cfeeda2e-b0df-47fc-89b0-3f8cb8938309`

**题目原文**

Evaluate the integral:
$$
I = \int 3 \cdot x \cdot \ln\left(4 + \frac{ 1 }{ x } \right) \, dx
$$

**参考答案原文**

The final answer: $\left(\frac{3}{2}\cdot x^2\cdot\ln(4\cdot x+1)-\frac{3\cdot x^2}{4}+\frac{3\cdot x}{8}-\frac{3}{32}\cdot\ln\left(x+\frac{1}{4}\right)\right)-\left(\frac{3}{2}\cdot x^2\cdot\ln(x)-\left(C+\frac{3}{4}\cdot x^2\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 123

原始 ID：`d154f14e-4cc7-40dd-ae67-66d209b8bf88`

**题目原文**

Compute the integral:
$$
\int \sin(5 \cdot x)^6 \cdot \cos(5 \cdot x)^2 \, dx
$$

**参考答案原文**

Answer is: $\frac{1}{32}\cdot x-\frac{1}{32}\cdot\frac{1}{20}\cdot\sin(20\cdot x)-\frac{1}{8}\cdot\frac{1}{10}\cdot\frac{1}{3}\cdot\sin(10\cdot x)^3+\frac{1}{128}\cdot x-\frac{1}{128}\cdot\frac{1}{40}\cdot\sin(40\cdot x)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 124

原始 ID：`d33534d4-e0dd-4da6-9c8e-02e5c4837211`

**题目原文**

Compute the integral:
$$
\int \frac{ x^3-2 \cdot x^2+x }{ 3+2 \cdot x-x^2 } \, dx
$$

**参考答案原文**

$\int \frac{ x^3-2 \cdot x^2+x }{ 3+2 \cdot x-x^2 } \, dx$ = $-\frac{1}{2}\cdot x^2-2\cdot\ln\left(\left|x^2-2\cdot x-3\right|\right)-\ln\left(\left|\frac{x-3}{x+1}\right|\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 125

原始 ID：`d541eb2d-198c-47dd-8811-79633c9e701e`

**题目原文**

Solve the integral:
$$
\int \frac{ 1 }{ \sin(x)^5 } \, dx
$$

**参考答案原文**

The final answer: $C+\frac{1}{16}\cdot\left(2\cdot\left(\tan\left(\frac{x}{2}\right)\right)^2+6\cdot\ln\left(\left|\tan\left(\frac{x}{2}\right)\right|\right)+\frac{1}{4}\cdot\left(\tan\left(\frac{x}{2}\right)\right)^4-\frac{2}{\left(\tan\left(\frac{x}{2}\right)\right)^2}-\frac{1}{4\cdot\left(\tan\left(\frac{x}{2}\right)\right)^4}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 126

原始 ID：`d5eda09b-3de0-441e-a722-ccb5244adbb9`

**题目原文**

Solve the integral:
$$
\int \frac{ \sqrt{9 \cdot x+4} }{ -3 \cdot x^2 } \, dx
$$

**参考答案原文**

$\int \frac{ \sqrt{9 \cdot x+4} }{ -3 \cdot x^2 } \, dx$ = $C+\frac{\sqrt{9\cdot x+4}}{3\cdot x}-\frac{3}{4}\cdot\ln\left(\frac{\left|\sqrt{9\cdot x+4}-2\right|}{2+\sqrt{9\cdot x+4}}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 127

原始 ID：`d602c133-9e68-402e-9b69-01ca11fa01fd`

**题目原文**

Compute the integral:
$$
\int \frac{ 2 \cdot x+1 }{ (x-1) \cdot \sqrt{x^2-4 \cdot x+2} } \, dx
$$

**参考答案原文**

$\int \frac{ 2 \cdot x+1 }{ (x-1) \cdot \sqrt{x^2-4 \cdot x+2} } \, dx$ = $2\cdot\ln\left(\left|x-2+\sqrt{x^2-4\cdot x+2}\right|\right)-3\cdot\arcsin\left(\frac{x}{(x-1)\cdot\sqrt{2}}\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 128

原始 ID：`d666f55d-1b0e-4b1c-821c-ddf1d1ea87df`

**题目原文**

Compute the integral:
$$
\int \frac{ -1 }{ 3 \cdot \sin\left(\frac{ x }{ 3 }\right)^6 } \, dx
$$

**参考答案原文**

$\int \frac{ -1 }{ 3 \cdot \sin\left(\frac{ x }{ 3 }\right)^6 } \, dx$ = $\frac{\cos\left(\frac{x}{3}\right)}{5\cdot\sin\left(\frac{x}{3}\right)^5}-\frac{4}{15}\cdot\left(-\frac{\cos\left(\frac{x}{3}\right)}{\sin\left(\frac{x}{3}\right)^3}-2\cdot\cot\left(\frac{x}{3}\right)\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 129

原始 ID：`d930869f-c932-4aba-a4ea-e00bc94237a8`

**题目原文**

Compute the area of the figure bounded by curves $y = 8 \cdot x^2$, $y = 4 + 4 \cdot x^2$, lines $x = 3$, $x = -2$, and the $x$-axis.

**参考答案原文**

Area = $\frac{184}{3}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 130

原始 ID：`db7ee4b1-97eb-441e-8ab6-9f71a248e8be`

**题目原文**

Compute the integral:
$$
\int \frac{ 10 }{ \sin(4 \cdot x)^6 } \, dx
$$

**参考答案原文**

$\int \frac{ 10 }{ \sin(4 \cdot x)^6 } \, dx$ = $C-\frac{1}{2}\cdot\left(\cot(4\cdot x)\right)^5-\frac{5}{2}\cdot\cot(4\cdot x)-\frac{5}{3}\cdot\left(\cot(4\cdot x)\right)^3$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 131

原始 ID：`dcb60112-7be2-4d1a-b711-5f77dd0dc4bd`

**题目原文**

Find the integral:
$$
\int \frac{ 1 }{ \sqrt[3]{\left(\sin(x)\right)^{11} \cdot \cos(x)} } \, dx
$$

**参考答案原文**

$\int \frac{ 1 }{ \sqrt[3]{\left(\sin(x)\right)^{11} \cdot \cos(x)} } \, dx$ = $-\frac{3\cdot\left(1+4\cdot\left(\tan(x)\right)^2\right)}{8\cdot\left(\tan(x)\right)^2\cdot\sqrt[3]{\left(\tan(x)\right)^2}}+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 132

原始 ID：`dd266316-efe9-4f84-ba9d-09ebb753bc3c`

**题目原文**

Consider the Karun-$3$ dam in Iran. Its shape can be approximated as an isosceles triangle with height $205$ m and width $388$ m. Assume the current depth of the water is $180$ m. The density of water is $1000$ kg/$m^3$. Find the total force on the wall of the dam.

**参考答案原文**

The total force : $18028940487.8049$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 133

原始 ID：`dfce03fb-fa8b-46ea-94b9-343e9c0ada11`

**题目原文**

Compute the length of the arc $y = 2 \cdot \ln(3 \cdot x)$ between the points $x = \sqrt{5}$ and $x = 2 \cdot \sqrt{3}$.

**参考答案原文**

Arc Length: $1+\ln\left(\frac{5}{3}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 134

原始 ID：`e3f282dc-5d88-47c9-a17b-5900c9e45805`

**题目原文**

Find the area of the surface formed by rotating the arc of the circle $x^2 + y^2 = 1$ between the points $(1,0)$ and $(0,1)$ in the first quadrant, around the line $x + y = 1$.

**参考答案原文**

The final answer: $\frac{4\cdot\pi-\pi^2}{\sqrt{2}}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 135

原始 ID：`e50e9658-dc0f-4685-8298-ba3fdc11e9f0`

**题目原文**

Compute the integral:
$$
\int \frac{ 1 }{ \sin(x)^6 } \, dx
$$

**参考答案原文**

$\int \frac{ 1 }{ \sin(x)^6 } \, dx$ = $-\frac{\cos(x)}{5\cdot\sin(x)^5}+\frac{4}{5}\cdot\left(-\frac{\cos(x)}{3\cdot\sin(x)^3}-\frac{2}{3}\cdot\cot(x)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 136

原始 ID：`e7c924e6-d60f-43b4-b2ef-d83524eb6886`

**题目原文**

Find the moment of inertia of the figure bounded by the arc of the semicircle $x^2 + y^2 = 9$, $y > 0$ relative to the x-axis.

**参考答案原文**

The moment of inertia is: $\frac{243}{8}\cdot\pi$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 137

原始 ID：`ee44cdc7-c5a2-4805-89a4-1ab2303c9f5f`

**题目原文**

Find the area of the figure enclosed between the curves $y = 3 \cdot x^2$, $y = \frac{ x^2 }{ 6 }$, and $y = 2$.

**参考答案原文**

Area: $\frac{48-8\cdot\sqrt{2}}{3\cdot\sqrt{3}}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 138

原始 ID：`f04a641b-4ad9-445a-99a6-43a8def62a2f`

**题目原文**

Compute the integral:
$$
\int \frac{ 1 }{ (x+4) \cdot \sqrt{x^2+2 \cdot x+5} } \, dx
$$

**参考答案原文**

$\int \frac{ 1 }{ (x+4) \cdot \sqrt{x^2+2 \cdot x+5} } \, dx$ = $C+\frac{1}{\sqrt{13}}\cdot\ln\left(\sqrt{13}-4-x-\sqrt{x^2+2\cdot x+5}\right)-\frac{1}{\sqrt{13}}\cdot\ln\left(4+\sqrt{13}+x+\sqrt{x^2+2\cdot x+5}\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 139

原始 ID：`f06583ca-72cf-40eb-a419-128a961eea6e`

**题目原文**

Compute the integral:
$$
-\int \frac{ \sin\left(\frac{ x }{ 3 }\right)^4 }{ \cos\left(\frac{ x }{ 3 }\right)^2 } \, dx
$$

**参考答案原文**

$-\int \frac{ \sin\left(\frac{ x }{ 3 }\right)^4 }{ \cos\left(\frac{ x }{ 3 }\right)^2 } \, dx$ = $-\frac{3\cdot\sin\left(\frac{x}{3}\right)^3}{\cos\left(\frac{x}{3}\right)}+\frac{3}{2}\cdot x-\frac{9}{4}\cdot\sin\left(\frac{2\cdot x}{3}\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 140

原始 ID：`f0abc5d4-cb46-4522-a5e4-08a47caf8212`

**题目原文**

Compute the integral:
$$
\int \sqrt[3]{x \cdot \left(8-x^2\right)} \, dx
$$

**参考答案原文**

$\int \sqrt[3]{x \cdot \left(8-x^2\right)} \, dx$ = $C+\frac{1}{3}\cdot\left(2\cdot\ln\left(\left|1+\sqrt[3]{\frac{8}{x^2}-1}^2-\sqrt[3]{\frac{8}{x^2}-1}\right|\right)-4\cdot\ln\left(\left|1+\sqrt[3]{\frac{8}{x^2}-1}\right|\right)-4\cdot\sqrt{3}\cdot\arctan\left(\frac{1}{\sqrt{3}}\cdot\left(2\cdot\sqrt[3]{\frac{8}{x^2}-1}-1\right)\right)\right)+\frac{4\cdot\sqrt[3]{\frac{8}{x^2}-1}}{1+\sqrt[3]{\frac{8}{x^2}-1}^3}$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 141

原始 ID：`f124cb60-bc4d-44b2-b851-fd1aef9a1bfb`

**题目原文**

Solve the integral:
$$
\int 22 \cdot \cot(-11 \cdot x)^5 \, dx
$$

**参考答案原文**

$\int 22 \cdot \cot(-11 \cdot x)^5 \, dx$ = $C+\frac{1}{2}\cdot\left(\cot(11\cdot x)\right)^4+\ln\left(1+\left(\cot(11\cdot x)\right)^2\right)-\left(\cot(11\cdot x)\right)^2$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 142

原始 ID：`f38c8513-234c-4b70-b306-880df56aa4e9`

**题目原文**

Evaluate the integral:
$$
I = \int 3 \cdot \ln\left(\sqrt{2-x}+\sqrt{2+x}\right) \, dx
$$

**参考答案原文**

The final answer: $3\cdot x\cdot\ln\left(\sqrt{2-x}+\sqrt{2+x}\right)-\frac{3}{2}\cdot\left((C+x)-2\cdot\arcsin\left(\frac{x}{2}\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 143

原始 ID：`f46c0483-d278-4a55-af5b-bc6b958126ff`

**题目原文**

Solve the integral:
$$
\int \left(\frac{ x+2 }{ x-2 } \right)^{\frac{ 3 }{ 2 }} \, dx
$$

**参考答案原文**

$\int \left(\frac{ x+2 }{ x-2 } \right)^{\frac{ 3 }{ 2 }} \, dx$ = $C+\sqrt{\frac{x+2}{x-2}}\cdot(x-10)-6\cdot\ln\left(\left|\frac{\sqrt{x-2}-\sqrt{x+2}}{\sqrt{x-2}+\sqrt{x+2}}\right|\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 144

原始 ID：`f47cb838-a60c-461f-8c9b-9143e021222f`

**题目原文**

Use integration by substitution and/or by parts to compute the integral:
$$
\int x \cdot \ln(5+x) \, dx
$$

**参考答案原文**

The final answer: $D+5\cdot(x+5)+\left(\frac{1}{2}\cdot(x+5)^2-5\cdot(x+5)\right)\cdot\ln(x+5)-\frac{1}{4}\cdot(x+5)^2$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 145

原始 ID：`fa6de80d-c556-45a5-ba55-741e46642251`

**题目原文**

Compute the integral:
$$
\int \frac{ 3 }{ 3+\sin(2 \cdot x)+\cos(2 \cdot x) } \, dx
$$

**参考答案原文**

$\int \frac{ 3 }{ 3+\sin(2 \cdot x)+\cos(2 \cdot x) } \, dx$ = $C+\frac{3}{\sqrt{7}}\cdot\arctan\left(\frac{1}{\sqrt{7}}\cdot\left(1+2\cdot\tan(x)\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 146

原始 ID：`fcada4da-798e-438e-8bfd-3efa21ce1322`

**题目原文**

Compute the integral:
$$
\int x \cdot \arctan(2 \cdot x)^2 \, dx
$$

**参考答案原文**

$\int x \cdot \arctan(2 \cdot x)^2 \, dx$ = $\frac{1}{16}\cdot\left(2\cdot\left(\arctan(2\cdot x)\right)^2+2\cdot\ln\left(4\cdot x^2+1\right)+8\cdot x^2\cdot\left(\arctan(2\cdot x)\right)^2-8\cdot x\cdot\arctan(2\cdot x)\right)+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 147

原始 ID：`fd219d83-cf3d-41b2-9d26-f01e81827b91`

**题目原文**

Compute the integral:
$$
3 \cdot \int \cos(2 \cdot x)^6 \, dx
$$

**参考答案原文**

$3 \cdot \int \cos(2 \cdot x)^6 \, dx$ = $\frac{3}{8}\cdot\sin(4\cdot x)+\frac{9}{128}\cdot\sin(8\cdot x)+\frac{15}{16}\cdot x-\frac{1}{32}\cdot\left(\sin(4\cdot x)\right)^3+C$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 148

原始 ID：`fe42fdde-3ec3-49f2-af06-ec452da37893`

**题目原文**

Solve the integral:
$$
\int \frac{ -\sqrt[3]{2 \cdot x} }{ \sqrt[3]{(2 \cdot x)^2}-\sqrt{2 \cdot x} } \, dx
$$

**参考答案原文**

$\int \frac{ -\sqrt[3]{2 \cdot x} }{ \sqrt[3]{(2 \cdot x)^2}-\sqrt{2 \cdot x} } \, dx$ = $C-3\cdot\left(\frac{1}{2}\cdot\sqrt[6]{2\cdot x}^2+\frac{1}{3}\cdot\sqrt[6]{2\cdot x}^3+\frac{1}{4}\cdot\sqrt[6]{2\cdot x}^4+\sqrt[6]{2\cdot x}+\ln\left(\left|\sqrt[6]{2\cdot x}-1\right|\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 149

原始 ID：`fed9d0b7-506f-441f-b52a-8f0e24292fd1`

**题目原文**

Compute the integral:
$$
\int \frac{ 2 \cdot x+\sqrt{2 \cdot x-3} }{ 3 \cdot \sqrt[4]{2 \cdot x-3}+\sqrt[4]{(2 \cdot x-3)^3} } \, dx
$$

**参考答案原文**

$\int \frac{ 2 \cdot x+\sqrt{2 \cdot x-3} }{ 3 \cdot \sqrt[4]{2 \cdot x-3}+\sqrt[4]{(2 \cdot x-3)^3} } \, dx$ = $C+2\cdot\left(9\cdot\sqrt[4]{2\cdot x-3}+\frac{1}{5}\cdot\sqrt[4]{2\cdot x-3}^5-\frac{2}{3}\cdot\sqrt[4]{2\cdot x-3}^3-\frac{27}{\sqrt{3}}\cdot\arctan\left(\frac{1}{\sqrt{3}}\cdot\sqrt[4]{2\cdot x-3}\right)\right)$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---

## 150

原始 ID：`ffee282b-ad0f-40e6-a100-9ed7da950b5a`

**题目原文**

Compute the integral:
$$
-\int \cos(6 \cdot x)^6 \, dx
$$

**参考答案原文**

$-\int \cos(6 \cdot x)^6 \, dx$ = $C+\frac{1}{288}\cdot\left(\sin(12\cdot x)\right)^3-\frac{1}{24}\cdot\sin(12\cdot x)-\frac{1}{128}\cdot\sin(24\cdot x)-\frac{5}{16}\cdot x$

**人工核查（请填写）**

- 题型：
- 是否为定积分求值（是 / 否）：
- 答案能否自动评分（可以 / 需要改评分器 / 不可以）：
- 是否保留（是 / 否 / 待定）：
- 备注或排除理由：

---
