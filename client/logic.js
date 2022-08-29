document.getElementById("getMemes").addEventListener("click", function() {
    getExternalMemes()
})
document.getElementById("getLocalMemes").addEventListener("click", function() {
    getLocalMemes()
})
document.getElementById("clearMeme").addEventListener("click", function() {
    clearMemes()
})

function clearMemes() {
    document.getElementById("outputMemes").innerHTML = ""
}


async function getExternalMemes() {
    const memeList = await fetch ("http://localhost:5000/api/meme")
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
    const localMeme = await fetch ("http://localhost:5000/api/local")
    const getAllLocalMemes = await localMeme.json()
    console.log(getAllLocalMemes)

    
    for (let i = 0; i < getAllLocalMemes.length; i++) {
        const element = getAllLocalMemes[i];
        console.log(element)
    
        let main = document.getElementById("outputMemes")
        main.classList.add("main")
        
        let mainContainer = document.createElement("h2")
        mainContainer.classList.add("mainContainer")
        mainContainer.innerText = element.name

        let imgContainer = document.createElement("div")
        const src = element.url
        imgContainer.classList.add("imgContainer")
        let imgTag = document.createElement("img")
        imgTag.src = src

        imgContainer.append(imgTag)
        main.append(mainContainer, imgTag)
        
    }
}




