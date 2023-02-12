// class Person {
//     constructor(firstname, lastname, age, address) {
//         this.firstname = firstname
//         this.lastname = lastname
//         this.age = age
//         this.address = address
//     }
// }

// class Address {
//     constructor(region, district, street, apartment) {
//         this.region = region
//         this.district = district
//         this.street = street
//         this.apartment = apartment
//     }

//DOM
console.log(document);
document.getElementById('myDiv');
const myDiv = document.getElementById('myDiv')
console.log(myDiv);

// myDiv.textContent = 'test text content' //faqat text yozish uchun

// myDiv.innerHTML = '<strong>test text content</strong>' // htmldagi amallarni bajarsa bo'ladi yani html tiliga o'giradi

// const myH1 = document.createElement('h1')
// myH1.style = 'font-weight: 600'
// const mySpam = document.createElement('span')
// mySpam.innerHTML = 'This is spam';
// mySpam.style = 'color: blue'
// myH1.appendChild(mySpam)
// myDiv.innerHTML = myH1.innerHTML 
// console.log(myH1);


//query selector
const myQuery = document.querySelectorAll('.li-item')
console.log(myQuery.length);
for (const iterator of myQuery) {
    console.log(iterator.innerHTML);
}

//Button bosishda mal olsin

const myBtn = document.getElementById('myBtn')
myBtn.addEventListener('click', (e) => {
    // console.log(e);
    // const firstname = document.getElementById('firstname');
    // const lastname = document.getElementById('lastname');
    // console.log(firstname.value, lastname.value);
    const myForm = document.forms.myForm
    console.log(myForm.elements.age.value);
})
