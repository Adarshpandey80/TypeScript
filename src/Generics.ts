function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(10);
identity<boolean>(true);

function wrapInArray<T>(item: T): T[] {
  return [item]
}

wrapInArray("wrapArray function")
wrapInArray(1132424)
wrapInArray({color : "red"})

function boxModel<A,B>(a:A , b:B) : [A, B]{ 
    return [a , b] 
}
boxModel("Boxfunction" , 34)
boxModel("Boxfunction" , "boxMODEL")
boxModel("Boxfunction" , {color: "red"})


interface Box <T> {
    content :T
}
const numbetBox : Box <Number> = {content : 10};
const numberBoxCup : Box <String> = {content: "10"};