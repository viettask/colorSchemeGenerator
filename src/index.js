import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



ReactDOM.render(
 <form id="formCG">
   <div> 
   <div class="row header">
   <h1>Color Scheme Generator</h1>
   </div>

   <div class="row header">
   <h3>Bootstrap, REST API, React</h3>
   </div>
 
   <div class="row header">
   <input type="color" id="color" />
    <select id="mode" name="mode">
      <option value="monochrome">Monochrome</option>
      <option value="monochrome-dark">Monochrome-dark</option>
      <option value="monochrome-light">Monochrome-light</option>
      <option value="analogic">Analogic</option>
      <option value="complement">Complement</option>
      <option value="analogic-complement">Analogic-complement</option>
      <option value="triad">Triad</option>
      <option value="quad">Quad</option>
    </select>
    <button type="submit">Get color scheme</button>
    </div>
    </div>
    <div id="container1">

    </div>
    <div id="container3">

    </div>  
    <div id="container2">

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</form>,
  document.getElementById('root')
);

const colorEl = document.querySelector('#color')
const modeEl = document.querySelector('#mode')
const formEl = document.getElementById('formCG')
const containerEl1 = document.querySelector('#container1')
const containerEl2 = document.querySelector('#container2')
const containerEl3 = document.querySelector('#container3')
const toolTipText = document.getElementById('toolTipText')
colorEl.value="#F55A5A";





function render(){
  let colorCG = colorEl.value;
  colorCG = colorCG.replace('#', '').toUpperCase();
  let modeCG = modeEl.value;
  let colorSequence = [];

  fetch(`https://www.thecolorapi.com/scheme?hex=${colorCG}&format=json&mode=${modeCG}&count=6`)
  .then(res => res.json())
  .then(data => {
    data.colors.map((color) => {
      return colorSequence.push(color.hex.value.replace('#', '').toUpperCase())
  })


  containerEl1.innerHTML = `<div class=row>`;

  for(let i=0; i<6;i++)
  {
    containerEl1.innerHTML += `<div class="bg-color" style="background-color:#${colorSequence[i]}"></div>`
  }
  containerEl1.innerHTML +=`</div>`


    containerEl2.innerHTML = `
        <span class="name-El" id="toolTipText">Copy to clipboard</span>`




  for(let i=0; i<6;i++)
  {
    containerEl3.innerHTML += `
                              <a href="#"" class="name-El" id="item${i+1}" onclick="toolTipText.innerHTML = 'Copied #${colorSequence[i]}'" 
                              onmouseout="toolTipText.innerHTML ='Copy to clipboard'">#${colorSequence[i]}</a>`
  }


})
}


render()

formEl.addEventListener('submit', function(e) {
  e.preventDefault()
  containerEl3.innerHTML =""
  render();
})

function show()
{
//  toolTipText.innerHTML = "Copied ";
  alert("HI")
}






