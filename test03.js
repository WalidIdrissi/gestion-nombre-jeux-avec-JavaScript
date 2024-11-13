let min = 1;
let max = 100;
let nombre;
nombre = window.prompt(`Entrer un nombre entre ${min} est ${max}`);
if (nombre >= min && nombre <= max) {
    document.write(`bien: ${nombre} !`);
} else if (nombre === "") {
    document.write(`entre un nombre !`);
} else if (nombre >= min && nombre > max) {
    document.write(`cette nombre est plus grand de ${max} !`);
} else if (nombre < min && nombre <= max) {
    document.write(`cette nombre est plus petite de ${min} !`);
} else if (nombre !== Number) {
    document.write(`pas un nombre !`);
} else {
    document.write(`error`);
}
