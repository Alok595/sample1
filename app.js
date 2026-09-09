/**
 * PRISM DECOR - Interactive Application Script
 * Features: Lookbook filtering, Interactive Room Visualizer,
 * Dynamic Cost Estimator, Quick View Modals, and WhatsApp Integration.
 */

// --- 1. Product Catalog Data ---
const PRODUCTS = [
  {
    id: "pd-01",
    name: "Oatmeal Linen Pinch-Pleat Curtains",
    category: "curtains",
    badge: "Bestseller",
    price: "₹3,499",
    priceUnit: "per pair (custom drop)",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    excerpt: "100% natural textured drape with 85% light filtration, bespoke pleating & weighted brass hem.",
    specs: {
      Material: "Belgian Flax Cotton-Linen Blend",
      Sizes: "Custom height up to 12 feet",
      Hardware: "Heavy-duty brass eyelets or channel hooks",
      Care: "Dry clean or gentle hand cycle"
    }
  },
  {
    id: "pd-02",
    name: "Architectural Fluted Wood Wall Panels",
    category: "wall",
    badge: "Trending",
    price: "₹5,800",
    priceUnit: "per 8ft x 2ft panel",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    excerpt: "Pre-finished acoustic timber slats over high-density felt backing. Instant luxury accent wall.",
    specs: {
      Finish: "Natural Teak, Walnut, or Smoked Oak",
      Features: "Sound-dampening & thermal insulating",
      Installation: "Concealed interlocking clip system",
      Warranty: "5-Year termite & moisture resistance"
    }
  },
  {
    id: "pd-03",
    name: "Smoked Amber Glass Cluster Pendant",
    category: "lighting",
    badge: "Signature",
    price: "₹4,250",
    priceUnit: "complete fixture",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    excerpt: "Hand-blown amber tinted glass globes with brushed brass hardware for cozy dining spaces.",
    specs: {
      ColorTemp: "Warm White 2700K - 3000K",
      Sockets: "3 x E27 dimmable LED compatible",
      DropLength: "Adjustable up to 1.5 meters",
      Body: "Brushed electroplated brass"
    }
  },
  {
    id: "pd-04",
    name: "Midnight Emerald Velvet Thermal Drapes",
    category: "curtains",
    badge: "100% Blackout",
    price: "₹4,899",
    priceUnit: "per pair",
    image: "https://images.unsplash.com/photo-1574870111867-089730e5a72b?auto=format&fit=crop&w=800&q=80",
    excerpt: "Heavy 420 GSM rich plush velvet with triple-weave blackout thermal lining. Maximum privacy.",
    specs: {
      Material: "Premium Matte Royal Velvet",
      Blackout: "100% room darkening test certified",
      Insulation: "Cuts outside street noise by 35%",
      Finishes: "Tailored American Pleat or Wave fold"
    }
  },
  {
    id: "pd-05",
    name: "Arched Minimalist Vanity Mirror (Brass)",
    category: "wall",
    badge: "New Arrival",
    price: "₹3,900",
    priceUnit: "36 x 24 inches",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    excerpt: "Clean curved silhouette with aerospace aluminum frame in champagne gold finish.",
    specs: {
      Glass: "HD Copper-Free 5mm distortionless",
      Frame: "Brushed anti-corrosion brass alloy",
      Mounting: "Heavy-duty dual horizontal/vertical anchors",
      Weight: "5.8 kg solid build"
    }
  },
  {
    id: "pd-06",
    name: "Scandinavian Halo Ceiling Chandelier",
    category: "lighting",
    badge: "Luxury",
    price: "₹6,499",
    priceUnit: "including remote",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
    excerpt: "Minimal circular ring design with dual inward/outward 3-step color temperature dimming.",
    specs: {
      Lumens: "3600 lm high brightness LED",
      Control: "RF Remote & Wall switch dimmable",
      Diameter: "60cm + 40cm tiered rings",
      Lifespan: "50,000 burning hours"
    }
  },
  {
    id: "pd-07",
    name: "Textured Bouclé & Linen Cushion Set (4 pcs)",
    category: "furnishings",
    badge: "Handcrafted",
    price: "₹1,650",
    priceUnit: "set of 4 (18x18 in)",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    excerpt: "High-tactile cream bouclé textured covers with brass zippers. Plump micro-fiber filling included.",
    specs: {
      Fabric: "Heavyweight Bouclé & Cotton-Slub",
      Closure: "Concealed YKK zipper seam",
      Insert: "450g high resilience micro-fiber",
      Colors: "Ivory White, Sand Dune, Ochre Gold"
    }
  },
  {
    id: "pd-08",
    name: "Monochrome Textured Area Rug",
    category: "furnishings",
    badge: "Soft Touch",
    price: "₹4,999",
    priceUnit: "5 x 7 feet",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    excerpt: "High-low pile geometric weave that adds depth and acoustic softness to tiled living rooms.",
    specs: {
      Weave: "Power-loomed high-density polypropylene",
      Backing: "Non-slip jute canvas",
      StainResistance: "Spill-resistant easy spot clean",
      Thickness: "12mm plush underfoot feel"
    }
  }
];

// --- 2. Interactive Room Visualizer Styles Data ---
const VIBE_DATA = {
  japandi: {
    title: "Warm Japandi Style",
    headline: "What's In This Japandi Look",
    price: "Est. Room Bundle: ₹14,999/-",
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    desc: "Earthy tones, natural textured linen sheer drapes paired with oak slats and warm ambient halo lighting. Ideal for peaceful, clutter-free Kolkata homes.",
    swatches: [
      { color: "#E8D8C8", name: "Oatmeal Linen" },
      { color: "#C49C74", name: "Warm Teak" },
      { color: "#7D6B5D", name: "Smoked Taupe" },
      { color: "#FAF7F2", name: "Alabaster White" }
    ],
    items: [
      { icon: "fa-scroll", name: "Belgian Texture Linen Drapes", detail: "Custom sized, pinch pleat finish", price: "₹4,200" },
      { icon: "fa-border-all", name: "Fluted Natural Timber Wall Accent", detail: "Pre-finished acoustic panels (8ft x 4ft)", price: "₹6,800" },
      { icon: "fa-lightbulb", name: "Minimalist Warm Pendant Fixture", detail: "Soft warm 3000K dimmable LED ambiance", price: "₹2,499" },
      { icon: "fa-couch", name: "Geometric Woven Cushion Set (4 pcs)", detail: "Textured cotton-linen with hidden zippers", price: "₹1,500" }
    ]
  },
  emerald: {
    title: "Emerald Luxe Style",
    headline: "What's In This Emerald Luxe Look",
    price: "Est. Room Bundle: ₹19,800/-",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    desc: "Opulent emerald velvet drapes with brass inlay paneling and smoked amber chandelier lighting. Creates a regal, high-fashion hotel suite atmosphere.",
    swatches: [
      { color: "#1F382B", name: "Deep Emerald" },
      { color: "#D4AF37", name: "Champagne Gold" },
      { color: "#2B2B29", name: "Charcoal Slate" },
      { color: "#E5DEC9", name: "Ivory Silk" }
    ],
    items: [
      { icon: "fa-scroll", name: "Midnight Emerald Velvet Thermal Drapes", detail: "Triple-weave blackout with pinch pleats", price: "₹5,400" },
      { icon: "fa-border-all", name: "Charcoal Fluted Wall with Brass Trim", detail: "Matte fluted panels with gold pinstripes", price: "₹7,800" },
      { icon: "fa-lightbulb", name: "Smoked Amber 3-Globe Cluster Pendant", detail: "Vintage filament bulbs included", price: "₹4,200" },
      { icon: "fa-couch", name: "Gold Foil Velvet Accent Cushions (4 pcs)", detail: "Deep jewel tones with piped gold edges", price: "₹2,400" }
    ]
  },
  royal: {
    title: "Royal Midnight Style",
    headline: "What's In This Royal Midnight Look",
    price: "Est. Room Bundle: ₹22,500/-",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    desc: "Dramatic monochromatic black and champagne contrast. Heavy textured sheer overlays, fluted charcoal acoustic paneling, and indirect LED cove accents.",
    swatches: [
      { color: "#171716", name: "Onyx Midnight" },
      { color: "#C5A880", name: "Warm Bronze" },
      { color: "#54524F", name: "Graphite" },
      { color: "#F0EAE1", name: "Champagne Sheer" }
    ],
    items: [
      { icon: "fa-scroll", name: "Dual-Layer Sheer + Blackout Drapes", detail: "Motorized silent ripplefold track ready", price: "₹6,900" },
      { icon: "fa-border-all", name: "Deep Smoked Oak Feature Wall", detail: "8ft x 6ft seamless panel setup", price: "₹8,900" },
      { icon: "fa-lightbulb", name: "Architectural Halo Ring LED Chandelier", detail: "Remote dimmable warm-to-neutral", price: "₹4,800" },
      { icon: "fa-couch", name: "Textured Bouclé Monochrome Pillows", detail: "Heavy weave designer collection", price: "₹1,900" }
    ]
  },
  boho: {
    title: "Soft Bohemian Style",
    headline: "What's In This Soft Bohemian Look",
    price: "Est. Room Bundle: ₹13,400/-",
    img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
    desc: "Relaxed warmth featuring macramé textures, airy French voile curtains, organic rattan pendant lamps, and pastel earth tones that welcome natural breeze.",
    swatches: [
      { color: "#D79A84", name: "Terracotta" },
      { color: "#EBDAC9", name: "Sunbleached Linen" },
      { color: "#8E9775", name: "Sage Olive" },
      { color: "#F4EDE2", name: "Warm Cream" }
    ],
    items: [
      { icon: "fa-scroll", name: "Airy Voile Sheers with Cotton Borders", detail: "Soft natural drape with wood rings", price: "₹3,200" },
      { icon: "fa-border-all", name: "Arched Rattan & Cane Wall Sconce Set", detail: "Handcrafted natural fiber weave", price: "₹4,500" },
      { icon: "fa-lightbulb", name: "Handwoven Bamboo Bell Pendant", detail: "Filtered warm pattern light cast", price: "₹2,800" },
      { icon: "fa-couch", name: "Tufted Macramé Geometric Cushions (4 pcs)", detail: "Boho fringed edges with pure cotton", price: "₹2,900" }
    ]
  }
};

// --- 2b. Official Instagram Reels Data (@prismdecor5352) ---
const INSTAGRAM_REELS = [
  {
    id: "reel-01",
    title: "11ft Ceiling Champagne Velvet & Sheer Reveal",
    category: "curtains",
    views: "4.8K",
    likes: 418,
    comments: 34,
    location: "Santoshpur East Lake, Kolkata",
    date: "3 days ago",
    audio: "Prism Decor • Original Sound",
    caption: "Full living room drape transformation! Double-track 11ft custom drops in warm champagne velvet paired with airy French linen sheers ✨ #prismdecor #homedecor #kolkatainteriors #curtainstyling #santoshpur",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    clientReview: "Sourav M.: 'The drape fall is magnificent! Truly transformed our living room into a luxury suite.'",
    waMsg: "Hi Prism Decor, I loved your Instagram Reel: '11ft Ceiling Champagne Velvet & Sheer Reveal' and would like a custom quote for my living room."
  },
  {
    id: "reel-02",
    title: "Acoustic Charcoal & Oak Fluted Louver Paneling",
    category: "wall",
    views: "6.2K",
    likes: 582,
    comments: 48,
    location: "Jadavpur, South Kolkata",
    date: "1 week ago",
    audio: "Trending Interior Ambiance Beats",
    caption: "Watch this bedroom headboard go from a plain blank wall to a 5-star hotel suite in just 4 hours! Waterproof acoustic timber slats with hidden warm LED channels. #wallpanels #bedroommakeover #flutedpanels #kolkata",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    clientReview: "Pooja D.: 'So neat and clean! Zero mess during installation, and the wood acoustic finish is top grade.'",
    waMsg: "Hi Prism Decor, I saw your Instagram Reel about 'Acoustic Charcoal & Oak Fluted Louver Paneling' and want this accent wall for my bedroom."
  },
  {
    id: "reel-03",
    title: "Motorized Dual Zebra Blinds Smooth Glide Demo",
    category: "curtains",
    views: "3.4K",
    likes: 329,
    comments: 21,
    location: "Garia, Kolkata",
    date: "2 weeks ago",
    audio: "Smooth Tech Wave 🎵",
    caption: "Daylight filtering made effortless. Dual sheer + privacy zebra blinds with whisper-quiet motor and RF remote control. Perfect for modern study rooms & sunny balconies. #smartblinds #zebrablinds #windowtreatments",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    clientReview: "Rohan S.: 'Super smooth motor and remote works through the entire flat. Great privacy control.'",
    waMsg: "Hi Prism Decor, I am inquiring about the 'Motorized Dual Zebra Blinds' from your Instagram Reel. Please share price per sq. ft."
  },
  {
    id: "reel-04",
    title: "Inside Our Santoshpur Studio Showroom Tour",
    category: "studio",
    views: "8.1K",
    likes: 764,
    comments: 62,
    location: "3 No. Karbla Auto Stand, Santoshpur",
    date: "3 weeks ago",
    audio: "Acoustic Coffee Lounge",
    caption: "Welcome to our creative decor studio! Touch and feel over 2,000+ luxury curtain fabrics, velvet swatches, wallpapers & modern lighting. Stop by for coffee and home ideas! ☕💎 #santoshpur #decorstudio #kolkatashopping",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    clientReview: "Ananya B.: 'Best collection in South Kolkata! The fabric variety and warm guidance is unmatched.'",
    waMsg: "Hi Prism Decor, I watched your Santoshpur Studio Tour reel! Can I book an appointment to visit your Karbla Auto Stand studio?"
  },
  {
    id: "reel-05",
    title: "Warm Magnetic Track & Amber Glass Dining Lighting",
    category: "studio",
    views: "5.5K",
    likes: 493,
    comments: 39,
    location: "Santoshpur East Lake, Kolkata",
    date: "1 month ago",
    audio: "Warm Ambient Glow 🎵",
    caption: "Lighting changes everything! Here is our 3000K warm magnetic track lighting paired with smoked amber glass globes over the dining table. Fully dimmable ambiance for cozy family dinners. #lightingdesign #moodlighting #homedecor",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    clientReview: "Amit K.: 'The dining light cluster is the first thing guests compliment when they visit our home.'",
    waMsg: "Hi Prism Decor, I want to inquire about the 'Warm Magnetic Track & Dining Lighting' from your Instagram reel."
  },
  {
    id: "reel-06",
    title: "The Perfect Pleat: Behind The Stitching Craft",
    category: "curtains",
    views: "4.1K",
    likes: 388,
    comments: 27,
    location: "Prism Craft Workshop",
    date: "1 month ago",
    audio: "Craftsmanship & ASMR Detail",
    caption: "Why do Prism Decor curtains fall so straight with zero waves? Check out our precision tailor-pressed pleats and corner brass weights. Craftsmanship that lasts for years. #curtainmaking #bespokedecor #handcrafted",
    image: "https://images.unsplash.com/photo-1574870111867-089730e5a72b?auto=format&fit=crop&w=800&q=80",
    clientReview: "Debashis C.: 'Stitching quality is top notch. The pleat fall is identical to luxury 5-star hotel rooms.'",
    waMsg: "Hi Prism Decor, I watched your curtain stitching craft reel! What are the rates for tailored pinch-pleat drapes?"
  },
  {
    id: "reel-07",
    title: "Cozy Balcony Lounge Bohemian Transformation",
    category: "client",
    views: "6.9K",
    likes: 641,
    comments: 53,
    location: "Prince Anwar Shah Rd, Kolkata",
    date: "2 months ago",
    audio: "Golden Hour Acoustic Vibe",
    caption: "Turn your Kolkata balcony into your favorite retreat! Custom weather-resistant outdoor cushions, textured jute rugs, and airy outdoor sheer drapes. 🌿☕ #balconymakeover #bohointerior #cozyhome",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
    clientReview: "Tanvi S.: 'My morning tea spot is now paradise! Thank you Prism Decor for bringing warmth to our balcony.'",
    waMsg: "Hi Prism Decor, I am interested in a Balcony Makeover with outdoor cushions and sheers like your Instagram Reel."
  },
  {
    id: "reel-08",
    title: "Happy Client Home Handover Reaction",
    category: "client",
    views: "9.3K",
    likes: 912,
    comments: 88,
    location: "Santoshpur, Kolkata",
    date: "2 months ago",
    audio: "Inspiring Celebration 🎵",
    caption: "Nothing compares to the joy of handovers! Full 3BHK turnkey soft furnishings completed on time and within budget. Thank you South Kolkata for your overwhelming trust! ❤️ #happyclient #beforeandafter #interiordecorkolkata",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    clientReview: "Kavita & Rakesh: 'Completed before Durga Puja just as promised! Transparent budget and gorgeous finishing.'",
    waMsg: "Hi Prism Decor, I saw your client handover reel in Santoshpur! Can we schedule an on-site consultation for our flat?"
  }
];

// --- 3. DOM Elements Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  renderProducts("all");
  initProductFilters();
  initVisualizer();
  initEstimator();
  initReels();
  initModals();
});

// --- 4. Navigation & Header Handlers ---
function initNavbarScroll() {
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = mobileMenu.querySelectorAll("a");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    const icon = toggleBtn.querySelector("i");
    if (mobileMenu.classList.contains("open")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars-staggered";
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      toggleBtn.querySelector("i").className = "fa-solid fa-bars-staggered";
    });
  });
}

// --- 5. Lookbook Catalog & Filtering ---
function renderProducts(filter) {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  const filtered = filter === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    // WhatsApp quick inquiry message
    const waText = encodeURIComponent(`Hi Prism Decor, I am interested in "${item.name}" (${item.price} ${item.priceUnit}) listed on your catalog. Could you share more fabric/color options?`);
    const waUrl = `https://wa.me/919000000000?text=${waText}`;

    card.innerHTML = `
      <div class="product-thumb">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="product-badge">${item.badge}</span>
        <button class="product-quickview-btn" data-id="${item.id}" title="Quick View Specs">
          <i class="fa-solid fa-magnifying-glass-plus"></i>
        </button>
      </div>
      <div class="product-content">
        <span class="product-cat">${item.category.toUpperCase()}</span>
        <h3 class="product-title">${item.name}</h3>
        <p class="product-excerpt">${item.excerpt}</p>
        <div class="product-footer">
          <div class="product-price">
            ${item.price} <small>/ ${item.priceUnit}</small>
          </div>
          <a href="${waUrl}" target="_blank" class="product-inquire-btn">
            <i class="fa-brands fa-whatsapp"></i> Inquire
          </a>
        </div>
      </div>
    `;

    // Quick view trigger
    card.querySelector(".product-quickview-btn").addEventListener("click", () => {
      openProductModal(item);
    });

    grid.appendChild(card);
  });
}

function initProductFilters() {
  const tabs = document.querySelectorAll("#filterTabs .tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      renderProducts(filter);
    });
  });
}

function openProductModal(item) {
  const modal = document.getElementById("productModal");
  const modalBody = document.getElementById("modalBody");
  
  const waText = encodeURIComponent(`Hi Prism Decor, I'd like to get a quote and check fabric samples for "${item.name}". Please let me know how to proceed.`);
  const waUrl = `https://wa.me/919000000000?text=${waText}`;

  modalBody.innerHTML = `
    <div class="modal-product-layout">
      <img src="${item.image}" alt="${item.name}" class="modal-product-img">
      <div class="modal-product-info">
        <span class="section-tag">${item.badge} • ${item.category.toUpperCase()}</span>
        <h3>${item.name}</h3>
        <p class="specs-desc">${item.excerpt}</p>
        
        <div class="modal-product-meta">
          <div><span>Pricing:</span> <strong>${item.price} (${item.priceUnit})</strong></div>
          <div><span>Material / Build:</span> <strong>${item.specs.Material || item.specs.Glass || item.specs.Finish || item.specs.Fabric || "Premium Quality"}</strong></div>
          <div><span>Custom Fitting:</span> <strong>Free site measurements in Kolkata</strong></div>
          <div><span>Turnaround:</span> <strong>3 to 5 working days</strong></div>
        </div>

        <a href="${waUrl}" target="_blank" class="btn btn-primary btn-block">
          <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp for Samples
        </a>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// --- 6. Room Moodboard / Visualizer ---
function initVisualizer() {
  const vibeButtons = document.querySelectorAll("#vibeSelector .vibe-btn");
  const mainImg = document.getElementById("visualizerMainImg");
  const styleName = document.getElementById("visualizerStyleName");
  const priceEst = document.getElementById("visualizerPriceEst");
  const specsHeading = document.getElementById("specsHeading");
  const specsDesc = document.getElementById("specsDesc");
  const swatchList = document.getElementById("swatchList");
  const includedElements = document.getElementById("includedElements");
  const inquireBtn = document.getElementById("inquireMoodboardBtn");
  const copyBtn = document.getElementById("copyMoodboardSpecs");

  let currentVibe = "japandi";

  function updateVibe(vibeKey) {
    const data = VIBE_DATA[vibeKey];
    if (!data) return;
    currentVibe = vibeKey;

    // Fade effect on image
    mainImg.style.opacity = "0.3";
    setTimeout(() => {
      mainImg.src = data.img;
      mainImg.style.opacity = "1";
    }, 200);

    styleName.textContent = data.title;
    priceEst.textContent = data.price;
    specsHeading.textContent = data.headline;
    specsDesc.textContent = data.desc;

    // Swatches
    swatchList.innerHTML = data.swatches.map(s => 
      `<span class="swatch-circle" style="background: ${s.color};" title="${s.name}"></span>`
    ).join("");

    // Elements
    includedElements.innerHTML = data.items.map(item => `
      <div class="element-row">
        <div class="elem-icon"><i class="fa-solid ${item.icon}"></i></div>
        <div class="elem-details">
          <strong>${item.name}</strong>
          <span>${item.detail}</span>
        </div>
        <span class="elem-price">${item.price}</span>
      </div>
    `).join("");

    // Update WhatsApp link
    const waText = encodeURIComponent(`Hi Prism Decor, I love the "${data.title}" room setup (Estimated ${data.price}) on your website visualizer! Can we schedule a measurement visit at my house in Santoshpur/Kolkata?`);
    inquireBtn.onclick = () => {
      window.open(`https://wa.me/919000000000?text=${waText}`, "_blank");
    };
  }

  vibeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      vibeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateVibe(btn.getAttribute("data-vibe"));
    });
  });

  // Initial setup
  updateVibe("japandi");

  // Copy specs action
  copyBtn.addEventListener("click", () => {
    const data = VIBE_DATA[currentVibe];
    const textToCopy = `Prism Decor - ${data.title}\n${data.price}\n\nIncluded elements:\n` + 
      data.items.map(i => `- ${i.name}: ${i.detail} (${i.price})`).join("\n") +
      `\n\nPrism Decor Santoshpur • 3 No. Karbla Auto Stand`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      const original = copyBtn.innerHTML;
      copyBtn.innerHTML = `<i class="fa-solid fa-check text-gold"></i> Copied to Clipboard!`;
      setTimeout(() => {
        copyBtn.innerHTML = original;
      }, 2200);
    });
  });

  // Quick Inquire from Hero section
  const heroInquire = document.getElementById("quickInquireHero");
  if (heroInquire) {
    heroInquire.addEventListener("click", () => {
      window.open("https://wa.me/919000000000?text=Hi%20Prism%20Decor%2C%20I%20am%20in%20love%20with%20your%20featured%20living%20room%20curtain%20and%20wall%20styling!%20Please%20share%20details", "_blank");
    });
  }
}

// --- 7. Instant Decor Cost Estimator ---
function initEstimator() {
  const roomButtons = document.querySelectorAll("#roomOptions .calc-opt-btn");
  const tierButtons = document.querySelectorAll("#tierOptions .calc-opt-btn");
  const checkboxes = document.querySelectorAll(".addons-grid input[type='checkbox']");
  const totalDisplay = document.getElementById("calcTotalPrice");
  const sendEstimateBtn = document.getElementById("sendEstimateBtn");

  let roomMultiplier = 1;
  let roomName = "Living Room";
  let tierRate = 1.45;
  let tierName = "Signature";

  function calculate() {
    let baseAddonSum = 0;
    let selectedAddons = [];

    checkboxes.forEach(cb => {
      if (cb.checked) {
        const cost = parseFloat(cb.getAttribute("data-cost")) || 0;
        baseAddonSum += cost;
        selectedAddons.push(cb.parentElement.querySelector("span:last-child").textContent.trim());
      }
    });

    // Final price calculation
    const total = Math.round((baseAddonSum * roomMultiplier * tierRate) / 50) * 50;
    const formatted = "₹" + total.toLocaleString("en-IN");
    totalDisplay.textContent = formatted;

    // Update WhatsApp link
    const waText = encodeURIComponent(
      `Hello Prism Decor! I just used your online Room Decor Estimator:\n\n` +
      `🏠 Room: ${roomName}\n` +
      `✨ Quality Tier: ${tierName}\n` +
      `📦 Elements: ${selectedAddons.join(", ")}\n` +
      `💰 Estimated Total: ${formatted}\n\n` +
      `Could we arrange a visit or talk more about samples for this?`
    );

    sendEstimateBtn.onclick = () => {
      window.open(`https://wa.me/919000000000?text=${waText}`, "_blank");
    };
  }

  roomButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      roomButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      roomMultiplier = parseFloat(btn.getAttribute("data-multiplier")) || 1;
      roomName = btn.querySelector("span").textContent.trim();
      calculate();
    });
  });

  tierButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tierButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      tierRate = parseFloat(btn.getAttribute("data-rate")) || 1;
      tierName = btn.querySelector("strong").textContent.trim();
      calculate();
    });
  });

  checkboxes.forEach(cb => {
    cb.addEventListener("change", calculate);
  });

  // Calculate initially
  calculate();
}

// --- 7b. Instagram Reels Showcase Module ---
function initReels() {
  const reelsGrid = document.getElementById("reelsGrid");
  const filterBtns = document.querySelectorAll(".reel-filter-btn");
  const reelModal = document.getElementById("reelModal");
  const reelModalBody = document.getElementById("reelModalBody");

  if (!reelsGrid) return;

  // Track user likes in memory
  const likedReels = new Set();

  function renderReels(category = "all") {
    const filtered = category === "all" 
      ? INSTAGRAM_REELS 
      : INSTAGRAM_REELS.filter(r => r.category === category);

    reelsGrid.innerHTML = filtered.map(reel => {
      const isLiked = likedReels.has(reel.id);
      const currentLikes = isLiked ? reel.likes + 1 : reel.likes;

      return `
        <article class="reel-card" data-reel-id="${reel.id}" tabindex="0" role="button" aria-label="View reel: ${reel.title}">
          <img src="${reel.image}" alt="${reel.title}" class="reel-bg-image" loading="lazy">
          <div class="reel-overlay-gradient"></div>
          
          <!-- Floating Heart Burst on Double Tap -->
          <div class="reel-heart-pop" id="heartPop-${reel.id}">
            <i class="fa-solid fa-heart"></i>
          </div>

          <!-- Top Meta Bar -->
          <div class="reel-card-top">
            <span class="reel-badge-chip">
              <i class="fa-brands fa-instagram"></i> Reel
            </span>
            <span class="reel-views-chip">
              <i class="fa-solid fa-play"></i> ${reel.views}
              <div class="reel-equalizer" title="Playing">
                <span></span><span></span><span></span>
              </div>
            </span>
          </div>

          <!-- Center Animated Play Icon -->
          <div class="reel-center-play">
            <i class="fa-solid fa-play"></i>
          </div>

          <!-- Bottom Card Info -->
          <div class="reel-card-bottom">
            <div class="reel-card-location">
              <i class="fa-solid fa-location-dot"></i> ${reel.location}
            </div>
            <h4 class="reel-card-title">${reel.title}</h4>
            <p class="reel-card-caption-teaser">${reel.caption}</p>

            <div class="reel-card-footer">
              <button class="reel-like-btn ${isLiked ? 'liked' : ''}" data-like-id="${reel.id}" title="Like this reel">
                <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> 
                <span>${currentLikes}</span>
              </button>

              <a href="https://wa.me/919000000000?text=${encodeURIComponent(reel.waMsg)}" target="_blank" class="reel-card-action-btn" title="Inquire on WhatsApp" onclick="event.stopPropagation()">
                <i class="fa-brands fa-whatsapp"></i> Inquire
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    attachReelEvents();
  }

  function attachReelEvents() {
    const cards = reelsGrid.querySelectorAll(".reel-card");

    cards.forEach(card => {
      const reelId = card.getAttribute("data-reel-id");

      // Single click to open modal
      card.addEventListener("click", () => {
        openReelModal(reelId);
      });

      // Double click / tap to like with Instagram heart pop
      card.addEventListener("dblclick", (e) => {
        e.preventDefault();
        triggerHeartBurst(card, reelId);
      });

      // Like button click
      const likeBtn = card.querySelector(".reel-like-btn");
      if (likeBtn) {
        likeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleLike(reelId);
        });
      }
    });
  }

  function triggerHeartBurst(card, reelId) {
    const heartPop = card.querySelector(".reel-heart-pop");
    if (heartPop) {
      heartPop.classList.remove("pop");
      void heartPop.offsetWidth; // trigger reflow
      heartPop.classList.add("pop");
    }
    if (!likedReels.has(reelId)) {
      likedReels.add(reelId);
      const category = document.querySelector(".reel-filter-btn.active")?.getAttribute("data-category") || "all";
      renderReels(category);
    }
  }

  function toggleLike(reelId) {
    if (likedReels.has(reelId)) {
      likedReels.delete(reelId);
    } else {
      likedReels.add(reelId);
    }
    const category = document.querySelector(".reel-filter-btn.active")?.getAttribute("data-category") || "all";
    renderReels(category);
  }

  function openReelModal(reelId) {
    const reel = INSTAGRAM_REELS.find(r => r.id === reelId);
    if (!reel || !reelModal || !reelModalBody) return;

    const isLiked = likedReels.has(reel.id);
    const currentLikes = isLiked ? reel.likes + 1 : reel.likes;
    const waUrl = `https://wa.me/919000000000?text=${encodeURIComponent(reel.waMsg)}`;

    reelModalBody.innerHTML = `
      <!-- 9:16 Vertical Reel Screen Wrapper -->
      <div class="reel-screen-wrapper">
        <div class="reel-screen-media">
          <img src="${reel.image}" alt="${reel.title}" class="reel-modal-img">
          <div class="reel-screen-overlay-gradient"></div>

          <!-- Progress Bar -->
          <div class="reel-progress-bar">
            <div class="reel-progress-fill"></div>
          </div>

          <!-- Top Profile Overlay -->
          <div class="reel-top-bar">
            <div class="reel-user-tag">
              <div class="reel-user-avatar"><i class="fa-solid fa-gem"></i></div>
              <div>
                <strong>prismdecor5352</strong>
                <small>${reel.location}</small>
              </div>
            </div>
            <a href="https://www.instagram.com/prismdecor5352/" target="_blank" class="reel-follow-pill">Follow</a>
          </div>

          <!-- Bottom Story Details -->
          <div class="reel-bottom-details">
            <div class="reel-badge-pill"><i class="fa-solid fa-clapperboard"></i> Prism Reel • ${reel.views} Views</div>
            <h4 class="modal-reel-heading">${reel.title}</h4>
            <p class="modal-reel-text">${reel.caption}</p>
            
            <div class="reel-audio-track">
              <i class="fa-solid fa-music"></i>
              <div class="audio-marquee">
                <span>${reel.audio}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Vertical Action Strip (Instagram native buttons) -->
        <div class="reel-side-actions">
          <button class="reel-action-btn" id="modalLikeAction" title="Like this reel">
            <div class="action-icon-circle ${isLiked ? 'liked' : ''}" style="${isLiked ? 'color: #ff2d55;' : ''}">
              <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </div>
            <span id="modalLikesText">${currentLikes}</span>
          </button>

          <button class="reel-action-btn" title="${reel.comments} Comments">
            <div class="action-icon-circle"><i class="fa-solid fa-comment"></i></div>
            <span>${reel.comments}</span>
          </button>

          <a href="${waUrl}" target="_blank" class="reel-action-btn" title="Inquire on WhatsApp">
            <div class="action-icon-circle action-wa"><i class="fa-brands fa-whatsapp"></i></div>
            <span>Quote</span>
          </a>

          <a href="https://www.instagram.com/prismdecor5352/" target="_blank" class="reel-action-btn" title="Open on Instagram">
            <div class="action-icon-circle action-ig"><i class="fa-brands fa-instagram"></i></div>
            <span>Open IG</span>
          </a>
        </div>
      </div>

      <!-- Reel Sidebar / Project Breakdown & Inquiry Panel -->
      <div class="reel-sidebar-panel">
        <div>
          <div class="reel-sidebar-header">
            <h4><i class="fa-solid fa-sparkles text-gold"></i> Project Spotlight</h4>
            <span class="verified-tag"><i class="fa-solid fa-check"></i> Verified Santoshpur Project</span>
          </div>

          <div class="reel-sidebar-review">
            <strong>Client Feedback on This Installation:</strong>
            <p>${reel.clientReview}</p>
          </div>

          <div class="reel-sidebar-inquiry-box">
            <h4>Want This Exact Decor Style?</h4>
            <p>Our team brings genuine fabric swatches, measurement tools, and louver catalogs directly to your home in Santoshpur, Jadavpur, Garia, or South Kolkata.</p>
            <a href="${waUrl}" target="_blank" class="btn btn-primary btn-block">
              <i class="fa-brands fa-whatsapp"></i> Inquire This Reel on WhatsApp
            </a>
          </div>
        </div>

        <div class="reel-sidebar-comments">
          <h5>Recent Instagram Inquiries & Comments:</h5>
          <div class="reel-comments-list">
            <div class="comment-item">
              <span class="comment-user">@priyanka_sen_kolkata</span>
              <span class="comment-text">How much time does fitting take for a 3BHK living room?</span>
            </div>
            <div class="comment-item">
              <span class="comment-user">@prismdecor5352</span>
              <span class="comment-text">Hi Priyanka! Tailoring takes 3-4 days and our installation team fits everything in under 3 hours. WhatsApp us for free site visit! 💎</span>
            </div>
            <div class="comment-item">
              <span class="comment-user">@subhash_interior_fan</span>
              <span class="comment-text">Loved the corner weights on these curtains! Zero crease fall. 👏</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind like button inside modal
    const modalLikeBtn = document.getElementById("modalLikeAction");
    if (modalLikeBtn) {
      modalLikeBtn.addEventListener("click", () => {
        toggleLike(reel.id);
        openReelModal(reel.id);
      });
    }

    reelModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Filter button clicks
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-category") || "all";
      renderReels(cat);
    });
  });

  // Initial render
  renderReels("all");
}

// --- 8. Modals (Product, Reels & Pitch Proposal) ---
function initModals() {
  const productModal = document.getElementById("productModal");
  const modalClose = document.getElementById("modalClose");
  const modalBackdrop = document.getElementById("modalBackdrop");

  const pitchModal = document.getElementById("pitchModal");
  const openPitchBtn = document.getElementById("openPitchModal");
  const pitchClose = document.getElementById("pitchModalClose");
  const pitchBackdrop = document.getElementById("pitchModalBackdrop");
  const footerPitchLink = document.getElementById("footerPitchLink");

  const reelModal = document.getElementById("reelModal");
  const reelModalClose = document.getElementById("reelModalClose");
  const reelModalBackdrop = document.getElementById("reelModalBackdrop");

  function closeAll() {
    productModal.classList.remove("active");
    pitchModal.classList.remove("active");
    if (reelModal) reelModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  modalClose.addEventListener("click", closeAll);
  modalBackdrop.addEventListener("click", closeAll);

  if (openPitchBtn) {
    openPitchBtn.addEventListener("click", () => {
      pitchModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (footerPitchLink) {
    footerPitchLink.addEventListener("click", (e) => {
      e.preventDefault();
      pitchModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  pitchClose.addEventListener("click", closeAll);
  pitchBackdrop.addEventListener("click", closeAll);

  if (reelModalClose) reelModalClose.addEventListener("click", closeAll);
  if (reelModalBackdrop) reelModalBackdrop.addEventListener("click", closeAll);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAll();
    }
  });
}
