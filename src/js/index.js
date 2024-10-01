
function confirmar() {
    var email = document.getElementById("email").value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Escreva seu email, iremos mandar um email para você para podermos resolver seu problema.");
    } else if (!emailPattern.test(email)) {
        alert("Você é retardado? Bota teu email ai po");
    } else {
        alert("ROUBEI SEU EMAIL E SEUS DADOS HOHOHOHO HACKER");
    }
}

