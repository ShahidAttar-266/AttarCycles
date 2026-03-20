/**
 * Footer component for Attar Cycles Marketplace
 */
export function initFooter() {
    const footer = document.getElementById('main-footer');
    if (!footer) return;

    const isSubPage = window.location.pathname.includes('/pages/');
    const homePrefix = isSubPage ? '../' : '';

    footer.innerHTML = `
        <div class="footer-top section bg-dark">
            <div class="container grid grid-cols-4 gap-3">
                <!-- Branding -->
                <div class="footer-col">
                    <div class="logo mb-md">
                        <a href="${homePrefix}index.html" class="flex items-center gap-1">
                            <i data-lucide="bike" class="text-primary" style="width: 28px;"></i>
                            <span style="font-weight: 800; font-size: 1.25rem; letter-spacing: -0.5px; color: white;">
                                ATTAR<span style="color:var(--primary-color)">CYCLES</span>
                            </span>
                        </a>
                    </div>
                    <p class="text-muted text-sm" style="color: #94a3b8; line-height: 1.6;">Buy and sell quality second-hand cycles at affordable prices. Verified listings and direct seller contact.</p>
                </div>

                <!-- Quick Links -->
                <div class="footer-col">
                    <h4 class="text-white mb-md" style="font-size: 1.1rem; color: white;">Quick Links</h4>
                    <ul class="flex flex-col gap-1 text-sm" style="color: #94a3b8;">
                        <li><a href="${homePrefix}index.html" class="hover-white">Home</a></li>
                        <li><a href="${homePrefix}index.html#inventory-section" class="hover-white">Browse Cycles</a></li>
                        <li><a href="${homePrefix}pages/contact.html" class="hover-white">Contact Us</a></li>
                        <li><a href="${homePrefix}pages/contact.html" class="hover-white">Sell Your Cycle</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="footer-col">
                    <h4 class="text-white mb-md" style="font-size: 1.1rem; color: white;">Contact Info</h4>
                    <ul class="flex flex-col gap-1 text-sm" style="color: #94a3b8;">
                        <li class="flex items-center gap-1"><i data-lucide="phone" style="width:14px;"></i> +91 9011531687</li>
                        <li class="flex items-center gap-1"><i data-lucide="mail" style="width:14px;"></i> shahidattar266@gmail.com</li>
                        <li class="flex items-center gap-1"><i data-lucide="map-pin" style="width:14px;"></i> Sangli, Maharashtra</li>
                    </ul>
                </div>

                <!-- WhatsApp CTA -->
                <div class="footer-col">
                    <h4 class="text-white mb-md" style="font-size: 1.1rem; color: white;">Stay Connected</h4>
                    <p class="text-muted text-xs mb-sm" style="color: #94a3b8;">Instant support via WhatsApp</p>
                    <button class="btn btn-primary btn-sm w-full" style="background: #25d366; border:none;" onclick="window.open('https://wa.me/919011531687?text=Hi%20Attar%20Cycles,%20I%20have%20an%20enquiry!', '_blank')">
                        <i data-lucide="message-circle"></i> Chat on WhatsApp
                    </button>
                </div>
            </div>
        </div>
        <div class="footer-bottom py-md" style="background: #020617; border-top: 1px solid rgba(255,255,255,0.05);">
            <div class="container text-center">
                <p class="text-xs text-muted" style="color: #64748b;">&copy; 2026 ATTAR CYCLES. All Rights Reserved.</p>
            </div>
        </div>
    `;

    if (window.lucide) window.lucide.createIcons();
}
