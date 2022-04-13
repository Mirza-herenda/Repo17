

let foo=12;
let boo=45;
function main(foo,boo) 
{
    [foo,boo]=[12,45];
    [foo,boo]=[boo,foo];
 
    return{foo,boo}
    
}
console.log(main(foo,boo));