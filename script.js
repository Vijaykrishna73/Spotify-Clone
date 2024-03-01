let a = document.querySelector(".Hanuman")
let b = document.querySelector(".songList")
a.addEventListener("click", () => {
    b.innerHTML = ""
    b.innerHTML = b.innerHTML + `<ul>
    <li class="s01"> <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>Ala Vaikuntapuram lo</div>
        </div>
        <div class="play-now">
            <span>Play Now</span>
            <img class="invert" src="play-button.svg" alt="">
        </div>
    </li>
</ul>

<ul>
    <li class="s02"> <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>Ramulo Ramuloo</div>
        </div>
        <div class="play-now">
            <span>Play Now</span>
            <img class="invert" src="play-button.svg" alt="">
        </div>
    </li>
</ul>

<ul>
    <li> <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>Samajavaragamana</div>
        </div>
        <div class="play-now">
            <span>Play Now</span>
            <img class="invert" src="play-button.svg" alt="">
        </div>
    </li>
</ul>

<ul>
    <li> <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>Ala Vaikuntapuram lo Theme Song</div>
        </div>
        <div class="play-now">
            <span>Play Now</span>
            <img class="invert" src="play-button.svg" alt="">
        </div>
    </li>
</ul>`
})

// c=document.querySelector(".s01")
// d=document.querySelector(".cardContainer")
// c.addEventListener("click",()=>{
//     d.innerHTML=""
//     d.innerHTML
// })