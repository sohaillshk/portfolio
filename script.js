        // alert("Welcome to Sohail's Portfolio Wesite.")
const toggleBtn=document.getElementById("themeToggle");
if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light-mode")
    toggleBtn.textContent="☀️"
}
toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("light-mode")

if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "🌙";
    }
});