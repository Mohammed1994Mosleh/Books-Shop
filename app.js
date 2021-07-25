'use strict';

let books=[];
let total=0;
function Book(name,price){
this.name=name;
this.price=price;

books.push(this);

svtolcl();
}

let divEl=document.getElementById('display');
let taEl=document.createElement('table');
divEl.appendChild(taEl);


let headEl=document.createElement('thead');
taEl.appendChild(headEl);

let bkname=document.createElement('td');
bkname.textContent='Book Name';


let bkpageEl=document.createElement('td');
bkpageEl.textContent='Book Page';


let bkprEl=document.createElement('td');
bkprEl.textContent='Book Price';

headEl.appendChild(bkname);
headEl.appendChild(bkpageEl);
headEl.appendChild(bkprEl);

let totEL=document.createElement('p');
function render (){


    taEl.textContent='';
    let headEl=document.createElement('thead');
    taEl.appendChild(headEl);
    
    let bkname=document.createElement('td');
    bkname.textContent='Book Name';
    
    let bkpageEl=document.createElement('td');
    bkpageEl.textContent='Book Page'; 
    
    let bkprEl=document.createElement('td');
    bkprEl.textContent='Book Price';
    
    headEl.appendChild(bkname);
    headEl.appendChild(bkpageEl);

    headEl.appendChild(bkprEl);


    for(let i=0;i<books.length;i++){
        let raEl=document.createElement('tr');

        let boonameEl=document.createElement('td');
        boonameEl.textContent=books[i].name;
       
        let bookpagesEl=document.createElement('td');
        bookpagesEl.textContent=randpages(1, 500);
        
        
        let boopEl=document.createElement('td');
        boopEl.textContent=books[i].price;
        
        

        raEl.appendChild(boonameEl);
        raEl.appendChild( bookpagesEl);
        raEl.appendChild(boopEl);
        taEl.appendChild(raEl);

    }


    // let totEL=document.createElement('p');
    totEL.textContent='';
    total=0;
    for (let i=0;i<books.length;i++){
     total+=Number( books[i].price);

    }

totEL.textContent=total;

divEl.appendChild(totEL);


}

refrmlcl();

function svtolcl(){
let stri=JSON.stringify(books);
localStorage.setItem('books',stri);


}

function refrmlcl(){
let objct=localStorage.getItem('books');
let normalobjct=JSON.parse(objct);


if (normalobjct!= null){
books=normalobjct;



}
render();

}


function randpages(max, min){

    return parseInt( Math.random() * (max - min) + min);



}
randpages(1,500);
console.log(randpages(1,500));

let form=document.getElementById('form');
form.addEventListener('submit',addbook);
function addbook(event){
    event.preventDefault();
    let name=event.target.name.value;
    let price=event.target.price.value;

    let newbook=new Book(name,price);
    console.log(newbook);
    render ();


}