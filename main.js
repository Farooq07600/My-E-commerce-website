// =========================================================================
// 1. DATA MODEL, PERSISTENT STORAGE & CORE INITIALIZER
// =========================================================================
const productsData = [
    {
        id: 1,
        title: "wireless bluetooth headphones noise cancelling",
        mainCategory: "Electronics",
        specificCategory: "Headphones",
        price: 99.99,
        rating: "⭐⭐⭐⭐★",
        img: "1.png",
        colors: [{ name: "Matte Black", img: "https://unsplash.com" }, { name: "Platinum Silver", img: "https://unsplash.com" }],
        sizes: ["Standard Fit"],
        images: ["https://unsplash.com", "https://unsplash.com"]
    },
    {
        id: 2,
        title: "Smart Watch with Heart Rate Monitor & Sleep Tracker Fitness Band",
        mainCategory: "Electronics",
        specificCategory: "Smart Watch",
        price: 49.99,
        rating: "⭐⭐⭐⭐⭐",
        img: "2.png",
        colors: [{ name: "Charcoal", img: "https://unsplash.com" }],
        sizes: ["40mm", "44mm"],
        images: ["https://unsplash.com"]
    },
    {
        id: 3,
        title: "Classic Denim Jacket for Men - Slim Fit Premium Outerwear Leather",
        mainCategory: "Fashion",
        specificCategory: "Jacket",
        price: 35.50,
        rating: "⭐⭐⭐⭐★",
        img: "3.png",
        colors: [{ name: "Vintage Blue", img: "https://unsplash.com" }],
        sizes: ["S", "M", "L", "XL"],
        images: ["https://unsplash.com"]
    },
    {
        id: 4,
        title: "Ergonomic Office Chair with Lumbar Support & Adjustable Armrests",
        mainCategory: "Furniture",
        specificCategory: "Office Chair",
        price: 129.99,
        rating: "⭐⭐⭐⭐⭐",
        img: "Gemini_Generated_Image_ps4bpdps4bpdps4b.png",
        colors: [
            { name: "Shadow Black", img: "Gemini_Generated_Image_emnhvjemnhvjemnh.png" },
            { name: "Slate Gray", img: "Gemini_Generated_Image_mx4zkrmx4zkrmx4z.png" }
        ],
        sizes: ["Standard"],
        images: [
            "Gemini_Generated_Image_3uf9b83uf9b83uf9.png",
            "1000156128.jpg",
            "1000156128.jpg",
            "Gemini_Generated_Image_m907crm907crm907.png",
            "Gemini_Generated_Image_wlrx8jwlrx8jwlrx (1).png",
            "Gemini_Generated_Image_2of0p72of0p72of0.png"
        ]
    },
    {
        id: 5,
        title: "Stainless Steel Electric Kettle 1.7L Fast Boiling Water Boiler",
        mainCategory: "Home Appliances",
        specificCategory: "Electric Kettle",
        price: 24.99,
        rating: "⭐⭐⭐⭐★",
        img: "https://unsplash.com",
        colors: [{ name: "Metallic Silver", img: "https://unsplash.com" }],
        sizes: ["1.7 Liters"],
        images: ["https://unsplash.com"]
    },
    {
        id: 6,
        title: "Ultra-Lightweight Running Shoes Breathable Athletic Gym Sneakers",
        mainCategory: "Footwear",
        specificCategory: "Shoes",
        price: 59.95,
        rating: "⭐⭐⭐⭐★",
        img: "https://unsplash.com",
        colors: [{ name: "Neon Green", img: "https://unsplash.com" }, { name: "Deep Blue", img: "https://unsplash.com" }],
        sizes: ["8", "9", "10", "11"],
        images: ["https://unsplash.com", "https://unsplash.com"]
    },
    {
        id: 7,
        title: "4K Ultra HD Dash Cam Premium Front and Rear Car Camera",
        mainCategory: "Electronics",
        specificCategory: "Dash Cam",
        price: 89.99,
        rating: "⭐⭐⭐⭐⭐",
        img: "https://unsplash.com",
        colors: [{ name: "Stealth Black", img: "https://unsplash.com" }],
        sizes: ["Universal Fit"],
        images: ["https://unsplash.com"]
    },
    {
        id: 8,
        title: "Minimalist Leather Wallet with RFID Blocking Slim Card Holder",
        mainCategory: "Accessories",
        specificCategory: "Wallet",
        price: 19.99,
        rating: "⭐⭐⭐⭐⭐",
        img: "https://unsplash.com",
        colors: [{ name: "Tan Brown", img: "https://unsplash.com" }, { name: "Obsidian Black", img: "https://unsplash.com" }],
        sizes: ["One Size"],
        images: ["https://unsplash.com"]
    },
    {
        id: 9,
        title: "Professional Makeup Brush Set 14-Piece Synthetic Fiber Kits",
        mainCategory: "Beauty",
        specificCategory: "Makeup Brush Set",
        price: 15.50,
        rating: "⭐⭐⭐⭐★",
        img: "https://unsplash.com",
        colors: [{ name: "Rose Gold", img: "https://unsplash.com" }],
        sizes: ["Full Set"],
        images: ["https://unsplash.com"]
    },
    {
        id: 10,
        title: "Non-Stick Ceramic Cookware Set 10-Piece Pots and Pans",
        mainCategory: "Kitchen",
        specificCategory: "Cookware Set",
        price: 149.99,
        rating: "⭐⭐⭐⭐⭐",
        img: "https://unsplash.com",
        colors: [{ name: "Crimson Red", img: "https://unsplash.com" }, { name: "Navy Blue", img: "https://unsplash.com" }],
        sizes: ["10-Piece"],
        images: ["https://unsplash.com"]
    },
    {
        id: 11,
        title: "High-Density Yoga Mat Premium Eco-Friendly Anti-Tear Exercise Mat",
        mainCategory: "Fitness",
        specificCategory: "Yoga Mat",
        price: 29.99,
        rating: "⭐⭐⭐⭐★",
        img: "https://unsplash.com",
        colors: [{ name: "Purple", img: "https://unsplash.com" }, { name: "Teal", img: "https://unsplash.com" }],
        sizes: ["6mm Thick"],
        images: ["https://unsplash.com"]
    },
    {
        id: 12,
        title: "Portable Waterproof Bluetooth Speaker Deep Bass Outdoor Soundbar",
        mainCategory: "Electronics",
        specificCategory: "Speaker",
        price: 39.99,
        rating: "⭐⭐⭐⭐⭐",
        img: "https://unsplash.com",
        colors: [{ name: "Army Green", img: "https://unsplash.com" }],
        sizes: ["Compact"],
        images: ["https://unsplash.com"]
    },
    {
        id: 13,
        title: "Unisex Cotton Hoodie Casual Oversized Autumn Sweatshirt Long-Sleeve",
        mainCategory: "Fashion",
        specificCategory: "Hoodie",
        price: 42.00,
        rating: "⭐⭐⭐⭐★",
        img: "https://unsplash.com",
        colors: [{ name: "Oatmeal", img: "https://unsplash.com" }, { name: "Charcoal", img: "https://unsplash.com" }],
        sizes: ["M", "L", "XL"],
        images: ["https://unsplash.com"]
    },
    {
        id: 14,
        title: "Automatic Espresso Machine Premium Coffee Maker with Milk Frother",
        mainCategory: "Kitchen",
        specificCategory: "Coffee Maker",
        price: 299.99,
        rating: "⭐⭐⭐⭐⭐",
        img: "https://unsplash.com",
        colors: [{ name: "Piano Black", img: "https://unsplash.com" }],
        sizes: ["Standard"],
        images: ["https://unsplash.com"]
    },
    {
        id: 15,
        title: "Adjustable Dumbbell Set 20kg Home Gym Strength Training Weight",
        mainCategory: "Fitness",
        specificCategory: "Dumbbell",
        price: 75.00,
        rating: "⭐⭐⭐⭐★",
        img: "https://unsplash.com",
        colors: [{ name: "Chrome Black", img: "https://unsplash.com" }],
        sizes: ["20kg Pair"],
        images: ["https://unsplash.com"]
    },
    {
        id: 16,
        title: "Smart LED Desk Lamp Eye-Caring Light Table Lamp Wireless Charger",
        mainCategory: "Home Decor",
        specificCategory: "Desk Lamp",
        price: 34.99,
        rating: "⭐⭐⭐⭐⭐",
        img: "https://unsplash.com",
        colors: [{ name: "Pure White", img: "https://unsplash.com" }],
        sizes: ["Adjustable"],
        images: ["https://unsplash.com"]
    },
    {
        id: 17,
        title: "Pro 2K Dual Night-Vision Dash Cam Car Security System Monitor",
        mainCategory: "Electronics",
        specificCategory: "Dash Cam",
        price: 65.00,
        rating: "⭐⭐⭐⭐⭐",
        img: "https://unsplash.com",
        colors: [{ name: "Stealth Black", img: "https://unsplash.com" }],
        sizes: ["Universal Fit"],
        images: ["https://unsplash.com"]
    },
    {
        id: 18,
        title: "Luxury AMOLED Display Smart Watch Waterproof Activity Tracker",
        mainCategory: "Electronics",
        specificCategory: "Smart Watch",
        price: 85.00,
        rating: "⭐⭐⭐⭐★",
        img: "https://unsplash.com",
        colors: [{ name: "Onyx Black", img: "https://unsplash.com" }],
        sizes: ["44mm"],
        images: ["https://unsplash.com"]
    },
    {
        id: 19,
        title: "Professional Makeup Sponge Blender Set - 6 Piece Beauty Blenders",
        mainCategory: "Beauty",
        specificCategory: "Makeup Brush Set",
        price: 12.99,
        rating: "⭐⭐⭐⭐⭐",
        img: "https://unsplash.com",
        colors: [{ name: "Pink", img: "https://unsplash.com" }],
        sizes: ["6-Piece"],
        images: ["https://unsplash.com"]
    },
    {
        id: 20,
        title: "Premium Makeup Brush Cleaner & Dryer - Electric Spin Cleaner",
        mainCategory: "Beauty",
        specificCategory: "Makeup Brush Set",
        price: 24.99,
        rating: "⭐⭐⭐⭐★",
        img: "https://unsplash.com",
        colors: [{ name: "White", img: "https://unsplash.com" }],
        sizes: ["Standard"],
        images: ["https://unsplash.com"]
    }
];

const USD_TO_PKR_RATE = 278.50;
let userCartState = [];
let localMediaStream = null;
let activeSelectedColor = "";
let activeSelectedSize = "";

// Initialize LocalStorage safely. Agar null ya khali array ho toh full initialization data inject karein.
const storedProducts = localStorage.getItem('custom_dashboard_products');
if (!storedProducts || JSON.parse(storedProducts).length === 0) {
    localStorage.setItem('custom_dashboard_products', JSON.stringify(productsData));
}

document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    const urlParams = new URLSearchParams(window.location.search);
    const productIdParam = urlParams.get('id');
    if (productIdParam && document.getElementById('detail-title')) {
        openProductModal(parseInt(productIdParam));
    } else {
        const stored = JSON.parse(localStorage.getItem('custom_dashboard_products')) || productsData;
        renderProducts(stored);
    }
    setupCoreApplicationListeners();
});

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(userCartState));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        userCartState = JSON.parse(saved);
        updateCartUI();
    }
}

// =========================================================================
// 2. PRODUCT CATALOG RENDERING ENGINE & MAIN CATEGORY FILTERS
// =========================================================================
function renderProducts(list) {
    const container = document.getElementById('product-container');
    if (!container) return;
    container.innerHTML = '';
    if (!list || list.length === 0) {
        container.innerHTML = `<p class="no-results-msg" style="font-size:18px; padding:40px; text-align:center; width:100%; color:#6b7280;">No matches found for your search.</p>`;
        return;
    }
    list.forEach(item => {
        const priceInPKR = (item.price * USD_TO_PKR_RATE).toLocaleString('en-US', { maximumFractionDigits: 0 });
        container.innerHTML += `<div class="product-card" style="cursor:pointer;" onclick="openProductModal(${item.id})"> <img class="product-card-img" src="${item.img}" alt="${item.title}"> <div class="product-info-block"> <div class="product-title">${item.title}</div> <div class="product-rating">${item.rating}</div> <div class="product-price">PKR ${priceInPKR}</div> </div> <button class="add-btn" data-id="${item.id}" onclick="event.stopPropagation(); addItemToCart(${item.id})">Add to Cart</button> </div>`;
    });
}

// FIX: Agar search input empty string ho toh block blank render nahi karega balki default inventory dikhaega
function filterProducts() {
    const bar = document.getElementById('search-bar');
    if (!bar) return;
    const query = bar.value.toLowerCase().trim();
    const currentProducts = JSON.parse(localStorage.getItem('custom_dashboard_products')) || productsData;
    if (query === "") {
        renderProducts(currentProducts);
        return;
    }
    const matched = currentProducts.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.mainCategory.toLowerCase().includes(query) ||
        (p.specificCategory && p.specificCategory.toLowerCase().includes(query))
    );
    renderProducts(matched);
}

// =========================================================================
// MAIN NAVIGATION - FILTERS WITH HERO SLIDER STATE PROTECTION
// =========================================================================
function filterByCategory(catName) {
    const catalog = document.getElementById('product-container');
    const detailView = document.getElementById('full-product-page-view');
    const dashboardView = document.getElementById('dashboard-page-view');
    const heroSlider = document.querySelector('.hero-slider');
    if (catalog) catalog.style.setProperty('display', 'grid', 'important');
    if (detailView) detailView.style.setProperty('display', 'none', 'important');
    if (dashboardView) dashboardView.style.setProperty('display', 'none', 'important');
    const imgElements = document.getElementsByClassName("img");
    for (let i = 0; i < imgElements.length; i++) {
        imgElements(i).style.display = "block";
    }
    const currentProducts = JSON.parse(localStorage.getItem('custom_dashboard_products')) || productsData;
    if (catName === 'all') {
        if (heroSlider) heroSlider.style.setProperty('display', 'block', 'important');
        renderProducts(currentProducts);
    } else {
        if (heroSlider) heroSlider.style.setProperty('display', 'none', 'important');
        const filtered = currentProducts.filter(p =>
            p.mainCategory.toLowerCase() === catName.toLowerCase()
        );
        renderProducts(filtered);
    }
}

// =========================================================================
// 3. PRODUCT DETAILS VIEWER LAYER & RELATED PRODUCTS SLIDER
// =========================================================================
function openProductModal(productId) {
    const imgElements = document.getElementsByClassName("img");
    for (let i = 0; i < imgElements.length; i++) {
        imgElements(i).style.display = "none";
    }
    const mainCatalogSection = document.getElementById('product-container');
    const fullPageDetailView = document.getElementById('full-product-page-view');
    const dashboardView = document.getElementById('dashboard-page-view');
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) heroSlider.style.setProperty('display', 'none', 'important');
    if (dashboardView) dashboardView.style.setProperty('display', 'none', 'important');
    if (mainCatalogSection) mainCatalogSection.style.setProperty('display', 'none', 'important');
    if (fullPageDetailView) fullPageDetailView.style.setProperty('display', 'block', 'important');
    renderProductDetailPage(productId);
    renderRelatedProductsSlider(productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderProductDetailPage(productId) {
    const currentProducts = JSON.parse(localStorage.getItem('custom_dashboard_products')) || productsData;
    const item = currentProducts.find(p => p.id === productId);
    if (!item) return;
    const titleEl = document.getElementById('detail-title');
    const ratingEl = document.getElementById('detail-rating');
    const imgMain = document.getElementById('detail-main-img');
    if (titleEl) titleEl.innerText = item.title;
    if (ratingEl) ratingEl.innerText = item.rating + " (977 global ratings)";
    if (imgMain) imgMain.src = item.img;
    activeSelectedColor = (item.colors && item.colors.length > 0) ? item.colors(0).name : "Standard";
    activeSelectedSize = (item.sizes && item.sizes.length > 0) ? item.sizes(0) : "Standard";
    const thumbContainer = document.querySelector('.thumb-strip-gallery');
    if (thumbContainer && item.images) {
        thumbContainer.innerHTML = '';
        item.images.forEach((imgUrl, index) => {
            const activeClass = (index === 0) ? 'active' : '';
            thumbContainer.innerHTML += `<div class="thumb-box ${activeClass}" onclick="switchMainDisplayImage('${imgUrl}', this)"> <img class="thumb-box-img" src="${imgUrl}" alt="Angle Preview ${index + 1}"> </div>`;
        });
    }
    const colorContainer = document.querySelector('.color-variants-grid');
    if (colorContainer && item.colors) {
        colorContainer.innerHTML = '';
        item.colors.forEach((colorObj, index) => {
            const activeClass = (index === 0) ? 'active' : '';
            colorContainer.innerHTML += `<div class="color-box-item ${activeClass}" title="${colorObj.name}" onclick="switchMainDisplayImage('${colorObj.img}', this); updateSelectedColorMemory('${colorObj.name}', this)"> <img class="color-box-img" src="${colorObj.img}" alt="${colorObj.name}"> </div>`;
        });
    }
    const sizeContainer = document.querySelector('.chips-flex-row');
    if (sizeContainer && item.sizes) {
        sizeContainer.innerHTML = '';
        item.sizes.forEach((sizeStr, index) => {
            const activeClass = (index === 0) ? 'active' : '';
            if (index === 0) {
                const label = document.getElementById('selected-size-label');
                if (label) label.innerText = sizeStr;
            }
            sizeContainer.innerHTML += `<span class="size-chip-node ${activeClass}" onclick="selectSize('${sizeStr}', this)">${sizeStr}</span>`;
        });
    }
    const pkrPrice = item.price * USD_TO_PKR_RATE;
    const typicalPrice = pkrPrice * 1.08;
    const formattedPrice = pkrPrice.toLocaleString('en-US', { maximumFractionDigits: 0 });
    const pkrPriceEl = document.getElementById('detail-price-pkr');
    const buyboxPriceEl = document.getElementById('buybox-price');
    const typicalPriceEl = document.getElementById('detail-typical-price');
    if (pkrPriceEl) pkrPriceEl.innerText = formattedPrice;
    if (buyboxPriceEl) buyboxPriceEl.innerText = formattedPrice;
    if (typicalPriceEl) typicalPriceEl.innerText = "PKR " + typicalPrice.toLocaleString('en-US', { maximumFractionDigits: 0 });
    const pageCartBtn = document.getElementById('page-add-to-cart-btn');
    if (pageCartBtn) {
        pageCartBtn.onclick = () => {
            const qtySelect = document.getElementById('buybox-qty-select');
            const count = qtySelect ? parseInt(qtySelect.value) : 1;
            addItemToCartWithSpecs(productId, activeSelectedColor, activeSelectedSize, count);
        };
    }
}

function renderRelatedProductsSlider(currentProductId) {
    const detailView = document.getElementById('full-product-page-view');
    if (!detailView) return;
    let recommendationsSection = document.querySelector('.recommendations-container-section');
    if (!recommendationsSection) return;
    const currentProducts = JSON.parse(localStorage.getItem('custom_dashboard_products')) || productsData;
    const currentProduct = currentProducts.find(p => p.id === currentProductId);
    if (!currentProduct) return;
    const exactMatches = currentProducts.filter(p =>
        p.specificCategory &&
        p.specificCategory.toLowerCase() === currentProduct.specificCategory.toLowerCase() &&
        p.id !== currentProductId
    );
    let relatedProducts = [];
    if (exactMatches.length > 0) {
        relatedProducts = exactMatches;
    } else {
        const sameMainCategory = currentProducts.filter(p =>
            p.mainCategory &&
            p.mainCategory.toLowerCase() === currentProduct.mainCategory.toLowerCase() &&
            p.id !== currentProductId
        );
        relatedProducts = sameMainCategory.length > 0 ? sameMainCategory : currentProducts.filter(p => p.id !== currentProductId);
    }
    if (relatedProducts.length > 10) {
        relatedProducts = relatedProducts.slice(0, 10);
    }
    recommendationsSection.innerHTML = `<h2>Products related to this item</h2> <div class="slider-wrapper-relative"> <button class="slider-nav-btn prev-btn" id="slide-left-trigger">‹</button> <div class="recommended-products-slider-track" id="recommended-products-slider-track"></div> <button class="slider-nav-btn next-btn" id="slide-right-trigger">›</button> </div>`;
    const sliderTrack = document.getElementById('recommended-products-slider-track');
    if (relatedProducts.length === 0) {
        sliderTrack.innerHTML = `<p style="padding:20px; text-align:center; color:#666;">No related products found.</p>`;
        return;
    }
    relatedProducts.forEach(item => {
        const calculatedPrice = (item.price * USD_TO_PKR_RATE).toLocaleString('en-US', { maximumFractionDigits: 0 });
        sliderTrack.innerHTML += `<div class="recommended-mini-card" onclick="openProductModal(${item.id})"> <div class="mini-card-img-frame"> <img src="${item.img}" alt="${item.title}"> </div> <div class="mini-card-title">${item.title}</div> <div class="mini-card-rating">${item.rating}</div> <div class="mini-card-price">PKR ${calculatedPrice}</div> <div style="font-size:10px; color:#999; margin-top:4px;">${item.specificCategory || ''}</div> </div>`;
    });
    const leftBtn = document.getElementById('slide-left-trigger');
    const rightBtn = document.getElementById('slide-right-trigger');
    if (leftBtn && rightBtn && sliderTrack) {
        const scrollAmount = 240;
        rightBtn.onclick = (e) => { e.stopPropagation(); sliderTrack.scrollLeft += scrollAmount; };
        leftBtn.onclick = (e) => { e.stopPropagation(); sliderTrack.scrollLeft -= scrollAmount; };
    }
}

function switchMainDisplayImage(imgUrl, elementNode) {
    const imgMain = document.getElementById('detail-main-img');
    if (imgMain) imgMain.src = imgUrl;
    if (elementNode && elementNode.classList.contains('thumb-box')) {
        document.querySelectorAll('.thumb-box').forEach(box => box.classList.remove('active'));
        elementNode.classList.add('active');
    }
}

function updateSelectedColorMemory(colorName, elementNode) {
    activeSelectedColor = colorName;
    document.querySelectorAll('.color-box-item').forEach(box => box.classList.remove('active'));
    if (elementNode) elementNode.classList.add('active');
}

// =========================================================================
// 4. PERSISTENT SHOPPING CART LEDGER
// =========================================================================
function selectSize(sizeName, elementNode) {
    activeSelectedSize = sizeName;
    const label = document.getElementById('selected-size-label');
    if (label) label.innerText = sizeName;
    document.querySelectorAll('.size-chip-node').forEach(chip => chip.classList.remove('active'));
    if (elementNode) elementNode.classList.add('active');
}

function addItemToCartWithSpecs(id, selectedColor, selectedSize, quantityCount = 1) {
    const currentProducts = JSON.parse(localStorage.getItem('custom_dashboard_products')) || productsData;
    const itemFound = currentProducts.find(p => p.id === id);
    if (!itemFound) return;
    const uniqueCartKey = `${id}_${selectedColor.replace(/\s+/g, '-')}_${selectedSize.replace(/\s+/g, '-')}`;
    const existingCartItem = userCartState.find(item => item.cartKey === uniqueCartKey);
    if (existingCartItem) {
        existingCartItem.quantity += quantityCount;
    } else {
        userCartState.push({
            cartKey: uniqueCartKey,
            id: itemFound.id,
            title: itemFound.title,
            price: itemFound.price,
            img: itemFound.img,
            color: selectedColor,
            size: selectedSize,
            quantity: quantityCount
        });
    }
    saveCart();
    updateCartUI();
    alert(`Successfully added ${quantityCount} item(s) to your cart!`);
}

function addItemToCart(id) {
    const currentProducts = JSON.parse(localStorage.getItem('custom_dashboard_products')) || productsData;
    const itemFound = currentProducts.find(p => p.id === id);
    if (!itemFound) return;
    const defaultColor = (itemFound.colors && itemFound.colors.length > 0) ? itemFound.colors(0).name : "Standard";
    const defaultSize = (itemFound.sizes && itemFound.sizes.length > 0) ? itemFound.sizes(0) : "Standard";
    addItemToCartWithSpecs(id, defaultColor, defaultSize, 1);
}

function changeQuantityByKey(cartKey, delta) {
    const targetItem = userCartState.find(item => item.cartKey === cartKey);
    if (!targetItem) return;
    targetItem.quantity += delta;
    if (targetItem.quantity <= 0) {
        userCartState = userCartState.filter(item => item.cartKey !== cartKey);
    }
    saveCart();
    updateCartUI();
}

// =========================================================================
// ADMINISTRATIVE STORAGE ENGINE ROUTING & STATE MANAGEMENT
// =========================================================================
function openDashboardView() {
    closeNavDrawer();
    const catalog = document.getElementById('product-container');
    const detailView = document.getElementById('full-product-page-view');
    const dashboardView = document.getElementById('dashboard-page-view');
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) heroSlider.style.setProperty('display', 'none', 'important');
    if (catalog) catalog.style.setProperty('display', 'none', 'important');
    if (detailView) detailView.style.setProperty('display', 'none', 'important');
    if (dashboardView) {
        dashboardView.style.setProperty('display', 'block', 'important');
        renderDashboardStorageManager();
    }
}

function closeDashboardAndGoHome() {
    const catalog = document.getElementById('product-container');
    const dashboardView = document.getElementById('dashboard-page-view');
    const heroSlider = document.querySelector('.hero-slider');
    if (dashboardView) dashboardView.style.setProperty('display', 'none', 'important');
    if (heroSlider) heroSlider.style.setProperty('display', 'block', 'important');
    if (catalog) catalog.style.setProperty('display', 'grid', 'important');
    const stored = JSON.parse(localStorage.getItem('custom_dashboard_products')) || productsData;
    renderProducts(stored);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDashboardStorageManager() {
    const currentProducts = JSON.parse(localStorage.getItem('custom_dashboard_products')) || productsData;
    const totalItems = currentProducts.length;
    const avgPrice = currentProducts.reduce((sum, p) => sum + p.price, 0) / (totalItems || 1);
    const dashTotal = document.getElementById('dash-total-items');
    const dashAvg = document.getElementById('dash-avg-price');
    if (dashTotal) dashTotal.innerText = totalItems;
    if (dashAvg) dashAvg.innerText = "PKR " + (avgPrice * USD_TO_PKR_RATE).toLocaleString('en-US', { maximumFractionDigits: 0 });
    const tableBody = document.getElementById('dashboard-items-table-body');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    currentProducts.forEach(product => {
        const productPricePKR = (product.price * USD_TO_PKR_RATE).toLocaleString('en-US', { maximumFractionDigits: 0 });
        tableBody.innerHTML += `<tr class="dashboard-row-item"> <td class="dashboard-td-cell">#${product.id}</td> <td class="dashboard-td-cell dashboard-title-td" title="${product.title}">${product.title}</td> <td class="dashboard-td-cell">${product.mainCategory}</td> <td class="dashboard-td-cell dashboard-price-td">PKR ${productPricePKR}</td> <td class="dashboard-td-cell center-text"> <button class="dashboard-delete-btn" onclick="deleteDashboardProduct(${product.id})">Delete</button> </td> </tr>`;
    });
}

function deleteDashboardProduct(productId) {
    let currentProducts = JSON.parse(localStorage.getItem('custom_dashboard_products')) || [];
    currentProducts = currentProducts.filter(p => p.id !== productId);
    localStorage.setItem('custom_dashboard_products', JSON.stringify(currentProducts));
    renderDashboardStorageManager();
}

function addNewDashboardProduct(event) {
    event.preventDefault();
    const title = document.getElementById('dash-add-title').value.trim();
    const category = document.getElementById('dash-add-category').value;
    const priceUSD = parseFloat(document.getElementById('dash-add-price').value);
    if (!title || isNaN(priceUSD)) return alert("Fields fill karein!");
    let currentProducts = JSON.parse(localStorage.getItem('custom_dashboard_products')) || [];
    const newId = currentProducts.length > 0 ? Math.max(...currentProducts.map(p => p.id)) + 1 : 1;
    const newProduct = {
        id: newId,
        title: title,
        mainCategory: category,
        specificCategory: category,
        price: priceUSD,
        rating: "⭐⭐⭐⭐⭐",
        img: "https://unsplash.com",
        colors: [{ name: "Standard", img: "https://unsplash.com" }],
        sizes: ["Standard Fit"],
        images: ["https://unsplash.com"]
    };
    currentProducts.push(newProduct);
    localStorage.setItem('custom_dashboard_products', JSON.stringify(currentProducts));
    const form = document.getElementById('dashboard-add-product-form');
    if (form) form.reset();
    renderDashboardStorageManager();
    alert("Product LocalStorage mein save ho gayi!");
}

function removeItemFromCartByKey(cartKey) {
    userCartState = userCartState.filter(item => item.cartKey !== cartKey);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const totalItemsCount = userCartState.reduce((sum, item) => sum + item.quantity, 0);
    const counter = document.getElementById('cart-counter');
    if (counter) counter.innerText = totalItemsCount;
    const wrapper = document.getElementById('cart-items-list');
    if (!wrapper) return;
    wrapper.innerHTML = '';
    let accumulatedCost = 0;
    if (userCartState.length === 0) {
        wrapper.innerHTML = 'Your Cart is empty.';
    } else {
        userCartState.forEach((item) => {
            const costInPKR = item.price * USD_TO_PKR_RATE * item.quantity;
            accumulatedCost += costInPKR;
            wrapper.innerHTML += `<div class="cart-item-row"> <div class="cart-item-info"> <span class="cart-item-title">${item.title}</span> <div class="cart-item-specs"> <span class="spec-color-label">Color: ${item.color || 'Default'}</span> | <span class="spec-size-label">Size: ${item.size || 'Default'}</span> </div> </div> <div class="cart-item-qty-controls"> <button class="qty-btn" data-key="${item.cartKey}" data-delta="-1">-</button> <span class="qty-display-number">${item.quantity}</span> <button class="qty-btn" data-key="${item.cartKey}" data-delta="1">+</button> </div> <strong class="cart-item-subtotal">PKR ${costInPKR.toLocaleString('en-US', { maximumFractionDigits: 0 })}</strong> <button class="remove-item-btn" data-key="${item.cartKey}">Remove</button> </div>`;
        });
    }
    const priceEl = document.getElementById('cart-total-price');
    if (priceEl) priceEl.innerText = "PKR " + accumulatedCost.toLocaleString('en-US', { maximumFractionDigits: 0 });
    setupCartUIEventListeners();
}

function setupCartUIEventListeners() {
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.onclick = function() {
            const key = this.dataset.key;
            const delta = Number(this.dataset.delta);
            changeQuantityByKey(key, delta);
        };
    });
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.onclick = function() {
            const key = this.dataset.key;
            removeItemFromCartByKey(key);
        };
    });
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
    }
}

// =========================================================================
// 5. HARDWARE INTEGRATION: SPEECH & SNAPSHOT SEARCH
// =========================================================================
function startVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Voice engine not supported on this browser.");
        return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    const micBtn = document.getElementById('mic-btn');
    const bar = document.getElementById('search-bar');
    if (micBtn) {
        micBtn.innerText = "🛑";
        micBtn.style.transform = "scale(1.2)";
    }
    if (bar) bar.placeholder = "Listening attentively...";
    recognition.start();
    recognition.onresult = (event) => {
        const transcript = event.results(0)(0).transcript;
        if (bar) {
            bar.value = transcript;
            filterProducts();
        }
    };
    recognition.onspeechend = () => {
        recognition.stop();
        resetMicUI();
    };
    recognition.onerror = () => {
        recognition.stop();
        resetMicUI();
    };
}

function resetMicUI() {
    const micBtn = document.getElementById('mic-btn');
    const bar = document.getElementById('search-bar');
    if (micBtn) {
        micBtn.innerText = "🎤";
        micBtn.style.transform = "none";
    }
    if (bar) bar.placeholder = "Search Amazon";
}

async function openCameraModal() {
    const camModal = document.getElementById('camera-modal');
    const video = document.getElementById('webcam-stream');
    if (!camModal || !video) return;
    camModal.style.display = 'flex';
    try {
        localMediaStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
            audio: false
        });
        video.srcObject = localMediaStream;
        video.setAttribute('playsinline', true);
        video.setAttribute('autoplay', true);
        await video.play();
    } catch (err) {
        alert("Webcam connection failed.");
        closeCameraModal();
    }
}

function closeCameraModal() {
    const camModal = document.getElementById('camera-modal');
    const video = document.getElementById('webcam-stream');
    if (camModal) camModal.style.display = 'none';
    if (video) {
        video.pause();
        video.srcObject = null;
    }
    if (localMediaStream) {
        localMediaStream.getTracks().forEach(track => track.stop());
        localMediaStream = null;
    }
}

function processSnapshotSearch() {
    const video = document.getElementById('webcam-stream');
    const canvas = document.getElementById('hidden-capture-canvas');
    const bar = document.getElementById('search-bar');
    if (!video || !canvas || !localMediaStream) return;
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const tags = ["Electronics", "Fashion", "Furniture"];
    const randomlyFound = tags(Math.floor(Math.random() * tags.length));
    if (bar) {
        bar.value = randomlyFound;
        filterProducts();
    }
    closeCameraModal();
}

// =========================================================================
// 6. GLOBAL APPLICATION LISTENERS & DRAWER EVENTS
// =========================================================================
function openNavDrawer() {
    const sideDrawer = document.getElementById("amazonSideDrawer");
    const layoutMask = document.getElementById("drawerMaskOverlay");
    if (sideDrawer && layoutMask) {
        sideDrawer.style.width = "300px";
        layoutMask.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closeNavDrawer() {
    const sideDrawer = document.getElementById("amazonSideDrawer");
    const layoutMask = document.getElementById("drawerMaskOverlay");
    if (sideDrawer && layoutMask) {
        sideDrawer.style.width = "0";
        layoutMask.style.display = "none";
        document.body.style.overflow = "";
    }
}

function setupCoreApplicationListeners() {
    const bar = document.getElementById('search-bar');
    if (bar) bar.oninput = filterProducts;
    const submitBtn = document.getElementById('search-submit-btn');
    if (submitBtn) submitBtn.onclick = filterProducts;
    const cartBtn = document.getElementById('cart-toggle-btn');
    if (cartBtn) cartBtn.onclick = toggleCartModal;
    const closeCartBtn = document.getElementById('close-cart-btn');
    if (closeCartBtn) closeCartBtn.onclick = toggleCartModal;
    const micBtn = document.getElementById('mic-btn');
    if (micBtn) micBtn.onclick = startVoiceSearch;
    const camBtn = document.getElementById('camera-btn');
    if (camBtn) camBtn.onclick = openCameraModal;
    const closeCamBtn = document.getElementById('close-camera-btn');
    if (closeCamBtn) closeCamBtn.onclick = closeCameraModal;
    const captureBtn = document.getElementById('capture-btn');
    if (captureBtn) captureBtn.onclick = processSnapshotSearch;
    const dashboardCloseBtn = document.querySelector('.dashboard-close-action-btn');
    if (dashboardCloseBtn) dashboardCloseBtn.onclick = closeDashboardAndGoHome;
    const crudForm = document.getElementById('dashboard-add-product-form');
    if (crudForm) crudForm.onsubmit = addNewDashboardProduct;
    const backBtn = document.getElementById('back-to-home-btn');
    if (backBtn) {
        backBtn.onclick = () => {
            const catalog = document.getElementById('product-container');
            const detailView = document.getElementById('full-product-page-view');
            if (catalog) catalog.style.setProperty('display', 'grid', 'important');
            if (detailView) detailView.style.setProperty('display', 'none', 'important');
            const imgElements = document.getElementsByClassName("img");
            for (let i = 0; i < imgElements.length; i++) {
                imgElements(i).style.display = "block";
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
    const drawerMask = document.getElementById('drawerMaskOverlay');
    if (drawerMask) {
        drawerMask.onclick = closeNavDrawer;
    }
}

// Runtime Side Panel Option Binder Engine
document.addEventListener("DOMContentLoaded", () => {
    const drawerScrollBody = document.querySelector('.drawer-scroll-body') || document.getElementById('amazonSideDrawer');
    if (drawerScrollBody && !document.getElementById('drawer-dashboard-action-trigger')) {
        const adminSection = document.createElement('div');
        adminSection.className = 'drawer-group-section';
        adminSection.innerHTML = `<h4>Admin Controls</h4> <a href="#" class="drawer-dashboard-link" id="drawer-dashboard-action-trigger"> <span class="drawer-dash-text">📊 Store Dashboard</span> <i class="fas fa-chevron-right"></i> </a>`;
        drawerScrollBody.insertBefore(adminSection, drawerScrollBody.firstChild);
        const divider = document.createElement('hr');
        divider.className = 'drawer-divider';
        drawerScrollBody.insertBefore(divider, adminSection.nextSibling);
        document.getElementById('drawer-dashboard-action-trigger').addEventListener('click', (e) => {
            e.preventDefault();
            openDashboardView();
        });
    }
});

// HERO CAROUSEL AUTOMATION LAYER (FIXED INTERACTION HOOKS)
const carouselSlides = document.querySelectorAll('.slide');
const carouselDots = document.querySelectorAll('.dot');
let carouselCurrent = 0;

function showSlide(index) {
    if (!carouselSlides.length) return;
    carouselSlides.forEach(s => s.classList.remove('active'));
    carouselDots.forEach(d => d.classList.remove('active'));
    if (index < 0) index = carouselSlides.length - 1;
    if (index >= carouselSlides.length) index = 0;
    carouselSlides(index).classList.add('active');
    if (carouselDots(index)) carouselDots(index).classList.add('active');
    carouselCurrent = index;
}

const nextBtnCarousel = document.querySelector('.next-btn');
if (nextBtnCarousel) {
    nextBtnCarousel.addEventListener('click', () => showSlide(carouselCurrent + 1));
}
const prevBtnCarousel = document.querySelector('.prev-btn');
if (prevBtnCarousel) {
    prevBtnCarousel.addEventListener('click', () => showSlide(carouselCurrent - 1));
}
carouselDots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));
setInterval(() => {
    const catalog = document.getElementById('product-container');
    const dashboardView = document.getElementById('dashboard-page-view');
    // Automation context checks to protect state crashes
    if (catalog && catalog.style.display !== 'none' && (!dashboardView || dashboardView.style.display !== 'block')) {
        showSlide(carouselCurrent + 1);
    }
}, 5000);