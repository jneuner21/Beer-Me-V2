window.onload = function() {
 const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function(e) {
  console.log("the submit button was clicked!");
  
  // Redirect to the new page
  window.location.href = "https://www.example.com/new-page.html";
});
  
const randomBtn = document.getElementById("randomBtn");
randomBtn.addEventListener("click", function(e) {
  console.log("the random button was clicked!");
  
  // Redirect to the new page
  window.location.href = "https://www.example.com/new-page.html";
});
  }
  