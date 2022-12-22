let InputElement=document.getElementById("InputElement") 
function login(){
    if ((InputElement.value === "bhanu@gmail.com") || (InputElement.value ==="user@gmail.com") || (InputElement.value === "demouser@gmail.com")){
        alert("Valid User");
        window.open("websitepage.html")
    }
    else{
        alert("Invaild Username, Please enter valid email ID")
    }
}

let HomePage = document.getElementById("HomePage")
let ContactPage = document.getElementById("ContactPage")
let PaymentPage = document.getElementById("PaymentPage")
let AboutPage = document.getElementById("AboutPage")
let DataLoaderPage = document.getElementById("DataLoaderPage")

function Home(){
    HomePage.classList.remove("d-none")
    ContactPage.classList.add("d-none")
    PaymentPage.classList.add("d-none")
    AboutPage.classList.add("d-none")
    DataLoaderPage.classList.add("d-none")
}
function Contact(){
    HomePage.classList.add("d-none")
    ContactPage.classList.remove("d-none")
    PaymentPage.classList.add("d-none")
    AboutPage.classList.add("d-none")
    DataLoaderPage.classList.add("d-none")
}
function Payment(){
    HomePage.classList.add("d-none")
    ContactPage.classList.add("d-none")
    PaymentPage.classList.remove("d-none")
    AboutPage.classList.add("d-none")
    DataLoaderPage.classList.add("d-none")
}
function About(){
    HomePage.classList.add("d-none")
    ContactPage.classList.add("d-none")
    PaymentPage.classList.add("d-none")
    AboutPage.classList.remove("d-none")
    DataLoaderPage.classList.add("d-none")
}
function DataLoader(){
    HomePage.classList.add("d-none")
    ContactPage.classList.add("d-none")
    PaymentPage.classList.add("d-none")
    AboutPage.classList.add("d-none")
    DataLoaderPage.classList.remove("d-none")
}
function Login(){
    window.open("index.html")
}