const openNotification = () => {
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    document.body.classList.add("overflow-hidden")
  }
const closeNotification = () => {
    const notification = document.getElementById('notification');
    notification.classList.add('hidden');
    document.body.classList.remove("overflow-hidden")
  }

const toggleMobileSidebar = () => {
    const sidebar = document.getElementById('mobileSidebar');
    sidebar.classList.remove('-translate-x-full');
    document.body.classList.add("overflow-hidden");
  }

const closeSideBar = () => {
    const sidebar = document.getElementById('mobileSidebar');
    sidebar.classList.add('-translate-x-full');
    document.body.classList.remove("overflow-hidden")
  }




const toggleContent = () => {
    const content = document.getElementById('toggle-content');
    const icon = document.getElementById('arrow-icon');

    content.classList.toggle('hidden');
    icon.classList.toggle('fa-chevron-up');
    icon.classList.toggle('fa-chevron-down');
}

// carousel

const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i")
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildren = [...carousel.children];

let isDragging = false, startX , startScrollLeft;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildren.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildren.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns.forEach(btn => {
   btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
   })
})

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add('dragging')
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX );
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove('dragging')
}

const infiniteScroll = () => {
  if(carousel.scrollLeft === 0){
      carousel.classList.add("no-transition")
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove("no-transition")
    } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
      carousel.classList.add("no-transition")
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition")
  }
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);

let aIsUp = true;
const openExplore = () => {
    const content = document.getElementById('explore-content');
    const btn = document.getElementById('explore-drp');
    aIsUp = !aIsUp;
    content.classList.toggle('hidden');
    if (aIsUp) {
      btn.classList.remove("fa-chevron-up");
      btn.classList.add("fa-chevron-down");
    } else {
      btn.classList.remove("fa-chevron-down");
      btn.classList.add("fa-chevron-up");
    }
  }

let bIsUp = true;
const openAbout = () => {
    const content = document.getElementById('about-content');
    const btn = document.getElementById('about-drp');
    bIsUp = !bIsUp;
    content.classList.toggle('hidden');
    if (bIsUp) {
      btn.classList.remove("fa-chevron-up");
      btn.classList.add("fa-chevron-down");
    } else {
      btn.classList.remove("fa-chevron-down");
      btn.classList.add("fa-chevron-up");
    }
  }

let CIsUp = true;
const openResources = () => {
    const content = document.getElementById('resources-content');
    const btn = document.getElementById('resources-drp');
    CIsUp = !CIsUp;
    content.classList.toggle('hidden');
    if (CIsUp) {
      btn.classList.remove("fa-chevron-up");
      btn.classList.add("fa-chevron-down");
    } else {
      btn.classList.remove("fa-chevron-down");
      btn.classList.add("fa-chevron-up");
    }
  }
let DIsUp = true;
const openPc = () => {
    const content = document.getElementById('pc-content');
    const btn = document.getElementById('pc-drp');
    DIsUp = !DIsUp;
    content.classList.toggle('hidden');
    if (DIsUp) {
      btn.classList.remove("fa-chevron-up");
      btn.classList.add("fa-chevron-down");
    } else {
      btn.classList.remove("fa-chevron-down");
      btn.classList.add("fa-chevron-up");
    }
  }
