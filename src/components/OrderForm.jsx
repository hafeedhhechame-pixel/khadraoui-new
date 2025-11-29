import React, { useState } from 'react';
import { User, Phone, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { communesByWilaya } from '../data/communes';

const OrderForm = ({ product }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        wilaya: '',
        commune: '',
        address: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create WhatsApp message
        const message = `
🌿 *طلب جديد - ${product.name}*

👤 *الاسم:* ${formData.name}
📞 *الهاتف:* ${formData.phone}
📍 *الولاية:* ${formData.wilaya}
🏘️ *البلدية:* ${formData.commune}
🏠 *العنوان:* ${formData.address}
${formData.notes ? `📝 *ملاحظات:* ${formData.notes}` : ''}

💰 *السعر:* ${product.price} د.ج
        `.trim();

        // Open WhatsApp
        const whatsappUrl = `https://wa.me/213799330612?text=${encodeURIComponent(message)}`;

        // Track Pixel Purchase Event
        if (window.fbq) {
            window.fbq('track', 'Purchase', {
                content_name: product.name,
                value: product.price,
                currency: 'DZD',
                num_items: 1
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
                <h3 className="text-2xl font-bold text-gray-800 mb-2">تم إرسال طلبك بنجاح!</h3>
                <p className="text-gray-600">سنتواصل معك قريباً عبر واتساب</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">اطلب الآن واحصل على عرض خاص</h3>
                <p className="text-gray-600">املأ البيانات وسنتواصل معك فوراً</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <User className="w-4 h-4 inline ml-1" />
                        الاسم الكامل *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                        placeholder="أدخل اسمك الكامل"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <Phone className="w-4 h-4 inline ml-1" />
                        رقم الهاتف *
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                        placeholder="0555 12 34 56"
                        dir="ltr"
                    />
                </div>

                {/* Wilaya */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <MapPin className="w-4 h-4 inline ml-1" />
                        الولاية *
                    </label>
                    <select
                        name="wilaya"
                        value={formData.wilaya}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition bg-white"
                    >
                        <option value="">اختر الولاية</option>
                        {wilayas.map((wilaya, index) => (
                            <option key={index} value={wilaya}>{wilaya}</option>
                        ))}
                    </select>
                </div>

                {/* Commune */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <MapPin className="w-4 h-4 inline ml-1" />
                        البلدية *
                    </label>
                    <input
                        type="text"
                        name="commune"
                        value={formData.commune}
                        onChange={handleChange}
                        required
                        list={formData.wilaya && communesByWilaya[formData.wilaya] ? "communes-list" : undefined}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                        placeholder={formData.wilaya ? "ابحث عن البلدية أو اكتب اسمها" : "اختر الولاية أولاً"}
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

                {/* Address */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <MapPin className="w-4 h-4 inline ml-1" />
                        العنوان التفصيلي (اختياري)
                    </label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition"
                        placeholder="الحي، الشارع، رقم المنزل..."
                    />
                </div>

                {/* Notes */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        <MessageSquare className="w-4 h-4 inline ml-1" />
                        ملاحظات إضافية (اختياري)
                    </label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition resize-none"
                        placeholder="أي ملاحظات أو طلبات خاصة..."
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
                            جاري الإرسال...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            إرسال الطلب عبر واتساب
                        </>
                    )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    🔒 معلوماتك محمية ولن تُستخدم إلا للتواصل معك
                </p>
            </form>
        </div>
    );
};

export default OrderForm;
