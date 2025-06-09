

var config= {kcAllowedFuncNames: ["zendeskchat"]};





(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-OULYAMSSGJ8M-2", config);



/*(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NNXNQK7');*/




/*window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = 'o-1KF7BC-na1';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.anonymize=function(){g.identify(!!0)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.log = function(a,b){g("log",[a,b])};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
    g.setVars=function(n, p){g('setVars',[n,p]);};
    g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
    if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
    g._v="1.3.0";
})(window,document,window['_fs_namespace'],'script','user');*/


  /*(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-BOFSTKFNWCGO-2-2");*/
  
  /*(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-YXISPE4Y7RWZ-2");*/


  
  /*!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="GCxT9zwWZK5cPPuVmJquh4dVEUi1qSGD";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("GCxT9zwWZK5cPPuVmJquh4dVEUi1qSGD");
  analytics.page();
  }}();*/




function login(form){
let a=document.getElementById("InputElement").value ;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
     var b ="";
    if (a ==="admin@gmail.com" || a === "testuser@gmail.com" || a === "demouser@gmail.com" || a === "bprasad@gmail.com" || a === "bhanu@gmail.com" || a === "testuser1@gmail.com" || a === "prasad@gmail.com") {
        b= a.substr(2,4);
        var id = b;

        
        aptrinsic("identify",
            {
                //User Fields
                "id": id, 
                "email": a,
                "UserRole": "Admin"
            },
            {
                //Account Fields
                "id": "GS2551", //Required
                "name": "Gainsight Admin"
            });
            
               
            
           alert("Valid User Welcome to App");
            window.location = "https://bhanuprasadgudivada.github.io/Basic_html/aboutweb.html";
             aptrinsic('set', 'globalContext', {"Product":"Cricket"});
           alert("Logged in user id :"+b+"Admin Login Succesful in production");
           aptrinsic('set', 'globalContext', {"Identified":"true"});
        
    }  

   else if(a ==="admindemo@gmail.com" || a === "Identifyaccount@gmail.com"){ 
         b= a.substr(1,6);
        var id = b;

        aptrinsic("identify",
            {
                //User Fields
                "id": id, 
                "email": a,
                "UserRole": "User"
            },
            {
                //Account Fields
                "id": "GSadmin1", //Required
                "name": "Gainsight Identify",
                "plan": "Premium",
                "timeZone": "IN"
            }
            
                
            );
           alert("Valid User");
           window.location = "https://bhanuprasadgudivada.github.io/Basic_html/contactWeb.html";
           aptrinsic('set', 'globalContext', {"Product":"Telecom"});

           alert("Logged in user id :"+b+"Login Identify Succesful in production");
           aptrinsic('set', 'globalContext', {"Identified":"true"});
    }

     else if(a.match(mailformat)){ 
         b= a.substr(1,6);
        var id = b;

        
        aptrinsic("identify",
            {
                //User Fields
                "id": a, 
                "email": a,
                "UserRole": "User"
            },
            {
                //Account Fields
                "id": "GSID-12345", //Required
                "name": "Gainsight internal"
            }
            
               
            );
           alert("Valid User");
           window.location = "https://bhanuprasadgudivada.github.io/Basic_html/websitepage.html";
            aptrinsic('set', 'globalContext', {"Product":"Ecommerce"});

           alert("Logged in user id :"+b+"Login Succesful in production"); 
            aptrinsic('set', 'globalContext', {"Identified":"true"});
        
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
let WidgetPage= document.getElementById("WidgetPage")

function zendeskchat() {
// api call for the chat bot
  var head = document. getElementsByTagName ( 'head' ) [0];
  var script = document. createElement ('script');
  script.id = "ze-snippet";
  script.src="https://static.zdassets.com/ekr/snippet.js?key=8111c5e2-4a1a-4d87-b711-d81ac1b26be8";
  script.onreadystatechange= handler1;
  script.onload = handler1;
  head.appendChild(script);
        function handler1(){
             console. log ("chatbot added");
        }
  aptrinsic('kcb', 'hide', {
  onError: console.error
});
}



function Home(){

    aptrinsic('set', 'globalContext', {'page':'Home'});
window.location="https://bhanuprasadgudivada.github.io/Basic_html/websitepage.html" ;
aptrinsic('set', 'user', {'ContentType' : 'Home'});

}
function Contact(){
    aptrinsic('set', 'globalContext', {'page':'Contact'});
 window.location="https://bhanuprasadgudivada.github.io/Basic_html/contactWeb.html" ;
aptrinsic('set', 'user', {'ContentType' : 'Contact'});

}
function Payment(){
 
   
    aptrinsic('set', 'globalContext', {'page':'Payment'});
 window.location="https://bhanuprasadgudivada.github.io/Basic_html/paymentpage.html" ;
aptrinsic('set', 'user', {'ContentType' : 'Payment'});

}
function About(){
aptrinsic('set', 'globalContext', {'page':'About'});
window.location="https://bhanuprasadgudivada.github.io/Basic_html/aboutweb.html" ;
aptrinsic('set', 'user', {'ContentType' : 'About'});
    
}
function DataLoader(){
aptrinsic('set', 'globalContext', {'page':'Dataloader'});
window.location="https://bhanuprasadgudivada.github.io/Basic_html/dataloader.html" ;
aptrinsic('set', 'user', {'ContentType' : 'Dataloader'});

}
function widget(){
    
aptrinsic('set', 'globalContext', {'page':'Widget'});
window.location="https://bhanuprasadgudivada.github.io/Basic_html/widgetpage.html" ;
aptrinsic('set', 'user', {'ContentType' : 'Widget'});

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
function GetData(){
    window.location="https://bhanuprasadgudivada.github.io/Basic_html/aboutweb.html"
}

function upload(){
window.location="https://bhanuprasadgudivada.github.io/Basic_html/paymentpage.html"
}

function request(){
aptrinsic("track","RequestButton",{"Name":"Welcome to Ecommerce Website"});
}

//var Value= Result.options[Result.selectedIndex].text;
function paynow(){
    let Amount = document.getElementById("Amount");
    let Result= document.querySelector("#Result");
    let Output= Result.value
    document.querySelector(".result").textContent = Output
    document.querySelector(".res1").textContent = parseInt(Amount.value)
    aptrinsic("track","UpdatePaymentAtrribute",{"PaymentAmount":parseInt(Amount.value),"PaymentStatus":Output});
    aptrinsic('set', 'user',{"PaymentAmount":parseInt(Amount.value),"PaymentStatus":Output});
    alert("Transaction"+" "+Amount.value+" "+Output);

}

let bgColorInput = document.getElementById("bgColorInput")
let fontColorInput = document.getElementById("fontColorInput")
let fontSizeInput = document.getElementById("fontSizeInput")
let paddingInput = document.getElementById("paddingInput")
let fontWeightInput = document.getElementById("fontWeightInput")
let borderRadiusInput = document.getElementById("borderRadiusInput")

function apply() {


    let bgcolor = bgColorInput.value
    document.getElementById("customButton").style.backgroundColor = bgcolor
    let fci = fontColorInput.value
    document.getElementById("customButton").style.color = fci
    let fsi = fontSizeInput.value
    document.getElementById("customButton").style.fontSize = fsi
    let fwi = fontWeightInput.value
    document.getElementById("customButton").style.fontWeight = fwi
    let pad = paddingInput.value
    document.getElementById("customButton").style.padding = pad
    let bdr = borderRadiusInput.value
    document.getElementById("customButton").style.borderRadius = bdr
}

function ApplyFeedBack() {
aptrinsic('send', 'feedback', {'category' : 'Feature request', 'subject' : 'Gainsight PX User Feedback API', 'description' : 'Gainsight PX User feedback API allows you to track your users feedback either from the Contact Us icon or Knowledge Center Bot. Once the user submits the feedback, PX automatically receives the feedback with the help of this API.'});
}

function SubmitNow(){
aptrinsic('send', 'feedback', {'category' : document.getElementById('category').value, 'subject' : document.getElementById('subject').value, 'description' : document.getElementById('description').value});
}

let getspringImage = document.getElementById("medImg")

function spring() {
    document.getElementById("seasonSmallImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png"
    document.getElementById("seasonMediumImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png"
}

function summer() {
    document.getElementById("seasonSmallImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png"
    document.getElementById("seasonMediumImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png"
}

function autumn() {
    document.getElementById("seasonSmallImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png"
    document.getElementById("seasonMediumImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png"
}

function winter() {
    document.getElementById("seasonSmallImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png"
    document.getElementById("seasonMediumImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png"
}



//Iframe code

// Handle form submission and authentication logic here
// Replace this with your actual AI authentication logic
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Perform authentication logic
    // If successful, redirect to main app or handle successful login
    // If unsuccessful, display error message
});
const heading = document.getElementById('dynamicHeading');

// Simple text animation
function animateHeading() {
  heading.textContent = 'Dynamic Portfolio';
  setTimeout(() => {
    heading.textContent = 'Welcome to My Portfolio';
  }, 2000);
}

animateHeading(); // Call the function to start the animation

// Adding a hover effect to navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'red';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#333';
  });
});




function updateTaskStyle(taskId, checked) {
  const taskText = document.getElementById(taskId + '-text');
  if (checked) {
    taskText.classList.remove('unchecked');
    taskText.classList.add('checked');
  } else {
    taskText.classList.remove('checked');
    taskText.classList.add('unchecked');
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const tasks = ['task1', 'task2', 'task3', 'task4'];
    tasks.forEach(task => {
        const checkbox = document.getElementById(task);
        if (checkbox && localStorage.getItem(task)) {
            checkbox.checked = localStorage.getItem(task) === 'true';
            updateTaskStyle(task, checkbox.checked);
        }
    });
});

window.addEventListener('beforeunload', function() {
    const tasks = ['task1', 'task2', 'task3', 'task4'];
    tasks.forEach(task => {
        const checkbox = document.getElementById(task);
        if (checkbox) {
            localStorage.setItem(task, checkbox.checked);
        }
    });
});


