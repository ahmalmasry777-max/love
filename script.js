const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// وظيفة زر "نعم": إنشاء القلوب
yesBtn.addEventListener('click', () => {
    createHearts(50);
});

function createHearts(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            
            // تحديد مكان ومواصفات عشوائية لكل قلب
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
            
            document.body.appendChild(heart);

            // حذف القلب بعد انتهاء الحركة
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }
}

// وظيفة زر "لا": الهروب إلى مكان عشوائي
noBtn.addEventListener('click', moveButton);
noBtn.addEventListener('mouseover', moveButton); // يتحرك حتى لو حاول اللمس/التحويم

function moveButton() {
    noBtn.style.position = 'fixed';
    
    // حساب الحدود ليبقى الزر داخل الشاشة
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}