<?php
include 'database.php';
?>
<html>
  <meta
    http-equiv="content-type"
    content="text/html;charset=UTF-8"
  /><!-- /Added by HTTrack -->
  <head>
    <title>UMESKIA SOFTWARES SONG SEARCH ENGINE</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="author" content="colorlib.com" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, shrink-to-fit=no">
    <meta data-react-helmet="true" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    </meta>
    <link rel="shortcut icon" href="logo/umeskia_s.png" />
    <meta name="description" content="UMESKIA SOFTWARES is a Software Development Solutions and Services company.">
    <meta name="keywords" content="UMESKIA, UMESKIA SOFTWARES, UMESIKIA SOFTWARES,UMESKIA">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <style id="" media="all">
      @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        src: url(https://colorlib.com/fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfedw.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        src: url(https://colorlib.com/fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlEA.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        src: url(https://colorlib.com/fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1xlEA.ttf)
          format("truetype");
      }
    </style>
    <link href="css/style2.css" rel="stylesheet" />
    <meta name="robots" content="noindex, follow" />
  </head>
  <body style="background-color:black;" >
  
    <div class="s010" style="background-color:#b7b7b7">

      <form>
        <center>
<h2>MUSIC SEARCH ENGINE BY UMESKIA SOFTWARES</h2>
        </center>
        
        <div class="inner-form">
          <div class="basic-search">
            <div class="input-field">
              <input
                id="search"
                type="text"
                onkeyup="showResult(this.value)"
                placeholder="Type Keywords"
                autocomplete="false"
                style="color:black;"
              />
              <div class="icon-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div id="livesearch" style="background-color: white; margin-bottom:2%;  align-items: center; text-align: center;"></div>
          <?php 
              if(isset($_GET['song'])){
                $linkMusic = $_GET['song'];
              $music = mysqli_query($db, "SELECT * FROM songs WHERE ID='$linkMusic'");
              $musicSongs = mysqli_fetch_array($music);
               ?>
          <div class="advance-search">
            <div class="row">
              
              <div class="holder">
                <div class="search-result"><?php echo $musicSongs['songName']; ?></div>
                <div class="audio green-audio-player">
                  <div class="play-pause-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="24"
                      viewBox="0 0 18 24"
                    >
                      <path
                        fill="#566574"
                        fill-rule="evenodd"
                        d="M18 12L0 24V0"
                        class="play-pause-icon"
                        id="playPause"
                      />
                    </svg>
                  </div>

                  <div class="controls">
                    <span class="current-time">0:00</span>
                    <div class="slider" data-direction="horizontal">
                      <div class="progress">
                        <div
                          class="pin"
                          id="progress-pin"
                          data-method="rewind"
                        ></div>
                      </div>
                    </div>
                    <span class="total-time">0:00</span>
                  </div>

                  <div class="volume">
                    <div class="volume-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#566574"
                          fill-rule="evenodd"
                          d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"
                          id="speaker"
                        />
                      </svg>
                    </div>
                    <div class="volume-controls hidden">
                      <div class="slider" data-direction="vertical">
                        <div class="progress">
                          <div
                            class="pin"
                            id="volume-pin"
                            data-method="changeVolume"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <audio crossorigin>
                    <source
                      src="music/<?php echo $musicSongs['songFile']; ?>"
                      type="audio/mpeg"
                    />
                  </audio>
                </div>
              </div>
            </div>
          </div>
          <?php } ?>
          
        </div>
      </form>
    </div>
    <script>
function showResult(str) {
  if (str.length==0) {
    document.getElementById("livesearch").innerHTML="";
    document.getElementById("livesearch").style.border="0px";
    return;
  }
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("livesearch").innerHTML=this.responseText;
      document.getElementById("livesearch").style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET","livesearch.php?music="+str,true);
  xmlhttp.send();
}
</script>
    <script src="js/extention/choices.js"></script>
    <script>
      const customSelects = document.querySelectorAll("select");
      const deleteBtn = document.getElementById("delete");
      const choices = new Choices("select", {
        searchEnabled: false,
        itemSelectText: "",
        removeItemButton: true,
      });
      for (let i = 0; i < customSelects.length; i++) {
        customSelects[i].addEventListener(
          "addItem",
          function (event) {
            if (event.detail.value) {
              let parent = this.parentNode.parentNode;
              parent.classList.add("valid");
              parent.classList.remove("invalid");
            } else {
              let parent = this.parentNode.parentNode;
              parent.classList.add("invalid");
              parent.classList.remove("valid");
            }
          },
          false
        );
      }
      deleteBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const deleteAll = document.querySelectorAll(".choices__button");
        for (let i = 0; i < deleteAll.length; i++) {
          deleteAll[i].click();
        }
      });
    </script>

    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-23581568-13");
    </script>
    <script
      defer
      src="../../../../static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"rayId":"6a431ccf27eb1b5a","token":"cd0b4b3a733644fc843ef0b185f98241","version":"2021.10.0","si":100}'
    ></script>
    <script
      defer
      src="../../../../static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"rayId":"6a431ccf19651b5a","token":"cd0b4b3a733644fc843ef0b185f98241","version":"2021.10.0","si":100}'
    ></script>
    <script>
      var audioPlayer = document.querySelector(".green-audio-player");
      var playPause = audioPlayer.querySelector("#playPause");
      var playpauseBtn = audioPlayer.querySelector(".play-pause-btn");
      var loading = audioPlayer.querySelector(".loading");
      var progress = audioPlayer.querySelector(".progress");
      var sliders = audioPlayer.querySelectorAll(".slider");
      var volumeBtn = audioPlayer.querySelector(".volume-btn");
      var volumeControls = audioPlayer.querySelector(".volume-controls");
      var volumeProgress = volumeControls.querySelector(".slider .progress");
      var player = audioPlayer.querySelector("audio");
      var currentTime = audioPlayer.querySelector(".current-time");
      var totalTime = audioPlayer.querySelector(".total-time");
      var speaker = audioPlayer.querySelector("#speaker");

      var draggableClasses = ["pin"];
      var currentlyDragged = null;

      window.addEventListener("mousedown", function (event) {
        if (!isDraggable(event.target)) return false;

        currentlyDragged = event.target;
        let handleMethod = currentlyDragged.dataset.method;

        this.addEventListener("mousemove", window[handleMethod], false);

        window.addEventListener(
          "mouseup",
          () => {
            currentlyDragged = false;
            window.removeEventListener(
              "mousemove",
              window[handleMethod],
              false
            );
          },
          false
        );
      });

      playpauseBtn.addEventListener("click", togglePlay);
      player.addEventListener("timeupdate", updateProgress);
      player.addEventListener("volumechange", updateVolume);
      player.addEventListener("loadedmetadata", () => {
        totalTime.textContent = formatTime(player.duration);
      });
      player.addEventListener("canplay", makePlay);
      player.addEventListener("ended", function () {
        playPause.attributes.d.value = "M18 12L0 24V0";
        player.currentTime = 0;
      });

      volumeBtn.addEventListener("click", () => {
        volumeBtn.classList.toggle("open");
        volumeControls.classList.toggle("hidden");
      });

      window.addEventListener("resize", directionAware);

      sliders.forEach((slider) => {
        let pin = slider.querySelector(".pin");
        slider.addEventListener("click", window[pin.dataset.method]);
      });

      directionAware();

      function isDraggable(el) {
        let canDrag = false;
        let classes = Array.from(el.classList);
        draggableClasses.forEach((draggable) => {
          if (classes.indexOf(draggable) !== -1) canDrag = true;
        });
        return canDrag;
      }

      function inRange(event) {
        let rangeBox = getRangeBox(event);
        let rect = rangeBox.getBoundingClientRect();
        let direction = rangeBox.dataset.direction;
        if (direction == "horizontal") {
          var min = rangeBox.offsetLeft;
          var max = min + rangeBox.offsetWidth;
          if (event.clientX < min || event.clientX > max) return false;
        } else {
          var min = rect.top;
          var max = min + rangeBox.offsetHeight;
          if (event.clientY < min || event.clientY > max) return false;
        }
        return true;
      }

      function updateProgress() {
        var current = player.currentTime;
        var percent = (current / player.duration) * 100;
        progress.style.width = percent + "%";

        currentTime.textContent = formatTime(current);
      }

      function updateVolume() {
        volumeProgress.style.height = player.volume * 100 + "%";
        if (player.volume >= 0.5) {
          speaker.attributes.d.value =
            "M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z";
        } else if (player.volume < 0.5 && player.volume > 0.05) {
          speaker.attributes.d.value =
            "M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z";
        } else if (player.volume <= 0.05) {
          speaker.attributes.d.value =
            "M0 7.667v8h5.333L12 22.333V1L5.333 7.667";
        }
      }

      function getRangeBox(event) {
        let rangeBox = event.target;
        let el = currentlyDragged;
        if (event.type == "click" && isDraggable(event.target)) {
          rangeBox = event.target.parentElement.parentElement;
        }
        if (event.type == "mousemove") {
          rangeBox = el.parentElement.parentElement;
        }
        return rangeBox;
      }

      function getCoefficient(event) {
        let slider = getRangeBox(event);
        let rect = slider.getBoundingClientRect();
        let K = 0;
        if (slider.dataset.direction == "horizontal") {
          let offsetX = event.clientX - slider.offsetLeft;
          let width = slider.clientWidth;
          K = offsetX / width;
        } else if (slider.dataset.direction == "vertical") {
          let height = slider.clientHeight;
          var offsetY = event.clientY - rect.top;
          K = 1 - offsetY / height;
        }
        return K;
      }

      function rewind(event) {
        if (inRange(event)) {
          player.currentTime = player.duration * getCoefficient(event);
        }
      }

      function changeVolume(event) {
        if (inRange(event)) {
          player.volume = getCoefficient(event);
        }
      }

      function formatTime(time) {
        var min = Math.floor(time / 60);
        var sec = Math.floor(time % 60);
        return min + ":" + (sec < 10 ? "0" + sec : sec);
      }

      function togglePlay() {
        if (player.paused) {
          playPause.attributes.d.value = "M0 0h6v24H0zM12 0h6v24h-6z";
          player.play();
        } else {
          playPause.attributes.d.value = "M18 12L0 24V0";
          player.pause();
        }
      }

      function makePlay() {
        playpauseBtn.style.display = "block";
        loading.style.display = "none";
      }

      function directionAware() {
        if (window.innerHeight < 250) {
          volumeControls.style.bottom = "-54px";
          volumeControls.style.left = "54px";
        } else if (audioPlayer.offsetTop < 154) {
          volumeControls.style.bottom = "-164px";
          volumeControls.style.left = "-3px";
        } else {
          volumeControls.style.bottom = "52px";
          volumeControls.style.left = "-3px";
        }
      }
    </script>
  </body>

  <!-- Mirrored from colorlib.com/etc/searchf/colorlib-search-10/?choices-single-defaul=&choices-single-defaul=&choices-single-defaul=&choices-single-defaul=&choices-single-defaul=&choices-single-defaul= by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 26 Oct 2021 01:53:02 GMT -->
</html>
