let myForm = document.querySelector('form');

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let result = document.getElementById('result');

    if (height === "" || height <= 0 || isNaN(height)) {
        let message = result.innerHTML = 'Please give a valid height'
        console.log(message);
    } else if (weight === "" || weight <= 0 || isNaN(weight)) {
        let message = result.innerHTML = 'Please give a valid height'
        console.log(message);
    } else {
      let bmi = (weight / ((height*height/10000)).toFixed(2))
        let message = (result.innerHTML = bmi)
        console.log(message);
        
    }
}) 