/**
 * Navbar component for Used Cycles Marketplace
 */
export function initNavbar() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const isSubPage = window.location.pathname.includes('/pages/');
    const homePrefix = isSubPage ? '../' : '';

    header.innerHTML = `
        <div class="container flex justify-between items-center py-sm" style="height: 70px;">
            <div class="logo">
                <a href="${homePrefix}index.html" class="flex items-center gap-1">
                    <i data-lucide="bike" class="text-primary" style="width: 28px;"></i>
                    <span style="font-weight: 800; font-size: 1.25rem; letter-spacing: -0.5px; display: flex; align-items: center;">
                        ATTAR<span style="color:var(--primary-color)">CYCLES</span>
                    </span>
                </a>
            </div>
            
            <div class="search-bar relative flex-1 mx-lg hide-mobile" style="max-width: 450px;">
                <input type="text" placeholder="Search brands, types, or models..." class="w-full p-sm rounded border" style="padding-left: 2.5rem; border:1px solid var(--border-color); border-radius: 50px; background: var(--bg-alt); font-size: 0.9rem;">
                <i data-lucide="search" style="position:absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 16px; color: var(--text-muted);"></i>
            </div>
            
            <nav class="nav-links items-center gap-md hide-mobile" style="display: flex;">
                <a href="${homePrefix}pages/contact.html" class="btn btn-primary btn-sm">Sell Your Cycle</a>
                <button id="user-btn" class="p-xs text-muted hover-primary"><i data-lucide="user"></i></button>
            </nav>

            <button class="mobile-toggle text-primary p-xs" id="mobile-menu-btn">
                <i data-lucide="menu" style="width: 32px; height: 32px;"></i>
            </button>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-drawer" class="mobile-drawer shadow-lg">
            <div class="p-lg">
                <div class="flex justify-between items-center mb-lg">
                    <span class="font-bold">Menu</span>
                    <button id="close-drawer"><i data-lucide="x"></i></button>
                </div>
                <div class="flex flex-col gap-2">
                    <a href="${homePrefix}index.html" class="p-md bg-alt rounded flex items-center gap-2"><i data-lucide="home"></i> Home</a>
                    <a href="${homePrefix}pages/contact.html" class="p-md bg-alt rounded flex items-center gap-2"><i data-lucide="camera"></i> Sell Your Cycle</a>
                    <a href="${homePrefix}pages/contact.html" class="p-md bg-alt rounded flex items-center gap-2"><i data-lucide="phone"></i> Contact Support</a>
                </div>
            </div>
        </div>
    `;

    // Handle Drawer logic
    const drawer = document.getElementById('mobile-drawer');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-drawer');

    if (menuBtn) menuBtn.onclick = () => drawer.classList.add('active');
    if (closeBtn) closeBtn.onclick = () => drawer.classList.remove('active');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) header.classList.add('shadow-md');
        else header.classList.remove('shadow-md');
    });

    if (window.lucide) window.lucide.createIcons();
}
