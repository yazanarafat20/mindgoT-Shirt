document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------------------------------------------------------
  // CONFIGURATION (أدخل روابطك هنا عند توفرها)
  // ---------------------------------------------------------------------------
  const AMAZON_PRODUCT_URL = ""; // مثال: "https://www.amazon.com/dp/B0XXXXXX"
  const PRODUCT_IMAGE_URL = "";  // مثال: "https://domain.com/tshirt.png"

  const hasAmazonLink = Boolean(AMAZON_PRODUCT_URL && AMAZON_PRODUCT_URL.trim() !== "");

  // 1. إعداد أزرار الشراء (Desktop & Mobile & Hero)
  const desktopCtaContainer = document.getElementById("desktop-cta-container");
  const mobileCtaContainer = document.getElementById("mobile-cta-container");
  const heroCtaContainer = document.getElementById("hero-cta-container");

  if (hasAmazonLink) {
    desktopCtaContainer.innerHTML = `
      <a href="${AMAZON_PRODUCT_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-[#063061] text-[#F5F0E6] px-5 py-2.5 text-sm font-bold hover:bg-[#063061]/90 transition-all focus:outline-none focus:ring-2 focus:ring-[#E49F2B]">
        <span>Buy on Amazon</span>
        <i data-lucide="external-link" class="w-4 h-4 text-[#E49F2B]"></i>
      </a>
    `;
    mobileCtaContainer.innerHTML = `
      <a href="${AMAZON_PRODUCT_URL}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 bg-[#063061] text-[#F5F0E6] w-full py-3.5 font-bold">
        <span>View Product on Amazon</span>
        <i data-lucide="external-link" class="w-4 h-4 text-[#E49F2B]"></i>
      </a>
    `;
    heroCtaContainer.innerHTML = `
      <a href="${AMAZON_PRODUCT_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-[#E49F2B] text-[#063061] px-8 py-4 font-bold text-base hover:bg-[#E49F2B]/90 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#063061]">
        <span>View & Buy on Amazon</span>
        <i data-lucide="arrow-right" class="w-5 h-5"></i>
      </a>
    `;
  } else {
    desktopCtaContainer.innerHTML = `
      <span class="text-xs font-mono bg-[#063061]/5 border border-[#063061]/15 px-3 py-2 text-[#063061]/60">
        Amazon Link Coming Soon
      </span>
    `;
    mobileCtaContainer.innerHTML = `
      <div class="text-center py-3 bg-[#063061]/5 border border-[#063061]/10 text-xs font-mono text-[#063061]/60">
        Amazon link will be enabled upon official launch.
      </div>
    `;
    heroCtaContainer.innerHTML = `
      <div class="inline-flex items-center gap-3 bg-[#063061]/10 text-[#063061]/50 px-8 py-4 font-bold text-base cursor-not-allowed border border-[#063061]/15">
        <span>Purchase link available soon on Amazon</span>
      </div>
    `;
  }

  // 2. إدارة عرض صورة المنتج أو الإطار المؤقت
  const visualContainer = document.getElementById("product-visual-container");
  if (PRODUCT_IMAGE_URL && PRODUCT_IMAGE_URL.trim() !== "") {
    const img = document.createElement("img");
    img.src = PRODUCT_IMAGE_URL;
    img.alt = "Mind Go T-Shirt Edition 01";
    img.className = "w-full h-full object-contain drop-shadow-md";
    img.onerror = () => {
      renderPlaceholder(visualContainer);
    };
    visualContainer.appendChild(img);
  } else {
    renderPlaceholder(visualContainer);
  }

  function renderPlaceholder(container) {
    container.innerHTML = `
      <div class="w-full max-w-[220px] aspect-[3/4] border border-dashed border-[#063061]/30 flex flex-col items-center justify-center p-6 space-y-4 bg-[#F5F0E6]">
        <i data-lucide="shopping-bag" class="w-10 h-10 text-[#063061]/30"></i>
        <div class="space-y-1">
          <span class="block text-xs font-mono font-bold uppercase text-[#063061]">[ PRODUCT CANVAS ]</span>
          <p class="text-[11px] text-[#063061]/60">Official product imagery will be displayed here</p>
        </div>
      </div>
    `;
    lucide.createIcons();
  }

  // 3. قائمة الهاتف (Mobile Menu Toggle)
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // 4. تعيين سنة حقوق النشر تلقائياً في التذييل
  document.getElementById("footer-year").textContent = `© ${new Date().getFullYear()} Mind Go. All rights reserved.`;

  // تفعيل أيقونات Lucide بعد إضافتها ديناميكياً
  lucide.createIcons();
});
