window.addEventListener("load", () => {
    console.log("Web site loaded")



    const repeat = document.querySelector(".repeat-btn");
    const prev = document.querySelector(".prev-btn");
    const pausePlay = document.querySelector(".pause-btn");
    const pauseSvgPlay = document.querySelector(".pause-play-btn")
    const next = document.querySelector(".next-btn");
    const volume = document.querySelector(".volume-btn");
    const playingBanner = document.querySelector(".main-player-banner");
    const bookName = document.querySelector(".main-media-title");
    const authorName = document.querySelector(".main-media-name");

    const songListPlayBtn = document.querySelectorAll(".song-list-play");


    const podList = document.querySelector(".recent-play-list-display");

    const mainAudio = new Audio();

    const songList = [
        {
            id: 1,
            path: "./Olamide_-_Owo_Shayo_(prod__Pheelz).mp3",
            image: "./assets/images/green.png",
            author: "Dele Alade",
            podName: "The Prime"
        },
        {
            id: 2,
            path: "./Olamide_Ft_Wizkid_Kana_9jaflaver.com_.mp3",
            image: "./assets/images/obama.png",
            author: "Alex Jide",
            podName: "The of the guru"
        },
        {
            id: 3,
            path: "./Olamide_-_Wo__codedwap.com.mp3",
            image: "./assets/images/tyson.png",
            author: "Egbon Ade",
            podName: "Get it done"
        }
    ]



    let html = ""
    songList.forEach(index => {
        html += `
            <div class="recent-play-list">
                <div class="recent-play-details-display">

                    <div class="recent-play-index">
                        <p>${index.id}</p>
                    </div>


                    <div class="recent-play-img-container">
                        <div class="recent-play-img">
                            <img src=${index.image} alt="power">
                        </div>

                        <div class="recent-play-detail">
                            <p class="first-text">${index.podName}</p>
                            <p class="padding-text"></p>
                            <p class="second-text">${index.author}</p>
                        </div>
                    </div>
                </div>


                <div class="recent-play-button-container">
                    <div class="recent-play-duration">
                        <p>12:90</p>
                    </div>
                    <div class="recent-btn-display">
                        <button class="song-list-play">
                            <img src="./assets/images/play.svg" alt="play">
                        </button>
                    </div>

                    <div class="recent-btn-display">
                        <button>
                            <img src="./assets/images/add.svg" alt="play">
                        </button>
                    </div>
                </div>
            </div>
        `
    })

    podList.innerHTML = html;



    console.log(songListPlayBtn);



    songListPlayBtn.forEach(element => {
        element.addEventListener("click", () => {
            console.log("played");
        })
    });




    function play() {
        mainAudio.src = songList[currentId].path;
        playingBanner.src = songList[currentId].image;
        bookName.textContent = songList[currentId].podName;
        authorName.textContent = songList[currentId].author;

        mainAudio.play();
    }



    // play();


})