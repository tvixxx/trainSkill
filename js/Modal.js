var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = document.querySelector("[name=login");

link.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.add("show");
	login.focus;
});

close.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.remove("show");
});