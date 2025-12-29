const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const monuments = {
  petra: {
    title: "Petra",
    location: "Wadi Musa, Jordan",
    description: "Petra is an ancient city in southern Jordan, famous for its rock-cut architecture and rich historical significance. Carved directly into rose-colored sandstone cliffs, Petra was the capital of the Nabataean Kingdom over 2,000 years ago and a major center for trade connecting Arabia, Egypt, and the Mediterranean. The city is best known for landmarks such as Al-Khazneh (the Treasury), but it also contains temples, tombs, theaters, and an advanced water management system that allowed it to thrive in a harsh desert environment. Today, Petra is a UNESCO World Heritage Site and is widely regarded as one of the greatest archaeological wonders of the world.",
    image: "./img/shutterstock_581010355.jpg",
    bg:"./img/shutterstock_581010355.jpg"
  },
  halong: {
    title: "Ha Long Bay",
    location: "Vietnam",
    description: "Ha Long Bay is a natural wonder located in northern Vietnam, renowned for its emerald waters and thousands of towering limestone islands topped with lush greenery. Formed over millions of years, the bay features dramatic karst landscapes, hidden caves, and quiet lagoons that create a unique and breathtaking environment. It has long been an important cultural and economic area for local fishing communities and is rich in legends that explain its name, which means “Descending Dragon.” Today, Ha Long Bay is a UNESCO World Heritage Site and one of Vietnam’s most iconic destinations, attracting visitors from around the world.",
    image: "./img/halongbay.jpg",
    bg:"./img/halongbay.jpg",
  },
  fuji: {
    title: "Mount Fuji",
    location: "Japan",
    description: "Mount Fuji, standing tall at 3,776 meters, is Japan’s highest peak and an iconic symbol of the country. Its nearly perfect cone shape has inspired countless artists, poets, and travelers for centuries. Nestled between Shizuoka and Yamanashi prefectures, it’s an active volcano, though its last eruption was way back in 1707. Beyond its natural beauty, Mount Fuji is a spiritual site, with pilgrims climbing its slopes for centuries to reach the summit and witness the sunrise, called *Goraiko*. Today, it attracts hikers, photographers, and tourists from around the world, offering breathtaking views and a mix of nature, culture, and history.",
    image: "./img/Mount-Fuji-New.jpg",
    bg:"./img/Mount-Fuji-New.jpg",
  },
  easter: {
    title: "Easter Island",
    location: "Chile",
    description: "Easter Island, also known as Rapa Nui, is a remote island in the southeastern Pacific Ocean and is part of Chile. It is best known for its moai, large stone statues carved by the Rapa Nui people between about 1250 and 1500 CE. These statues are believed to represent important ancestors and reflect the island’s complex social and religious history. Despite its isolation, Easter Island developed a rich culture with unique art, language, and traditions. Today, it is an important archaeological site and a symbol of human creativity and adaptation in a challenging environment.",
    image: "./img/easterisland.avif",
    bg:"./img/easterisland.avif",
  },
  potala: {
    title: "Potala Palace",
    location: "Lhasa, Tibet",
    description: "The Potala Palace in Lhasa, Tibet, is this epic, fortress-like palace sitting on Marpo Ri hill. It was the winter home of the Dalai Lamas and a symbol of Tibetan Buddhism and authority. Built in the 17th century, it’s huge—over a thousand rooms including temples, chapels, and living quarters, all decked out with murals, statues, and sacred relics. The palace’s white and red walls with golden roofs make it insanely photogenic against the Himalayas. Now it’s a UNESCO World Heritage site and basically a magnet for anyone curious about history, culture, or breathtaking architecture.",
    image: "./img/lhasatibet.jpg",
    bg:"./img/lhasatibet.jpg"
  },
  colosseum: {
    title: "The Colosseum",
    location: "Rome, Italy",
    description: "The Colosseum in Rome is one of the most iconic landmarks from ancient history. Built nearly 2,000 years ago, it was a massive amphitheater used for gladiator battles, public spectacles, and other entertainment for Roman citizens. Its elliptical structure could hold tens of thousands of spectators, with a complex system of corridors, trapdoors, and seating tiers. Even in its partially ruined state today, the Colosseum shows off Roman engineering genius and architectural skill. It’s not just a tourist hotspot—it’s a symbol of Rome’s power, culture, and sometimes brutal history.",
    image: "./img/roman-coliseum-under-clouds-sunset-summer.avif",
    bg:"./img/roman-coliseum-under-clouds-sunset-summer.avif"
  }
};


if (monuments[id]) {
  document.getElementById("title").textContent = monuments[id].title;
  document.getElementById("location").textContent = monuments[id].location;
  document.getElementById("description").textContent = monuments[id].description;

  const bg=document.querySelector(".page");
  bg.style.background=`url(${monuments[id].bg})`;
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg.style.backgroundRepeat = "no-repeat";

  const img = document.getElementById("monument-img");
  img.src = monuments[id].image;
}

