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
                    { name: "DMK Arrival & Transfer", start: "08:30 AM", dur: "3 hrs", cost: 150, reach: "11:30 AM", famous: "Arrival Leg", see: "Don Mueang Airport to Pattaya.", do: "Take official Bus A1 to PTY.", transport: "Bus (150 THB) / Taxi (1500 THB)", img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=800" },
                    { name: "Tiger Park Pattaya", start: "12:00 PM", dur: "1.5 hrs", cost: 600, reach: "12:00 PM", famous: "Tiger Interaction", see: "Majestic tigers in a park setting.", do: "Photo op with medium tigers.", book: "Klook", map: "Tiger+Park+Pattaya", transport: "Bolt (80 THB)", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800" }
                ],
                "Activities": [
                    { name: "Sanctuary of Truth", start: "02:30 PM", dur: "2.5 hrs", cost: 500, reach: "02:30 PM", famous: "Wooden Architecture", see: "Entirely hand-carved wooden museum.", do: "Join the mandatory guided tour.", book: "Tripadvisor", map: "Sanctuary+of+Truth+Pattaya", transport: "Bolt (120 THB)", img: "https://images.unsplash.com/photo-1528181304800-2f140819898f?q=80&w=800" }
                ],
                "Food": [
                    { name: "Pupen Seafood Jomtien", start: "06:30 PM", dur: "1.5 hrs", cost: 450, reach: "06:30 PM", dish: "Poo Pad Pong Karee", see: "Giant crab icon at beach.", do: "Enjoy fresh catch by the water.", map: "Pupen+Seafood+Pattaya", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800" }
                ],
                "Nightlife": [
                    { name: "Walking Street", start: "09:00 PM", dur: "Till 2 AM", cost: 800, reach: "09:00 PM", famous: "Party Center", see: "Neon lights and electric vibe.", do: "Experience the bars and live music.", map: "Pattaya+Walking+Street", img: "https://images.unsplash.com/photo-1629115948551-aa947381d6d3?q=80&w=800" }
                ],
                "Weed": [
                    { name: "Cloud Nine", start: "11:30 PM", dur: "1 hr", cost: 400, reach: "11:30 PM", famous: "Cloud Theme", desc: "Top shelf flower in a surreal setting.", map: "Cloud+Nine+Cannabis+Pattaya", img: "https://images.unsplash.com/photo-1589139044941-84196d07d6d5?q=80&w=800" }
                ]
            }
        },
        2: {
            title: "D2: Islands & Botanical Art",
            total: 0,
            sections: {
                "Morning": [
                    { name: "7:30 AM Breakfast", start: "07:30 AM", dur: "30 min", cost: 150, reach: "07:30 AM", famous: "Morning Start", see: "Local Pattaya café vibe.", do: "Fuel up for the island day.", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800" },
                    { name: "Koh Larn (Coral Island)", start: "08:30 AM", dur: "5 hrs", cost: 400, reach: "08:30 AM", famous: "Snorkeling Spot", see: "Samae Beach crystal waters.", do: "Rent a sea scooter or snorkel.", book: "Klook", map: "Bali+Hai+Pier", transport: "Speedboat (300 THB)", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800" }
                ],
                "Activities": [
                    { name: "Art in Paradise", start: "02:00 PM", dur: "1.5 hrs", cost: 500, reach: "02:00 PM", famous: "3D Trick Art", see: "Massive wall-to-floor illusions.", do: "Take creative 3D photos.", book: "Klook", map: "Art+in+Paradise+Pattaya", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800" },
                    { name: "Big Buddha + Wang Sam Sien", start: "04:30 PM", dur: "2 hrs", cost: 0, reach: "04:30 PM", famous: "Heritage Hill", see: "Golden Buddha & Chinese Temple.", do: "Watch sunset from the hill.", map: "Wat+Phra+Yai+Pattaya", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800" },
                    { name: "Nong Nooch Garden", start: "07:00 PM", dur: "2 hrs", cost: 500, reach: "07:00 PM", famous: "Botanical Legend", see: "Illuminated evening gardens.", do: "See the dinosaur valley at night.", book: "Klook", map: "Nong+Nooch+Tropical+Garden", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800" }
                ],
                "Food": [
                    { name: "The Sky Gallery", start: "09:00 PM", dur: "1.5 hrs", cost: 600, reach: "09:00 PM", dish: "Phad Thai Lobster", see: "Cliffs overlooking the ocean.", do: "Late dinner with seaside breeze.", map: "Sky+Gallery+Pattaya", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800" }
                ],
                "Nightlife": [
                    { name: "Alcazar Cabaret Show", start: "11:00 PM", dur: "1.5 hrs", cost: 600, reach: "11:00 PM", famous: "World Class Show", see: "Spectacular costumes and dance.", book: "Official", map: "Alcazar+Cabaret+Show+Pattaya", img: "https://images.unsplash.com/photo-1514525253361-b8748b43a59a?q=80&w=800" }
                ],
                "Weed": [
                    { name: "Siam Green Pattaya", start: "01:00 AM", dur: "1 hr", cost: 300, reach: "01:00 AM", famous: "Premium Shop", desc: "Best curated flower for the night.", map: "Siam+Green+Cannabis+Pattaya", img: "https://images.unsplash.com/photo-1589139044941-84196d07d6d5?q=80&w=800" }
                ]
            }
        },
        3: {
            title: "D3: Bangkok Heritage",
            total: 0,
            sections: {
                "Morning": [
                    { name: "7:30 AM BKK Transfer", start: "07:30 AM", dur: "2.5 hrs", cost: 150, reach: "10:00 AM", famous: "City Transfer", see: "Intercity Highway Views.", do: "Catch the direct Bus/Private Car.", transport: "Bus (150 THB) / Taxi (1200 THB)", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" },
                    { name: "Chatuchak Market (Sunday)", start: "10:30 AM", dur: "3 hrs", cost: 400, reach: "10:30 AM", famous: "Shopper Paradise", see: "15,000 stalls of everything.", do: "Bargain for souvenirs/clothing.", map: "Chatuchak+Weekend+Market", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800" }
                ],
                "Activities": [
                    { name: "The Grand Palace", start: "02:00 PM", dur: "2 hrs", cost: 500, reach: "02:00 PM", famous: "Temple of Emerald Buddha", see: "Architecture of the Kings.", do: "Mandatory dress code applied.", book: "Official", map: "Grand+Palace+Bangkok", img: "https://images.unsplash.com/photo-1563492065561-36d319a8fc11?q=80&w=800" },
                    { name: "Wat Pho", start: "04:30 PM", dur: "1 hr", cost: 300, reach: "04:30 PM", famous: "Reclining Buddha", see: "Gold-plated 46m long Buddha.", map: "Wat+Pho+Bangkok", img: "https://images.unsplash.com/photo-1528642168434-c483a652a8a1?q=80&w=800" },
                    { name: "Wat Arun (Sunset)", start: "06:00 PM", dur: "1.5 hrs", cost: 200, reach: "06:00 PM", famous: "Porcelain Spire", see: "Sunset behind the temple.", map: "Wat+Arun+Bangkok", transport: "Ferry (5 THB)", img: "https://images.unsplash.com/photo-1582298538104-fe2e04f63873?q=80&w=800" }
                ],
                "Food": [
                    { name: "Yaowarat Street Food", start: "08:30 PM", dur: "2 hrs", cost: 500, reach: "08:30 PM", dish: "Rolled Noodles / Seafood", see: "Neon Chinatown crowds.", do: "Join the long queue for Jay Fai.", map: "Yaowarat+Road+Bangkok", img: "https://images.unsplash.com/photo-1555529323-288219463b2f?q=80&w=800" }
                ],
                "Nightlife": [
                    { name: "Tichuca Rooftop", start: "11:00 PM", dur: "Till 2 AM", cost: 1000, reach: "11:00 PM", famous: "Jungle Bar", see: "Led tree and skyline views.", map: "Tichuca+Rooftop+Bar", img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?q=80&w=800" }
                ]
            }
        },
        4: {
            title: "D4: Culture & Massage",
            total: 0,
            sections: {
                "Morning": [
                    { name: "7:30 AM Breakfast", start: "07:30 AM", dur: "30 min", cost: 150, reach: "07:30 AM", famous: "Fuel Up", see: "Bangkok street life waking up.", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800" },
                    { name: "Golden Mount (Wat Saket)", start: "09:00 AM", dur: "1.5 hrs", cost: 100, reach: "09:00 AM", famous: "Panorama View", see: "Golden stupa visible from afar.", map: "Wat+Saket+Bangkok", img: "https://images.unsplash.com/photo-1528642168434-c483a652a8a1?q=80&w=800" }
                ],
                "Activities": [
                    { name: "Lumpini Park", start: "11:00 AM", dur: "1.5 hrs", cost: 0, reach: "11:00 AM", famous: "BKK Central Park", see: "Monitor lizards in the lake.", map: "Lumpini+Park+Bangkok", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800" },
                    { name: "Jim Thompson House", start: "01:30 PM", dur: "2 hrs", cost: 200, reach: "01:30 PM", famous: "Thai Silk Home", see: "Traditional teak wood architecture.", map: "Jim+Thompson+House+Bangkok", img: "https://images.unsplash.com/photo-1563492065561-36d319a8fc11?q=80&w=800" }
                ],
                "Massage": [
                    { name: "Health Land Asoke", start: "04:30 PM", dur: "2 hrs", cost: 650, reach: "04:30 PM", famous: "Authentic Massage", see: "Grand traditional center.", do: "2-hr Traditional Thai Massage.", book: "Klook", map: "Health+Land+Asoke", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800" }
                ],
                "Food": [
                    { name: "Khao San Street Eats", start: "07:30 PM", dur: "2 hrs", cost: 400, reach: "07:30 PM", dish: "Crispy Pork / Pad Thai", see: "Backpacker buzz and energy.", map: "Khao+San+Road+Bangkok", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800" }
                ],
                "Nightlife": [
                    { name: "Asiatique Riverfront", start: "10:30 PM", dur: "Till 2 AM", cost: 800, reach: "10:30 PM", famous: "Ferris Wheel", see: "Open air riverside shopping.", map: "Asiatique+Riverfront+Bangkok", img: "https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800" }
                ],
                "Weed": [
                    { name: "Cloud Nine Bangkok", start: "01:00 AM", dur: "1 hr", cost: 400, reach: "01:00 AM", famous: "Modern Dispensary", desc: "Best white-box experience in BKK.", map: "Cloud+Nine+Cannabis+Asoke", img: "https://images.unsplash.com/photo-1589139044941-84196d07d6d5?q=80&w=800" }
                ]
            }
        },
        5: {
            title: "D5: Ancient History",
            total: 0,
            sections: {
                "Morning": [
                    { name: "7:30 AM Breakfast", start: "07:30 AM", dur: "30 min", cost: 150, reach: "07:30 AM", famous: "Final Start", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800" },
                    { name: "Ancient City (Muang Boran)", start: "09:00 AM", dur: "4 hrs", cost: 700, reach: "09:00 AM", famous: "Museum in the Open", see: "Replicas of all Thai landmarks.", do: "Rent a golf cart (300 THB).", book: "Klook", map: "Muang+Boran+Ancient+City", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800" }
                ],
                "Activities": [
                    { name: "Erawan Museum", start: "02:00 PM", dur: "2 hrs", cost: 400, reach: "02:00 PM", famous: "Three-Headed Elephant", see: "Massive bronze elephant sculpture.", map: "Erawan+Museum+Bangkok", img: "https://images.unsplash.com/photo-1563492065561-36d319a8fc11?q=80&w=800" },
                    { name: "MOCA Bangkok", start: "04:30 PM", dur: "2 hrs", cost: 250, reach: "04:30 PM", famous: "Modern Art", see: "Premium contemporary collection.", map: "MOCA+Bangkok", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800" }
                ],
                "Food": [
                    { name: "Final Sunset Drink", start: "07:30 PM", dur: "1.5 hrs", cost: 800, reach: "07:30 PM", dish: "Signature Cocktail", see: "Last city view from rooftop.", map: "Lebua+State+Tower", img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?q=80&w=800" }
                ],
                "Travel": [
                    { name: "DMK Exit Bound", start: "10:00 PM", dur: "1 hr", cost: 50, reach: "11:00 PM", famous: "End Quest", see: "Final trip to Don Mueang.", do: "Catch the A1 bus or Grab.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=800" }
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
        <button class="btn-map" onclick="nextSlide()" style="margin-top:30px; width:auto; padding:15px 40px;">ENTER QUEST</button>
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
                            ARRIVE @ ${it.reach || it.start}
                        </div>
                    </div>
                    <div class="card-body">
                        ${it.famous ? `<span class="tag">FAMOUS FOR: ${it.famous}</span>`:''}
                        <h4 class="card-title">${it.name}</h4>
                        <p class="card-desc"><b>See/Do:</b> ${it.see || it.desc || ''}<br><b>Note:</b> ${it.do || it.desc || ''}</p>
                        
                        <div class="item-meta">
                            <div class="meta-box"><strong>DUR / STAY</strong> ${it.dur}</div>
                            <div class="meta-box"><strong>EST. COST</strong> ${it.cost} THB</div>
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
