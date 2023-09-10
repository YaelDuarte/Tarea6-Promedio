function valorPromedio(A) {
    let sum = 0;
    let res = 0.0;

    for (let i = 0; i < A.length; i++) {
        sum += A[i];
    }

    res = sum / A.length;
    return res;
}

const A = [9, 10, 7, 7, 6, 8, 6];
const res = valorPromedio(A);
console.log("El promedio es: " + res);