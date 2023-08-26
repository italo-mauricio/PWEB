function createTable(items, propertyNames, divId) {
    const div = document.getElementById(divId);
    const headers = propertyNames.map(propertyName => capitalizeFirstLetter(propertyName));
    const headerRow = `<tr>${headers.map(header => `<th>${header}</th>`).join("")}</tr>`;
    
    const itemsHtml = items.map(item => {
      const cells = propertyNames.map(propertyName => `<td>${item[propertyName] || ""}</td>`);
      return `<tr>${cells.join("")}</tr>`;
    });
  
    div.innerHTML = `<table>${headerRow}${itemsHtml.join("\n")}</table>`;
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  async function fetchData(url = "https://random-data-api.com/api/v2/beers?size=3") {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  
  async function loadBeers() {
    try {
      const cervejas = await fetchData();
      renderBeerTable(cervejas);
    } catch (error) {
      displayErrorMessage();
    }
  }
  
  async function sortBeers() {
    try {
      const cervejas = await fetchData();
      cervejas.sort((a, b) => a.name.localeCompare(b.name));
      renderBeerTable(cervejas);
    } catch (error) {
      displayErrorMessage();
    }
  }
  
  async function shuffleBeers() {
    try {
      const cervejas = await fetchData();
      const shuffledCervejas = [...cervejas].sort(() => Math.random() - 0.5); // Fisher-Yates shuffle
      renderBeerTable(shuffledCervejas);
    } catch (error) {
      displayErrorMessage();
    }
  }
  
  function renderBeerTable(cervejas) {
    createTable(cervejas, ["name", "alcohol", "style", "ibu", "brand"], "cervejasDiv");
  }
  
  function displayErrorMessage() {
    document.getElementById("cervejasDiv").innerHTML = "Ocorreu um erro ao carregar os dados.";
  }
  
  document.getElementById("load").addEventListener("click", loadBeers);
  document.getElementById("sort").addEventListener("click", sortBeers);
  document.getElementById("shuffle").addEventListener("click", shuffleBeers);
  