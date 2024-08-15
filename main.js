// intro
const introTl = gsap.timeline({defaults: {duration: 1, ease: 'power2.inOut'}});
  introTl
    .to(['.first h2', '.first img'], {
      yPercent: 0,
      top: '40%',
      opacity: 1,
      stagger: 0.5,
      ease: 'bounce.out',
      duration: 1.5,
    })
    .to('.first img', {
      rotate: '+=360',
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

// track sections
const content = document.querySelector('.content');
const circles = document.querySelectorAll('.circle');

function getCurrentSection() {
  const sections = gsap.utils.toArray('.link'); // Get all the sections on the page
  const currentPosition = content.scrollTop; // Get the current scroll position
  // console.log(currentPosition);

  let currentSection = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop; // Get the top position of each section
    const sectionHeight = section.offsetHeight; // Get the height of each section
    const sectionBottom = sectionTop + sectionHeight; // Calculate the bottom position of each section
    console.log(currentPosition, sectionTop + "-" + sectionBottom)

    if (currentPosition >= sectionTop-1 && currentPosition < sectionBottom) {
      currentSection = section;
    }
  });

  return currentSection;
}

content.addEventListener('scroll', () => {
  const currentSection = getCurrentSection();
  // console.log(currentSection); // Print the ID of the current section

  if (currentSection.id == 'first') {
    circles[0].style.backgroundColor = '#000';
    circles[1].style.backgroundColor = 'transparent';
    circles[2].style.backgroundColor = 'transparent';
  } else if (currentSection.id == 'contact-email') {
    circles[0].style.backgroundColor = 'transparent';
    circles[1].style.backgroundColor = '#000';
    circles[2].style.backgroundColor = 'transparent';
  } else if (currentSection.id == 'contact-linktree') {
    circles[0].style.backgroundColor = 'transparent';
    circles[1].style.backgroundColor = 'transparent';
    circles[2].style.backgroundColor = '#000';
  }
});
