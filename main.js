fetch("test.json")
    .then(response => response.json())
    .then(json => console.log(JSON.parse(JSON.stringify)));