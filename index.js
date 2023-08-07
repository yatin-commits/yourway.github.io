document.getElementById("profile").addEventListener("click", function(event) {
    var dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    event.stopPropagation(); 
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener("click", function(event) {
    var dropdown = document.querySelector(".dropdown-content");
    if (!dropdown.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });


//   SIGNIN KA JAVA

  const signinButton = document.getElementById("blackSign");
  const signinModal = document.getElementById("signinModal");

  signinButton.addEventListener("click", function() {

    signinModal.style.display = "flex";
    // signinModal.style.cursor='pointer';
  });


  signinModal.addEventListener("click", function(event) {
    if (event.target === signinModal) {
      
      signinModal.style.display = "none";
    }
  });


  function toggleForms() {
    const signInForm = document.getElementById('signInForm');
    const registerForm = document.getElementById('registerForm');

    signInForm.style.display = signInForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
  }

  // Event listener for the "REGISTER" button
  const registerButton = document.getElementById('registerBtn');
  if (registerButton) {
    registerButton.addEventListener('click', toggleForms);
  }

