(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})

(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-NV5EY6EHZX0S-2");

function login(form){
  
    
    let InputElement=document.getElementById("InputElement") ;
    if ((InputElement.value == "bhanu@gmail.com") || (InputElement.value =="user@gmail.com") || (InputElement.value == "demouser@gmail.com"))
    {
      //  alert("Valid User");
        var gsid= (InputElement.value).substr(6,4) ;
        //passing user and account objects:
        aptrinsic("identify",
        {
        //User Fields
        "id": gsid, // Required for logged in app users
        "email": InputElement.value,
        "UserRole": "Admin"
        
        },
        {
        //Account Fields
        "id":"GS2551", //Required
        "name":"International Business Machine",
        

        });
        alert("Valid user");
        form.action="websitepage.html"
        //window.location = "https://bhanuprasadgudivada.github.io/Basic_html/websitepage.html"
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
    //HomePage.classList.remove("d-none")
    //ContactPage.classList.add("d-none")
    //PaymentPage.classList.add("d-none")
    //AboutPage.classList.add("d-none")
    //DataLoaderPage.classList.add("d-none")
    window.location="https://bhanuprasadgudivada.github.io/Basic_html/websitepage.html"
}
function Contact(){
    //HomePage.classList.add("d-none")
    //ContactPage.classList.remove("d-none")
    //PaymentPage.classList.add("d-none")
    //AboutPage.classList.add("d-none")
    //DataLoaderPageclassList.add("d-none")
    //window.location="contactWeb.html"
    window.location="https://bhanuprasadgudivada.github.io/Basic_html/contactWeb.html"
}
function Payment(){
    //HomePage.classList.add("d-none")
    //ContactPage.classList.add("d-none")
    //PaymentPage.classList.remove("d-none")
    //AboutPage.classList.add("d-none")
    //DataLoaderPage.classList.add("d-none")
    window.location="paymentpage.html"
}
function About(){
    //HomePage.classList.add("d-none")
    //ContactPage.classList.add("d-none")
    //PaymentPage.classList.add("d-none")
    //AboutPage.classList.remove("d-none")
    //DataLoaderPage.classList.add("d-none")
    window.location="aboutweb.html"
    
}
function DataLoader(){
    //HomePage.classList.add("d-none")
    //ContactPage.classList.add("d-none")
    //PaymentPage.classList.add("d-none")
    //AboutPage.classList.add("d-none")
    //DataLoaderPage.classList.remove("d-none")
    window.location="dataloader.html"
}
function widget(){
    window.location="widget.html"
}
function Login(){
    window.location="https://bhanuprasadgudivada.github.io/Basic_html/index.html"
}
function disp(){
  dispaly=document.getElementById("dispaly")
  dispaly.classList.toggle("d-none")
}
function TimeOut(){
    aptrinsic("track","HomeTrack")
}