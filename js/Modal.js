
var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");

var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");

	link.addEventListener("click", function(event){
		event.preventDefault();
		popup.classList.add("show");
		login.focus;
	});

		close.addEventListener("click", function(event){
			event.preventDefault();
			popup.classList.remove("show");
		});

			form.addEventListener("submit", function (event){
				if (!(login.value && password.value)){
					event.preventDefault();
					alert("Nope");
				} else if (!(login.length < 4)) {
					event.preventDefault();
					alert ("low symbols in login!")
				} else if (!(password.length < 6)){
					event.preventDefault();
					alert("low symbols in password");
				};
			});