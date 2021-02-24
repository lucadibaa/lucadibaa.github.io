// Show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show-menu')
        });
    }
}
showMenu('nav_toggle', 'nav_menu')

// Remove Menu mobile
const navlink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction))

// Change Header Background
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 200) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

// GSAP Animation
gsap.from('.home-img', {opacity: 0, duration: 2, delay: .5, x: 60})
gsap.from('.home-data', {opacity: 0, duration: 2, delay: .8, y: 25})
gsap.from('.home-greeting, .home-name, .home-profession', {opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2})
gsap.from('.nav-logo, .nav-toggle', {opacity: 0, duration: 2, delay: 1.4, y: 25, ease: 'expo.out', stagger: .2})
gsap.from('.nav-item', {opacity: 0, duration: 2, delay: 1.7, y: 25, ease: 'expo.out', stagger: .2})
gsap.from('.home-social-icon', {opacity: 0, duration: 2.3, delay: 2, y: 25, ease: 'expo.out', stagger: .2})


// Skills jQuery Animation
$('.skill-per').each(function() {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({animatedValue: 0}).animate({animatedValue: per}, {
        duration: 1500,
        step: function() {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function() {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
    });
});

// projects object
const projects = [
    {
      id: 1,
      title: "Band Website",
      subtitle: "website",
      category: 'Websites',
      img: "./images/nonoise-preview.jpg",
      link: 'https://nonoise-project.netlify.app',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere. Nam nulla facere consequuntur a illum unde consequatur est dolore, iure, nesciunt suscipit sit, placeat quisquam eaque doloremque dignissimos adipisci!`,
    },
    {
        id: 2,
        title: "The Road",
        subtitle: "website concept",
        category: 'Websites',
        img: "./images/theroad-preview.jpg",
        link: 'https://lucadibaa-theroad-project.netlify.app',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere. Nam nulla facere consequuntur a illum unde consequatur est dolore, iure, nesciunt suscipit sit, placeat quisquam eaque doloremque dignissimos adipisci!`,
    },
    {
        id: 3,
        title: "Architecture",
        subtitle: "website concept",
        category: 'Websites',
        img: "./images/architecture-preview.jpg",
        link: 'https://lucadibaa-architecture-project.netlify.app',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere. Nam nulla facere consequuntur a illum unde consequatur est dolore, iure, nesciunt suscipit sit, placeat quisquam eaque doloremque dignissimos adipisci!`,
    },
    {
        id: 4,
        title: "Bakery",
        subtitle: "website concept",
        category: 'Websites',
        img: "./images/cake-preview.jpg",
        link: 'https://lucadibaa-bakery-project.netlify.app',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere. Nam nulla facere consequuntur a illum unde consequatur est dolore, iure, nesciunt suscipit sit, placeat quisquam eaque doloremque dignissimos adipisci!`,
    },
    {
        id: 5,
        title: "Loruki Web Hosting",
        subtitle: "website concept",
        category: 'Websites',
        img: "./images/loruki-preview.jpg",
        link: 'https://lucadibaa-loruki-project.netlify.app',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere. Nam nulla facere consequuntur a illum unde consequatur est dolore, iure, nesciunt suscipit sit, placeat quisquam eaque doloremque dignissimos adipisci!`,
    },
    {
        id: 6,
        title: "How Old Are You?",
        subtitle: "javascript project",
        category: 'JS Web Applications',
        img: "./images/howoldareyou-preview.jpg",
        link: 'https://lucadibaa-howoldareyou-project.netlify.app',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere. Nam nulla facere consequuntur a illum unde consequatur est dolore, iure, nesciunt suscipit sit, placeat quisquam eaque doloremque dignissimos adipisci!`,
    },
    {
        id: 7,
        title: "Scomposizioni",
        subtitle: "javascript project",
        category: 'JS Web Applications',
        img: "./images/scomposizioni-preview.jpg",
        link: 'https://lucadibaa-scomposizioni-project.netlify.app',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere. Nam nulla facere consequuntur a illum unde consequatur est dolore, iure, nesciunt suscipit sit, placeat quisquam eaque doloremque dignissimos adipisci!`,
    },
    {
        id: 8,
        title: "Menu",
        subtitle: "javascript project",
        category: 'JS Web Applications',
        img: "./images/menu-preview.jpg",
        link: 'https://lucadibaa-menu-project.netlify.app',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere. Nam nulla facere consequuntur a illum unde consequatur est dolore, iure, nesciunt suscipit sit, placeat quisquam eaque doloremque dignissimos adipisci!`,
    },
    {
        id: 9,
        title: "Blackjack",
        subtitle: "javascript game",
        category: 'JS Games',
        img: "./images/blackjack-preview.jpg",
        link: 'https://lucadibaa-blackjack-project.netlify.app',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere. Nam nulla facere consequuntur a illum unde consequatur est dolore, iure, nesciunt suscipit sit, placeat quisquam eaque doloremque dignissimos adipisci!`,
    },
];
projectsContainer = document.querySelector('.projects-container')
btnsContainer = document.querySelector('.filter-btns')

// load projects
window.addEventListener('DOMContentLoaded', function () {
    displayProjects(projects)
    displayButtons()
});

// display projects
function displayProjects(projects) {
    let displayProject = projects.map(function (item) {
    return `
        <!-- single item -->
        <div class="project">
            <div class="project-link">
                <a href="${item.link}" target="_blank">
                    <img src="${item.img}" alt="project img" class="project-img">
                <button class="project-btn project-btn-live">View Live</button></a>
            </div>
            <div class="project-data">
                <span class="project-subtitle">${item.subtitle}</span>
                <h2 class="project-title">${item.title}</h2>
                <p class="project-description">${item.desc}</p>
            </div>
        </div>
        <!-- end of single item -->
        `
    })
    displayProject = displayProject.join('')
    projectsContainer.innerHTML = displayProject
}

// display buttons
function displayButtons() {

    // get unique categories
    const categories = projects.reduce(function(values, item) {
        if ( !values.includes(item.category) ) {
            values.push(item.category)
        }
        return values
    }, ['All'])
    console.log(categories)
    const categoryBtns = categories.map(function(category) {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join('')
    btnsContainer.innerHTML = categoryBtns
    const filterBtns = document.querySelectorAll('.filter-btn')

    // filter items
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            console.log(e.currentTarget.dataset.id)
            const category = e.currentTarget.dataset.id
            const projectsCategory = projects.filter(function(item) {
                if ( item.category === category ) {
                    return item
                }
            })
            if ( category === 'All' ) {
                displayProjects(projects)
            } else {
                displayProjects(projectsCategory)
            }
        })
    })
}