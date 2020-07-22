// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCKwIcVpsSXAMZ9tbK1D6jInJeB6hEtvmg",
    authDomain: "contact-form-b1e77.firebaseapp.com",
    databaseURL: "https://contact-form-b1e77.firebaseio.com",
    projectId: "contact-form-b1e77",
    storageBucket: "contact-form-b1e77.appspot.com",
    messagingSenderId: "562988318856",
    appId: "1:562988318856:web:395f1b9f29c1e856c41f3d",
    measurementId: "G-XBQMTHVZM9"
    };
    firebase.initializeApp(config);
    
    // Reference messages collection
    var messagesRef = firebase.database().ref('messages');
    
    // Listen for form submit
    document.getElementById('contact-form').addEventListener('submit', submitForm);
    
    // Submit form
    function submitForm(e){
      e.preventDefault();
    
      // Get values
      var name = getInputVal('name');
      var phone = getInputVal('phone');
      var date = getInputVal('date');

      // Save message
      saveMessage(name, phone, date);
    }
    
    // Function to get get form values
    function getInputVal(id){
      return document.getElementById(id).value;
    }
    
    // Save message to firebase
    function saveMessage(name, phone, date){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name: name,
        phone: phone,
        date: date,
      });
    }