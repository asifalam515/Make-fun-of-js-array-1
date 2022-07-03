const arr=[1,2,3,4,5]
const n=arr[3]
const m=arr[2]
const x=1,y=0;
// console.log(m,n,arr[x],arr[y],arr[x]+arr[y])

//simple traverse
for(let i=0;i<arr.length;i++){
 
    // console.log(i)
}

//Array sum and Avarage
let sum=0;
for(let i=0;i<arr.length;i++){
   sum+=arr[i] 
console.log(sum)
console.log(sum/arr.length)
}

//Largest Number of the array
const arr2=[34,456,576,6324,565,8,343]
let largestNumber=arr2[0];
for(let i=1;i<arr2.length;i++){
if(arr2[i]>largestNumber){
    largestNumber=arr2[i]
}

}
console.log(largestNumber)

//Q.Find the smalllest number
//Q.find the second largest Number
//Q.