let reponse : any = '42';

let numericLength : number = (reponse as string).length

type book = {
    name : string
}
let bookString = '{"name" : "reach dad poor dad"}'
let bookobject = JSON.parse(bookString) as book

bookobject.name

type Role = "admin" | "user" 

function checkrole (role : Role) : void {
    if(role === 'admin'){
        console.log("welsome to the admin dasbhboard");
        return 
    }
    if(role === 'user'){
        console.log("welsome to the user dasbhboard");
        return 
    }
    role; // this showes  (never)  because ony type of role and both are used
}