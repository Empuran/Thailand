const data = {
    vibe: { title: "Thailand Quest", subtitle: "MAY 1 - MAY 6, 2026", bg: "hero.png" },
    rules: {
        sim: {
            title: "Tourist SIM Card Guide",
            desc: "Buy before landing via Klook or at Airport AIS/True kiosks.",
            steps: [
                "Option A: Download Airalo/Klook eSIM before takeoff.",
                "Option B: Pick up Physical SIM at AIS Kiosk (After Baggage Claim).",
                "Cost: ~299-599 THB. Bring Passport for registration."
            ]
        },
        legal: [
            { t: "Legal 2026", c: ["Vaping: 100% Forbidden.", "Monarchy: Zero tolerance for insults."] },
            { t: "Culture", c: ["Dress: Shoulders/knees covered for temples.", "Feet: Never point at Buddha/people."] }
        ]
    },
    days: {
        1: {
            title: "D1: Pattaya Arrival & Tigers",
            total: 0,
            sections: {
                "Travel & Morning": [
                    { name: "DMK Arrival & Transfer", start: "08:30 AM", end: "11:30 AM", hours: "24/7 Operations", dur: "3 hrs", cost: 150, famous: "Arrival Leg", see: "Arrival at Don Mueang (DMK) and transfer to Pattaya.", do: "Take the official A1 Bus to Mo Chit, then the direct Pattaya shuttle.", transport: "Official Bus A1 (150 THB)", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" },
                    { name: "Tiger Park Pattaya", start: "12:00 PM", end: "01:30 PM", hours: "09:00 AM - 06:00 PM", dur: "1.5 hrs", cost: 600, famous: "Wildlife Interaction", see: "Various tiger sizes from cubs to adults.", do: "Safely interact and take photos with medium tigers.", book: "Klook", map: "Tiger+Park+Pattaya", transport: "Bolt Ride (80 THB)", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800" }
                ],
                "Activities": [
                    { name: "Sanctuary of Truth", start: "02:30 PM", end: "05:00 PM", hours: "08:00 AM - 06:00 PM", dur: "2.5 hrs", cost: 500, famous: "Wooden Masterpiece", see: "A massive hand-carved wooden temple overlooking the sea.", do: "Observe artisans at work and join a mandatory guided tour.", book: "Tripadvisor", map: "Sanctuary+of+Truth+Pattaya", transport: "Songthaew (120 THB)", img: "./sanctuary.jpg" }
                ],
                "Food": [
                    { name: "Pupen Seafood Jomtien", start: "06:30 PM", end: "08:00 PM", hours: "10:00 AM - 10:00 PM", dur: "1.5 hrs", cost: 450, dish: "Poo Pad Pong Karee", see: "Iconic giant crab statue at the beach entry.", do: "Eat fresh curry crab while enjoying the sea breeze.", map: "Pupen+Seafood+Pattaya", img: "./pupen-seafood.jpg" }
                ],
                "Nightlife": [
                    { name: "Walking Street", start: "09:00 PM", end: "02:00 AM", hours: "06:00 PM - 02:00 AM", dur: "Till 2 AM", cost: 800, famous: "Party Haven", see: "Explosive neon lights and high-energy crowds.", do: "Hop between live music bars and sky bars.", map: "Pattaya+Walking+Street", img: "https://images.unsplash.com/photo-1590732152668-f9bcf040375a?q=80&w=800" }
                ],
                "Weed": [
                    { name: "Cloud Nine", start: "11:30 PM", end: "12:30 AM", hours: "10:00 AM - 02:00 AM", dur: "1 hr", cost: 400, famous: "Cloud Vibe", desc: "Premium dispensary with futuristic white cloud decor.", do: "Sample high-grade Thai flower in a relaxed shop.", map: "Cloud+Nine+Cannabis+Pattaya", img: "https://images.unsplash.com/photo-1628191010210-a597bd1a548c?q=80&w=800" }
                ]
            }
        },
        2: {
            title: "D2: Islands & Botanical Art",
            total: 0,
            sections: {
                "Morning": [
                    { name: "7:30 AM Breakfast", start: "07:30 AM", end: "08:00 AM", hours: "07:00 AM - 10:00 PM", dur: "30 min", cost: 150, famous: "Morning Fuel", see: "Relaxed morning beach vibes.", do: "Fuel up with Thai coffee and street congee.", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800" },
                    { name: "Koh Larn (Coral Island)", start: "08:30 AM", end: "01:30 PM", hours: "Ferry: 07:00 AM - 06:00 PM", dur: "5 hrs", cost: 400, famous: "Island Escape", see: "Clear waters of Tawaen or Samae Beach.", do: "Snorkel, jet ski, or enjoy a sea-view lunch.", book: "Klook", map: "Bali+Hai+Pier", transport: "Speedboat (300 THB)", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800" }
                ],
                "Activities": [
                    { name: "Art in Paradise", start: "02:00 PM", end: "03:30 PM", hours: "09:00 AM - 09:00 PM", dur: "1.5 hrs", cost: 500, famous: "3D Visuals", see: "Immersive 3D paintings that come to life on camera.", do: "Take creative photos in the various themed zones.", book: "Klook", map: "Art+in+Paradise+Pattaya", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800" },
                    { name: "Big Buddha Hill", start: "04:30 PM", end: "06:30 PM", hours: "08:00 AM - 06:00 PM", dur: "2 hrs", cost: 0, famous: "Golden Landmark", see: "18m Golden Buddha and panoramic Pattaya views.", do: "Climb the grand stairs and enjoy the sunset golden hour.", map: "Wat+Phra+Yai+Pattaya", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800" },
                    { name: "Buddha Mountain", start: "07:00 PM", end: "08:00 PM", hours: "08:00 AM - 06:00 PM", dur: "1 hr", cost: 0, famous: "Laser Icon", see: "A 130m tall golden Buddha engraved into a limestone cliff.", do: "Take iconic photos and wander the peaceful grounds.", transport: "Songthaew (200 THB)", map: "Khao+Chi+Chan+Pattaya", img: "./khao-chee-chan-buddha.jpg" }
                ],
                "Food": [
                    { name: "The Sky Gallery", start: "09:00 PM", end: "10:30 PM", hours: "10:00 AM - 10:00 PM", dur: "1.5 hrs", cost: 600, dish: "Pad Thai Lobster", see: "Stunning cliffside view of the gulf.", do: "Enjoy a luxury dinner as the city lights turn on.", map: "Sky+Gallery+Pattaya", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800" }
                ],
                "Nightlife": [
                    { name: "Alcazar Cabaret", start: "11:00 PM", end: "12:30 AM", hours: "Shows: 06:30, 08:00, 09:30 PM", dur: "1.5 hrs", cost: 600, famous: "World Show", see: "Luxurious costumes and high-production dance.", do: "Witness Thailand's most famous cabaret performance.", book: "Official", map: "Alcazar+Cabaret+Show+Pattaya", img: "./alcazar-cabaret-show-9401.jpg" }
                ],
                "Weed": [
                    { name: "Siam Green Pattaya", start: "01:00 AM", end: "02:00 AM", hours: "10:00 AM - 02:00 AM", dur: "1 hr", cost: 300, famous: "Green Quality", desc: "Top-tier shop with certified organic flower.", do: "Relax and wind down after the show.", map: "Siam+Green+Cannabis+Pattaya", img: "https://images.unsplash.com/photo-1589139044941-84196d07d6d5?q=80&w=800" }
                ]
            }
        },
        3: {
            title: "D3: Bangkok Heritage",
            total: 0,
            sections: {
                "Morning": [
                    { name: "7:30 AM BKK Transfer", start: "07:30 AM", end: "10:00 AM", hours: "Daily 7:30 AM Start", dur: "2.5 hrs", cost: 150, famous: "BKK Bound", see: "The road from Pattaya to the Big Mango.", do: "Check into your Bangkok hotel early.", transport: "Private Shuttle (1200 THB Total / 300 THB PP)", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" },
                    { name: "Chatuchak Market", start: "10:30 AM", end: "01:30 PM", hours: "09:00 AM - 06:00 PM (Sat/Sun)", dur: "3 hrs", cost: 400, famous: "Weekend Special", see: "The world's largest weekend market (15,000 stalls).", do: "Buy unique fashion, spices, and eat coconut ice cream.", map: "Chatuchak+Market", img: "./chatuchak market.jpg" }
                ],
                "Activities": [
                    { name: "Grand Palace", start: "02:00 PM", end: "04:00 PM", hours: "08:30 AM - 03:30 PM", dur: "2 hrs", cost: 500, famous: "Royal Icon", see: "The spectacular Temple of the Emerald Buddha.", do: "Marvelling at original Thai royal architecture.", book: "Official", map: "Grand+Palace+Bangkok", img: "./grand palace.jpg" },
                    { name: "Wat Pho", start: "04:30 PM", end: "05:30 PM", hours: "08:00 AM - 06:30 PM", dur: "1 hr", cost: 300, famous: "Reclining Buddha", see: "The massive 46m long gold-plated Buddha.", do: "Wander through the temple complex (Birthplace of Thai Massage).", map: "Wat+Pho+Bangkok", img: "./wat-pho.jpg" },
                    { name: "Wat Arun (Sunset)", start: "06:00 PM", end: "07:30 PM", hours: "08:00 AM - 06:00 PM", dur: "1.5 hrs", cost: 200, famous: "Dawn Spires", see: "Golden spires of the temple against the setting sun.", do: "Take a cross-river ferry to the temple for photos.", map: "Wat+Arun+Bangkok", transport: "MRT Sanam Chai", img: "./wat arunn.webp" }
                ],
                "Food": [
                    { name: "Chinatown Street Food", start: "08:30 PM", end: "10:30 PM", hours: "06:00 PM - 12:00 AM (Peak)", dur: "2 hrs", cost: 500, dish: "Oyster Omelette", see: "Neon-soaked Yaowarat Road bustle.", do: "Join the street food crawl in the world's best Chinatown.", map: "Yaowarat+Road+Bangkok", img: "https://images.unsplash.com/photo-1555529323-288219463b2f?q=80&w=800" }
                ],
                "Nightlife": [
                    { name: "Sky Bar Tichuca", start: "11:00 PM", end: "02:00 AM", hours: "05:00 PM - 02:00 AM", dur: "Till 2 AM", cost: 1000, famous: "Sky Jungle", see: "The iconic LED Tree over the Bangkok skyline.", do: "Party at the world's most Instagrammable rooftop bar.", map: "Tichuca+Rooftop", img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?q=80&w=800" }
                ]
            }
        },
        4: {
            title: "D4: Culture & Massage",
            total: 0,
            sections: {
                "Morning": [
                    { name: "7:30 AM Breakfast", start: "07:30 AM", end: "08:00 AM", hours: "06:00 AM - 11:00 AM (Street Food)", dur: "30 min", cost: 150, famous: "Morning Fuel", see: "The energy of busy Bangkok mornings.", do: "Fuel up with street-side boat noodles or congee.", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800" },
                    { name: "Wat Saket (Golden Mount)", start: "09:00 AM", end: "10:30 AM", hours: "07:30 AM - 07:00 PM", dur: "1.5 hrs", cost: 100, famous: "Temple on Hill", see: "The golden stupa sits atop the only man-made hill in BKK.", do: "Climb the 300 stairs for a 360-degree view of Old Bangkok.", map: "Golden+Mount", img: "https://images.unsplash.com/photo-1528642168434-c483a652a8a1?q=80&w=800" }
                ],
                "Activities": [
                    { name: "Lumpini Park", start: "11:00 AM", end: "12:30 PM", hours: "04:30 AM - 10:00 PM", dur: "1.5 hrs", cost: 0, famous: "Green Lung", see: "The lake and the famous monitor lizards.", do: "Take a swan pedal boat for a spin on the lake.", map: "Lumpini+Park", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800" },
                    { name: "Jim Thompson House", start: "01:30 PM", end: "03:30 PM", hours: "10:00 AM - 06:00 PM", dur: "2 hrs", cost: 200, famous: "Silk Legend", see: "Traditional Thai wood houses in a jungle garden.", do: "Guided tour through the history of the Thai Silk King.", map: "Jim+Thompson+House", transport: "BTS National Stadium", img: "https://images.unsplash.com/photo-1563492065561-36d319a8fc11?q=80&w=800" }
                ],
                "Massage": [
                    { name: "Health Land", start: "04:30 PM", end: "06:30 PM", hours: "09:00 AM - 11:00 PM", dur: "2 hrs", cost: 650, famous: "Top Rated Spa", see: "Bangkok's most iconic traditional spa mansion.", do: "Indulge in a 2-hr Traditional Thai Therapeutic Massage.", book: "Klook", map: "Health+Land+Asoke", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800" }
                ],
                "Food": [
                    { name: "Khao San Eats", start: "07:30 PM", end: "09:30 PM", hours: "Nightlife: 06:00 PM - 02:00 AM", dur: "2 hrs", cost: 400, dish: "Mango Sticky Rice", see: "The crazy energy of the backpacker world capital.", do: "Eat street food while watching the street performers.", map: "Khao+San+Road", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800" }
                ],
                "Nightlife": [
                    { name: "Asiatique Riverfront", start: "10:30 PM", end: "02:00 AM", hours: "04:00 PM - 12:00 AM", dur: "Till 2 AM", cost: 800, famous: "Riverside Joy", see: "Night river views and the massive Ferris wheel.", do: "Shop, drink, and enjoy the riverside cool breeze.", map: "Asiatique", img: "https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800" }
                ],
                "Weed": [
                    { name: "Cloud Nine Bangkok", start: "01:00 AM", end: "02:00 AM", hours: "10:00 AM - 02:00 AM", dur: "1 hr", cost: 400, famous: "Futuristic Cloud", desc: "Top-tier shop in the city center.", do: "Experience the premium flower in a cloud-themed shop.", map: "Cloud+Nine+Bangkok", img: "https://images.unsplash.com/photo-1628191010210-a597bd1a548c?q=80&w=800" }
                ]
            }
        },
        5: {
            title: "D5: Ancient History",
            total: 0,
            sections: {
                "Morning": [
                    { name: "7:30 AM Breakfast", start: "07:30 AM", end: "08:00 AM", hours: "06:00 AM - 10:00 AM", famous: "Final Start", see: "Calm morning reflections.", do: "Final morning street coffee walk.", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800" },
                    { name: "Ancient City", start: "09:00 AM", end: "01:00 PM", hours: "09:00 AM - 07:00 PM", dur: "4 hrs", cost: 700, famous: "Mini Thailand", see: "Replicas of Thailand's most famous landmarks.", do: "Rent a golf cart (300 THB) to explore the massive grounds.", book: "Klook", map: "Muang+Boran+Ancient+City", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800" }
                ],
                "Activities": [
                    { name: "Erawan Museum", start: "02:00 PM", end: "04:00 PM", hours: "09:00 AM - 06:00 PM", dur: "2 hrs", cost: 400, famous: "Giant Elephant", see: "The massive 3-headed elephant bronze sculpture.", do: "Enter the elephant's belly for incredible cosmic art.", map: "Erawan+Museum", img: "https://images.unsplash.com/photo-1563492065561-36d319a8fc11?q=80&w=800" },
                    { name: "MOCA Bangkok", start: "04:30 PM", end: "06:30 PM", hours: "10:00 AM - 06:00 PM (Closed Mon)", dur: "2 hrs", cost: 250, famous: "Modern Masterpieces", see: "Thailand's best collection of modern art.", do: "Explore five floors of stunning Thai contemporary art.", map: "MOCA+Bangkok", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800" }
                ],
                "Food": [
                    { name: "Sunset Drink", start: "07:30 PM", end: "09:00 PM", hours: "05:00 PM - 12:30 AM", dur: "1.5 hrs", cost: 800, dish: "Final Toast", see: "The setting sun over the sparkling BKK high-rises.", do: "Raise a glass to the perfect quest.", map: "Sirocco+Sky+Bar", img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?q=80&w=800" }
                ],
                "Travel": [
                    { name: "DMK Final bound", start: "10:00 PM", end: "11:00 PM", hours: "DMK: 24/7 Arrivals/Exits", dur: "1 hr", cost: 50, famous: "Departure Leg", see: "Final nighttime views of the city.", do: "Head to Don Mueang for your flight (Grab/A1 Bus).", img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=800" }
                ]
            }
        }
    }
};

let currentSlide = 0;
const slider = document.getElementById('slider');

function renderSlides() {
    slider.innerHTML = '';
    
    // 1. Vibe
    const v = document.createElement('div'); v.className = 'slide active';
    v.innerHTML = `<div style="height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('${data.vibe.bg}') no-repeat center/cover; border-radius:30px; color:#fff; padding:40px;">
        <p style="letter-spacing:1px; font-weight:800; opacity:0.8;">${data.vibe.subtitle}</p>
        <h1 style="font-size:4rem; font-weight:900; line-height:1; text-transform:uppercase;">${data.vibe.title}</h1>
        <button class="btn-start" onclick="nextSlide()">ENTER JOURNEY</button>
    </div>`;
    slider.appendChild(v);

    // 2. Rules
    const r = document.createElement('div'); r.className = 'slide next';
    r.innerHTML = `<div class="content-scroll">
        <h2 style="font-size:2rem; margin-bottom:20px; font-weight:900;">Rules & Prep</h2>
        ${data.rules.legal.map(l => `<div style="margin-bottom:15px;"><b>${l.t}:</b><ul>${l.c.map(i => `<li style="font-size:0.85rem; margin-top:5px; list-style:none; padding-left:15px; border-left:3px solid var(--rose);">${i}</li>`).join('')}</ul></div>`).join('')}
        <div class="sim-card-guide">
            <h4>${data.rules.sim.title}</h4>
            <p style="font-size:0.75rem; margin-bottom:8px;">${data.rules.sim.desc}</p>
            <ul>${data.rules.sim.steps.map(s => `<li style="font-size:0.7rem; list-style:none; margin-bottom:4px;">→ ${s}</li>`).join('')}</ul>
        </div>
    </div>`;
    slider.appendChild(r);

    // 3. Days
    let tripTotal = 0;
    Object.keys(data.days).forEach((dIdx) => {
        const d = data.days[dIdx];
        let dayTotal = 0;
        const s = document.createElement('div'); s.className = 'slide next';
        s.id = `day-slide-${dIdx}`;
        
        const catKeys = Object.keys(d.sections);
        s.innerHTML = `
            <h2 style="font-weight:900;">${d.title}</h2>
            <div class="category-tabs" id="tabs-${dIdx}">
                ${catKeys.map((k,i) => `<div class="tab ${i===0?'active':''}" onclick="switchCategory(${dIdx}, '${k}', this)">${k}</div>`).join('')}
            </div>
            <div class="content-scroll" id="content-${dIdx}"></div>
            <div class="day-total-banner" id="banner-${dIdx}">EST. DAY TOTAL: <span>0 THB</span></div>
        `;
        slider.appendChild(s);
        
        renderCategory(dIdx, catKeys[0]);
        
        Object.values(d.sections).forEach(cat => cat.forEach(it => dayTotal += (it.cost || 0)));
        data.days[dIdx].total = dayTotal;
        tripTotal += dayTotal;
        document.getElementById(`banner-${dIdx}`).innerHTML = `EST. DAY TOTAL (P.P): <span>${dayTotal} THB</span>`;
    });

    // 8. Trip Summary
    const sum = document.createElement('div'); sum.className = 'slide summary-page next';
    sum.innerHTML = `
        <h1 style="font-weight:900; line-height:1;">Trip Summary</h1>
        <div class="total-stat">${tripTotal} THB</div>
        <p style="color:var(--text-dim); font-weight:800;">Estimated Per Person for All Categories.</p>
        <div style="margin-top:60px;">
            <h2 style="font-weight:900;">Journey Complete</h2>
            <p style="font-size:0.9rem; opacity:0.7;">Check all map links for reliable directions.</p>
            <button onclick="currentSlide=0; updateSlides();" style="margin-top:20px; padding:15px 40px; background:var(--primary); color:#fff; border:none; border-radius:50px; font-weight:900; text-transform:uppercase; letter-spacing:1px;">RESTART</button>
        </div>
    `;
    slider.appendChild(sum);

    renderDots();
    updateSlides();
    lucide.createIcons();
}

function renderCategory(dIdx, cat) {
    const cont = document.getElementById(`content-${dIdx}`);
    const items = data.days[dIdx].sections[cat];
    cont.innerHTML = `
        <div style="padding-bottom:20px;">
            ${items.map(it => `
                <div class="card">
                    <div class="card-img" style="background-image:url('${it.image || it.img}')">
                        <div style="position:absolute; bottom:15px; left:15px; background:rgba(255,255,255,0.95); padding:6px 15px; border-radius:50px; font-weight:900; font-size:0.7rem; color:var(--primary); box-shadow:0 10px 20px rgba(0,0,0,0.1);">
                            ${it.start} - ${it.end}
                        </div>
                    </div>
                    <div class="card-body">
                        ${it.famous ? `<span class="tag">FAMOUS FOR: ${it.famous}</span>`:''}
                        <h4 class="card-title">${it.name}</h4>
                        <p class="card-desc"><b>See/Do:</b> ${it.see || it.desc || ''}<br><b>Note:</b> ${it.do || it.desc || ''}</p>
                        
                        <div class="item-meta">
                            <div class="meta-box"><strong>DUR / STAY</strong> ${it.dur}</div>
                            <div class="meta-box"><strong>OFFICIAL HOURS</strong> ${it.hours}</div>
                        </div>

                        ${it.transport ? `<div class="transport-block"><b>Best Way:</b> ${it.transport}</div>`:''}

                        <div class="links">
                            ${it.book ? `<a href="https://www.google.com/search?q=book+${it.name}+${it.book}" target="_blank" class="btn-book">BOOK: ${it.book}</a>`:''}
                            ${it.map ? `<a href="https://www.google.com/maps/search/?api=1&query=${it.map.replace(/ /g,'+')}" target="_blank" class="btn-map">MAP PIN</a>`:''}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function switchCategory(dIdx, cat, btn) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderCategory(dIdx, cat);
}

function updateSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((s, i) => {
        s.classList.remove('active', 'next', 'prev');
        if (i === currentSlide) s.classList.add('active');
        else if (i > currentSlide) s.classList.add('next');
        else s.classList.add('prev');
    });
    updateDots();
}

function renderDots() {
    const g = document.getElementById('dotGroup'); g.innerHTML = '';
    document.querySelectorAll('.slide').forEach((_,i) => {
        const d = document.createElement('div'); d.className = `dot ${i===currentSlide?'active':''}`;
        d.onclick = () => { currentSlide=i; updateSlides(); };
        g.appendChild(d);
    });
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((d,i) => d.classList.toggle('active', i===currentSlide));
}

function nextSlide() { if(currentSlide < document.querySelectorAll('.slide').length - 1) { currentSlide++; updateSlides(); } }
function prevSlide() { if(currentSlide > 0) { currentSlide--; updateSlides(); } }

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight') nextSlide();
    if(e.key === 'ArrowLeft') prevSlide();
});

renderSlides();
