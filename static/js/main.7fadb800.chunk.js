(this.webpackJsonppr2=this.webpackJsonppr2||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=n(4),i=n(2);n(6);var s=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"Hangman!")),r.a.createElement("h3",null,"Guess the word and save him!"))};var u=function(e){var t=e.wrongLetters.length;return r.a.createElement("svg",{height:"250",width:"200",className:"figure-container"},r.a.createElement("line",{x1:"60",y1:"20",x2:"140",y2:"20"}),r.a.createElement("line",{x1:"140",y1:"20",x2:"140",y2:"50"}),r.a.createElement("line",{x1:"60",y1:"20",x2:"60",y2:"230"}),r.a.createElement("line",{x1:"20",y1:"230",x2:"100",y2:"230"}),t>0&&r.a.createElement("circle",{cx:"140",cy:"70",r:"20"}),t>1&&r.a.createElement("line",{x1:"140",y1:"90",x2:"140",y2:"150"}),t>2&&r.a.createElement("line",{x1:"140",y1:"120",x2:"120",y2:"100"}),t>3&&r.a.createElement("line",{x1:"140",y1:"120",x2:"160",y2:"100"}),t>4&&r.a.createElement("line",{x1:"140",y1:"150",x2:"120",y2:"180"}),t>5&&r.a.createElement("line",{x1:"140",y1:"150",x2:"160",y2:"180"}))};var m=function(e){var t=e.wrongLetters;return r.a.createElement("div",{className:"wrong-letters-container"},r.a.createElement("div",null,t.length>0&&r.a.createElement("p",null,"Wrong"),t.map((function(e,t){return r.a.createElement("span",{key:t},e)})).reduce((function(e,t){return null===e?[t]:[e,", ",t]}),null)))};var d=function(e){var t=e.selectedWord,n=e.correctLetters;return r.a.createElement("div",{className:"word"},t.split("").map((function(e,t){return r.a.createElement("span",{className:"letter",key:t},n.includes(e)?e:"")})))};function E(e){e(!0),setTimeout((function(){e(!1)}),1e3)}function f(e,t,n){var a="win";return n.split("").forEach((function(t){e.includes(t)||(a="")})),6===t.length&&(a="lose"),a}var h=function(e){var t=e.correctLetters,n=e.wrongLetters,c=e.selectedWord,l=e.setPlayable,o=e.playAgain,i="",s="",u=!0;return"win"===f(t,n,c)?(i="Congrats! You Guessed it Right. :)",u=!1):"lose"===f(t,n,c)&&(i="Oops! You Guessed it Wrong. :(",s="...the word was ".concat(c),u=!1),Object(a.useEffect)((function(){return l(u)})),r.a.createElement("div",{className:"popup-container",style:""!==i?{display:"flex"}:{}},r.a.createElement("div",{className:"popup"},r.a.createElement("h2",null,i),r.a.createElement("h3",null,s),r.a.createElement("button",{onClick:o},"Play Again")))};var v=function(e){var t=e.showNotification;return r.a.createElement("div",{className:"notification-container ".concat(t?"show":"")},r.a.createElement("p",null,"You have already entered this letter"))},y=["application","programming","interface","gadgets","cellphone","iphone","apple","samsung"],g=y[Math.floor(Math.random()*y.length)];var p=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),f=Object(i.a)(l,2),p=f[0],w=f[1],x=Object(a.useState)([]),b=Object(i.a)(x,2),L=b[0],O=b[1],j=Object(a.useState)(!1),k=Object(i.a)(j,2),N=k[0],W=k[1];return Object(a.useEffect)((function(){var e=function(e){var t=e.key,a=e.keyCode;if(n&&a>=65&&a<=90){var r=t.toLowerCase();g.includes(r)?p.includes(r)?E(W):w((function(e){return[].concat(Object(o.a)(e),[r])})):L.includes(r)?E(W):O((function(e){return[].concat(Object(o.a)(e),[r])}))}};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[p,L,n]),r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement("div",{className:"game-container"},r.a.createElement(u,{wrongLetters:L}),r.a.createElement(m,{wrongLetters:L}),r.a.createElement(d,{selectedWord:g,correctLetters:p})),r.a.createElement(h,{correctLetters:p,wrongLetters:L,selectedWord:g,setPlayable:c,playAgain:function(){c(!0),w([]),O([]);var e=Math.floor(Math.random()*y.length);g=y[e]}}),r.a.createElement(v,{showNotification:N}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.7fadb800.chunk.js.map