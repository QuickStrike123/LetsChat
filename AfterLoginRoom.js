const firebaseConfig = {
    apiKey: "AIzaSyDW3bRP8743Qjpcc0ujxGepFei7JP7BNbQ",
    authDomain: "let-us-chat-9fa8d.firebaseapp.com",
    databaseURL: "https://let-us-chat-9fa8d-default-rtdb.firebaseio.com",
    projectId: "let-us-chat-9fa8d",
    storageBucket: "let-us-chat-9fa8d.appspot.com",
    messagingSenderId: "752434301128",
    appId: "1:752434301128:web:b74f9a3807016478217dfd"
  };

firebase.initializeApp(firebaseConfig);

UserName = localStorage.getItem("UserName");

document.getElementById("username").innerHTML = "Welcome To Let Us Chat Mr. / Mrs." + UserName + " We Are Glad You Came To Let Us Chat We Are Most Joy Full That You Have Joined Us ";

function AddRoom() {

    RoomName = document.getElementById("Roomname").value

    localStorage.setItem("RoomName", RoomName);

    firebase.database().ref("/").child(RoomName).update({

        WhyWeMakeThis: "To Make Room"

    });

    window.location = "messagepage.html";

}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                RoomName = childKey;

                console.log("RoomName - " + RoomName);

                Row = "<div class='RoomName' id=" + RoomName + " onclick = 'RoomName(this.id)'> # " + RoomName + "</div><hr>";

                document.getElementById("Output").innerHTML += Row

            });
        });
}
getData();

function RoomName(name) {

    console.log(name);

    localStorage.setItem("RoomNames", name);

    window.location = "messagepage.html";

}

function Logout() {

    localStorage.removeItem("RoomName");

    localStorage.removeItem("UserName");

    window.location = "index.html";
    
  }