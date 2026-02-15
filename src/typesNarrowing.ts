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

type chyorder = {
    type : string;
    sugar : number
}

type MasalaChi = { type : "masala" ; spiceLevel : number};
type GingalChi = { type : "gingal" ; spiceLevel : number};
type ElaciChi = { type : "elaci" ; spiceLevel : number};

type chai = MasalaChi | GingalChi | ElaciChi

 function makeChai (order : chai) {
    switch (order.type){
        case  "elaci":
            return "elachi chai";
            break;
        
        case "gingal":
            return " gingal chai";
            break;
        
        case "masala":
            return "masla chia"
            break;
        
    }
 }