const wrapper = document.querySelector(".wrapper"),
      telefoneInput = wrapper.querySelector("#telefone"),
      generateBtn = wrapper.querySelector(".form button"),
      qrImg = wrapper.querySelector(".qr-code img");

telefoneInput.addEventListener("input", () => {
    let value = telefoneInput.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    telefoneInput.value = value;
});

generateBtn.addEventListener("click", () => {
    let phoneNumber = telefoneInput.value.replace(/\D/g, '');
    if (!phoneNumber) return;
    generateBtn.innerText = "Gerando um Qr Code..."
    let whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(whatsappLink)}`;
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Gerar Qr Code"
        wrapper.classList.add("active");
    });
});

telefoneInput.addEventListener("keyup", () => {
    if (!telefoneInput.value) {
        wrapper.classList.remove("active");
    }
});
