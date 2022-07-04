const arr1=new Array(10)
for(let i=0;i<arr1.length;i++){
    arr1[i]=false;
}
console.log(arr1)
const arr2=new Array(10)
arr2.fill(0)
// console.log(arr2)

//Fill Array and update:
const response=new Array(9)
response.fill(false)
for(let i=0;i<response.length;i++){
    const rand=Math.floor(Math.random()*10+1)
    response[i]=rand>5?'X':'0'
}
console.log(response)

//Array is mutable
const names=['asibul alam','tamim Iqbal','Shakib al hasan']
function update(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=`${i+1}.${arr[i]}`
    }
    return arr
}
const updatedNames=update(names)
console.log(names)
console.log(updatedNames)

//Adding two matrix
const matrixA=[
    [1,2],
    [2,3],
    [3,4]
]
const matrixB=[
    [3,2],
    [3,45],
    [2,6]
]
const martixSum=(matrixA,matrixB)=>{
const result=[]
for(let i=0;i<matrixA.length;i++){
    const row=[]
    for(let j=0;i<matrixA[i].length;j++){
        row.push(matrixA[i][j]+matrixB[i][j])
    }
    result.push(row)
}
return result
}
const matrixC=martixSum(matrixA,matrixB)