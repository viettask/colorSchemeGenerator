(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{4:function(e,o,t){"use strict";t.r(o);t(1);var c=t(3),n=t.n(c),r=(t(9),t(0));n.a.render(Object(r.jsxs)("form",{id:"formCG",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{class:"row header",children:Object(r.jsx)("h1",{children:"Color Scheme Generator"})}),Object(r.jsx)("div",{class:"row header",children:Object(r.jsx)("h3",{children:"Bootstrap, REST API, React"})}),Object(r.jsxs)("div",{class:"row header",children:[Object(r.jsx)("input",{type:"color",id:"color"}),Object(r.jsxs)("select",{id:"mode",name:"mode",children:[Object(r.jsx)("option",{value:"monochrome",children:"Monochrome"}),Object(r.jsx)("option",{value:"monochrome-dark",children:"Monochrome-dark"}),Object(r.jsx)("option",{value:"monochrome-light",children:"Monochrome-light"}),Object(r.jsx)("option",{value:"analogic",children:"Analogic"}),Object(r.jsx)("option",{value:"complement",children:"Complement"}),Object(r.jsx)("option",{value:"analogic-complement",children:"Analogic-complement"}),Object(r.jsx)("option",{value:"triad",children:"Triad"}),Object(r.jsx)("option",{value:"quad",children:"Quad"})]}),Object(r.jsx)("button",{type:"submit",children:"Get color scheme"})]})]}),Object(r.jsx)("div",{id:"container1"}),Object(r.jsx)("div",{id:"container3"}),Object(r.jsx)("div",{id:"container2"}),Object(r.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"}),Object(r.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"})]}),document.getElementById("root"));var i=document.querySelector("#color"),a=document.querySelector("#mode"),l=document.getElementById("formCG"),s=document.querySelector("#container1"),d=document.querySelector("#container2"),j=document.querySelector("#container3");document.getElementById("toolTipText");function m(){var e=i.value;e=e.replace("#","").toUpperCase();var o=a.value,t=[];fetch("https://www.thecolorapi.com/scheme?hex=".concat(e,"&format=json&mode=").concat(o,"&count=6")).then((function(e){return e.json()})).then((function(e){e.colors.map((function(e){return t.push(e.hex.value.replace("#","").toUpperCase())})),s.innerHTML="<div class=row>";for(var o=0;o<6;o++)s.innerHTML+='<div class="bg-color" style="background-color:#'.concat(t[o],'"></div>');s.innerHTML+="</div>",d.innerHTML='\n        <span class="name-El" id="toolTipText">Copy to clipboard</span>';for(var c=0;c<6;c++)j.innerHTML+='\n                              <a href="#"" class="name-El" id="item'.concat(c+1,'" onclick="toolTipText.innerHTML = \'Copied #').concat(t[c],"'\" \n                              onmouseout=\"toolTipText.innerHTML ='Copy to clipboard'\">#").concat(t[c],"</a>")}))}i.value="#F55A5A",m(),l.addEventListener("submit",(function(e){e.preventDefault(),j.innerHTML="",m()}))},9:function(e,o,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.7ff85971.chunk.js.map