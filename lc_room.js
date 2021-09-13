const firebaseConfig = {
      apiKey: "AIzaSyBBl_4rhT7rhAQFeT9KYHf0PdyYShepLTc",
      authDomain: "kwitter-a2164.firebaseapp.com",
      databaseURL: "https://kwitter-a2164-default-rtdb.firebaseio.com",
      projectId: "kwitter-a2164",
      storageBucket: "kwitter-a2164.appspot.com",
      messagingSenderId: "762703397997",
      appId: "1:762703397997:web:c932d5fa3d317f51e7ab64"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "lc_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


    function send()
{
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,like:0
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}