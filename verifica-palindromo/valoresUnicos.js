const meuArray = [30, 30, 40, 5, 223, 2040, 3050, 5]

function baloresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));