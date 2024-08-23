// intro animation
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: 'restart reverse restart reverse',
  scroller: '.content',
  start: '-10% top',
  end: () => `+=${document.querySelector('.content').offsetHeight}`,
  // markers: true,
  
});

gsap.set(['.first h2', '.first img'], {
  autoAlpha: 1,
})

gsap.from('.first h2', {
  scrollTrigger: '.first',
  opacity: 0,
  duration: 1,
  y: 100,
})


gsap.from(['.contact-email h2', '.contact-email .button'], {
  scrollTrigger: '.contact-email',
  duration: 1,
  y: 100,
})

gsap.from(['.contact-linktree h2', '.contact-linktree .button'], {
  scrollTrigger: '.contact-linktree',
  duration: 1,
  y: 100,
})

const circles = gsap.utils.toArray('.circle');

circles.forEach((circle, index) => {
    gsap.to(circle, {
      scrollTrigger: `.link:nth-of-type(${index + 1})`,
      backgroundColor: '#000',
      duration: .3,
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
// const content = document.querySelector('.content');
// const circles = document.querySelectorAll('.circle');

// function getCurrentSection() {
//   const sections = gsap.utils.toArray('.link'); // Get all the sections on the page
//   const currentPosition = content.scrollTop; // Get the current scroll position

//   let currentSection = null;

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop; // Get the top position of each section
//     const sectionHeight = section.offsetHeight; // Get the height of each section
//     const sectionBottom = sectionTop + sectionHeight; // Calculate the bottom position of each section
//     // console.log(currentPosition, sectionTop + "-" + sectionBottom)

//     if (currentPosition >= sectionTop-1 && currentPosition < sectionBottom) {
//       currentSection = section;
//     }
//   });

//   return currentSection;
// }

// content.addEventListener('scroll', () => {
//   const currentSection = getCurrentSection();
//   // console.log(currentSection); // Print the ID of the current section

//   if (currentSection.id == 'first') {
//     circles[0].style.backgroundColor = '#000';
//     circles[1].style.backgroundColor = 'transparent';
//     circles[2].style.backgroundColor = 'transparent';

//   } else if (currentSection.id == 'contact-email') {
//     circles[0].style.backgroundColor = 'transparent';
//     circles[1].style.backgroundColor = '#000';
//     circles[2].style.backgroundColor = 'transparent';
//   } else if (currentSection.id == 'contact-linktree') {
//     circles[0].style.backgroundColor = 'transparent';
//     circles[1].style.backgroundColor = 'transparent';
//     circles[2].style.backgroundColor = '#000';
//   }
// });

// preloader
const buttonProjects = document.getElementById('click-projects');

const preloaderTl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.4 } });

function delayToLink(URL) {
    setTimeout(() => {
        window.location.href = URL;
    }, 2000)
}

buttonProjects.addEventListener('click', () => {
  gsap.set('.preload', {
      y: '100%',
      backgroundColor: getComputedStyle(document.body).getPropertyValue('--blue-bg'),
  })

  preloaderTl
      .to('.preload', {
          y: '0%',
          duration: 2,
          display: 'block',
          ease: 'elastic.out(1, 0.5)',
          delay: 0.3,
      })
  
  delayToLink('https://tranthanhhthao.github.io/swinburne-projects/')
});    

// button magneto
const btnWrapper = document.querySelector('.button-wrapper:nth-of-type(2)');

// mouse move 
function activateMagneto(event, wrapper, element) {
    let boundBox = element.getBoundingClientRect();
    let boundBoxWrapper = wrapper.getBoundingClientRect();
    const magnetoStrength = 55;

    const newX = ((event.clientX - boundBoxWrapper.left)/(boundBoxWrapper.width) - 0.5)
    const newY = ((event.clientY - boundBoxWrapper.top)/(boundBoxWrapper.height) - 0.5)                    

    gsap.to(element, {
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        duration: 0.2,
        ease: 'power1.inOut'
    });   
                   
}

// mouse leave 
function resetMagneto(event, wrapper, element) {
    gsap.to(element, {
        x: 0,
        y: 0,
        duration: 2,
        ease: 'elastic.out(1, 0.3)'
    });
}

// media query
let mm = gsap.matchMedia();

mm.add({
    isMobile: '(max-width: 768px)',
    isDesktop: '(min-width: 769px)',
}, (context) => {

    let { isMobile, isDesktop } = context.conditions;

    if (isDesktop) {
        // add event listener
        btnWrapper.addEventListener('mousemove', (event) => {
            activateMagneto(event, btnWrapper, btnWrapper.querySelector('.nav'));
        })
        btnWrapper.addEventListener('mouseleave', (event) => {
            resetMagneto(event, btnWrapper, btnWrapper.querySelector('.nav'));
        })
    }
})