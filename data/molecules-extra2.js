/* 香谱 · 芳香分子增补 2
 * 86 条；CAS/分子式/分子量/IUPAC 与结构按 PubChem 对应 CID 核对。
 * 商品名、法规状态与气味描述不冒充实验结论。
 */
(function () {
  const S = window.SCENT;
  const P = (cid) => S.refs.pubchem(cid);
  const G = (name) => S.refs.goodscents(name);
  const MS = (name) => S.refs.custom("materialSafety", {
    name: "安全资料参考 · " + name,
    note: "仅作一般风险背景；具体限值、纯度与用途须查最新法规/供应商资料。",
  });
  const rows = [
  {
    "id": "alpha-pinene",
    "name": "α-蒎烯",
    "nameZh": "α-蒎烯",
    "englishName": "Alpha-Pinene",
    "nameEn": "Alpha-Pinene",
    "synonyms": [],
    "CAS": "80-56-8",
    "cas": "80-56-8",
    "CID": 6654,
    "cid": 6654,
    "molecularFormula": "C10H16",
    "formula": "C10H16",
    "molecularWeight": "136.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "2,6,6-trimethylbicyclo[3.1.1]hept-2-ene",
    "iupacName": "2,6,6-trimethylbicyclo[3.1.1]hept-2-ene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "松木",
      "针叶",
      "树脂",
      "清新"
    ],
    "odorDescription": [
      "松木",
      "针叶",
      "树脂",
      "清新"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "rosemary",
      "juniper",
      "cypress"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "α-蒎烯的常见气味描述为松木、针叶、树脂、清新。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 6654 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/6654.png"
  },
  {
    "id": "beta-pinene",
    "name": "β-蒎烯",
    "nameZh": "β-蒎烯",
    "englishName": "Beta-Pinene",
    "nameEn": "Beta-Pinene",
    "synonyms": [],
    "CAS": "127-91-3",
    "cas": "127-91-3",
    "CID": 14896,
    "cid": 14896,
    "molecularFormula": "C10H16",
    "formula": "C10H16",
    "molecularWeight": "136.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "6,6-dimethyl-2-methylidenebicyclo[3.1.1]heptane",
    "iupacName": "6,6-dimethyl-2-methylidenebicyclo[3.1.1]heptane",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "松木",
      "树脂",
      "针叶",
      "微甜"
    ],
    "odorDescription": [
      "松木",
      "树脂",
      "针叶",
      "微甜"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "rosemary",
      "juniper"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "β-蒎烯的常见气味描述为松木、树脂、针叶、微甜。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 14896 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/14896.png"
  },
  {
    "id": "myrcene",
    "name": "月桂烯",
    "nameZh": "月桂烯",
    "englishName": "Myrcene",
    "nameEn": "Myrcene",
    "synonyms": [],
    "CAS": "123-35-3",
    "cas": "123-35-3",
    "CID": 31253,
    "cid": 31253,
    "molecularFormula": "C10H16",
    "formula": "C10H16",
    "molecularWeight": "136.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "7-methyl-3-methylideneocta-1,6-diene",
    "iupacName": "7-methyl-3-methylideneocta-1,6-diene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "树脂",
      "柑橘",
      "草本",
      "微甜"
    ],
    "odorDescription": [
      "树脂",
      "柑橘",
      "草本",
      "微甜"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "sweet-orange",
      "juniper"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "月桂烯的常见气味描述为树脂、柑橘、草本、微甜。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 31253 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/31253.png"
  },
  {
    "id": "beta-ocimene",
    "name": "β-罗勒烯",
    "nameZh": "β-罗勒烯",
    "englishName": "Beta-Ocimene",
    "nameEn": "Beta-Ocimene",
    "synonyms": [],
    "CAS": "13877-91-3",
    "cas": "13877-91-3",
    "CID": 18756,
    "cid": 18756,
    "molecularFormula": "C10H16",
    "formula": "C10H16",
    "molecularWeight": "136.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "3,7-dimethylocta-1,3,6-triene",
    "iupacName": "3,7-dimethylocta-1,3,6-triene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "绿色",
      "花香",
      "柑橘",
      "草本"
    ],
    "odorDescription": [
      "绿色",
      "花香",
      "柑橘",
      "草本"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "bergamot",
      "rosemary"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "β-罗勒烯的常见气味描述为绿色、花香、柑橘、草本。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 18756 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/18756.png"
  },
  {
    "id": "terpinolene",
    "name": "松油烯",
    "nameZh": "松油烯",
    "englishName": "Terpinolene",
    "nameEn": "Terpinolene",
    "synonyms": [],
    "CAS": "586-62-9",
    "cas": "586-62-9",
    "CID": 11463,
    "cid": 11463,
    "molecularFormula": "C10H16",
    "formula": "C10H16",
    "molecularWeight": "136.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "1-methyl-4-propan-2-ylidenecyclohexene",
    "iupacName": "1-methyl-4-propan-2-ylidenecyclohexene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "松木",
      "柑橘",
      "树脂",
      "草本"
    ],
    "odorDescription": [
      "松木",
      "柑橘",
      "树脂",
      "草本"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "juniper",
      "cypress"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "松油烯的常见气味描述为松木、柑橘、树脂、草本。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 11463 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/11463.png"
  },
  {
    "id": "gamma-terpinene",
    "name": "γ-萜品烯",
    "nameZh": "γ-萜品烯",
    "englishName": "Gamma-Terpinene",
    "nameEn": "Gamma-Terpinene",
    "synonyms": [],
    "CAS": "99-85-4",
    "cas": "99-85-4",
    "CID": 7461,
    "cid": 7461,
    "molecularFormula": "C10H16",
    "formula": "C10H16",
    "molecularWeight": "136.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "1-methyl-4-propan-2-ylcyclohexa-1,4-diene",
    "iupacName": "1-methyl-4-propan-2-ylcyclohexa-1,4-diene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "柑橘",
      "草本",
      "树脂",
      "清新"
    ],
    "odorDescription": [
      "柑橘",
      "草本",
      "树脂",
      "清新"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "sweet-orange",
      "cardamom"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "γ-萜品烯的常见气味描述为柑橘、草本、树脂、清新。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 7461 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/7461.png"
  },
  {
    "id": "alpha-phellandrene",
    "name": "α-水芹烯",
    "nameZh": "α-水芹烯",
    "englishName": "Alpha-Phellandrene",
    "nameEn": "Alpha-Phellandrene",
    "synonyms": [],
    "CAS": "99-83-2",
    "cas": "99-83-2",
    "CID": 7460,
    "cid": 7460,
    "molecularFormula": "C10H16",
    "formula": "C10H16",
    "molecularWeight": "136.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "2-methyl-5-propan-2-ylcyclohexa-1,3-diene",
    "iupacName": "2-methyl-5-propan-2-ylcyclohexa-1,3-diene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "胡椒",
      "柑橘",
      "绿色",
      "木质"
    ],
    "odorDescription": [
      "胡椒",
      "柑橘",
      "绿色",
      "木质"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "black-pepper",
      "bergamot"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "α-水芹烯的常见气味描述为胡椒、柑橘、绿色、木质。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 7460 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/7460.png"
  },
  {
    "id": "beta-phellandrene",
    "name": "β-水芹烯",
    "nameZh": "β-水芹烯",
    "englishName": "Beta-Phellandrene",
    "nameEn": "Beta-Phellandrene",
    "synonyms": [],
    "CAS": "555-10-2",
    "cas": "555-10-2",
    "CID": 11142,
    "cid": 11142,
    "molecularFormula": "C10H16",
    "formula": "C10H16",
    "molecularWeight": "136.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "3-methylidene-6-propan-2-ylcyclohexene",
    "iupacName": "3-methylidene-6-propan-2-ylcyclohexene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "胡椒",
      "薄荷",
      "绿色",
      "木质"
    ],
    "odorDescription": [
      "胡椒",
      "薄荷",
      "绿色",
      "木质"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "black-pepper",
      "peppermint"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "β-水芹烯的常见气味描述为胡椒、薄荷、绿色、木质。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 11142 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/11142.png"
  },
  {
    "id": "sabinene",
    "name": "桧烯",
    "nameZh": "桧烯",
    "englishName": "Sabinene",
    "nameEn": "Sabinene",
    "synonyms": [],
    "CAS": "3387-41-5",
    "cas": "3387-41-5",
    "CID": 18818,
    "cid": 18818,
    "molecularFormula": "C10H16",
    "formula": "C10H16",
    "molecularWeight": "136.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "4-methylidene-1-propan-2-ylbicyclo[3.1.0]hexane",
    "iupacName": "4-methylidene-1-propan-2-ylbicyclo[3.1.0]hexane",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "胡椒",
      "松木",
      "柑橘",
      "树脂"
    ],
    "odorDescription": [
      "胡椒",
      "松木",
      "柑橘",
      "树脂"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "juniper",
      "black-pepper"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "桧烯的常见气味描述为胡椒、松木、柑橘、树脂。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 18818 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/18818.png"
  },
  {
    "id": "camphene",
    "name": "莰烯",
    "nameZh": "莰烯",
    "englishName": "Camphene",
    "nameEn": "Camphene",
    "synonyms": [],
    "CAS": "79-92-5",
    "cas": "79-92-5",
    "CID": 6616,
    "cid": 6616,
    "molecularFormula": "C10H16",
    "formula": "C10H16",
    "molecularWeight": "136.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "2,2-dimethyl-3-methylidenebicyclo[2.2.1]heptane",
    "iupacName": "2,2-dimethyl-3-methylidenebicyclo[2.2.1]heptane",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "樟脑",
      "松木",
      "树脂",
      "药感"
    ],
    "odorDescription": [
      "樟脑",
      "松木",
      "树脂",
      "药感"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "rosemary",
      "cypress"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "莰烯的常见气味描述为樟脑、松木、树脂、药感。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 6616 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/6616.png"
  },
  {
    "id": "3-carene",
    "name": "3-蒈烯",
    "nameZh": "3-蒈烯",
    "englishName": "3-Carene",
    "nameEn": "3-Carene",
    "synonyms": [],
    "CAS": "13466-78-9",
    "cas": "13466-78-9",
    "CID": 26049,
    "cid": 26049,
    "molecularFormula": "C10H16",
    "formula": "C10H16",
    "molecularWeight": "136.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "3,7,7-trimethylbicyclo[4.1.0]hept-3-ene",
    "iupacName": "3,7,7-trimethylbicyclo[4.1.0]hept-3-ene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "松木",
      "树脂",
      "甜木",
      "微药感"
    ],
    "odorDescription": [
      "松木",
      "树脂",
      "甜木",
      "微药感"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "juniper",
      "cypress"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "3-蒈烯的常见气味描述为松木、树脂、甜木、微药感。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 26049 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/26049.png"
  },
  {
    "id": "alpha-terpineol",
    "name": "α-松油醇",
    "nameZh": "α-松油醇",
    "englishName": "Alpha-Terpineol",
    "nameEn": "Alpha-Terpineol",
    "synonyms": [],
    "CAS": "98-55-5",
    "cas": "98-55-5",
    "CID": 17100,
    "cid": 17100,
    "molecularFormula": "C10H18O",
    "formula": "C10H18O",
    "molecularWeight": "154.25",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "2-(4-methylcyclohex-3-en-1-yl)propan-2-ol",
    "iupacName": "2-(4-methylcyclohex-3-en-1-yl)propan-2-ol",
    "chemicalClass": "萜类醇/酮",
    "subcategory": "含氧单萜/倍半萜",
    "odorProfile": [
      "松油",
      "花香",
      "柑橘",
      "木质"
    ],
    "odorDescription": [
      "松油",
      "花香",
      "柑橘",
      "木质"
    ],
    "odorFamily": "floral",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "多种花卉、针叶、草本精油"
    ],
    "commercialProduction": "天然存在；商品可分离或合成。",
    "productionMethod": "天然存在；商品可分离或合成。",
    "fragranceFamilies": [
      "floral",
      "aromatic"
    ],
    "perfumeryRole": [
      "花香/草本",
      "中调",
      "圆润香气"
    ],
    "relatedMaterials": [
      "rosemary",
      "sweet-orange"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "α-松油醇的常见气味描述为松油、花香、柑橘、木质。它天然存在于多种花卉、针叶、草本精油；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 17100 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合花香、草本与木质之间的圆润连接。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/17100.png"
  },
  {
    "id": "terpinen-4-ol",
    "name": "4-萜品醇",
    "nameZh": "4-萜品醇",
    "englishName": "Terpinen-4-Ol",
    "nameEn": "Terpinen-4-Ol",
    "synonyms": [],
    "CAS": "562-74-3",
    "cas": "562-74-3",
    "CID": 11230,
    "cid": 11230,
    "molecularFormula": "C10H18O",
    "formula": "C10H18O",
    "molecularWeight": "154.25",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "4-methyl-1-propan-2-ylcyclohex-3-en-1-ol",
    "iupacName": "4-methyl-1-propan-2-ylcyclohex-3-en-1-ol",
    "chemicalClass": "萜类醇/酮",
    "subcategory": "含氧单萜/倍半萜",
    "odorProfile": [
      "草本",
      "木质",
      "柑橘",
      "茶香"
    ],
    "odorDescription": [
      "草本",
      "木质",
      "柑橘",
      "茶香"
    ],
    "odorFamily": "floral",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "多种花卉、针叶、草本精油"
    ],
    "commercialProduction": "天然存在；商品可分离或合成。",
    "productionMethod": "天然存在；商品可分离或合成。",
    "fragranceFamilies": [
      "floral",
      "aromatic"
    ],
    "perfumeryRole": [
      "花香/草本",
      "中调",
      "圆润香气"
    ],
    "relatedMaterials": [
      "tea",
      "cardamom"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "4-萜品醇的常见气味描述为草本、木质、柑橘、茶香。它天然存在于多种花卉、针叶、草本精油；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 11230 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合花香、草本与木质之间的圆润连接。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/11230.png"
  },
  {
    "id": "nerol",
    "name": "橙花醇",
    "nameZh": "橙花醇",
    "englishName": "Nerol",
    "nameEn": "Nerol",
    "synonyms": [],
    "CAS": "106-25-2",
    "cas": "106-25-2",
    "CID": 643820,
    "cid": 643820,
    "molecularFormula": "C10H18O",
    "formula": "C10H18O",
    "molecularWeight": "154.25",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(2Z)-3,7-dimethylocta-2,6-dien-1-ol",
    "iupacName": "(2Z)-3,7-dimethylocta-2,6-dien-1-ol",
    "chemicalClass": "萜类醇/酮",
    "subcategory": "含氧单萜/倍半萜",
    "odorProfile": [
      "玫瑰",
      "橙花",
      "甜花香",
      "微绿"
    ],
    "odorDescription": [
      "玫瑰",
      "橙花",
      "甜花香",
      "微绿"
    ],
    "odorFamily": "floral",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "多种花卉、针叶、草本精油"
    ],
    "commercialProduction": "天然存在；商品可分离或合成。",
    "productionMethod": "天然存在；商品可分离或合成。",
    "fragranceFamilies": [
      "floral",
      "aromatic"
    ],
    "perfumeryRole": [
      "花香/草本",
      "中调",
      "圆润香气"
    ],
    "relatedMaterials": [
      "neroli",
      "rose-damascena"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "橙花醇的常见气味描述为玫瑰、橙花、甜花香、微绿。它天然存在于多种花卉、针叶、草本精油；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 643820 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合花香、草本与木质之间的圆润连接。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/643820.png"
  },
  {
    "id": "alpha-bisabolol",
    "name": "α-没药醇",
    "nameZh": "α-没药醇",
    "englishName": "Alpha-Bisabolol",
    "nameEn": "Alpha-Bisabolol",
    "synonyms": [],
    "CAS": "515-69-5",
    "cas": "515-69-5",
    "CID": 1549992,
    "cid": 1549992,
    "molecularFormula": "C15H26O",
    "formula": "C15H26O",
    "molecularWeight": "222.37",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(2R)-6-methyl-2-[(1R)-4-methylcyclohex-3-en-1-yl]hept-5-en-2-ol",
    "iupacName": "(2R)-6-methyl-2-[(1R)-4-methylcyclohex-3-en-1-yl]hept-5-en-2-ol",
    "chemicalClass": "萜类醇/酮",
    "subcategory": "含氧单萜/倍半萜",
    "odorProfile": [
      "柔和花香",
      "洋甘菊",
      "木质",
      "微甜"
    ],
    "odorDescription": [
      "柔和花香",
      "洋甘菊",
      "木质",
      "微甜"
    ],
    "odorFamily": "floral",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "多种花卉、针叶、草本精油"
    ],
    "commercialProduction": "天然存在；商品可分离或合成。",
    "productionMethod": "天然存在；商品可分离或合成。",
    "fragranceFamilies": [
      "floral",
      "aromatic"
    ],
    "perfumeryRole": [
      "花香/草本",
      "中调",
      "圆润香气"
    ],
    "relatedMaterials": [
      "chamomile",
      "lavender"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "α-没药醇的常见气味描述为柔和花香、洋甘菊、木质、微甜。它天然存在于多种花卉、针叶、草本精油；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 1549992 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合花香、草本与木质之间的圆润连接。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/1549992.png"
  },
  {
    "id": "isoborneol",
    "name": "异龙脑",
    "nameZh": "异龙脑",
    "englishName": "Isoborneol",
    "nameEn": "Isoborneol",
    "synonyms": [],
    "CAS": "124-76-5",
    "cas": "124-76-5",
    "CID": 6321405,
    "cid": 6321405,
    "molecularFormula": "C10H18O",
    "formula": "C10H18O",
    "molecularWeight": "154.25",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(1R,2R,4R)-1,7,7-trimethylbicyclo[2.2.1]heptan-2-ol",
    "iupacName": "(1R,2R,4R)-1,7,7-trimethylbicyclo[2.2.1]heptan-2-ol",
    "chemicalClass": "萜类醇/酮",
    "subcategory": "含氧单萜/倍半萜",
    "odorProfile": [
      "樟脑",
      "木质",
      "药草",
      "清凉"
    ],
    "odorDescription": [
      "樟脑",
      "木质",
      "药草",
      "清凉"
    ],
    "odorFamily": "floral",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "多种花卉、针叶、草本精油"
    ],
    "commercialProduction": "天然存在；商品可分离或合成。",
    "productionMethod": "天然存在；商品可分离或合成。",
    "fragranceFamilies": [
      "floral",
      "aromatic"
    ],
    "perfumeryRole": [
      "花香/草本",
      "中调",
      "圆润香气"
    ],
    "relatedMaterials": [
      "rosemary",
      "sage"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "异龙脑的常见气味描述为樟脑、木质、药草、清凉。它天然存在于多种花卉、针叶、草本精油；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 6321405 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合花香、草本与木质之间的圆润连接。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/6321405.png"
  },
  {
    "id": "menthone",
    "name": "薄荷酮",
    "nameZh": "薄荷酮",
    "englishName": "Menthone",
    "nameEn": "Menthone",
    "synonyms": [],
    "CAS": "89-80-5",
    "cas": "89-80-5",
    "CID": 26447,
    "cid": 26447,
    "molecularFormula": "C10H18O",
    "formula": "C10H18O",
    "molecularWeight": "154.25",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "trans-(2S,5R)-5-methyl-2-propan-2-ylcyclohexan-1-one",
    "iupacName": "trans-(2S,5R)-5-methyl-2-propan-2-ylcyclohexan-1-one",
    "chemicalClass": "萜类醇/酮",
    "subcategory": "含氧单萜/倍半萜",
    "odorProfile": [
      "薄荷",
      "药草",
      "清凉",
      "微苦"
    ],
    "odorDescription": [
      "薄荷",
      "药草",
      "清凉",
      "微苦"
    ],
    "odorFamily": "floral",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "多种花卉、针叶、草本精油"
    ],
    "commercialProduction": "天然存在；商品可分离或合成。",
    "productionMethod": "天然存在；商品可分离或合成。",
    "fragranceFamilies": [
      "floral",
      "aromatic"
    ],
    "perfumeryRole": [
      "花香/草本",
      "中调",
      "圆润香气"
    ],
    "relatedMaterials": [
      "peppermint",
      "rosemary"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "薄荷酮的常见气味描述为薄荷、药草、清凉、微苦。它天然存在于多种花卉、针叶、草本精油；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 26447 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合花香、草本与木质之间的圆润连接。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/26447.png"
  },
  {
    "id": "alpha-bisabolene",
    "name": "α-没药烯",
    "nameZh": "α-没药烯",
    "englishName": "Alpha-Bisabolene",
    "nameEn": "Alpha-Bisabolene",
    "synonyms": [],
    "CAS": "17627-44-0",
    "cas": "17627-44-0",
    "CID": 86597,
    "cid": 86597,
    "molecularFormula": "C15H24",
    "formula": "C15H24",
    "molecularWeight": "204.35",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "1-methyl-4-(6-methylhepta-2,5-dien-2-yl)cyclohexene",
    "iupacName": "1-methyl-4-(6-methylhepta-2,5-dien-2-yl)cyclohexene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "木质",
      "香脂",
      "胡椒",
      "微甜"
    ],
    "odorDescription": [
      "木质",
      "香脂",
      "胡椒",
      "微甜"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "frankincense",
      "black-pepper"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "α-没药烯的常见气味描述为木质、香脂、胡椒、微甜。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 86597 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/86597.png"
  },
  {
    "id": "beta-caryophyllene",
    "name": "β-石竹烯",
    "nameZh": "β-石竹烯",
    "englishName": "Beta-Caryophyllene",
    "nameEn": "Beta-Caryophyllene",
    "synonyms": [],
    "CAS": "87-44-5",
    "cas": "87-44-5",
    "CID": 5281515,
    "cid": 5281515,
    "molecularFormula": "C15H24",
    "formula": "C15H24",
    "molecularWeight": "204.35",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(1R,4E,9S)-4,11,11-trimethyl-8-methylidenebicyclo[7.2.0]undec-4-ene",
    "iupacName": "(1R,4E,9S)-4,11,11-trimethyl-8-methylidenebicyclo[7.2.0]undec-4-ene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "胡椒",
      "木质",
      "丁香",
      "树脂"
    ],
    "odorDescription": [
      "胡椒",
      "木质",
      "丁香",
      "树脂"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "black-pepper",
      "clove"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "β-石竹烯的常见气味描述为胡椒、木质、丁香、树脂。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 5281515 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/5281515.png"
  },
  {
    "id": "alpha-humulene",
    "name": "α-蛇麻烯",
    "nameZh": "α-蛇麻烯",
    "englishName": "Alpha-Humulene",
    "nameEn": "Alpha-Humulene",
    "synonyms": [],
    "CAS": "6753-98-6",
    "cas": "6753-98-6",
    "CID": 5281520,
    "cid": 5281520,
    "molecularFormula": "C15H24",
    "formula": "C15H24",
    "molecularWeight": "204.35",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(1E,4E,8E)-2,6,6,9-tetramethylcycloundeca-1,4,8-triene",
    "iupacName": "(1E,4E,8E)-2,6,6,9-tetramethylcycloundeca-1,4,8-triene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "木质",
      "胡椒",
      "树脂",
      "草本"
    ],
    "odorDescription": [
      "木质",
      "胡椒",
      "树脂",
      "草本"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "black-pepper",
      "clove"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "α-蛇麻烯的常见气味描述为木质、胡椒、树脂、草本。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 5281520 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/5281520.png"
  },
  {
    "id": "valencene",
    "name": "瓦伦烯",
    "nameZh": "瓦伦烯",
    "englishName": "Valencene",
    "nameEn": "Valencene",
    "synonyms": [],
    "CAS": "4630-07-3",
    "cas": "4630-07-3",
    "CID": 9855795,
    "cid": 9855795,
    "molecularFormula": "C15H24",
    "formula": "C15H24",
    "molecularWeight": "204.35",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(3R,4aS,5R)-4a,5-dimethyl-3-prop-1-en-2-yl-2,3,4,5,6,7-hexahydro-1H-naphthalene",
    "iupacName": "(3R,4aS,5R)-4a,5-dimethyl-3-prop-1-en-2-yl-2,3,4,5,6,7-hexahydro-1H-naphthalene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "橙皮",
      "柑橘",
      "绿色",
      "木质"
    ],
    "odorDescription": [
      "橙皮",
      "柑橘",
      "绿色",
      "木质"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "sweet-orange",
      "bergamot"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "瓦伦烯的常见气味描述为橙皮、柑橘、绿色、木质。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 9855795 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/9855795.png"
  },
  {
    "id": "alpha-cedrene",
    "name": "α-雪松烯",
    "nameZh": "α-雪松烯",
    "englishName": "Alpha-Cedrene",
    "nameEn": "Alpha-Cedrene",
    "synonyms": [],
    "CAS": "469-61-4",
    "cas": "469-61-4",
    "CID": 6431015,
    "cid": 6431015,
    "molecularFormula": "C15H24",
    "formula": "C15H24",
    "molecularWeight": "204.35",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(1S,2R,5S,7S)-2,6,6,8-tetramethyltricyclo[5.3.1.01,5]undec-8-ene",
    "iupacName": "(1S,2R,5S,7S)-2,6,6,8-tetramethyltricyclo[5.3.1.01,5]undec-8-ene",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "雪松",
      "木质",
      "树脂",
      "干燥"
    ],
    "odorDescription": [
      "雪松",
      "木质",
      "树脂",
      "干燥"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "atlas-cedar",
      "cypress"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "α-雪松烯的常见气味描述为雪松、木质、树脂、干燥。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 6431015 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/6431015.png"
  },
  {
    "id": "longifolene",
    "name": "长叶烯",
    "nameZh": "长叶烯",
    "englishName": "Longifolene",
    "nameEn": "Longifolene",
    "synonyms": [],
    "CAS": "475-20-7",
    "cas": "475-20-7",
    "CID": 1796220,
    "cid": 1796220,
    "molecularFormula": "C15H24",
    "formula": "C15H24",
    "molecularWeight": "204.35",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(1R,2S,7S,9S)-3,3,7-trimethyl-8-methylidenetricyclo[5.4.0.02,9]undecane",
    "iupacName": "(1R,2S,7S,9S)-3,3,7-trimethyl-8-methylidenetricyclo[5.4.0.02,9]undecane",
    "chemicalClass": "萜烯类",
    "subcategory": "单萜/倍半萜烯",
    "odorProfile": [
      "松木",
      "树脂",
      "木质",
      "烟熏"
    ],
    "odorDescription": [
      "松木",
      "树脂",
      "木质",
      "烟熏"
    ],
    "odorFamily": "woody",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "松树、针叶、柑橘皮、伞形科与唇形科植物等"
    ],
    "commercialProduction": "天然存在于多种精油；商品可经分离或合成。",
    "productionMethod": "天然存在于多种精油；商品可经分离或合成。",
    "fragranceFamilies": [
      "woody",
      "green"
    ],
    "perfumeryRole": [
      "针叶/树脂",
      "清新木质",
      "前调扩散"
    ],
    "relatedMaterials": [
      "juniper",
      "cypress"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度原液避免接触皮肤与黏膜，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "长叶烯的常见气味描述为松木、树脂、木质、烟熏。它天然存在于松树、针叶、柑橘皮、伞形科与唇形科植物等；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 1796220 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合针叶林、树脂、柑橘皮与冷冽木质。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/1796220.png"
  },
  {
    "id": "squalene",
    "name": "角鲨烯",
    "nameZh": "角鲨烯",
    "englishName": "Squalene",
    "nameEn": "Squalene",
    "synonyms": [],
    "CAS": "111-02-4",
    "cas": "111-02-4",
    "CID": 638072,
    "cid": 638072,
    "molecularFormula": "C30H50",
    "formula": "C30H50",
    "molecularWeight": "410.7",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(6E,10E,14E,18E)-2,6,10,15,19,23-hexamethyltetracosa-2,6,10,14,18,22-hexaene",
    "iupacName": "(6E,10E,14E,18E)-2,6,10,15,19,23-hexamethyltetracosa-2,6,10,14,18,22-hexaene",
    "chemicalClass": "萜烯类",
    "subcategory": "三萜烯",
    "odorProfile": [
      "微弱",
      "油脂",
      "皮肤",
      "载体感"
    ],
    "odorDescription": [
      "微弱",
      "油脂",
      "皮肤",
      "载体感"
    ],
    "odorFamily": "",
    "volatility": "无显著前中后调",
    "notePosition": "无显著前中后调",
    "naturalOccurrence": [
      "鲨鱼肝油、橄榄等植物油脂；商品来源需区分。"
    ],
    "commercialProduction": "可从动物/植物来源纯化；化妆品级规格需查供应商。",
    "productionMethod": "可从动物/植物来源纯化；化妆品级规格需查供应商。",
    "fragranceFamilies": [],
    "perfumeryRole": [
      "润肤/载体",
      "非主要气味"
    ],
    "relatedMaterials": [],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "woody-accord"
    ],
    "relatedPerfumes": [],
    "safety": "一般用于润肤/载体；氧化与来源（动物/植物）需说明，具体法规按商品。",
    "safetyInformation": "一般用于润肤/载体；氧化与来源（动物/植物）需说明，具体法规按商品。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "角鲨烯的常见气味描述为微弱、油脂、皮肤、载体感。它天然存在于鲨鱼肝油、橄榄等植物油脂；商品来源需区分。；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 638072 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "不是主要香气材料；用于质地、载体与皮肤感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/638072.png"
  },
  {
    "id": "acetaldehyde",
    "name": "乙醛",
    "nameZh": "乙醛",
    "englishName": "Acetaldehyde",
    "nameEn": "Acetaldehyde",
    "synonyms": [],
    "CAS": "75-07-0",
    "cas": "75-07-0",
    "CID": 177,
    "cid": 177,
    "molecularFormula": "C2H4O",
    "formula": "C2H4O",
    "molecularWeight": "44.05",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "acetaldehyde",
    "iupacName": "acetaldehyde",
    "chemicalClass": "醛类",
    "subcategory": "脂肪族/芳香族醛",
    "odorProfile": [
      "尖锐",
      "果香",
      "发酵",
      "溶剂"
    ],
    "odorDescription": [
      "尖锐",
      "果香",
      "发酵",
      "溶剂"
    ],
    "odorFamily": "citrus",
    "volatility": "前调",
    "notePosition": "前调",
    "naturalOccurrence": [
      "柑橘皮、绿叶、部分花卉与发酵香气"
    ],
    "commercialProduction": "天然存在；工业上常经氧化/合成。",
    "productionMethod": "天然存在；工业上常经氧化/合成。",
    "fragranceFamilies": [
      "citrus",
      "floral"
    ],
    "perfumeryRole": [
      "前调",
      "醛香/柑橘皮",
      "提亮"
    ],
    "relatedMaterials": [
      "sweet-orange",
      "coffee"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "乙醛有刺激性/致癌性评估；高浓度原液避免吸入与黏膜接触，具体法规查最新标准。",
    "safetyInformation": "乙醛有刺激性/致癌性评估；高浓度原液避免吸入与黏膜接触，具体法规查最新标准。",
    "allergens": [],
    "regulatoryNotes": "IARC 对乙醛有致癌性评估；不得当普通推荐原料。",
    "description": "乙醛的常见气味描述为尖锐、果香、发酵、溶剂。它天然存在于柑橘皮、绿叶、部分花卉与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 177 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柑橘皮、皂感、绿叶与复古醛香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/177.png"
  },
  {
    "id": "propionaldehyde",
    "name": "丙醛",
    "nameZh": "丙醛",
    "englishName": "Propionaldehyde",
    "nameEn": "Propionaldehyde",
    "synonyms": [],
    "CAS": "123-38-6",
    "cas": "123-38-6",
    "CID": 527,
    "cid": 527,
    "molecularFormula": "C3H6O",
    "formula": "C3H6O",
    "molecularWeight": "58.08",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "propanal",
    "iupacName": "propanal",
    "chemicalClass": "醛类",
    "subcategory": "脂肪族/芳香族醛",
    "odorProfile": [
      "尖锐",
      "果香",
      "青草",
      "溶剂"
    ],
    "odorDescription": [
      "尖锐",
      "果香",
      "青草",
      "溶剂"
    ],
    "odorFamily": "citrus",
    "volatility": "前调",
    "notePosition": "前调",
    "naturalOccurrence": [
      "柑橘皮、绿叶、部分花卉与发酵香气"
    ],
    "commercialProduction": "天然存在；工业上常经氧化/合成。",
    "productionMethod": "天然存在；工业上常经氧化/合成。",
    "fragranceFamilies": [
      "citrus",
      "floral"
    ],
    "perfumeryRole": [
      "前调",
      "醛香/柑橘皮",
      "提亮"
    ],
    "relatedMaterials": [
      "sweet-orange"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "safetyInformation": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "丙醛的常见气味描述为尖锐、果香、青草、溶剂。它天然存在于柑橘皮、绿叶、部分花卉与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 527 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柑橘皮、皂感、绿叶与复古醛香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/527.png"
  },
  {
    "id": "butyraldehyde",
    "name": "丁醛",
    "nameZh": "丁醛",
    "englishName": "Butyraldehyde",
    "nameEn": "Butyraldehyde",
    "synonyms": [],
    "CAS": "123-72-8",
    "cas": "123-72-8",
    "CID": 261,
    "cid": 261,
    "molecularFormula": "C4H8O",
    "formula": "C4H8O",
    "molecularWeight": "72.11",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "butanal",
    "iupacName": "butanal",
    "chemicalClass": "醛类",
    "subcategory": "脂肪族/芳香族醛",
    "odorProfile": [
      "尖锐",
      "油脂",
      "果香",
      "青草"
    ],
    "odorDescription": [
      "尖锐",
      "油脂",
      "果香",
      "青草"
    ],
    "odorFamily": "citrus",
    "volatility": "前调",
    "notePosition": "前调",
    "naturalOccurrence": [
      "柑橘皮、绿叶、部分花卉与发酵香气"
    ],
    "commercialProduction": "天然存在；工业上常经氧化/合成。",
    "productionMethod": "天然存在；工业上常经氧化/合成。",
    "fragranceFamilies": [
      "citrus",
      "floral"
    ],
    "perfumeryRole": [
      "前调",
      "醛香/柑橘皮",
      "提亮"
    ],
    "relatedMaterials": [
      "cocoa"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "safetyInformation": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "丁醛的常见气味描述为尖锐、油脂、果香、青草。它天然存在于柑橘皮、绿叶、部分花卉与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 261 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柑橘皮、皂感、绿叶与复古醛香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/261.png"
  },
  {
    "id": "hexanal",
    "name": "己醛",
    "nameZh": "己醛",
    "englishName": "Hexanal",
    "nameEn": "Hexanal",
    "synonyms": [],
    "CAS": "66-25-1",
    "cas": "66-25-1",
    "CID": 6184,
    "cid": 6184,
    "molecularFormula": "C6H12O",
    "formula": "C6H12O",
    "molecularWeight": "100.16",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "hexanal",
    "iupacName": "hexanal",
    "chemicalClass": "醛类",
    "subcategory": "脂肪族/芳香族醛",
    "odorProfile": [
      "青草",
      "苹果",
      "绿叶",
      "油脂"
    ],
    "odorDescription": [
      "青草",
      "苹果",
      "绿叶",
      "油脂"
    ],
    "odorFamily": "citrus",
    "volatility": "前调",
    "notePosition": "前调",
    "naturalOccurrence": [
      "柑橘皮、绿叶、部分花卉与发酵香气"
    ],
    "commercialProduction": "天然存在；工业上常经氧化/合成。",
    "productionMethod": "天然存在；工业上常经氧化/合成。",
    "fragranceFamilies": [
      "citrus",
      "floral"
    ],
    "perfumeryRole": [
      "前调",
      "醛香/柑橘皮",
      "提亮"
    ],
    "relatedMaterials": [
      "sweet-orange",
      "lemon"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "safetyInformation": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "己醛的常见气味描述为青草、苹果、绿叶、油脂。它天然存在于柑橘皮、绿叶、部分花卉与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 6184 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柑橘皮、皂感、绿叶与复古醛香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/6184.png"
  },
  {
    "id": "heptanal",
    "name": "庚醛",
    "nameZh": "庚醛",
    "englishName": "Heptanal",
    "nameEn": "Heptanal",
    "synonyms": [],
    "CAS": "111-71-7",
    "cas": "111-71-7",
    "CID": 8130,
    "cid": 8130,
    "molecularFormula": "C7H14O",
    "formula": "C7H14O",
    "molecularWeight": "114.19",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "heptanal",
    "iupacName": "heptanal",
    "chemicalClass": "醛类",
    "subcategory": "脂肪族/芳香族醛",
    "odorProfile": [
      "柑橘",
      "油脂",
      "青草",
      "蜡质"
    ],
    "odorDescription": [
      "柑橘",
      "油脂",
      "青草",
      "蜡质"
    ],
    "odorFamily": "citrus",
    "volatility": "前调",
    "notePosition": "前调",
    "naturalOccurrence": [
      "柑橘皮、绿叶、部分花卉与发酵香气"
    ],
    "commercialProduction": "天然存在；工业上常经氧化/合成。",
    "productionMethod": "天然存在；工业上常经氧化/合成。",
    "fragranceFamilies": [
      "citrus",
      "floral"
    ],
    "perfumeryRole": [
      "前调",
      "醛香/柑橘皮",
      "提亮"
    ],
    "relatedMaterials": [
      "lemon",
      "bergamot"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "safetyInformation": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "庚醛的常见气味描述为柑橘、油脂、青草、蜡质。它天然存在于柑橘皮、绿叶、部分花卉与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 8130 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柑橘皮、皂感、绿叶与复古醛香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/8130.png"
  },
  {
    "id": "undecanal",
    "name": "十一醛",
    "nameZh": "十一醛",
    "englishName": "Undecanal",
    "nameEn": "Undecanal",
    "synonyms": [],
    "CAS": "112-44-7",
    "cas": "112-44-7",
    "CID": 8186,
    "cid": 8186,
    "molecularFormula": "C11H22O",
    "formula": "C11H22O",
    "molecularWeight": "170.29",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "undecanal",
    "iupacName": "undecanal",
    "chemicalClass": "醛类",
    "subcategory": "脂肪族/芳香族醛",
    "odorProfile": [
      "醛香",
      "柑橘",
      "蜡质",
      "花香"
    ],
    "odorDescription": [
      "醛香",
      "柑橘",
      "蜡质",
      "花香"
    ],
    "odorFamily": "citrus",
    "volatility": "前调",
    "notePosition": "前调",
    "naturalOccurrence": [
      "柑橘皮、绿叶、部分花卉与发酵香气"
    ],
    "commercialProduction": "天然存在；工业上常经氧化/合成。",
    "productionMethod": "天然存在；工业上常经氧化/合成。",
    "fragranceFamilies": [
      "citrus",
      "floral"
    ],
    "perfumeryRole": [
      "前调",
      "醛香/柑橘皮",
      "提亮"
    ],
    "relatedMaterials": [
      "sweet-orange",
      "rose-damascena"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "safetyInformation": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "十一醛的常见气味描述为醛香、柑橘、蜡质、花香。它天然存在于柑橘皮、绿叶、部分花卉与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 8186 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柑橘皮、皂感、绿叶与复古醛香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/8186.png"
  },
  {
    "id": "dodecanal",
    "name": "十二醛",
    "nameZh": "十二醛",
    "englishName": "Dodecanal",
    "nameEn": "Dodecanal",
    "synonyms": [],
    "CAS": "112-54-9",
    "cas": "112-54-9",
    "CID": 8194,
    "cid": 8194,
    "molecularFormula": "C12H24O",
    "formula": "C12H24O",
    "molecularWeight": "184.32",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "dodecanal",
    "iupacName": "dodecanal",
    "chemicalClass": "醛类",
    "subcategory": "脂肪族/芳香族醛",
    "odorProfile": [
      "醛香",
      "柑橘",
      "蜡质",
      "皂感"
    ],
    "odorDescription": [
      "醛香",
      "柑橘",
      "蜡质",
      "皂感"
    ],
    "odorFamily": "citrus",
    "volatility": "前调",
    "notePosition": "前调",
    "naturalOccurrence": [
      "柑橘皮、绿叶、部分花卉与发酵香气"
    ],
    "commercialProduction": "天然存在；工业上常经氧化/合成。",
    "productionMethod": "天然存在；工业上常经氧化/合成。",
    "fragranceFamilies": [
      "citrus",
      "floral"
    ],
    "perfumeryRole": [
      "前调",
      "醛香/柑橘皮",
      "提亮"
    ],
    "relatedMaterials": [
      "sweet-orange",
      "bergamot"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "safetyInformation": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "十二醛的常见气味描述为醛香、柑橘、蜡质、皂感。它天然存在于柑橘皮、绿叶、部分花卉与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 8194 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柑橘皮、皂感、绿叶与复古醛香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/8194.png"
  },
  {
    "id": "phenylacetaldehyde",
    "name": "苯乙醛",
    "nameZh": "苯乙醛",
    "englishName": "Phenylacetaldehyde",
    "nameEn": "Phenylacetaldehyde",
    "synonyms": [],
    "CAS": "122-78-1",
    "cas": "122-78-1",
    "CID": 998,
    "cid": 998,
    "molecularFormula": "C8H8O",
    "formula": "C8H8O",
    "molecularWeight": "120.15",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "2-phenylacetaldehyde",
    "iupacName": "2-phenylacetaldehyde",
    "chemicalClass": "醛类",
    "subcategory": "脂肪族/芳香族醛",
    "odorProfile": [
      "蜂蜜",
      "玫瑰",
      "青绿",
      "甜"
    ],
    "odorDescription": [
      "蜂蜜",
      "玫瑰",
      "青绿",
      "甜"
    ],
    "odorFamily": "citrus",
    "volatility": "前调",
    "notePosition": "前调",
    "naturalOccurrence": [
      "柑橘皮、绿叶、部分花卉与发酵香气"
    ],
    "commercialProduction": "天然存在；工业上常经氧化/合成。",
    "productionMethod": "天然存在；工业上常经氧化/合成。",
    "fragranceFamilies": [
      "citrus",
      "floral"
    ],
    "perfumeryRole": [
      "前调",
      "醛香/柑橘皮",
      "提亮"
    ],
    "relatedMaterials": [
      "rose-damascena",
      "honey"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "safetyInformation": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "苯乙醛的常见气味描述为蜂蜜、玫瑰、青绿、甜。它天然存在于柑橘皮、绿叶、部分花卉与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 998 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柑橘皮、皂感、绿叶与复古醛香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/998.png"
  },
  {
    "id": "cyclamen-aldehyde",
    "name": "仙客来醛",
    "nameZh": "仙客来醛",
    "englishName": "Cyclamen Aldehyde",
    "nameEn": "Cyclamen Aldehyde",
    "synonyms": [],
    "CAS": "103-95-7",
    "cas": "103-95-7",
    "CID": 517827,
    "cid": 517827,
    "molecularFormula": "C13H18O",
    "formula": "C13H18O",
    "molecularWeight": "190.28",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "2-methyl-3-(4-propan-2-ylphenyl)propanal",
    "iupacName": "2-methyl-3-(4-propan-2-ylphenyl)propanal",
    "chemicalClass": "醛类",
    "subcategory": "脂肪族/芳香族醛",
    "odorProfile": [
      "仙客来",
      "花香",
      "青绿",
      "甜"
    ],
    "odorDescription": [
      "仙客来",
      "花香",
      "青绿",
      "甜"
    ],
    "odorFamily": "citrus",
    "volatility": "前调",
    "notePosition": "前调",
    "naturalOccurrence": [
      "柑橘皮、绿叶、部分花卉与发酵香气"
    ],
    "commercialProduction": "天然存在；工业上常经氧化/合成。",
    "productionMethod": "天然存在；工业上常经氧化/合成。",
    "fragranceFamilies": [
      "citrus",
      "floral"
    ],
    "perfumeryRole": [
      "前调",
      "醛香/柑橘皮",
      "提亮"
    ],
    "relatedMaterials": [
      "rose-damascena",
      "violet-leaf"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "safetyInformation": "醛类可能刺激皮肤/呼吸道；高浓度原液避免黏膜接触。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "仙客来醛的常见气味描述为仙客来、花香、青绿、甜。它天然存在于柑橘皮、绿叶、部分花卉与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 517827 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柑橘皮、皂感、绿叶与复古醛香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/517827.png"
  },
  {
    "id": "lilial",
    "name": "铃兰醛（Lilial）",
    "nameZh": "铃兰醛（Lilial）",
    "englishName": "Lilial",
    "nameEn": "Lilial",
    "synonyms": [],
    "CAS": "80-54-6",
    "cas": "80-54-6",
    "CID": 228987,
    "cid": 228987,
    "molecularFormula": "C14H20O",
    "formula": "C14H20O",
    "molecularWeight": "204.31",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "3-(4-tert-butylphenyl)-2-methylpropanal",
    "iupacName": "3-(4-tert-butylphenyl)-2-methylpropanal",
    "chemicalClass": "醛类",
    "subcategory": "历史/受限芳香醛",
    "odorProfile": [
      "铃兰",
      "花香",
      "醛香",
      "清新"
    ],
    "odorDescription": [
      "铃兰",
      "花香",
      "醛香",
      "清新"
    ],
    "odorFamily": "floral",
    "volatility": "前调",
    "notePosition": "前调",
    "naturalOccurrence": [
      "柑橘皮、绿叶、部分花卉与发酵香气"
    ],
    "commercialProduction": "天然存在；工业上常经氧化/合成。",
    "productionMethod": "天然存在；工业上常经氧化/合成。",
    "fragranceFamilies": [
      "floral"
    ],
    "perfumeryRole": [
      "铃兰/花香",
      "历史原料"
    ],
    "relatedMaterials": [
      "lily-of-the-valley"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "Lilial（丁苯基甲基丙醛）因生殖毒性/法规限制在欧盟化妆品中已被禁用/严格限制；不得作为普通推荐原料。",
    "safetyInformation": "Lilial（丁苯基甲基丙醛）因生殖毒性/法规限制在欧盟化妆品中已被禁用/严格限制；不得作为普通推荐原料。",
    "allergens": [],
    "regulatoryNotes": "历史香料资料；欧盟化妆品法规已限制/禁用。",
    "description": "铃兰醛（Lilial）的常见气味描述为铃兰、花香、醛香、清新。它天然存在于柑橘皮、绿叶、部分花卉与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 228987 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柑橘皮、皂感、绿叶与复古醛香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/228987.png"
  },
  {
    "id": "florhydral",
    "name": "Florhydral（花香醛商品）",
    "nameZh": "Florhydral（花香醛商品）",
    "englishName": "Florhydral",
    "nameEn": "Florhydral",
    "synonyms": [],
    "CAS": "125109-85-5",
    "cas": "125109-85-5",
    "CID": 86209,
    "cid": 86209,
    "molecularFormula": "C13H18O",
    "formula": "C13H18O",
    "molecularWeight": "190.28",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "3-(3-propan-2-ylphenyl)butanal",
    "iupacName": "3-(3-propan-2-ylphenyl)butanal",
    "chemicalClass": "醛类",
    "subcategory": "商品花香醛",
    "odorProfile": [
      "花香",
      "青绿",
      "柑橘",
      "清新"
    ],
    "odorDescription": [
      "花香",
      "青绿",
      "柑橘",
      "清新"
    ],
    "odorFamily": "floral",
    "volatility": "前调",
    "notePosition": "前调",
    "naturalOccurrence": [
      "柑橘皮、绿叶、部分花卉与发酵香气"
    ],
    "commercialProduction": "天然存在；工业上常经氧化/合成。",
    "productionMethod": "天然存在；工业上常经氧化/合成。",
    "fragranceFamilies": [
      "floral",
      "green"
    ],
    "perfumeryRole": [
      "花香/青绿",
      "前调"
    ],
    "relatedMaterials": [
      "lily-of-the-valley"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "商品名/商标；具体化学身份与法规状态以供应商 TDS/SDS 为准。",
    "safetyInformation": "商品名/商标；具体化学身份与法规状态以供应商 TDS/SDS 为准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "Florhydral（花香醛商品）的常见气味描述为花香、青绿、柑橘、清新。它天然存在于柑橘皮、绿叶、部分花卉与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 86209 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柑橘皮、皂感、绿叶与复古醛香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/86209.png"
  },
  {
    "id": "triplal",
    "name": "Triplal（青叶醛商品）",
    "nameZh": "Triplal（青叶醛商品）",
    "englishName": "Triplal",
    "nameEn": "Triplal",
    "synonyms": [],
    "CAS": "68039-49-6",
    "cas": "68039-49-6",
    "CID": 93375,
    "cid": 93375,
    "molecularFormula": "C9H14O",
    "formula": "C9H14O",
    "molecularWeight": "138.21",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "2,4-dimethylcyclohex-3-ene-1-carbaldehyde",
    "iupacName": "2,4-dimethylcyclohex-3-ene-1-carbaldehyde",
    "chemicalClass": "醛类",
    "subcategory": "商品青叶醛",
    "odorProfile": [
      "青叶",
      "青草",
      "柑橘",
      "花香"
    ],
    "odorDescription": [
      "青叶",
      "青草",
      "柑橘",
      "花香"
    ],
    "odorFamily": "green",
    "volatility": "前调",
    "notePosition": "前调",
    "naturalOccurrence": [
      "柑橘皮、绿叶、部分花卉与发酵香气"
    ],
    "commercialProduction": "天然存在；工业上常经氧化/合成。",
    "productionMethod": "天然存在；工业上常经氧化/合成。",
    "fragranceFamilies": [
      "green",
      "citrus"
    ],
    "perfumeryRole": [
      "青叶/青草",
      "前调"
    ],
    "relatedMaterials": [
      "violet-leaf",
      "lemon"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "商品名/商标；具体化学身份与法规状态以供应商 TDS/SDS 为准。",
    "safetyInformation": "商品名/商标；具体化学身份与法规状态以供应商 TDS/SDS 为准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "Triplal（青叶醛商品）的常见气味描述为青叶、青草、柑橘、花香。它天然存在于柑橘皮、绿叶、部分花卉与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 93375 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柑橘皮、皂感、绿叶与复古醛香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/93375.png"
  },
  {
    "id": "cinnamyl-alcohol",
    "name": "肉桂醇",
    "nameZh": "肉桂醇",
    "englishName": "Cinnamyl Alcohol",
    "nameEn": "Cinnamyl Alcohol",
    "synonyms": [],
    "CAS": "104-54-1",
    "cas": "104-54-1",
    "CID": 5315892,
    "cid": 5315892,
    "molecularFormula": "C9H10O",
    "formula": "C9H10O",
    "molecularWeight": "134.17",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(E)-3-phenylprop-2-en-1-ol",
    "iupacName": "(E)-3-phenylprop-2-en-1-ol",
    "chemicalClass": "醇类",
    "subcategory": "芳香醇/萜烯醇",
    "odorProfile": [
      "肉桂",
      "花香",
      "甜",
      "辛香"
    ],
    "odorDescription": [
      "肉桂",
      "花香",
      "甜",
      "辛香"
    ],
    "odorFamily": "floral",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "花卉、香脂、木质与部分精油"
    ],
    "commercialProduction": "天然存在；商品可合成/分离。",
    "productionMethod": "天然存在；商品可合成/分离。",
    "fragranceFamilies": [
      "floral",
      "green"
    ],
    "perfumeryRole": [
      "花香",
      "中调",
      "溶剂/定香辅助"
    ],
    "relatedMaterials": [
      "cinnamon",
      "benzoin-siam"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；部分醇类是香料过敏原，具体查最新法规。",
    "safetyInformation": "作为香料/研究材料；部分醇类是香料过敏原，具体查最新法规。",
    "allergens": [
      "肉桂醇（欧盟香料过敏原标示清单，具体以最新法规为准）"
    ],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "肉桂醇的常见气味描述为肉桂、花香、甜、辛香。它天然存在于花卉、香脂、木质与部分精油；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 5315892 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柔和花香、青绿与香脂底。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/5315892.png"
  },
  {
    "id": "anisyl-alcohol",
    "name": "茴香醇",
    "nameZh": "茴香醇",
    "englishName": "Anisyl Alcohol",
    "nameEn": "Anisyl Alcohol",
    "synonyms": [],
    "CAS": "105-13-5",
    "cas": "105-13-5",
    "CID": 7738,
    "cid": 7738,
    "molecularFormula": "C8H10O2",
    "formula": "C8H10O2",
    "molecularWeight": "138.16",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(4-methoxyphenyl)methanol",
    "iupacName": "(4-methoxyphenyl)methanol",
    "chemicalClass": "醇类",
    "subcategory": "芳香醇/萜烯醇",
    "odorProfile": [
      "茴香",
      "花香",
      "甜",
      "香草"
    ],
    "odorDescription": [
      "茴香",
      "花香",
      "甜",
      "香草"
    ],
    "odorFamily": "floral",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "花卉、香脂、木质与部分精油"
    ],
    "commercialProduction": "天然存在；商品可合成/分离。",
    "productionMethod": "天然存在；商品可合成/分离。",
    "fragranceFamilies": [
      "floral",
      "green"
    ],
    "perfumeryRole": [
      "花香",
      "中调",
      "溶剂/定香辅助"
    ],
    "relatedMaterials": [
      "star-anise",
      "vanilla"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；部分醇类是香料过敏原，具体查最新法规。",
    "safetyInformation": "作为香料/研究材料；部分醇类是香料过敏原，具体查最新法规。",
    "allergens": [
      "茴香醇（欧盟香料过敏原标示清单，具体以最新法规为准）"
    ],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "茴香醇的常见气味描述为茴香、花香、甜、香草。它天然存在于花卉、香脂、木质与部分精油；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 7738 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柔和花香、青绿与香脂底。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/7738.png"
  },
  {
    "id": "3-phenyl-1-propanol",
    "name": "苯丙醇",
    "nameZh": "苯丙醇",
    "englishName": "3-Phenyl-1-Propanol",
    "nameEn": "3-Phenyl-1-Propanol",
    "synonyms": [],
    "CAS": "122-97-4",
    "cas": "122-97-4",
    "CID": 31234,
    "cid": 31234,
    "molecularFormula": "C9H12O",
    "formula": "C9H12O",
    "molecularWeight": "136.19",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "3-phenylpropan-1-ol",
    "iupacName": "3-phenylpropan-1-ol",
    "chemicalClass": "醇类",
    "subcategory": "芳香醇/萜烯醇",
    "odorProfile": [
      "花香",
      "香脂",
      "甜",
      "微辛"
    ],
    "odorDescription": [
      "花香",
      "香脂",
      "甜",
      "微辛"
    ],
    "odorFamily": "floral",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "花卉、香脂、木质与部分精油"
    ],
    "commercialProduction": "天然存在；商品可合成/分离。",
    "productionMethod": "天然存在；商品可合成/分离。",
    "fragranceFamilies": [
      "floral",
      "green"
    ],
    "perfumeryRole": [
      "花香",
      "中调",
      "溶剂/定香辅助"
    ],
    "relatedMaterials": [
      "rose-damascena",
      "benzoin-siam"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；部分醇类是香料过敏原，具体查最新法规。",
    "safetyInformation": "作为香料/研究材料；部分醇类是香料过敏原，具体查最新法规。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "苯丙醇的常见气味描述为花香、香脂、甜、微辛。它天然存在于花卉、香脂、木质与部分精油；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 31234 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柔和花香、青绿与香脂底。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/31234.png"
  },
  {
    "id": "dihydromyrcenol",
    "name": "二氢月桂烯醇",
    "nameZh": "二氢月桂烯醇",
    "englishName": "Dihydromyrcenol",
    "nameEn": "Dihydromyrcenol",
    "synonyms": [],
    "CAS": "53219-21-9",
    "cas": "53219-21-9",
    "CID": 29096,
    "cid": 29096,
    "molecularFormula": "C10H20O",
    "formula": "C10H20O",
    "molecularWeight": "156.26",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "2,6-dimethyloct-7-en-2-ol",
    "iupacName": "2,6-dimethyloct-7-en-2-ol",
    "chemicalClass": "醇类",
    "subcategory": "芳香醇/萜烯醇",
    "odorProfile": [
      "清新",
      "柑橘",
      "花香",
      "皂感"
    ],
    "odorDescription": [
      "清新",
      "柑橘",
      "花香",
      "皂感"
    ],
    "odorFamily": "citrus",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "花卉、香脂、木质与部分精油"
    ],
    "commercialProduction": "天然存在；商品可合成/分离。",
    "productionMethod": "天然存在；商品可合成/分离。",
    "fragranceFamilies": [
      "citrus",
      "floral"
    ],
    "perfumeryRole": [
      "清新/皂感",
      "前调",
      "现代男香"
    ],
    "relatedMaterials": [
      "bergamot",
      "lavender"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "商品规格/异构体影响气味；具体法规按最新标准。",
    "safetyInformation": "商品规格/异构体影响气味；具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "二氢月桂烯醇的常见气味描述为清新、柑橘、花香、皂感。它天然存在于花卉、香脂、木质与部分精油；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 29096 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合柔和花香、青绿与香脂底。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/29096.png"
  },
  {
    "id": "geranyl-acetate",
    "name": "乙酸香叶酯",
    "nameZh": "乙酸香叶酯",
    "englishName": "Geranyl Acetate",
    "nameEn": "Geranyl Acetate",
    "synonyms": [],
    "CAS": "105-87-3",
    "cas": "105-87-3",
    "CID": 1549026,
    "cid": 1549026,
    "molecularFormula": "C12H20O2",
    "formula": "C12H20O2",
    "molecularWeight": "196.29",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "[(2E)-3,7-dimethylocta-2,6-dienyl] acetate",
    "iupacName": "[(2E)-3,7-dimethylocta-2,6-dienyl] acetate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "玫瑰",
      "花香",
      "柑橘",
      "甜"
    ],
    "odorDescription": [
      "玫瑰",
      "花香",
      "柑橘",
      "甜"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "rose-damascena",
      "neroli"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "乙酸香叶酯的常见气味描述为玫瑰、花香、柑橘、甜。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 1549026 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/1549026.png"
  },
  {
    "id": "neryl-acetate",
    "name": "乙酸橙花酯",
    "nameZh": "乙酸橙花酯",
    "englishName": "Neryl Acetate",
    "nameEn": "Neryl Acetate",
    "synonyms": [],
    "CAS": "141-12-8",
    "cas": "141-12-8",
    "CID": 1549025,
    "cid": 1549025,
    "molecularFormula": "C12H20O2",
    "formula": "C12H20O2",
    "molecularWeight": "196.29",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "[(2Z)-3,7-dimethylocta-2,6-dienyl] acetate",
    "iupacName": "[(2Z)-3,7-dimethylocta-2,6-dienyl] acetate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "橙花",
      "玫瑰",
      "柑橘",
      "花香"
    ],
    "odorDescription": [
      "橙花",
      "玫瑰",
      "柑橘",
      "花香"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "neroli",
      "rose-damascena"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "乙酸橙花酯的常见气味描述为橙花、玫瑰、柑橘、花香。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 1549025 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/1549025.png"
  },
  {
    "id": "phenethyl-acetate",
    "name": "乙酸苯乙酯",
    "nameZh": "乙酸苯乙酯",
    "englishName": "Phenethyl Acetate",
    "nameEn": "Phenethyl Acetate",
    "synonyms": [],
    "CAS": "103-45-7",
    "cas": "103-45-7",
    "CID": 7654,
    "cid": 7654,
    "molecularFormula": "C10H12O2",
    "formula": "C10H12O2",
    "molecularWeight": "164.20",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "2-phenylethyl acetate",
    "iupacName": "2-phenylethyl acetate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "玫瑰",
      "蜂蜜",
      "果香",
      "花香"
    ],
    "odorDescription": [
      "玫瑰",
      "蜂蜜",
      "果香",
      "花香"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "rose-damascena",
      "honey"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "乙酸苯乙酯的常见气味描述为玫瑰、蜂蜜、果香、花香。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 7654 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/7654.png"
  },
  {
    "id": "cinnamyl-acetate",
    "name": "乙酸肉桂酯",
    "nameZh": "乙酸肉桂酯",
    "englishName": "Cinnamyl Acetate",
    "nameEn": "Cinnamyl Acetate",
    "synonyms": [],
    "CAS": "103-54-8",
    "cas": "103-54-8",
    "CID": 5282110,
    "cid": 5282110,
    "molecularFormula": "C11H12O2",
    "formula": "C11H12O2",
    "molecularWeight": "176.21",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "[(E)-3-phenylprop-2-enyl] acetate",
    "iupacName": "[(E)-3-phenylprop-2-enyl] acetate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "肉桂",
      "花香",
      "甜",
      "辛香"
    ],
    "odorDescription": [
      "肉桂",
      "花香",
      "甜",
      "辛香"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "cinnamon",
      "benzoin-siam"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "乙酸肉桂酯的常见气味描述为肉桂、花香、甜、辛香。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 5282110 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/5282110.png"
  },
  {
    "id": "bornyl-acetate",
    "name": "乙酸龙脑酯",
    "nameZh": "乙酸龙脑酯",
    "englishName": "Bornyl Acetate",
    "nameEn": "Bornyl Acetate",
    "synonyms": [],
    "CAS": "5655-61-8",
    "cas": "5655-61-8",
    "CID": 93009,
    "cid": 93009,
    "molecularFormula": "C12H20O2",
    "formula": "C12H20O2",
    "molecularWeight": "196.29",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "[(1S,2R,4S)-1,7,7-trimethyl-2-bicyclo[2.2.1]heptanyl] acetate",
    "iupacName": "[(1S,2R,4S)-1,7,7-trimethyl-2-bicyclo[2.2.1]heptanyl] acetate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "松木",
      "樟脑",
      "草本",
      "树脂"
    ],
    "odorDescription": [
      "松木",
      "樟脑",
      "草本",
      "树脂"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "rosemary",
      "cypress"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "乙酸龙脑酯的常见气味描述为松木、樟脑、草本、树脂。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 93009 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/93009.png"
  },
  {
    "id": "isobornyl-acetate",
    "name": "乙酸异龙脑酯",
    "nameZh": "乙酸异龙脑酯",
    "englishName": "Isobornyl Acetate",
    "nameEn": "Isobornyl Acetate",
    "synonyms": [],
    "CAS": "125-12-2",
    "cas": "125-12-2",
    "CID": 637531,
    "cid": 637531,
    "molecularFormula": "C12H20O2",
    "formula": "C12H20O2",
    "molecularWeight": "196.29",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "[(1R,2R,4R)-1,7,7-trimethyl-2-bicyclo[2.2.1]heptanyl] acetate",
    "iupacName": "[(1R,2R,4R)-1,7,7-trimethyl-2-bicyclo[2.2.1]heptanyl] acetate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "松木",
      "樟脑",
      "树脂",
      "草本"
    ],
    "odorDescription": [
      "松木",
      "樟脑",
      "树脂",
      "草本"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "rosemary",
      "cypress"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "乙酸异龙脑酯的常见气味描述为松木、樟脑、树脂、草本。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 637531 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/637531.png"
  },
  {
    "id": "amyl-acetate",
    "name": "乙酸戊酯",
    "nameZh": "乙酸戊酯",
    "englishName": "Amyl Acetate",
    "nameEn": "Amyl Acetate",
    "synonyms": [],
    "CAS": "628-63-7",
    "cas": "628-63-7",
    "CID": 12348,
    "cid": 12348,
    "molecularFormula": "C7H14O2",
    "formula": "C7H14O2",
    "molecularWeight": "130.18",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "pentyl acetate",
    "iupacName": "pentyl acetate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "香蕉",
      "梨",
      "果香",
      "溶剂"
    ],
    "odorDescription": [
      "香蕉",
      "梨",
      "果香",
      "溶剂"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "sweet-orange",
      "cocoa"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "乙酸戊酯的常见气味描述为香蕉、梨、果香、溶剂。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 12348 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/12348.png"
  },
  {
    "id": "ethyl-hexanoate",
    "name": "己酸乙酯",
    "nameZh": "己酸乙酯",
    "englishName": "Ethyl Hexanoate",
    "nameEn": "Ethyl Hexanoate",
    "synonyms": [],
    "CAS": "123-66-0",
    "cas": "123-66-0",
    "CID": 31265,
    "cid": 31265,
    "molecularFormula": "C8H16O2",
    "formula": "C8H16O2",
    "molecularWeight": "144.21",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "ethyl hexanoate",
    "iupacName": "ethyl hexanoate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "菠萝",
      "果香",
      "乳脂",
      "甜"
    ],
    "odorDescription": [
      "菠萝",
      "果香",
      "乳脂",
      "甜"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "sweet-orange",
      "cocoa"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "己酸乙酯的常见气味描述为菠萝、果香、乳脂、甜。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 31265 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/31265.png"
  },
  {
    "id": "ethyl-2-methylbutyrate",
    "name": "2-甲基丁酸乙酯",
    "nameZh": "2-甲基丁酸乙酯",
    "englishName": "Ethyl 2-Methylbutyrate",
    "nameEn": "Ethyl 2-Methylbutyrate",
    "synonyms": [],
    "CAS": "7452-79-1",
    "cas": "7452-79-1",
    "CID": 24020,
    "cid": 24020,
    "molecularFormula": "C7H14O2",
    "formula": "C7H14O2",
    "molecularWeight": "130.18",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "ethyl 2-methylbutanoate",
    "iupacName": "ethyl 2-methylbutanoate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "苹果",
      "葡萄",
      "果香",
      "甜"
    ],
    "odorDescription": [
      "苹果",
      "葡萄",
      "果香",
      "甜"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "sweet-orange",
      "cocoa"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "2-甲基丁酸乙酯的常见气味描述为苹果、葡萄、果香、甜。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 24020 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/24020.png"
  },
  {
    "id": "methyl-benzoate",
    "name": "苯甲酸甲酯",
    "nameZh": "苯甲酸甲酯",
    "englishName": "Methyl Benzoate",
    "nameEn": "Methyl Benzoate",
    "synonyms": [],
    "CAS": "93-58-3",
    "cas": "93-58-3",
    "CID": 7150,
    "cid": 7150,
    "molecularFormula": "C8H8O2",
    "formula": "C8H8O2",
    "molecularWeight": "136.15",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "methyl benzoate",
    "iupacName": "methyl benzoate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "花香",
      "果香",
      "香脂",
      "甜"
    ],
    "odorDescription": [
      "花香",
      "果香",
      "香脂",
      "甜"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "ylang-ylang",
      "benzoin-siam"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "苯甲酸甲酯的常见气味描述为花香、果香、香脂、甜。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 7150 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/7150.png"
  },
  {
    "id": "ethyl-benzoate",
    "name": "苯甲酸乙酯",
    "nameZh": "苯甲酸乙酯",
    "englishName": "Ethyl Benzoate",
    "nameEn": "Ethyl Benzoate",
    "synonyms": [],
    "CAS": "93-89-0",
    "cas": "93-89-0",
    "CID": 7165,
    "cid": 7165,
    "molecularFormula": "C9H10O2",
    "formula": "C9H10O2",
    "molecularWeight": "150.17",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "ethyl benzoate",
    "iupacName": "ethyl benzoate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "花香",
      "香脂",
      "果香",
      "甜"
    ],
    "odorDescription": [
      "花香",
      "香脂",
      "果香",
      "甜"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "ylang-ylang",
      "benzoin-siam"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "苯甲酸乙酯的常见气味描述为花香、香脂、果香、甜。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 7165 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/7165.png"
  },
  {
    "id": "methyl-salicylate",
    "name": "水杨酸甲酯",
    "nameZh": "水杨酸甲酯",
    "englishName": "Methyl Salicylate",
    "nameEn": "Methyl Salicylate",
    "synonyms": [],
    "CAS": "119-36-8",
    "cas": "119-36-8",
    "CID": 4133,
    "cid": 4133,
    "molecularFormula": "C8H8O3",
    "formula": "C8H8O3",
    "molecularWeight": "152.15",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "methyl 2-hydroxybenzoate",
    "iupacName": "methyl 2-hydroxybenzoate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "冬青",
      "薄荷",
      "药感",
      "甜"
    ],
    "odorDescription": [
      "冬青",
      "薄荷",
      "药感",
      "甜"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "peppermint",
      "birch-bark"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "水杨酸甲酯可经皮肤吸收，误食有严重毒性风险；不可口服，儿童尤其危险。",
    "safetyInformation": "水杨酸甲酯可经皮肤吸收，误食有严重毒性风险；不可口服，儿童尤其危险。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "水杨酸甲酯的常见气味描述为冬青、薄荷、药感、甜。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 4133 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/4133.png"
  },
  {
    "id": "ethyl-salicylate",
    "name": "水杨酸乙酯",
    "nameZh": "水杨酸乙酯",
    "englishName": "Ethyl Salicylate",
    "nameEn": "Ethyl Salicylate",
    "synonyms": [],
    "CAS": "118-61-6",
    "cas": "118-61-6",
    "CID": 8365,
    "cid": 8365,
    "molecularFormula": "C9H10O3",
    "formula": "C9H10O3",
    "molecularWeight": "166.17",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "ethyl 2-hydroxybenzoate",
    "iupacName": "ethyl 2-hydroxybenzoate",
    "chemicalClass": "酯类",
    "subcategory": "脂肪族/芳香族酯",
    "odorProfile": [
      "冬青",
      "药感",
      "果香",
      "甜"
    ],
    "odorDescription": [
      "冬青",
      "药感",
      "果香",
      "甜"
    ],
    "odorFamily": "fruity",
    "volatility": "前调至中调",
    "notePosition": "前调至中调",
    "naturalOccurrence": [
      "水果、花卉、发酵与乳制品香气"
    ],
    "commercialProduction": "天然存在；工业上常由酯化合成。",
    "productionMethod": "天然存在；工业上常由酯化合成。",
    "fragranceFamilies": [
      "fruity",
      "floral"
    ],
    "perfumeryRole": [
      "果香",
      "前调",
      "花香果香"
    ],
    "relatedMaterials": [
      "peppermint",
      "birch-bark"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "citrus-accord"
    ],
    "relatedPerfumes": [],
    "safety": "水杨酸酯类误食有毒性风险；不可口服，避免高浓度皮肤接触。",
    "safetyInformation": "水杨酸酯类误食有毒性风险；不可口服，避免高浓度皮肤接触。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "水杨酸乙酯的常见气味描述为冬青、药感、果香、甜。它天然存在于水果、花卉、发酵与乳制品香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 8365 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合多汁水果、花香与干净前调。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/8365.png"
  },
  {
    "id": "gamma-nonalactone",
    "name": "γ-壬内酯",
    "nameZh": "γ-壬内酯",
    "englishName": "Gamma-Nonalactone",
    "nameEn": "Gamma-Nonalactone",
    "synonyms": [],
    "CAS": "104-61-0",
    "cas": "104-61-0",
    "CID": 7710,
    "cid": 7710,
    "molecularFormula": "C9H16O2",
    "formula": "C9H16O2",
    "molecularWeight": "156.22",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "5-pentyloxolan-2-one",
    "iupacName": "5-pentyloxolan-2-one",
    "chemicalClass": "内酯类",
    "subcategory": "γ/δ-内酯",
    "odorProfile": [
      "椰子",
      "奶油",
      "桃子",
      "甜"
    ],
    "odorDescription": [
      "椰子",
      "奶油",
      "桃子",
      "甜"
    ],
    "odorFamily": "fruity",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "桃、杏、椰子、乳制品与部分花卉"
    ],
    "commercialProduction": "天然存在；商品可合成。",
    "productionMethod": "天然存在；商品可合成。",
    "fragranceFamilies": [
      "fruity",
      "gourmand"
    ],
    "perfumeryRole": [
      "奶油果香",
      "中调",
      "圆润"
    ],
    "relatedMaterials": [
      "cocoa",
      "vanilla"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "vanilla-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "γ-壬内酯的常见气味描述为椰子、奶油、桃子、甜。它天然存在于桃、杏、椰子、乳制品与部分花卉；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 7710 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合奶油、桃子、椰奶与圆润果香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/7710.png"
  },
  {
    "id": "gamma-decalactone",
    "name": "γ-癸内酯",
    "nameZh": "γ-癸内酯",
    "englishName": "Gamma-Decalactone",
    "nameEn": "Gamma-Decalactone",
    "synonyms": [],
    "CAS": "706-14-9",
    "cas": "706-14-9",
    "CID": 12813,
    "cid": 12813,
    "molecularFormula": "C10H18O2",
    "formula": "C10H18O2",
    "molecularWeight": "170.25",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "5-hexyloxolan-2-one",
    "iupacName": "5-hexyloxolan-2-one",
    "chemicalClass": "内酯类",
    "subcategory": "γ/δ-内酯",
    "odorProfile": [
      "桃子",
      "奶油",
      "果香",
      "椰子"
    ],
    "odorDescription": [
      "桃子",
      "奶油",
      "果香",
      "椰子"
    ],
    "odorFamily": "fruity",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "桃、杏、椰子、乳制品与部分花卉"
    ],
    "commercialProduction": "天然存在；商品可合成。",
    "productionMethod": "天然存在；商品可合成。",
    "fragranceFamilies": [
      "fruity",
      "gourmand"
    ],
    "perfumeryRole": [
      "奶油果香",
      "中调",
      "圆润"
    ],
    "relatedMaterials": [
      "cocoa",
      "osmanthus"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "vanilla-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "γ-癸内酯的常见气味描述为桃子、奶油、果香、椰子。它天然存在于桃、杏、椰子、乳制品与部分花卉；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 12813 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合奶油、桃子、椰奶与圆润果香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/12813.png"
  },
  {
    "id": "delta-dodecalactone",
    "name": "δ-十二内酯",
    "nameZh": "δ-十二内酯",
    "englishName": "Delta-Dodecalactone",
    "nameEn": "Delta-Dodecalactone",
    "synonyms": [],
    "CAS": "713-95-1",
    "cas": "713-95-1",
    "CID": 12844,
    "cid": 12844,
    "molecularFormula": "C12H22O2",
    "formula": "C12H22O2",
    "molecularWeight": "198.30",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "6-heptyloxan-2-one",
    "iupacName": "6-heptyloxan-2-one",
    "chemicalClass": "内酯类",
    "subcategory": "γ/δ-内酯",
    "odorProfile": [
      "奶油",
      "果香",
      "麝香",
      "粉感"
    ],
    "odorDescription": [
      "奶油",
      "果香",
      "麝香",
      "粉感"
    ],
    "odorFamily": "fruity",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "桃、杏、椰子、乳制品与部分花卉"
    ],
    "commercialProduction": "天然存在；商品可合成。",
    "productionMethod": "天然存在；商品可合成。",
    "fragranceFamilies": [
      "fruity",
      "gourmand"
    ],
    "perfumeryRole": [
      "奶油果香",
      "中调",
      "圆润"
    ],
    "relatedMaterials": [
      "vanilla",
      "cocoa"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "vanilla-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "δ-十二内酯的常见气味描述为奶油、果香、麝香、粉感。它天然存在于桃、杏、椰子、乳制品与部分花卉；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 12844 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合奶油、桃子、椰奶与圆润果香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/12844.png"
  },
  {
    "id": "massoia-lactone",
    "name": "马索亚内酯",
    "nameZh": "马索亚内酯",
    "englishName": "Massoia Lactone",
    "nameEn": "Massoia Lactone",
    "synonyms": [],
    "CAS": "51154-96-2",
    "cas": "51154-96-2",
    "CID": 642793,
    "cid": 642793,
    "molecularFormula": "C10H16O2",
    "formula": "C10H16O2",
    "molecularWeight": "168.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(2R)-2-pentyl-2,3-dihydropyran-6-one",
    "iupacName": "(2R)-2-pentyl-2,3-dihydropyran-6-one",
    "chemicalClass": "内酯类",
    "subcategory": "γ/δ-内酯",
    "odorProfile": [
      "椰子",
      "奶油",
      "焦糖",
      "木质"
    ],
    "odorDescription": [
      "椰子",
      "奶油",
      "焦糖",
      "木质"
    ],
    "odorFamily": "fruity",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "桃、杏、椰子、乳制品与部分花卉"
    ],
    "commercialProduction": "天然存在；商品可合成。",
    "productionMethod": "天然存在；商品可合成。",
    "fragranceFamilies": [
      "fruity",
      "gourmand"
    ],
    "perfumeryRole": [
      "奶油果香",
      "中调",
      "圆润"
    ],
    "relatedMaterials": [
      "cocoa",
      "vanilla"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "vanilla-accord"
    ],
    "relatedPerfumes": [],
    "safety": "商品名/来源需核实；Massoia 树皮来源涉及保护与法规，具体以供应商资料为准。",
    "safetyInformation": "商品名/来源需核实；Massoia 树皮来源涉及保护与法规，具体以供应商资料为准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "马索亚内酯的常见气味描述为椰子、奶油、焦糖、木质。它天然存在于桃、杏、椰子、乳制品与部分花卉；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 642793 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合奶油、桃子、椰奶与圆润果香。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/642793.png"
  },
  {
    "id": "alpha-ionone",
    "name": "α-紫罗兰酮",
    "nameZh": "α-紫罗兰酮",
    "englishName": "Alpha-Ionone",
    "nameEn": "Alpha-Ionone",
    "synonyms": [],
    "CAS": "127-41-3",
    "cas": "127-41-3",
    "CID": 5282108,
    "cid": 5282108,
    "molecularFormula": "C13H20O",
    "formula": "C13H20O",
    "molecularWeight": "192.30",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(E)-4-(2,6,6-trimethylcyclohex-2-en-1-yl)but-3-en-2-one",
    "iupacName": "(E)-4-(2,6,6-trimethylcyclohex-2-en-1-yl)but-3-en-2-one",
    "chemicalClass": "酮类",
    "subcategory": "紫罗兰酮/大马酮/茉莉酮类",
    "odorProfile": [
      "紫罗兰",
      "鸢尾",
      "粉质",
      "木质"
    ],
    "odorDescription": [
      "紫罗兰",
      "鸢尾",
      "粉质",
      "木质"
    ],
    "odorFamily": "floral",
    "volatility": "中调至后调",
    "notePosition": "中调至后调",
    "naturalOccurrence": [
      "玫瑰、鸢尾、紫罗兰、茶叶与果实"
    ],
    "commercialProduction": "天然存在微量；商品多为合成/分离。",
    "productionMethod": "天然存在微量；商品多为合成/分离。",
    "fragranceFamilies": [
      "floral",
      "woody"
    ],
    "perfumeryRole": [
      "花香深度",
      "粉质/木质",
      "中调"
    ],
    "relatedMaterials": [
      "orris",
      "violet-leaf"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "α-紫罗兰酮的常见气味描述为紫罗兰、鸢尾、粉质、木质。它天然存在于玫瑰、鸢尾、紫罗兰、茶叶与果实；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 5282108 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合粉质花香、熟果、茶与木质深度。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/5282108.png"
  },
  {
    "id": "dihydro-beta-ionone",
    "name": "二氢-β-紫罗兰酮",
    "nameZh": "二氢-β-紫罗兰酮",
    "englishName": "Dihydro-Beta-Ionone",
    "nameEn": "Dihydro-Beta-Ionone",
    "synonyms": [],
    "CAS": "17283-81-7",
    "cas": "17283-81-7",
    "CID": 519382,
    "cid": 519382,
    "molecularFormula": "C13H22O",
    "formula": "C13H22O",
    "molecularWeight": "194.31",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "4-(2,6,6-trimethylcyclohexen-1-yl)butan-2-one",
    "iupacName": "4-(2,6,6-trimethylcyclohexen-1-yl)butan-2-one",
    "chemicalClass": "酮类",
    "subcategory": "紫罗兰酮/大马酮/茉莉酮类",
    "odorProfile": [
      "紫罗兰",
      "木质",
      "果香",
      "粉质"
    ],
    "odorDescription": [
      "紫罗兰",
      "木质",
      "果香",
      "粉质"
    ],
    "odorFamily": "floral",
    "volatility": "中调至后调",
    "notePosition": "中调至后调",
    "naturalOccurrence": [
      "玫瑰、鸢尾、紫罗兰、茶叶与果实"
    ],
    "commercialProduction": "天然存在微量；商品多为合成/分离。",
    "productionMethod": "天然存在微量；商品多为合成/分离。",
    "fragranceFamilies": [
      "floral",
      "woody"
    ],
    "perfumeryRole": [
      "花香深度",
      "粉质/木质",
      "中调"
    ],
    "relatedMaterials": [
      "orris",
      "rose-damascena"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "二氢-β-紫罗兰酮的常见气味描述为紫罗兰、木质、果香、粉质。它天然存在于玫瑰、鸢尾、紫罗兰、茶叶与果实；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 519382 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合粉质花香、熟果、茶与木质深度。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/519382.png"
  },
  {
    "id": "beta-damascone",
    "name": "β-大马烯酮",
    "nameZh": "β-大马烯酮",
    "englishName": "Beta-Damascone",
    "nameEn": "Beta-Damascone",
    "synonyms": [],
    "CAS": "35044-68-9",
    "cas": "35044-68-9",
    "CID": 32052,
    "cid": 32052,
    "molecularFormula": "C13H20O",
    "formula": "C13H20O",
    "molecularWeight": "192.30",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "1-(2,6,6-trimethylcyclohexen-1-yl)but-2-en-1-one",
    "iupacName": "1-(2,6,6-trimethylcyclohexen-1-yl)but-2-en-1-one",
    "chemicalClass": "酮类",
    "subcategory": "紫罗兰酮/大马酮/茉莉酮类",
    "odorProfile": [
      "玫瑰",
      "果香",
      "酒香",
      "甜"
    ],
    "odorDescription": [
      "玫瑰",
      "果香",
      "酒香",
      "甜"
    ],
    "odorFamily": "floral",
    "volatility": "中调至后调",
    "notePosition": "中调至后调",
    "naturalOccurrence": [
      "玫瑰、鸢尾、紫罗兰、茶叶与果实"
    ],
    "commercialProduction": "天然存在微量；商品多为合成/分离。",
    "productionMethod": "天然存在微量；商品多为合成/分离。",
    "fragranceFamilies": [
      "floral",
      "woody"
    ],
    "perfumeryRole": [
      "花香深度",
      "粉质/木质",
      "中调"
    ],
    "relatedMaterials": [
      "rose-damascena",
      "tea"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "β-大马烯酮的常见气味描述为玫瑰、果香、酒香、甜。它天然存在于玫瑰、鸢尾、紫罗兰、茶叶与果实；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 32052 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合粉质花香、熟果、茶与木质深度。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/32052.png"
  },
  {
    "id": "alpha-damascone",
    "name": "α-大马烯酮",
    "nameZh": "α-大马烯酮",
    "englishName": "Alpha-Damascone",
    "nameEn": "Alpha-Damascone",
    "synonyms": [],
    "CAS": "43052-87-5",
    "cas": "43052-87-5",
    "CID": 520506,
    "cid": 520506,
    "molecularFormula": "C13H20O",
    "formula": "C13H20O",
    "molecularWeight": "192.30",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "1-(2,6,6-trimethylcyclohex-2-en-1-yl)but-3-en-1-one",
    "iupacName": "1-(2,6,6-trimethylcyclohex-2-en-1-yl)but-3-en-1-one",
    "chemicalClass": "酮类",
    "subcategory": "紫罗兰酮/大马酮/茉莉酮类",
    "odorProfile": [
      "玫瑰",
      "果香",
      "花香",
      "甜"
    ],
    "odorDescription": [
      "玫瑰",
      "果香",
      "花香",
      "甜"
    ],
    "odorFamily": "floral",
    "volatility": "中调至后调",
    "notePosition": "中调至后调",
    "naturalOccurrence": [
      "玫瑰、鸢尾、紫罗兰、茶叶与果实"
    ],
    "commercialProduction": "天然存在微量；商品多为合成/分离。",
    "productionMethod": "天然存在微量；商品多为合成/分离。",
    "fragranceFamilies": [
      "floral",
      "woody"
    ],
    "perfumeryRole": [
      "花香深度",
      "粉质/木质",
      "中调"
    ],
    "relatedMaterials": [
      "rose-damascena",
      "tea"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "α-大马烯酮的常见气味描述为玫瑰、果香、花香、甜。它天然存在于玫瑰、鸢尾、紫罗兰、茶叶与果实；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 520506 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合粉质花香、熟果、茶与木质深度。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/520506.png"
  },
  {
    "id": "delta-damascone",
    "name": "δ-大马烯酮",
    "nameZh": "δ-大马烯酮",
    "englishName": "Delta-Damascone",
    "nameEn": "Delta-Damascone",
    "synonyms": [],
    "CAS": "57378-68-4",
    "cas": "57378-68-4",
    "CID": 5365916,
    "cid": 5365916,
    "molecularFormula": "C13H20O",
    "formula": "C13H20O",
    "molecularWeight": "192.30",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(E)-1-(2,6,6-trimethylcyclohex-3-en-1-yl)but-2-en-1-one",
    "iupacName": "(E)-1-(2,6,6-trimethylcyclohex-3-en-1-yl)but-2-en-1-one",
    "chemicalClass": "酮类",
    "subcategory": "紫罗兰酮/大马酮/茉莉酮类",
    "odorProfile": [
      "玫瑰",
      "果香",
      "烟草",
      "甜"
    ],
    "odorDescription": [
      "玫瑰",
      "果香",
      "烟草",
      "甜"
    ],
    "odorFamily": "floral",
    "volatility": "中调至后调",
    "notePosition": "中调至后调",
    "naturalOccurrence": [
      "玫瑰、鸢尾、紫罗兰、茶叶与果实"
    ],
    "commercialProduction": "天然存在微量；商品多为合成/分离。",
    "productionMethod": "天然存在微量；商品多为合成/分离。",
    "fragranceFamilies": [
      "floral",
      "woody"
    ],
    "perfumeryRole": [
      "花香深度",
      "粉质/木质",
      "中调"
    ],
    "relatedMaterials": [
      "rose-damascena",
      "tobacco"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "δ-大马烯酮的常见气味描述为玫瑰、果香、烟草、甜。它天然存在于玫瑰、鸢尾、紫罗兰、茶叶与果实；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 5365916 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合粉质花香、熟果、茶与木质深度。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/5365916.png"
  },
  {
    "id": "methyl-jasmonate",
    "name": "茉莉酸甲酯",
    "nameZh": "茉莉酸甲酯",
    "englishName": "Methyl Jasmonate",
    "nameEn": "Methyl Jasmonate",
    "synonyms": [],
    "CAS": "1211-29-6",
    "cas": "1211-29-6",
    "CID": 5281929,
    "cid": 5281929,
    "molecularFormula": "C13H20O3",
    "formula": "C13H20O3",
    "molecularWeight": "224.30",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "methyl 2-[(1R,2R)-3-oxo-2-[(Z)-pent-2-enyl]cyclopentyl]acetate",
    "iupacName": "methyl 2-[(1R,2R)-3-oxo-2-[(Z)-pent-2-enyl]cyclopentyl]acetate",
    "chemicalClass": "酮类",
    "subcategory": "紫罗兰酮/大马酮/茉莉酮类",
    "odorProfile": [
      "茉莉",
      "茶香",
      "花香",
      "绿色"
    ],
    "odorDescription": [
      "茉莉",
      "茶香",
      "花香",
      "绿色"
    ],
    "odorFamily": "floral",
    "volatility": "中调至后调",
    "notePosition": "中调至后调",
    "naturalOccurrence": [
      "玫瑰、鸢尾、紫罗兰、茶叶与果实"
    ],
    "commercialProduction": "天然存在微量；商品多为合成/分离。",
    "productionMethod": "天然存在微量；商品多为合成/分离。",
    "fragranceFamilies": [
      "floral",
      "green"
    ],
    "perfumeryRole": [
      "茉莉/茶香",
      "中调",
      "植物感"
    ],
    "relatedMaterials": [
      "jasmine-sambac",
      "tea"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "rose-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "茉莉酸甲酯的常见气味描述为茉莉、茶香、花香、绿色。它天然存在于玫瑰、鸢尾、紫罗兰、茶叶与果实；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 5281929 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合粉质花香、熟果、茶与木质深度。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/5281929.png"
  },
  {
    "id": "cyclopentadecanone",
    "name": "环十五酮",
    "nameZh": "环十五酮",
    "englishName": "Cyclopentadecanone",
    "nameEn": "Cyclopentadecanone",
    "synonyms": [],
    "CAS": "502-72-7",
    "cas": "502-72-7",
    "CID": 10409,
    "cid": 10409,
    "molecularFormula": "C15H28O",
    "formula": "C15H28O",
    "molecularWeight": "224.38",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "cyclopentadecanone",
    "iupacName": "cyclopentadecanone",
    "chemicalClass": "酮类",
    "subcategory": "紫罗兰酮/大马酮/茉莉酮类",
    "odorProfile": [
      "麝香",
      "粉感",
      "温暖",
      "皮肤"
    ],
    "odorDescription": [
      "麝香",
      "粉感",
      "温暖",
      "皮肤"
    ],
    "odorFamily": "musky",
    "volatility": "后调",
    "notePosition": "后调",
    "naturalOccurrence": [
      "玫瑰、鸢尾、紫罗兰、茶叶与果实"
    ],
    "commercialProduction": "天然存在微量；商品多为合成/分离。",
    "productionMethod": "天然存在微量；商品多为合成/分离。",
    "fragranceFamilies": [
      "musky"
    ],
    "perfumeryRole": [
      "大环麝香",
      "后调",
      "定香"
    ],
    "relatedMaterials": [
      "musk"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "musk-accord"
    ],
    "relatedPerfumes": [],
    "safety": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "safetyInformation": "作为香料/研究材料；高浓度可刺激，具体法规按最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "环十五酮的常见气味描述为麝香、粉感、温暖、皮肤。它天然存在于玫瑰、鸢尾、紫罗兰、茶叶与果实；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 10409 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合粉质花香、熟果、茶与木质深度。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/10409.png"
  },
  {
    "id": "civetone",
    "name": "灵猫酮",
    "nameZh": "灵猫酮",
    "englishName": "Civetone",
    "nameEn": "Civetone",
    "synonyms": [],
    "CAS": "542-46-1",
    "cas": "542-46-1",
    "CID": 5315941,
    "cid": 5315941,
    "molecularFormula": "C17H30O",
    "formula": "C17H30O",
    "molecularWeight": "250.4",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(9Z)-cycloheptadec-9-en-1-one",
    "iupacName": "(9Z)-cycloheptadec-9-en-1-one",
    "chemicalClass": "酮类",
    "subcategory": "紫罗兰酮/大马酮/茉莉酮类",
    "odorProfile": [
      "动物",
      "麝香",
      "皮革",
      "温暖"
    ],
    "odorDescription": [
      "动物",
      "麝香",
      "皮革",
      "温暖"
    ],
    "odorFamily": "musky",
    "volatility": "后调",
    "notePosition": "后调",
    "naturalOccurrence": [
      "玫瑰、鸢尾、紫罗兰、茶叶与果实"
    ],
    "commercialProduction": "天然存在微量；商品多为合成/分离。",
    "productionMethod": "天然存在微量；商品多为合成/分离。",
    "fragranceFamilies": [
      "musky",
      "leather"
    ],
    "perfumeryRole": [
      "历史动物麝香",
      "后调",
      "动物感"
    ],
    "relatedMaterials": [
      "civet",
      "musk"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "musk-accord"
    ],
    "relatedPerfumes": [],
    "safety": "历史动物来源香料；现代使用合成替代。不得鼓励获取灵猫分泌物。",
    "safetyInformation": "历史动物来源香料；现代使用合成替代。不得鼓励获取灵猫分泌物。",
    "allergens": [],
    "regulatoryNotes": "历史/动物保护资料；现代商业多为替代材料。",
    "description": "灵猫酮的常见气味描述为动物、麝香、皮革、温暖。它天然存在于玫瑰、鸢尾、紫罗兰、茶叶与果实；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 5315941 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合粉质花香、熟果、茶与木质深度。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/5315941.png"
  },
  {
    "id": "methyleugenol",
    "name": "甲基丁香酚",
    "nameZh": "甲基丁香酚",
    "englishName": "Methyleugenol",
    "nameEn": "Methyleugenol",
    "synonyms": [],
    "CAS": "93-15-2",
    "cas": "93-15-2",
    "CID": 7127,
    "cid": 7127,
    "molecularFormula": "C11H14O2",
    "formula": "C11H14O2",
    "molecularWeight": "178.23",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "1,2-dimethoxy-4-prop-2-enylbenzene",
    "iupacName": "1,2-dimethoxy-4-prop-2-enylbenzene",
    "chemicalClass": "酚类/芳香族",
    "subcategory": "酚、醚、醛",
    "odorProfile": [
      "丁香",
      "辛香",
      "甜",
      "药感"
    ],
    "odorDescription": [
      "丁香",
      "辛香",
      "甜",
      "药感"
    ],
    "odorFamily": "spicy",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "丁香、香草、木质、烟熏与部分香脂"
    ],
    "commercialProduction": "天然存在；商品可分离/合成。",
    "productionMethod": "天然存在；商品可分离/合成。",
    "fragranceFamilies": [
      "spicy",
      "amber"
    ],
    "perfumeryRole": [
      "辛香/烟熏",
      "中调",
      "药感"
    ],
    "relatedMaterials": [
      "clove",
      "cinnamon"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "amber-accord"
    ],
    "relatedPerfumes": [],
    "safety": "甲基丁香酚有致癌性/基因毒性关注，化妆品受限；不得当普通推荐原料。",
    "safetyInformation": "甲基丁香酚有致癌性/基因毒性关注，化妆品受限；不得当普通推荐原料。",
    "allergens": [
      "甲基丁香酚相关法规状态需查最新清单"
    ],
    "regulatoryNotes": "IARC/法规限制；具体查最新标准。",
    "description": "甲基丁香酚的常见气味描述为丁香、辛香、甜、药感。它天然存在于丁香、香草、木质、烟熏与部分香脂；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 7127 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合丁香、烟熏、香草与药感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/7127.png"
  },
  {
    "id": "chavicol",
    "name": "对烯丙基苯酚",
    "nameZh": "对烯丙基苯酚",
    "englishName": "Chavicol",
    "nameEn": "Chavicol",
    "synonyms": [],
    "CAS": "501-92-8",
    "cas": "501-92-8",
    "CID": 68148,
    "cid": 68148,
    "molecularFormula": "C9H10O",
    "formula": "C9H10O",
    "molecularWeight": "134.17",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "4-prop-2-enylphenol",
    "iupacName": "4-prop-2-enylphenol",
    "chemicalClass": "酚类/芳香族",
    "subcategory": "酚、醚、醛",
    "odorProfile": [
      "丁香",
      "辛香",
      "药感",
      "温暖"
    ],
    "odorDescription": [
      "丁香",
      "辛香",
      "药感",
      "温暖"
    ],
    "odorFamily": "spicy",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "丁香、香草、木质、烟熏与部分香脂"
    ],
    "commercialProduction": "天然存在；商品可分离/合成。",
    "productionMethod": "天然存在；商品可分离/合成。",
    "fragranceFamilies": [
      "spicy",
      "amber"
    ],
    "perfumeryRole": [
      "辛香/烟熏",
      "中调",
      "药感"
    ],
    "relatedMaterials": [
      "clove"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "amber-accord"
    ],
    "relatedPerfumes": [],
    "safety": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "safetyInformation": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "对烯丙基苯酚的常见气味描述为丁香、辛香、药感、温暖。它天然存在于丁香、香草、木质、烟熏与部分香脂；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 68148 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合丁香、烟熏、香草与药感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/68148.png"
  },
  {
    "id": "estragole",
    "name": "草蒿脑",
    "nameZh": "草蒿脑",
    "englishName": "Estragole",
    "nameEn": "Estragole",
    "synonyms": [],
    "CAS": "140-67-0",
    "cas": "140-67-0",
    "CID": 8815,
    "cid": 8815,
    "molecularFormula": "C10H12O",
    "formula": "C10H12O",
    "molecularWeight": "148.20",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "1-methoxy-4-prop-2-enylbenzene",
    "iupacName": "1-methoxy-4-prop-2-enylbenzene",
    "chemicalClass": "酚类/芳香族",
    "subcategory": "酚、醚、醛",
    "odorProfile": [
      "茴香",
      "甘草",
      "甜辛香",
      "药感"
    ],
    "odorDescription": [
      "茴香",
      "甘草",
      "甜辛香",
      "药感"
    ],
    "odorFamily": "spicy",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "丁香、香草、木质、烟熏与部分香脂"
    ],
    "commercialProduction": "天然存在；商品可分离/合成。",
    "productionMethod": "天然存在；商品可分离/合成。",
    "fragranceFamilies": [
      "spicy",
      "amber"
    ],
    "perfumeryRole": [
      "辛香/烟熏",
      "中调",
      "药感"
    ],
    "relatedMaterials": [
      "star-anise"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "amber-accord"
    ],
    "relatedPerfumes": [],
    "safety": "草蒿脑有基因毒性关注，食品/化妆品受限；不得当普通推荐原料。",
    "safetyInformation": "草蒿脑有基因毒性关注，食品/化妆品受限；不得当普通推荐原料。",
    "allergens": [],
    "regulatoryNotes": "法规/毒理限制；具体查最新标准。",
    "description": "草蒿脑的常见气味描述为茴香、甘草、甜辛香、药感。它天然存在于丁香、香草、木质、烟熏与部分香脂；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 8815 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合丁香、烟熏、香草与药感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/8815.png"
  },
  {
    "id": "guaiacol",
    "name": "愈创木酚",
    "nameZh": "愈创木酚",
    "englishName": "Guaiacol",
    "nameEn": "Guaiacol",
    "synonyms": [],
    "CAS": "90-05-1",
    "cas": "90-05-1",
    "CID": 460,
    "cid": 460,
    "molecularFormula": "C7H8O2",
    "formula": "C7H8O2",
    "molecularWeight": "124.14",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "2-methoxyphenol",
    "iupacName": "2-methoxyphenol",
    "chemicalClass": "酚类/芳香族",
    "subcategory": "酚、醚、醛",
    "odorProfile": [
      "烟熏",
      "药感",
      "木质",
      "焦油"
    ],
    "odorDescription": [
      "烟熏",
      "药感",
      "木质",
      "焦油"
    ],
    "odorFamily": "smoky",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "丁香、香草、木质、烟熏与部分香脂"
    ],
    "commercialProduction": "天然存在；商品可分离/合成。",
    "productionMethod": "天然存在；商品可分离/合成。",
    "fragranceFamilies": [
      "smoky",
      "woody"
    ],
    "perfumeryRole": [
      "烟熏/药感",
      "后调",
      "皮革/焦油"
    ],
    "relatedMaterials": [
      "guaiacwood",
      "birch-bark"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "tobacco-accord"
    ],
    "relatedPerfumes": [],
    "safety": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "safetyInformation": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "愈创木酚的常见气味描述为烟熏、药感、木质、焦油。它天然存在于丁香、香草、木质、烟熏与部分香脂；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 460 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合丁香、烟熏、香草与药感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/460.png"
  },
  {
    "id": "creosol",
    "name": "甲基愈创木酚",
    "nameZh": "甲基愈创木酚",
    "englishName": "Creosol",
    "nameEn": "Creosol",
    "synonyms": [],
    "CAS": "93-51-6",
    "cas": "93-51-6",
    "CID": 7144,
    "cid": 7144,
    "molecularFormula": "C8H10O2",
    "formula": "C8H10O2",
    "molecularWeight": "138.16",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "2-methoxy-4-methylphenol",
    "iupacName": "2-methoxy-4-methylphenol",
    "chemicalClass": "酚类/芳香族",
    "subcategory": "酚、醚、醛",
    "odorProfile": [
      "烟熏",
      "药感",
      "木质",
      "焦油"
    ],
    "odorDescription": [
      "烟熏",
      "药感",
      "木质",
      "焦油"
    ],
    "odorFamily": "smoky",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "丁香、香草、木质、烟熏与部分香脂"
    ],
    "commercialProduction": "天然存在；商品可分离/合成。",
    "productionMethod": "天然存在；商品可分离/合成。",
    "fragranceFamilies": [
      "smoky",
      "woody"
    ],
    "perfumeryRole": [
      "烟熏/药感",
      "后调"
    ],
    "relatedMaterials": [
      "guaiacwood",
      "birch-bark"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "tobacco-accord"
    ],
    "relatedPerfumes": [],
    "safety": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "safetyInformation": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "甲基愈创木酚的常见气味描述为烟熏、药感、木质、焦油。它天然存在于丁香、香草、木质、烟熏与部分香脂；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 7144 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合丁香、烟熏、香草与药感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/7144.png"
  },
  {
    "id": "isovanillin",
    "name": "异香兰素",
    "nameZh": "异香兰素",
    "englishName": "Isovanillin",
    "nameEn": "Isovanillin",
    "synonyms": [],
    "CAS": "621-59-0",
    "cas": "621-59-0",
    "CID": 12127,
    "cid": 12127,
    "molecularFormula": "C8H8O3",
    "formula": "C8H8O3",
    "molecularWeight": "152.15",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "3-hydroxy-4-methoxybenzaldehyde",
    "iupacName": "3-hydroxy-4-methoxybenzaldehyde",
    "chemicalClass": "酚类/芳香族",
    "subcategory": "酚、醚、醛",
    "odorProfile": [
      "香草",
      "甜",
      "粉感",
      "微药"
    ],
    "odorDescription": [
      "香草",
      "甜",
      "粉感",
      "微药"
    ],
    "odorFamily": "gourmand",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "丁香、香草、木质、烟熏与部分香脂"
    ],
    "commercialProduction": "天然存在；商品可分离/合成。",
    "productionMethod": "天然存在；商品可分离/合成。",
    "fragranceFamilies": [
      "gourmand",
      "amber"
    ],
    "perfumeryRole": [
      "香草/甜香",
      "后调"
    ],
    "relatedMaterials": [
      "vanilla"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "vanilla-accord"
    ],
    "relatedPerfumes": [],
    "safety": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "safetyInformation": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "异香兰素的常见气味描述为香草、甜、粉感、微药。它天然存在于丁香、香草、木质、烟熏与部分香脂；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 12127 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合丁香、烟熏、香草与药感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/12127.png"
  },
  {
    "id": "veratraldehyde",
    "name": "藜芦醛",
    "nameZh": "藜芦醛",
    "englishName": "Veratraldehyde",
    "nameEn": "Veratraldehyde",
    "synonyms": [],
    "CAS": "120-14-9",
    "cas": "120-14-9",
    "CID": 8419,
    "cid": 8419,
    "molecularFormula": "C9H10O3",
    "formula": "C9H10O3",
    "molecularWeight": "166.17",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "3,4-dimethoxybenzaldehyde",
    "iupacName": "3,4-dimethoxybenzaldehyde",
    "chemicalClass": "酚类/芳香族",
    "subcategory": "酚、醚、醛",
    "odorProfile": [
      "香草",
      "甜",
      "木质",
      "粉感"
    ],
    "odorDescription": [
      "香草",
      "甜",
      "木质",
      "粉感"
    ],
    "odorFamily": "gourmand",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "丁香、香草、木质、烟熏与部分香脂"
    ],
    "commercialProduction": "天然存在；商品可分离/合成。",
    "productionMethod": "天然存在；商品可分离/合成。",
    "fragranceFamilies": [
      "gourmand",
      "woody"
    ],
    "perfumeryRole": [
      "香草/甜木",
      "后调"
    ],
    "relatedMaterials": [
      "vanilla"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "vanilla-accord"
    ],
    "relatedPerfumes": [],
    "safety": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "safetyInformation": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "藜芦醛的常见气味描述为香草、甜、木质、粉感。它天然存在于丁香、香草、木质、烟熏与部分香脂；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 8419 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合丁香、烟熏、香草与药感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/8419.png"
  },
  {
    "id": "piperonal",
    "name": "胡椒醛",
    "nameZh": "胡椒醛",
    "englishName": "Piperonal",
    "nameEn": "Piperonal",
    "synonyms": [],
    "CAS": "120-57-0",
    "cas": "120-57-0",
    "CID": 8438,
    "cid": 8438,
    "molecularFormula": "C8H6O3",
    "formula": "C8H6O3",
    "molecularWeight": "150.13",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "1,3-benzodioxole-5-carbaldehyde",
    "iupacName": "1,3-benzodioxole-5-carbaldehyde",
    "chemicalClass": "酚类/芳香族",
    "subcategory": "酚、醚、醛",
    "odorProfile": [
      "天芥菜",
      "花香",
      "甜",
      "粉感"
    ],
    "odorDescription": [
      "天芥菜",
      "花香",
      "甜",
      "粉感"
    ],
    "odorFamily": "floral",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "丁香、香草、木质、烟熏与部分香脂"
    ],
    "commercialProduction": "天然存在；商品可分离/合成。",
    "productionMethod": "天然存在；商品可分离/合成。",
    "fragranceFamilies": [
      "floral",
      "gourmand"
    ],
    "perfumeryRole": [
      "天芥菜/粉甜",
      "中调"
    ],
    "relatedMaterials": [
      "vanilla",
      "violet-leaf"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "vanilla-accord"
    ],
    "relatedPerfumes": [],
    "safety": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "safetyInformation": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "胡椒醛的常见气味描述为天芥菜、花香、甜、粉感。它天然存在于丁香、香草、木质、烟熏与部分香脂；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 8438 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合丁香、烟熏、香草与药感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/8438.png"
  },
  {
    "id": "safrole",
    "name": "黄樟素",
    "nameZh": "黄樟素",
    "englishName": "Safrole",
    "nameEn": "Safrole",
    "synonyms": [],
    "CAS": "94-59-7",
    "cas": "94-59-7",
    "CID": 5144,
    "cid": 5144,
    "molecularFormula": "C10H10O2",
    "formula": "C10H10O2",
    "molecularWeight": "162.18",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "5-prop-2-enyl-1,3-benzodioxole",
    "iupacName": "5-prop-2-enyl-1,3-benzodioxole",
    "chemicalClass": "酚类/芳香族",
    "subcategory": "酚、醚、醛",
    "odorProfile": [
      "黄樟",
      "辛香",
      "甜",
      "药感"
    ],
    "odorDescription": [
      "黄樟",
      "辛香",
      "甜",
      "药感"
    ],
    "odorFamily": "spicy",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "丁香、香草、木质、烟熏与部分香脂"
    ],
    "commercialProduction": "天然存在；商品可分离/合成。",
    "productionMethod": "天然存在；商品可分离/合成。",
    "fragranceFamilies": [
      "spicy",
      "amber"
    ],
    "perfumeryRole": [
      "辛香/烟熏",
      "中调",
      "药感"
    ],
    "relatedMaterials": [
      "cinnamon"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "amber-accord"
    ],
    "relatedPerfumes": [],
    "safety": "黄樟素有毒/致癌性关注，食品与化妆品受限；历史香料资料，不得当普通原料。",
    "safetyInformation": "黄樟素有毒/致癌性关注，食品与化妆品受限；历史香料资料，不得当普通原料。",
    "allergens": [],
    "regulatoryNotes": "历史/法规限制；不得推荐使用。",
    "description": "黄樟素的常见气味描述为黄樟、辛香、甜、药感。它天然存在于丁香、香草、木质、烟熏与部分香脂；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 5144 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合丁香、烟熏、香草与药感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/5144.png"
  },
  {
    "id": "benzyl-acetone",
    "name": "苄基丙酮",
    "nameZh": "苄基丙酮",
    "englishName": "Benzyl Acetone",
    "nameEn": "Benzyl Acetone",
    "synonyms": [],
    "CAS": "2550-26-7",
    "cas": "2550-26-7",
    "CID": 17355,
    "cid": 17355,
    "molecularFormula": "C10H12O",
    "formula": "C10H12O",
    "molecularWeight": "148.20",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "4-phenylbutan-2-one",
    "iupacName": "4-phenylbutan-2-one",
    "chemicalClass": "酚类/芳香族",
    "subcategory": "酚、醚、醛",
    "odorProfile": [
      "果香",
      "花香",
      "甜",
      "微辛"
    ],
    "odorDescription": [
      "果香",
      "花香",
      "甜",
      "微辛"
    ],
    "odorFamily": "spicy",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "丁香、香草、木质、烟熏与部分香脂"
    ],
    "commercialProduction": "天然存在；商品可分离/合成。",
    "productionMethod": "天然存在；商品可分离/合成。",
    "fragranceFamilies": [
      "spicy",
      "amber"
    ],
    "perfumeryRole": [
      "辛香/烟熏",
      "中调",
      "药感"
    ],
    "relatedMaterials": [
      "cocoa",
      "rose-damascena"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "amber-accord"
    ],
    "relatedPerfumes": [],
    "safety": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "safetyInformation": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "苄基丙酮的常见气味描述为果香、花香、甜、微辛。它天然存在于丁香、香草、木质、烟熏与部分香脂；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 17355 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合丁香、烟熏、香草与药感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/17355.png"
  },
  {
    "id": "methyl-cinnamate",
    "name": "肉桂酸甲酯",
    "nameZh": "肉桂酸甲酯",
    "englishName": "Methyl Cinnamate",
    "nameEn": "Methyl Cinnamate",
    "synonyms": [],
    "CAS": "103-26-4",
    "cas": "103-26-4",
    "CID": 637520,
    "cid": 637520,
    "molecularFormula": "C10H10O2",
    "formula": "C10H10O2",
    "molecularWeight": "162.18",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "methyl (E)-3-phenylprop-2-enoate",
    "iupacName": "methyl (E)-3-phenylprop-2-enoate",
    "chemicalClass": "酚类/芳香族",
    "subcategory": "酚、醚、醛",
    "odorProfile": [
      "肉桂",
      "果香",
      "香脂",
      "甜"
    ],
    "odorDescription": [
      "肉桂",
      "果香",
      "香脂",
      "甜"
    ],
    "odorFamily": "spicy",
    "volatility": "中调",
    "notePosition": "中调",
    "naturalOccurrence": [
      "丁香、香草、木质、烟熏与部分香脂"
    ],
    "commercialProduction": "天然存在；商品可分离/合成。",
    "productionMethod": "天然存在；商品可分离/合成。",
    "fragranceFamilies": [
      "spicy",
      "amber"
    ],
    "perfumeryRole": [
      "辛香/烟熏",
      "中调",
      "药感"
    ],
    "relatedMaterials": [
      "cinnamon",
      "benzoin-siam"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "amber-accord"
    ],
    "relatedPerfumes": [],
    "safety": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "safetyInformation": "酚类/芳香族可能刺激或致敏；部分物质有法规限制，具体查最新标准。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "肉桂酸甲酯的常见气味描述为肉桂、果香、香脂、甜。它天然存在于丁香、香草、木质、烟熏与部分香脂；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 637520 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合丁香、烟熏、香草与药感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/637520.png"
  },
  {
    "id": "skatole",
    "name": "粪臭素",
    "nameZh": "粪臭素",
    "englishName": "Skatole",
    "nameEn": "Skatole",
    "synonyms": [],
    "CAS": "83-34-1",
    "cas": "83-34-1",
    "CID": 6736,
    "cid": 6736,
    "molecularFormula": "C9H9N",
    "formula": "C9H9N",
    "molecularWeight": "131.17",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "3-methyl-1H-indole",
    "iupacName": "3-methyl-1H-indole",
    "chemicalClass": "含硫/含氮化合物",
    "subcategory": "极低阈值气味物",
    "odorProfile": [
      "动物",
      "粪便",
      "白花",
      "皮革"
    ],
    "odorDescription": [
      "动物",
      "粪便",
      "白花",
      "皮革"
    ],
    "odorFamily": "smoky",
    "volatility": "后调/极低阈值",
    "notePosition": "后调/极低阈值",
    "naturalOccurrence": [
      "咖啡、可可、肉类、泥土、海洋与发酵香气"
    ],
    "commercialProduction": "天然存在微量；商品多为合成。",
    "productionMethod": "天然存在微量；商品多为合成。",
    "fragranceFamilies": [
      "smoky",
      "gourmand"
    ],
    "perfumeryRole": [
      "极低阈值",
      "烟熏/肉香/泥土",
      "修饰"
    ],
    "relatedMaterials": [
      "civet",
      "jasmine-sambac"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "tobacco-accord"
    ],
    "relatedPerfumes": [],
    "safety": "极低阈值、强烈异味；高浓度刺激。仅作气味科学资料，不提供使用指导。",
    "safetyInformation": "极低阈值、强烈异味；高浓度刺激。仅作气味科学资料，不提供使用指导。",
    "allergens": [],
    "regulatoryNotes": "仅作资料；不得据本页自行配制。",
    "description": "粪臭素的常见气味描述为动物、粪便、白花、皮革。它天然存在于咖啡、可可、肉类、泥土、海洋与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 6736 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合烟熏、咖啡、泥土与极微量的真实感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/6736.png"
  },
  {
    "id": "pyridine",
    "name": "吡啶",
    "nameZh": "吡啶",
    "englishName": "Pyridine",
    "nameEn": "Pyridine",
    "synonyms": [],
    "CAS": "110-86-1",
    "cas": "110-86-1",
    "CID": 1049,
    "cid": 1049,
    "molecularFormula": "C5H5N",
    "formula": "C5H5N",
    "molecularWeight": "79.10",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "pyridine",
    "iupacName": "pyridine",
    "chemicalClass": "含硫/含氮化合物",
    "subcategory": "极低阈值气味物",
    "odorProfile": [
      "尖锐",
      "药感",
      "焦味",
      "溶剂"
    ],
    "odorDescription": [
      "尖锐",
      "药感",
      "焦味",
      "溶剂"
    ],
    "odorFamily": "smoky",
    "volatility": "后调/极低阈值",
    "notePosition": "后调/极低阈值",
    "naturalOccurrence": [
      "咖啡、可可、肉类、泥土、海洋与发酵香气"
    ],
    "commercialProduction": "天然存在微量；商品多为合成。",
    "productionMethod": "天然存在微量；商品多为合成。",
    "fragranceFamilies": [
      "smoky",
      "gourmand"
    ],
    "perfumeryRole": [
      "极低阈值",
      "烟熏/肉香/泥土",
      "修饰"
    ],
    "relatedMaterials": [
      "tobacco"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "tobacco-accord"
    ],
    "relatedPerfumes": [],
    "safety": "吡啶有毒/刺激，易燃；不可用于自行调香或皮肤。仅作化学资料。",
    "safetyInformation": "吡啶有毒/刺激，易燃；不可用于自行调香或皮肤。仅作化学资料。",
    "allergens": [],
    "regulatoryNotes": "危险化学品；非普通香料。",
    "description": "吡啶的常见气味描述为尖锐、药感、焦味、溶剂。它天然存在于咖啡、可可、肉类、泥土、海洋与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 1049 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合烟熏、咖啡、泥土与极微量的真实感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/1049.png"
  },
  {
    "id": "2-acetylthiazole",
    "name": "2-乙酰基噻唑",
    "nameZh": "2-乙酰基噻唑",
    "englishName": "2-Acetylthiazole",
    "nameEn": "2-Acetylthiazole",
    "synonyms": [],
    "CAS": "24295-03-2",
    "cas": "24295-03-2",
    "CID": 520108,
    "cid": 520108,
    "molecularFormula": "C5H5NOS",
    "formula": "C5H5NOS",
    "molecularWeight": "127.17",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "1-(1,3-thiazol-2-yl)ethanone",
    "iupacName": "1-(1,3-thiazol-2-yl)ethanone",
    "chemicalClass": "含硫/含氮化合物",
    "subcategory": "极低阈值气味物",
    "odorProfile": [
      "坚果",
      "烘焙",
      "肉香",
      "咖啡"
    ],
    "odorDescription": [
      "坚果",
      "烘焙",
      "肉香",
      "咖啡"
    ],
    "odorFamily": "smoky",
    "volatility": "后调/极低阈值",
    "notePosition": "后调/极低阈值",
    "naturalOccurrence": [
      "咖啡、可可、肉类、泥土、海洋与发酵香气"
    ],
    "commercialProduction": "天然存在微量；商品多为合成。",
    "productionMethod": "天然存在微量；商品多为合成。",
    "fragranceFamilies": [
      "smoky",
      "gourmand"
    ],
    "perfumeryRole": [
      "极低阈值",
      "烟熏/肉香/泥土",
      "修饰"
    ],
    "relatedMaterials": [
      "coffee",
      "cocoa"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "tobacco-accord"
    ],
    "relatedPerfumes": [],
    "safety": "极低阈值、可能刺激；不得据本页自行配制或食用。",
    "safetyInformation": "极低阈值、可能刺激；不得据本页自行配制或食用。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "2-乙酰基噻唑的常见气味描述为坚果、烘焙、肉香、咖啡。它天然存在于咖啡、可可、肉类、泥土、海洋与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 520108 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合烟熏、咖啡、泥土与极微量的真实感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/520108.png"
  },
  {
    "id": "dimethyl-sulfide",
    "name": "二甲基硫醚",
    "nameZh": "二甲基硫醚",
    "englishName": "Dimethyl Sulfide",
    "nameEn": "Dimethyl Sulfide",
    "synonyms": [],
    "CAS": "75-18-3",
    "cas": "75-18-3",
    "CID": 1068,
    "cid": 1068,
    "molecularFormula": "C2H6S",
    "formula": "C2H6S",
    "molecularWeight": "62.14",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "methylsulfanylmethane",
    "iupacName": "methylsulfanylmethane",
    "chemicalClass": "含硫/含氮化合物",
    "subcategory": "极低阈值气味物",
    "odorProfile": [
      "海洋",
      "蔬菜",
      "硫味",
      "极低阈值"
    ],
    "odorDescription": [
      "海洋",
      "蔬菜",
      "硫味",
      "极低阈值"
    ],
    "odorFamily": "smoky",
    "volatility": "后调/极低阈值",
    "notePosition": "后调/极低阈值",
    "naturalOccurrence": [
      "咖啡、可可、肉类、泥土、海洋与发酵香气"
    ],
    "commercialProduction": "天然存在微量；商品多为合成。",
    "productionMethod": "天然存在微量；商品多为合成。",
    "fragranceFamilies": [
      "smoky",
      "gourmand"
    ],
    "perfumeryRole": [
      "极低阈值",
      "烟熏/肉香/泥土",
      "修饰"
    ],
    "relatedMaterials": [
      "seaweed",
      "tea"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "tobacco-accord"
    ],
    "relatedPerfumes": [],
    "safety": "极低阈值、易燃/刺激；仅作资料，不可自行操作。",
    "safetyInformation": "极低阈值、易燃/刺激；仅作资料，不可自行操作。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "二甲基硫醚的常见气味描述为海洋、蔬菜、硫味、极低阈值。它天然存在于咖啡、可可、肉类、泥土、海洋与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 1068 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合烟熏、咖啡、泥土与极微量的真实感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/1068.png"
  },
  {
    "id": "dimethyl-trisulfide",
    "name": "二甲基三硫醚",
    "nameZh": "二甲基三硫醚",
    "englishName": "Dimethyl Trisulfide",
    "nameEn": "Dimethyl Trisulfide",
    "synonyms": [],
    "CAS": "3658-80-8",
    "cas": "3658-80-8",
    "CID": 19310,
    "cid": 19310,
    "molecularFormula": "C2H6S3",
    "formula": "C2H6S3",
    "molecularWeight": "126.3",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(methyltrisulfanyl)methane",
    "iupacName": "(methyltrisulfanyl)methane",
    "chemicalClass": "含硫/含氮化合物",
    "subcategory": "极低阈值气味物",
    "odorProfile": [
      "硫味",
      "洋葱",
      "肉香",
      "极低阈值"
    ],
    "odorDescription": [
      "硫味",
      "洋葱",
      "肉香",
      "极低阈值"
    ],
    "odorFamily": "smoky",
    "volatility": "后调/极低阈值",
    "notePosition": "后调/极低阈值",
    "naturalOccurrence": [
      "咖啡、可可、肉类、泥土、海洋与发酵香气"
    ],
    "commercialProduction": "天然存在微量；商品多为合成。",
    "productionMethod": "天然存在微量；商品多为合成。",
    "fragranceFamilies": [
      "smoky",
      "gourmand"
    ],
    "perfumeryRole": [
      "极低阈值",
      "烟熏/肉香/泥土",
      "修饰"
    ],
    "relatedMaterials": [
      "coffee",
      "cocoa"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "tobacco-accord"
    ],
    "relatedPerfumes": [],
    "safety": "极低阈值、强烈异味/刺激；仅作资料。",
    "safetyInformation": "极低阈值、强烈异味/刺激；仅作资料。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "二甲基三硫醚的常见气味描述为硫味、洋葱、肉香、极低阈值。它天然存在于咖啡、可可、肉类、泥土、海洋与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 19310 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合烟熏、咖啡、泥土与极微量的真实感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/19310.png"
  },
  {
    "id": "methional",
    "name": "蛋氨醛",
    "nameZh": "蛋氨醛",
    "englishName": "Methional",
    "nameEn": "Methional",
    "synonyms": [],
    "CAS": "3268-49-3",
    "cas": "3268-49-3",
    "CID": 18635,
    "cid": 18635,
    "molecularFormula": "C4H8OS",
    "formula": "C4H8OS",
    "molecularWeight": "104.17",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "3-methylsulfanylpropanal",
    "iupacName": "3-methylsulfanylpropanal",
    "chemicalClass": "含硫/含氮化合物",
    "subcategory": "极低阈值气味物",
    "odorProfile": [
      "熟土豆",
      "肉香",
      "烘焙",
      "硫味"
    ],
    "odorDescription": [
      "熟土豆",
      "肉香",
      "烘焙",
      "硫味"
    ],
    "odorFamily": "smoky",
    "volatility": "后调/极低阈值",
    "notePosition": "后调/极低阈值",
    "naturalOccurrence": [
      "咖啡、可可、肉类、泥土、海洋与发酵香气"
    ],
    "commercialProduction": "天然存在微量；商品多为合成。",
    "productionMethod": "天然存在微量；商品多为合成。",
    "fragranceFamilies": [
      "smoky",
      "gourmand"
    ],
    "perfumeryRole": [
      "极低阈值",
      "烟熏/肉香/泥土",
      "修饰"
    ],
    "relatedMaterials": [
      "cocoa",
      "coffee"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "tobacco-accord"
    ],
    "relatedPerfumes": [],
    "safety": "极低阈值、可刺激；仅作资料。",
    "safetyInformation": "极低阈值、可刺激；仅作资料。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "蛋氨醛的常见气味描述为熟土豆、肉香、烘焙、硫味。它天然存在于咖啡、可可、肉类、泥土、海洋与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 18635 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合烟熏、咖啡、泥土与极微量的真实感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/18635.png"
  },
  {
    "id": "2-acetyl-1-pyrroline",
    "name": "2-乙酰基-1-吡咯啉",
    "nameZh": "2-乙酰基-1-吡咯啉",
    "englishName": "2-Acetyl-1-Pyrroline",
    "nameEn": "2-Acetyl-1-Pyrroline",
    "synonyms": [],
    "CAS": "85213-22-5",
    "cas": "85213-22-5",
    "CID": 522834,
    "cid": 522834,
    "molecularFormula": "C6H9NO",
    "formula": "C6H9NO",
    "molecularWeight": "111.14",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "1-(3,4-dihydro-2H-pyrrol-5-yl)ethanone",
    "iupacName": "1-(3,4-dihydro-2H-pyrrol-5-yl)ethanone",
    "chemicalClass": "含硫/含氮化合物",
    "subcategory": "极低阈值气味物",
    "odorProfile": [
      "米饭",
      "坚果",
      "烘焙",
      "极低阈值"
    ],
    "odorDescription": [
      "米饭",
      "坚果",
      "烘焙",
      "极低阈值"
    ],
    "odorFamily": "smoky",
    "volatility": "后调/极低阈值",
    "notePosition": "后调/极低阈值",
    "naturalOccurrence": [
      "咖啡、可可、肉类、泥土、海洋与发酵香气"
    ],
    "commercialProduction": "天然存在微量；商品多为合成。",
    "productionMethod": "天然存在微量；商品多为合成。",
    "fragranceFamilies": [
      "smoky",
      "gourmand"
    ],
    "perfumeryRole": [
      "极低阈值",
      "烟熏/肉香/泥土",
      "修饰"
    ],
    "relatedMaterials": [
      "tea"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "tobacco-accord"
    ],
    "relatedPerfumes": [],
    "safety": "极低阈值；仅作气味科学资料，不提供操作指导。",
    "safetyInformation": "极低阈值；仅作气味科学资料，不提供操作指导。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "2-乙酰基-1-吡咯啉的常见气味描述为米饭、坚果、烘焙、极低阈值。它天然存在于咖啡、可可、肉类、泥土、海洋与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 522834 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合烟熏、咖啡、泥土与极微量的真实感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/522834.png"
  },
  {
    "id": "2-isopropyl-3-methoxypyrazine",
    "name": "2-异丙基-3-甲氧基吡嗪",
    "nameZh": "2-异丙基-3-甲氧基吡嗪",
    "englishName": "2-Isopropyl-3-Methoxypyrazine",
    "nameEn": "2-Isopropyl-3-Methoxypyrazine",
    "synonyms": [],
    "CAS": "25773-40-4",
    "cas": "25773-40-4",
    "CID": 33166,
    "cid": 33166,
    "molecularFormula": "C8H12N2O",
    "formula": "C8H12N2O",
    "molecularWeight": "152.19",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "2-methoxy-3-propan-2-ylpyrazine",
    "iupacName": "2-methoxy-3-propan-2-ylpyrazine",
    "chemicalClass": "含硫/含氮化合物",
    "subcategory": "极低阈值气味物",
    "odorProfile": [
      "青椒",
      "泥土",
      "绿色",
      "极低阈值"
    ],
    "odorDescription": [
      "青椒",
      "泥土",
      "绿色",
      "极低阈值"
    ],
    "odorFamily": "smoky",
    "volatility": "后调/极低阈值",
    "notePosition": "后调/极低阈值",
    "naturalOccurrence": [
      "咖啡、可可、肉类、泥土、海洋与发酵香气"
    ],
    "commercialProduction": "天然存在微量；商品多为合成。",
    "productionMethod": "天然存在微量；商品多为合成。",
    "fragranceFamilies": [
      "smoky",
      "gourmand"
    ],
    "perfumeryRole": [
      "极低阈值",
      "烟熏/肉香/泥土",
      "修饰"
    ],
    "relatedMaterials": [
      "black-pepper"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "tobacco-accord"
    ],
    "relatedPerfumes": [],
    "safety": "极低阈值；高浓度刺激。仅作资料。",
    "safetyInformation": "极低阈值；高浓度刺激。仅作资料。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "2-异丙基-3-甲氧基吡嗪的常见气味描述为青椒、泥土、绿色、极低阈值。它天然存在于咖啡、可可、肉类、泥土、海洋与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 33166 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合烟熏、咖啡、泥土与极微量的真实感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/33166.png"
  },
  {
    "id": "2-methylisoborneol",
    "name": "2-甲基异冰片",
    "nameZh": "2-甲基异冰片",
    "englishName": "2-Methylisoborneol",
    "nameEn": "2-Methylisoborneol",
    "synonyms": [],
    "CAS": "2371-42-8",
    "cas": "2371-42-8",
    "CID": 11062802,
    "cid": 11062802,
    "molecularFormula": "C11H20O",
    "formula": "C11H20O",
    "molecularWeight": "168.28",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "(1R,2R,4R)-1,2,7,7-tetramethylbicyclo[2.2.1]heptan-2-ol",
    "iupacName": "(1R,2R,4R)-1,2,7,7-tetramethylbicyclo[2.2.1]heptan-2-ol",
    "chemicalClass": "含硫/含氮化合物",
    "subcategory": "极低阈值气味物",
    "odorProfile": [
      "泥土",
      "霉味",
      "樟脑",
      "极低阈值"
    ],
    "odorDescription": [
      "泥土",
      "霉味",
      "樟脑",
      "极低阈值"
    ],
    "odorFamily": "smoky",
    "volatility": "后调/极低阈值",
    "notePosition": "后调/极低阈值",
    "naturalOccurrence": [
      "咖啡、可可、肉类、泥土、海洋与发酵香气"
    ],
    "commercialProduction": "天然存在微量；商品多为合成。",
    "productionMethod": "天然存在微量；商品多为合成。",
    "fragranceFamilies": [
      "smoky",
      "gourmand"
    ],
    "perfumeryRole": [
      "极低阈值",
      "烟熏/肉香/泥土",
      "修饰"
    ],
    "relatedMaterials": [
      "seaweed"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "tobacco-accord"
    ],
    "relatedPerfumes": [],
    "safety": "极低阈值；仅作气味科学资料。",
    "safetyInformation": "极低阈值；仅作气味科学资料。",
    "allergens": [],
    "regulatoryNotes": "具体 IFRA/地区法规要求须按物质、使用类别与最新版本查官方文件。",
    "description": "2-甲基异冰片的常见气味描述为泥土、霉味、樟脑、极低阈值。它天然存在于咖啡、可可、肉类、泥土、海洋与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 11062802 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合烟熏、咖啡、泥土与极微量的真实感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/11062802.png"
  },
  {
    "id": "trimethylamine",
    "name": "三甲胺",
    "nameZh": "三甲胺",
    "englishName": "Trimethylamine",
    "nameEn": "Trimethylamine",
    "synonyms": [],
    "CAS": "75-50-3",
    "cas": "75-50-3",
    "CID": 1146,
    "cid": 1146,
    "molecularFormula": "C3H9N",
    "formula": "C3H9N",
    "molecularWeight": "59.11",
    "molecularWeightUnit": "g/mol",
    "IUPACName": "N,N-dimethylmethanamine",
    "iupacName": "N,N-dimethylmethanamine",
    "chemicalClass": "含硫/含氮化合物",
    "subcategory": "极低阈值气味物",
    "odorProfile": [
      "鱼腥",
      "氨味",
      "海洋",
      "极低阈值"
    ],
    "odorDescription": [
      "鱼腥",
      "氨味",
      "海洋",
      "极低阈值"
    ],
    "odorFamily": "smoky",
    "volatility": "后调/极低阈值",
    "notePosition": "后调/极低阈值",
    "naturalOccurrence": [
      "咖啡、可可、肉类、泥土、海洋与发酵香气"
    ],
    "commercialProduction": "天然存在微量；商品多为合成。",
    "productionMethod": "天然存在微量；商品多为合成。",
    "fragranceFamilies": [
      "smoky",
      "gourmand"
    ],
    "perfumeryRole": [
      "极低阈值",
      "烟熏/肉香/泥土",
      "修饰"
    ],
    "relatedMaterials": [
      "seaweed"
    ],
    "relatedExtracts": [],
    "relatedMolecules": [],
    "relatedAccords": [
      "tobacco-accord"
    ],
    "relatedPerfumes": [],
    "safety": "三甲胺易燃/刺激/腐蚀；不可自行操作或食用。仅作资料。",
    "safetyInformation": "三甲胺易燃/刺激/腐蚀；不可自行操作或食用。仅作资料。",
    "allergens": [],
    "regulatoryNotes": "危险化学品；非普通香料。",
    "description": "三甲胺的常见气味描述为鱼腥、氨味、海洋、极低阈值。它天然存在于咖啡、可可、肉类、泥土、海洋与发酵香气；商品来源与纯度须按具体规格核对。",
    "notes": "本条为新增分子记录；CAS、分子式、分子量与 IUPAC 名按 PubChem CID 1146 记录。气味为行业品鉴参考，不等于单一化合物的完整感官结论。",
    "creative": "适合烟熏、咖啡、泥土与极微量的真实感。",
    "verificationStatus": "化学身份：PubChem CID 核对；气味：行业描述；法规：未逐条核实",
    "structure": "assets/images/molecules/1146.png"
  }
] ;
  rows.forEach((r) => {
    r.audit = { grade: "B", summary: "化学身份、分子式、分子量与 IUPAC 名按 PubChem 对应 CID 核对；气味描述为行业品鉴参考。法规限值、商品来源与定量组成未逐条核实。" };
    r.references = [P(r.cid), G(r.nameEn), MS(r.nameEn)];
    r.sources = r.references;
    S.molecules.push(r);
  });
})();
