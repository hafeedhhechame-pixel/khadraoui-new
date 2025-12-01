import React, { useState } from 'react';
import { User, Phone, MapPin, MessageSquare, Send, CheckCircle, Truck } from 'lucide-react';
import { communesByWilaya } from '../data/communes';

const OrderForm = ({ product, lang = 'ar' }) => {
    const isFrench = lang === 'fr';
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
        "01 - أدرار",
        "02 - الشلف",
        "03 - الأغواط",
        "04 - أم البواقي",
        "05 - باتنة",
        "06 - بجاية",
        "07 - بسكرة",
        "08 - بشار",
        "09 - البليدة",
        "10 - البويرة",
        "11 - تمنراست",
        "12 - تبسة",
        "13 - تلمسان",
        "14 - تيارت",
        "15 - تيزي وزو",
        "16 - الجزائر",
        "17 - الجلفة",
        "18 - جيجل",
        "19 - سطيف",
        "20 - سعيدة",
        "21 - سكيكدة",
        "22 - سيدي بلعباس",
        "23 - عنابة",
        "24 - قالمة",
        "25 - قسنطينة",
        "26 - المدية",
        "27 - مستغانم",
        "28 - المسيلة",
        "29 - معسكر",
        "30 - ورقلة",
        "31 - وهران",
        "32 - البيض",
        "33 - إليزي",
        "34 - برج بوعريريج",
        "35 - بومرداس",
        "36 - الطارف",
        "37 - تندوف",
        "38 - تيسمسيلت",
        "39 - الوادي",
        "40 - خنشلة",
        "41 - سوق أهراس",
        "42 - تيبازة",
        "43 - ميلة",
        "44 - عين الدفلى",
        "45 - النعامة",
        "46 - عين تموشنت",
        "47 - غرداية",
        "48 - غليزان",
        "49 - تيميمون",
        "50 - برج باجي مختار",
        "51 - أولاد جلال",
        "52 - بني عباس",
        "53 - إن صالح",
        "54 - إن قزام",
        "55 - تقرت",
        "56 - جانت",
        "57 - المغير",
        "58 - المنيعة"
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
        const productName = isFrench ? product.name_fr : product.name;
        const sheetData = {
            name: formData.name,
            phone: formData.phone,
            wilaya: formData.wilaya,
            commune: formData.commune,
            address: formData.deliveryType === 'home' ? formData.address : 'توصيل للمكتب',
            product: productName,
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
                    'Content-Type': 'text/plain;charset=utf-8',
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
        const message = isFrench
            ? `Bonjour! Je voudrais commander:\\n\\n📦 Produit: ${productName}\\n🔢 Quantité: ${formData.quantity}\\n💰 Prix unitaire: ${product.price} DZD\\n🚚 Frais de livraison: ${deliveryFee} DZD\\n💵 Total: ${totalPrice} DZD\\n\\n👤 Nom: ${formData.name}\\n📱 Téléphone: ${formData.phone}\\n📍 Wilaya: ${formData.wilaya}\\n🏘️ Commune: ${formData.commune}${formData.deliveryType === 'home' ? `\\n🏠 Adresse: ${formData.address}` : '\\n🏢 Livraison au bureau'}${formData.notes ? `\\n\\n📝 Notes: ${formData.notes}` : ''}`
            : `مرحبا! أرغب في طلب:\\n\\n📦 المنتج: ${productName}\\n🔢 الكمية: ${formData.quantity}\\n💰 سعر الوحدة: ${product.price} د.ج\\n🚚 رسوم التوصيل: ${deliveryFee} د.ج\\n💵 المبلغ الإجمالي: ${totalPrice} د.ج\\n\\n👤 الاسم: ${formData.name}\\n📱 الهاتف: ${formData.phone}\\n📍 الولاية: ${formData.wilaya}\\n🏘️ البلدية: ${formData.commune}${formData.deliveryType === 'home' ? `\\n🏠 العنوان: ${formData.address}` : '\\n🏢 التوصيل للمكتب'}${formData.notes ? `\\n\\n📝 ملاحظات: ${formData.notes}` : ''}`;

        const whatsappUrl = `https://wa.me/213799330612?text=${encodeURIComponent(message)}`;

        // Track Pixel Purchase Event
        if (window.fbq) {
            window.fbq('track', 'Purchase', {
                content_name: productName,
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

    const t = {
        ar: {
            successTitle: 'تم إرسال طلبك بنجاح!',
            successMsg: 'سنتواصل معك قريباً عبر واتساب',
            formTitle: 'اطلب الآن واحصل على عرض خاص',
            formSubtitle: 'املأ البيانات وسنتواصل معك فوراً',
            fullName: 'الاسم الكامل',
            phone: 'رقم الهاتف',
            wilaya: 'الولاية',
            commune: 'البلدية',
            address: 'العنوان التفصيلي',
            deliveryType: 'نوع التوصيل',
            homeDelivery: 'توصيل للمنزل (850 دج)',
            deskDelivery: 'توصيل للمكتب (500 دج)',
            quantity: 'الكمية',
            priceSummary: 'ملخص الأسعار',
            subtotal: 'المجموع الفرعي',
            deliveryFee: 'رسوم التوصيل',
            total: 'المبلغ الإجمالي',
            currency: 'دج',
            notes: 'ملاحظات إضافية',
            selectWilaya: 'اختر الولاية',
            searchCommune: 'ابحث عن البلدية أو اكتب اسمها',
            selectWilayaFirst: 'اختر الولاية أولاً',
            enterName: 'أدخل اسمك الكامل',
            phoneExample: '0555 12 34 56',
            addressExample: 'الحي، الشارع، رقم المنزل...',
            notesExample: 'أي ملاحظات أو طلبات خاصة...',
            sending: 'جاري الإرسال...',
            buyNow: 'اشتري الآن',
            privacy: '🔒 معلوماتك محمية ولن تُستخدم إلا للتواصل معك',
            required: '*',
            optional: '(اختياري)'
        },
        fr: {
            successTitle: 'Votre commande a été envoyée avec succès!',
            successMsg: 'Nous vous contacterons bientôt via WhatsApp',
            formTitle: 'Commandez maintenant et bénéficiez d\'une offre spéciale',
            formSubtitle: 'Remplissez les informations et nous vous contacterons immédiatement',
            fullName: 'Nom complet',
            phone: 'Numéro de téléphone',
            wilaya: 'Wilaya',
            commune: 'Commune',
            address: 'Adresse détaillée',
            deliveryType: 'Type de livraison',
            homeDelivery: 'Livraison à domicile (850 DZD)',
            deskDelivery: 'Livraison au bureau (500 DZD)',
            quantity: 'Quantité',
            priceSummary: 'Récapitulatif',
            subtotal: 'Sous-total',
            deliveryFee: 'Frais de livraison',
            total: 'Total',
            currency: 'DZD',
            notes: 'Notes supplémentaires',
            selectWilaya: 'Choisissez la wilaya',
            searchCommune: 'Recherchez ou saisissez le nom de la commune',
            selectWilayaFirst: 'Choisissez d\'abord la wilaya',
            enterName: 'Entrez votre nom complet',
            phoneExample: '0555 12 34 56',
            addressExample: 'Quartier, rue, numéro...',
            notesExample: 'Toutes notes ou demandes spéciales...',
            sending: 'Envoi en cours...',
            buyNow: 'Acheter maintenant',
            privacy: '🔒 Vos informations sont protégées et ne seront utilisées que pour vous contacter',
            required: '*',
            optional: '(facultatif)'
        }
    };

    const text = t[lang];

    if (isSubmitted) {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{text.successTitle}</h3>
                <p className="text-gray-600">{text.successMsg}</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{text.formTitle}</h3>
                <p className="text-gray-600">{text.formSubtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <User className={`w-4 h-4 inline ${isFrench ? 'mr-1' : 'ml-1'}`} />
                        {text.fullName} {text.required}
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                        placeholder={text.enterName}
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <Phone className={`w-4 h-4 inline ${isFrench ? 'mr-1' : 'ml-1'}`} />
                        {text.phone} {text.required}
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                        placeholder={text.phoneExample}
                        dir="ltr"
                    />
                </div>

                {/* Wilaya */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <MapPin className={`w-4 h-4 inline ${isFrench ? 'mr-1' : 'ml-1'}`} />
                        {text.wilaya} {text.required}
                    </label>
                    <select
                        name="wilaya"
                        value={formData.wilaya}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition bg-white"
                    >
                        <option value="">{text.selectWilaya}</option>
                        {wilayas.map((wilaya, index) => (
                            <option key={index} value={wilaya}>{wilaya}</option>
                        ))}
                    </select>
                </div>

                {/* Commune */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <MapPin className={`w-4 h-4 inline ${isFrench ? 'mr-1' : 'ml-1'}`} />
                        {text.commune} {text.required}
                    </label>
                    <input
                        type="text"
                        name="commune"
                        value={formData.commune}
                        onChange={handleChange}
                        required
                        list={formData.wilaya && communesByWilaya[formData.wilaya] ? "communes-list" : undefined}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                        placeholder={formData.wilaya ? text.searchCommune : text.selectWilayaFirst}
                        disabled={!formData.wilaya}
                    />
                    {formData.wilaya && communesByWilaya[formData.wilaya] && (
                        <datalist id="communes-list">
                            {communesByWilaya[formData.wilaya].map((commune, index) => (
                                <option key={index} value={commune} />
                            ))}
                        </datalist>
                    )}
                </div>

                {/* Delivery Type */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <Truck className={`w-4 h-4 inline ${isFrench ? 'mr-1' : 'ml-1'}`} />
                        {text.deliveryType} {text.required}
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
                            <span className="font-bold text-sm">{text.homeDelivery}</span>
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
                            <span className="font-bold text-sm">{text.deskDelivery}</span>
                        </label>
                    </div>
                </div>

                {/* Address - Only show if Home Delivery is selected */}
                {formData.deliveryType === 'home' && (
                    <div className="animate-fade-in-up">
                        <label className="block text-gray-700 font-medium mb-2">
                            <MapPin className={`w-4 h-4 inline ${isFrench ? 'mr-1' : 'ml-1'}`} />
                            {text.address} {text.required}
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                            placeholder={text.addressExample}
                        />
                    </div>
                )}

                {/* Quantity */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        🔢 {text.quantity} {text.required}
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
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">💰 {text.priceSummary}</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between text-gray-700">
                            <span>{text.subtotal} ({formData.quantity} × {product.price} {text.currency})</span>
                            <span className="font-bold">{subtotal} {text.currency}</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span>{text.deliveryFee} ({formData.deliveryType === 'home' ? text.homeDelivery.split('(')[0] : text.deskDelivery.split('(')[0]})</span>
                            <span className="font-bold">{deliveryFee} {text.currency}</span>
                        </div>
                        <div className="border-t-2 border-green-300 pt-2 mt-2"></div>
                        <div className="flex justify-between text-green-800 text-xl">
                            <span className="font-bold">{text.total}</span>
                            <span className="font-bold">{totalPrice} {text.currency}</span>
                        </div>
                    </div>
                </div>

                {/* Notes */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <MessageSquare className={`w-4 h-4 inline ${isFrench ? 'mr-1' : 'ml-1'}`} />
                        {text.notes} {text.optional}
                    </label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition resize-none"
                        placeholder={text.notesExample}
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
                            {text.sending}
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            {text.buyNow}
                        </>
                    )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    {text.privacy}
                </p>
            </form>
        </div >
    );
};

export default OrderForm;
