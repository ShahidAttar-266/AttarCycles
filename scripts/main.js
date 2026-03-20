/**
 * Main entry point for Second-Hand Cycles Marketplace
 */
import { initNavbar } from './components/Navbar.js';
import { initWhatsAppBtn } from './components/WhatsAppBtn.js';
import { initFooter } from './components/Footer.js';
import { products } from './products.js';
import { createProductCard } from './components/ProductCard.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Global UI
    initNavbar();
    initWhatsAppBtn();
    initFooter();

    // Render All Inventory
    const featuredGrid = document.getElementById('featured-grid');
    if (featuredGrid) {
        products.forEach(p => {
            featuredGrid.appendChild(createProductCard(p));
        });
    }

    // Render Categories
    const categoryGrid = document.getElementById('category-grid');
    if (categoryGrid) {
        const categories = [
            { name: 'MTB', icon: 'mountain-snow', color: '#3b82f6' },
            { name: 'Road', icon: 'bike', color: '#ef4444' },
            { name: 'Hybrid', icon: 'navigation', color: '#10b981' },
            { name: 'Kids', icon: 'baby', color: '#f59e0b' }
        ];

        categoryGrid.innerHTML = categories.map(cat => `
            <div class="category-card text-center p-lg rounded bg-color shadow-sm" style="border: 1px solid var(--border-color); transition: var(--transition); cursor: pointer;" onclick="document.getElementById('inventory-section').scrollIntoView({behavior: 'smooth'})">
                <div class="icon-circle mb-2" style="background: ${cat.color}15; color: ${cat.color}; padding: 1.5rem; border-radius: 50%; display: inline-flex;">
                    <i data-lucide="${cat.icon}"></i>
                </div>
                <h3>${cat.name}</h3>
            </div>
        `).join('');

        if (window.lucide) window.lucide.createIcons({ node: categoryGrid });
    }

    if (window.lucide) window.lucide.createIcons();
});
