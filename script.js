const arr=[
    {songName:"Jale 2",url:"./songs/Jale 2.mp3",img:"./images/jale.jpg"},
    {songName:"Pehle main",url:"./songs/pehle bhi Main.mp3",img:"./images/animal.jpg"},
    {songName:"Ram Siya Ram",url:"./songs/Ram Siya Ram.mp3",img:"./images/ram.jpg"},
    {songName:"Arjan Valley",url:"./songs/Arjan Vailly Ne.mp3",img:"./images/animal.jpg"}
]
var audio=new Audio()
var left=document.querySelector('#Left')
const allsong=document.querySelector('#all-songs')


const forward=document.querySelector("#next")
const play=document.querySelector("#play")
const back=document.querySelector("#back")

// console.log(left)
var selectedsong=0
function addSong(){
    var clutter=""
    arr.forEach(function(obj,index){
        clutter+=`
        <div class="song-cards" id="${index}">
                        <div id="part-1">
                            <img src="${obj.img}" />
                            <h2>${obj.songName}</h2>
                        </div>
                        <div>
                            3:56
                        </div>
                    </div>
        `
        
    })
    allsong.innerHTML=clutter
    audio.src=arr[selectedsong].url
    left.style.backgroundImage=`url(${arr[selectedsong].img})`

}


addSong()




allsong.addEventListener('click',function(dets){
    selectedsong=dets.target.id
    addSong()
    audio.play()
    
})

forward.addEventListener("click",function(){
    if(selectedsong<arr.length-1){
        selectedsong++
        addSong()
        audio.play()
    }
    else{
        forward.style.opacity = 0.4
    }
})
var flag=0
play.addEventListener("click",function(){
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
        addSong()
        audio.play()
        flag=1
    }
    else{
        play.innerHTML=`<i class="ri-play-mini-fill"></i>`
        addSong()
        audio.pause()
        flag=0
    }
})

    back.addEventListener("click",function(){
        if(selectedsong>0){
            selectedsong--
            addSong()
            audio.play()
        }
        else{
            back.style.opacity = 0.4
        }
    })
    