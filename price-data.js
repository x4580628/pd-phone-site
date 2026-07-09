window.PD_PRICE_DATA = {
  usedBuyback: {
    updated: "2026/07/09",
    categories: [
      {
        id: "iphone",
        name: "iPhone 手機",
        icon: "smartphone",
        title: "今日iPhone收購價",
        subtitle: "依系列與容量快速查詢 iPhone 收購行情。",
        capacities: ["64G", "128G", "256G", "512G", "1TB"],
        groups: [
          { name: "iPhone 17", rows: [
            { model: "iPhone 17", prices: ["", "", "21,000", "24,000", ""], note: "" },
            { model: "iPhone 17 E", prices: ["", "", "15,000", "16,500", ""], note: "" },
            { model: "iPhone Air", prices: ["", "", "22,000", "25,000", ""], note: "" },
            { model: "iPhone 17 Pro", prices: ["", "", "30,000", "33,000", ""], note: "" },
            { model: "iPhone 17 Pro Max", prices: ["", "", "35,000", "38,000", "39,000"], note: "100下34 / 100上35" }
          ]},
          { name: "iPhone 16", rows: [
            { model: "iPhone 16", prices: ["", "14,000", "15,500", "16,000", ""], note: "" },
            { model: "iPhone 16 E", prices: ["", "8,500", "10,000", "10,500", ""], note: "" },
            { model: "iPhone 16 Plus", prices: ["", "16,500", "18,000", "18,500", ""], note: "" },
            { model: "iPhone 16 Pro", prices: ["", "19,500", "21,500", "22,500", "23,500"], note: "" },
            { model: "iPhone 16 Pro Max", prices: ["", "", "28,000", "30,000", "31,000"], note: "" }
          ]},
          { name: "iPhone 15", rows: [
            { model: "iPhone 15", prices: ["", "9,000", "10,500", "11,000", ""], note: "" },
            { model: "iPhone 15 Plus", prices: ["", "11,000", "12,500", "13,500", ""], note: "" },
            { model: "iPhone 15 Pro", prices: ["", "13,000", "14,500", "15,500", "16,500"], note: "" },
            { model: "iPhone 15 Pro Max", prices: ["", "", "18,500", "19,500", "20,500"], note: "" }
          ]},
          { name: "iPhone 14", rows: [
            { model: "iPhone 14", prices: ["", "6,500", "7,500", "8,000", ""], note: "" },
            { model: "iPhone 14 Plus", prices: ["", "8,000", "8,500", "9,000", ""], note: "" },
            { model: "iPhone 14 Pro", prices: ["", "8,000", "9,500", "10,000", "10,500"], note: "" },
            { model: "iPhone 14 Pro Max", prices: ["", "13,000", "14,500", "15,000", "15,500"], note: "" }
          ]},
          { name: "iPhone 13", rows: [
            { model: "iPhone 13", prices: ["", "5,000", "5,500", "6,000", ""], note: "" },
            { model: "iPhone 13 Mini", prices: ["", "3,500", "4,500", "5,000", ""], note: "" },
            { model: "iPhone 13 Pro", prices: ["", "5,000", "6,000", "6,000", ""], note: "" },
            { model: "iPhone 13 Pro Max", prices: ["", "7,000", "8,000", "8,000", ""], note: "" }
          ]},
          { name: "iPhone 12", rows: [
            { model: "iPhone 12", prices: ["2,500", "3,000", "3,500", "", ""], note: "" },
            { model: "iPhone 12 Mini", prices: ["2,500", "3,000", "3,000", "", ""], note: "" },
            { model: "iPhone 12 Pro", prices: ["", "4,000", "4,500", "4,500", ""], note: "" },
            { model: "iPhone 12 Pro Max", prices: ["", "6,000", "7,000", "7,500", ""], note: "" }
          ]},
          { name: "iPhone 11", rows: [
            { model: "iPhone 11", prices: ["1,500", "2,000", "2,500", "", ""], note: "" },
            { model: "iPhone 11 Pro", prices: ["2,000", "", "2,500", "2,500", ""], note: "" },
            { model: "iPhone 11 Pro Max", prices: ["3,000", "", "3,500", "3,500", ""], note: "" }
          ]},
          { name: "iPhone X", rows: [
            { model: "iPhone X", prices: ["500", "", "500", "", ""], note: "" },
            { model: "iPhone XR", prices: ["1,000", "1,000", "1,000", "", ""], note: "" },
            { model: "iPhone XS", prices: ["1,500", "", "1,800", "2,000", ""], note: "" },
            { model: "iPhone XS Max", prices: ["1,500", "", "1,800", "2,000", ""], note: "" }
          ]}
        ]
      },
      {
        id: "ipad",
        name: "iPad 平板",
        icon: "tablet",
        title: "今日iPad收購價",
        subtitle: "先放範例資料，之後可依你的 Excel 補齊。",
        capacities: ["64G", "128G", "256G", "512G", "1TB", "2TB"],
        groups: [
          { name: "iPad Pro", rows: [
            { model: "iPad Pro 13 M4 WiFi+LTE", prices: ["", "", "25,000", "28,000", "31,800", "36,000"], note: "範例" },
            { model: "iPad Pro 13 M4 WiFi", prices: ["", "", "22,500", "25,200", "29,500", "32,500"], note: "範例" }
          ]},
          { name: "iPad Air", rows: [
            { model: "iPad Air 13", prices: ["", "12,000", "15,000", "18,000", "", ""], note: "範例" },
            { model: "iPad Air 11", prices: ["", "10,000", "13,000", "16,000", "", ""], note: "範例" }
          ]},
          { name: "iPad", rows: [
            { model: "iPad 10", prices: ["", "5,500", "7,000", "", "", ""], note: "範例" },
            { model: "iPad 9", prices: ["", "4,500", "6,000", "", "", ""], note: "範例" }
          ]}
        ]
      },
      {
        id: "macbook",
        name: "MacBook 筆電",
        icon: "laptop",
        title: "今日MacBook收購價",
        subtitle: "筆電估價會依晶片、年份、記憶體、硬碟與電池循環調整。",
        capacities: ["8G/256G", "8G/512G", "16G/512G", "16G/1TB"],
        groups: [
          { name: "MacBook Air", rows: [
            { model: "MacBook Air M3 13", prices: ["18,000", "22,000", "26,000", "30,000"], note: "範例" },
            { model: "MacBook Air M2 13", prices: ["14,000", "18,000", "22,000", "26,000"], note: "範例" }
          ]},
          { name: "MacBook Pro", rows: [
            { model: "MacBook Pro M3 14", prices: ["", "32,000", "38,000", "45,000"], note: "範例" },
            { model: "MacBook Pro M2 14", prices: ["", "28,000", "34,000", "40,000"], note: "範例" }
          ]}
        ]
      }
    ]
  },
  newBuyback: {
    updated: "2026/07/09",
    capacities: ["128G", "256G", "512G", "1TB"],
    groups: [
      { name: "iPhone 17", rows: [
        { model: "iPhone 17", prices: ["", "請維護", "請維護", ""], note: "可直接改 price-data.js" },
        { model: "iPhone 17 Pro", prices: ["", "請維護", "請維護", ""], note: "" },
        { model: "iPhone 17 Pro Max", prices: ["", "請維護", "請維護", "請維護"], note: "" }
      ]}
    ]
  },
  repairPrices: {
    updated: "2026/07/09",
    groups: [
      { name: "iPhone 17", models: ["iPhone 17", "iPhone 17 Air", "iPhone 17 Pro", "iPhone 17 Pro Max"], rows: [
        ["液晶螢幕", "5000", "5000", "6000", "6500"],
        ["電池", "1500", "1500", "1500", "1500"]
      ]}
    ]
  }
};
