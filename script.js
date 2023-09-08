(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-NV5EY6EHZX0S-2");


(function(n, t, a, e, x) {
    let i = "aptrinsic";
    n[i] = n[i] || function() {
            (n[i].q = n[i].q || []).push(arguments)
        },
        n[i].p = e, n[i].c = x;

    let r = t.createElement("script");
    r.async = !0;
    r.src = a + "?a=" + e;

    let c = t.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(r, c);
})
(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-OULYAMSSGJ8M-2", {
    cssNonce: "nonce-r@ndom"
});

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
let InputElement=document.getElementById("InputElement") ;
    let email=InputElement.value; 
    var mailid = /^([a-zA-Z0-9\.]+)@([a-zA-Z0-9])+. ([a-z]+)([a-z]+)?$/ ;
    if (mailid.text(email))
    {
      //  alert("Valid User");
        var gsid= (InputElement.value).substr(6,4) ;
        //passing user and account objects:
        aptrinsic("identify",
        {
        //User Fields
        "id": gsid, // Required for logged in app users
        "email": InputElement.value,
        "UserRole":"Admin"

        },
        {
        //Account Fields
        "id":"GS2551", //Required
        "name":"Gainsight",


        });
        alert("Welcome");
        form.action="websitepage.html"
        //window.location = "https://bhanuprasadgudivada.github.io/Basic_html/websitepage.html"
    }
    /*else if (email[:5]===("bhanu")){
        form.action="websitepage.html"
    }*/
    else{
        alert("Invaild Username, Please enter valid email ID")

    }

let HomePage = document.getElementById("HomePage")
let ContactPage = document.getElementById("ContactPage")
let PaymentPage = document.getElementById("PaymentPage")
let AboutPage = document.getElementById("AboutPage")
let DataLoaderPage = document.getElementById("DataLoaderPage")

function Home(){
   
    window.location="https://bhanuprasadgudivada.github.io/Basic_html/websitepage.html"
}
function Contact(){
   
    window.location="https://bhanuprasadgudivada.github.io/Basic_html/contactWeb.html"
}
function Payment(){
 
    window.location="paymentpage.html"
}
function About(){
   
    window.location="aboutweb.html"
    
}
function DataLoader(){
    
    window.location="dataloader.html"
}
function widget(){
    window.location="widgetpage.html"
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

//var Value= Result.options[Result.selectedIndex].text;
function paynow(){
    let Amount = document.getElementById("Amount");
    let Result= document.querySelector("#Result").value;
    let Output= Result
    document.querySelector(".result").textContent = Output
    document.querySelector(".res1").textContent = parseInt(Amount.value)
    aptrinsic("track","Transaction",{"amount":parseInt(Amount.value),"Status":Result.value});
    

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
