// let a= new  String("JavaScript practice"); //"new" keyword is used to create as an object
// let b= "hello"
// console.log(a); 
// if(a===b)
// console.log("yes");
//  else
//  console.log("no");

// const obj={
//     name: 'bhargavi',
//     lname:'singh'}
//     console.log(obj); // it will show the data in console
//     document.write(obj); // it will only show the availability of the obj on the page

// const obj={
//     "name": "bhargavi",
//     "lname":"singh"} //
//     console.log(obj);  
//     document.write(obj); 

// const obj={
//     "name": "bhargavi",
//     "lname":"singh"} //
//     console.log(obj); 
//     document.write(JSON.stringify(obj)); // function take input obj and return string 

// const obj={
//         "name": "bhargavi",
//         "lname":"singh"} 
//         console.log(obj); 
//         obj.name="shanti"; //can use = with the property of the obj
//         console.log(obj); 

// let arr=[1,2,3,4];
// arr=[3,4,5,]; // re-assignment is possible
// console.log(arr);

// const arr=[1,2,3,4];
// arr.push(10);  //insert ele in th array using push
// console.log(arr);

// const arr=[1,2,3,4];
// console.log(typeof(arr)); // object type


// const obj = {
//     "name": "bhargavi",
//     "lname": "singh"
// }
// console.log(obj);
// console.log(typeof (obj));

// const arr = [1, 2, 'bhargavi', 4];
// document.write(JSON.stringify(arr));
// console.log(typeof (arr));

// console.log(Array.isArray(obj)); // isArray function is used to tell if the object is array or not
// console.log(Array.isArray(arr));



// const obj={
//     name="bhargavi",
//     lname="singh"
// }
// const arr=[1,2,3];

// function checkifobj(x)
// {
// if(Array.isArray(x))
// {
//     console.log("not object"); //it is array
// }
// else if(typeof(x)=="object"){
//     console.log("object");

// }
// else
// {console.log("not object")
// }
// }
//checkifarr()

//forof loop
//forin loop

// console.log(window)
// console.log(innerHeight)   //window functions
// console.log(innerWidth)   

// console.log(window.document)
// // console.log(window)

// console.dir(window.document)
// // console.dir(window)
 
// const r=document.getElementsByTagName('h3') //array is a subset of iterable
// console.log(r); //b
// const r=document.getElementById('first'); //by ID
// console.log(r);
// const s=document.getElementById('second');
// console.log(s);
// const t=document.getElementById('para');
// console.log(t);

// const s=document.querySelectorAll('h3'); //h3 content
// const s=document.querySelectorAll('div>h3'); // All content in h3 of div
// console.log(s);
// s[1];
// console.log(s[1])

// const r=document.getElementsByTagName('h3')
// // r[0].innerText="<h4>Hello world</h4>"
// // // r[0].innerHTML="<h4>Hello world</h4>"
// // console.log(r);

// r[0].setAttribute('tagName','h2')

// const ne= document.createElement("h1") //create new element
// ne.innerText="Dynamic Text"; //enter new value
// // console.log(ne);
// // document.body.appendChild(ne); //append at the last of the body
// const firstdiv=document.getElementsByTagName('div');
// console.log(firstdiv) 
// firstdiv[0].append(ne);
// // firstdiv[0].prepend(ne);
// ne.remove();  //it should be node

// const res=document.querySelector('div');
// const c= document.querySelector('h3');
// res.removeChild(c); // use to remove child tag

//Event

// function getInfo()
// {
//     console.log("click on button");
// }

function getInfo(e) // used in button
{
//     const r=document.querySelector('div');
//     // const e=document.createElement('p');
//     // e.innerText="my name is Bhargavi";
//     r.prepend("my name is Bhargavi ");
console.log(e);
e.target.style.backgroundColor='red'; //color in button
e.target.style.color='white'; //text color
}
