const getMinJump = (5, 3, 6, 7, 9);
const maxobs = Math.max(getMinJump);
const salto = Array.from({ length: maxobs }).fill(0)
    .reduce((trineo, _, index) => {
        if (!getMinJump.includes(index + 1)) trineo.push(index + 1)
        return trineo;

    }, [])

for (let i = 0; i < salto.length; i++) {
    const cantidad = [];
    for (let j = 0; j <= maxobs; j += salto[i]) {
        cantidad.push(j)
    }
    if (cantidad.every((item) => !getMinJump.includes(item))) {
        return salto[i];
    }
}

console.log(getMinJump(5, 3, 6, 7, 9));