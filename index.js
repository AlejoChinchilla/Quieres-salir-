const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function() {
    alert('LOVIU SO MUCH 💗')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt (Math.random()*100);
    const randomY = parseInt (Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`traslate(-${randomX}%,-${randomY}%)`);
})