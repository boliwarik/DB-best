fetch('https://github.com/boliwarik/DB-best/blob/master/test.json')
    .then(response => response.json())
    .then(json => console.log(json));