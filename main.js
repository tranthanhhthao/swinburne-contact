// intro
const introTl = gsap.timeline({defaults: {duration: 1, ease: 'power2.inOut'}});

introTl
  .to('.content div img', {
    rotate: 360,
    duration: 3,
  })
  .to('.first h2', {
    top: '35%',
    opacity: 1,
    duration: 1,
    ease: 'bounce.out',
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