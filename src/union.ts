let order : 'pending'| 'success' | 'failed' = 'pending'
order = 'success'

let subj : number | string = '1M';
subj = 12;

console.log(order , subj)

const  orderDet = ['12','23' , '33' , '44'];
let orderHistory : string | undefined 

for(let num of orderDet){
    if(num === '23'){
        orderHistory = num;
        break;
    }

}
console.log(orderHistory)