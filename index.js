let cats =["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
}
cats.push(name)

function destructivelyPrependCat(name){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
return cats.pop(name)
function appendCat(name) {
//  var shiro= [name, ...cats]
//  return shiro 
var c1=cats(cats.slice())
c1.push(name)
return c1}
}

function prependCat(name){
  var cats2=[name, ...cats];
  return cats2;
}
function removeLastCat(){
  var cats2= cats.slice(0,cats.length-1);
  return cats2;
}
function removeFirstCat(){
  var cats2=cats.slice(1);
  return cats2
}