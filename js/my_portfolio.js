

const postsContainer = document.querySelector(".posts")


const objectAsCard = (text, isObject=true) => {
    return `
        <div class="post  ${!isObject ? "skeleton": ""}">
            <img src="${text.img}" class="postImage" alt="">
            <div class="contentPost">
                <h6 class="titlePost">${text.title}</h6>
                <p>${text.body}</p>
            </div>
        </div>
    `
}

const render  = async () => {
    try {
        const r = await fetch("https://jsonplaceholder.typicode.com/posts")
        const response  = await r.json()

        let html = ""
        for (let i in response){
            response[i].img = "https://assets.thehansindia.com/h-upload/2020/05/21/970762-liveupdates.webp"
            html += objectAsCard(response[i])
        }
        postsContainer.innerHTML = html
    }catch (e){

    }
}

const renderSkeleton  = () => {
    let posts = ""
    for (let i = 0; i < 8; i++) {
        posts += objectAsCard({title: "", body: ""}, isObject=false)
    }
    postsContainer.innerHTML = posts
}

renderSkeleton()


window.addEventListener("load", render)