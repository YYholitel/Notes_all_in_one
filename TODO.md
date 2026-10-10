# TODO

## 明天继续

### 1. 测试采集数据集的范式和使用，以及数据保存

- [ ] 确定实验范式：现在用的是 Gabor 朝向 2AFC，要确认这是否就是最终范式
- [ ] 试跑确认刺激参数是否合适（视距、Gabor 大小、倾角难度）
  - `TILT_DEG = 12` 目前没在真人身上验证过，太简单调小、太难调大
- [ ] 跑一次计时精度校验（已知时长刺激 vs 实际记录时长），确认有没有掉帧
- [ ] 确认采集流程：练习 → 正式 → 中途退出 → 超时 这几种情况数据都正常落盘
- [ ] 检查数据保存是否可靠
  - 本地写入（原子写，断电不留半行 CSV）
  - NAS 同步（含 sha256 校验）
  - 服务器可读性
- [ ] 确认多被试组织方式：`<被试>/<被试>_<时间戳>.csv`

### 2. 按照给定的模板对齐和保存记录

- [ ] 确认「模板」具体指哪个
  - 如果是**实验模板**：`experiment.py` 及配套的 `sync.py` / `analyze.py` / 四个 bat
  - 如果是**数据记录模板**：`experiment.py` 里的 `CSV_FIELDS`（21 列），要核对列名和含义
- [ ] 和给定的模板逐字段对齐，不一致的地方记下来
- [ ] 定稿后同步到服务器（`code/` 是服务器端源头）

---

## 当前进度（2026-10-09 晚）

### 已完成

- 服务器脚本 `experiment.py` 之前是坏的 Python（`f'试` 与 `次 {i+1}'` 之间被插了换行，
  `试` 的三个 UTF-8 字节被劈开）→ 已用本地版本修复，坏文件备份为
  `code/experiment.py.broken_20261009_211608`
- `Z:` 盘之前根本没映射过 → 已建好并持久化（`\\10.20.33.82\dataset4`）
- 实验脚本重写为正式版：真实反应时、正确率判定、21 列记录、原子写盘、按被试分文件夹、
  自动同步 NAS、`--self-test` 无人值守自检
- 新增 `sync.py`（幂等同步 + sha256 校验）、`analyze.py`（服务器端分析）
- 新增 4 个 bat 启动器，验证过全链路可跑通

### 数据流向（三个位置是同一份）

```
实验时   J:\psychopy\subject_data\<被试>\<被试>_<时间戳>.csv      ← 实时写本地
结束后   Z:\lihy\experiments\my_exp\data\<被试>\...csv            ← 自动同步 + 校验
分析时   /mnt/dataset4/lihy/experiments/my_exp/data/<被试>/...csv  ← 服务器视角
```

### 文件清单

本地 `J:\psychopy\`：

| 文件 | 作用 |
|---|---|
| `experiment.py` | 实验主程序（正式版） |
| `sync.py` | 本地 → NAS 同步 |
| `analyze.py` | 服务器端分析示例 |
| `README.md` | 流程说明 |
| `demo_minimal.py` | 最小教学模板（约 60 行，用来理解结构） |
| `1-自检.bat` ~ `4-补传数据.bat` | 双击启动器 |

服务器（同一份 NAS 存储）：

```
/mnt/dataset4/lihy/experiments/my_exp/code/experiment.py
/mnt/dataset4/lihy/experiments/my_exp/code/sync.py
/mnt/dataset4/lihy/experiments/my_exp/analysis/analyze.py
```

### 明天开工前先记住这几条

- **跑实验必须用 `J:\psychopy\python.exe`**，`E:\anaconda` 的 Python 没装 psychopy
- 那个 `psychopy.exe` 是坏的（uv trampoline 报错），别用
- **别给 `experiment.py` 加 `--help`**，会被 PsychoPy 自己的参数解析劫持
- **服务器分析必须 `conda activate ecg_r1`**，系统 python3 和 base 都没 pandas
- 跑实验前先 `Test-Path Z:\` 确认网盘还在；不在的话脚本会自动回退 UNC 路径
- 改代码先用 `1-自检.bat` 过一遍，再上被试

### 待处理的小事

- [ ] `J:\psychopy\subject_data\subject01.csv` 是旧模板的占位数据（`rt` 全是 1.0，
      且平铺没分文件夹），确认后可以删
- [ ] 注意：往 NAS 写数据时，`/mnt/dataset4` 已用 422T / 429T（99%），只剩约 6.7T

### 踩过的坑（避免重复排查）

- 中文写进 `.py` 时，多字节字符被换行劈开会直接 `SyntaxError`，
  报错信息（`unterminated string literal`）和真实原因（编码被破坏）完全对不上。
  所有脚本已加 `# -*- coding: utf-8 -*-`
- `.bat` 文件必须存成 **GBK** 编码，`cmd.exe` 是按 GBK 读批处理的；
  存成 UTF-8 会把中文拆坏当成命令执行。同时 `set PYTHONIOENCODING=gbk`
  让 Python 输出也统一成 GBK
- 反应时 `rt` 必须用 `win.flip()` 返回的**实测上屏时刻**当基准，
  不能用 flip 之前的时钟读数（会带上整个 vsync 等待时间）
- 算正确率时分子分母都要排除练习试次，否则会出现 >1 的荒谬结果
