// --- Kart verisi: yeni hayvan eklemek için buraya bir nesne ekle ---
const animals = [
  { name: "Kedi", emoji: "🐱", category: "Memeli", features: ["Karanlıkta insanlardan çok daha iyi görür.", "Bıyıkları çevresindeki boşlukları algılamasına yardım eder.", "Günün büyük bölümünü uyuyarak geçirir."] },
  { name: "Fil", emoji: "🐘", category: "Memeli", features: ["En büyük kara hayvanıdır.", "Hortumu burun ve üst dudağın birleşmesinden oluşur.", "Bitkilerle beslenir (otçuldur)."] },
  { name: "Yunus", emoji: "🐬", category: "Memeli", features: ["Balık değildir, akciğerle solur.", "Ses dalgalarıyla yönünü bulur (ekolokasyon).", "Genellikle gruplar halinde yaşar."] },
  { name: "Penguen", emoji: "🐧", category: "Kuş", features: ["Uçamaz, kanatlarını yüzmek için kullanır.", "Kalın tüyleri ve yağ tabakası onu soğuktan korur.", "Çoğu türü Güney Yarımküre'de yaşar."] },
  { name: "Kaplumbağa", emoji: "🐢", category: "Sürüngen", features: ["Kabuğu omurgasıyla birleşiktir, çıkarılamaz.", "Yumurtlayarak ürer.", "Bazı türleri çok uzun yaşayabilir."] },
  { name: "Baykuş", emoji: "🦉", category: "Kuş", features: ["Genellikle geceleri avlanır.", "Başını çok geniş bir açıyla çevirebilir.", "Tüyleri sayesinde neredeyse sessiz uçar."] },
  { name: "Kelebek", emoji: "🦋", category: "Böcek", features: ["Yumurta, tırtıl, pupa, kelebek evrelerinden geçer.", "Kanatları minik pullarla kaplıdır.", "Ayaklarıyla tat alabilir."] },
  { name: "Zürafa", emoji: "🦒", category: "Memeli", features: ["En uzun boylu kara hayvanıdır.", "Boynunda insanla aynı sayıda (7) omur vardır.", "Çok uzun dili ağaç yapraklarını koparmasına yardım eder."] },
];

// --- Sayfadaki elemanları bul ---
const card = document.getElementById("card");
const frontFace = document.getElementById("front");
const backFace = document.getElementById("back");
const emoji = document.getElementById("emoji");
const nameElement = document.getElementById("name");
const categoryElement = document.getElementById("category");
const featureList = document.getElementById("features");
const counter = document.getElementById("counter");
const announcement = document.getElementById("announcement");

// --- Durum: hangi kart, çevrilmiş mi ---
let index = 0;
let isFlipped = false;

// Ekrana o anki durumu yansıt
function render() {
  const animal = animals[index];

  emoji.textContent = animal.emoji;
  nameElement.textContent = animal.name;
  categoryElement.textContent = animal.category;

  featureList.innerHTML = "";
  animal.features.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    featureList.appendChild(li);
  });

  card.classList.toggle("flipped", isFlipped);
  // Ekran okuyucu sadece görünen yüzü okusun
  frontFace.setAttribute("aria-hidden", String(isFlipped));
  backFace.setAttribute("aria-hidden", String(!isFlipped));

  counter.textContent = `Kart ${index + 1} / ${animals.length}`;
  announcement.textContent = isFlipped
    ? `${animal.name}: ${animal.features.join(" ")}`
    : `Kart ${index + 1}: ${animal.name}, ${animal.category}`;
}

function flip() {
  isFlipped = !isFlipped;
  render();
}

function navigate(direction) {
  isFlipped = false; // yeni karta hep ön yüzden başla
  index = (index + direction + animals.length) % animals.length;
  render();
}

// Fisher-Yates algoritmasıyla kartları karıştır
function shuffle() {
  for (let i = animals.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [animals[i], animals[j]] = [animals[j], animals[i]];
  }
  index = 0;
  isFlipped = false;
  render();
}

// --- Olaylar ---
card.addEventListener("click", flip);
document.getElementById("previous").addEventListener("click", () => navigate(-1));
document.getElementById("next").addEventListener("click", () => navigate(1));
document.getElementById("shuffle").addEventListener("click", shuffle);

// Ok tuşlarıyla gezinme
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") navigate(1);
  if (event.key === "ArrowLeft") navigate(-1);
});

render();