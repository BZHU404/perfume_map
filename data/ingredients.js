/* 香谱 · 商品调香原料
 * 商品名、化学物质和供应商规格是不同层面；本文件不把商品名当化学唯一名称。
 */
(function () {
  const S = window.SCENT;
  const MS = S.refs.custom("materialSafety", {
    note: "商品纯度、异构体、溶剂与法规状态须以供应商当前 TDS/SDS 为准。",
  });
  const A = (grade, summary) => ({ grade: grade, summary: summary });

  S.ingredients = [
    {
      id: "ing-iso-e-super",
      nameZh: "Iso E Super / 龙涎酮",
      nameEn: "Iso E Super",
      supplier: "IFF（商品名与商标归属以官方资料为准）",
      moleculeId: "iso-e-super",
      chemicalIdentity: "OTNE 类异构体混合物；不能简化为单一 PubChem 结构",
      physicalForm: "无色至淡黄色液体（商品批次可能有差异）",
      odorProfile: ["透明雪松", "龙涎", "粉感", "皮肤感"],
      perfumeryRole: ["木质/龙涎桥接", "增加圆润与留香", "透明感"],
      usageNote: "常作为木质与龙涎效果的基础材料；实际用量受配方目标、法规类别与其他材料影响，本页不提供配方比例。",
      purity: "未录入；商品规格由供应商定义。",
      specs: "异构体比例、纯度、稳定剂与包装规格因供应商/等级而异，须查当前 TDS。",
      notes: "Iso E Super 是商业名称，不能当作通用化学名。数据库中的分子式与结构只代表其中一类组成，不等同于商品全貌。",
      audit: A(
        "C",
        "商品归属、规格与法规信息未逐批核实；化学母体有 PubChem 可查。站点明确区分商品名与化学物质，不提供配方比例。"
      ),
      references: [
        S.refs.pubchem(108242),
        S.refs.custom("goodscents", { note: "行业资料中的商品名与用途线索，C 级。" }),
        MS,
      ],
    },
    {
      id: "ing-hedione",
      nameZh: "Hedione / 二氢茉莉酮酸甲酯",
      nameEn: "Hedione",
      supplier: "Firmenich（商品名与商标归属以官方资料为准）",
      moleculeId: "hedione",
      chemicalIdentity: "甲基二氢茉莉酮酸酯的异构体混合物；Hedione 为商品名",
      physicalForm: "无色至淡黄色液体",
      odorProfile: ["透明茉莉", "清新花香", "空气感", "柑橘边缘"],
      perfumeryRole: ["花香透明化", "茉莉增强", "扩散"],
      usageNote: "常被用于给花香增加透明、湿润的空气感；商品异构体比例会影响强度与香气。",
      purity: "未录入；以供应商当前规格为准。",
      specs: "有不同等级与异构体组成；不可只凭商品名推断具体 CAS 与法规状态。",
      notes: "“Hedione”不是茉莉精油，也不是单一“茉莉分子”。它是现代调香中极具影响力的商品材料之一。",
      audit: A(
        "C",
        "商品与规格信息为行业层面，未逐批核实；PubChem 可核对母体化学。香气描述为品鉴参考。"
      ),
      references: [S.refs.pubchem(102861), S.refs.custom("goodscents", { note: "Hedione 行业资料，C 级。" }), MS],
    },
    {
      id: "ing-ambroxan",
      nameZh: "Ambroxan / 龙涎香醚",
      nameEn: "Ambroxan",
      supplier: "Kao（商品名与商标归属以官方资料为准）",
      moleculeId: "ambroxan",
      chemicalIdentity: "Ambroxide / 降龙涎香醚；具体立体异构与商品规格需查供应商",
      physicalForm: "白色至类白色结晶或颗粒（不同等级可能不同）",
      odorProfile: ["龙涎", "皮肤", "干燥木质", "微咸"],
      perfumeryRole: ["龙涎香替代", "皮肤感", "后调定香"],
      usageNote: "常作为龙涎香效果的合成替代，用于木质、琥珀与麝香结构；不代表天然龙涎香。",
      purity: "未录入；以供应商当前规格为准。",
      specs: "可能以结晶、溶液或预混基料形式供应；包装与溶解度须查 TDS。",
      notes: "Ambroxan 是商业名，不等同于天然龙涎香。天然龙涎香涉及保护与贸易法规，现代香水多使用合成替代。",
      audit: A(
        "C",
        "化学母体可核对 PubChem；商品名、供应商与规格未逐批核对。站点不把合成替代物宣传为天然龙涎香。"
      ),
      references: [S.refs.pubchem(10857465), S.refs.custom("goodscents", { note: "Ambroxan 行业资料，C 级。" }), MS],
    },
    {
      id: "ing-galaxolide",
      nameZh: "Galaxolide / 佳乐麝香",
      nameEn: "Galaxolide",
      supplier: "IFF（商品名与商标归属以官方资料为准）",
      moleculeId: "galaxolide",
      chemicalIdentity: "HHCB 多环麝香；商品为异构体混合物",
      physicalForm: "无色至淡黄色黏稠液体",
      odorProfile: ["洁净麝香", "粉感", "花香", "皮肤"],
      perfumeryRole: ["洁净麝香", "留香", "粉感底"],
      usageNote: "用于白麝香、花香与功能性配方；环境归趋和法规状态是独立议题，须查最新评估。",
      purity: "未录入；商品可能有不同浓度/溶剂规格。",
      specs: "HHCB 异构体比例与纯度依供应商；不得以单一结构代表全部商品。",
      notes: "Galaxolide 是合成多环麝香，与天然麝香（麝鹿分泌物）不是同一来源，也不是同一化学类别。",
      audit: A(
        "B",
        "化学母体与 CAS 可核对 PubChem；“合成麝香”与天然麝香的区分明确。环境/法规状态可能变化，未给具体限值。"
      ),
      references: [S.refs.pubchem(91497), S.refs.custom("echa", { note: "检索 HHCB 的最新分类与环境信息。" }), MS],
    },
    {
      id: "ing-habanolide",
      nameZh: "Habanolide / 麝香内酯",
      nameEn: "Habanolide",
      supplier: "Firmenich（商品名与商标归属以官方资料为准）",
      moleculeId: "habanolide",
      chemicalIdentity: "大环内酯麝香；商品名 Habanolide",
      physicalForm: "白色至类白色固体或液体（取决于温度/规格）",
      odorProfile: ["洁净麝香", "金属感", "亚麻", "粉感"],
      perfumeryRole: ["清透麝香", "织物感", "留香"],
      usageNote: "用于现代洁净麝香、白花与功能性香精；具体用量与法规状态需按商品及产品类别查证。",
      purity: "未录入；以供应商当前 TDS 为准。",
      specs: "不同等级可能有不同异构体/纯度；商品名不能替代化学身份。",
      notes: "大环麝香与多环麝香结构不同，环境与安全评估也不能互相替代。",
      audit: A("C", "化学母体可核对 PubChem；商品与法规资料未逐批核实。"),
      references: [S.refs.pubchem(9856149), S.refs.custom("goodscents", { note: "Habanolide 行业资料，C 级。" }), MS],
    },
    {
      id: "ing-cashmeran",
      nameZh: "Cashmeran / 开司米酮",
      nameEn: "Cashmeran",
      supplier: "IFF（商品名与商标归属以官方资料为准）",
      moleculeId: "cashmeran",
      chemicalIdentity: "茚满酮类麝香木质材料；商品名 Cashmeran",
      physicalForm: "无色至淡黄色液体",
      odorProfile: ["麝香", "木质", "粉感", "干果"],
      perfumeryRole: ["麝香木质桥接", "温暖粉感", "后调"],
      usageNote: "用于木质、麝香、花香与琥珀结构，提供贴肤温暖感。",
      purity: "未录入；以供应商当前规格为准。",
      specs: "商品可能有不同纯度/溶液形式；具体法规状态按物质与产品类别查证。",
      notes: "“开司米”是商业命名带来的质地联想，并不表示含有羊绒。",
      audit: A("C", "化学母体可核对 PubChem；商业命名与规格为行业资料。"),
      references: [S.refs.pubchem(92292), S.refs.custom("goodscents", { note: "Cashmeran 行业资料，C 级。" }), MS],
    },
    {
      id: "ing-sandalore",
      nameZh: "Sandalore / 檀香型合成分子",
      nameEn: "Sandalore",
      supplier: "Givaudan（商品名与商标归属以官方资料为准）",
      moleculeId: "sandalore",
      chemicalIdentity: "合成檀香型醇类；商品名 Sandalore",
      physicalForm: "无色至淡黄色液体",
      odorProfile: ["奶油檀香", "木质", "花香", "粉感"],
      perfumeryRole: ["檀香替代", "奶油木质", "后调定香"],
      usageNote: "可作为天然檀香的替代方向之一，但无法还原整块檀木的复杂香气。",
      purity: "未录入；以供应商当前规格为准。",
      specs: "不同等级/纯度会影响香气与法规评估；不得标注为天然檀香精油。",
      notes: "Sandalore 是商业名与合成材料，与檀香木精油不是同一实体。",
      audit: A("C", "化学母体可核对 PubChem；商品名、供应商与规格未逐批核实。"),
      references: [S.refs.pubchem(103212), S.refs.custom("goodscents", { note: "Sandalore 行业资料，C 级。" }), MS],
    },
  ];

  S.ingredientNote =
    "商品原料档案只说明“某个商业材料大致是什么、如何被使用、哪些信息仍待核实”。它不提供供应商报价、配方比例或未公开规格；同一商品名在不同地区、等级和年份可能对应不同规格。";
})();
