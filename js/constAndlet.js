const r = 3.14;
// r = 35; // 상수로 정의했으므로 오류 발생
console.log(r);
emm = 23;
console.log(emm);

function circle(radius) {
    radius = radius * r;
    return radius;
}

a = circle(emm);
console.log(a);