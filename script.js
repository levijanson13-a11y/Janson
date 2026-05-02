const libraryData = [
    { id: 0, title: "Basilica", color: "#3e2723", desc: "The building of St. Peter’s." },
    { id: 1, title: "The Desire of Ages", color: "#1a237e", desc: "Life of Jesus Christ." },
    { id: 2, title: "Christianity & Religions", color: "#2e3b4e", desc: "World faith study." },
    { id: 3, title: "Jehovah's Witnesses", color: "#455a64", desc: "Watch Tower history." },
    { id: 4, title: "The Eucharist is Jesus", color: "#b71c1c", desc: "Real Presence evidence." },
    { id: 5, title: "Ignatius Bible", color: "#4a148c", desc: "RSV-2CE translation." },
    { id: 6, title: "Major Religions", color: "#263238", desc: "Core world tenets." },
    { id: 7, title: "Historical Atlas", color: "#0d47a1", desc: "Rise and fall of civilizations." },
    { id: 8, title: "Atlas: Amer. West", color: "#bf360c", desc: "Frontier exploration maps." },
    { id: 9, title: "Seattle Then & Now", color: "#795548", desc: "Seattle evolution." },
    { id: 10, title: "Rose Book of Charts", color: "#5d4037", desc: "Biblical timelines." },
    { id: 11, title: "Atlas of the Bible", color: "#01579b", desc: "Geographical companion." },
    { id: 12, title: "Great Bible People", color: "#004d40", desc: "Key biblical figures." },
    { id: 13, title: "The Pig Wars", color: "#827717", desc: "1859 border dispute." },
    { id: 14, title: "Don't Know History", color: "#212121", desc: "Debunking American myths." },
    { id: 15, title: "The Middle East", color: "#4e342e", desc: "1981 political landscape." },
    { id: 16, title: "Night", color: "#000000", desc: "Holocaust memoir." },
    { id: 17, title: "Educated", color: "#e65100", desc: "Tara Westover memoir." },
    { id: 18, title: "Under the Dome", color: "#1a237e", desc: "Stephen King novel." },
    { id: 19, title: "Conflict & Action", color: "#b71c1c", desc: "Fiction writing tension." },
    { id: 20, title: "Write Romances", color: "#880e4f", desc: "Romance writing basics." },
    { id: 21, title: "How to Grow a Novel", color: "#1b5e20", desc: "Prose advice." },
    { id: 22, title: "The Beatles", color: "#212121", desc: "Fab Four history." },
    { id: 23, title: "Lakes Middle 21-22", color: "#0d47a1", desc: "Yearbook memories." }
];

const recipeData = [
    { name: "Miso Soup", site: "Just One Cookbook", url: "https://www.justonecookbook.com/miso-soup/", desc: "The essential Japanese soul food base." },
    { name: "Chicken Teriyaki", site: "Japanese Cooking 101", url: "https://www.japanesecooking101.com/chicken-teriyaki-recipe/", desc: "Authentic glaze from scratch." },
    { name: "Pork Tonkatsu", site: "Just One Cookbook", url: "https://www.justonecookbook.com/tonkatsu/", desc: "Deep-fried breaded pork cutlet." },
    { name: "Classic Ramen", site: "Pickled Plum", url: "https://pickledplum.com/shoyu-ramen-recipe/", desc: "Shoyu ramen comfort at home." },
    { name: "Omurice", site: "Just One Cookbook", url: "https://www.justonecookbook.com/omurice/", desc: "Omelette over fried rice." },
    { name: "Okonomiyaki", site: "Japanese Cooking 101", url: "https://www.japanesecooking101.com/okonomiyaki-recipe/", desc: "Savory cabbage pancakes." },
    { name: "Shrimp Tempura", site: "Just One Cookbook", url: "https://www.justonecookbook.com/shrimp-tempura/", desc: "Light, crispy golden-fry." },
    { name: "Gyoza", site: "Japanese Cooking 101", url: "https://www.japanesecooking101.com/gyoza-recipe/", desc: "Pan-fried pork dumplings." },
    { name: "Yakitori", site: "Just One Cookbook", url: "https://www.justonecookbook.com/yakitori/", desc: "Grilled skewered chicken." },
    { name: "Takoyaki", site: "Japanese Cooking 101", url: "https://www.japanesecooking101.com/takoyaki-recipe/", desc: "Street-style octopus balls." },
    { name: "Onigiri", site: "Just One Cookbook", url: "https://www.justonecookbook.com/onigiri-rice-balls/", desc: "Portable stuffed rice balls." },
    { name: "Beef Gyudon", site: "Japanese Cooking 101", url: "https://www.japanesecooking101.com/gyudon-recipe-beef-bowl/", desc: "Classic beef and onion bowl." },
    { name: "Sukiyaki", site: "Just One Cookbook", url: "https://www.justonecookbook.com/sukiyaki/", desc: "Sweet and savory hot pot." },
    { name: "Tamagoyaki", site: "Japanese Cooking 101", url: "https://www.japanesecooking101.com/tamagoyaki-recipe/", desc: "Rolled Japanese omelette." },
    { name: "Nikujaga", site: "Just One Cookbook", url: "https://www.justonecookbook.com/nikujaga/", desc: "Meat and potato home-stew." },
    { name: "Katsudon", site: "Japanese Cooking 101", url: "https://www.japanesecooking101.com/katsudon-recipe/", desc: "Cutlet and egg rice bowl." },
    { name: "Oyakodon", site: "Just One Cookbook", url: "https://www.justonecookbook.com/oyakodon/", desc: "Chicken and egg bowl." },
    { name: "Yakisoba", site: "Japanese Cooking 101", url: "https://www.japanesecooking101.com/yakisoba-recipe/", desc: "Stir-fried noodle classic." },
    { name: "Japanese Curry", site: "Just One Cookbook", url: "https://www.justonecookbook.com/simple-chicken-curry/", desc: "Thick, mild, comforting." },
    { name: "Karaage", site: "Japanese Cooking 101", url: "https://www.japanesecooking101.com/karaage-recipe/", desc: "Japanese fried chicken." },
    { name: "Soba Salad", site: "Just One Cookbook", url: "https://www.justonecookbook.com/soba-salad-with-honey-soy-dressing/", desc: "Chilled buckwheat noodles." },
    { name: "Agedashi Tofu", site: "Japanese Cooking 101", url: "https://www.japanesecooking101.com/agedashi-tofu-recipe/", desc: "Deep fried tofu in dashi." },
    { name: "Chawanmushi", site: "Just One Cookbook", url: "https://www.justonecookbook.com/chawanmushi-savory-egg-custard/", desc: "Savory egg custard." },
    { name: "Nasu Dengaku", site: "Just One Cookbook", url: "https://www.justonecookbook.com/miso-dengaku/", desc: "Miso-glazed eggplant." },
    { name: "Tonjiru", site: "Japanese Cooking 101", url: "https://www.japanesecooking101.com/tonjiru-recipe/", desc: "Hearty pork miso soup." },
    { name: "Mochi", site: "Just One Cookbook", url: "https://www.justonecookbook.com/how-to-make-mochi-with-a-stand-mixer/", desc: "Chewy rice cake guide." },
    { name: "Matcha Swiss Roll", site: "Just One Cookbook", url: "https://www.justonecookbook.com/matcha-roll-cake/", desc: "Green tea sponge cake." },
    { name: "Dorayaki", site: "Japanese Cooking 101", url: "https://www.japanesecooking101.com/dorayaki-recipe/", desc: "Red bean pancake sandwich." },
    { name: "Japanese Cheesecake", site: "Just One Cookbook", url: "https://www.justonecookbook.com/souffle-japanese-cheesecake/", desc: "The famous jiggly cake." },
    { name: "Ichigo Daifuku", site: "Just One Cookbook", url: "https://www.justonecookbook.com/strawberry-daifuku/", desc: "Strawberry-stuffed mochi." }
];

let borrowed = JSON.parse(localStorage.getItem('janson_ledger')) || {};
let activeId = null;
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

// --- RENDERING ---
function renderLibrary() {
    const grid = document.getElementById("bookGrid");
    if(!grid) return;
    grid.innerHTML = "";
    libraryData.forEach(book => {
        const isOut = borrowed[book.id];
        grid.innerHTML += `
            <div class="book-tile" onclick="openBook(${book.id})">
                <div style="background:${book.color}; height:140px; margin-bottom:10px;"></div>
                <div style="font-size:0.8rem; font-weight:bold;">${book.title}</div>
                <div style="font-size:0.6rem; color:var(--crimson); font-weight:bold;">${isOut ? 'OUT' : 'AVAILABLE'}</div>
            </div>`;
    });
}

function renderRecipes() {
    const container = document.getElementById('recipeGrid');
    if(!container) return;
    container.innerHTML = "";
    recipeData.forEach(r => {
        container.innerHTML += `
            <div class="recipe-item">
                <a href="${r.url}" target="_blank">${r.name}</a>
                <span>${r.site} — ${r.desc}</span>
            </div>`;
    });
}

// --- MODALS ---
function openBook(id) {
    activeId = id;
    const book = libraryData[id];
    const isOut = borrowed[id];
    document.getElementById("modalTitle").innerText = book.title;
    document.getElementById("modalDescription").innerText = book.desc + (isOut ? ` (Held by ${isOut.borrower})` : "");
    document.getElementById("checkoutForm").style.display = isOut ? "none" : "block";
    document.getElementById("bookModal").style.display = "block";
}

function closeBook() { document.getElementById("bookModal").style.display = "none"; }

function processCheckout() {
    const name = document.getElementById("borrowerName").value;
    const phone = document.getElementById("borrowerPhone").value;
    if (!name || !phone) return alert("Details required.");
    borrowed[activeId] = { borrower: name, contact: phone, title: libraryData[activeId].title };
    localStorage.setItem('janson_ledger', JSON.stringify(borrowed));
    renderLibrary();
    closeBook();
    window.location.href = `sms:2082106968?body=${encodeURIComponent("Checked out: " + libraryData[activeId].title + " by " + name)}`;
}

// --- ADMIN ---
function adminLogin() {
    if (prompt("ID:") === "Janson" && prompt("Pass:") === "password") showLedger();
}

function showLedger() {
    const container = document.getElementById("ledgerTableContainer");
    let items = Object.keys(borrowed);
    let html = `<table><tr><th>Book</th><th>Borrower</th><th>Action</th></tr>`;
    items.forEach(id => {
        html += `<tr><td>${borrowed[id].title}</td><td>${borrowed[id].borrower}</td>
        <td><button class="return-btn" onclick="returnVol(${id})">RETURN</button></td></tr>`;
    });
    container.innerHTML = items.length ? html + "</table>" : "No active loans.";
    document.getElementById("adminModal").style.display = "block";
}

function returnVol(id) {
    delete borrowed[id];
    localStorage.setItem('janson_ledger', JSON.stringify(borrowed));
    renderLibrary();
    showLedger();
}

function closeAdmin() { document.getElementById("adminModal").style.display = "none"; }
function openStudy() { document.getElementById("studyModal").style.display = "block"; }
function closeStudy() { document.getElementById("studyModal").style.display = "none"; }

// --- SCRIBE'S CANVAS ---
const canvas = document.getElementById('scribeCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

function startDraw(e) { drawing = true; draw(e); }
function stopDraw() { drawing = false; ctx.beginPath(); }
function draw(e) {
    if (!drawing) return;
    ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.strokeStyle = '#222';
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
    ctx.lineTo(x, y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x, y);
}

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDraw);
canvas.addEventListener('touchstart', startDraw);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', stopDraw);

function clearCanvas() { ctx.clearRect(0, 0, canvas.width, canvas.height); }

// --- MUSIC ---
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicBtn.innerText = "MUSIC: ON";
        musicBtn.style.color = "var(--gold)";
    } else {
        music.pause();
        musicBtn.innerText = "MUSIC: OFF";
        musicBtn.style.color = "var(--crimson)";
    }
}

document.addEventListener('click', () => {
    if (music.paused && musicBtn.innerText === "MUSIC: OFF") {
        music.play().then(() => {
            musicBtn.innerText = "MUSIC: ON";
            musicBtn.style.color = "var(--gold)";
        }).catch(() => {});
    }
}, { once: true });

document.addEventListener("DOMContentLoaded", () => {
    renderLibrary();
    renderRecipes();
});