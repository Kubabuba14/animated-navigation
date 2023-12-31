const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// COntrol Navigation ANimation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
    })
}

function toggleNav () {
    // Toggle Menue bars Open/ Closed
    menuBars.classList.toggle('change');
    // Toggle Menue to be active/ Inactive
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate in Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // ANimate In - Navi Items
        navAnimation('out', 'in');
    } else {
        // Animate out Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // ANimate out - Navi Items
        navAnimation('in', 'out');
    }
}

// Event Listners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});