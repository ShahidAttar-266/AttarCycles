/**
 * WhatsApp Floating Button
 */
import { openWhatsApp } from '../whatsapp.js';

export function initWhatsAppBtn() {
    const container = document.getElementById('whatsapp-fab');
    if (!container) return;

    const isSubPage = window.location.pathname.includes('/pages/');
    const homePrefix = isSubPage ? '../' : '';

    container.innerHTML = `<img src="${homePrefix}assets/whatsapp-icon.png" alt="WhatsApp" style="width: 100%; height: 100%; object-fit: cover;">`;
    container.title = "Chat on WhatsApp";
    
    container.onclick = () => openWhatsApp("any available bike");
    
    // Adjust CSS for image (removing basic placeholder styling if needed)
    container.style.background = "transparent";
    container.style.boxShadow = "none";
    container.style.padding = "0";
}
