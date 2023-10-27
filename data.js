

const songs = [
  {
    id: 1,
    songName: `Running In The Night <br>
        <div class="subtitle">FM-84</div>`,
    poster: "img/1.jpg",
  },
  {
    id: 2,
    songName: `Hello it's me now <br>
        <div class="subtitle">kaka</div>`,
    poster: "img/2.png",
  },
  {
    id: 3,
    songName: `blavla<br>
        <div class="subtitle">dcdc</div>`,
    poster: "img/3.jpg",
  },
  {
    id: 4,
    songName: `cccccc <br>
    <div class="subtitle">cccc-ccccc</div>`,
    poster: "img/4.jpg",
  },
  {
    id: 5,
    songName: `dveeeveve <br>
    <div class="subtitle">eveveverr-8reverver4</div>`,
    poster: "img/5.jpg",
  },
  {
    id: 6,
    
    songName: `vvvvvvvvv <br>
    <div class="subtitle">bbb-vvvv</div>`,
    poster: "img/6.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});
