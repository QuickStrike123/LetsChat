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

  UserName = localStorage.getItem("User");

  RoomName = localStorage.getItem("RoomName");

  function Logout() {

    localStorage.removeItem("RoomName");

    localStorage.removeItem("UserName");

    window.location = "index.html";
    
  }

  function Send(){

    msg = document.getElementById("MSG").value;

    firebase.database().ref(RoomName).push({

          name:UserName,

          message:msg,

          likes:0

    });

    document.getElementById("MSG").value = "";

  }