/* 香谱 · 天然原料增补 2 */
(function () {
  const S = window.SCENT;
  const K = (name) => S.refs.kew(name);
  const G = (name) => S.refs.goodscents(name);
  const MS = (name) => S.refs.custom("materialSafety", { name: "安全资料参考 · " + name, note: "仅作一般风险背景；具体限值/商品规格须查最新资料。" });
  const A = (summary) => ({ grade: "B", summary });
  const rows = [
  {
    "id": "geranium",
    "zh": "天竺葵",
    "en": "Geranium",
    "bot": "Pelargonium graveolens",
    "family": "Geraniaceae 牻牛儿苗科",
    "genus": "Pelargonium",
    "species": "graveolens",
    "cat": "花类",
    "sub": "芳香叶/花",
    "part": "叶与嫩枝",
    "origin": [
      "留尼汪（波旁）",
      "埃及",
      "中国",
      "摩洛哥"
    ],
    "harvest": "叶片/嫩枝采收，水蒸气蒸馏；产地与化学型影响香气。",
    "methods": [
      "水蒸气蒸馏",
      "溶剂提取"
    ],
    "extracts": [
      "波旁天竺葵精油",
      "天竺葵原精"
    ],
    "aroma": [
      "玫瑰",
      "绿叶",
      "薄荷",
      "果香"
    ],
    "vol": "中调",
    "long": "中等",
    "intensity": "中高",
    "const": [
      "香叶醇",
      "香茅醇",
      "芳樟醇",
      "异薄荷酮"
    ],
    "mols": [
      "geraniol",
      "citronellol",
      "linalool",
      "cis-3-hexenol"
    ],
    "fam": [
      "floral",
      "green"
    ],
    "apps": [
      "玫瑰/绿叶",
      "花香中调",
      "皂感"
    ],
    "hist": "欧洲香叶天竺葵栽培与芳香贸易。",
    "culture": "天竺葵原产南部非洲，19 世纪后在留尼汪、埃及等地形成重要精油产业；“波旁天竺葵”与“玫瑰天竺葵”是商品/产地/化学型概念，不可只按一个“天竺葵”合并。",
    "safety": "精油可能致敏/刺激；含香叶醇、香茅醇等潜在过敏原。不可口服。",
    "allerg": [
      "香叶醇、香茅醇、芳樟醇等"
    ],
    "contra": [
      "香料过敏者谨慎",
      "不可口服"
    ],
    "relmat": [
      "rose-damascena",
      "rose-centifolia"
    ],
    "acc": [
      "rose-accord"
    ],
    "perf": [
      "chanel-no-5",
      "mitsouko",
      "joy"
    ],
    "desc": "天竺葵带玫瑰、绿叶、薄荷与果香，是“带叶子的玫瑰”而非玫瑰替代品。波旁/埃及/中国产地的香叶醇与香茅醇比例不同，气味可从清甜到薄荷绿。",
    "notes": "“Rose Geranium”“Bourbon Geranium”“Geranium”在商品上可能对应不同产地/化学型；本记录按 P. graveolens 物种层，不合并所有商品。",
    "creative": "适合玫瑰的绿叶边缘、旧花园、皂感与薄荷凉意。能让花香不甜腻。",
    "sustain": "主产地农业依赖；关注农药、蒸馏能耗与产地公平。"
  },
  {
    "id": "roman-chamomile",
    "zh": "罗马洋甘菊",
    "en": "Roman Chamomile",
    "bot": "Chamaemelum nobile",
    "family": "Asteraceae 菊科",
    "genus": "Chamaemelum",
    "species": "nobile",
    "cat": "花类",
    "sub": "菊科花香",
    "part": "花头",
    "origin": [
      "法国",
      "英国",
      "比利时",
      "北非"
    ],
    "harvest": "花头采收，水蒸气蒸馏；与德国洋甘菊不同物种。",
    "methods": [
      "水蒸气蒸馏",
      "溶剂提取"
    ],
    "extracts": [
      "罗马洋甘菊精油",
      "罗马洋甘菊原精"
    ],
    "aroma": [
      "苹果",
      "菊花",
      "蜂蜜",
      "草本"
    ],
    "vol": "中调",
    "long": "中等",
    "intensity": "中高",
    "const": [
      "乙酸橙花酯",
      "α-蒎烯",
      "金合欢醇",
      "当归酸酯"
    ],
    "mols": [
      "farnesol",
      "alpha-pinene",
      "linalool",
      "coumarin"
    ],
    "fam": [
      "floral",
      "aromatic"
    ],
    "apps": [
      "草本花香",
      "苹果/茶感",
      "洗护"
    ],
    "hist": "欧洲草药与花园传统。",
    "culture": "罗马洋甘菊与德国洋甘菊（Matricaria chamomilla）是不同物种：前者更苹果、蜂蜜、柔和，后者更蓝、药感、α-红没药醇。商品“洋甘菊”必须注明物种。",
    "safety": "菊科过敏者可能敏感；精油可能致敏/刺激，不可口服。",
    "allerg": [
      "金合欢醇、芳樟醇等",
      "菊科过敏风险"
    ],
    "contra": [
      "菊科过敏者谨慎",
      "不可口服",
      "孕期避免自行使用精油"
    ],
    "relmat": [
      "chamomile",
      "lavender"
    ],
    "acc": [
      "fougere-accord",
      "rose-accord"
    ],
    "perf": [
      "aqua-universalis",
      "diorissimo"
    ],
    "desc": "罗马洋甘菊带苹果、菊花、蜂蜜与柔和草本，是“温柔花园”的花香。它比德国洋甘菊更少蓝绿色药感，更适合与花香/柑橘连接。",
    "notes": "罗马洋甘菊不是德国洋甘菊；两者不能只因中文同名而互换。",
    "creative": "适合苹果、旧花园、柔和茶香与皂感。",
    "sustain": "欧洲小规模种植；关注产地与农药。"
  },
  {
    "id": "australian-sandalwood",
    "zh": "澳大利亚檀香",
    "en": "Australian Sandalwood",
    "bot": "Santalum spicatum",
    "family": "Santalaceae 檀香科",
    "genus": "Santalum",
    "species": "spicatum",
    "cat": "木质类",
    "sub": "檀香属",
    "part": "心材/根",
    "origin": [
      "澳大利亚西部"
    ],
    "harvest": "野生/种植心材采伐；需许可与可持续管理。",
    "methods": [
      "水蒸气蒸馏",
      "溶剂提取"
    ],
    "extracts": [
      "澳大利亚檀香精油"
    ],
    "aroma": [
      "干燥檀香",
      "木质",
      "树脂",
      "微烟"
    ],
    "vol": "后调",
    "long": "很长",
    "intensity": "中高",
    "const": [
      "α-檀香醇",
      "β-檀香醇",
      "檀香烯"
    ],
    "mols": [
      "alpha-santalol",
      "beta-santalol",
      "cedrol"
    ],
    "fam": [
      "woody",
      "woody"
    ],
    "apps": [
      "檀香/木质",
      "后调",
      "天然檀香替代"
    ],
    "hist": "澳大利亚原住民与殖民贸易史；现代精油产业。",
    "culture": "澳大利亚檀香（Santalum spicatum）与印度檀香（S. album）是不同物种，气味更干、更树脂、少奶油。野生资源与采伐许可必须核实。",
    "safety": "檀香醇类可能致敏；来源合法/可持续性必须核实。不可口服。",
    "allerg": [
      "檀香醇类"
    ],
    "contra": [
      "香料过敏者谨慎",
      "不可口服",
      "拒绝非法采伐"
    ],
    "relmat": [
      "sandalwood",
      "cypress"
    ],
    "acc": [
      "woody-accord"
    ],
    "perf": [
      "santal-33",
      "terre-d-hermes"
    ],
    "desc": "澳大利亚檀香比印度檀香更干、更树脂、少奶甜，带木质与微烟。它常被用作天然檀香的另一种合法来源，但不能与 S. album 混同。",
    "notes": "Santalum spicatum ≠ Santalum album；产地/物种/采伐许可必须记录。",
    "creative": "适合干燥木材、烈日、树脂与更“硬”的檀香。",
    "sustain": "野生资源受采伐许可与生态影响；优先认证/种植来源。"
  },
  {
    "id": "virginia-cedar",
    "zh": "弗吉尼亚雪松",
    "en": "Virginia Cedarwood",
    "bot": "Juniperus virginiana",
    "family": "Cupressaceae 柏科",
    "genus": "Juniperus",
    "species": "virginiana",
    "cat": "木质类",
    "sub": "柏科木质",
    "part": "木材/木屑",
    "origin": [
      "美国东部",
      "加拿大"
    ],
    "harvest": "木材加工副产物/专门采伐；蒸馏。",
    "methods": [
      "水蒸气蒸馏",
      "溶剂提取"
    ],
    "extracts": [
      "弗吉尼亚雪松精油"
    ],
    "aroma": [
      "铅笔屑",
      "干燥木质",
      "树脂",
      "微甜"
    ],
    "vol": "后调",
    "long": "长",
    "intensity": "中高",
    "const": [
      "α-雪松烯",
      "β-雪松烯",
      "雪松醇",
      "长叶烯"
    ],
    "mols": [
      "cedrol",
      "alpha-cedrene",
      "longifolene"
    ],
    "fam": [
      "woody",
      "woody"
    ],
    "apps": [
      "木质/铅笔屑",
      "男香",
      "后调"
    ],
    "hist": "北美木材与铅笔工业副产物。",
    "culture": "弗吉尼亚雪松是北美东部常见树种，木材/铅笔屑气味是“雪松木”的重要联想。它与真正的 Cedrus（雪松属）不同，商品名常混用。",
    "safety": "精油可能致敏/刺激；不可口服。",
    "allerg": [
      "蒎烯、柠檬烯等"
    ],
    "contra": [
      "香料过敏者谨慎",
      "不可口服"
    ],
    "relmat": [
      "atlas-cedar",
      "cypress"
    ],
    "acc": [
      "woody-accord"
    ],
    "perf": [
      "terre-d-hermes",
      "habit-rouge"
    ],
    "desc": "弗吉尼亚雪松带铅笔屑、干燥木材、树脂与微甜，是“书桌/铅笔”的气味。它比阿特拉斯雪松更干、更线性。",
    "notes": "Juniperus virginiana 不是 Cedrus atlantica；两者都叫“雪松”但属不同。",
    "creative": "适合铅笔屑、旧书桌、干燥木质与男香。",
    "sustain": "木材副产物利用较好；关注森林管理。"
  },
  {
    "id": "spikenard",
    "zh": "甘松",
    "en": "Spikenard",
    "bot": "Nardostachys jatamansi",
    "family": "Caprifoliaceae 忍冬科（旧败酱科）",
    "genus": "Nardostachys",
    "species": "jatamansi",
    "cat": "根茎类",
    "sub": "高山根茎",
    "part": "根茎",
    "origin": [
      "喜马拉雅",
      "尼泊尔",
      "印度",
      "不丹"
    ],
    "harvest": "野生/栽培根茎采挖；保护状态需核实。",
    "methods": [
      "水蒸气蒸馏",
      "溶剂提取"
    ],
    "extracts": [
      "甘松精油",
      "甘松原精"
    ],
    "aroma": [
      "泥土",
      "木质",
      "药感",
      "微甜",
      "动物"
    ],
    "vol": "后调",
    "long": "很长",
    "intensity": "高",
    "const": [
      "缬草烯类",
      "甘松酮",
      "倍半萜类"
    ],
    "mols": [
      "patchoulol",
      "guaiol",
      "valencene"
    ],
    "fam": [
      "woody",
      "smoky"
    ],
    "apps": [
      "根茎/药感",
      "焚香",
      "木质后调"
    ],
    "hist": "喜马拉雅与印度传统香料/药用；古代贸易。",
    "culture": "甘松在喜马拉雅地区与印度传统中有宗教、药用与香料用途，气味泥土、木质、药感、微动物。野生资源受采挖压力，来源与保护状态必须核实。",
    "safety": "精油可能致敏/刺激；不可口服；孕期/儿童避免自行使用。",
    "allerg": [
      "倍半萜类"
    ],
    "contra": [
      "不可口服",
      "孕期避免",
      "拒绝非法野生采挖"
    ],
    "relmat": [
      "vetiver",
      "patchouli"
    ],
    "acc": [
      "woody-accord",
      "tobacco-accord"
    ],
    "perf": [
      "interlude-man",
      "terre-d-hermes"
    ],
    "desc": "甘松带泥土、木质、药感与微动物，是“高山根茎”的气味。它比香根草更药、更干，适合焚香与深色木质。",
    "notes": "Nardostachys jatamansi 的保护状态/贸易需查 CITES 与国家法规；不可把“天然”当可持续。",
    "creative": "适合古寺、根茎、药草与深色木质。",
    "sustain": "高山野生资源脆弱；优先合法栽培/认证来源。"
  },
  {
    "id": "angelica-root",
    "zh": "当归根 / 欧白芷根",
    "en": "Angelica Root",
    "bot": "Angelica archangelica",
    "family": "Apiaceae 伞形科",
    "genus": "Angelica",
    "species": "archangelica",
    "cat": "根茎类",
    "sub": "伞形科根",
    "part": "根",
    "origin": [
      "北欧",
      "冰岛",
      "德国",
      "法国"
    ],
    "harvest": "根采收、干燥、蒸馏；需区分当归（A. sinensis）与欧白芷。",
    "methods": [
      "水蒸气蒸馏",
      "溶剂提取",
      "CO₂"
    ],
    "extracts": [
      "欧白芷根精油",
      "欧白芷根原精"
    ],
    "aroma": [
      "泥土",
      "麝香",
      "草本",
      "柑橘",
      "木质"
    ],
    "vol": "中调至后调",
    "long": "长",
    "intensity": "中高",
    "const": [
      "α-蒎烯",
      "β-水芹烯",
      "十五内酯",
      "香豆素类"
    ],
    "mols": [
      "alpha-pinene",
      "beta-phellandrene",
      "exaltolide",
      "coumarin"
    ],
    "fam": [
      "aromatic",
      "musky"
    ],
    "apps": [
      "根茎/麝香",
      "木质",
      "酒香"
    ],
    "hist": "北欧草药与利口酒传统。",
    "culture": "欧白芷根在北欧草药、利口酒与香水中有使用，气味泥土、麝香、草本与柑橘。它与中文“当归”（Angelica sinensis）不是同一物种，不能只按“当归”互换。",
    "safety": "含呋喃香豆素/光敏风险；精油可能致敏。不可口服，避免日晒后皮肤接触。",
    "allerg": [
      "呋喃香豆素类",
      "芳樟醇等"
    ],
    "contra": [
      "光敏性皮肤风险",
      "不可口服",
      "孕期避免"
    ],
    "relmat": [
      "juniper",
      "lavender"
    ],
    "acc": [
      "woody-accord",
      "fougere-accord"
    ],
    "perf": [
      "terre-d-hermes",
      "habit-rouge"
    ],
    "desc": "欧白芷根带泥土、麝香、草本与柑橘，是“根+酒”的复杂气味。少量能增加男性香水的土壤与麝香底。",
    "notes": "Angelica archangelica（欧白芷）≠ Angelica sinensis（当归）；商品“angelica root”通常指前者。",
    "creative": "适合酒窖、根茎、麝香与旧木质。",
    "sustain": "欧洲栽培为主；关注农药与野生采集。"
  },
  {
    "id": "turmeric",
    "zh": "姜黄",
    "en": "Turmeric",
    "bot": "Curcuma longa",
    "family": "Zingiberaceae 姜科",
    "genus": "Curcuma",
    "species": "longa",
    "cat": "根茎类",
    "sub": "姜科根茎",
    "part": "根茎",
    "origin": [
      "印度",
      "东南亚",
      "中国"
    ],
    "harvest": "根茎采收、干燥/蒸馏/CO₂。",
    "methods": [
      "水蒸气蒸馏",
      "CO₂ 萃取",
      "溶剂提取"
    ],
    "extracts": [
      "姜黄 CO₂ 提取物",
      "姜黄油"
    ],
    "aroma": [
      "泥土",
      "辛香",
      "橙黄",
      "木质",
      "微苦"
    ],
    "vol": "中调至后调",
    "long": "长",
    "intensity": "中高",
    "const": [
      "姜黄酮",
      "芳姜黄酮",
      "姜烯",
      "姜黄素类（非主要挥发物）"
    ],
    "mols": [
      "alpha-phellandrene",
      "terpinolene",
      "beta-caryophyllene"
    ],
    "fam": [
      "spicy",
      "woody"
    ],
    "apps": [
      "姜黄/泥土",
      "东方调",
      "美食/木质"
    ],
    "hist": "南亚烹饪、染料与宗教用途。",
    "culture": "姜黄在南亚是烹饪、染料、宗教与医药文化的重要植物；香气泥土、辛香、橙黄、木质。姜黄素是颜色/生物活性成分，不是主要香气分子。",
    "safety": "姜黄油可能刺激/致敏；姜黄素高剂量有肝毒性报道。不可口服精油。",
    "allerg": [
      "姜黄成分/倍半萜"
    ],
    "contra": [
      "不可口服",
      "孕期/肝病者谨慎",
      "香料过敏者谨慎"
    ],
    "relmat": [
      "ginger",
      "nutmeg"
    ],
    "acc": [
      "amber-accord"
    ],
    "perf": [
      "interlude-man"
    ],
    "desc": "姜黄不是“咖喱粉”单一味道：它带泥土、辛香、橙黄、木质与微苦。少量能让东方调有“根茎+染料”的厚度。",
    "notes": "姜黄素（curcumin）与姜黄挥发油是不同部分；不要用“姜黄”概括所有成分。",
    "creative": "适合姜黄根、旧市场、染料与暖木质。",
    "sustain": "主产南亚；关注农药与可持续种植。"
  },
  {
    "id": "yuzu",
    "zh": "柚子 / 香柚",
    "en": "Yuzu",
    "bot": "Citrus junos",
    "family": "Rutaceae 芸香科",
    "genus": "Citrus",
    "species": "junos",
    "cat": "柑橘类",
    "sub": "柑橘属",
    "part": "果皮",
    "origin": [
      "日本",
      "韩国",
      "中国"
    ],
    "harvest": "果皮冷压/蒸馏；果实季节短。",
    "methods": [
      "冷压",
      "水蒸气蒸馏",
      "CO₂"
    ],
    "extracts": [
      "柚子精油",
      "柚子 CO₂ 提取物"
    ],
    "aroma": [
      "柚子",
      "柑橘",
      "花香",
      "青绿",
      "微苦"
    ],
    "vol": "前调",
    "long": "短",
    "intensity": "中高",
    "const": [
      "柠檬烯",
      "γ-萜品烯",
      "芳樟醇",
      "柑橘醛类"
    ],
    "mols": [
      "limonene",
      "gamma-terpinene",
      "linalool",
      "nonanal"
    ],
    "fam": [
      "citrus",
      "floral"
    ],
    "apps": [
      "柑橘前调",
      "清新/花香",
      "日系香水"
    ],
    "hist": "东亚冬季食用与沐浴文化。",
    "culture": "柚子在日本、韩国与中国有冬季食用、沐浴与节庆文化；香气清亮、花香、青绿、微苦，和葡萄柚/柠檬不同。",
    "safety": "冷压果皮油含呋喃香豆素，光敏风险；去呋喃香豆素规格需标注。不可口服精油。",
    "allerg": [
      "柠檬烯、芳樟醇等",
      "呋喃香豆素光敏风险"
    ],
    "contra": [
      "光敏性皮肤风险",
      "不可口服"
    ],
    "relmat": [
      "bergamot",
      "grapefruit"
    ],
    "acc": [
      "citrus-accord"
    ],
    "perf": [
      "aqua-universalis"
    ],
    "desc": "柚子带清亮柑橘、花香、青绿与微苦，比柠檬更柔、更“皮厚”。它是日系清新香的常见意象，但真实果皮油有光敏风险。",
    "notes": "Citrus junos 与 pomelo（C. maxima）、yuzu 商品名需区分；冷压/蒸馏/去呋喃香豆素规格不同。",
    "creative": "适合冬日柑橘、清酒、花香与干净空气。",
    "sustain": "日韩中栽培；关注农药与果皮利用。"
  },
  {
    "id": "kaffir-lime-leaf",
    "zh": "卡菲尔青柠叶",
    "en": "Kaffir Lime Leaf",
    "bot": "Citrus hystrix",
    "family": "Rutaceae 芸香科",
    "genus": "Citrus",
    "species": "hystrix",
    "cat": "柑橘类",
    "sub": "柑橘叶",
    "part": "叶",
    "origin": [
      "东南亚",
      "泰国",
      "印尼"
    ],
    "harvest": "叶片采收、蒸馏/压榨；与果实不同。",
    "methods": [
      "水蒸气蒸馏",
      "CO₂",
      "溶剂提取"
    ],
    "extracts": [
      "卡菲尔青柠叶精油"
    ],
    "aroma": [
      "青柠叶",
      "青绿",
      "花香",
      "辛香",
      "微苦"
    ],
    "vol": "前调至中调",
    "long": "中等",
    "intensity": "高",
    "const": [
      "香茅醛",
      "芳樟醇",
      "柠檬烯",
      "β-蒎烯"
    ],
    "mols": [
      "citronellol",
      "linalool",
      "limonene",
      "beta-pinene"
    ],
    "fam": [
      "citrus",
      "green"
    ],
    "apps": [
      "东南亚料理",
      "青绿柑橘",
      "花香"
    ],
    "hist": "东南亚烹饪与草药。",
    "culture": "卡菲尔青柠叶在泰国、印尼等东南亚料理中是标志性香气，带青绿、花香、辛香与微苦。叶与果实/果皮气味不同，不能只按“青柠”替代。",
    "safety": "精油可能致敏/光敏；不可口服。",
    "allerg": [
      "柠檬烯、芳樟醇、香茅醇等"
    ],
    "contra": [
      "光敏性皮肤风险",
      "不可口服"
    ],
    "relmat": [
      "bergamot",
      "lemon"
    ],
    "acc": [
      "citrus-accord"
    ],
    "perf": [
      "aqua-universalis"
    ],
    "desc": "卡菲尔青柠叶不是普通青柠汁：它更青、更花香、更辛香，带东南亚料理的“叶感”。少量能让柑橘调突然变立体。",
    "notes": "Citrus hystrix 叶、果、果皮是不同原料；商品名“kaffir lime”有冒犯性争议，正式资料常用 makrut lime。",
    "creative": "适合东南亚市场、青绿柑橘、椰奶与花香。",
    "sustain": "东南亚小农种植；关注农药。"
  },
  {
    "id": "lemon-myrtle",
    "zh": "柠檬香桃木",
    "en": "Lemon Myrtle",
    "bot": "Backhousia citriodora",
    "family": "Myrtaceae 桃金娘科",
    "genus": "Backhousia",
    "species": "citriodora",
    "cat": "草本与绿叶类",
    "sub": "澳洲香叶",
    "part": "叶",
    "origin": [
      "澳大利亚昆士兰"
    ],
    "harvest": "叶片采收、蒸馏；高柠檬醛。",
    "methods": [
      "水蒸气蒸馏",
      "CO₂"
    ],
    "extracts": [
      "柠檬香桃木精油"
    ],
    "aroma": [
      "柠檬",
      "甜",
      "花香",
      "草本"
    ],
    "vol": "前调",
    "long": "短",
    "intensity": "高",
    "const": [
      "柠檬醛",
      "香叶醛",
      "橙花醛",
      "芳樟醇"
    ],
    "mols": [
      "citral",
      "geranial",
      "neral",
      "linalool"
    ],
    "fam": [
      "citrus",
      "green"
    ],
    "apps": [
      "柠檬/草本",
      "清新",
      "食品香料（食品级）"
    ],
    "hist": "澳大利亚原住民与现代农业。",
    "culture": "柠檬香桃木是澳大利亚原生植物，叶片含高比例柠檬醛，香气强烈、甜、花香。高浓度精油可刺激皮肤，不能因为“天然”而忽略。",
    "safety": "高柠檬醛含量，皮肤刺激/致敏风险高；不可口服，避免高浓度皮肤接触。",
    "allerg": [
      "柠檬醛、芳樟醇等"
    ],
    "contra": [
      "不可口服",
      "避免高浓度皮肤接触",
      "香料过敏者谨慎"
    ],
    "relmat": [
      "lemon",
      "bergamot"
    ],
    "acc": [
      "citrus-accord"
    ],
    "perf": [
      "aqua-universalis"
    ],
    "desc": "柠檬香桃木带强烈柠檬、甜、花香与草本，比柠檬皮更“糖”。它香气强，少量就足够；高浓度对皮肤不友好。",
    "notes": "Backhousia citriodora 是澳洲桃金娘科，不是“柠檬马鞭草”或“柠檬香蜂草”。",
    "creative": "适合柠檬糖、香茅、清新空气与澳洲灌木。",
    "sustain": "澳洲种植；关注柠檬醛含量与皮肤安全。"
  },
  {
    "id": "blackcurrant-bud",
    "zh": "黑加仑芽",
    "en": "Blackcurrant Bud",
    "bot": "Ribes nigrum",
    "family": "Grossulariaceae 茶藨子科",
    "genus": "Ribes",
    "species": "nigrum",
    "cat": "果实、种子及其他",
    "sub": "芽/叶",
    "part": "芽",
    "origin": [
      "法国",
      "欧洲",
      "新西兰"
    ],
    "harvest": "春季芽/嫩叶采摘，溶剂浸提；产量低。",
    "methods": [
      "溶剂浸提（原精）",
      "CO₂"
    ],
    "extracts": [
      "黑加仑芽原精"
    ],
    "aroma": [
      "黑加仑",
      "青绿",
      "树脂",
      "果香",
      "猫尿边缘"
    ],
    "vol": "前调至中调",
    "long": "中等",
    "intensity": "高",
    "const": [
      "硫醇类",
      "萜烯类",
      "青叶醛类",
      "酯类"
    ],
    "mols": [
      "cis-3-hexenol",
      "beta-caryophyllene",
      "linalool",
      "beta-caryophyllene"
    ],
    "fam": [
      "green",
      "fruity"
    ],
    "apps": [
      "黑加仑/青绿",
      "果香",
      "西普"
    ],
    "hist": "欧洲果酱/利口酒与香水。",
    "culture": "黑加仑芽原精带强烈黑加仑、青绿、树脂与“猫尿/硫味”边缘，是果香里最接近“灌木”的材料之一。芽、叶、果实是不同原料。",
    "safety": "原精可能含硫化物/溶剂与过敏原；不可直接用于皮肤。",
    "allerg": [
      "芳樟醇、柠檬烯等（依规格）"
    ],
    "contra": [
      "不可口服",
      "香料过敏者谨慎"
    ],
    "relmat": [
      "oakmoss",
      "bergamot"
    ],
    "acc": [
      "chypre-accord"
    ],
    "perf": [
      "mitsouko"
    ],
    "desc": "黑加仑芽不是黑加仑果汁：它更青、更树脂，带硫味与灌木感。少量能让果香/西普变得“野”。",
    "notes": "Ribes nigrum 的芽、叶、果提取物不同；商品原精的硫化物组成差异大。",
    "creative": "适合黑加仑、湿灌木、西普与猫尿边缘。",
    "sustain": "法国/欧洲小规模；关注溶剂与产量。"
  },
  {
    "id": "fig",
    "zh": "无花果",
    "en": "Fig",
    "bot": "Ficus carica",
    "family": "Moraceae 桑科",
    "genus": "Ficus",
    "species": "carica",
    "cat": "果实、种子及其他",
    "sub": "果实/叶",
    "part": "果实/叶",
    "origin": [
      "地中海",
      "中东",
      "土耳其"
    ],
    "harvest": "果实/叶采收，溶剂/CO₂；叶与果不同。",
    "methods": [
      "溶剂浸提",
      "CO₂",
      "酊剂"
    ],
    "extracts": [
      "无花果叶原精",
      "无花果 CO₂ 提取物"
    ],
    "aroma": [
      "无花果",
      "椰奶",
      "青绿",
      "木质",
      "微甜"
    ],
    "vol": "中调",
    "long": "中等",
    "intensity": "中高",
    "const": [
      "内酯类",
      "青叶醛类",
      "萜烯类",
      "呋喃类"
    ],
    "mols": [
      "gamma-nonalactone",
      "delta-decalactone",
      "linalool",
      "hexanal"
    ],
    "fam": [
      "fruity",
      "green"
    ],
    "apps": [
      "无花果/椰奶",
      "绿意果香",
      "地中海"
    ],
    "hist": "地中海食用与宗教/文化。",
    "culture": "无花果的果、叶、乳汁是不同材料：果香奶油、椰奶、青绿；叶更绿、更木。商业“fig”香调多为重构，真实提取物有限。",
    "safety": "无花果叶/汁含呋喃香豆素，光敏风险；原精不可直接用于皮肤。",
    "allerg": [
      "呋喃香豆素",
      "芳樟醇等"
    ],
    "contra": [
      "光敏性皮肤风险",
      "不可口服"
    ],
    "relmat": [
      "coconut",
      "osmanthus"
    ],
    "acc": [
      "vanilla-accord"
    ],
    "perf": [
      "philosykos"
    ],
    "desc": "无花果香调常是“椰奶 + 青绿 + 木质”的重构；真实叶提取物更青、更光敏，果提取物更甜。",
    "notes": "Ficus carica 叶与果不同；商业无花果香调不等于天然提取物。",
    "creative": "适合地中海庭院、椰奶、青叶与夏日。",
    "sustain": "地中海栽培；关注农药。"
  },
  {
    "id": "coconut",
    "zh": "椰子",
    "en": "Coconut",
    "bot": "Cocos nucifera",
    "family": "Arecaceae 棕榈科",
    "genus": "Cocos",
    "species": "nucifera",
    "cat": "果实、种子及其他",
    "sub": "棕榈果实",
    "part": "胚乳/果肉",
    "origin": [
      "热带亚洲",
      "太平洋",
      "加勒比"
    ],
    "harvest": "果实采收，果肉干燥/冷压/CO₂。",
    "methods": [
      "冷压",
      "CO₂",
      "溶剂提取",
      "分馏"
    ],
    "extracts": [
      "椰子 CO₂ 提取物",
      "分馏椰子油"
    ],
    "aroma": [
      "椰子",
      "奶油",
      "甜",
      "坚果",
      "微木"
    ],
    "vol": "中调至后调",
    "long": "长",
    "intensity": "中高",
    "const": [
      "内酯类",
      "脂肪酸",
      "醛类",
      "酯类"
    ],
    "mols": [
      "gamma-nonalactone",
      "delta-decalactone",
      "vanillin",
      "maltol"
    ],
    "fam": [
      "gourmand",
      "fruity"
    ],
    "apps": [
      "椰奶/奶油",
      "美食调",
      "身体护理"
    ],
    "hist": "热带食物、油脂与文化。",
    "culture": "椰子在全球热带地区是食物、油脂、纤维与宗教/文化材料。香气来自内酯/脂肪酸等，椰子水、椰肉、椰油气味不同。",
    "safety": "食用/化妆品级差异大；椰子油可能致痘/过敏（少见）。不可把香精当食品。",
    "allerg": [
      "椰子/坚果过敏（个体）"
    ],
    "contra": [
      "椰子过敏者谨慎",
      "不可将香精当食品"
    ],
    "relmat": [
      "vanilla",
      "cocoa"
    ],
    "acc": [
      "vanilla-accord"
    ],
    "perf": [
      "philosykos"
    ],
    "desc": "椰子的香气是奶油、甜、坚果与内酯，不是“椰子水”。它能让美食调变圆，也容易变成防晒霜。",
    "notes": "Cocos nucifera 果肉/水/油不同；分馏椰子油是载体，不是香气材料。",
    "creative": "适合椰奶、海滩、甜点与身体感。",
    "sustain": "热带小农；关注棕榈油/土地议题（椰子与油棕不同）。"
  },
  {
    "id": "tea-tree",
    "zh": "茶树 / 互叶白千层",
    "en": "Tea Tree",
    "bot": "Melaleuca alternifolia",
    "family": "Myrtaceae 桃金娘科",
    "genus": "Melaleuca",
    "species": "alternifolia",
    "cat": "草本与绿叶类",
    "sub": "澳洲桃金娘",
    "part": "叶与嫩枝",
    "origin": [
      "澳大利亚新南威尔士"
    ],
    "harvest": "叶/枝采收，水蒸气蒸馏；需标准化松油烯-4-醇。",
    "methods": [
      "水蒸气蒸馏"
    ],
    "extracts": [
      "茶树精油"
    ],
    "aroma": [
      "药感",
      "樟脑",
      "绿叶",
      "木质",
      "清新"
    ],
    "vol": "前调至中调",
    "long": "中等",
    "intensity": "高",
    "const": [
      "松油烯-4-醇",
      "γ-萜品烯",
      "α-松油烯",
      "1,8-桉叶素"
    ],
    "mols": [
      "terpinen-4-ol",
      "gamma-terpinene",
      "alpha-terpinene",
      "cineole"
    ],
    "fam": [
      "aromatic",
      "green"
    ],
    "apps": [
      "药感/清洁",
      "草本",
      "空间香氛"
    ],
    "hist": "澳大利亚原住民传统与现代药用。",
    "culture": "茶树（Melaleuca alternifolia）不是茶叶（Camellia sinensis）。它在澳大利亚原住民传统与现代抗菌产品中有使用，香气药感、樟脑、绿叶。",
    "safety": "精油可能致敏/刺激；不可口服。抗菌宣传不等于医疗建议。",
    "allerg": [
      "柠檬烯、芳樟醇、松油烯等"
    ],
    "contra": [
      "不可口服",
      "香料过敏者谨慎",
      "婴幼儿避免高浓度"
    ],
    "relmat": [
      "rosemary",
      "cypress"
    ],
    "acc": [
      "fougere-accord"
    ],
    "perf": [
      "aqua-universalis"
    ],
    "desc": "茶树的药感、樟脑、绿叶与木质，和“茶”无关。它更像澳洲灌木与药油，少量能给草本/柑橘增加锐度。",
    "notes": "Melaleuca alternifolia ≠ 茶叶 Camellia sinensis；茶树精油不是口服药。",
    "creative": "适合药箱、澳洲灌木、清洁感与冷冽草本。",
    "sustain": "澳洲种植；关注农药与采伐。"
  },
  {
    "id": "mastic",
    "zh": "乳香黄连木 / 白松香",
    "en": "Mastic",
    "bot": "Pistacia lentiscus",
    "family": "Anacardiaceae 漆树科",
    "genus": "Pistacia",
    "species": "lentiscus",
    "cat": "树脂与香脂类",
    "sub": "树脂",
    "part": "树脂",
    "origin": [
      "希腊希俄斯岛",
      "地中海"
    ],
    "harvest": "树干切口收集树脂；希俄斯乳香有 PDO 保护。",
    "methods": [
      "水蒸气蒸馏",
      "溶剂提取",
      "直接咀嚼/焚香"
    ],
    "extracts": [
      "乳香黄连木树脂净油",
      "乳香黄连木精油"
    ],
    "aroma": [
      "树脂",
      "松木",
      "柠檬",
      "辛香",
      "微苦"
    ],
    "vol": "中调至后调",
    "long": "长",
    "intensity": "中高",
    "const": [
      "α-蒎烯",
      "β-蒎烯",
      "柠檬烯",
      "树脂酸"
    ],
    "mols": [
      "alpha-pinene",
      "beta-pinene",
      "limonene",
      "beta-caryophyllene"
    ],
    "fam": [
      "amber",
      "woody"
    ],
    "apps": [
      "树脂/焚香",
      "木质",
      "地中海"
    ],
    "hist": "古希腊/奥斯曼饮食、医药与宗教。",
    "culture": "乳香黄连木树脂（mastic）与“白松香 galbanum”不是同一物质；希俄斯乳香有产地保护与咀嚼文化。香气树脂、松木、柠檬、辛香。",
    "safety": "树脂/精油可能致敏；不可口服（非食品级）。",
    "allerg": [
      "蒎烯、柠檬烯等"
    ],
    "contra": [
      "不可口服",
      "香料过敏者谨慎"
    ],
    "relmat": [
      "frankincense",
      "galbanum"
    ],
    "acc": [
      "amber-accord"
    ],
    "perf": [
      "interlude-man"
    ],
    "desc": "乳香黄连木树脂带松木、柠檬、辛香与树脂，是地中海“树胶”的气味。它和乳香（Boswellia）不同，不能只按“frankincense”互换。",
    "notes": "Pistacia lentiscus 树脂 mastic ≠ Boswellia 乳香 ≠ galbanum 白松香。",
    "creative": "适合地中海 resin、旧木、焚香与柠檬树脂。",
    "sustain": "希俄斯乳香受产地保护；关注过度采脂。"
  },
  {
    "id": "tolu-balsam",
    "zh": "多鲁香脂",
    "en": "Tolu Balsam",
    "bot": "Myroxylon balsamum var. balsamum",
    "family": "Fabaceae 豆科",
    "genus": "Myroxylon",
    "species": "balsamum",
    "cat": "树脂与香脂类",
    "sub": "香脂",
    "part": "树脂",
    "origin": [
      "哥伦比亚",
      "委内瑞拉",
      "中美洲"
    ],
    "harvest": "树干切口收集树脂；与秘鲁香脂不同变种。",
    "methods": [
      "溶剂提取（树脂净油）",
      "酊剂",
      "直接香膏"
    ],
    "extracts": [
      "多鲁香脂树脂净油",
      "多鲁香脂酊剂"
    ],
    "aroma": [
      "香草",
      "肉桂",
      "香脂",
      "甜",
      "微烟"
    ],
    "vol": "后调",
    "long": "很长",
    "intensity": "高",
    "const": [
      "苯甲酸苄酯",
      "肉桂酸苄酯",
      "香草醛",
      "树脂酸"
    ],
    "mols": [
      "benzyl-benzoate",
      "vanillin",
      "cinnamyl-alcohol",
      "benzyl-alcohol"
    ],
    "fam": [
      "amber",
      "amber"
    ],
    "apps": [
      "香草/香脂",
      "定香",
      "东方调"
    ],
    "hist": "中美洲/南美香脂贸易。",
    "culture": "多鲁香脂与秘鲁香脂都来自 Myroxylon，但变种/产地/香气不同；多鲁更香草、肉桂、甜。香脂贸易与采集劳动需被看见。",
    "safety": "香脂含致敏成分；皮肤刺激/过敏风险。不可口服。",
    "allerg": [
      "苯甲酸苄酯、肉桂酸酯、香草醛等"
    ],
    "contra": [
      "香料过敏者谨慎",
      "不可口服"
    ],
    "relmat": [
      "peru-balsam",
      "benzoin-siam"
    ],
    "acc": [
      "amber-accord"
    ],
    "perf": [
      "shalimar"
    ],
    "desc": "多鲁香脂带香草、肉桂、甜香脂与微烟，是“温暖香草树脂”。它比秘鲁香脂更甜、更香草，适合东方调定香。",
    "notes": "Tolu balsam ≠ Peru balsam；两者变种/产地不同，法规与过敏原也不同。",
    "creative": "适合香草、旧教堂、香脂与甜东方。",
    "sustain": "中美洲/南美采集；关注森林与劳工。"
  },
  {
    "id": "treemoss",
    "zh": "树苔",
    "en": "Treemoss",
    "bot": "Pseudevernia furfuracea",
    "family": "Parmeliaceae 梅衣科",
    "genus": "Pseudevernia",
    "species": "furfuracea",
    "cat": "树脂与香脂类",
    "sub": "地衣",
    "part": "地衣体",
    "origin": [
      "欧洲",
      "地中海",
      "摩洛哥"
    ],
    "harvest": "从树皮/岩石采集地衣；生长慢，需可持续。",
    "methods": [
      "溶剂浸提（原精/净油）"
    ],
    "extracts": [
      "树苔原精",
      "树苔净油"
    ],
    "aroma": [
      "苔藓",
      "森林",
      "皮革",
      "烟熏",
      "微甜"
    ],
    "vol": "后调",
    "long": "很长",
    "intensity": "高",
    "const": [
      "苔黑素",
      "地衣酸",
      "醛类",
      "树脂类"
    ],
    "mols": [
      "beta-caryophyllene",
      "eugenol",
      "guaiacol"
    ],
    "fam": [
      "chypre",
      "chypre"
    ],
    "apps": [
      "西普/苔藓",
      "皮革",
      "森林"
    ],
    "hist": "欧洲西普香水与地衣贸易。",
    "culture": "树苔是地衣，不是苔藓植物；与橡木苔（Evernia prunastri）不同。它在西普中提供森林、皮革、烟熏，但地衣生长慢、过敏/法规问题需重视。",
    "safety": "地衣提取物含致敏成分（atranorin 等）；皮肤过敏风险高。不可口服。",
    "allerg": [
      "地衣酸/苔黑素等"
    ],
    "contra": [
      "香料过敏者谨慎",
      "不可口服",
      "避免高浓度皮肤接触"
    ],
    "relmat": [
      "oakmoss",
      "vetiver"
    ],
    "acc": [
      "chypre-accord"
    ],
    "perf": [
      "mitsouko"
    ],
    "desc": "树苔带森林、皮革、烟熏与微甜，比橡木苔更“树皮/地衣”。它是西普的暗绿底，但过敏风险不可忽略。",
    "notes": "Pseudevernia furfuracea（树苔）≠ Evernia prunastri（橡木苔）；两者都是地衣，不是苔藓。",
    "creative": "适合湿森林、旧皮衣、西普与暗绿。",
    "sustain": "地衣生长慢；优先认证/可持续采集。"
  },
  {
    "id": "hops",
    "zh": "啤酒花",
    "en": "Hops",
    "bot": "Humulus lupulus",
    "family": "Cannabaceae 大麻科",
    "genus": "Humulus",
    "species": "lupulus",
    "cat": "香辛料类",
    "sub": "球果",
    "part": "雌球果",
    "origin": [
      "欧洲",
      "北美",
      "德国",
      "美国"
    ],
    "harvest": "球果成熟采收、干燥/CO₂。",
    "methods": [
      "水蒸气蒸馏",
      "CO₂ 萃取",
      "溶剂提取"
    ],
    "extracts": [
      "啤酒花 CO₂ 提取物",
      "啤酒花精油"
    ],
    "aroma": [
      "啤酒花",
      "青绿",
      "花香",
      "柑橘",
      "苦"
    ],
    "vol": "前调至中调",
    "long": "中等",
    "intensity": "高",
    "const": [
      "α-蛇麻烯",
      "β-石竹烯",
      "月桂烯",
      "萜烯醇类"
    ],
    "mols": [
      "alpha-humulene",
      "beta-caryophyllene",
      "myrcene",
      "linalool"
    ],
    "fam": [
      "green",
      "aromatic"
    ],
    "apps": [
      "啤酒/草本",
      "青绿",
      "木质"
    ],
    "hist": "欧洲啤酒酿造与草药。",
    "culture": "啤酒花是啤酒酿造的核心，香气从青绿、花香、柑橘到苦。它和“啤酒”气味不是同一件事；品种/产地差异极大。",
    "safety": "精油/CO₂ 提取物可能致敏/刺激；不可口服高浓度。",
    "allerg": [
      "萜烯类"
    ],
    "contra": [
      "不可口服",
      "香料过敏者谨慎"
    ],
    "relmat": [
      "black-pepper",
      "lavender"
    ],
    "acc": [
      "fougere-accord"
    ],
    "perf": [
      "terre-d-hermes"
    ],
    "desc": "啤酒花带青绿、花香、柑橘与苦，是“啤酒园”的气味。少量能给草本/木质增加绿色苦感。",
    "notes": "Humulus lupulus 球果≠啤酒；不同品种的萜烯组成差异大。",
    "creative": "适合啤酒、青绿、苦味与夏夜。",
    "sustain": "欧洲/北美种植；关注农药与水资源。"
  }
] ;
  rows.forEach((r) => {
    r.botanicalName = r.bot; r.englishName = r.en; r.nameEn = r.en; r.name = r.zh; r.nameZh = r.zh;
    r.aliases = []; r.category = r.cat; r.subcategory = r.sub; r.sourceType = "植物";
    r.sourceOrganism = r.bot; r.plantPart = r.part; r.extractionMethods = r.methods;
    r.availableExtracts = r.extracts; r.aroma = r.aroma; r.odorProfile = r.aroma;
    r.fragranceFamilies = r.fam; r.majorConstituents = r.const;
    r.associatedMolecules = r.mols; r.relatedMaterials = r.relmat; r.relatedAccords = r.acc;
    r.relatedPerfumes = r.perf; r.applications = r.apps; r.historicalUses = [r.hist];
    r.contraindications = r.contra; r.allergens = r.allerg; r.safety = r.safety;
    r.perfumeryUse = r.apps.join("、"); r.historicalUse = r.hist;
    r.verificationStatus = "植物身份：POWO 核对入口；气味：行业描述；商品/法规：未逐条核实";
    r.audit = A("植物学名与科属可核对 POWO；香气、产地与安全为编辑整理。具体提取物、法规与商品规格须按供应商/最新标准核实。");
    r.references = [K(r.bot), G(r.en), MS(r.en)]; r.sources = r.references;
    S.materials.push(r);
  });
})();
