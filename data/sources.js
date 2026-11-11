/* 香谱 · 资料来源与可信度制度
 * 所有日期为编辑整理/最后核对日期。外部网页内容会变化，引用时请回查原始页面。
 */
(function () {
  const S = (window.SCENT = window.SCENT || {});
  const CHECKED = "2026-11-10";

  S.reliability = {
    A: {
      label: "A",
      title: "直接权威来源",
      desc: "官方机构、学术论文、权威数据库或标准原文直接支持该条事实。",
    },
    B: {
      label: "B",
      title: "多源交叉支持",
      desc: "两个及以上可靠专业来源相互印证，但未直接引用标准原文。",
    },
    C: {
      label: "C",
      title: "专业资料但范围有限",
      desc: "行业资料、技术资料或可靠二手整理支持；适用范围、版本或样本有限。",
    },
    D: {
      label: "D",
      title: "存在争议或待核实",
      desc: "资料之间存在冲突，或只有未经充分验证的二手说法。",
    },
    U: {
      label: "U",
      title: "未知 / 尚缺依据",
      desc: "当前未找到足够依据；本网站不做猜测性补齐。",
    },
  };

  S.sources = {
    pubchem: {
      id: "pubchem",
      name: "PubChem",
      org: "U.S. National Library of Medicine, NCBI",
      url: "https://pubchem.ncbi.nlm.nih.gov/",
      type: "化学数据库",
      grade: "A",
      note: "用于 CID、分子式、分子量、IUPAC 名称、二维结构及部分理化数据。不同记录可能是单一异构体或混合物，引用时须看具体 CID。",
    },
    nist: {
      id: "nist",
      name: "NIST Chemistry WebBook",
      org: "National Institute of Standards and Technology",
      url: "https://webbook.nist.gov/chemistry/",
      type: "物性数据库",
      grade: "A",
      note: "用于部分化合物的谱图、热化学与相变数据。并非所有香料分子都有完整条目。",
    },
    echa: {
      id: "echa",
      name: "ECHA · Information on Chemicals",
      org: "European Chemicals Agency",
      url: "https://echa.europa.eu/information-on-chemicals",
      type: "化学品法规数据库",
      grade: "A",
      note: "用于欧盟化学品分类、标签与注册信息检索。混合物与单一物质须区分。",
    },
    ifra: {
      id: "ifra",
      name: "IFRA Standards",
      org: "International Fragrance Association",
      url: "https://ifra.org/",
      type: "行业标准",
      grade: "A",
      note: "IFRA Standards 会按修订版更新。具体限制受使用类别、浓度、产品类型和最新修订影响；本网站不把任何二手摘要当作现行限量。",
    },
    eu1223: {
      id: "eu1223",
      name: "Regulation (EC) No 1223/2009 on cosmetic products",
      org: "EUR-Lex, European Union",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009R1223",
      type: "法规原文",
      grade: "A",
      note: "欧盟化妆品法规框架。香料过敏原标示要求见后续修订与附件。",
    },
    eu2023: {
      id: "eu2023",
      name: "Commission Regulation (EU) 2023/1545",
      org: "EUR-Lex, European Union",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1545",
      type: "法规原文",
      grade: "A",
      note: "修订欧盟化妆品香料过敏原标示要求，并设过渡期。具体清单、生效时间及适用范围以原文为准。",
    },
    sccs: {
      id: "sccs",
      name: "Scientific Committee on Consumer Safety (SCCS)",
      org: "European Commission",
      url: "https://health.ec.europa.eu/scientific-committees/scientific-committee-consumer-safety-sccs_en",
      type: "风险评估意见",
      grade: "A",
      note: "用于化妆品成分安全评估意见。意见针对特定用途、浓度与暴露情境，不等同于一般消费品结论。",
    },
    fda: {
      id: "fda",
      name: "Fragrances in Cosmetics",
      org: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/cosmetics/cosmetic-ingredients/fragrances-cosmetics",
      type: "监管机构说明",
      grade: "A",
      note: "美国联邦化妆品监管框架下的香料说明；州级与其它市场要求可能不同。",
    },
    kew: {
      id: "kew",
      name: "Plants of the World Online",
      org: "Royal Botanic Gardens, Kew",
      url: "https://powo.science.kew.org/",
      type: "植物分类数据库",
      grade: "A",
      note: "用于核对接受名、异名与分布。不同分类处理可能变化；具体条目以 POWO 当前页为准。",
    },
    iso: {
      id: "iso",
      name: "ISO 9235:2021 Aromatic natural raw materials — Vocabulary",
      org: "International Organization for Standardization",
      url: "https://www.iso.org/standard/75821.html",
      type: "术语标准",
      grade: "A",
      note: "用于区分精油、原精、浸膏、树脂等术语。标准正文需购买；本网站仅引用公开标准信息，不复制标准内容。",
    },
    buck1991: {
      id: "buck1991",
      name: "A novel multigene family may encode odorant receptors",
      org: "Buck & Axel, Cell (1991)",
      url: "https://doi.org/10.1016/0092-8674(91)90418-X",
      type: "学术论文",
      grade: "A",
      note: "嗅觉受体基因家族的奠基性研究。",
    },
    herz1996: {
      id: "herz1996",
      name: "Odor memory: review and analysis",
      org: "Herz & Engen, Psychonomic Bulletin & Review (1996)",
      url: "https://doi.org/10.3758/BF03210749",
      type: "综述",
      grade: "B",
      note: "气味记忆与情绪关联的综述性资料；具体机制仍有研究空间。",
    },
    heritage: {
      id: "heritage",
      name: "博物馆 / 文化史 / 学术资料",
      org: "The Metropolitan Museum of Art, UNESCO, 学术研究等",
      url: "https://www.metmuseum.org/toah/",
      type: "文化史资料",
      grade: "B",
      note: "用于传统香文化、物质文化与历史背景。具体仪式、配方和地方差异需回查专门研究；博物馆综述不能覆盖所有地区。",
    },
    whoSmoke: {
      id: "whoSmoke",
      name: "Household air pollution and health",
      org: "World Health Organization",
      url: "https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health",
      type: "公共卫生资料",
      grade: "A",
      note: "用于燃烧烟雾/室内空气质量的一般风险背景。具体熏香产品的暴露与健康效应需专门研究。",
    },
    goodscents: {
      id: "goodscents",
      name: "The Good Scents Company Information System",
      org: "The Good Scents Company",
      url: "https://www.thegoodscentscompany.com/",
      type: "行业资料",
      grade: "C",
      note: "提供调香描述、用途与商品名线索，属于行业整理资料；不能替代法规原文或原始实验数据。",
    },
    fragrantica: {
      id: "fragrantica",
      name: "Fragrantica 香水档案",
      org: "Fragrantica",
      url: "https://www.fragrantica.com/",
      type: "行业/社区档案",
      grade: "C",
      note: "用于公开香调表与版本线索。香调表可能来自品牌资料、营销材料与用户维护，不等同于完整配方。",
    },
    brand: {
      id: "brand",
      name: "品牌官方网站",
      org: "各香水品牌",
      url: "",
      type: "品牌官方资料",
      grade: "C",
      note: "用于品牌、发布时间、公开香调与产品线信息。品牌页面可能随市场与版本调整，营销表述不视为独立科学证据。",
    },
    materialSafety: {
      id: "materialSafety",
      name: "安全资料页 / 供应商技术资料",
      org: "各原料供应商与安全数据库",
      url: "",
      type: "技术资料",
      grade: "C",
      note: "用于一般理化与操作信息；批次、纯度、法规版本不同，不能据此自行设定安全用量。",
    },
  };

  function ref(sourceId, overrides) {
    const s = S.sources[sourceId] || {};
    return Object.assign(
      {
        sourceId: sourceId,
        name: s.name || sourceId,
        org: s.org || "",
        url: s.url || "",
        type: s.type || "",
        grade: s.grade || "U",
        checked: CHECKED,
        note: s.note || "",
      },
      overrides || {}
    );
  }

  S.refs = {
    pubchem(cid, note) {
      return ref("pubchem", {
        url: "https://pubchem.ncbi.nlm.nih.gov/compound/" + cid,
        note: note || "CID " + cid + "；二维结构图亦来自 PubChem。",
      });
    },
    nist(name) {
      return ref("nist", {
        url: "https://webbook.nist.gov/cgi/cbook.cgi?Name=" + encodeURIComponent(name),
      });
    },
    echa(query) {
      return ref("echa", {
        note: "在 ECHA 化学品数据库检索：" + query + "。",
      });
    },
    kew(scientificName) {
      return ref("kew", {
        note: "在 POWO 检索学名：" + (scientificName || "见条目") + "。",
      });
    },
    paper(sourceId) {
      return ref(sourceId);
    },
    brand(name, url, note) {
      return ref("brand", {
        name: name + " 官方资料",
        org: name,
        url: url,
        note: note || "品牌官方页面或公开产品资料；香调表不等于完整配方。",
      });
    },
    fragrantica(name, note) {
      return ref("fragrantica", {
        name: "Fragrantica · " + name,
        url: "https://www.fragrantica.com/search/?q=" + encodeURIComponent(name),
        note: note || "公开香调表与档案线索，可信度按 C 处理。",
      });
    },
    goodscents(name) {
      return ref("goodscents", {
        name: "The Good Scents Company · " + name,
        url: "https://www.thegoodscentscompany.com/search2.html?q=" + encodeURIComponent(name),
      });
    },
    iso() {
      return ref("iso");
    },
    custom(sourceId, overrides) {
      return ref(sourceId, overrides);
    },
  };

  S.methodology = {
    updated: CHECKED,
    intro:
      "香谱把“事实”“行业惯例”“主观品鉴”和“待核实线索”分开呈现。可信度等级评价的是具体事实及其证据强度，而不是页面的文笔、条目数量或 AI 的信心。",
    rules: [
      "A 级事实须有官方、学术或权威数据库的直接支持；B 级须有多个可靠专业来源交叉印证。",
      "香水公开香调表是品牌/行业公开信息，并不等于完整商业配方。香谱不声称掌握未公开配方。",
      "气味描述属于“品鉴参考”，受浓度、基质、纯度、个体嗅觉、语言与文化影响，不作为客观化学结论。",
      "法规与安全信息只作知识整理，不构成医疗、毒理或合规建议；实际配方须查最新标准原文并咨询合格专业人员。",
      "未找到可靠依据的数值不填、不猜、不制造“完整感”。缺失会明确显示为“未录入”或“待核实”。",
      "天然来源不等于安全；实验室危险不等于正常使用风险。风险须结合危害、剂量、暴露途径和使用场景。",
      "提取物不能等同于植物本身，分子不能等同于天然原料；同一植物的不同提取物须分别记录。",
    ],
  };
})();
