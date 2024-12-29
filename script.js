
 
    let form = document.getElementById("contactForm");
    form.onsubmit = function (event) {
        event.preventDefault();
        let nameInput = document.getElementById("name");
        let name = nameInput.value;
        let message = document.createElement("p");
        message.textContent = "Thank you, " + name + ", for your message!";
        form.after(message);
        form.reset();
    };
