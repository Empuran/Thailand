const data = {
    vibe: { title: "Thailand Quest", subtitle: "MAY 1 - MAY 6, 2026", bg: "hero.png" },
    rules: {
        sim: {
            title: "Tourist SIM Card Guide",
            desc: "Buy before landing via Klook or at Airport AIS/True kiosks.",
            steps: [
                "Option A: Download Airalo/Klook eSIM before takeoff.",
                "Option B: Pick up Physical SIM at AIS Kiosk (After Baggage Claim).",
                "Cost: ~299-599 THB for 8-15 days. Bring Passport for registration."
            ]
        },
        legal: [
            { t: "Legal 2026", c: ["Vaping: 100% Illegal. Possession = Arrest.", "Monarchy: No insults/jokes. Stiff penalties."] },
            { t: "Culture", c: ["Dress: Cover shoulders/knees for temples.", "Shoes: Remove before entry."] }
        ]
    },
    days: {
        1: {
            title: "D1: Pattaya Arrival & Tigers",
            total: 0,
            sections: {
                "Activities": [
                    { name: "Tiger Park Pattaya", cost: 600, see: "Interact with tigers of all sizes.", do: "Photo with medium/small tigers.", book: "Klook", map: "Tiger+Park+Pattaya", dist: "2km from Jomtien", transport: "Bolt (80 THB)", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800" },
                    { name: "Sanctuary of Truth", cost: 500, see: "Massive hand-carved wooden museum.", do: "Mandatory guided tour (included).", book: "Tripadvisor", map: "Sanctuary+of+Truth+Pattaya", dist: "6km from central", transport: "Bolt (120 THB)", img: "https://images.unsplash.com/photo-1528181304800-2f140819898f?q=80&w=800" }
                ],
                "Food": [
                    { name: "Pupen Seafood", dish: "Poo Pad Pong Karee (Crab Curry)", cost: 400, see: "Bustling Jomtien beach scene.", do: "Enjoy fresh seafood with ocean breeze.", map: "Pupen+Seafood+Pattaya", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800" }
                ],
                "Nightlife": [
                    { name: "Walking Street", cost: 800, see: "Iconic neon lights and energy.", do: "Pub crawl and live music spots.", map: "Pattaya+Walking+Street", img: "https://images.unsplash.com/photo-1629115948551-aa947381d6d3?q=80&w=800" }
                ],
                "Weed": [
                    { name: "Cloud Nine Pattaya", famous: "Futuristic Vibe", cost: 300, desc: "Premium flower in a professional setting.", map: "Cloud+Nine+Cannabis+Pattaya", img: "https://images.unsplash.com/photo-1589139044941-84196d07d6d5?q=80&w=800" }
                ]
            }
        },
        2: {
            title: "D2: Islands & Botanical Art",
            total: 0,
            sections: {
                "Activities": [
                    { name: "Koh Larn Snorkelling", cost: 400, see: "Clear waters and white sand.", do: "Catch speed boat from Bali Hai Pier.", book: "Klook", map: "Bali+Hai+Pier", dist: "At Beach", transport: "Ferry (30 THB)", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800" },
                    { name: "Nong Nooch Garden", cost: 500, see: "World-class themed botanical gardens.", do: "Elephant show and shuttle bus ride.", book: "Klook", map: "Nong+Nooch+Tropical+Garden", dist: "15km away", transport: "Taxi Stand (300 THB)", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800" }
                ],
                "Food": [
                    { name: "Sky Gallery", dish: "Som Tum Tad", cost: 450, see: "Panoramic sunset cliffs.", do: "Early dinner for the best views.", map: "Sky+Gallery+Pattaya", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800" }
                ],
                "Nightlife": [
                    { name: "Alcazar Cabaret", cost: 600, see: "Legendary Thai showmanship.", do: "Book VIP seats for better view.", book: "Official", map: "Alcazar+Cabaret+Show+Pattaya", img: "https://images.unsplash.com/photo-1514525253361-b8748b43a59a?q=80&w=800" }
                ],
                "Weed": [
                    { name: "Zaza Cannabis", famous: "High Variety", cost: 350, desc: "Known for friendly staff and deep catalog.", map: "Zaza+Cannabis+Pattaya", img: "https://images.unsplash.com/photo-1563201392-3abc3a3a0aa0?q=80&w=800" }
                ]
            }
        },
        3: {
            title: "D3: 7:30 AM Transfer to BKK",
            total: 0,
            sections: {
                "Activities": [
                    { name: "The Grand Palace", cost: 500, see: "Gilded temples and Emerald Buddha.", do: "Strict dress code: pants and sleeves.", book: "Official", map: "Grand+Palace+Bangkok", dist: "Sanam Chai MRT", transport: "Bus PTY-BKK (200 THB)", img: "https://images.unsplash.com/photo-1563492065561-36d319a8fc11?q=80&w=800" },
                    { name: "Wat Arun (Sunset)", cost: 200, see: "Temple of Dawn porcelain towers.", do: "Photography till sun sets behind it.", map: "Wat+Arun+Bangkok", dist: "Across river", transport: "Orange Boat (15 THB)", img: "https://images.unsplash.com/photo-1582298538104-fe2e04f63873?q=80&w=800" }
                ],
                "Food": [
                    { name: "Chinatown Food Hall", dish: "Oyster Omelette", cost: 400, see: "Neon signs and crowd energy.", do: "Eat at the plastic chairs on sidewalk.", map: "Yaowarat+Road+Bangkok", img: "https://images.unsplash.com/photo-1555529323-288219463b2f?q=80&w=800" }
                ],
                "Nightlife": [
                    { name: "Tichuca Rooftop", cost: 1200, see: "Iconic blue light tree.", do: "Sip drinks with 360-degree views.", map: "Tichuca+Rooftop+Bar", img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?q=80&w=800" }
                ],
                "Weed": [
                    { name: "Siam Green Chinatown", famous: "Premium Lounge", cost: 400, desc: "Enjoy in their upscale smoking lounge.", map: "Siam+Green+Cannabis+Chinatown", img: "https://images.unsplash.com/photo-1589139044941-84196d07d6d5?q=80&w=800" }
                ]
            }
        },
        4: {
            title: "D4: BKK Culture & Massage",
            total: 0,
            sections: {
                "Activities": [
                    { name: "Wat Saket (Golden Mount)", cost: 100, see: "Vast golden stupa on a hill.", do: "Go for panoramic city views.", map: "Wat+Saket+Bangkok", dist: "Central BKK", transport: "MRT (35 THB)", img: "https://images.unsplash.com/photo-1528642168434-c483a652a8a1?q=80&w=800" },
                    { name: "Lumpini Park", cost: 0, see: "Large lizards and nature.", do: "Rest from the chaos of the city.", map: "Lumpini+Park+Bangkok", dist: "Silom MRT", transport: "MRT (30 THB)", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800" }
                ],
                "Massage": [
                    { name: "Health Land Asoke", cost: 650, see: "Professional grand clinic.", do: "Traditional 2-hr Thai Massage.", book: "Klook", map: "Health+Land+Asoke", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800" }
                ],
                "Food": [
                    { name: "Khao Gaeng (Street)", dish: "Green Curry", cost: 300, see: "Authentic local flavors.", do: "Pick 2 tops with rice.", img: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?q=80&w=800" }
                ],
                "Nightlife": [
                    { name: "Sukhumvit Soi 11", cost: 1000, see: "Trendiest bar strip.", do: "Bar hop and people watch.", map: "Sukhumvit+Soi+11", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800" }
                ],
                "Weed": [
                    { name: "Cloud Nine Bangkok", famous: "Futurism", cost: 500, desc: "The best shop in Bangkok currently.", map: "Cloud+Nine+Cannabis+Asoke", img: "https://images.unsplash.com/photo-1589139044941-84196d07d6d5?q=80&w=800" }
                ]
            }
        },
        5: {
            title: "D5: Ancient Arts & Exit",
            total: 0,
            sections: {
                "Activities": [
                    { name: "Muang Boran (Ancient City)", cost: 700, see: "Replicas of all Thai landmarks.", do: "Rent golf cart to explore.", book: "Klook", map: "Muang+Boran+Ancient+City", dist: "30km away", transport: "Grab (400 THB)", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800" }
                ],
                "Food": [
                    { name: "Jodd Fairs Market", dish: "Spicy Pork Spine", cost: 500, see: "Trendy evening vibe.", do: "Eat at the central food stands.", map: "Jodd+Fairs+Bangkok", img: "https://images.unsplash.com/photo-1555529323-288219463b2f?q=80&w=800" }
                ],
                "Nightlife": [
                    { name: "Sirocco (Le Bua)", cost: 1400, see: "Hangover movie bar.", do: "One drink for the view before DMK.", map: "Lebua+State+Tower", img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?q=80&w=800" }
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
    v.innerHTML = `<div style="height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; background:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('${data.vibe.bg}') no-repeat center/cover; border-radius:30px; color:#fff; padding:40px;">
        <p style="letter-spacing:1px; font-weight:800; opacity:0.8;">${data.vibe.subtitle}</p>
        <h1 style="font-size:4rem; font-weight:900; line-height:1;">${data.vibe.title}</h1>
    </div>`;
    slider.appendChild(v);

    // 2. Rules
    const r = document.createElement('div'); r.className = 'slide next';
    r.innerHTML = `<div class="content-scroll">
        <h2 style="font-size:2rem; margin-bottom:20px;">Rules</h2>
        ${data.rules.legal.map(l => `<div style="margin-bottom:15px;"><b>${l.t}:</b><ul>${l.c.map(i => `<li style="font-size:0.85rem; margin-top:5px;">${i}</li>`).join('')}</ul></div>`).join('')}
        <div class="sim-card-guide">
            <h4>${data.rules.sim.title}</h4>
            <p style="font-size:0.75rem; margin-bottom:8px;">${data.rules.sim.desc}</p>
            <ul>${data.rules.sim.steps.map(s => `<li style="font-size:0.7rem;">${s}</li>`).join('')}</ul>
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
            <h2>${d.title}</h2>
            <div class="category-tabs" id="tabs-${dIdx}">
                ${catKeys.map((k,i) => `<div class="tab ${i===0?'active':''}" onclick="switchCategory(${dIdx}, '${k}', this)">${k}</div>`).join('')}
            </div>
            <div class="content-scroll" id="content-${dIdx}"></div>
            <div class="day-total-banner" id="banner-${dIdx}">EST. DAY TOTAL: <span>0 THB</span></div>
        `;
        slider.appendChild(s);
        
        // Initial render for each day
        renderCategory(dIdx, catKeys[0]);
        
        // Sum Day Total
        Object.values(d.sections).forEach(cat => cat.forEach(it => dayTotal += (it.cost || 0)));
        data.days[dIdx].total = dayTotal;
        tripTotal += dayTotal;
        document.getElementById(`banner-${dIdx}`).innerHTML = `EST. DAY TOTAL: <span>${dayTotal} THB</span>`;
    });

    // 8. Trip Summary
    const sum = document.createElement('div'); sum.className = 'slide summary-page next';
    sum.innerHTML = `
        <h1 style="font-weight:900;">Estimated Trip Total</h1>
        <div class="total-stat">${tripTotal} THB</div>
        <p style="color:var(--text-dim);">Estimated for Activities, Food, Nightlife, and Weed.</p>
        <div style="margin-top:60px;">
            <h2 style="font-weight:900;">Safe Travels!</h2>
            <p>Your 2026 Thailand Quest Awaits.</p>
            <button onclick="currentSlide=0; updateSlides();" style="margin-top:20px; padding:15px 30px; background:var(--primary); color:#fff; border:none; border-radius:50px; font-weight:800;">RESTART GUIDE</button>
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
                    ${it.img ? `<div class="card-img" style="background-image:url('${it.img}')"></div>`:''}
                    <div class="card-body">
                        ${it.famous ? `<span class="tag">FAMOUS FOR: ${it.famous}</span>`:''}
                        <h4 class="card-title">${it.name}</h4>
                        <p class="card-desc"><b>See:</b> ${it.see || it.desc || ''}<br><b>Do:</b> ${it.do || ''}</p>
                        
                        <div class="item-meta">
                            <div class="meta-box"><strong>COST</strong> ${it.cost} THB</div>
                            <div class="meta-box"><strong>LOCATION</strong> ${it.dist || 'Central'}</div>
                        </div>

                        ${it.transport ? `<div class="transport-block"><b>Transport:</b> ${it.transport}</div>`:''}

                        <div class="links">
                            ${it.book ? `<a href="https://www.google.com/search?q=book+${it.name}+${it.book}" target="_blank" class="btn-book">BOOK ${it.book}</a>`:''}
                            ${it.map ? `<a href="https://www.google.com/maps/search/?api=1&query=${it.map.replace(/ /g,'+')}" target="_blank" class="btn-map">MAP</a>`:''}
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
