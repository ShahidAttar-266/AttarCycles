/**
 * Product Detail Page Logic
 */
import { initNavbar } from '../components/Navbar.js';
import { initWhatsAppBtn } from '../components/WhatsAppBtn.js';
import { initFooter } from '../components/Footer.js';
import { products } from '../products.js';
import { openWhatsApp } from '../whatsapp.js';
import { db } from '../firebase.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initWhatsAppBtn();
    initFooter();

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = products.find(p => p.id === productId) || products[0];

    const wrapper = document.getElementById('pdp-wrapper');
    if (wrapper) {
        wrapper.innerHTML = `
            <div class="pdp-gallery">
                <div class="main-img-container shadow-sm border rounded-lg overflow-hidden mb-md">
                    <img id="main-img" src="${product.image}" alt="${product.name}" style="width: 100%; height: 450px; object-fit: cover;">
                </div>
                <div class="pdp-thumbnails">
                    <img src="${product.image}" class="active shadow-sm border">
                    <img src="${product.image}" class="shadow-sm border">
                    <img src="${product.image}" class="shadow-sm border">
                </div>
            </div>
            <div class="pdp-content">
                <nav class="breadcrumb text-muted text-xs mb-md flex gap-1">
                    <a href="../index.html" class="hover-primary">Home</a> / <span>${product.name}</span>
                </nav>
                <div class="flex items-center gap-2 mb-sm">
                    <span class="badge" style="background: var(--bg-alt); color: var(--primary-color);">${product.brand}</span>
                    <span class="badge" style="background: var(--bg-alt); color: var(--text-muted);">${product.type}</span>
                </div>
                <h1 style="font-size: 2.25rem; margin-bottom: var(--spacing-sm); line-height: 1.1;">${product.name}</h1>
                
                <div class="flex items-center gap-4 mb-lg">
                    <div class="flex flex-col">
                        <span class="text-xs text-muted font-bold uppercase mb-xxs">Current Price</span>
                        <div class="flex items-center gap-2">
                            <span style="font-size: 2.5rem; font-weight: 800; color: var(--primary-color);">₹${product.price.toLocaleString()}</span>
                            ${product.originalPrice ? `<span class="text-muted" style="text-decoration: line-through; font-size: 1.25rem;">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                        </div>
                    </div>
                    ${product.negotiable ? '<div class="badge" style="background: #fef3c7; color: #92400e; padding: 4px 12px; height: fit-content; margin-top: auto;">Negotiable</div>' : ''}
                </div>

                <div class="grid grid-cols-2 gap-2 mb-lg">
                    <div class="p-md bg-alt rounded flex items-center gap-3 border">
                        <div class="p-xs bg-color rounded-sm text-secondary shadow-sm"><i data-lucide="shield-check" style="width:20px;"></i></div>
                        <div>
                            <p class="text-xs font-bold text-muted uppercase">Condition</p>
                            <p class="font-bold">${product.condition}</p>
                        </div>
                    </div>
                    <div class="p-md bg-alt rounded flex items-center gap-3 border">
                        <div class="p-xs bg-color rounded-sm text-primary shadow-sm"><i data-lucide="calendar" style="width:20px;"></i></div>
                        <div>
                            <p class="text-xs font-bold text-muted uppercase">Usage</p>
                            <p class="font-bold">${product.usage}</p>
                        </div>
                    </div>
                </div>

                <div class="pdp-actions flex flex-col gap-2 mb-lg">
                    <button class="btn btn-primary btn-lg w-full" id="order-now-btn">Send Order Request <i data-lucide="send"></i></button>
                    <button class="btn btn-outline btn-lg w-full" id="pdp-whatsapp-btn" style="border-color: #25d366; color: #25d366;"><i data-lucide="message-circle"></i> Chat on WhatsApp</button>
                </div>

                <div class="pdp-specs p-lg border rounded-lg bg-alt">
                    <h3 class="mb-2" style="font-size: 1.1rem; display: flex; align-items: center; gap: 8px;"><i data-lucide="info" class="text-primary" style="width: 18px;"></i> Seller Notes & Quality Check</h3>
                    <p class="text-sm text-muted" style="line-height: 1.6;">This cycle has been professionally inspected. Frame is in perfect condition with zero cracks. Gears shifted smoothly during testing. Recommended for riders looking for performance at a fraction of the original price. Verified by Attar Cycles experts.</p>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons({ node: wrapper });

        // Thumbnails Logic
        const mainImg = document.getElementById('main-img');
        const thumbs = document.querySelectorAll('.pdp-thumbnails img');
        thumbs.forEach(img => {
            img.onclick = () => {
                thumbs.forEach(t => t.classList.remove('active'));
                img.classList.add('active');
                mainImg.src = img.src;
            };
        });

        // WhatsApp Detail Click
        document.getElementById('pdp-whatsapp-btn').onclick = () => openWhatsApp(product.name);

        // Enquiry Modal Logic
        const modal = document.getElementById('enquiry-modal');
        const orderBtn = document.getElementById('order-now-btn');
        const closeBtn = document.getElementById('close-modal');
        const enquiryForm = document.getElementById('enquiry-form');

        orderBtn.onclick = () => {
            document.getElementById('enquiry-p-name').textContent = product.name;
            document.getElementById('enquiry-p-id').value = product.id;
            modal.classList.add('active');
        };

        closeBtn.onclick = () => modal.classList.remove('active');
        
        enquiryForm.onsubmit = async (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-enquiry');
            submitBtn.textContent = "Submitting...";
            submitBtn.disabled = true;

            try {
                const formData = new FormData(enquiryForm);
                const { collection, addDoc, serverTimestamp } = await import('../firebase.js');
                const orderData = {
                    name: formData.get('name').trim(),
                    phone: formData.get('phone').trim(),
                    city: formData.get('city').trim(),
                    address: formData.get('address').trim(),
                    cycleName: product.name,
                    createdAt: serverTimestamp()
                };

                // Validate
                if (!orderData.name || !orderData.phone || !orderData.city || !orderData.address) {
                    throw new Error("Please fill all fields properly.");
                }

                await addDoc(collection(db, 'orders'), orderData);

                enquiryForm.style.display = 'none';
                document.getElementById('enquiry-success').style.display = 'block';
                enquiryForm.reset();
            } catch (error) {
                console.error("Firestore Error:", error);
                alert("Failed to place order: " + error.message);
                submitBtn.textContent = "Submit My Request";
                submitBtn.disabled = false;
            }
        };
    }
});
