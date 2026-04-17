const itinerary = {
    "day-1": {
        title: "Day 1: Pattaya Arrival",
        items: [
            {
                name: "Direct Bus to Pattaya",
                time: "10:30 AM",
                dur: "3 hrs",
                famous: "Cheapest Transit",
                desc: "Air-conditioned bus from DMK Airport or Ekkamai Terminal.",
                img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800",
                transport: { cheap: "Public Bus (150 THB)", best: "Private Taxi (1200 THB share)" },
                cost: "150",
                map: "Pattaya+Bus+Terminal"
            },
            {
                name: "Sanctuary of Truth",
                time: "03:00 PM",
                dur: "2.5 hrs",
                famous: "Wooden Masterpiece",
                desc: "Stunning hand-carved museum with Hindu and Buddhist motifs.",
                img: "https://images.unsplash.com/photo-1528181304800-2f140819898f?q=80&w=800",
                transport: { cheap: "Baht Bus (20 THB)", best: "Bolt/Grab (120 THB)" },
                cost: "500",
                map: "Sanctuary+of+Truth+Pattaya"
            },
            {
                name: "Walking Street Nightlife",
                time: "10:00 PM",
                dur: "Until 2 AM",
                famous: "Pattaya Icon",
                desc: "Explore the neon-lit heart of Pattaya's vibrant nightlife.",
                img: "https://images.unsplash.com/photo-1629115948551-aa947381d6d3?q=80&w=800",
                transport: { cheap: "Baht Bus (10 THB)", best: "Bolt/Grab (90 THB)" },
                cost: "500 (Drinks)",
                map: "Pattaya+Walking+Street"
            }
        ]
    },
    "day-2": {
        title: "Day 2: Islands & Temples",
        items: [
            {
                name: "Koh Larn (Coral Island)",
                time: "08:30 AM",
                dur: "5 hrs",
                famous: "Snorkeling & Sand",
                desc: "Speedboat trip for crystal clear water and island vibes.",
                img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
                transport: { cheap: "Ferry (30 THB)", best: "Speedboat (300 THB)" },
                cost: "300",
                map: "Koh+Larn+Pattaya"
            },
            {
                name: "Art in Paradise",
                time: "02:30 PM",
                dur: "1.5 hrs",
                famous: "3D Interactive Art",
                desc: "Unique museum where you become part of the optical illusions.",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
                transport: { cheap: "Baht Bus (10 THB)", best: "Bolt (80 THB)" },
                cost: "500",
                map: "Art+in+Paradise+Pattaya"
            },
            {
                name: "Big Buddha + Wang Sam Sien",
                time: "05:00 PM",
                dur: "2 hrs",
                famous: "Panoramic Views & Peace",
                desc: "Massive golden Buddha and the serene hidden Chinese temple.",
                img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800",
                transport: { cheap: "Baht Bus (20 THB)", best: "Bolt (110 THB)" },
                cost: "Free",
                map: "Wat+Phra+Yai+Big+Buddha+Pattaya"
            },
            {
                name: "Alcazar Cabaret Show",
                time: "09:00 PM",
                dur: "1.5 hrs",
                famous: "Grand Cabaret",
                desc: "High-energy dance and music with world-class costumes.",
                img: "https://images.unsplash.com/photo-1514525253361-b8748b43a59a?q=80&w=800",
                transport: { cheap: "Baht Bus (10 THB)", best: "Bolt (70 THB)" },
                cost: "600",
                map: "Alcazar+Cabaret+Show+Pattaya"
            }
        ]
    },
    "day-3": {
        title: "Day 3: Bangkok Central",
        items: [
            {
                name: "Chatuchak Market (Sunday)",
                time: "09:00 AM",
                dur: "3 hrs",
                famous: "Weekend Shopping",
                desc: "Confirmed open (Sunday May 3). Bangkok's biggest market.",
                img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800",
                transport: { cheap: "BTS/MRT (40 THB)", best: "Grab (200 THB)" },
                cost: "500 (Budget)",
                map: "Chatuchak+Weekend+Market"
            },
            {
                name: "The Grand Palace",
                time: "01:00 PM",
                dur: "2.5 hrs",
                famous: "Royal Beauty",
                desc: "The spiritual heart of the city and former home of Kings.",
                img: "https://images.unsplash.com/photo-1563492065561-36d319a8fc11?q=80&w=800",
                transport: { cheap: "MRT to Sanam Chai (40 THB)", best: "Grab (150 THB)" },
                cost: "500",
                map: "Grand+Palace+Bangkok"
            },
            {
                name: "Wat Arun (Sunset View)",
                time: "05:30 PM",
                dur: "1.5 hrs",
                famous: "Temple of Dawn",
                desc: "Iconic riverside temple. Best viewed from across the river at sunset.",
                img: "https://images.unsplash.com/photo-1582298538104-fe2e04f63873?q=80&w=800",
                transport: { cheap: "River Boat (5 THB)", best: "Grab (100 THB)" },
                cost: "100",
                map: "Wat+Arun+Bangkok"
            },
            {
                name: "Chinatown (Yaowarat)",
                time: "08:30 PM",
                dur: "3 hrs",
                famous: "Street Food Heaven",
                desc: "Neon signs and the world's best seafood street food.",
                img: "https://images.unsplash.com/photo-1555529323-288219463b2f?q=80&w=800",
                transport: { cheap: "MRT Wat Mangkon (30 THB)", best: "Grab (120 THB)" },
                cost: "400",
                map: "Yaowarat+Road+Chinatown"
            }
        ]
    },
    "day-4": {
        title: "Day 4: Parks & Night Markets",
        items: [
            {
                name: "Lumpini Park",
                time: "10:00 AM",
                dur: "2 hrs",
                famous: "Green Escape",
                desc: "Watch water monitor lizards and enjoy the peaceful lake.",
                img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
                transport: { cheap: "MRT Lumphini (25 THB)", best: "Grab (110 THB)" },
                cost: "Free",
                map: "Lumpini+Park+Bangkok"
            },
            {
                name: "Wat Pho (Reclining Buddha)",
                time: "01:00 PM",
                dur: "1.5 hrs",
                famous: "Massage Birthplace",
                desc: "Massive 46m golden Buddha and famous Thai massage center.",
                img: "https://images.unsplash.com/photo-1528642168434-c483a652a8a1?q=80&w=800",
                transport: { cheap: "MRT Sanam Chai (35 THB)", best: "Grab (140 THB)" },
                cost: "200",
                map: "Wat+Pho+Bangkok"
            },
            {
                name: "Khao San Road",
                time: "07:00 PM",
                dur: "3 hrs",
                famous: "Backpacker Hub",
                desc: "A chaotic mix of street bars, cheap eats, and loud music.",
                img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800",
                transport: { cheap: "Grab Share (80 THB)", best: "Grab (150 THB)" },
                cost: "300",
                map: "Khao+San+Road+Bangkok"
            },
            {
                name: "Asiatique The Riverfront",
                time: "10:30 PM",
                dur: "2 hrs",
                famous: "Riverside Market",
                desc: "Open-air mall with a Ferris wheel and beautiful river views.",
                img: "https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=800",
                transport: { cheap: "Free Shuttle Boat (0 THB)", best: "Grab (200 THB)" },
                cost: "400",
                map: "Asiatique+Riverfront+Bangkok"
            }
        ]
    },
    "day-5": {
        title: "Day 5: Culture & Departure",
        items: [
            {
                name: "Nong Nooch Tropical Garden",
                time: "09:00 AM",
                dur: "3.5 hrs",
                famous: "Botanical Treasure",
                desc: "One of the most beautiful gardens in SE Asia (moved to Day 5/Alternative).",
                img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800",
                transport: { cheap: "Grab Share (200 THB)", best: "Grab (400 THB)" },
                cost: "500",
                map: "Nong+Nooch+Tropical+Garden"
            },
            {
                name: "Health Land (Last Massage)",
                time: "03:00 PM",
                dur: "2 hrs",
                famous: "Relaxation Hub",
                desc: "Final premium Thai massage before your flight.",
                img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
                transport: { cheap: "MRT Asoke (20 THB)", best: "Grab (80 THB)" },
                cost: "600",
                map: "Health+Land+Asoke+Bangkok"
            },
            {
                name: "Airport Bound (DMK)",
                time: "08:00 PM",
                dur: "1 hr",
                famous: "Homeward",
                desc: "Take the A1 Bus or Grab to catch your flight.",
                img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=800",
                transport: { cheap: "A1 Bus (30 THB)", best: "Grab (350 THB)" },
                cost: "30",
                map: "DMK+Airport+Bangkok"
            }
        ]
    }
};

function startApp() {
    document.getElementById('vibe-section').style.display = 'none';
    document.getElementById('app-main').style.display = 'block';
    renderItinerary();
}

function renderItinerary() {
    const container = document.getElementById('itinerary-days');
    container.innerHTML = '';

    Object.keys(itinerary).forEach((key) => {
        const day = itinerary[key];
        const dayEl = document.createElement('div');
        dayEl.id = key;
        dayEl.className = 'day-section';
        
        let html = `<h2 style="margin-bottom: 25px; font-weight: 900;">${day.title}</h2>`;
        
        day.items.forEach(item => {
            html += `
                <div class="activity-card">
                    <div class="card-img" style="background-image: url('${item.img}')">
                        <span class="card-badge">${item.time}</span>
                    </div>
                    <div class="card-content">
                        <p class="card-famous">FAMOUS FOR: ${item.famous}</p>
                        <h4 class="card-title">${item.name}</h4>
                        <p class="card-desc">${item.desc}</p>
                        
                        <div class="detail-grid">
                            <div class="detail-item"><strong>DURATION</strong><p>${item.dur}</p></div>
                            <div class="detail-item"><strong>EST. COST</strong><p>${item.cost} THB</p></div>
                        </div>

                        <div class="transport-box">
                            <h5><i data-lucide="bus"></i> TRANSPORT GUIDE (PER PERSON)</h5>
                            <div class="transport-grid">
                                <div class="mode-item"><strong>CHEAPEST:</strong><br>${item.transport.cheap}</div>
                                <div class="mode-item"><strong>BEST/FASTEST:</strong><br>${item.transport.best}</div>
                            </div>
                        </div>

                        <a href="https://www.google.com/maps/search/?api=1&query=${item.map.replace(/ /g, '+')}" target="_blank" class="btn-map">
                            <i data-lucide="map-pin"></i> VIEW ON MAP
                        </a>
                    </div>
                </div>
            `;
        });
        
        dayEl.innerHTML = html;
        container.appendChild(dayEl);
    });

    lucide.createIcons();
}

function showSection(id, btn) {
    document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.rules-container, .day-section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateCountdown() {
    const trip = new Date("May 1, 2026 08:30:00").getTime();
    const now = new Date().getTime();
    const d = Math.floor((trip - now) / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML = `${d} DAYS UNTIL THAILAND`;
}

updateCountdown();
setInterval(updateCountdown, 86400000);
