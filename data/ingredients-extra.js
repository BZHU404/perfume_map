/* 香谱 · 商品调香原料增补 */
(function () {
  const S = window.SCENT;
  const MS = S.refs.custom("materialSafety", {
    note: "商品纯度、异构体、溶剂与法规状态须以供应商当前 TDS/SDS 为准。",
  });
  const A = (summary) => ({ grade: "C", summary });

  S.ingredients.push(
    {
      id: "ing-cetalox",
      nameZh: "Cetalox / 龙涎香醚商品",
      nameEn: "Cetalox",
      supplier: "Firmenich（商品名与商标归属以官方资料为准）",
      moleculeId: "ambroxan",
      chemicalIdentity: "Ambrosia/ambroxide 类商品材料的商品名；具体立体异构与规格由供应商定义",
      physicalForm: "白色至类白色结晶或颗粒（视等级）",
      odorProfile: ["龙涎香", "干燥木质", "皮肤感", "微咸"],
      perfumeryRole: ["龙涎香替代", "皮肤感", "后调定香"],
      usageNote: "用于木质、琥珀、麝香与清新调的后调；商品名不应直接当作通用化学名。",
      purity: "未录入；以供应商当前规格为准。",
      specs: "具体异构体组成、溶解度与包装规格需查 TDS。",
      notes: "Cetalox、Ambroxan、Ambroxide 等名称涉及商品/化学命名差异，不能简单视为可以任意互换的同一规格。",
      audit: A("商品名与化学母体相关性有行业资料支持；供应商、纯度、法规状态未逐批核实。"),
      references: [S.refs.pubchem(10857465), S.refs.custom("goodscents", { note: "Cetalox/ambroxide 行业资料，C 级。" }), MS],
    },
    {
      id: "ing-muscenone",
      nameZh: "Muscenone / 麝香烯酮商品",
      nameEn: "Muscenone",
      supplier: "Firmenich（商品名与商标归属以官方资料为准）",
      moleculeId: "muscenone",
      chemicalIdentity: "大环烯酮麝香商品名；具体异构体/规格由供应商定义",
      physicalForm: "无色至淡黄色液体或低熔点固体（视等级）",
      odorProfile: ["温暖麝香", "动物性", "粉感", "皮肤"],
      perfumeryRole: ["贴肤麝香", "后调", "动物温暖"],
      usageNote: "用于皮肤感、动物感与温暖麝香后调；不代表天然麝香。",
      purity: "未录入；以供应商当前规格为准。",
      specs: "商品可能为特定异构体/浓度；需查 TDS/SDS。",
      notes: "Muscenone 是商品名/行业名；本页分子记录采用 PubChem 对 2-methylcyclopentadec-2-en-1-one 的条目。",
      audit: A("商品名与分子记录可交叉参考；供应商规格与法规状态未逐批核实。"),
      references: [S.refs.pubchem(57353762), S.refs.custom("goodscents", { note: "Muscenone 行业资料，C 级。" }), MS],
    }
  );
})();
