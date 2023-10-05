<script type="text/javascript">
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-NV5EY6EHZX0S-2");
</script>




function DataLoader(form){
let a=document.getElementById("InputElement").value ;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
     var b ="";
    if (a ==="admin@gmail.com" || a === "testuser@gmail.com" || a === "demouser@gmail.com" || a === "bprasad@gmail.com" || a === "bhanu@gmail.com" || a === "testuser1@gmail.com" || a === "prasad@gmail.com") {
        b= a.substr(6,3);
        var id = b;

        
        aptrinsic("identify",
            {
                //User Fields
                "id": id, 
                "email": a,
                "userrole": "Admin",
            },
            {
                //Account Fields
                "id": "GSID-12345", //Required
                "name": "Gainsight Internal"
            });
           alert("Valid User Welcome to App");
            window.location = "https://bhanuprasadgudivada.github.io/Basic_html/aboutweb.html";
           alert("Logged in user id :"+b);
        
    }
     else if(a.match(mailformat)){ 
         b= a.substr(6,4);
        var id = b;

        
        aptrinsic("identify",
            {
                //User Fields
                "id": id, 
                "email": a,
                "userrole": "Admin",
            },
            {
                //Account Fields
                "id": "GSID-12345", //Required
                "name": "Gainsight"
            });
           alert("Valid User");
           window.location = "https://bhanuprasadgudivada.github.io/Basic_html/websitepage.html";
           alert("Logged in user id :"+b);
        
    }   
    else {
        alert("Please enter a valid username");
    }
    return b;
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
function Login(){
  window.location="https://bhanuprasadgudivada.github.io/Basic_html/websitepage.html"
}
