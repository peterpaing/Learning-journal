import { mainPost, recentPosts, aboutMe } from './data.js';

// Render main post (homepage card)
function renderMainPost() {
    return `
        <div data-main="post">
            <span>${mainPost.date}</span>
            <h2>${mainPost.title}</h2>
            <p>${mainPost.text}</p>
        </div>
    `;
}

// Render recent posts
function renderRecentPosts() {
    return recentPosts
        .map(post => `
            <div class="recent">
                <img src="${post.image}" alt="${post.title}">
                <span>${post.date}</span>
                <h3>${post.title}</h3>
                <p>${post.text}</p>
            </div>
        `)
        .join('');
}

// Show main page (home state)
function showHome() {
    document.querySelector('.main-post').style.display = "block";
    document.querySelector('.view-post').innerHTML = "";
    document.querySelector('.about-me').innerHTML = "";
}

// Render home content
function renderHome() {
    document.querySelector('.main-post').innerHTML = renderMainPost();
    document.querySelector('.recent-post').innerHTML = renderRecentPosts();
    showHome();
}

// View single full post
function viewMainPost() {
    document.querySelector('.view-post').innerHTML = `
        <div>
            <span>${mainPost.date}</span>
            <h2>${mainPost.title}</h2>
            <p>${mainPost.text}</p>
            <img src="${mainPost.image}" alt="${mainPost.title}">

            <div class="text-more">
                <p class="title">How I stay committed to learning</p>
                <p>I like to think of myself as a lifelong learner...</p>

                <p class="title">How I got started</p>
                <p>I started simple and gradually grew my learning journal site...</p>
            </div>

            <h3 class="recent-post-title">Recent posts</h3>
        </div>
    `;

    document.querySelector('.main-post').style.display = "none";
    document.querySelector('.about-me').innerHTML = "";
}

// Render About Me page
function renderAbout() {
    document.querySelector('.about-me').innerHTML = `
        <div class="about-container">
            <img src="${aboutMe.image}" alt="profile">
            <div class="about-main">
                <h2>${aboutMe.title}</h2>
                <p>${aboutMe.text}</p>
            </div>
        </div>

        <div class="text-more">
            <p class="title">How I stay committed to learning</p>
            <p>I like to think of myself as a lifelong learner...</p>

            <p class="title">How I got started</p>
            <p>I started simple and gradually grew my learning journal site...</p>
        </div>

        <h3 class="recent-post-title">Recent posts</h3>
    `;

    document.querySelector('.main-post').style.display = "none";
    document.querySelector('.view-post').innerHTML = "";
}

// Click handling (event delegation)
document.addEventListener('click', function (e) {
    const post = e.target.closest('[data-main="post"]');
    const about = e.target.closest('[data-about="aboutMe"]');
    const home = e.target.closest('#home-link');

    if (post) {
        viewMainPost();
    } 
    else if (about) {
        renderAbout();
    } 
    else if (home) {
        renderHome();
    }
});

// Initial load
renderHome();