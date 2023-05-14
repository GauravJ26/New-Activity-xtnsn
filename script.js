fetch("https://www.boredapi.com/api/activity")
.then(data=> data.json())
.then(Data =>{
    const Text = Data.activity;
    const mainElement = document.getElementById('mainElement');
    mainElement.innerHTML =  Text; 
});



