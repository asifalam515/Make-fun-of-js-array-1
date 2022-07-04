const numbers=[2,3,4,57,667,2]
numbers.shift()
// console.log(numbers)
let x=[1,2,3]
let y=x;
x=[]
// console.log(x,y)

// Alternative
let xx=[1,2,3]
let yy=xx;
xx.length=0;
console.log(xx,yy)

//reset array using while loops
while (numbers.length) numbers.pop()
console.log(first)