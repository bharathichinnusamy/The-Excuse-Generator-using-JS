function execuseGenerator(){
let who = ['the dog','my granma','his turtle','my bird','the cat'];
let what = ['eat','pissed','crushed','broked','sleep'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying','when i sleep'];

let x=Math.floor(Math.random()*(who.length-1));
console.log(who[x]);
let y=Math.floor(Math.random()*(what.length-1));
console.log(what[y]);
let z=Math.floor(Math.random()*(when.length-1));
console.log(when[z]);

const excuse=who[x]+" "+what[y]+" "+when[z];
console.log(excuse);
document.getElementById("demo").innerHTML = excuse;
}



