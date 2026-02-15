interface  chai   {
   qual :  "water" | "level"
}

class makeChai implements chai {
      qual: "water" | "level" = 'level'
} 

// =======In this use only singl teatype at time

// type teaType  = "masala" | "gingal" | "adrak"

// function makechai ( t : teaType){
//     console.log(t)
// }

// ========================use both type together 


// type BaseChai = {teaLevel : number}
// type Extra  = {masala : number}

// type masalaChai = BaseChai & Extra

// const cup : masalaChai = {
//     teaLevel : 4,
//     masala : 3
// }