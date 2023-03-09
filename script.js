window.onload = function() {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", function(e) {
      console.log("the submit button was clicked!");
    });
  
    const randomBtn = document.getElementById("randomBtn");
    randomBtn.addEventListener("click", function(e) {
      console.log("the random button was clicked!");
    });
  }