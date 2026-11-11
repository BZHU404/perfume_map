/* 香谱 · 芳香分子补遗 3（2 条） */
(function () {
  const S = window.SCENT;
  const P = (cid) => S.refs.pubchem(cid);
  const G = (name) => S.refs.goodscents(name);
  const MS = (name) => S.refs.custom("materialSafety", { name: "安全资料参考 · " + name, note: "具体限值/商品规格查最新资料。" });
  const A = { grade: "B", summary: "化学身份、分子式、分子量与 IUPAC 名按 PubChem 对应 CID 核对；气味为行业描述，法规未逐条核实。" };
  S.molecules.push(
    {
      id: "borneol", name: "龙脑", nameZh: "龙脑", englishName: "Borneol", nameEn: "Borneol",
      synonyms: ["冰片", "Borneol"], CAS: "507-70-0", cas: "507-70-0", CID: 64685, cid: 64685,
      molecularFormula: "C10H18O", formula: "C10H18O", molecularWeight: "154.25", molecularWeightUnit: "g/mol",
      IUPACName: "1,7,7-trimethylbicyclo[2.2.1]heptan-2-ol", iupacName: "1,7,7-trimethylbicyclo[2.2.1]heptan-2-ol",
      chemicalClass: "萜类醇", subcategory: "双环单萜醇",
      odorProfile: ["樟脑", "木质", "药草", "清凉"], odorDescription: ["樟脑", "木质", "药草", "清凉"], odorFamily: "aromatic",
      volatility: "前调至中调", notePosition: "前调至中调",
      naturalOccurrence: ["龙脑香", "迷迭香", "鼠尾草", "部分樟科植物"],
      commercialProduction: "天然存在；商品可分离/合成，异构体与来源影响气味。",
      fragranceFamilies: ["aromatic", "woody"], perfumeryRole: ["樟脑/药草", "清凉木质", "中调"],
      relatedMaterials: ["rosemary", "sage", "cypress"], relatedExtracts: [], relatedMolecules: ["isoborneol", "camphor", "cineole"],
      relatedAccords: ["fougere-accord"], relatedPerfumes: ["habit-rouge", "terre-d-hermes"],
      safety: "龙脑/冰片可刺激皮肤/黏膜；不可口服，婴幼儿尤其避免。具体法规查最新标准。",
      safetyInformation: "龙脑/冰片可刺激皮肤/黏膜；不可口服，婴幼儿尤其避免。具体法规查最新标准。",
      allergens: [], regulatoryNotes: "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
      description: "龙脑带樟脑、木质、药草与清凉，和异龙脑是不同立体异构体。它常与“冰片”文化/药用语境相关，但不能把药用冰片当普通香料长期使用。",
      notes: "Borneol 与 Isoborneol 是立体异构体；CAS/结构不同，气味也有差异。",
      creative: "适合樟木、药草、寺庙与冷冽木质；极少量即可。",
      verificationStatus: "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
      structure: "assets/images/molecules/64685.png", audit: A,
      references: [P(64685), G("Borneol"), MS("Borneol")], sources: [P(64685), G("Borneol"), MS("Borneol")],
    },
    {
      id: "dihydrojasmone", name: "二氢茉莉酮", nameZh: "二氢茉莉酮", englishName: "Dihydrojasmone", nameEn: "Dihydrojasmone",
      synonyms: ["Dihydrojasmone"], CAS: "1128-08-1", cas: "1128-08-1", CID: 62378, cid: 62378,
      molecularFormula: "C11H18O", formula: "C11H18O", molecularWeight: "166.26", molecularWeightUnit: "g/mol",
      IUPACName: "3-methyl-2-pentylcyclopent-2-en-1-one", iupacName: "3-methyl-2-pentylcyclopent-2-en-1-one",
      chemicalClass: "酮类", subcategory: "环戊烯酮 / 茉莉酮类",
      odorProfile: ["茉莉", "花香", "果香", "草本"], odorDescription: ["茉莉", "花香", "果香", "草本"], odorFamily: "floral",
      volatility: "中调", notePosition: "中调",
      naturalOccurrence: ["茉莉及部分花卉挥发物；商品主要合成/分离"],
      commercialProduction: "工业合成；与顺式茉莉酮结构相关但不同。",
      fragranceFamilies: ["floral", "green"], perfumeryRole: ["茉莉花香", "中调", "果香修饰"],
      relatedMaterials: ["jasmine-sambac", "tea"], relatedExtracts: [], relatedMolecules: ["cis-jasmone", "hedione", "indole"],
      relatedAccords: ["jasmine-accord"], relatedPerfumes: ["joy", "chanel-no-5"],
      safety: "作为香料使用；高浓度原液避免接触黏膜；具体法规按最新标准。",
      safetyInformation: "作为香料使用；高浓度原液避免接触黏膜；具体法规按最新标准。",
      allergens: [], regulatoryNotes: "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
      description: "二氢茉莉酮带茉莉、花香、果香与草本，比顺式茉莉酮更饱和、更柔和。它能让茉莉/茶香更圆，但不能替代整朵茉莉。",
      notes: "Dihydrojasmone 与 cis-Jasmone 结构/饱和度不同；名称相近不可互换。",
      creative: "适合茉莉、茶、柔和果香与白花中调。",
      verificationStatus: "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
      structure: "assets/images/molecules/62378.png", audit: A,
      references: [P(62378), G("Dihydrojasmone"), MS("Dihydrojasmone")], sources: [P(62378), G("Dihydrojasmone"), MS("Dihydrojasmone")],
    }
  );
})();
