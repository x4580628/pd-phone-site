window.PD_PRICE_DATA = {
  usedBuyback: {
    updated: "2026/07/10",
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
            { model: "iPhone 17 Pro Max", prices: ["", "", "35,000", "38,000", "39,000"], note: "" }
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
        subtitle: "依型號、年份、版本與容量快速查詢 iPad 收購行情。",
        capacities: ["16GB", "32GB", "64GB", "128GB", "256GB", "512GB", "1TB", "2TB"],
        groups: [
          { name: "iPad Pro", rows: [
            { model: "2020 第2代 A12Z 11 WIFI", prices: ["", "", "", "5,600", "6,400", "6,700", "7,400", ""], note: "" },
            { model: "2020 第2代 A12Z 11 LTE", prices: ["", "", "", "6,500", "6,700", "7,500", "8,200", ""], note: "" },
            { model: "2020 第4代 A12Z 12.9 WIFI", prices: ["", "", "", "7,300", "7,800", "8,000", "8,600", ""], note: "" },
            { model: "2020 第4代 A12Z 12.9 LTE", prices: ["", "", "", "7,400", "8,200", "8,800", "9,400", ""], note: "" },
            { model: "2021 第3代 M1 11 WIFI", prices: ["", "", "", "8,300", "9,300", "10,000", "10,500", "11,000"], note: "" },
            { model: "2021 第3代 M1 11 5G", prices: ["", "", "", "9,100", "10,100", "10,900", "11,200", "11,000"], note: "" },
            { model: "2021 第5代 M1 12.9 WIFI", prices: ["", "", "", "11,500", "12,300", "11,000", "12,300", "12,300"], note: "" },
            { model: "2021 第5代 M1 12.9 5G", prices: ["", "", "", "12,200", "13,100", "12,300", "13,500", "14,600"], note: "" },
            { model: "2022 第4代 M2 11 WIFI", prices: ["", "", "", "10,200", "11,400", "12,000", "13,100", "14,400"], note: "" },
            { model: "2022 第4代 M2 11 5G", prices: ["", "", "", "11,400", "12,600", "13,300", "14,100", "15,300"], note: "" },
            { model: "2022 第6代 M2 12.9 WIFI", prices: ["", "", "", "14,100", "15,300", "15,100", "16,800", "16,700"], note: "" },
            { model: "2022 第6代 M2 12.9 5G", prices: ["", "", "", "15,900", "16,300", "18,000", "17,000", "20,200"], note: "" },
            { model: "2024 第5代 M4 11 WIFI", prices: ["", "", "", "11,000", "12,300", "15,000", "17,300", ""], note: "" },
            { model: "2024 第5代 M4 11 5G", prices: ["", "", "", "15,600", "14,400", "20,500", "19,100", ""], note: "" },
            { model: "2024 第7代 M4 13 WIFI", prices: ["", "", "", "14,400", "14,400", "17,800", "20,500", ""], note: "" },
            { model: "2024 第7代 M4 13 5G", prices: ["", "", "", "15,000", "15,700", "20,500", "23,200", ""], note: "" }
          ]},
          { name: "iPad Air", rows: [
            { model: "2019 第3代 A12 10.5 WIFI", prices: ["", "", "2,500", "", "3,500", "", "", ""], note: "" },
            { model: "2019 第3代 A12 10.5 LTE", prices: ["", "", "3,200", "", "3,500", "", "", ""], note: "" },
            { model: "2020 第4代 A14 10.9 WIFI", prices: ["", "", "4,100", "", "5,000", "", "", ""], note: "" },
            { model: "2020 第4代 A14 10.9 LTE", prices: ["", "", "5,000", "", "5,700", "", "", ""], note: "" },
            { model: "2022 第5代 M1 10.9 WIFI", prices: ["", "", "", "6,700", "8,600", "", "", ""], note: "" },
            { model: "2022 第5代 M1 10.9 5G", prices: ["", "", "", "8,200", "9,500", "", "", ""], note: "" },
            { model: "2024 第6代 M2 11 WIFI", prices: ["", "", "", "7,600", "7,600", "8,200", "9,600", ""], note: "" },
            { model: "2024 第6代 M2 11 5G", prices: ["", "", "", "7,600", "7,600", "9,600", "10,300", ""], note: "" },
            { model: "2024 第6代 M2 13 WIFI", prices: ["", "", "", "9,900", "9,600", "11,600", "10,800", ""], note: "" },
            { model: "2024 第6代 M2 13 5G", prices: ["", "", "", "10,300", "11,600", "11,900", "17,100", ""], note: "" },
            { model: "2025 第7代 M3 11 WIFI", prices: ["", "", "", "7,900", "9,200", "11,400", "13,600", ""], note: "" },
            { model: "2025 第7代 M3 11 5G", prices: ["", "", "", "9,900", "11,500", "13,700", "15,500", ""], note: "" },
            { model: "2025 第7代 M3 13 WIFI", prices: ["", "", "", "10,200", "11,600", "13,000", "14,800", ""], note: "" },
            { model: "2025 第7代 M3 13 5G", prices: ["", "", "", "13,400", "13,700", "15,500", "17,600", ""], note: "" }
          ]},
          { name: "iPad", rows: [
            { model: "2018 第6代 A10 9.7 WIFI", prices: ["", "1,300", "", "1,700", "", "", "", ""], note: "" },
            { model: "2018 第6代 A10 9.7 LTE", prices: ["", "1,700", "", "2,300", "", "", "", ""], note: "" },
            { model: "2019 第7代 A10 10.2 WIFI", prices: ["", "2,100", "", "2,500", "", "", "", ""], note: "" },
            { model: "2019 第7代 A10 10.2 LTE", prices: ["", "2,400", "", "2,800", "", "", "", ""], note: "" },
            { model: "2020 第8代 A12 10 WIFI", prices: ["", "2,900", "", "3,600", "", "", "", ""], note: "" },
            { model: "2020 第8代 A12 10 LTE", prices: ["", "2,800", "", "3,300", "", "", "", ""], note: "" },
            { model: "2021 第9代 A13 10.2 WIFI", prices: ["", "", "4,100", "", "5,400", "", "", ""], note: "" },
            { model: "2021 第9代 A13 10.2 LTE", prices: ["", "", "4,100", "", "6,000", "", "", ""], note: "" },
            { model: "2022 第10代 A14 10.9 WIFI", prices: ["", "", "5,000", "", "6,700", "", "", ""], note: "" },
            { model: "2022 第10代 A14 10.9 5G", prices: ["", "", "5,500", "", "7,200", "", "", ""], note: "" },
            { model: "2025 第11代 A16 11 WIFI", prices: ["", "", "", "5,600", "7,100", "8,500", "", ""], note: "" },
            { model: "2025 第11代 A16 11 5G", prices: ["", "", "", "7,300", "8,700", "9,900", "", ""], note: "" }
          ]},
          { name: "iPad mini", rows: [
            { model: "2019 第5代 A12 7.9 WIFI", prices: ["", "", "2,700", "", "2,900", "", "", ""], note: "" },
            { model: "2019 第5代 A12 7.9 LTE", prices: ["", "", "2,900", "", "3,300", "", "", ""], note: "" },
            { model: "2021 第6代 A15 8.3 WIFI", prices: ["", "", "5,000", "", "6,800", "", "", ""], note: "" },
            { model: "2021 第6代 A15 8.3 5G", prices: ["", "", "6,300", "", "7,200", "", "", ""], note: "" },
            { model: "2024 第7代 A17 8.3 WIFI", prices: ["", "", "", "6,400", "7,600", "8,900", "", ""], note: "" },
            { model: "2024 第7代 A17 8.3 5G", prices: ["", "", "", "7,600", "8,200", "10,300", "", ""], note: "" }
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
          ]},
          { name: "Neo 系列", rows: [
            { model: "MacBook Neo", prices: ["請維護", "請維護", "請維護", "請維護"], note: "" },
            { model: "MacBook Neo Pro", prices: ["請維護", "請維護", "請維護", "請維護"], note: "" }
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
