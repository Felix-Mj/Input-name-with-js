const a = document.querySelector(".text-box")
const btn = document.querySelector("#btn")
let count = 0;
btn.addEventListener("click", function() {
  if (count==0) {
      count++;
      a.type="text";
      btn.innerHTML = '<i class="fa-regular fa-eye"></i>'

  } else {
     count--; 
     a.type = "password";
     btn.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
  }  
})


