let colors = ['Red' , 'Green' , 'White' , 'Black']

let first = ''
let second = ''
let third = ''

for(let i = 0; i < colors.length; i++) {
    first += colors[i]+','
    second += colors[i]+','
    third += colors[i]+'+'
}
// for(let i = 0; i < colors.length; i++) {
//     second += colors[i]+','
// }
// for (let i =0; i < colors.length; i++) {
//     third += colors[i]+'+'
// }

console.log(first)
console.log(second)
console.log(third) //mingi moodul kadunud probleeme tekitanud kadunud i leidsin ülesse