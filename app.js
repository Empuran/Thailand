const itineraryData = {
    1: {
        events: [
            { time: "08:30 AM", title: "Landing @ DMK", desc: "Arrival. Immigration & Baggage Claim.", dur: "1.5h", cost: "0", map: "https://maps.app.goo.gl/DMKAirport" },
            { time: "10:30 AM", title: "Direct Bus to Pattaya", desc: "Gate 2 Service Hall Building. PTY Terminal.", dur: "3h", cost: "200", map: "https://maps.app.goo.gl/PattayaBus" },
            { time: "02:30 PM", title: "Check-in: Beach Rd", desc: "Central Pattaya location.", dur: "1h", cost: "0", map: "https://maps.app.goo.gl/BeachRd" },
            { time: "04:00 PM", title: "Sanctuary of Truth", desc: "Hand-carved wooden masterpiece.", dur: "3h", cost: "500", map: "https://maps.app.goo.gl/SanctuaryOfTruthMap" },
            { time: "08:00 PM", title: "Dinner @ The Sky Gallery", desc: "Ocean view sunset dining.", dur: "2h", cost: "600", map: "https://maps.app.goo.gl/SkyGalleryPattaya" },
            { time: "11:00 PM", title: "Walking Street", desc: "Pattaya nightlife heart.", dur: "3h", cost: "800", map: "https://maps.app.goo.gl/WalkingStreetMap" }
        ],
        total: 2100
    },
    2: {
        events: [
            { time: "07:30 AM", title: "Start: Bali Hai Pier", desc: "Catch the boat to Koh Larn island.", dur: "30m", cost: "20", map: "https://maps.app.goo.gl/BaliHaiPier" },
            { time: "08:30 AM", title: "Koh Larn (Coral Island)", desc: "Beaches and turquoise waters.", dur: "5h", cost: "300", map: "https://maps.app.goo.gl/KohLarnMap" },
            { time: "02:30 PM", title: "Art in Paradise", desc: "3D Interactive Art Gallery.", dur: "1.5h", cost: "500", map: "https://maps.app.goo.gl/ArtInParadisePTY" },
            { time: "04:30 PM", title: "Tiger Park Pattaya", desc: "Tiger observation and photos.", dur: "1.5h", cost: "300", map: "https://maps.app.goo.gl/TigerParkPTY" },
            { time: "06:30 PM", title: "Pattaya Floating Market", desc: "Riverboat ride and snacks.", dur: "2h", cost: "200", map: "https://maps.app.goo.gl/PTYFloatingMarket" },
            { time: "08:30 PM", title: "Alcazar Cabaret Show", desc: "Famous Thai performance.", dur: "1.5h", cost: "600", map: "https://maps.app.goo.gl/AlcazarShowPTY" },
            { time: "11:00 PM", title: "Walking St. Vibes", desc: "Neon lights and nightlife.", dur: "3h", cost: "500", map: "https://maps.app.goo.gl/WalkingStreetMap" }
        ],
        total: 2420
    },
    3: {
        events: [
            { time: "07:30 AM", title: "To Bangkok", desc: "North Pattaya Bus Terminal.", dur: "3h", cost: "160", map: "https://maps.app.goo.gl/NTerminal" },
            { time: "11:30 AM", title: "Check-in: Asok Area", desc: "Stay near the BTS/MRT hub.", dur: "1h", cost: "50", map: "https://maps.app.goo.gl/AsokMap" },
            { time: "02:30 PM", title: "ICONSIAM", desc: "Mega-mall riverside street market.", dur: "3h", cost: "300", map: "https://maps.app.goo.gl/IconsiamMap" },
            { time: "06:00 PM", title: "Asiatique Riverside", desc: "Ferris wheel and riverside dinner.", dur: "2.5h", cost: "500", map: "https://maps.app.goo.gl/AsiatiqueMap" },
            { time: "09:30 PM", title: "Sukhumvit Soi 11 Bars", desc: "Bangkok's trendiest bar street.", dur: "4h", cost: "1200", map: "https://maps.app.goo.gl/Soi11Map" }
        ],
        total: 2210
    },
    4: {
        events: [
            { time: "08:30 AM", title: "The Grand Palace", desc: "The king of Thai temples.", dur: "2.5h", cost: "500", map: "https://maps.app.goo.gl/GrandPalaceMap" },
            { time: "11:30 AM", title: "Wat Pho Buddha", desc: "Massive reclining gold Buddha.", dur: "1.5h", cost: "300", map: "https://maps.app.goo.gl/WatPhoMap" },
            { time: "02:00 PM", title: "Wat Arun", desc: "Temple of Dawn on the river.", dur: "1.5h", cost: "200", map: "https://maps.app.goo.gl/WatArunMap" },
            { time: "07:00 PM", title: "Chinatown Feast", desc: "Yaowarat Road street food heaven.", dur: "3h", cost: "600", map: "https://maps.app.goo.gl/YaowaratMap" },
            { time: "10:00 PM", title: "Tichuca Rooftop Lounge", desc: "Iconic light tree views.", dur: "3h", cost: "900", map: "https://maps.app.goo.gl/TichucaMap" }
        ],
        total: 2500
    },
    5: {
        events: [
            { time: "10:30 AM", title: "Siam Shopping", desc: "MBK and Siam Square gifts.", dur: "3h", cost: "300", map: "https://maps.app.goo.gl/SiamParagonMap" },
            { time: "02:30 PM", title: "Jodd Fairs Market", desc: "Open-air trendy food market.", dur: "3h", cost: "500", map: "https://maps.app.goo.gl/JoddFairsMap" },
            { time: "06:30 PM", title: "Last Thai Massage", desc: "Relaxing at Cloud Nine near Asok.", dur: "1.5h", cost: "600", map: "https://maps.app.goo.gl/CloudNineMap" },
            { time: "08:30 PM", title: "Airport Bound", desc: "A1 Bus or Red Line to DMK.", dur: "1h", cost: "100", map: "https://maps.app.goo.gl/DMKAirport" },
            { time: "10:30 PM", title: "Flight Check-in", desc: "Homeward bound!", dur: "End", cost: "0", map: "" }
        ],
        total: 1500
    }
};

function showDay(day) {
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[onclick="showDay(${day})"]`).classList.add('active');

    const list = document.getElementById('itinerary-list');
    list.innerHTML = '';
    
    itineraryData[day].events.forEach(ev => {
        const item = document.createElement('div');
        item.className = 'event-item';
        item.innerHTML = `
            <div class="event-time">${ev.time}</div>
            <div class="event-info">
                <h4>${ev.title}</h4>
                <p>${ev.desc}</p>
                <div style="margin-top: 10px;">
                    <span style="background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 8px; font-size: 0.7rem; font-weight: 800;">TIME: ${ev.dur}</span>
                </div>
            </div>
            <div class="event-meta">
                ${ev.map ? `<a href="${ev.map}" target="_blank" class="map-link">VIEW MAP</a>` : ''}
                <span style="font-size: 0.8rem; font-weight: 800; color: #10b981;">${ev.cost} THB</span>
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
    document.getElementById("countdown").innerHTML = `${d} DAYS UNTIL THAILAND`;
}

// Ensure the page starts at the top and hides other sections originally intended for tabs
window.onload = () => {
    updateCountdown();
    showDay(1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
setInterval(updateCountdown, 86400000);
