
var accountList = [];
var currentUser;
var selectedPlant;
var selectedGraph = "temperature";

//#region GUID (Not Actually Used)
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}
//#endregion

//#region Window On Load
window.onload = function() {

    //#region Elements
    var createbtn = document.getElementById('createBtn'),
        loginbtn = document.getElementById('loginBtn'),
        loginCancelBtn = document.getElementById('loginCancelBtn'),
        createCancelBtn = document.getElementById('createCancelBtn'),
        createAccountBtn = document.getElementById('createAccountBtn'),
        homeModal = document.getElementById('homeDiv'),
        plantModal = document.getElementById('plantDiv'),
        loginModal = document.getElementById('loginDiv'),
        createAccountModal = document.getElementById('createAccountDiv'),
        addPlantMenuBtn = document.getElementById('addPlant'),
        addPlantBtn = document.getElementById('addPlantBtn'),
        removePlantBtn = document.getElementById('removePlant');
        addPlantModal = document.getElementById('addPlantDiv'),
        plantList = document.getElementById('plantListDiv'),
        homeBtn = document.getElementById('homeBtn'),
        profileBtn = document.getElementById('profileBtn'),
        profileModal = document.getElementById('profileModal'),
        logOutBtn = document.getElementById('logOutBtn'),
        temperatureGraphBtn = document.getElementById('temperatureBtn'),
        waterGraphBtn = document.getElementById('waterLevelBtn'),
        lightGraphBtn = document.getElementById('lightLevelBtn'),
        plantImage = document.getElementById('plantImage'),
        plantImageDiv = document.getElementById('plantImageDiv');
    //#endregion

    //#region Window Click
    window.onclick = function(event) {
        if (event.target == loginModal) {
            document.getElementById('loginUsername').value = "";
            document.getElementById('loginPassword').value = "";
            loginModal.style.display = "none";
        }
        else if (event.target == createAccountModal) {
            document.getElementById('createUsername').value = "";
            document.getElementById('createPassword').value = "";
            createAccountModal.style.display = "none";
        }
        else if (event.target == addPlantModal) {
            addPlantModal.style.display = "none";
            document.getElementById('addPlantName').innerHTML = "";
            document.getElementById('addPlantDesc').innerHTML = "";
        }
        else if (event.target != profileModal && event.target != document.getElementById('menuDiv') && event.target != profileBtn) {
            profileModal.style.display = "none";
        }
        if (event.target != plantImageDiv && event.target != plantImage) {
            plantImageDiv.style.display = "none";
        }
        return false;
    }
    //#endregion

    //#region Main Menu Login Button Click
    createbtn.onclick = function() {
        loginModal.style.display = "none";
        createAccountModal.style.display = "block";
        document.getElementById('loginUsername').value = "";
        document.getElementById('loginPassword').value = "";
        return false;
    }
    //#endregion

    //#region Login Cancel Button Click
    loginCancelBtn.onclick = function() {
        document.getElementById('loginDiv').style.display = 'none';
        document.getElementById('loginUsername').value = "";
        document.getElementById('loginPassword').value = "";
        return false;
    }
    //#endregion

    //#region Login Button Click
    loginbtn.onclick = function() {
        accountList.forEach(account => {
            if (account.username == document.getElementById('loginUsername').value &&
            account.password ==  document.getElementById('loginPassword').value) {
                currentUser = account;
                homeModal.style.display = "none";
                plantModal.style.display = "grid";
                loginModal.style.display = "none";
                document.getElementById('loginUsername').value = "";
                document.getElementById('loginPassword').value = "";
                document.getElementById('usernameProfile').innerText = account.username;
                document.getElementById('dateStartedProfile').innerText = account.dateCreated;
                var plantCollection = plantList.getElementsByClassName('plantBtn');
                for(let i = 0; i < plantCollection.length; i++) {
                    plantCollection[i].remove();
                } 
                account.plants.forEach(plant => {                    
                    plantList.appendChild(plant.button);
                })
            }
        });
        resetStats();
        return false;
    }
    //#endregion

    //#region Create Account Cancel Button Click
    createCancelBtn.onclick = function() {
        createAccountModal.style.display = "none";
        document.getElementById('createUsername').value = "";
        document.getElementById('createPassword').value = "";
        return false;
    }
    //#endregion

    //#region Create Account Button Click
    createAccountBtn.onclick = function() {
        var date = new Date();
        accountList.push({
            id: uuidv4(), 
            username: document.getElementById('createUsername').value, 
            password: document.getElementById('createPassword').value,
            avatar: document.getElementById('createAvatar').value,
            dateCreated: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
            plants: []
        });

        loginModal.style.display = "block";
        createAccountModal.style.display = "none";
        document.getElementById('createUsername').value = "";
        document.getElementById('createPassword').value = "";
        return false;
    }
    //#endregion

    //#region Add Plant Menu Button Click
    addPlantMenuBtn.onclick = function() {
        addPlantModal.style.display = "block";
        return false;
    }
    //#endregion

    //#region Add Plant Button Click    
    addPlantBtn.onclick = function() {
        var date = new Date();

        var plantBtn = document.createElement('button');
        plantBtn.type = 'button';
        plantBtn.innerHTML = document.getElementById('addPlantName').value;
        plantBtn.className = 'plantBtn';

        var newPlant = {
            id: uuidv4(),
            button: plantBtn,
            name: document.getElementById('addPlantName').value,
            description: document.getElementById('addPlantDesc').value,
            image: "../_images/plant2.png",
            datePlanted: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
            lightLevel: [],
            waterLevel: [],
            temperature: [],
            growth: 0,
            elapsedTime: []
        }

        plantBtn.onclick = function () {
            var lightLevel = document.getElementById('lightLevel');
            var waterLevel = document.getElementById('waterLevel');
            var temperature = document.getElementById('temperature');
            var datePlanted = document.getElementById('datePlanted');
            var growth = document.getElementById('plantGrowth');
            var description = document.getElementById('plantDesc');
            var image = document.getElementById('plantImage');
            var plantName = document.getElementById('plantName');
            selectedPlant = newPlant;
            var plantList = document.getElementById('plantListDiv');
            var collection = plantList.getElementsByClassName('plantBtn');
        
            newPlant.button.style.opacity = 0.6;
            
            for(let i = 0; i < collection.length; i++) {
                if (collection[i] != newPlant.button) {
                    collection[i].style.opacity = 1;
                }
            }
        
            lightLevel.innerHTML = Math.round(newPlant.lightLevel[newPlant.lightLevel.length - 1] * 100) / 100;
            waterLevel.innerHTML = Math.round(newPlant.waterLevel[newPlant.waterLevel.length - 1] * 100) / 100;
            temperature.innerHTML = Math.round(newPlant.temperature[newPlant.temperature.length - 1] * 100) / 100;
            datePlanted.innerHTML = newPlant.datePlanted;
            growth.innerHTML = newPlant.growth;
            description.innerHTML = newPlant.description;
            image.src = newPlant.image;
            plantName.innerHTML = newPlant.name;

            //#region Update Graphs
            switch(selectedGraph){
                case "temperature":
                    temperatureGraphBtn.style.width = '120px';
                    temperatureGraphBtn.style.opacity = 0.8;
                    waterGraphBtn.style.width = '100px';
                    waterGraphBtn.style.opacity = 1;
                    lightGraphBtn.style.width = '100px';
                    lightGraphBtn.style.opacity = 1;
                    new Chart("graphCanvas", {
                        type: "line",
                        data: {
                            labels: selectedPlant.elapsedTime,
                            datasets: [{
                                fill: false,
                                lineTension: 0,
                                backgroundColor: "rgba(0,0,255,1.0)",
                                borderColor: "rgba(0,0,255,0.1)",
                                data: selectedPlant.temperature
                            }]
                        },
                        options: {
                            legend: {display: false},
                            scales: [{ticks: {min: 0, max:15}}]
                        }
                    });
                    break;
                case "waterlevel":
                    temperatureGraphBtn.style.width = '100px';
                    temperatureGraphBtn.style.opacity = 1;
                    waterGraphBtn.style.width = '120px';
                    waterGraphBtn.style.opacity = 0.8;
                    lightGraphBtn.style.width = '100px';
                    lightGraphBtn.style.opacity = 1;
                    new Chart("graphCanvas", {
                        type: "line",
                        data: {
                            labels: selectedPlant.elapsedTime,
                            datasets: [{
                                fill: false,
                                lineTension: 0,
                                backgroundColor: "rgba(0,0,255,1.0)",
                                borderColor: "rgba(0,0,255,0.1)",
                                data: selectedPlant.waterLevel
                            }]
                        },
                        options: {
                            legend: {display: false},
                            scales: [{ticks: {min: 0, max:15}}]
                        }
                    });
                    break;
                case "lightlevel":
                    temperatureGraphBtn.style.width = '100px';
                    temperatureGraphBtn.style.opacity = 1;
                    waterGraphBtn.style.width = '100px';
                    waterGraphBtn.style.opacity = 1;
                    lightGraphBtn.style.width = '120px';
                    lightGraphBtn.style.opacity = 0.8;
                    new Chart("graphCanvas", {
                        type: "line",
                        data: {
                            labels: selectedPlant.elapsedTime,
                            datasets: [{
                                fill: false,
                                lineTension: 0,
                                backgroundColor: "rgba(0,0,255,1.0)",
                                borderColor: "rgba(0,0,255,0.1)",
                                data: selectedPlant.waterLevel
                            }]
                        },
                        options: {
                            legend: {display: false},
                            scales: [{ticks: {min: 0, max:15}}]
                        }
                    });
                    break;
            }
            //#endregion
        
            document.getElementById('addPlantName').value = "";
            document.getElementById('addPlantDesc').value = "";
            return false;
        }
        plantList.appendChild(plantBtn);

        currentUser.plants.push(newPlant);
        addPlantModal.style.display = "none";
        
        return false;
    }
    //#endregion

    //#region Add Plant Menu Cancel Button Click
    document.getElementById('addPlantCancelBtn').onclick = function() {
        document.getElementById('addPlantDiv').style.display = 'none';
        document.getElementById('addPlantName').innerText = "";
        document.getElementById('addPlantDesc').innerText = "";
    }
    //#endregion

    //#region Remove Plant Button Click
    removePlantBtn.onclick = function() {
        var plantList = document.getElementById('plantListDiv');
        if (selectedPlant != null) {
            plantList.remove(selectedPlant);
            selectedPlant = null;
            resetStats();
        }
    }
    //#endregion

    //#region Home Button Click
    homeBtn.onclick = function() {
        currentUser = null;
        homeModal.style.display = "block";
        plantModal.style.display = "none";
        return false;
    }
    //#endregion

    //#region Profile Button Click
    profileBtn.onclick = function() {
        profileModal.style.display = "flex";
        return false;
    }
    //#endregion

    //#region Log Out Button Click
    logOutBtn.onclick = function() {
        currentUser = null;
        homeModal.style.display = "block";
        plantModal.style.display = "none";
        return false;
    }
    //#endregion

    //#region Temperature Graph Button Click
    temperatureGraphBtn.onclick = function() {
        selectedGraph = "temperature";
        temperatureGraphBtn.style.width = '120px';
        temperatureGraphBtn.style.opacity = 0.8;
        waterGraphBtn.style.width = '100px';
        waterGraphBtn.style.opacity = 1;
        lightGraphBtn.style.width = '100px';
        lightGraphBtn.style.opacity = 1;

        if (selectedPlant != null) {
            new Chart("graphCanvas", {
                type: "line",
                data: {
                    labels: selectedPlant.elapsedTime,
                    datasets: [{
                        fill: false,
                        lineTension: 0,
                        backgroundColor: "rgba(0,0,255,1.0)",
                        borderColor: "rgba(0,0,255,0.1)",
                        data: selectedPlant.temperature
                    }]
                },
                options: {
                    legend: {display: false},
                    scales: [{ticks: {min: 0, max:15}}]
                }
            });
            
        }
        
    }
    //#endregion

    //#region Water Level Graph Button Click
    waterGraphBtn.onclick = function() {
        selectedGraph = "waterlevel";
        temperatureGraphBtn.style.width = '100px';
        temperatureGraphBtn.style.opacity = 1;
        waterGraphBtn.style.width = '120px';
        waterGraphBtn.style.opacity = 0.8;
        lightGraphBtn.style.width = '100px';
        lightGraphBtn.style.opacity = 1;

        if (selectedPlant != null) {
            new Chart("graphCanvas", {
                type: "line",
                data: {
                    labels: selectedPlant.elapsedTime,
                    datasets: [{
                        fill: false,
                        lineTension: 0,
                        backgroundColor: "rgba(0,0,255,1.0)",
                        borderColor: "rgba(0,0,255,0.1)",
                        data: selectedPlant.waterLevel
                    }]
                },
                options: {
                    legend: {display: false},
                    scales: [{ticks: {min: 0, max:15}}]
                }
            });
            
        }
    }
    //#endregion

    //#region Light Level Graph Button Click
    lightGraphBtn.onclick = function() {
        selectedGraph = "lightlevel";
        temperatureGraphBtn.style.width = '100px';
        temperatureGraphBtn.style.opacity = 1;
        waterGraphBtn.style.width = '100px';
        waterGraphBtn.style.opacity = 1;
        lightGraphBtn.style.width = '120px';
        lightGraphBtn.style.opacity = 0.8;

        if (selectedPlant != null) {
            new Chart("graphCanvas", {
                type: "line",
                data: {
                    labels: selectedPlant.elapsedTime,
                    datasets: [{
                        fill: false,
                        lineTension: 0,
                        backgroundColor: "rgba(0,0,255,1.0)",
                        borderColor: "rgba(0,0,255,0.1)",
                        data: selectedPlant.lightlevel
                    }]
                },
                options: {
                    legend: {display: false},
                    scales: [{ticks: {min: 0, max:15}}]
                }
            });
        }
        
    }
    //#endregion

    //#region Plant Image Click
    plantImage.onclick = function() {
        if (selectedPlant != null) plantImageDiv.style.display = "grid";
    }
    //#endregion

    //#region Plant Selection Image Click
    plantSelection1 = document.getElementById('plantSelection1');
    plantSelection2 = document.getElementById('plantSelection2');
    plantSelection3 = document.getElementById('plantSelection3');
    plantSelection4 = document.getElementById('plantSelection4');
    plantSelection5 = document.getElementById('plantSelection5');
    plantSelection6 = document.getElementById('plantSelection6');

    plantSelection1.onclick = function() {
        selectedPlant.image = "../_images/plant1.png";
        plantImage.src = selectedPlant.image;
        plantImageDiv.style.display = "none";
    }
    plantSelection2.onclick = function() {
        selectedPlant.image = "../_images/plant2.png";
        plantImage.src = selectedPlant.image;
        plantImageDiv.style.display = "none";
    }
    plantSelection3.onclick = function() {
        selectedPlant.image = "../_images/plant3.png";
        plantImage.src = selectedPlant.image;
        plantImageDiv.style.display = "none";
    }
    plantSelection4.onclick = function() {
        selectedPlant.image = "../_images/plant4.png";
        plantImage.src = selectedPlant.image;
        plantImageDiv.style.display = "none";
    }
    plantSelection5.onclick = function() {
        selectedPlant.image = "../_images/plant5.png";
        plantImage.src = selectedPlant.image;
        plantImageDiv.style.display = "none";
    }
    plantSelection6.onclick = function() {
        selectedPlant.image = "../_images/plant6.png";
        plantImage.src = selectedPlant.image;
        plantImageDiv.style.display = "none";
    }
    //#endregion

}
//#endregion

//#region Clock
setInterval(runClock, 10000);
function runClock() {
    var lightLevel = document.getElementById('lightLevel');
    var waterLevel = document.getElementById('waterLevel');
    var temperature = document.getElementById('temperature');
    var growth = document.getElementById('plantGrowth');
    var date = new Date();
    var time = Date.now();
    accountList.forEach(account => {
        account.plants.forEach(plant => {
            plant.waterLevel.push(calcSineWave(11, time) + 19 + (Math.random() * 3));
            plant.lightLevel.push(calcSineWave(50000, time) + 50000 + (Math.random() * 2000));
            plant.temperature.push(calcSineWave(15, time) + 57  + (Math.random() * 3));
            plant.elapsedTime.push(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
        });
    });

    //#region Update Graphs
    if (selectedPlant != null) {
        switch(selectedGraph) {
            case "temperature":
                new Chart("graphCanvas", {
                    type: "line",
                    data: {
                        labels: selectedPlant.elapsedTime,
                        datasets: [{
                            fill: false,
                            lineTension: 0,
                            backgroundColor: "rgba(0,0,255,1.0)",
                            borderColor: "rgba(0,0,255,0.1)",
                            data: selectedPlant.temperature
                        }]
                    },
                    options: {
                        legend: {display: false},
                        scales: [{ticks: {min: 0, max:15}}]
                    }
                });
                break;
            case "waterlevel":
                new Chart("graphCanvas", {
                    type: "line",
                    data: {
                        labels: selectedPlant.elapsedTime,
                        datasets: [{
                            fill: false,
                            lineTension: 0,
                            backgroundColor: "rgba(0,0,255,1.0)",
                            borderColor: "rgba(0,0,255,0.1)",
                            data: selectedPlant.waterLevel
                        }]
                    },
                    options: {
                        legend: {display: false},
                        scales: [{ticks: {min: 0, max:15}}]
                    }
                });
                break;
            case "lightlevel":
                new Chart("graphCanvas", {
                    type: "line",
                    data: {
                        labels: selectedPlant.elapsedTime,
                        datasets: [{
                            fill: false,
                            lineTension: 0,
                            backgroundColor: "rgba(0,0,255,1.0)",
                            borderColor: "rgba(0,0,255,0.1)",
                            data: selectedPlant.lightLevel
                        }]
                    },
                    options: {
                        legend: {display: false},
                        scales: [{ticks: {min: 0, max:15}}]
                    }
                });
                break;
        }
    }
    //#endregion

    //#region Update Current Plant Stats
    if (selectedPlant != null) {
        lightLevel.innerHTML = Math.round(selectedPlant.lightLevel[selectedPlant.lightLevel.length-1] * 100) / 100;
        waterLevel.innerHTML = Math.round(selectedPlant.waterLevel[selectedPlant.waterLevel.length-1] * 100) / 100;
        temperature.innerHTML = Math.round(selectedPlant.temperature[selectedPlant.temperature.length-1] * 100) / 100;
        growth.innerHTML = Math.round((parseFloat(growth.innerHTML) + 0.1) * 100) / 100;
    }    
    //#endregion

}
runClock();
//#endregion

//#region Sine Wave Calculation
function calcSineWave(height, time) {
    
    var period = 240000;
    return height * Math.sin(((2 * Math.PI) / period) * time);
}
//#endregion

//#region Reset Stats
function resetStats() {
    var lightLevel = document.getElementById('lightLevel');
    var waterLevel = document.getElementById('waterLevel');
    var temperature = document.getElementById('temperature');
    var datePlanted = document.getElementById('datePlanted');
    var growth = document.getElementById('plantGrowth');
    var description = document.getElementById('plantDesc');
    var image = document.getElementById('plantImage');
    var plantName = document.getElementById('plantName');
    lightLevel.innerHTML = 0;
    waterLevel.innerHTML = 0;
    temperature.innerHTML = 0;
    datePlanted.innerHTML = "";
    growth.innerHTML = 0;
    description.innerText = "";
    image.src = "";
    plantName.innerText = "";

    new Chart("graphCanvas", {
        type: "line",
        data: {
            labels: [0],
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: [0]
            }]
        },
        options: {
            legend: {display: false},
            scales: [{ticks: {min: 0, max: 15}}]
        }
    });

    return false;
}
//#endregion