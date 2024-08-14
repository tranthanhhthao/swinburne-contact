// intro
const introTl = gsap.timeline({defaults: {duration: 1, ease: 'power2.inOut'}});

introTl
  .to('.content', {
    opacity: 1,
    duration: 3,
    rotate: 0,
    transformOrigin: 'top center',
    ease: 'elastic.out(1, 0.3)' // Elastic ease with amplitude 1 and period 0.3

  })
  .to('.content img', {
    // rotate: 360,
    duration: 3,
  }, '<')

// img click
const img = document.querySelector('.content img');

img.addEventListener('click', () => {
  gsap.to(img, {
    rotate: '+=360',
  })
})
  
// copyText
const button = document.getElementById('copy-address');

function copyText() {
  const text = document.getElementById('myemail');
  navigator.clipboard.writeText(text.textContent);

  button.textContent = 'copied!';

    setTimeout(() => {
      button.textContent = 'copy address';
    }, 2000);
}

button.addEventListener('click', copyText);