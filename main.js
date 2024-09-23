// Sevgilinizle tanıştığınız tarihi buraya girin:
const tanismaTarihi = new Date("2024-04-01 00:30");

function updateCountdown() {
  const now = new Date();
  const difference = now.getTime() - tanismaTarihi.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
}

// Başlangıçta sayaç değerlerini güncelleyin
updateCountdown();

// 1 saniye aralıklarla sayaç değerlerini güncelleyin
setInterval(updateCountdown, 1000);







// Define an array of love words
const loveWords = [
  "Aminammm",
  "Tahammmm",
  "Karıcımm",
  "Prensesim",
  "Sultanımmm",
  "Kalbimmmm",
  "Balımmmmm",
  "Kocamm",
  "Karıcımm",
  "Bebeğimmm",
  "My everything",
  "My heaven",
  "My moonlight",
  "Sarushkam",
  "Karashkam",
  "Kızımmm",
  "Wifeyyy",
  "Gecemm",
  "My kittyy"
];


function showLoveWord() {
  const randomIndex = Math.floor(Math.random() * loveWords.length);
  const word = loveWords[randomIndex];
  document.getElementById("word").textContent = word;
}

// Başlangıçta bir sevgi kelimesi gösterin
showLoveWord();

// 3 saniye aralıklarla rastgele bir sevgi kelimesi gösterin
setInterval(showLoveWord, 2000);


function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  
  modal.style.display = "flex";
  modalImg.src = imgElement.src;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}