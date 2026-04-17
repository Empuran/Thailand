const itineraryData = {
    1: {
        events: [
            { time: "08:30 AM", title: "Landing @ DMK", desc: "Arrival. Immigration & Baggage Claim.", dur: "1.5h", cost: "0", map: "https://maps.app.goo.gl/DMKAirport" },
            { time: "10:30 AM", title: "Direct Bus to Pattaya", desc: "Gate 2 Service Hall Building. Direct to PTY Terminal.", dur: "3h", cost: "200", map: "https://maps.app.goo.gl/PattayaBus" },
            { time: "02:30 PM", title: "Check-in: Beach Rd", desc: "Stay at Central Pattaya for easy transport access.", dur: "1h", cost: "0", map: "https://maps.app.goo.gl/BeachRd" },
            { time: "04:00 PM", title: "Sanctuary of Truth", desc: "Hand-carved massive wooden temple. Stunning design.", dur: "3h", cost: "500", map: "https://maps.app.goo.gl/SanctuaryOfTruthMap" },
            { time: "08:00 PM", title: "Dinner: The Sky Gallery", desc: "Sunset views over the Pattaya bay.", dur: "2h", cost: "600", map: "https://maps.app.goo.gl/SkyGalleryPattaya" },
            { time: "11:00 PM", title: "Walking Street", desc: "The nightlife heart. Open until late.", dur: "3h", cost: "800", map: "https://maps.app.goo.gl/WalkingStreetMap" }
        ],
        total: 2100
    },
    2: {
        events: [
            { time: "07:30 AM", title: "Bali Hai Pier", desc: "Start early! Head to the pier for Koh Larn.", dur: "30m", cost: "20", map: "https://maps.app.goo.gl/BaliHaiPier" },
            { time: "08:30 AM", title: "Koh Larn (Coral Island)", desc: "Swimming and beaches. Take the speedboat (15min).", dur: "5h", cost: "300", map: "https://maps.app.goo.gl/KohLarnMap" },
            { time: "02:30 PM", title: "Art in Paradise", desc: "Interactive 3D Illusion gallery. Best photos.", dur: "1.5h", cost: "500", map: "https://maps.app.goo.gl/ArtInParadisePTY" },
            { time: "04:30 PM", title: "Tiger Park Pattaya", desc: "Observe or interact with tigers. Well rated.", dur: "1.5h", cost: "300", map: "https://maps.app.goo.gl/TigerParkPTY" },
            { time: "06:30 PM", title: "Pattaya Floating Market", desc: "Traditional riverboat snacks and shopping.", dur: "2h", cost: "200", map: "https://maps.app.goo.gl/PTYFloatingMarket" },
            { time: "08:30 PM", title: "Alcazar Cabaret Show", desc: "Iconic high-energy performance.", dur: "1.5h", cost: "600", map: "https://maps.app.goo.gl/AlcazarShowPTY" },
            { time: "11:00 PM", title: "Walking Street Part 2", desc: "Live music bar hopping and street food.", dur: "3h", cost: "500", map: "https://maps.app.goo.gl/WalkingStreetMap" }
        ],
        total: 2420
    },
    3: {
        events: [
            { time: "07:30 AM", title: "Departure to Bangkok", desc: "North Pattaya Bus Terminal. Budget: 160 THB.", dur: "3h", cost: "160", map: "https://maps.app.goo.gl/NTerminal" },
            { time: "11:30 AM", title: "Sukhumvit Check-in", desc: "Stay near Asok (BTS/MRT Interchange).", dur: "1h", cost: "50", map: "https://maps.app.goo.gl/AsokMap" },
            { time: "02:30 PM", title: "ICONSIAM", desc: "Mega-mall. Indoor street market at SookSiam.", dur: "3h", cost: "300", map: "https://maps.app.goo.gl/IconsiamMap" },
            { time: "06:00 PM", title: "Asiatique Riverside", desc: "Free shuttle boat from Sathorn Pier.", dur: "2.5h", cost: "500", map: "https://maps.app.goo.gl/AsiatiqueMap" },
            { time: "09:30 PM", title: "Soi 11 Nightlife", desc: "The best bar scene in Bangkok.", dur: "4h", cost: "1200", map: "https://maps.app.goo.gl/Soi11Map" }
        ],
        total: 2210
    },
    4: {
        events: [
            { time: "08:30 AM", title: "Grand Palace", desc: "Most famous landmark. Wear long pants.", dur: "2.5h", cost: "500", map: "https://maps.app.goo.gl/GrandPalaceMap" },
            { time: "11:30 AM", title: "Wat Pho", desc: "Reclining Buddha. Famous massage school.", dur: "1.5h", cost: "300", map: "https://maps.app.goo.gl/WatPhoMap" },
            { time: "02:00 PM", title: "Wat Arun", desc: "Cross-river ferry (5 THB). Amazing photos.", dur: "1.5h", cost: "200", map: "https://maps.app.goo.gl/WatArunMap" },
            { time: "07:00 PM", title: "Yaowarat (Chinatown)", desc: "The world's biggest street food hub.", dur: "3h", cost: "600", map: "https://maps.app.goo.gl/YaowaratMap" },
            { time: "10:00 PM", title: "Rooftop: Tichuca", desc: "Avatar tree lounge. Stunning view.", dur: "3h", cost: "900", map: "https://maps.app.goo.gl/TichucaMap" }
        ],
        total: 2500
    },
    5: {
        events: [
            { time: "10:30 AM", title: "MBK / Siam Square", desc: "Budget shopping for gifts.", dur: "3h", cost: "300", map: "https://maps.app.goo.gl/SiamParagonMap" },
            { time: "02:30 PM", title: "Jodd Fairs Market", desc: "Trendy night food market (opens early).", dur: "3h", cost: "500", map: "https://maps.app.goo.gl/JoddFairsMap" },
            { time: "06:30 PM", title: "Final Massage: Cloud Nine", desc: "Cannabis & Wellness near Asok.", dur: "1.5h", cost: "600", map: "https://maps.app.goo.gl/CloudNineMap" },
            { time: "08:30 PM", title: "Header to DMK", desc: "A1 Bus from Mo Chit or Red Line.", dur: "1h", cost: "100", map: "https://maps.app.goo.gl/DMKAirport" },
            { time: "10:30 PM", title: "Flight Back Home", desc: "Ready for May 6th 1:30 AM Kochi reach.", dur: "End", cost: "0", map: "" }
        ],
        total: 1500
    }
};

function showDay(day) {
    document.querySelectorAll('.day-nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[onclick="showDay(${day})"]`).classList.add('active');

    const list = document.getElementById('itinerary-list');
    list.innerHTML = '';
    
    itineraryData[day].events.forEach(ev => {
        const item = document.createElement('div');
        item.className = 'event-item';
        item.innerHTML = `
            <div class="time-box">${ev.time}</div>
            <div class="info-box">
                <h4>${ev.title}</h4>
                <p>${ev.desc}</p>
                <div style="margin-top: 10px;">
                    <span class="duration-tag">Time: ${ev.dur}</span>
                </div>
            </div>
            <div class="meta">
                ${ev.map ? `<a href="${ev.map}" target="_blank" class="map-link">MAP</a>` : ''}
                <span style="font-size: 0.8rem; font-weight: 700;">Cost: ${ev.cost} THB</span>
            </div>
        `;
        list.appendChild(item);
    });

    document.getElementById('day-total').innerText = itineraryData[day].total + " THB";
    lucide.createIcons();
}

function updateCountdown() {
    const trip = new Date("May 1, 2026 08:30:00").getTime();
    const now = new Date().getTime();
    const d = Math.floor((trip - now) / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML = `${d} DAYS UNTIL DEPARTURE`;
}

// Init
updateCountdown();
showDay(1);
setInterval(updateCountdown, 86400000);
