/**
 * WhatsApp Utility
 */
export function openWhatsApp(productName) {
    const phoneNumber = "919011531687"; // Client's WhatsApp number
    const message = encodeURIComponent(`Hi, I am interested in ${productName}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}
