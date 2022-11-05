//solução 1
function verificaPalindromo(string) {
    if(!string) return;

    return string.split("").reversr().join("") === string;
}

console.log(verificaPalindromo("ovo"));


//solução 2
function verificaPalindromo2(string){
    if(!string) return "string inesistente";

    for(let i = 0; i < string.length / 2; 1++) {
        if (string [1] !== string[string.length - 1 - 1]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("abba"));