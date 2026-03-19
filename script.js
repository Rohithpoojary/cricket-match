const adminID = "admin";
const adminPassword = "cricket123";

// LOGIN
function login() {
    let id = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (id === adminID && pass === adminPassword) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "admin.html";
    } else {
        document.getElementById("error").innerText = "Wrong ID or Password";
    }
}
function sortTable(){

let teams = [
{name:"Attackers Basrur", id:"t1"},
{name:"Jettigeshwara Friends", id:"t2"},
{name:"Friends Anagally", id:"t3"},
{name:"Brahmalingeshwara Friends", id:"t4"},
{name:"Royal Challengers Basrur", id:"t5"},
{name:"Gully Cricketers", id:"t6"}
];

teams.forEach(t=>{
t.points = parseInt(localStorage.getItem(t.id)) || 0;
});

teams.sort((a,b)=>b.points-a.points);

let tbody = document.querySelector(".points-table tbody");
tbody.innerHTML="";

teams.forEach((t,index)=>{
let row = `<tr>
<td>${index+1}</td>
<td>${t.name}</td>
<td id="${t.id}">${t.points}</td>
</tr>`;
tbody.innerHTML += row;
});

}

window.onload = sortTable;

// PROTECT ADMIN PAGE
if (window.location.pathname.includes("admin.html")) {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// SAVE POINTS
function save() {
    localStorage.setItem("t1", document.getElementById("a1").value);
    localStorage.setItem("t2", document.getElementById("a2").value);
    localStorage.setItem("t3", document.getElementById("a3").value);
    localStorage.setItem("t4", document.getElementById("a4").value);
    localStorage.setItem("t5", document.getElementById("a5").value);
    localStorage.setItem("t6", document.getElementById("a6").value);

    alert("Leaderboard Updated ✅");

    // 🔥 Redirect to leaderboard
    window.location.href = "leaderboard.html";
}

// AUTO UPDATE (if multiple tabs)
window.addEventListener("storage", function () {
    if (document.getElementById("t1")) {
        document.getElementById("t1").innerText = localStorage.getItem("t1") || 0;
        document.getElementById("t2").innerText = localStorage.getItem("t2") || 0;
        document.getElementById("t3").innerText = localStorage.getItem("t3") || 0;
        document.getElementById("t4").innerText = localStorage.getItem("t4") || 0;
        document.getElementById("t5").innerText = localStorage.getItem("t5") || 0;
        document.getElementById("t6").innerText = localStorage.getItem("t6") || 0;
    }
});