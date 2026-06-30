const brands = [
  {
    "chinese": "安良",
    "name": "ANLY",
    "logo": "anly-logo.png",
    "website": "https://www.anly.com.tw/",
    "catalog": "https://www.anly.com.tw/products.php",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "全冠",
    "name": "AVC",
    "logo": "avc-logo.png",
    "website": "https://www.avc-corp.com.tw/",
    "catalog": "https://www.avc-corp.com.tw/big5/1.html",
    "category": "配線材料",
    "show": true
  },
  {
    "chinese": "山武",
    "name": "Azbil / Yamatake",
    "logo": "azbil-logo.png",
    "website": "https://www.azbil.com/tw/",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "BERNSTEIN",
    "name": "Bernstein",
    "logo": "bernstein-logo.png",
    "website": "https://www.bernstein.asia/",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "BREMAS",
    "name": "Bremas",
    "logo": "bremas-logo.png",
    "website": "https://www.bremas.it/",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "佳力",
    "name": "CALY / 佳力",
    "logo": "caly-logo.png",
    "website": "https://www.caly.com.tw",
    "catalog": "https://www.caly.com.tw/ch/caly_products.html",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "Crouzet",
    "name": "Crouzet",
    "logo": "crouzet-logo.png",
    "website": "https://www.crouzet.com/",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "台達",
    "name": "Delta / 台達",
    "logo": "delta-logo.png",
    "website": "https://www.deltaww.com/",
    "catalog": "",
    "category": "自動控制",
    "show": true
  },
  {
    "chinese": "町洋",
    "name": "Dinkle / 町洋",
    "logo": "dinkle-logo.png",
    "website": "https://www.dinkle.com/tw/",
    "catalog": "",
    "category": "端子台",
    "show": true
  },
  {
    "chinese": "Eaton / Moeller",
    "name": "Eaton / Moeller",
    "logo": "eaton-logo.png",
    "website": "https://www.eaton.com/",
    "catalog": "",
    "category": "低壓控制",
    "show": true
  },
  {
    "chinese": "E.G.O.",
    "name": "E.G.O.",
    "logo": "ego-logo.png",
    "website": "https://www.egoproducts.com/",
    "catalog": "https://www.egoproducts.com/en/products/appliance-control-elements/thermostats",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "春日",
    "name": "Kasuga / 春日",
    "logo": "ekasuga-logo.png",
    "website": "https://www.kasuga.jp/",
    "catalog": "",
    "category": "低壓控制",
    "show": true
  },
  {
    "chinese": "富士電機",
    "name": "Fuji Electric / 富士電機",
    "logo": "fe-logo.png",
    "website": "https://www.fujielectric.com.tw/",
    "catalog": "https://www.fujielectric.com.tw/Page/Product/ProductList.aspx",
    "category": "低壓控制",
    "show": true
  },
  {
    "chinese": "FineTek",
    "name": "FineTek",
    "logo": "finetek-logo.png",
    "website": "https://www.fine-tek.com/tw/",
    "catalog": "https://www.fineautomation.com.cn/products.html",
    "category": "Sensor",
    "show": true
  },
  {
    "chinese": "陽明",
    "name": "FOTEK",
    "logo": "fotek-logo.png",
    "website": "https://www.fotek.com.tw/",
    "catalog": "https://www.fotek.com.tw/zh-tw/product-category",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "Frontier",
    "name": "Frontier",
    "logo": "frontier-logo.png",
    "website": "https://www.ki-iot.com.tw/",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "奇異",
    "name": "GE",
    "logo": "ge-logo.png",
    "website": "https://www.ge.com/",
    "catalog": "",
    "category": "低壓控制",
    "show": true
  },
  {
    "chinese": "Honeywell",
    "name": "Honeywell",
    "logo": "honeywell-logo.png",
    "website": "https://www.honeywell.com/",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "和泉",
    "name": "IDEC / 和泉",
    "logo": "idec-logo.png",
    "website": "https://tw.idec.com/",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "KAKU",
    "name": "KAKU",
    "logo": "kaku-logo.png",
    "website": "https://www.kaku-taiwan.com.tw/",
    "catalog": "",
    "category": "配線材料",
    "show": true
  },
  {
    "chinese": "基恩斯",
    "name": "KEYENCE / 基恩斯",
    "logo": "keyence-logo.png",
    "website": "https://www.keyence.com.tw/",
    "catalog": "",
    "category": "Sensor",
    "show": true
  },
  {
    "chinese": "Kilter",
    "name": "Kilter",
    "logo": "kilter-logo.png",
    "website": "https://www.facebook.com/dmm.kilter",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "凱士士",
    "name": "KSS / 凱士士",
    "logo": "kss-logo.png",
    "website": "https://www.kss.com.tw/",
    "catalog": "https://www.kss.com.tw/index.php?action=products1",
    "category": "配線材料",
    "show": true
  },
  {
    "chinese": "KST",
    "name": "KST",
    "logo": "kst-logo.png",
    "website": "https://ksterminals.com/zh-hant/",
    "catalog": "https://ksterminals.com/zh-hant/electrical-terminals/",
    "category": "端子",
    "show": true
  },
  {
    "chinese": "KYOTTO",
    "name": "KYOTTO",
    "logo": "kyotto-logo.png",
    "website": "https://www.kyotto.com/index.html",
    "catalog": "https://www.kyotto.com/solid-state-relay.htm",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "Legrand",
    "name": "Legrand",
    "logo": "legrand-logo.png",
    "website": "https://www.legrand.com/",
    "catalog": "",
    "category": "低壓控制",
    "show": true
  },
  {
    "chinese": "LineSeiki",
    "name": "LineSeiki",
    "logo": "lineseiki-logo.jpg",
    "website": "https://www.lineseiki.com/",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "馬可",
    "name": "Mack",
    "logo": "mack-logo.jpg",
    "website": "http://www.mackelectrical.com/index.asp/",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "明緯",
    "name": "MEAN WELL / 明緯",
    "logo": "meanwell-logo.png",
    "website": "https://www.meanwell.com/",
    "catalog": "",
    "category": "電源供應器",
    "show": true
  },
  {
    "chinese": "三菱",
    "name": "Mitsubishi / 三菱",
    "logo": "mitsubishi-logo.png",
    "website": "https://www.mitsubishielectric-automation.com.tw/",
    "catalog": "",
    "category": "PLC",
    "show": true
  },
  {
    "chinese": "歐姆龍",
    "name": "OMRON / 歐姆龍",
    "logo": "omron-logo.png",
    "website": "https://www.omron.com.tw/",
    "catalog": "https://www.omron.com.tw/products/",
    "category": "PLC",
    "show": true
  },
  {
    "chinese": "國際牌",
    "name": "Panasonic / 國際牌",
    "logo": "panasonic-logo.png",
    "website": "https://www.panasonic.com/tw/",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "菲尼克斯",
    "name": "Phoenix Contact",
    "logo": "phoenixcontact-logo.png",
    "website": "https://www.phoenixcontact.com/",
    "catalog": "",
    "category": "端子台",
    "show": true
  },
  {
    "chinese": "Schrack",
    "name": "Schrack",
    "logo": "schrack-logo.png",
    "website": "https://www.schrack.com/",
    "catalog": "",
    "category": "繼電器",
    "show": true
  },
  {
    "chinese": "山河",
    "name": "SHAN HO / 山河",
    "logo": "shanho-logo.png",
    "website": "https://www.shanho.com.tw/",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "士林電機",
    "name": "Shihlin Electric / 士林電機",
    "logo": "shihlin-logo.png",
    "website": "https://cht.seec.com.tw/",
    "catalog": "",
    "category": "低壓控制",
    "show": true
  },
  {
    "chinese": "Shining",
    "name": "Shining",
    "logo": "shining-logo.png",
    "website": "https://www.shining.com.tw/",
    "catalog": "",
    "category": "端子台",
    "show": true
  },
  {
    "chinese": "SIBA",
    "name": "SIBA",
    "logo": "siba-logo.png",
    "website": "https://www.siballc.net/",
    "catalog": "",
    "category": "保險絲",
    "show": true
  },
  {
    "chinese": "西門子",
    "name": "SIEMENS / 西門子",
    "logo": "siemens-logo.png",
    "website": "https://www.siemens.com/",
    "catalog": "",
    "category": "PLC",
    "show": true
  },
  {
    "chinese": "東元",
    "name": "TECO / 東元",
    "logo": "teco-logo.png",
    "website": "https://www.teco.com.tw/",
    "catalog": "",
    "category": "馬達/控制",
    "show": true
  },
  {
    "chinese": "Telemecanique",
    "name": "Telemecanique",
    "logo": "telemecanique-logo.png",
    "website": "https://www.telemecaniquesensors.com/cn/en",
    "catalog": "",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "天得",
    "name": "TEND / 天得",
    "logo": "tend-logo.png",
    "website": "http://www.tendtech.com.tw/",
    "catalog": "http://www.tendtech.com.tw/product.aspx?cateid=73",
    "category": "控制器材",
    "show": true
  },
  {
    "chinese": "Vemer Siber",
    "name": "VemerSiber",
    "logo": "vemersiber-logo.png",
    "website": "https://www.vemer.it/en/",
    "catalog": "",
    "category": "控制器材",
    "show": true
  }
]

export default brands
