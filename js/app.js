// select all te inputs 
var inputs = document.querySelectorAll('.controls input');

//console.log(inputs);

function update() {

    const suffix = this.dataset.sizing || '';
    // changing the value of the variable
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    //console.log(document.documentElement);
}

inputs.forEach( input => input.addEventListener('change',update));
inputs.forEach( input => input.addEventListener('mousemove',update));