import {mainPost , recentPosts , aboutMe} from './data.js'

function renderMainPost() {
    return `<div class="main-post" data-main="post">
    <span>${mainPost.date}</span>
            <h2>${mainPost.title}</h2>
            <p>${mainPost.text}</p>
            <p></p>
            </div>`
}

document.querySelector('.main-post').innerHTML = renderMainPost()

function renderRecentPosts(){
    return recentPosts.map(post=>`  <div class="recent">
                                    <img src="${post.image}">
                                     <span>${post.date}</span>
                                     <h3>${post.title}</h3>
                                     <p>${post.text}</p>
                                     </div>`).join('')
}

document.querySelector('.recent-post').innerHTML = renderRecentPosts()

document.addEventListener('click', function (e) {
    const post = e.target.closest('[data-main="post"]');
    const about = e.target.closest('[data-about="aboutMe"]');
    if (post) {
        viewMainPost();
    }else if(about){
        renderAbout()
    }
})

function viewMainPost() {
    document.querySelector('.view-post').innerHTML = `
        <div class="view-post">
            <span>${mainPost.date}</span>
            <h2>${mainPost.title}</h2>
            <p>${mainPost.text}</p>  
            <img src="${mainPost.image}"> 
            <div class="text-more">
            <p class="title">How I stay committed to learning</p>
            <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
            <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
            <p class="title">How I got started</p>
            <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
            <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
            </div>
            <h3 class="recent-post-title">Recent posts</h3>
            </div>
    `
 document.querySelector('.main-post').style.display = "none"
}


function renderAbout(){
    document.querySelector('.about-me').innerHTML=`
        <div class="about-me">
        <div class="about-container">
        <img src="${aboutMe.image}">
        <div class="about-main">
        <h2>${aboutMe.title}</h2>
        <p>${aboutMe.text}</p>
        </div>
        </div>
        <div class="text-more">
        <p class="title">How I stay committed to learning</p>
        <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
        <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
        <p class="title">How I got started</p>
        <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
        <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
        </div>
        <h3 class="recent-post-title">Recent posts</h3>
        </div>`
        document.querySelector('.main-post').style.display = "none"
}

