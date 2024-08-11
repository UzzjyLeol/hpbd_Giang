
// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
  Swal.fire({
    title: 'Do you want to play music in the background?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector('.song').play();
      animationTimeline();
    } else {
      animationTimeline();
    }
  });
});

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy Birthday Do Thi Giang').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

// from(
//   ".profile-picture",
//   0.5, {
//   scale: 3.5,
//   opacity: 0,
//   x: 25,
//   y: -25,
//   rotationZ: -45,
// },
//   "-=2"
// )
//   .to(".six", 0.5, {
//     opacity: 0,
//     y: 30,
//     zIndex: "-1",
//   })