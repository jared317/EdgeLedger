// Initialize & add Map
function initMap() {
  // The location 
  const loc = {
    lat: 42.361145,
    lng: -71.057083
  };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, position at location
  const maker = new google.maps.Marker({
    position: loc,
    map: map
  });

}

// Sticky Menu background - opacity setting
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling 
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});