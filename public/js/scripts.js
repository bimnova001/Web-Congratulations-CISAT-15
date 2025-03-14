document.addEventListener("DOMContentLoaded", () => {
    const blur_backgroud = document.getElementById("backgroud");
    const messageContainer = document.getElementById("message-container");
    const graduationMessage = "ประสบความสำเร็จแล้วนะครับ ยินดีด้วยครับ";
    const bg = document.getElementById("animated_background");
    let bgDegree = 0;
    let textDegree = 0;
    const text = document.querySelector(".sub-message");

    function animateBackground() {
        bgDegree += 0.5;
        bg.style.background = `linear-gradient(${degree}deg,  #fff, #ff8000, #591000)`;
        requestAnimationFrame(animateBackground);
    }
    function animateText() {
        textDegree += 0.5; // ปรับมุมของ text gradient
        text.style.background = `linear-gradient(${textDegree}deg,#fff, #ff8000, #591000, #000dff, #ff0000)`;
        text.style.backgroundSize = "200% 200%";
        text.style.webkitBackgroundClip = "text";
        text.style.webkitTextFillColor = "transparent";
        requestAnimationFrame(animateText);
    }
    setInterval(animateBackground, 100);
    requestAnimationFrame(animateText);

    function displayMessage() {
        if (messageContainer) {
            const messageElement = document.createElement("h1");
            messageElement.textContent = graduationMessage;
            messageElement.classList.add("fade-in");
            messageContainer.appendChild(messageElement);
        }
        setInterval(createConfetti, 300);
    }

    displayMessage();
});

function celebrate() {
    startCelebration();
    const card = document.createElement("div");
    card.className = "card";
    const message = "คำอวยพร : ยินดีด้วยนะกับความสำเร็จของพี่ออมนะครับ :D";
    let index = 0;  // เริ่มต้นที่ตัวอักษรแรก
    function typeMessage() {
        if (index < message.length) {
            card.innerHTML +=  message.charAt(index); 
            index++;
            setTimeout(typeMessage, 150);  
        }
    }
    
    typeMessage();  // เริ่มการแสดงข้อควา
    document.body.appendChild(card);
    happyImage.style.display = "block";  
    card.style.display = "block";
    document.querySelector(".congrats-message").textContent = "Congratulations!";
    document.querySelector(".sub-message").textContent = "ยินดีด้วย ไปให้สุดนะ ครับ";
    document.querySelector(".sub-me").textContent = " ";
    document.querySelector(".celebrate-button").textContent = "Happy Graduation นะครับ! 🎉";

    function startCelebration() {
        var happyImage1 = document.getElementById("happyImage1");
        var happyImage2 = document.getElementById("happyImage2");
        var celebrationAudio = document.getElementById("celebrationAudio");
        celebrationAudio.volume = 0.4; // ระดับเสียง 50%
        // ฟังก์ชันแสดงภาพและสุ่มตำแหน่ง
        function showHappyImage() {
            // เลือกภาพที่จะแสดงแบบสุ่ม
            var randomImage = Math.random() < 0.5 ? happyImage1 : happyImage2;
            randomImage.style.display = "block";  // แสดงภาพ
    
            // สุ่มตำแหน่ง
            var randomTop = Math.floor(Math.random() * (window.innerHeight - randomImage.height));
            var randomLeft = Math.floor(Math.random() * (window.innerWidth - randomImage.width));
    
            randomImage.style.top = randomTop + "px";
            randomImage.style.left = randomLeft + "px";
        }
    
        celebrationAudio.play();
        setInterval(showHappyImage, 500);  
    }
}
