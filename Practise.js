// function fruits() {
//     //so here is hositing problem can not access 'a2' before initialization
//     console.log(a1);
//     console.log(a2);
//     var a1 = "rg";
//     let a2 = "pqttt";
// }
// fruits();


//2
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1)
}