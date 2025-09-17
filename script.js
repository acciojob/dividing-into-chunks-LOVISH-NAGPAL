const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const output=[]
const divide = (arr, n) => {
	let arr2=[]
for(let i=0;i<arr.length;i++){
	if(arr2.length==0 && i=!arr.length-1 ){
		arr2.push(arr[i])
		continue
	}

	if(arr2.length==0 && i==arr.length-1 ){
		arr2.push(arr[i])
		output.push(arr2)
		continue
	}
if(arr2.reduce((i,e)=>i+e)<=n){
	arr2.push(arr[i])
	if(arr2.reduce((i,e)=>i+e)<=n  && i==arr.length-1){
		output.push(arr2)
		
	}else if(arr2.reduce((i,e)=>i+e)<=n){
		continue
	}
	
	else{
		arr2.pop()
		output.push(arr2)
		arr2=[arr[i]]
	}
}
}
};
divide(arr,5)
console.log(output)



const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
