fetch('https://boliwarik.github.io/DB-best/test.json')
    .then(response => response.json())
    .then(json => console.log(json));