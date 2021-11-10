const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if(response.ok){
            return response.json()
        }
    })
    .then(data => {
        data.forEach(post => {
          const postBox = document.createElement('div')
          postBox.classList.add('post-box')
          postBox.innerHTML = `
          <h3>Title</h3>
          <p class="title">${post.title}</p>
          <h4>Body</h4>
          <p class="body">${post.body}</p>`

          container.appendChild(postBox)
        })
    })
    .catch(error => container.innerHTML = `<h1>Üzgünüz, veri alınamadı</h1>`)
})
