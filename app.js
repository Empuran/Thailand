const itineraryData = {
    1: {
        events: [
            { time: "08:30 AM", title: "Landing at DMK", desc: "Arrival from Kochi. Proceed to Immigration and Luggage." },
            { time: "10:30 AM", title: "Direct Bus to Pattaya", desc: "Catch the direct bus from Airport Service Hall (Gate 2). Cost: 200 THB." },
            { time: "01:30 PM", title: "Pattaya Arrival", desc: "Check-in at hotel (Central Pattaya). Relax after travel." },
            { time: "04:00 PM", title: "Sanctuary of Truth", desc: "Explore the massive wooden temple. Stunning reviews. Reach via Baht Bus (10 THB)." },
            { time: "07:00 PM", title: "Walking Street", desc: "Vibrant nightlife. Explore pubs and street food atmosphere." },
            { time: "09:00 PM", title: "Nightlife: Hops Brew House", desc: "Famous for craft beer and great vibe. Part of the Nightlife budget." }
        ],
        budget: {
            "Transport (Bus+Baht)": 230,
            "Entry: Sanctuary": 500,
            "Food (Street)": 400,
            "Nightlife/Beer": 800,
            "Misc/Weed": 500
        }
    },
    2: {
        events: [
            { time: "09:00 AM", title: "Koh Larn (Coral Island)", desc: "Take the slow boat from Bali Hai Pier (30 THB). Swimming and beach time." },
            { time: "01:00 PM", title: "Seafood Lunch", desc: "Eat at local stalls on the island for fresh value-for-money seafood." },
            { time: "04:00 PM", title: "Return to Mainland", desc: "Ferry back to Pattaya. Foot massage (200 THB) near Beach Road." },
            { time: "06:30 PM", title: "Viewpoint & Big Buddha", desc: "Panoramic view of Pattaya. Free entry, reach via Baht Bus." },
            { time: "08:30 PM", title: "Dinner: Lung Sawai", desc: "Located at Jomtien. Authentic seafood. Very famous local spot." },
            { time: "10:30 PM", title: "Nightlife: Hot Tuna Bar", desc: "Live rock music on Walking Street." }
        ],
        budget: {
            "Transport (Ferry+Baht)": 80,
            "Massage": 200,
            "Food (Seafood)": 800,
            "Nightlife": 700,
            "Misc/Weed": 700
        }
    },
    3: {
        events: [
            { time: "09:00 AM", title: "Bus to Bangkok", desc: "Depart from North Pattaya Bus Terminal (Bus: 160 THB) to Ekkamai." },
            { time: "12:00 PM", title: "Bangkok Check-in", desc: "Stay near Sukhumvit (Asok). Use BTS from Ekkamai to Asok (30 THB)." },
            { time: "02:30 PM", title: "ICONSIAM", desc: "Take BTS + Gold Line. Explore the high-end mall and indoor market (SookSiam)." },
            { time: "06:00 PM", title: "Asiatique The Riverfront", desc: "Evening Riverside walk. Take the free shuttle boat from Sathorn Pier." },
            { time: "09:00 PM", title: "Soi 11 Nightlife", desc: "Explore various bars/pubs on Sukhumvit Soi 11 (Levels / Hillary)." }
        ],
        budget: {
            "Transport (Bus+BTS)": 250,
            "Food (SookSiam)": 500,
            "Nightlife/Drinks": 1000,
            "Misc/Weed": 700
        }
    },
    4: {
        events: [
            { time: "08:30 AM", title: "Grand Palace", desc: "Iconic must-visit. Entry: 500 THB. Dress code: No shorts/sleeveless." },
            { time: "11:00 AM", title: "Wat Pho", desc: "Reclining Buddha (300 THB). Reach via MRT to Sanam Chai." },
            { time: "01:30 PM", title: "Wat Arun", desc: "Cross-river ferry (5 THB). Entry: 200 THB. The best for photos." },
            { time: "04:00 PM", title: "Chinatown (Yaowarat)", desc: "Explore during the day before the food stalls open. Visit Wat Traimit." },
            { time: "07:00 PM", title: "Street Food Feast", desc: "Eat everything in Chinatown. Budget-friendly and world-famous." },
            { time: "10:00 PM", title: "Tichuca Rooftop Bar", desc: "Jungle-themed. Stunning views. Note: Expensive menu, but great atmosphere." }
        ],
        budget: {
            "Transport (MRT+Boat)": 150,
            "Entry: Palace+Temples": 1000,
            "Food (Yaowarat)": 600,
            "Nightlife/Drinks": 700
        }
    },
    5: {
        events: [
            { time: "10:30 AM", title: "Siam Shopping Spree", desc: "MBK, Siam Square, Siam Paragon. Perfect for gifts." },
            { time: "01:00 PM", title: "Value Lunch: Food Court", desc: "Eat at MBK or Terminal 21 food courts. 100 THB/meal." },
            { time: "03:30 PM", title: "Jodd Fairs Market", desc: "Modern night market. Open in afternoon. Reach via MRT to Rama 9." },
            { time: "06:30 PM", title: "Final Massage & Weed", desc: "Last relaxation before departure. Cloud Nine nearby Asok." },
            { time: "08:30 PM", title: "Head to DMK", desc: "Catch the A1 bus from Mo Chit (30 THB) or MRT/SRT Red Line." },
            { time: "10:30 PM", title: "Flight to Kochi", desc: "Safe travels back home!" }
        ],
        budget: {
            "Transport (MRT+Bus)": 120,
            "Shopping/Misc": 1000,
            "Food": 400,
            "Final Massage": 300,
            "Misc/Weed": 600
        }
    }
};

function showDay(day) {
    // Update active button
    document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.day-btn:nth-child(${day})`).classList.add('active');

    // Update Timeline Content
    const timeline = document.getElementById('itinerary-content');
    timeline.innerHTML = '';
    
    itineraryData[day].events.forEach(event => {
        const eventEl = document.createElement('div');
        eventEl.className = 'event';
        eventEl.innerHTML = `
            <span class="event-time">${event.time}</span>
            <div class="event-title">${event.title}</div>
            <div class="event-desc">${event.desc}</div>
        `;
        timeline.appendChild(eventEl);
    });

    // Update Budget Sidebar
    const budgetList = document.getElementById('budget-items');
    budgetList.innerHTML = '';
    let total = 0;
    
    for (const [item, price] of Object.entries(itineraryData[day].budget)) {
        total += price;
        const itemEl = document.createElement('div');
        itemEl.className = 'budget-item';
        itemEl.innerHTML = `<span>${item}</span><span>${price} THB</span>`;
        budgetList.appendChild(itemEl);
    }

    document.getElementById('total-amount').innerText = `${total} THB`;
}

// Initial render
document.addEventListener('DOMContentLoaded', () => showDay(1));
