/**
 * Product Card for used cycles
 */
export function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'cycle-card';

    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

    card.innerHTML = `
        <div class="card-img-wrapper">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.sold ? '<div class="sold-overlay">SOLD OUT</div>' : ''}
            ${product.verified ? '<div class="verified-badge"><i data-lucide="check-circle" style="width:14px;"></i> Verified</div>' : ''}
            ${discount > 0 ? `<div class="discount-badge badge">${discount}% OFF</div>` : ''}
        </div>
        <div class="card-content">
            <div class="flex justify-between items-start mb-1">
                <span class="text-xs text-primary font-bold uppercase">${product.type}</span>
                <span class="text-xs text-muted">${product.usage} Used</span>
            </div>
            <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">
                <a href="/pages/detail.html?id=${product.id}">${product.name}</a>
            </h3>
            <div class="flex items-center gap-2 mb-2">
                <span class="condition-tag badge" style="background: #e0f2fe; color: #0369a1;">${product.condition}</span>
                ${product.negotiable ? '<span class="negotiable-tag badge">Negotiable</span>' : ''}
            </div>
            <div class="card-footer flex justify-between items-center">
                <div>
                    <span style="font-size: 1.25rem; font-weight: 800; color: var(--primary-color);">₹${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `<span class="text-muted text-xs" style="text-decoration: line-through; margin-left: 4px;">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <a href="/pages/detail.html?id=${product.id}" class="btn btn-outline btn-sm">View Details</a>
            </div>
        </div>
    `;

    if (window.lucide) window.lucide.createIcons({ node: card });

    return card;
}
