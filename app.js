const teams = [//esto es un array de objetos
{
    name: "ALIANZA LIMA",
    image: "img\\alianza-lima.png",
    foundationYear: 1901,
    position: 1
},
{
    name: "S. CRISTAL",
    image: "img\\sporting-cristal.png",
    foundationYear: "13 de diciembre de 1955",
    position: 2
},
{
    name: "Universitario de Deportes",
    image: "img\\universitario-de-deportes.png",
    foundationYear: "7 de agosto de 1924",
    position: 3
},
{
    name: "Deportivo Garcilaso",
    image: "img\\deportivo-garcilaso-1.png",
    foundationYear: 1957,
    position: 4
},
{
    name: "Alianza Atlético",
    image: "img\\alianza-atletico-1.png",
    foundationYear: "18 de enero de 1920",
    position: 5
},
{
    name: "Carlos A. Mannucci",
    image: "img\\carlos-a-mannucci.png",
    foundationYear: 1959,
    position: 6
},
{
    name: "Cusco Fútbol Club",
    image: "img\\cusco-futbol-club.png",
    foundationYear: 2009,
    position: 7
},
{
    name: "Sport Huancayo",
    image: "img\\sport-huancayo-1.png",
    foundationYear: "7 de febrero de 2007",
    position: 8
},
{
    name: "Universidad César Vallejo",
    image: "img\\universidad-cesar-vallejo.png",
    foundationYear: 1996,
    position: 9
},
{
    name: "ADT Tarma",
    image: "img\\adt-tarma.png",
    foundationYear: 1929,
    position: 10
},
{
    name: "Atlético Grau",
    image: "img\\atletico-grau-1.png",
    foundationYear: "5 de junio de 1919",
    position: 11
},
{
    name: "Deportivo Municipal",
    image: "img\\deportivo-municipal-1.png",
    foundationYear: "27 de julio de 1935",
    position: 12
},
{
    name: "Unión Comercio",
    image: "img\\union-comercio.png",
    foundationYear:"31 de enero de 2002",
    position: 13
},
{
    name: "UTC Cajamarca",
    image: "img\\utc-cajamarca.png",
    foundationYear:"14 de julio de 1964",
    position: 14
},
{
    name: "Cienciano",
    image: "img\\cienciano.png",
    foundationYear: "8 de julio de 1901",
    position: 15
},
{
    name: "Sport Boys",
    image: "img\\sport-boys.png",
    foundationYear: "28 de julio de 1927",
    position: 16
},
{
    name: "FBC Melgar",
    image: "img\\fbc-melgar.png",
    foundationYear: 1915,
    position: 17
},
{
    name: "Academia Cantolao",
    image: "img\\academia-cantolao.png",
    foundationYear: 2012,
    position: 18
},
{
    name: "DEPORTIVO BINACIONAL",
    image: "img\\deportivo-binacional.png",
    foundationYear: "18 de diciembre de 2010",
    position: 19
}
];

const teamsContainer = document.querySelector(".teams");//esto es para seleccionar el div que tiene la clase teams

function renderTeams() {//esta funcion es para renderizar los equipos
    teams.forEach((team) => {//esto es un forEach para recorrer el array de objetos
        const teamDiv = document.createElement("div");
        teamDiv.className = "team";
        const image = document.createElement("img");
        image.src = team.image;
        image.alt = `${team.name} logo`;
        const name = document.createElement("h2");
        name.innerText = team.name;
        const foundationYear = document.createElement("p");
        foundationYear.innerText = `Año de fundación: ${team.foundationYear}`;
        const position = document.createElement("p");
        position.className = "position";
        position.innerText = `Posición actual: ${team.position}`;
        teamDiv.appendChild(image);
        teamDiv.appendChild(name);
        teamDiv.appendChild(foundationYear);
        teamDiv.appendChild(position);
        teamsContainer.appendChild(teamDiv);
        });
}

renderTeams();//llamamos a la funcion para que se ejecute
