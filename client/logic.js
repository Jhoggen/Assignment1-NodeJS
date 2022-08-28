document.getElementById("getMemes").addEventListener("click", function() {
    getExternalMemes()
})
document.getElementById("getLocalMemes").addEventListener("click", function() {
    getLocalMemes()
})

async function getExternalMemes() {
    const memeList = await fetch ("http://localhost:3000/api/meme")
    const getAllMemes = await memeList.json()


    for (let i = 0; i < getAllMemes.data.memes.length; i++) {
        const element = getAllMemes.data.memes[i];
        console.log(element)
        
        let main = document.getElementById("outputMemes")

    
        let mainContainer = document.createElement("div")
        mainContainer.classList.add("mainContainer")
    
    
        let textContainer = document.createElement("h2")
        textContainer.classList.add("textContainer")
        mainContainer.innerText = element.name
    

        let imgContainer = document.createElement("div")
        const src = element.url
        imgContainer.classList.add("imgContainer")
        let imgTag = document.createElement("img")
        imgTag.src = src


        imgContainer.append(imgTag)
        main.append(mainContainer)
        mainContainer.append(textContainer, imgContainer)
        
    }

}




async function getLocalMemes() {
    const localMeme = await fetch ("http://localhost:3000/api/local")
    const getAllLocalMemes = await localMeme.json()
    console.log(getAllLocalMemes)

    
    for (let i = 0; i < getAllLocalMemes.name.length; i++) {
        const element = getAllLocalMemes.name[i];
        console.log(element)
    
        let main = document.getElementById("outputLocalMemes")
        main.classList.add("main")
        
        let mainContainer = document.createElement("h2")
        mainContainer.classList.add("mainContainer")
        mainContainer.innerText = getAllLocalMemes.name

    

        main.append(mainContainer)
    }
}

