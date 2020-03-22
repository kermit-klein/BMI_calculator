const calculateBMI = () => {
    
    let weightInput = document.getElementById("weight")
    let heightInput = document.getElementById("height")
    let results = calculateMetricBMI(parseFloat(weightInput.value),parseFloat(heightInput.value))
    

    let displayResultsElement = document.getElementById("results")
    displayResultsElement.innerHTML = `<h2 class="alert alert-success" role="alert">Your BMI value is: ${results} and you are deemed ${message}</h2>`
}