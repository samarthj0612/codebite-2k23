// #loader
var spans1 = document.querySelectorAll("#loader1 span");
var i = 0;
var animationD = 1.9;

spans1.forEach(function (span) {
  span.style.top = `${i}px`;
  span.style.left = `${i}px`;
  span.style.bottom = `${i}px`;
  span.style.right = `${i}px`;
  span.style.animationDelay = `${animationD}s`;
  i += 10;
  animationD -= 0.1;
});

var spans2 = document.querySelectorAll("#loader2 span");
var i = 0;
var animationD = 1.9;

spans2.forEach(function (span) {
  span.style.top = `${i}px`;
  span.style.left = `${i}px`;
  span.style.bottom = `${i}px`;
  span.style.right = `${i}px`;
  span.style.animationDelay = `${animationD}s`;
  i += 10;
  animationD -= 0.1;
});

var count = document.querySelector("#count");
var temp = 0;

setInterval(function () {
  if (temp == 101) {
    var load = gsap.timeline();
    load
      .to("#sj-loader", {
        opacity: 0,
        delay: 1,
        duration: 2,
        ease: "power4.out",
      })
      .to("#sj-loader", {
        y: "-100vh",
      });
    return;
  }
  count.textContent = temp++;
}, 15);

// #navbar
window.addEventListener("scroll", function (dets) {
  if (this.scrollY > 200) {
    document.querySelector("nav").style.boxShadow = "0px 4px 20px rgba(0, 0, 0, 0.8)";
  } else {
    document.querySelector("nav").style.boxShadow = "0px 4px 20px rgba(0, 0, 0, 0.5)";
  }
});

// #menubar
const open = document.querySelector("nav .bars");
const close = document.querySelector(".close");
var tl = gsap.timeline({ defaults: { duration: 1, ease: "expo.inOut" } });

open.addEventListener("click", () => {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.to("#overlay", { top: 0 })
      .to("#overlay", { width: "100%" }, "-=.1")
      .to( "#overlay ul li a", {
        opacity: 1,
        pointerEvents: "all",
        stagger: 0.2 
      }, "-=.8" )
      .to(".close", { opacity: 1, pointerEvents: "all" }, "-=.8")
      .to("#overlay h2", { opacity: 1 }, "-=1");
  }
  setTimeout(() => {
    document.querySelector("#overlayImage").style.display = "initial";
  }, 3000);
});

close.addEventListener("click", () => {
  document.querySelector("#overlayImage").style.display = "none";
  tl.reverse();
});

const elems = document.querySelectorAll(".elems");
const imageDiv = document.querySelector("#overlayImage");

elems.forEach(function (elem) {
  elem.addEventListener("mouseover", function () {
    imageDiv.style.display = "initial";
    let img = elem.getAttribute("data-image");
    let w = elem.getAttribute("data-width");
    let h = elem.getAttribute("data-height");
    imageDiv.style.backgroundImage = `url(${img})`;
    imageDiv.style.width = w;
    imageDiv.style.height = h;
  });

  document.addEventListener("mousemove", function (dets) {
    imageDiv.style.left = `${dets.x - 150}px`;
    imageDiv.style.top = `${dets.y - 150}px`;
  });
});

// #teamMembers
let imagebox = document.querySelectorAll(".imagebox");
let contentBx = document.querySelectorAll(".contentBx");

for (let i = 0; i < imagebox.length; i++) {
  imagebox[i].addEventListener("mouseover", function () {
    for (let i = 0; i < contentBx.length; i++) {
      contentBx[i].className = "contentBx";
    }
    document.getElementById(this.dataset.id).className = "contentBx active";

    for (let i = 0; i < contentBx.length; i++) {
      imagebox[i].className = "imagebox";
    }
    this.className = "imagebox active";
  });
}

// #main's
document
  .querySelector("#main1 #container")
  .addEventListener("mousemove", function (dets) {
    document.querySelector("#main1 video").style.transform = `translate(-${
      dets.clientX / 10
    }px, ${dets.clientY / 10}px)`;
  });

for (var i = 0; i < 8; i++) {
  document.querySelector("#cards").innerHTML += `<div id="card">
    <div id="top">
      <img src="assets/images/img.jpg" alt="" />
    </div>
    <div id="btm">
      <h3>Jewellery</h3>
      <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, laborum! </p>
      <div id="price" class="d-flex justify-content-between align-items-center" >
        <span>$79</span>
        <button id="cartBtn" class="btn btn-warning"> Add to cart </button>
      </div>
    </div>
  </div>`;
}

gsap.from("#main2", {
  scrollTrigger: {
    trigger: "#main1",
    start: "80% 60%",
    end: "80% 20%",
    scrub: 2,
  },
  borderRadius: "50%",
  y: 100,
});

gsap.from("#main3", {
  scrollTrigger: {
    trigger: "#main2",
    start: "80% 60%",
    end: "80% 20%",
    scrub: 2,
  },
  borderRadius: "50%",
  y: 100,
});

gsap.from("#main4", {
  scrollTrigger: {
    trigger: "#main3",
    start: "80% 60%",
    end: "80% 20%",
    scrub: 2,
  },
  borderRadius: "50%",
  y: 100,
});

gsap.from("#main5", {
  scrollTrigger: {
    trigger: "#main4",
    start: "80% 60%",
    end: "80% 20%",
    scrub: 2,
  },
  borderRadius: "50%",
  y: 100,
});

var tl_cross_divs = gsap.timeline({
  scrollTrigger: {
    trigger: "#main4",
    start: "20% 40%",
  },
});

tl_cross_divs
  .from(".img1 img", 1, {
    y: 500,
    scale: 1.4,
    stagger: 0.2,
    opacity: 0,
  })
  .to(".img1 img", 2, {
    y: -50,
    stagger: 0.05,
    duration: 1,
    ease: Expo.easeInOut,
  });
