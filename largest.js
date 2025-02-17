let arr = [10,25,67,89,34,22]
let max = arr[0];

for(let i = 1;i<arr.length;i++)
    if(arr[i]>max)
        max = arr[i];


console.log("largest number",max);
