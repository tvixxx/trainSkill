
var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");

var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");

var successPopup = document.querySelector(".modal-success");

var successClose = successPopup.querySelector(".success-close");

	link.addEventListener("click", function(event){
		event.preventDefault();
		popup.classList.add("show");
		login.focus;
	});

		close.addEventListener("click", function(event){
			event.preventDefault();
			popup.classList.remove("show");
		});

		successPopup.classList.add("hide");

			form.addEventListener("submit", function (event){
				if (!(login.value && password.value)){
					event.preventDefault();
					alert("Enter your login and password");
					return;
				};
				if (login.value.length < 3) {
					event.preventDefault();
					alert ("Low symbols in login");
					return;
				};
				if (password.value.length < 6) {
					event.preventDefault();
					alert ("Low symbols in password");
				} else {
					event.preventDefault();
					successPopup.classList.add("show-success");
					successClose.addEventListener("click", function(event){
						event.preventDefault();
						successPopup.classList.remove("show-success");
					});
				};
			});


			


		
