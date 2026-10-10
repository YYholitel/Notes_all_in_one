## **世界模型学习指通过数据学习环境的状态、动态与未来演化规律，使智能体能够在内部进行预测、仿真与规划；当前主流路线包括观测层生成式模型（如 Sora）、潜空间动力学模型（如 RSSM/Dreamer）、强化学习驱动模型（如 MuZero）、以及对象中心模型（如 SlotFormer）。**

---

## 一、什么是世界模型

世界模型（World Model）是 AI 用来“理解世界如何变化”的内部模型，它学习：

- **状态表示**（Representation）
- **动态预测**（Prediction）
- **行动影响未来**（Interaction）

其目标是让智能体能在内部“想象未来”，从而支持规划、决策与控制 [![搜狐](https://www.bing.com/th?id=ODF.LAJ6rHJOnkdWhGVQVAmHHQ)搜狐](https://www.sohu.com/a/1000605276_211762)。

---

## 二、四大主流技术路线

根据最新综述（TechRxiv 2026） [![datawhalechina.github.io](https://www.bing.com/th?id=ODF.gkppZSyoAK5-LbHPbD7WwA)datawhalechina.github.io](https://datawhalechina.github.io/dive-into-embodied-ai/docs/foundations/world-model/survey-and-map)，世界模型可分为四大类：

### 1. 观测层生成式世界模型（Video/Scene Generation）

直接预测未来图像/视频。  
代表：

- **Sora（2024）**：大规模视频生成作为物理模拟器
- **iVideoGPT（2024）**：token 化视频预测
- **GameNGen（2025）**：扩散模型实时生成可玩游戏世界

特点：生成逼真、可视化强，但训练成本高。

---

### 2. 潜空间世界模型（Latent Dynamics Models）

在压缩后的潜空间中建模动态，效率高、适合 RL。  
代表：

- **RSSM（PlaNet）**
- **Dreamer 系列（V1–V3）**：在想象空间中训练策略
- **TD-MPC2（2024）**：无解码器的隐式世界模型

特点：高效、适合机器人与控制任务。

---

### 3. 强化学习驱动世界模型（Model-based RL）

同时学习奖励、价值、策略与动态。  
代表：

- **MuZero**：无需环境规则即可规划
- **PETS**：概率动力学模型用于机器人控制

特点：直接用于决策闭环。

---

### 4. 对象中心世界模型（Object-centric WM）

以对象为基本单位建模世界。  
代表：

- **Slot Attention / SlotFormer**

特点：可解释性强、组合泛化好。

---

## 三、世界模型的核心能力

综述指出世界模型具备三大核心功能 [![搜狐](https://www.bing.com/th?id=ODF.LAJ6rHJOnkdWhGVQVAmHHQ)搜狐](https://www.sohu.com/a/1000605276_211762)：

1. **未来预测（Future Prediction）**
2. **内部仿真（Imagination / Rollout）**
3. **规划与决策（Planning & Control）**

这些能力使其成为机器人、自动驾驶、游戏智能体等系统的关键模块。

---

## 四、应用领域

### 1. 机器人（操作、导航、策略学习）

- RoboDreamer、Genie Envisioner
- 支持动作想象、闭环控制、长期导航 [![搜狐](https://www.bing.com/th?id=ODF.LAJ6rHJOnkdWhGVQVAmHHQ)搜狐](https://www.sohu.com/a/1000605276_211762)。

### 2. 自动驾驶

- GAIA-1、Vista、DriveDreamer
- 用于交通场景预测、行为推演与决策集成 [![搜狐](https://www.bing.com/th?id=ODF.LAJ6rHJOnkdWhGVQVAmHHQ)搜狐](https://www.sohu.com/a/1000605276_211762)。

### 3. 视频与 3D 世界建模

- Sora、3DGS、NeRF/4D 场景预测。

### 4. GUI 智能体

- WebDreamer、WKM。

---

## 五、系统学习路线（从入门到研究）

结合课程与综述建议：

### **阶段 1：基础打底**

- 表示学习（MAE、SimCLR、JEPA）
- 状态空间模型（Kalman、SSM）
- 生成模型（Diffusion、Autoregressive）

参考：宾大 CIS 6280《World Models》课程 [![jxxy.net](https://www.bing.com/th?id=ODF._EZHWYI_i9SLjdsAye-YjA)jxxy.net](https://www.jxxy.net/ai/paths/world-models-mastery/)。

---

### **阶段 2：核心世界模型方法**

按推荐顺序：

1. **PlaNet → RSSM**
2. **Dreamer V1–V3**
3. **MuZero**
4. **V-JEPA 2 / I-JEPA**
5. **Sora / iVideoGPT / GameNGen**

参考：Awesome-World-Models 清单（500+ 论文） [![datawhalechina.github.io](https://www.bing.com/th?id=ODF.gkppZSyoAK5-LbHPbD7WwA)datawhalechina.github.io](https://datawhalechina.github.io/dive-into-embodied-ai/docs/foundations/world-model/survey-and-map)。

---

### **阶段 3：具身智能与应用**

- 机器人：PETS、RoboDreamer、Genie
- 自动驾驶：GAIA-1、Vista
- 游戏模拟：Oasis、Matrix-Game

---

### **阶段 4：评测与研究设计**

- 基准：World-In-World、ACT-Bench
- 物理引擎：MuJoCo、Isaac、Genesis
- 研究方法：失效分析、系统评测 [![walkinglabs.github.io](https://www.bing.com/th?id=ODF.gkppZSyoAK5-LbHPbD7WwA)walkinglabs.github.io](https://walkinglabs.github.io/hands-on-world-models/%E8%AF%BE%E7%A8%8B%E6%80%BB%E7%BA%B2.html)。

---

## 六、推荐学习资源

### 1. **课程**

- 宾大 CIS 6280《World Models》 [![jxxy.net](https://www.bing.com/th?id=ODF._EZHWYI_i9SLjdsAye-YjA)jxxy.net](https://www.jxxy.net/ai/paths/world-models-mastery/)
- Learn World Models（项目驱动） [![datawhalechina.github.io](https://www.bing.com/th?id=ODF.gkppZSyoAK5-LbHPbD7WwA)datawhalechina.github.io](https://datawhalechina.github.io/learn-world-model/zh/)

### 2. **综述与清单**

- Learning to Model the World（TechRxiv 2026） [![datawhalechina.github.io](https://www.bing.com/th?id=ODF.gkppZSyoAK5-LbHPbD7WwA)datawhalechina.github.io](https://datawhalechina.github.io/dive-into-embodied-ai/docs/foundations/world-model/survey-and-map)
- Awesome-World-Models（GitHub）

---

## 七、总结

世界模型学习是 AI 迈向“预测、推演、规划”能力的核心路线，涵盖生成模型、强化学习、表示学习与具身智能等多个方向，并在机器人、自动驾驶与视频生成中快速落地。