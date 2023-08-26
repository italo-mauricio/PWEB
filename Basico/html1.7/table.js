function createTable(items, propertyNames, divId) {
    const div = document.getElementById(divId);
    const headers = propertyNames.map(propertyName => propertyName.charAt(0).toUpperCase() + propertyName.slice(1));
    const headerRow = `<tr>${headers.map(header => `<th>${header}</th>`).join("")}</tr>`;

    const itemsHtml = items.map(item => {
        const cells = propertyNames.map(propertyName => {
            const value = item[propertyName] || "";
            return `<td>${value}</td>`;
        });
        return `<tr>${cells.join("")}</tr>`;
    });

    div.innerHTML = `<table>${headerRow}${itemsHtml.join("\n")}</table>`;
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
        createTable(cervejas, ["name", "alcohol", "style", "ibu", "brand"], "cervejasDiv");
    } catch (error) {
        document.getElementById("cervejasDiv").innerHTML = "Fudeu papae...";
    }
}

async function sortBeers() {
    try {
        const cervejas = await fetchData();
        cervejas.sort((a, b) => a.name.localeCompare(b.name));
        createTable(cervejas, ["name", "alcohol", "style", "ibu", "brand"], "cervejasDiv");
    } catch (error) {
        document.getElementById("cervejasDiv").innerHTML = "Vixe...";
    }
}

async function shuffleBeers() {
    try {
        const cervejas = await fetchData();
        const shuffledCervejas = [...cervejas].sort(() => Math.random() - 0.5); // Fisher-Yates shuffle
        createTable(shuffledCervejas, ["name", "alcohol", "style", "ibu", "brand"], "cervejasDiv");
    } catch (error) {
        document.getElementById("cervejasDiv").innerHTML = "Vixe...";
    }
}

const botao = document.getElementById("load");
botao.addEventListener("click", loadBeers);

const botaoOrdenar = document.getElementById("sort");
botaoOrdenar.addEventListener("click", sortBeers);

const botaoEmbaralhar = document.getElementById("shuffle");
botaoEmbaralhar.addEventListener("click", shuffleBeers);