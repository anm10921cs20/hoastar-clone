




function btn1() {
    const time = document.querySelector('#time');
    const message = document.getElementById('message-para');
    var counter = 6;
    const interval = setInterval(() => {
        counter--;
        if (counter <= 0) {
            clearInterval(interval);
            message.innerText = "Downloading Started...";
            setTimeout(() =>
            {
                window.location.href = "https://dl6.hotshare.top/Madha_Gaja_Raja_2025_HDRip_360p_HD.mp4"
            },1000)
            message.timeout = setTimeout(() => {
                message.innerText = "";
            }, 3000);
        }
        else {
            time.innerText = "Please Wait For Downloading " + counter + "s";
            time.style.color = "#ff4343";
        }
    }, 1000);
}






