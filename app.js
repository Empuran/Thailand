const itineraryData = {
    1: {
        events: [
            { time: "08:30 AM", title: "DMK Landing", desc: "Arrival. Immigration & Luggage.", duration: "1.5 hrs", spend: "0", map: "https://maps.app.goo.gl/DMKAirport", booking: "None" },
            { time: "10:30 AM", title: "Direct Bus to Pattaya", desc: "Gate 2 Service Hall. Buy tickets near arrival.", duration: "3 hrs", spend: "200", map: "https://maps.app.goo.gl/PattayaBus", booking: "On-site" },
            { time: "02:30 PM", title: "Hotel Check-in (Pattaya)", desc: "Stay Central (Beach Rd area).", duration: "1 hr", spend: "0", map: "https://maps.app.goo.gl/BeachRd", booking: "Recommended" },
            { time: "04:00 PM", title: "Sanctuary of Truth", desc: "Hand-carved wooden temple. Amazing architecture.", duration: "3 hrs", spend: "500", map: "https://maps.app.goo.gl/SanctuaryOfTruthMap", booking: "Klook/Site" },
            { time: "08:00 PM", title: "Dinner @ The Sky Gallery", desc: "Sunset views over the Pattaya bay.", duration: "2 hrs", spend: "600", map: "https://maps.app.goo.gl/SkyGalleryPattaya", booking: "Optional" },
            { time: "10:00 PM", title: "Walking Street", desc: "The heart of Pattaya nightlife until late.", duration: "4 hrs", spend: "800", map: "https://maps.app.goo.gl/WalkingStreetMap", booking: "None" }
        ],
        budget: { "Transport": 250, "Food": 600, "Entry": 500, "Nightlife": 800 }
    },
    2: {
        events: [
            { time: "07:30 AM", title: "Start: Head to Pier", desc: "Bali Hai Pier for Koh Larn speedboats.", duration: "30 min", spend: "20", map: "https://maps.app.goo.gl/BaliHaiPier", booking: "None" },
            { time: "08:30 AM", title: "Koh Larn (Coral Island)", desc: "Swimming, snorkeling, beaches. Speedboat is 15min.", duration: "5 hrs", spend: "300", map: "https://maps.app.goo.gl/KohLarnMap", booking: "On-site" },
            { time: "02:30 PM", title: "Art in Paradise", desc: "3D Illusion art gallery. Pro-level photos.", duration: "1.5 hrs", spend: "500", map: "https://maps.app.goo.gl/ArtInParadisePTY", booking: "Klook" },
            { time: "04:30 PM", title: "Tiger Park Pattaya", desc: "Observation or tiger interactions.", duration: "1.5 hrs", spend: "300", map: "https://maps.app.goo.gl/TigerParkPTY", booking: "Site/Klook" },
            { time: "06:30 PM", title: "Pattaya Floating Market", desc: "Riverboat ride and local snacks.", duration: "2 hrs", spend: "200", map: "https://maps.app.goo.gl/PTYFloatingMarket", booking: "Klook" },
            { time: "08:30 PM", title: "Alcazar Cabaret Show", desc: "Pattaya's world-famous performance.", duration: "1.5 hrs", spend: "600", map: "https://maps.app.goo.gl/AlcazarShowPTY", booking: "PRE-BOOK" },
            { time: "11:00 PM", title: "Late Night: Walking St", desc: "Go-go bars, live music, late night vibe.", duration: "3 hrs", spend: "500", map: "https://maps.app.goo.gl/WalkingStreetMap", booking: "None" }
        ],
        budget: { "Transport": 100, "Food": 500, "Entry": 1600, "Nightlife": 500 }
    },
    3: {
        events: [
            { time: "07:00 AM", title: "Bus to Bangkok", desc: "Depart from North Pattaya Terminal.", duration: "3 hrs", spend: "160", map: "https://maps.app.goo.gl/NTerminal", booking: "On-site" },
            { time: "11:00 AM", title: "BKK Hotel Check-in", desc: "Sukhumvit / Asok Interchange area.", duration: "1 hr", spend: "50", map: "https://maps.app.goo.gl/AsokMap", booking: "Recommended" },
            { time: "02:30 PM", title: "ICONSIAM", desc: "The mega-mall. Street food indoor (SookSiam).", duration: "3 hrs", spend: "400", map: "https://maps.app.goo.gl/IconsiamMap", booking: "None" },
            { time: "06:30 PM", title: "Asiatique Riverside", desc: "Ferris wheel and market dinner.", duration: "2 hrs", spend: "500", map: "https://maps.app.goo.gl/AsiatiqueMap", booking: "None" },
            { time: "09:30 PM", title: "Nana/Soi 11 Pubs", desc: "Bangkok's best bar street.", duration: "4 hrs", spend: "1000", map: "https://maps.app.goo.gl/Soi11Map", booking: "None" }
        ],
        budget: { "Transport": 250, "Food": 900, "Nightlife": 1000 }
    },
    4: {
        events: [
            { time: "08:30 AM", title: "Grand Palace", desc: "Cultural icon. Must see.", duration: "2.5 hrs", spend: "500", map: "https://maps.app.goo.gl/GrandPalaceMap", booking: "Essential" },
            { time: "11:30 AM", title: "Wat Pho", desc: "Reclining Buddha & Massage School.", duration: "1.5 hrs", spend: "300", map: "https://maps.app.goo.gl/WatPhoMap", booking: "On-site" },
            { time: "02:00 PM", title: "Wat Arun", desc: "Temple of Dawn. Cross-river ferry.", duration: "1.5 hrs", spend: "200", map: "https://maps.app.goo.gl/WatArunMap", booking: "None" },
            { time: "06:00 PM", title: "Chinatown Street Food", desc: "Yaowarat Road dinner feast.", duration: "3 hrs", spend: "600", map: "https://maps.app.goo.gl/YaowaratMap", booking: "None" },
            { time: "10:00 PM", title: "Tichuca Rooftop Bar", desc: "Avatar tree lighting. View of BKK.", duration: "2 hrs", spend: "800", map: "https://maps.app.goo.gl/TichucaMap", booking: "Recommended" }
        ],
        budget: { "Transport": 100, "Food": 600, "Entry": 1000, "Nightlife": 800 }
    },
    5: {
        events: [
            { time: "10:30 AM", title: "Siam Paragon / MBK", desc: "Shopping and food courts.", duration: "3 hrs", spend: "400", map: "https://maps.app.goo.gl/SiamParagonMap", booking: "None" },
            { time: "02:30 PM", title: "Jodd Fairs Market", desc: "Trendy night food market.", duration: "3 hrs", spend: "500", map: "https://maps.app.goo.gl/JoddFairsMap", booking: "None" },
            { time: "06:30 PM", title: "Last Massage: Cloud Nine", desc: "Wellness & Cannabis. Near Asok.", duration: "1.5 hrs", spend: "500", map: "https://maps.app.goo.gl/CloudNineMap", booking: "None" },
            { time: "08:30 PM", title: "Header to Airport", desc: "A1 Bus or MRT to DMK.", duration: "1 hr", spend: "100", map: "https://maps.app.goo.gl/DMKAirport", booking: "None" },
            { time: "10:30 PM", title: "Flight Back Home", desc: "Safe travels!", duration: "End", spend: "0", map: "", booking: "" }
        ],
        budget: { "Transport": 100, "Food": 900, "Leisure": 1000 }
    }
};

function switchPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    document.getElementById(pageId + '-page').classList.add('active');
    document.querySelector(`[onclick="switchPage('${pageId}')"]`).classList.add('active');
    window.scrollTo(0, 0);
}

function showDay(day) {
    document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.day-tab:nth-child(${day})`).classList.add('active');

    const list = document.getElementById('itinerary-list');
    list.innerHTML = '';
    
    itineraryData[day].events.forEach(ev => {
        const card = document.createElement('div');
        card.className = 'event-card animate';
        card.innerHTML = `
            <div class="event-time">${ev.time}</div>
            <div class="event-info">
                <h4>${ev.title}</h4>
                <p>${ev.desc}</p>
                <div style="margin-top: 10px;">
                    <span class="badge badge-blue">Spend: ${ev.duration}</span>
                    <span class="badge badge-price">Cost: ${ev.spend} THB</span>
                </div>
            </div>
            <div class="event-meta">
                ${ev.map ? `<a href="${ev.map}" target="_blank" class="map-btn"><i data-lucide="map-pin"></i> MAP</a>` : ''}
                <span style="font-size: 0.7rem; color: var(--text-secondary);">BOOKING: ${ev.booking}</span>
            </div>
        `;
        list.appendChild(card);
    });

    const breakdown = document.getElementById('budget-breakdown');
    breakdown.innerHTML = '';
    let total = 0;
    for (const [key, value] of Object.entries(itineraryData[day].budget)) {
        total += value;
        breakdown.innerHTML += `<div class="budget-item"><span>${key}</span><span>${value} THB</span></div>`;
    }
    document.getElementById('day-total').innerText = total + " THB";
    lucide.createIcons();
}

// Countdown Logic
function updateCountdown() {
    const tripDate = new Date("May 1, 2026 08:30:00").getTime();
    const now = new Date().getTime();
    const diff = tripDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${d}D ${h}H ${m}M ${s}S UNTIL TAKE OFF`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
showDay(1);
