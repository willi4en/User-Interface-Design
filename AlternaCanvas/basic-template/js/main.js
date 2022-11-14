
var accountList = [];
var currentUser;

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
        createAccountModal = document.getElementById('createAccountDiv')
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

}
//#endregion

