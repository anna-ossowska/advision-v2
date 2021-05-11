// Smooth Scrolling
$('#navigation a, .btn--main').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      1500
    );
  }
});

// Navigation switch
const navigation = document.getElementById('navigation');
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navigation.classList.remove('navigation--top');
    if (!scrolled) {
      navigation.style.transform = 'translateY(-70px)';
    }
    setTimeout(function () {
      navigation.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  } else {
    navigation.classList.add('navigation--top');
    scrolled = false;
  }
};
