const data = {
    vibe: {
        title: "Thailand Quest",
        subtitle: "MAY 1 - MAY 6, 2026",
        bg: "hero.png"
    },
    rules: [
        { type: "legal", title: "Legal 2026", icon: "shield-alert", items: ["🚫 Vaping: Illegal. Arrest risk.", "🌿 Cannabis: Medical only. Prescriptions on-site.", "👑 Monarchy: No insults/jokes. Stiff penalties."] },
        { type: "culture", title: "Culture", icon: "landmark", items: ["👗 Temples: Cover shoulders & knees.", "👟 Shoes: Off at the door.", "🧘 Buddha: Feet away from statues."] },
        { type: "pro", title: "Safety", icon: "alert-triangle", items: ["🛵 Traffic: Use Grab/Bolt, not scooters.", "💧 Water: Bottled only.", "🇹🇭 Anthem: Stop and stand still."] }
    ],
    days: {
        1: {
            title: "Day 1: Arrival & Pattaya Intro",
            categories: {
                "Activities & Sights": [
                    { name: "Sanctuary of Truth", famous: "Architectural Wonder", desc: "A massive hand-carved wooden temple exploring religious philosophy.", img: "https://images.unsplash.com/photo-1528181304800-2f140819898f?q=80&w=800", map: "Sanctuary+of+Truth+Pattaya" },
                    { name: "Pattaya Viewpoint", famous: "Panoramic Views", desc: "The best spot for photos of the entire bay curve.", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800", map: "Pattaya+Viewpoint" }
                ],
                "Nightlife": [
                    { name: "Pattaya Walking Street", famous: "Neon Heart of Thailand", desc: "Endless clubs, live music, and street performances.", img: "https://images.unsplash.com/photo-1629115948551-aa947381d6d3?q=80&w=800", map: "Pattaya+Walking+Street" }
                ],
                "Must Eat": [
                    { name: "The Sky Gallery", famous: "Sunset Dining", desc: "Premium beach restaurant with a focus on fresh seafood.", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800", map: "The+Sky+Gallery+Pattaya" }
                ],
                "Weeds": [
                    { name: "Cloud Nine Pattaya", famous: "Retro-Futurist Dispensary", desc: "GACP-certified flower and a professional medical-style vibe.", img: "https://images.unsplash.com/photo-1589139044941-84196d07d6d5?q=80&w=800", map: "Cloud+Nine+Cannabis+Pattaya" }
                ]
            }
        },
        2: {
            title: "Day 2: Islands & Animal Magic",
            categories: {
                "Activities & Sights": [
                    { name: "Koh Larn (Coral Island)", famous: "Turquoise Escape", desc: "Clear waters and white sand beaches just 15min away.", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800", map: "Koh+Larn+Pattaya" },
                    { name: "Art in Paradise", famous: "3D Illusion Art", desc: "Interactive gallery where you become part of the painting.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800", map: "Art+in+Paradise+Pattaya" }
                ],
                "Nightlife": [
                    { name: "Alcazar Cabaret Show", famous: "Legendary Performance", desc: "One of the most spectacular theater shows in Thailand.", img: "https://images.unsplash.com/photo-1514525253361-b8748b43a59a?q=80&w=800", map: "Alcazar+Cabaret+Show+Pattaya" }
                ],
                "Must Eat": [
                    { name: "PTY Floating Market", famous: "River Dining", desc: "Traditional Thai snacks served from canal boats.", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800", map: "Pattaya+Floating+Market" }
                ],
                "Weeds": [
                    { name: "Siam Green Pattaya", famous: "Professional Craft", desc: "Wellness-focused dispensary with expert guidance.", img: "https://images.unsplash.com/photo-1563201392-3abc3a3a0aa0?q=80&w=800", map: "Siam+Green+Cannabis+Pattaya" }
                ]
            }
        },
        3: {
            title: "Day 3: To Bangkok Modern Hub",
            categories: {
                "Activities & Sights": [
                    { name: "ICONSIAM", famous: "Riverside Mega-Mall", desc: "A blend of luxury shopping and authentic Thai culture.", img: "https://images.unsplash.com/photo-1562602833-286811776db1?q=80&w=800", map: "ICONSIAM+Bangkok" },
                    { name: "Asiatique Ferris Wheel", famous: "Riverside Entertainment", desc: "Open-air mall with the famous riverfront big wheel.", img: "https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800", map: "Asiatique+The+Riverfront+Bangkok" }
                ],
                "Nightlife": [
                    { name: "Sukhumvit Soi 11", famous: "The Party Mile", desc: "Bangkok's trendiest collection of bars and lounges.", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800", map: "Sukhumvit+Soi+11+Bangkok" }
                ],
                "Must Eat": [
                    { name: "SookSiam (ICONSIAM)", famous: "Indoor Street Food", desc: "Authentic food from all 77 provinces of Thailand.", img: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?q=80&w=800", map: "ICONSIAM+SookSiam" }
                ],
                "Massage": [
                    { name: "Health Land Asoke", famous: "Traditional Excellence", desc: "Professional, grand-scale traditional Thai massage.", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800", map: "Health+Land+Asoke+Bangkok" }
                ]
            }
        },
        4: {
            title: "Day 4: Bangkok Heritage Icons",
            categories: {
                "Activities & Sights": [
                    { name: "Grand Palace", famous: "The Kingdom's Jewel", desc: "Iconic residence of kings and home to the Emerald Buddha.", img: "https://images.unsplash.com/photo-1563492065561-36d319a8fc11?q=80&w=800", map: "Grand+Palace+Bangkok" },
                    { name: "Wat Arun", famous: "Temple of Dawn", desc: "Shimmering ceramic tower on the bank of the river.", img: "https://images.unsplash.com/photo-1582298538104-fe2e04f63873?q=80&w=800", map: "Wat+Arun+Bangkok" }
                ],
                "Nightlife": [
                    { name: "Tichuca Rooftop Bar", famous: "Avatar Tree Lounge", desc: "Stunning 360 views with a color-changing light tree.", img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?q=80&w=800", map: "Tichuca+Rooftop+Bar+Bangkok" }
                ],
                "Must Eat": [
                    { name: "Jay Fai (Michelin)", famous: "World-Class Crab Omelette", desc: "The legendary street food queen. (Advance booking needed!).", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800", map: "Raan+Jay+Fai+Bangkok" },
                    { name: "Yaowarat Street Food", famous: "Chinatown Feast", desc: "Neon signs and endless local delicacies at night.", img: "https://images.unsplash.com/photo-1555529323-288219463b2f?q=80&w=800", map: "Yaowarat+Road+Bangkok" }
                ],
                "Massage": [
                    { name: "Oasis Spa", famous: "Luxury Day Spa", desc: "Premium garden setting for ultimate relaxation.", img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800", map: "Oasis+Spa+Sukhumvit+Bangkok" }
                ]
            }
        },
        5: {
            title: "Day 5: Shopping & Departure",
            categories: {
                "Activities & Sights": [
                    { name: "Siam Paragon", famous: "Luxury Hub", desc: "Flagship mall with the best food hall in the city.", img: "https://images.unsplash.com/photo-1506450983270-d790323ad8e7?q=80&w=800", map: "Siam+Paragon+Bangkok" },
                    { name: "Jodd Fairs Market", desc: "Trendy night food market (opens early).", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800", map: "Jodd+Fairs+Bangkok" }
                ],
                "Must Eat": [
                    { name: "Mango Sticky Rice", famous: "Famous Thai Dessert", desc: "Available at Mae Varee near Thong Lo.", img: "https://images.unsplash.com/photo-1598952404618-f03dfa640101?q=80&w=800", map: "Mae+Varee+Mango+Sticky+Rice" }
                ],
                "Massage": [
                    { name: "Let's Relax Spa", famous: "Premium Chain", desc: "High-end comfort with free Sticky Rice treat after.", img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800", map: "Lets+Relax+Spa+Bangkok" }
                ]
            }
        }
    }
};

let currentSlide = 0;
const slider = document.getElementById('slider');

function renderSlides() {
    slider.innerHTML = '';
    
    // 1. Vibe Slide
    const vibeSlide = document.createElement('div');
    vibeSlide.className = 'slide vibe-page';
    vibeSlide.innerHTML = `
        <div class="vibe-hero">
            <p>${data.vibe.subtitle}</p>
            <h1>${data.vibe.title}</h1>
            <div id="slide-countdown" style="margin-top: 20px; font-weight: 800; color: var(--secondary);"></div>
        </div>
    `;
    slider.appendChild(vibeSlide);

    // 2. Rules Slide
    const rulesSlide = document.createElement('div');
    rulesSlide.className = 'slide';
    rulesSlide.innerHTML = `
        <h2 style="font-size: 3rem; text-align: center; margin-bottom: 40px;">THE RULES</h2>
        <div class="rules-grid">
            ${data.rules.map(r => `
                <div class="rule-card ${r.type}">
                    <h3><i data-lucide="${r.icon}"></i> ${r.title}</h3>
                    <ul>${r.items.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
            `).join('')}
        </div>
    `;
    slider.appendChild(rulesSlide);

    // 3. Day Slides
    Object.keys(data.days).forEach(dIdx => {
        const day = data.days[dIdx];
        const daySlide = document.createElement('div');
        daySlide.className = 'slide';
        daySlide.id = `day-slide-${dIdx}`;
        
        const catKeys = Object.keys(day.categories);
        daySlide.innerHTML = `
            <h2 style="font-size: 2.5rem; text-align: center;">${day.title}</h2>
            <div class="tab-container">
                ${catKeys.map((c, i) => `
                    <button class="tab-btn ${i === 0 ? 'active' : ''}" onclick="switchTab(${dIdx}, '${c}', this)">
                        ${c}
                    </button>
                `).join('')}
            </div>
            <div class="content-area" id="content-${dIdx}">
                <!-- Category content rendered here -->
            </div>
        `;
        slider.appendChild(daySlide);
        renderCategory(dIdx, catKeys[0]); // Render first category by default
    });

    updateSlides();
    renderDots();
    lucide.createIcons();
}

function renderCategory(dayIdx, category) {
    const container = document.getElementById(`content-${dayIdx}`);
    const items = data.days[dayIdx].categories[category];
    
    container.innerHTML = `
        <div class="content-grid">
            ${items.map(item => `
                <div class="card animate">
                    <div class="card-img" style="background-image: url('${item.img}')"></div>
                    <div class="card-body">
                        ${item.famous ? `<span class="famous-tag">FAMOUS FOR: ${item.famous}</span>` : ''}
                        <h4>${item.name}</h4>
                        <p>${item.desc}</p>
                        <div class="card-footer">
                            <a href="https://www.google.com/maps/search/?api=1&query=${item.map.replace(/ /g, '+')}" target="_blank" class="btn-map">🗺️ GOOGLE MAPS</a>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function switchTab(dayIdx, category, btn) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCategory(dayIdx, category);
}

function updateSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((s, i) => {
        s.classList.remove('active', 'next', 'prev');
        if (i === currentSlide) s.classList.add('active');
        else if (i > currentSlide) s.classList.add('next');
        else s.classList.add('prev');
    });

    document.getElementById('prevBtn').classList.toggle('disabled', currentSlide === 0);
    document.getElementById('nextBtn').classList.toggle('disabled', currentSlide === slides.length - 1);
    
    updateDots();
}

function renderDots() {
    const container = document.getElementById('dotGroup');
    const slides = document.querySelectorAll('.slide');
    container.innerHTML = '';
    slides.forEach((_, i) => {
        const d = document.createElement('div');
        d.className = `dot ${i === currentSlide ? 'active' : ''}`;
        d.onclick = () => { currentSlide = i; updateSlides(); };
        container.appendChild(d);
    });
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() { if (currentSlide < document.querySelectorAll('.slide').length - 1) { currentSlide++; updateSlides(); } }
function prevSlide() { if (currentSlide > 0) { currentSlide--; updateSlides(); } }

// Keyboard Support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Countdown
function updateCountdown() {
    const trip = new Date("May 1, 2026 08:30:00").getTime();
    const now = new Date().getTime();
    const d = Math.floor((trip - now) / (1000 * 60 * 60 * 24));
    const el = document.getElementById("slide-countdown");
    if (el) el.innerHTML = `${d} DAYS UNTIL TAKE OFF`;
}

// Init
renderSlides();
setInterval(updateCountdown, 1000);
updateCountdown();
setTimeout(() => document.getElementById('nav-hint').style.opacity = '0', 5000);
