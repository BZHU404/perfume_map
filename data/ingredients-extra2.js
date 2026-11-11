/* 香谱 · 商品基料与调香辅助材料增补 */
(function () {
  const S = window.SCENT;
  const G = (name) => S.refs.goodscents(name);
  const MS = (name) => S.refs.custom("materialSafety", { name: "商品/安全资料 · " + name, note: "纯度、异构体、溶剂与法规状态须以供应商当前 TDS/SDS 为准。" });
  const C = (summary) => ({ grade: "C", summary });
  const B = (summary) => ({ grade: "B", summary });
  function base(o) {
    return Object.assign({
      supplier: "商品名/商标归属待核实",
      chemicalIdentity: "商品基料/专利分子；具体组成未公开或需查供应商",
      physicalForm: "液体/固体依商品等级",
      purity: "未录入；以供应商当前规格为准。",
      specs: "未录入；需查 TDS/SDS。",
      category: "商品基料",
      ingredientType: "commercial",
      usageNote: "作为商品基料/复合香料使用；不得把商品名当成单一化学物质。",
      notes: "商品名、商标与化学身份不能混同；配方/纯度/法规状态以供应商资料为准。",
      audit: C("商品名与行业用途有资料支持；具体化学组成、供应商、纯度与法规状态未逐批核实。"),
      references: [G(o.nameEn), MS(o.nameEn)],
    }, o);
  }
  S.ingredients.push(
    base({ id: "ing-timbersilk", nameZh: "Timbersilk", nameEn: "Timbersilk", supplier: "IFF（商标归属以官方资料为准）", chemicalIdentity: "木质琥珀型商品基料；具体组成未公开", odorProfile: ["雪松", "琥珀", "干燥木质", "粉感"], perfumeryRole: ["木质琥珀", "后调", "定香"], usageNote: "用于木质、琥珀、男香与功能性香精；常与 Iso E Super 类比较但不能等同。", notes: "Timbersilk 是商品名/基料，不是单一分子。" }),
    base({ id: "ing-sylvamber", nameZh: "Sylvamber", nameEn: "Sylvamber", supplier: "Givaudan（商标归属以官方资料为准）", chemicalIdentity: "琥珀木质商品基料；具体组成未公开", odorProfile: ["琥珀", "木质", "干燥", "微甜"], perfumeryRole: ["琥珀木质", "后调", "定香"], usageNote: "用于琥珀/木质后调；与 Ambroxan 类龙涎香材料不同。", notes: "Sylvamber 是商品名/基料；不能当单一化学物质。" }),
    base({ id: "ing-amber-xtreme", nameZh: "Amber Xtreme", nameEn: "Amber Xtreme", supplier: "IFF（商标归属以官方资料为准）", chemicalIdentity: "强效琥珀型商品基料；具体组成未公开", odorProfile: ["强烈琥珀", "干燥", "木质", "矿物"], perfumeryRole: ["强效琥珀", "后调", "增强"], usageNote: "极强效，通常低剂量使用；不得按普通琥珀材料比例理解。", notes: "强效商品基料；具体阈值/用量需查供应商。" }),
    base({ id: "ing-norlimbanol", nameZh: "Norlimbanol", nameEn: "Norlimbanol", supplier: "Firmenich（商标归属以官方资料为准）", chemicalIdentity: "干燥木质/琥珀型商品分子；具体立体化学/规格以供应商为准", odorProfile: ["干燥木质", "琥珀", "龙涎香", "皮肤"], perfumeryRole: ["木质琥珀", "后调", "留香"], usageNote: "用于干燥木质、琥珀与男香后调；强效。", notes: "商品名；化学身份/异构体需查供应商。" }),
    base({ id: "ing-kephalis", nameZh: "Kephalis", nameEn: "Kephalis", supplier: "Givaudan（商标归属以官方资料为准）", chemicalIdentity: "木质/琥珀型商品基料；具体组成未公开", odorProfile: ["木质", "琥珀", "干燥", "微粉"], perfumeryRole: ["木质琥珀", "中后调", "定香"], usageNote: "用于木质、琥珀与花香后调。", notes: "商品名/基料；不冒充单一分子。" }),
    base({ id: "ing-cedramber", nameZh: "Cedramber", nameEn: "Cedramber", supplier: "IFF（商标归属以官方资料为准）", chemicalIdentity: "雪松琥珀型商品分子/基料；具体规格以供应商为准", odorProfile: ["雪松", "琥珀", "干燥木质", "微甜"], perfumeryRole: ["雪松琥珀", "后调", "定香"], usageNote: "用于雪松、木质与琥珀后调；与天然雪松油不同。", notes: "商品名；不能与 Cedrus/雪松精油等同。" }),
    base({ id: "ing-boisambrene-forte", nameZh: "Boisambrene Forte", nameEn: "Boisambrene Forte", supplier: "IFF（商标归属以官方资料为准）", chemicalIdentity: "琥珀木质商品基料；具体组成未公开", odorProfile: ["琥珀", "木质", "香脂", "干燥"], perfumeryRole: ["琥珀木质", "后调", "定香"], usageNote: "用于琥珀/木质/东方调后调。", notes: "商品名/基料；具体组成未公开。" }),
    base({ id: "ing-okoumal", nameZh: "Okoumal", nameEn: "Okoumal", supplier: "Givaudan（商标归属以官方资料为准）", chemicalIdentity: "琥珀木质商品分子/基料；具体规格以供应商为准", odorProfile: ["琥珀", "木质", "干燥", "粉感"], perfumeryRole: ["琥珀木质", "后调", "定香"], usageNote: "用于琥珀、木质与粉感后调。", notes: "商品名；化学身份/规格需查供应商。" }),
    base({ id: "ing-ebanol", nameZh: "Ebanol", nameEn: "Ebanol", supplier: "Givaudan（商标归属以官方资料为准）", chemicalIdentity: "檀香型商品醇/基料；具体异构体与规格以供应商为准", odorProfile: ["檀香", "奶油木质", "粉感", "微甜"], perfumeryRole: ["檀香", "后调", "定香"], usageNote: "用于檀香/木质后调；与天然檀香醇不同。", notes: "商品名；不能当天然檀香或单一 α-檀香醇。" }),
    base({ id: "ing-polysantol", nameZh: "Polysantol", nameEn: "Polysantol", supplier: "Firmenich（商标归属以官方资料为准）", chemicalIdentity: "檀香型商品分子/基料；具体规格以供应商为准", odorProfile: ["檀香", "奶油", "木质", "粉感"], perfumeryRole: ["檀香", "后调", "定香"], usageNote: "用于檀香/奶油木质后调；强效。", notes: "商品名；化学身份/异构体需查供应商。" }),
    base({ id: "ing-georgywood", nameZh: "Georgywood", nameEn: "Georgywood", supplier: "Givaudan（商标归属以官方资料为准）", chemicalIdentity: "木质型商品分子/基料；具体规格以供应商为准", odorProfile: ["木质", "干燥", "雪松", "微琥珀"], perfumeryRole: ["木质", "中后调", "定香"], usageNote: "用于木质/雪松/琥珀调。", notes: "商品名；不能当天然雪松。" }),
    base({ id: "ing-clearwood", nameZh: "Clearwood", nameEn: "Clearwood", supplier: "Firmenich（商标归属以官方资料为准）", chemicalIdentity: "广藿香衍生的木质商品基料；具体组成未公开", odorProfile: ["广藿香", "木质", "干净", "微甜"], perfumeryRole: ["广藿香木质", "后调", "定香"], usageNote: "用于广藿香/木质调，强调更干净、少土味的方向。", notes: "商品名/基料；与广藿香精油不同。" }),
    base({ id: "ing-akigalawood", nameZh: "Akigalawood", nameEn: "Akigalawood", supplier: "Givaudan（商标归属以官方资料为准）", chemicalIdentity: "广藿香/木质商品基料；具体组成未公开", odorProfile: ["广藿香", "木质", "辛香", "干燥"], perfumeryRole: ["广藿香木质", "后调", "定香"], usageNote: "用于广藿香/木质/辛香后调。", notes: "商品名/基料；不能当天然广藿香。" }),
    base({ id: "ing-helvetolide", nameZh: "Helvetolide", nameEn: "Helvetolide", supplier: "Firmenich（商标归属以官方资料为准）", chemicalIdentity: "大环麝香商品分子/基料；具体规格以供应商为准", odorProfile: ["麝香", "果香", "皮肤", "粉感"], perfumeryRole: ["麝香", "后调", "定香"], usageNote: "用于皮肤/果香麝香后调；与天然麝香无关。", notes: "商品名；化学身份/异构体需查供应商。" }),
    base({ id: "ing-celestolide", nameZh: "Celestolide", nameEn: "Celestolide", supplier: "商品名/商标归属待核实", chemicalIdentity: "多环麝香商品名；具体化学身份/规格以供应商为准", odorProfile: ["麝香", "粉感", "甜", "干净"], perfumeryRole: ["多环麝香", "后调", "定香"], usageNote: "用于粉感/干净麝香后调；环境与法规状态需查最新评估。", notes: "商品名；不能与天然麝香或 Galaxolide 等同。" }),
    base({ id: "ing-phantolide", nameZh: "Phantolide", nameEn: "Phantolide", supplier: "商品名/商标归属待核实", chemicalIdentity: "多环麝香商品名；具体化学身份/规格以供应商为准", odorProfile: ["麝香", "粉感", "甜", "木质"], perfumeryRole: ["多环麝香", "后调", "定香"], usageNote: "用于粉感/木质麝香后调；环境与法规状态需查最新评估。", notes: "商品名；不能当单一化学物质或天然麝香。" }),
    base({ id: "ing-traseolide", nameZh: "Traseolide", nameEn: "Traseolide", supplier: "商品名/商标归属待核实", chemicalIdentity: "多环麝香商品名；具体化学身份/规格以供应商为准", odorProfile: ["麝香", "粉感", "甜", "干净"], perfumeryRole: ["多环麝香", "后调", "定香"], usageNote: "用于粉感/干净麝香后调；环境与法规状态需查最新评估。", notes: "商品名；不能当天然麝香。" }),
    base({ id: "ing-nirvanolide", nameZh: "Nirvanolide", nameEn: "Nirvanolide", supplier: "商品名/商标归属待核实", chemicalIdentity: "大环/多环麝香商品名；具体化学身份/规格以供应商为准", odorProfile: ["麝香", "粉感", "甜", "皮肤"], perfumeryRole: ["麝香", "后调", "定香"], usageNote: "用于粉感/皮肤麝香后调；环境与法规状态需查最新评估。", notes: "商品名；不能当天然麝香。" }),
    base({ id: "ing-sylkolide", nameZh: "Sylkolide", nameEn: "Sylkolide", supplier: "商品名/商标归属待核实", chemicalIdentity: "大环麝香商品名；具体化学身份/规格以供应商为准", odorProfile: ["麝香", "粉感", "干净", "微甜"], perfumeryRole: ["麝香", "后调", "定香"], usageNote: "用于干净/粉感麝香后调；环境与法规状态需查最新评估。", notes: "商品名；不能当天然麝香。" })
  );

  const aux = [
    ["aux-ethanol", "乙醇", "Ethanol", "64-17-5；C2H6O", "调香酒精/溶剂；易燃", ["几乎无味", "酒精"], ["溶剂", "稀释", "载体"], "用于香精/香水酒精体系；浓度、含水率与变性剂影响气味。", "易燃；不可饮用；变性乙醇含毒性添加剂，不能当食用酒精。"],
    ["aux-perfumers-alcohol", "调香酒精", "Perfumer's Alcohol", "乙醇为主，含变性剂/少量水；无单一 CAS", "专用变性乙醇体系", ["酒精", "轻微溶剂"], ["溶剂", "香水基底"], "香水/淡香水常用酒精体系；不同市场变性剂法规不同。", "易燃；变性剂可能有毒；不可饮用，需按当地法规。"],
    ["aux-dpg", "二丙二醇", "Dipropylene Glycol (DPG)", "25265-71-8（异构体混合物，具体以规格）", "无色黏稠液体；溶剂/保湿", ["几乎无味"], ["溶剂", "载体", "稀释"], "香精/化妆品溶剂；帮助溶解与分散。", "低刺激但非无刺激；不可口服；具体规格/法规查供应商。"],
    ["aux-tec", "柠檬酸三乙酯", "Triethyl Citrate (TEC)", "77-93-0", "无色液体；溶剂/增塑", ["几乎无味", "微酸"], ["溶剂", "载体", "增塑"], "香精/化妆品溶剂与载体；可改善铺展。", "一般低刺激；不可口服；具体规格/法规查供应商。"],
    ["aux-ipm", "肉豆蔻酸异丙酯", "Isopropyl Myristate (IPM)", "110-27-0", "无色液体；润肤/溶剂", ["几乎无味", "油脂"], ["润肤", "溶剂", "载体"], "香精/化妆品润肤与溶剂；可影响皮肤感。", "可能致痘/刺激（个体）；不可口服。"],
    ["aux-propylene-glycol", "丙二醇", "Propylene Glycol", "57-55-6", "无色黏稠液体；保湿/溶剂", ["几乎无味", "微甜"], ["溶剂", "保湿", "载体"], "香精/化妆品溶剂与保湿；与 DPG 不同。", "可能刺激/过敏（个体）；不可口服高浓度。"],
    ["aux-dep", "邻苯二甲酸二乙酯", "Diethyl Phthalate (DEP)", "84-66-2", "历史溶剂/定香/增塑剂", ["几乎无味"], ["历史溶剂", "定香", "增塑"], "历史香精溶剂/定香；现代因法规/消费者关注减少使用。", "历史及法规资料；内分泌/生殖毒性关注，具体法规查最新标准；不推荐新配方。"],
    ["aux-isododecane", "异十二烷", "Isododecane", "异构体混合物；无单一 CAS", "挥发性支链烷烃；干爽润肤", ["几乎无味", "溶剂"], ["挥发性载体", "润肤", "分散"], "化妆品/香精挥发性载体；干爽、低黏。", "易燃；不可口服；具体规格/法规查供应商。"],
    ["aux-squalane", "角鲨烷", "Squalane", "111-01-3", "无色油状；润肤/载体", ["几乎无味", "油脂"], ["润肤", "载体", "稀释"], "化妆品润肤/载体；来源可为植物/合成，需标注。", "一般低刺激；不可口服；来源/纯度查供应商。"],
    ["aux-fractionated-coconut-oil", "分馏椰子油", "Fractionated Coconut Oil", "椰子油分馏物（混合甘油三酯）；无单一 CAS", "轻质油；润肤/载体", ["几乎无味", "油脂"], ["润肤", "载体", "稀释"], "化妆品载体/润肤；与椰子香精不同。", "椰子过敏者谨慎；不可口服高浓度/非食品级。"],
    ["aux-jojoba-oil", "霍霍巴油", "Jojoba Oil", "混合蜡酯；无单一 CAS", "金黄色液体蜡；润肤", ["几乎无味", "蜡质"], ["润肤", "载体", "稀释"], "化妆品润肤/载体；不是精油。", "可能致敏（个体）；不可口服非食品级；具体规格查供应商。"],
    ["aux-benzyl-benzoate", "苯甲酸苄酯（辅助）", "Benzyl Benzoate", "120-51-4；C14H12O2", "无色至淡黄色液体；溶剂/定香", ["微弱香脂", "花香"], ["溶剂", "定香", "载体"], "香精/化妆品溶剂与定香辅助；也是天然香脂成分。", "可能致敏；不可口服；具体规格/法规查供应商。"],
    ["aux-benzyl-alcohol", "苄醇（辅助）", "Benzyl Alcohol", "100-51-6；C7H8O", "无色液体；溶剂/防腐辅助", ["微弱花香", "溶剂"], ["溶剂", "防腐辅助", "载体"], "香精/化妆品溶剂与防腐辅助；也是天然花香成分。", "已知香料过敏原；不可口服；具体标签/法规按最新标准。"],
  ];
  aux.forEach(([id, zh, en, identity, form, odor, role, usage, safety]) => {
    S.ingredients.push({
      id, nameZh: zh, nameEn: en, englishName: en, name: zh,
      moleculeId: id === 'aux-benzyl-benzoate' ? 'benzyl-benzoate' : id === 'aux-benzyl-alcohol' ? 'benzyl-alcohol' : undefined,
      supplier: "通用材料（非单一供应商）",
      chemicalIdentity: identity,
      physicalForm: form,
      odorProfile: odor,
      perfumeryRole: role,
      usageNote: usage,
      purity: "未录入；以具体等级/供应商为准。",
      specs: "未录入；需查 TDS/SDS。",
      category: "辅助材料",
      ingredientType: "auxiliary",
      notes: "辅助材料不是主要香气来源；级别、纯度、溶剂与法规状态必须按具体商品核对。",
      safety,
      audit: B("化学身份/用途有基础资料支持；具体等级、纯度与法规状态未逐批核实。"),
      references: [G(en), MS(en)],
    });
  });
})();
