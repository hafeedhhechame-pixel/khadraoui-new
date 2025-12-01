import React, { useState } from 'react';
import { User, Phone, MapPin, MessageSquare, Send, CheckCircle, Truck } from 'lucide-react';
import { communesByWilaya } from '../data/communes';

const OrderFormFr = ({ product }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        wilaya: '',
        commune: '',
        address: '',
        deliveryType: 'home',
        quantity: 1,
        notes: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const wilayas = [
        "01 - Adrar", "02 - Chlef", "03 - Laghouat", "04 - Oum El Bouaghi", "05 - Batna",
        "06 - Béjaïa", "07 - Biskra", "08 - Béchar", "09 - Blida", "10 - Bouira",
        "11 - Tamanrasset", "12 - Tébessa", "13 - Tlemcen", "14 - Tiaret", "15 - Tizi Ouzou",
        "16 - Alger", "17 - Djelfa", "18 - Jijel", "19 - Sétif", "20 - Saïda",
        "21 - Skikda", "22 - Sidi Bel Abbès", "23 - Annaba", "24 - Guelma", "25 - Constantine",
        "26 - Médéa", "27 - Mostaganem", "28 - M'Sila", "29 - Mascara", "30 - Ouargla",
        "31 - Oran", "32 - El Bayadh", "33 - Illizi", "34 - Bordj Bou Arreridj", "35 - Boumerdès",
        "36 - El Tarf", "37 - Tindouf", "38 - Tissemsilt", "39 - El Oued", "40 - Khenchela",
        "41 - Souk Ahras", "42 - Tipaza", "43 - Mila", "44 - Aïn Defla", "45 - Naâma",
        "46 - Aïn Témouchent", "47 - Ghardaïa", "48 - Relizane", "49 - Timimoun", "50 - Bordj Badji Mokhtar",
        "51 - Ouled Djellal", "52 - Béni Abbès", "53 - In Salah", "54 - In Guezzam", "55 - Touggourt",
        "56 - Djanet", "57 - El M'Ghair", "58 - El Meniaa"
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Calculate prices
    const deliveryFee = formData.deliveryType === 'home' ? 850 : 500;
    const subtotal = product.price * formData.quantity;
    const totalPrice = subtotal + deliveryFee;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Prepare data for Google Sheets
        const sheetData = {
            name: formData.name,
            phone: formData.phone,
            wilaya: formData.wilaya,
            commune: formData.commune,
            address: formData.deliveryType === 'home' ? formData.address : 'Livraison au bureau',
            product: product.name,
            quantity: formData.quantity,
            price: product.price,
            deliveryFee: deliveryFee,
            total: totalPrice,
            notes: formData.notes || '-'
        };

        // Send to Google Sheets
        try {
            await fetch('https://script.google.com/macros/s/AKfycbwzWs03tb10aP2mO3dbsyCU-lqNWVzc5bBrH_weCxeauR7pG10hKOitfX8BK0dRbAGaDw/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sheetData)
            });
        } catch (error) {
            console.error('Error sending to Google Sheets:', error);
        }

        // Send to Zapier
        try {
            await fetch('https://hooks.zapier.com/hooks/catch/25556870/uk8wr9r/', {
                method: 'POST',
                body: JSON.stringify(sheetData)
            });
        } catch (error) {
            console.error('Error sending to Zapier:', error);
        }

        // Create WhatsApp message
        const message = `
🌿 *Nouvelle Commande - ${product.name}*

👤 *Nom:* ${formData.name}
📞 *Tél:* ${formData.phone}
📍 *Wilaya:* ${formData.wilaya}
🏘️ *Commune:* ${formData.commune}
🏠 *Adresse:* ${formData.deliveryType === 'home' ? formData.address : 'Au Bureau'}
🚚 *Livraison:* ${formData.deliveryType === 'home' ? 'À Domicile (850 DZD)' : 'Au Bureau (500 DZD)'}

🔢 *Quantité:* ${formData.quantity}
💰 *Prix unitaire:* ${product.price} DZD
🚚 *Frais de livraison:* ${deliveryFee} DZD
💵 *Total:* ${totalPrice} DZD
${formData.notes ? `\n📝 *Note:* ${formData.notes}` : ''}
        `.trim();

        const whatsappUrl = `https://wa.me/213799330612?text=${encodeURIComponent(message)}`;

        // Track Pixel Purchase Event
        if (window.fbq) {
            window.fbq('track', 'Purchase', {
                content_name: product.name,
                value: totalPrice,
                currency: 'DZD',
                num_items: formData.quantity
            });
        }

        window.open(whatsappUrl, '_blank');

        // Show success message
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    phone: '',
                    wilaya: '',
                    commune: '',
                    address: '',
                    deliveryType: 'home',
                    quantity: 1,
                    notes: ''
                });
            }, 3000);
        }, 1000);
    };

    if (isSubmitted) {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Commande envoyée avec succès!</h3>
                <p className="text-gray-600">Nous vous contacterons bientôt sur WhatsApp.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl" dir="ltr">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Commandez maintenant et profitez de l'offre</h3>
                <p className="text-gray-600">Remplissez le formulaire et nous vous contacterons immédiatement.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <User className="w-4 h-4 inline mr-1" />
                        Nom Complet *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                        placeholder="Entrez votre nom complet"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Numéro de Téléphone *
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                        placeholder="0555 12 34 56"
                    />
                </div>

                {/* Wilaya */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        Wilaya *
                    </label>
                    <select
                        name="wilaya"
                        value={formData.wilaya}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition bg-white"
                    >
                        <option value="">Sélectionnez votre Wilaya</option>
                        {wilayas.map((wilaya, index) => (
                            <option key={index} value={wilaya}>{wilaya}</option>
                        ))}
                    </select>
                </div>

                {/* Commune */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        Commune *
                    </label>
                    <input
                        type="text"
                        name="commune"
                        value={formData.commune}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                        placeholder="Entrez votre commune"
                    />
                </div>

                {/* Delivery Type */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <Truck className="w-4 h-4 inline mr-1" />
                        Type de Livraison *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <label className={`cursor-pointer border-2 rounded-xl p-4 flex items-center justify-center gap-2 transition ${formData.deliveryType === 'home' ? 'border-primary bg-green-50 text-primary' : 'border-gray-200 hover:border-gray-300'}`}>
                            <input
                                type="radio"
                                name="deliveryType"
                                value="home"
                                checked={formData.deliveryType === 'home'}
                                onChange={handleChange}
                                className="hidden"
                            />
                            <span className="font-bold">À Domicile (850 DZD)</span>
                        </label>
                        <label className={`cursor-pointer border-2 rounded-xl p-4 flex items-center justify-center gap-2 transition ${formData.deliveryType === 'desk' ? 'border-primary bg-green-50 text-primary' : 'border-gray-200 hover:border-gray-300'}`}>
                            <input
                                type="radio"
                                name="deliveryType"
                                value="desk"
                                checked={formData.deliveryType === 'desk'}
                                onChange={handleChange}
                                className="hidden"
                            />
                            <span className="font-bold">Au Bureau (500 DZD)</span>
                        </label>
                    </div>
                </div>

                {/* Address - Only show if Home Delivery is selected */}
                {formData.deliveryType === 'home' && (
                    <div className="animate-fade-in-up">
                        <label className="block text-gray-700 font-medium mb-2">
                            <MapPin className="w-4 h-4 inline mr-1" />
                            Adresse Détaillée *
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                            placeholder="Cité, Rue, N° Maison..."
                        />
                    </div>
                )}

                {/* Quantity */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        🔢 Quantité *
                    </label>
                    <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition bg-white"
                    >
                        {Array.from({ length: 100 }, (_, i) => i + 1).map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>

                {/* Price Summary */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border-2 border-green-200">
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">💰 Récapitulatif</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between text-gray-700">
                            <span>Sous-total ({formData.quantity} × {product.price} DZD)</span>
                            <span className="font-bold">{subtotal} DZD</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span>Frais de livraison ({formData.deliveryType === 'home' ? 'À Domicile' : 'Au Bureau'})</span>
                            <span className="font-bold">{deliveryFee} DZD</span>
                        </div>
                        <div className="border-t-2 border-green-300 pt-2 mt-2"></div>
                        <div className="flex justify-between text-green-800 text-xl">
                            <span className="font-bold">Total</span>
                            <span className="font-bold">{totalPrice} DZD</span>
                        </div>
                    </div>
                </div>

                {/* Notes */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-1" />
                        Notes Supplémentaires (Optionnel)
                    </label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition resize-none"
                        placeholder="Vos remarques ou demandes spéciales..."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            Envoi en cours...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Acheter Maintenant
                        </>
                    )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    🔒 Vos informations sont protégées et utilisées uniquement pour vous contacter.
                </p>
            </form>
        </div>
    );
};

export default OrderFormFr;
