var names = "";
var gender = "";
var age = "";

function TeamA() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const displayTeamA = document.getElementById("displayTeamA");

    if (name == "") {
        alert("Name cannot be empty!!!");
        return;
    }

    if (age < 20) {
        alert("Only no allow under 20");
        return;
    }

    displayTeamA.innerHTML += "<p>" + name + " " + gender + " " + age + "</p>";

}

    function TeamB() {
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;
        const displayTeamB = document.getElementById("displayTeamB");
    
        if (name == "") {
            alert("Name cannot be empty!!!");
            return;
        }
    
        if (age < 20) {
            alert("Only no allow under 20");
            return;
        }
    
        displayTeamB.innerHTML += "<p>" + name + " " + gender + " " + age + "</p>";
    }
