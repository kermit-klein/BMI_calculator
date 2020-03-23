const calculateBMI = () => {

    if (checkbox) {
        let weightInput = document.getElementById("weight");
        let heightInput = document.getElementById("height");
        let results = calculateMetricBMI(parseFloat(weightInput.value),parseFloat(heightInput.value));
        
        let message = getBMIClassification(results);
    
        let displayResultsElement = document.getElementById("results");
        displayResultsElement.innerHTML = `<h2 class="alert alert-success" role="alert">Your BMI value is: ${results} and you are deemed ${message}</h2><img src="./assets/images/bmi-chart.png">`
    }  else {
        alert("Check consent box first");
    }
    

}

var checkbox = false;
const checkBox = document.getElementById("myCheck");
checkBox.addEventListener("change",(e)=> {
    if(checkBox.checked) {
        checkbox = true;
    } else {
        checkbox = false;
    }
})