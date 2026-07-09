(function () {
  const data = window.PD_PRICE_DATA;
  if (!data) return;

  const empty = "-";
  const state = { used: { categoryIndex: 0, groupIndex: 0 }, new: { groupIndex: 0 } };
  const icons = {
    smartphone: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>',
    tablet: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg>',
    laptop: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9"></path><path d="M2 19h20"></path></svg>'
  };

  const sectionFor = (type) => data[type === "new" ? "newBuyback" : "usedBuyback"];
  const activeCategory = (section, type) => section.categories ? section.categories[state[type].categoryIndex] || section.categories[0] : section;

  function renderCategoryTabs(type) {
    const section = sectionFor(type);
    const tabs = document.querySelector(`[data-category-tabs="${type}"]`);
    if (!tabs || !section?.categories) return;

    tabs.innerHTML = section.categories.map((category, index) => {
      const active = index === state[type].categoryIndex ? " active" : "";
      const icon = icons[category.icon] || "";
      return `<button class="category-tab${active}" type="button" data-category="${index}" data-kind="${type}"><span class="category-icon">${icon}</span>${category.name}</button>`;
    }).join("");
  }

  function renderBuybackTable(type) {
    const section = sectionFor(type);
    const table = document.querySelector(`[data-price-table="${type}"]`)?.closest("table");
    const body = document.querySelector(`[data-price-table="${type}"]`);
    const tabs = document.querySelector(`[data-table-tabs="${type}"]`);
    const date = document.querySelector(`[data-updated="${type}"]`);
    if (!section || !table || !body || !tabs) return;

    const category = activeCategory(section, type);
    const group = category.groups[state[type].groupIndex] || category.groups[0];
    const capacities = category.capacities || section.capacities;
    const label = document.querySelector("[data-market-label]");
    const title = document.querySelector("[data-market-title]");
    const subtitle = document.querySelector("[data-market-subtitle]");

    if (label && category.name) label.textContent = category.name;
    if (title && category.title) title.textContent = category.title;
    if (subtitle && category.subtitle) subtitle.textContent = category.subtitle;

    renderCategoryTabs(type);

    tabs.innerHTML = category.groups.map((item, index) => {
      const active = item.name === group.name ? " active" : "";
      return `<button class="tab${active}" type="button" data-group="${index}" data-kind="${type}">${item.name}</button>`;
    }).join("");

    table.querySelector("thead").innerHTML = `<tr><th>型號</th>${capacities.map((capacity) => `<th>${capacity}</th>`).join("")}<th>備註</th></tr>`;
    body.innerHTML = group.rows.map((row) => {
      const prices = row.prices.map((price) => `<td class="price">${price || empty}</td>`).join("");
      return `<tr><td class="model-name">${row.model}</td>${prices}<td class="note-cell">${row.note || empty}</td></tr>`;
    }).join("");

    if (date) date.textContent = `更新日期：${section.updated}`;
  }

  function renderRepairTable(groupIndex = 0) {
    const head = document.querySelector("[data-repair-head]");
    const body = document.querySelector("[data-repair-table]");
    const tabs = document.querySelector('[data-table-tabs="repair"]');
    const date = document.querySelector('[data-updated="repair"]');
    if (!head || !body || !tabs || !data.repairPrices) return;

    const section = data.repairPrices;
    const group = section.groups[groupIndex] || section.groups[0];
    tabs.innerHTML = section.groups.map((item, index) => {
      const active = item.name === group.name ? " active" : "";
      return `<button class="tab${active}" type="button" data-group="${index}" data-kind="repair">${item.name}</button>`;
    }).join("");
    head.innerHTML = `<tr><th>維修項目</th>${group.models.map((model) => `<th>${model}</th>`).join("")}</tr>`;
    body.innerHTML = group.rows.map((row) => `<tr><th>${row[0]}</th>${row.slice(1).map((price) => `<td>${price}</td>`).join("")}</tr>`).join("");
    if (date) date.textContent = `更新日期：${section.updated}`;
  }

  document.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-category][data-kind]");
    if (categoryButton) {
      const kind = categoryButton.dataset.kind;
      state[kind].categoryIndex = Number(categoryButton.dataset.category);
      state[kind].groupIndex = 0;
      renderBuybackTable(kind);
      return;
    }

    const groupButton = event.target.closest("[data-group][data-kind]");
    if (!groupButton) return;

    const kind = groupButton.dataset.kind;
    const index = Number(groupButton.dataset.group);
    if (kind === "repair") renderRepairTable(index);
    else {
      state[kind].groupIndex = index;
      renderBuybackTable(kind);
    }
  });

  renderBuybackTable("used");
  renderBuybackTable("new");
  renderRepairTable();
})();
