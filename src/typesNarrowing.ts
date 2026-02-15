// function order (value: string | number){
//     if(typeof value === 'string'){
//         return "sstring type of order"
//     }
//     return " numver type of order";
// }

function chiSize( size : 'small' | 'larder' | 'biglarger' | number ){
    if( size === 'small'){
      return " small size chai";
    }
    if(size === 'biglarger' || size=== 'larder'){
        return "larder chi";
    }
    return " number amount of chi";
}

