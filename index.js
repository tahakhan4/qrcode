const qrInput = document.getElementById("qr-input");
const qrBtn = document.getElementById("qr-btn");
const qrImage = document.getElementById("qr-image");



qrBtn.addEventListener("click", () => {
    const qrValue = qrInput.value;
    // console.log(qrValue);
    if (!qrValue) {
        alert("Please enter a valid URL");
    } else {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
        qrImage.alt = `QR code for ${qrValue}`
    }
})