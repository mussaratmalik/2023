const { json } = require("react-router-dom");

fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json", {method:'GET',headers:{'Accept':'Application/json',},})
        .then(res => res.json())
        .then(res => console.log(JSON.parse(res.squadName+"  "+res.homeTown+"  "+res.formed+"  "+res.secretBase+"  "+res.active)))
        // console.log(res.)


