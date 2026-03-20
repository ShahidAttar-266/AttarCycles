/**
 * Admin Dashboard Logic
 */
import { products } from '../products.js';

document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.getElementById('content-table');
    const viewTitle = document.getElementById('view-title');
    const addBtn = document.getElementById('add-btn');
    const navLeads = document.getElementById('nav-leads');
    const navListings = document.getElementById('nav-listings');

    // Mock Leads
    const mockLeads = [
        { name: "Rahul Sharma", phone: "9876543210", product: "Giant Anthem (2022)", city: "Bangalore", status: "New" },
        { name: "Anita Roy", phone: "8765432109", product: "Scott Foil RC", city: "Delhi", status: "Contacted" }
    ];

    function renderLeads() {
        viewTitle.textContent = "Customer Enquiries (Leads)";
        addBtn.style.display = 'none';
        
        tableContainer.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Phone</th>
                        <th>Ineterested In</th>
                        <th>City</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${mockLeads.map(lead => `
                        <tr>
                            <td><strong>${lead.name}</strong></td>
                            <td>${lead.phone}</td>
                            <td>${lead.product}</td>
                            <td>${lead.city}</td>
                            <td><span class="label ${lead.status === 'New' ? 'label-warning' : 'label-success'}">${lead.status}</span></td>
                            <td>
                                <button class="btn btn-sm btn-outline"><i data-lucide="phone" style="width:14px;"></i> Call</button>
                                <button class="text-primary text-xs ml-2">Archive</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        if (window.lucide) window.lucide.createIcons({ node: tableContainer });
    }

    function renderListings() {
        viewTitle.textContent = "Cycle Inventory";
        addBtn.style.display = 'block';

        tableContainer.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Bike</th>
                        <th>Brand</th>
                        <th>Condition</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map(p => `
                        <tr>
                            <td class="flex items-center gap-2">
                                <img src="${p.image}" style="width:40px; height:40px; border-radius:4px; object-fit:cover;">
                                <strong>${p.name}</strong>
                            </td>
                            <td>${p.brand}</td>
                            <td><span class="condition-tag">${p.condition}</span></td>
                            <td>₹${p.price.toLocaleString()}</td>
                            <td><span class="label ${p.sold ? 'label-danger' : 'label-success'}">${p.sold ? 'Sold' : 'Active'}</span></td>
                            <td>
                                <button class="text-primary text-xs">Edit</button>
                                <button class="text-danger text-xs ml-2">Delete</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        if (window.lucide) window.lucide.createIcons({ node: tableContainer });
    }

    navLeads.onclick = (e) => {
        e.preventDefault();
        navLeads.classList.add('active');
        navListings.classList.remove('active');
        renderLeads();
    };

    navListings.onclick = (e) => {
        e.preventDefault();
        navListings.classList.add('active');
        navLeads.classList.remove('active');
        renderListings();
    };

    // Initial View
    renderLeads();
    if (window.lucide) window.lucide.createIcons();
});
