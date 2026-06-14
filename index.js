import {mainPost , recentPosts , aboutMe} from './data.js'

function renderMainPost() {
    return `<span>${mainPost.date}</span>
            <h2>${mainPost.title}</h2>
            <p>${mainPost.text}</p>
            <p></p>`;
}

document.querySelector('.main-post').innerHTML = renderMainPost()

function renderRecentPosts(){
    return recentPosts.map(post=>`<img src="${post.image}">
                                     <span>${post.date}</span>
                                     <h3>${post.title}</h3>
                                     <p>${post.text}</p>`).join('')
}

document.querySelector('.recent-post').innerHTML = renderRecentPosts()
