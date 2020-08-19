window.addEventListener("load", function () {
  //----------------------JavaScript---------------------------

  let menuBtn = document.getElementById("menu-btn");
  let mobileMenu = document.getElementById("mobile-menu");
  let closeBtn = document.getElementById("close-btn");

  menuBtn.addEventListener("click", function () {
    mobileMenu.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    mobileMenu.style.display = "none";
  });

  let mobileMenuItems = document.getElementsByClassName("mobile-menu-item");

  for (let i = 0; i < mobileMenuItems.length; i++) {
    mobileMenuItems[i].addEventListener("click", function () {
      mobileMenu.style.display = "none";
    });
  }

  //------------------------jQuery-----------------------------

  /*   $("#menu-btn, #close-btn").click(function () {
    $("#mobile-menu").toggle();
  }); */

  //----------------------JavaScript---------------------------

  let heroSection = document.getElementById("hero-section");
  let heroSectionHeight = heroSection.clientHeight;
  let header = document.getElementById("header");

  document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > heroSectionHeight) {
      if (!header.classList.contains("solid-header")) {
        header.classList.add("solid-header");
      }
    } else {
      if (header.classList.contains("solid-header")) {
        header.classList.remove("solid-header");
      }
    }
  });

  //------------------------jQuery-----------------------------

  /*   $(document).scroll(function () {
    let header = $("#header");

    if ($(this).scrollTop() > $("#hero-section").height()) {
      if (!header.hasClass("solid-header")) {
        header.addClass("solid-header");
      }
    } else {
      if (header.hasClass("solid-header")) {
        header.removeClass("solid-header");
      }
    }
  }); */

  //------------------------JS-MAP-----------------------------

  var myMap = L.map("map", {
    center: [45.77216, 19.11606],
    zoom: 17,
  });

  //myMap.setView([45.77216, 19.11606], 17);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(myMap);

  //myMap.locate({ setView: true, maxZoom: 16 });

  var marker = L.marker([45.77216, 19.11606]).addTo(myMap);
  marker.bindTooltip("Avrama Mrazovića 1");

  marker.on("click", function () {
    alert("Avrama Mrazovića 1, 064 9 525 317, 063 534 166, 025 5 101 101");
  });

  myMap.on("click", function (ev) {
    alert(
      "Coordinates of clicked point is: " + ev.latlng.lat + ", " + ev.latlng.lng
    );
  });
});

//-------------------------COUNTER------------------------------
const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/autoskolalteam.rs/lteamkey1/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}