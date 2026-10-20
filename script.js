// ============================================================================
// CRITICAL CONFIGURATION
// Enter the official Amazon link and product image URL when available.
// ============================================================================
const AMAZON_PRODUCT_URL = ""; // e.g. "https://www.amazon.com/dp/B0XXXXXX"
const PRODUCT_IMAGE_URL = "";  // e.g. "https://domain.com/tshirt.png"

document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear();

    const hasAmazonLink = Boolean(AMAZON_PRODUCT_URL && AMAZON_PRODUCT_URL.trim() !== "");

    // 1. Render Desktop Navbar CTA
    const desktopCtaContainer = document.getElementById("desktop-cta-container");
    if (hasAmazonLink) {
        desktopCtaContainer.innerHTML = `
            <a href="${AMAZON_PRODUCT_URL}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-2 bg-[#063061] text-[#F5F0E6] px-5 py-2.5 text-sm font-bold hover:bg-[#063061]/90 transition-all focus:outline-none focus:ring-2 focus:ring-[#E49F2B]">
                <span>Buy on Amazon</span>
                <svg class="w-4 h-4 text-[#E49F2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round5" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
        `;
    } else {
        desktopCtaContainer.innerHTML = `
            <span class="text-xs font-mono bg-[#063061]/5 border border-[#063061]/15 px-3 py-2 text-[#063061]/60">
                Amazon Link Coming Soon
            </span>
        `;
    }

    // 2. Render Mobile Menu CTA
    const mobileCtaContainer = document.getElementById("mobile-cta-container");
    if (hasAmazonLink) {
        mobileCtaContainer.innerHTML = `
            <a href="${AMAZON_PRODUCT_URL}" target="_blank" rel="noopener noreferrer" 
               class="flex items-center justify-center gap-2 bg-[#063061] text-[#F5F0E6] w-full py-3.5 font-bold">
                <span>View Product on Amazon</span>
                <svg class="w-4 h-4 text-[#E49F2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
        `;
    } else {
        mobileCtaContainer.innerHTML = `
            <div class="text-center py-3 bg-[#063061]/5 border border-[#063061]/10 text-xs font-mono text-[#063061]/60">
                Amazon link will be enabled upon official launch.
            </div>
        `;
    }

    // 3. Render Hero Section CTA
    const heroCtaContainer = document.getElementById("hero-cta-container");
    if (hasAmazonLink) {
        heroCtaContainer.innerHTML = `
            <a href="${AMAZON_PRODUCT_URL}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center justify-center gap-3 bg-[#E49F2B] text-[#063061] px-8 py-4 font-bold text-base hover:bg-[#E49F2B]/90 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#063061]">
                <span>View & Buy on Amazon</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
        `;
    } else {
        heroCtaContainer.innerHTML = `
            <div class="inline-flex items-center gap-3 bg-[#063061]/10 text-[#063061]/50 px-8 py-4 font-bold text-base cursor-not-allowed border border-[#063061]/15">
                <span>Purchase link available soon on Amazon</span>
            </div>
        `;
    }

    // 4. Render Product Visual (Image or Placeholder)
    const productVisualContainer = document.getElementById("product-visual-container");
    if (PRODUCT_IMAGE_URL && PRODUCT_IMAGE_URL.trim() !== "") {
        const img = document.createElement("img");
        img.src = PRODUCT_IMAGE_URL;
        img.alt = "Mind Go T-Shirt Edition 01";
        img.className = "w-full h-full object-contain drop-shadow-md";
        img.onerror = () => {
            renderPlaceholder();
        };
        productVisualContainer.innerHTML = "";
        productVisualContainer.appendChild(img);
    } else {
        renderPlaceholder();
    }

    function renderPlaceholder() {
        productVisualContainer.innerHTML = `
            <div class="w-full h-full flex flex-col items-center justify-center text-center p-4">
                <div class="w-full max-w-[220px] aspect-[3/4] border border-dashed border-[#063061]/30 flex flex-col items-center justify-center p-6 space-y-4 bg-[#F5F0E6]">
                    <svg class="w-10 h-10 text-[#063061]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                    <div class="space-y-1">
                        <span class="block text-xs font-mono font-bold uppercase text-[#063061]">
                            [ PRODUCT CANVAS ]
                        </span>
                        <p class="text-[11px] text-[#063061]/60">
                            Official product imagery will be displayed here
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    // Mobile Menu Toggle Logic
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // Close mobile menu when clicking links
    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });
});
