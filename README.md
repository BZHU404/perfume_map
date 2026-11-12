# Simon Workshop™ · Scent Map（香谱）

> 气味从何而来，又如何被创造？

香谱是一个纯静态、多页面的中文气味知识网站。它把植物、提取物、芳香分子、商品原料、香调、和弦、香水作品、传统香文化、安全法规分别建模，再通过全局检索、详情抽屉、香调轮盘、气味逆向检索、原料比较与和弦实验室连接起来。

当前工作目录：`/Users/bzhu/Downloads/perfume_map`

---

## 1. 文件结构

```text
.
├── index.html              首页 / 全局检索 / 气味逆向检索 / 香调轮盘 / 随机探索
├── natural.html            天然芳香原料 / 提取物 / 原料比较
├── molecules.html          芳香分子 / 商品调香原料
├── perfumery.html          调香体系 / 香调轮盘 / 和弦 / 和弦实验室 / 知识
├── perfume.html            香水作品档案 / 品牌索引
├── incense.html            熏香与传统香文化
├── safety.html             安全、法规与使用规范
├── styles.css              共享视觉系统与响应式样式
├── app.js                  共享交互、检索、抽屉、轮盘、比较、收藏等
├── luxury.css              奢华视觉层样式
├── luxury.js               GSAP / ScrollTrigger / Lenis 动效控制与降级
├── data/
│   ├── sources.js          来源、可信度制度、引用辅助函数
│   ├── materials.js        天然原料（基础）
│   ├── materials-extra.js  天然原料 / 特殊原料增补
│   ├── materials-extra2.js 第二批天然原料（18 条）
│   ├── extracts.js         提取物（基础）
│   ├── extracts-extra.js   20 条特殊/加工香料
│   ├── extracts-extra2.js  第二批天然提取物（18 条）
│   ├── molecules.js        芳香分子（基础）
│   ├── molecules-extra.js  32 条分子增补
│   ├── molecules-extra2.js 86 条分子增补
│   ├── molecules-extra3.js 龙脑 / 二氢茉莉酮补遗
│   ├── ingredients.js      商品原料（基础）
│   ├── ingredients-extra.js Cetalox / Muscenone 商品记录
│   ├── ingredients-extra2.js 商品基料 19 条 + 辅助材料 11 条
│   ├── families.js         15 个主香调与子香调
│   ├── accords.js          12 个经典和弦
│   ├── brands.js           品牌（与作品分开）
│   ├── perfumes.js         25 款香水作品
│   ├── incense.js          15 个传统香文化实践
│   ├── knowledge.js        调香知识 / 安全法规
│   └── scenes.js           15 个气味逆向检索场景
├── assets/
│   ├── vendor/             本地托管的 GSAP / ScrollTrigger / Lenis
│   ├── images/
│   │   ├── hero/botanical-atlas.svg
│   │   ├── logo.png            品牌徽章（透明底）
│   │   ├── logo-64.png         favicon
│   │   ├── apple-touch-icon.png
│   │   ├── plates/*.svg     6 张自绘章节装饰图
│   │   └── molecules/*.png  PubChem 二维结构图（按 CID 命名）
└── README.md
```

没有构建步骤、后端或包管理器依赖。GSAP / ScrollTrigger / Lenis 已本地托管在 `assets/vendor/`，不依赖 CDN；所有页面通过普通 `<script>` 按顺序挂载数据、界面逻辑与奢华动效层。若动画库缺失或用户启用 `prefers-reduced-motion`，网站会自动降级为普通静态浏览。

---

## 2. 首期规模（实际录入）

| 模块 | 数量 |
|---|---:|
| 天然芳香原料 | 85 |
| 提取物 | 60 |
| 芳香分子 | 162 |
| 商品/辅助原料 | 41 |
| 主香调（含子香调） | 15（54 个子香调） |
| 特殊/加工香料 | 20 |
| 经典和弦 | 12 |
| 品牌 | 15 |
| 香水作品 | 25 |
| 传统香文化 | 15 |
| 调香知识 | 12 |
| 安全/法规知识 | 15 |
| 气味逆向场景 | 15 |

提取物覆盖 60 条：基础提取物 22 条、20 条“特殊/加工香料”与 18 条第二批天然提取物。玫瑰仍拆成精油、原精、浸膏、纯露、酊剂五种独立记录。分子、原料、提取物与商品/辅助原料均保留单独审核摘要。

---

## 3. 本地预览

### 方式 A：直接双击

直接双击 `index.html` 即可浏览基础内容。数据通过 `<script>` 挂载，不依赖 `fetch`；`file://` 下的深链接、抽屉、筛选、收藏等核心功能已用 Microsoft Edge headless 实测可运行。若浏览器对 `file://` 的 localStorage/History 有额外限制，网站会降级而不中断浏览。

### 方式 B：本地静态服务器（推荐）

在项目目录运行：

```bash
cd /Users/bzhu/Downloads/perfume_map
python3 -m http.server 8000
```

打开：

```text
http://localhost:8000/
```

停止服务器：在终端按 `Ctrl+C`。

---

## 4. GitHub Pages 部署

1. 将本目录全部文件提交到 GitHub 仓库（保持 `index.html` 在仓库根目录）。
2. 在仓库 **Settings → Pages** 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`（或实际分支）
   - Folder: `/ (root)`
3. 保存后等待 GitHub Pages 构建；地址通常为：
   `https://<用户名>.github.io/<仓库名>/`
4. 所有链接均为相对路径，可部署在仓库根路径或项目子路径下，无需修改。

---

## 5. 已实现的交互

- **全站检索**：中文名、英文名、别名、学名、CAS、IUPAC、品牌、调香师、香调、香文化地区等；结果按实体类型分组。
- **键盘**：`/` 聚焦搜索，`Esc` 关闭搜索/详情/弹窗或移动端导航，`↑/↓` 在搜索结果中移动，`Enter` 打开。
- **深链接**：`natural.html#rose-damascena`、`molecules.html#vanillin`、`perfume.html#shalimar` 等；打开页面时自动打开详情抽屉。
- **共享详情抽屉**：原料、提取物、分子、商品原料、香调、和弦、香水、香文化、两类知识条目共用。
- **页面内筛选**：原料分类、分子化学类别、香水品牌/调香师/年代/年份/浓度、香文化地区、安全分类。
- **原料比较**：2–3 种原料并排比较；缺失项明确显示未录入，不做推测。
- **香调轮盘**：15 个主香调扇区可点击；子香调可点击；代表原料/分子可进入详情。
- **气味逆向检索**：15 个预设场景 + 本地标签/名称语义匹配；每条推荐给出关联理由与免责声明。
- **和弦实验室**：选择 2–6 种原料，显示各自气味/香调、香调分布、共同分子、可能和弦方向与潜在张力；不生成比例。
- **随机探索**：全站随机抽取原料/提取物/分子/香水/香文化/知识。
- **收藏**：localStorage 保存，跨页面计数同步，收藏面板可打开详情。
- **移动端导航与布局**：390px 宽度无页面级横向滚动；详情抽屉全屏；比较表在自身容器内横向滚动。
- **无 JS 依赖的数据脚本**：所有数据文件可独立扩充，按依赖顺序加载。
- **特殊/加工香料独立分层**：20 条干馏、CO₂、茶/咖啡、蜂蜜/海藻、干草/焦油等记录，单独展示在 `natural.html`，仍与普通精油/原精区分。
- **奢华动效层**：首屏金色序章、浏览器原生 View Transition 页面交叉淡入、滚动显现、漂浮金色微粒、卡片 3D 倾斜、跟随光斑、磁吸按钮、滚动进度与页边框；不使用自定义光标。移动端与减少动态效果环境自动降级。

---

## 6. 资料、可信度与审核规则

可信度等级：**A / B / C / D / U**（定义见网站「资料与可信度」弹窗和 `data/sources.js`）。

- 化学身份与二维结构：优先 PubChem；CAS 取 PubChem 同义词中的 CAS 形式，并在条目中说明异构体/混合物差异。
- 法规：引用 IFRA、EUR-Lex、SCCS、FDA 等原始入口；**不复制具体限值**，避免过期或断章取义。
- 植物：以 Kew Plants of the World Online 作为学名/异名核对入口；商品“雪松/檀香/沉香”等可能对应不同物种，已在条目中提醒。
- 香水：公开香调表按 C 级处理，明确“不等于完整配方”；不声称掌握商业配方。
- 气味描述：标记为“品鉴参考”，不作为客观化学结论。
- 安全与法规：区分 hazard / risk / exposure / 剂量 / 途径 / 法规；不提供医疗、解毒、治疗或自行配制用量建议。
- 来源和“最后核对”日期显示在条目详情底部；安全条目还单独显示适用范围、最后核对日期和“查原始文件”的提示。

---

## 7. 测试记录（实际执行）

使用 **Microsoft Edge 1440×1000 / 1440×1100 与 390×844 headless（CDP）** 对七个页面进行了：

- 页面加载与控制台错误检查（无 JS 异常）；
- 桌面/移动端布局与横向溢出检查（`document.documentElement.scrollWidth = 390`）；
- 全局搜索输入、分组结果、键盘 `↑`、`Enter`、跨页面跳转与详情打开；
- 深链接（含 `file://`）自动打开抽屉；
- 原料筛选、2 种原料比较与比较表；
- 香水品牌/年份筛选；
- 香调轮盘点击切换；
- 和弦实验室添加材料；
- 气味逆向检索（“潮湿的泥土”等）；
- 收藏写入 localStorage、跨页面计数、收藏面板；
- 移动端菜单开合；
- `file://` 双击路径与本地静态服务器路径；
- 数据库扩充后复测：85 原料卡、60 提取物、162 分子、20 特殊/加工香料卡、41 商品/辅助原料；桌面与 390px 均无横向溢出；
- 奢华动效层：首次序章、浏览器原生 View Transition、滚动显现、轮盘入场、漂浮金色微粒、卡片倾斜、磁吸按钮与本地 GSAP/Lenis 加载；无自定义光标。
- `prefers-reduced-motion: reduce` 下自动关闭重效果并保持内容可见；
- 使用 Safari UA 模拟验证了 Safari 降级分支（原生滚动、无 Lenis、无二次入场）；真实 Safari 渲染仍需在设备上最终确认；
- 站内跳转由浏览器原生导航 + 跨文档 View Transition 处理，不再由 JS 延迟 `location` 跳转；站内跳转不重播首屏入场，但**刷新/直接打开仍播放序章与首屏入场**。

以上测试是**功能与布局测试**，不等于对所有外部资料逐条重新做学术同行评审。资料可靠性请以条目内来源、等级与“最后核对”字段为准。

---

## 7.1 视觉特效依赖

- 文件：`assets/vendor/gsap.min.js`、`assets/vendor/ScrollTrigger.min.js`、`assets/vendor/lenis.min.js`
- 版本：GSAP / ScrollTrigger 3.12.5；Lenis 1.1.14
- 许可：GSAP Standard “No Charge” License；Lenis MIT。许可见 `assets/vendor/LICENSE-*.txt`
- **全部本地托管**：上传 GitHub Pages 后无需访问任何 CDN；即使外部网络受限也能正常使用。
- `luxury.js` 使用特性检测：动画库加载失败、`prefers-reduced-motion`、触屏/小屏时自动关闭重效果，不阻塞内容与功能。
- **Safari 专用降级**：关闭 Lenis，改用原生滚动；关闭毛玻璃与粒子的混合模式；首屏使用纯透明度交叉淡出，透明结束后延迟移除序章；站内跳转使用浏览器原生导航（支持时叠加 View Transition），后续页面不重播首屏入场。

---

## 8. 已知问题 / 边界

1. **外部资料可能更新**：IFRA、EU、FDA、Kew、PubChem 等页面与标准会变化；网站显示的是编辑整理时的引用入口，不保证永久有效。
2. **没有复制具体法规限值**：这是有意的安全选择。实际配方合规必须查最新标准原文并咨询专业人员。
3. **香水公开香调不是配方**：版本、批次、市场与法规均可能改变气味；部分品牌历史/调香师归属存在争议，条目按 C 级处理。
4. **语义匹配不是 AI**：气味逆向检索基于本地标签、别名和关联数据；无法精确“还原”文字描述的气味。
5. **未逐条核实所有历史叙事**：传统香文化条目明确区分可核实实践、地区差异与不确定细节；具体仪式需查专门研究。
6. **部分条目没有商品级规格**：例如商业原料供应商归属、纯度、异构体比例、SDS 版本未逐批核实，均以 C 级或“待核实”处理。
7. **图片**：结构图来自 PubChem 对应 CID，是二维识别图；首页与各章节的 6 张图均为项目内自绘 SVG，是装饰/示意，不是植物照片、真实产品包装、考古复原或医学解剖图。品牌徽章 `logo.png` 由用户提供的图像去除外围透明边后生成，不是自绘 SVG，也不代表任何真实产品。没有使用伪造的植物照片、文物照片或伪造结构式。
8. **移动端极窄屏（<390px）**：主要目标为 390px；更窄屏的个别排版可能进一步换行，但已避免页面级横向滚动。
9. **动效依赖本地 JS**：GSAP/ScrollTrigger/Lenis 已随项目上传；若脚本被阻止、浏览器不支持或用户启用减少动态效果，页面自动退回普通静态浏览，但不会获得同样的动效。
10. **未实测真实 Safari/Firefox 的动效细节**：Safari 分支通过 UA 模拟验证；文中“已验证”的动效与布局测试主要基于 Microsoft Edge headless、本地静态服务器与 `file://`。真实 Safari 的合成层表现可能仍需根据设备复核。
11. **跨文档 View Transition 有浏览器差异**：不支持的浏览器会直接原生跳转；站内页面仍是一次真实的静态页面加载，但已避免 JS 延迟刷新、重复首屏动画与自定义幕布；刷新/直接打开会正常重播开场。
12. **新增条目并非全部逐条实验复现**：第二批 88 个分子、18 个原料、18 个提取物；商品/辅助原料总计 41 条，均以 PubChem/POWO/Good Scents/行业资料交叉核对为主，审核级别多为 B/C；个别稀有/实验性提取物与商品基料的商业可得性、产地、纯度与定量组成仍需供应商 TDS/SDS 核实。
13. **特殊材料的安全边界更强**：桦木焦油可能含热解副产物，烟草含尼古丁，海藻可能富集碘/重金属，蜂蜜涉及蜂产品过敏；不要把“天然/传统”当作安全保证。
14. **第二批未完成项**：γ-甲基紫罗兰酮、2-乙酰基吡嗪、二甲基二硫醚因 PubChem 查询失败/身份不明确暂未录入；部分天然原料、提取物和商品基料仍在待核实队列。
15. **商品名不是化学名**：Timbersilk、Sylvamber、Amber Xtreme、Norlimbanol、Kephalis、Cedramber、Boisambrene Forte、Okoumal、Ebanol、Polysantol、Georgywood、Clearwood、Akigalawood、Helvetolide、Celestolide、Phantolide、Traseolide、Nirvanolide、Sylkolide 均按商品基料记录，具体组成/供应商/法规状态以官方 TDS/SDS 为准。

---

## 9. 下一阶段建议

- 继续补充：广藿香之外的 patchouli/岩兰草/愈创木等提取物；柑橘光毒性与 FCF 的定量来源；更多中国香方与日本香道流派的一手文献。
- 为每个重要事实增加独立 `fact` 级引用，而不是整个条目共用来源。
- 增加“来源页”与“待核实清单”导出；支持用户按可信度筛选。
- 引入真实可授权的植物/香具摄影与博物馆图像，并逐张记录许可。
- 若未来接入静态搜索索引（仍无后端），可预生成 JSON 索引；当前版本为避免 `fetch` 限制，保持脚本挂载。
- 增加可打印的原料/香水卡片、分享卡片（仍需纯静态）。
- 用专业调香师/植物学家/法规顾问做逐条审阅；在此之前不把 C 级资料升级为 A 级。

---

## 10. 主要来源入口

完整列表与说明见 `data/sources.js` 和网站「资料与可信度」：

- PubChem — https://pubchem.ncbi.nlm.nih.gov/
- NIST Chemistry WebBook — https://webbook.nist.gov/chemistry/
- ECHA — https://echa.europa.eu/information-on-chemicals
- IFRA — https://ifra.org/
- EUR-Lex Regulation (EC) No 1223/2009 — https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009R1223
- Commission Regulation (EU) 2023/1545 — https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1545
- SCCS — https://health.ec.europa.eu/scientific-committees/scientific-committee-consumer-safety-sccs_en
- FDA Fragrances in Cosmetics — https://www.fda.gov/cosmetics/cosmetic-ingredients/fragrances-cosmetics
- Kew Plants of the World Online — https://powo.science.kew.org/
- WHO Household air pollution — https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health
- Buck & Axel 1991 — https://doi.org/10.1016/0092-8674(91)90418-X

---

**编辑说明**：本项目没有调用 AI API；没有后端；没有把任何未实际执行的测试写成“已测试”。所有带“未录入/待核实/存在争议”的内容均保留为不确定性，而不是用流畅文字补齐。
