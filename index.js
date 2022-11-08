async function getAnime(id)
{
    return await fetch(`https://api.jikan.moe/v4/anime/${id}`).then(
        res => {
            return res.status === 200 ? res.json() : window.location.reload()
        }
    ).then((res) => {
            return res.data
        }
    )
}

function getElement(id)
{
    return document.getElementById(id)
}

function createInfo(anime)
{
    const [ title, photo, synopsis ] = [ getElement('title'), getElement('photo'), getElement('synopsis') ]

    title.innerHTML = anime.title

    photo.src = anime.images.webp.image_url

    synopsis.innerHTML = anime.synopsis

}

document.addEventListener('DOMContentLoaded', async () => {

    try {

        const anime = await getAnime(Math.floor(Math.random() * 777) + 1)
    
        createInfo(anime)

    } catch (err) {
        console.error(err)
    }

})