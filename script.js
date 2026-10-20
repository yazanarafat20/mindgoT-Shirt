/**
 * MIND GO LANDING PAGE - CONFIGURATION & INTERACTION
 */

// -----------------------------------------------------------------------------
// CRITICAL CONFIGURATION
// ضع رابط المنتج وصورة المنتج هنا عند توفرهما فقط
// -----------------------------------------------------------------------------
const AMAZON_PRODUCT_URL = ""; // مثال: "https://www.amazon.com/dp/B0XXXXXX"
const PRODUCT_IMAGE_URL = "";  // مثال: "https://domain.com/tshirt.png"

// -----------------------------------------------------------------------------
// INITIALIZATION ON DOM LOAD
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // 1. التحديث التلقائي لسنة حقوق النشر
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. معالجة روابط أزرار Amazon
    renderAmazonButtons();

    // 3. معالجة إطار الصورة (الحقيقية أو المؤقتة الهادئة)
    renderProductVisual();

    // 4. التحكم في القائمة المنزلقة للهواتف الذكية
    setupMobileMenu();
});

// -----------------------------------------------------------------------------
// RENDER AMAZON BUTTONS (SAFE RENDERING)
// -----------------------------------------------------------------------------
function renderAmazonButtons() {
    const hasUrl = Boolean(AMAZON_PRODUCT_URL && AMAZON_PRODUCT_URL.trim() !== "");

    const navContainer = document.getElementById("amazon-nav-container");
    const mobileContainer = document.getElementById("amazon-mobile-container");
    const heroContainer = document.getElementById("amazon-hero-container");

    if (hasUrl) {
        // زر النافبار للمكتب
        navContainer.innerHTML = `
            <a href="${AMAZON_PRODUCT_URL}" target="_blank" rel="noopener noreferrer" class="btn-nav">
                <span>الاطلاع على <bdi>Amazon</bdi></span>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="#E49F2B" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
        `;

        // زر النافبار للهاتف
        mobileContainer.innerHTML = `
            <a href="${AMAZON_PRODUCT_URL}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="width: 100%;">
                <span>الاطلاع على صفحة المنتج في <bdi>Amazon</bdi></span>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
        `;

        // زر الشراء الرئيسي في قسم الـ Hero
        heroContainer.innerHTML = `
            <a href="${AMAZON_PRODUCT_URL}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                <span>الاطلاع على المنتج والشراء عبر <bdi>Amazon</bdi></span>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </a>
        `;
    } else {
        // حالة عدم توفر الرابط (إظهار شارات غير نشطة دون أخطاء)
        navContainer.innerHTML = `<span class="badge-disabled">رابط Amazon يتوفر قريباً</span>`;
        mobileContainer.innerHTML = `<div class="badge-disabled" style="text-align: center; width: 100%;">سيتم تفعيل رابط الشراء فور إطلاق المنتج على Amazon</div>`;
        heroContainer.innerHTML = `<div class="badge-disabled-large">رابط الشراء يتوفر قريباً عند الإطلاق على <bdi>Amazon</bdi></div>`;
    }
}

// -----------------------------------------------------------------------------
// RENDER PRODUCT VISUAL (EDITORIAL FALLBACK)
// -----------------------------------------------------------------------------
function renderProductVisual() {
    const container = document.getElementById("product-image-container");
    const hasImage = Boolean(PRODUCT_IMAGE_URL && PRODUCT_IMAGE_URL.trim() !== "");

    if (hasImage) {
        const img = document.createElement("img");
        img.src = PRODUCT_IMAGE_URL;
        img.alt = "تيشيرت Mind Go";
        img.className = "product-img";
        
        // التعامل مع فشل تحميل الصورة
        img.onerror = () => {
            renderEditorialPlaceholder(container);
        };

        container.appendChild(img);
    } else {
        renderEditorialPlaceholder(container);
    }
}

function renderEditorialPlaceholder(container) {
    container.innerHTML = `
        <div class="editorial-placeholder">
            <span class="placeholder-brand"><bdi>MIND GO</bdi></span>
            <span class="placeholder-text">[ OFFICIAL APPAREL ]</span>
        </div>
    `;
}

// -----------------------------------------------------------------------------
// MOBILE MENU CONTROLLER
// -----------------------------------------------------------------------------
function setupMobileMenu() {
    const toggleBtn = document.getElementById("menu-toggle-btn");
    const drawer = document.getElementById("mobile-drawer");
    const menuIcon = document.getElementById("menu-icon");

    if (!toggleBtn || !drawer) return;

    toggleBtn.addEventListener("click", () => {
        const isOpen = !drawer.classList.contains("hidden");

        if (isOpen) {
            drawer.classList.add("hidden");
            toggleBtn.setAttribute("aria-expanded", "false");
            toggleBtn.setAttribute("aria-label", "فتح القائمة");
            menuIcon.innerHTML = `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
        } else {
            drawer.classList.remove("hidden");
            toggleBtn.setAttribute("aria-expanded", "true");
            toggleBtn.setAttribute("aria-label", "إغلاق القائمة");
            menuIcon.innerHTML = `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`;
        }
    });

    // إغلاق القائمة تلقائياً عند الضغط على أي رابط داخلها
    const mobileLinks = drawer.querySelectorAll("a");
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            drawer.classList.add("hidden");
            toggleBtn.setAttribute("aria-expanded", "false");
        });
    });
}
