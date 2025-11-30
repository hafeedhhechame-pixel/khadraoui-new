import React from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { Leaf, Users, Award, Truck } from 'lucide-react';

const About = () => {
    const location = useLocation();
    const lang = location.pathname.startsWith('/fr') ? 'fr' : 'ar';
    const isFrench = lang === 'fr';

    const t = {
        ar: {
            seoTitle: 'من نحن',
            seoDesc: 'تعرف على خضراوي، شريكك الموثوق للأشجار والنباتات عالية الجودة والحلول الزراعية.',
            heroTitle: 'نزرع مستقبلاً أخضراً',
            heroSubtitle: 'خضراوي مكرسة لتوفير أشجار فواكه عالية الجودة ونصائح زراعية متخصصة للمزارعين وهواة البستنة في جميع أنحاء الجزائر.',
            storyTitle: 'قصتنا',
            storyP1: 'بدأت خضراوي بشغف للزراعة كمشتلة عائلية صغيرة. على مر السنين، نمت لتصبح اسماً موثوقاً في الصناعة، معروفة بالتزامنا بالجودة ونجاح العملاء.',
            storyP2: 'نؤمن بأن كل شجرة مزروعة هي خطوة نحو مستقبل مستدام. يقوم فريق خبرائنا باختيار ورعاية كل شتلة بعناية لضمان ازدهارها في تربتك.',
            whyTitle: 'لماذا تختارنا؟',
            val1Title: 'جودة ممتازة',
            val1Desc: 'شتلات معتمدة خالية من الأمراض جاهزة للزراعة.',
            val2Title: 'دعم متخصص',
            val2Desc: 'إرشادات من الزراعة إلى الحصاد من أخصائيي الزراعة.',
            val3Title: 'توصيل سريع',
            val3Desc: 'شحن آمن وموثوق عبر 58 ولاية.',
            val4Title: 'ضمان النمو',
            val4Desc: 'نحن ندعم جودة أشجارنا بضمان النمو.'
        },
        fr: {
            seoTitle: 'À Propos de Nous',
            seoDesc: 'Découvrez Khadraoui, votre partenaire de confiance pour des arbres et plantes de qualité supérieure et des solutions agricoles.',
            heroTitle: 'Cultiver un avenir plus vert',
            heroSubtitle: 'Khadraoui se consacre à fournir des arbres fruitiers de haute qualité et des conseils agricoles experts aux agriculteurs et aux passionnés de jardinage à travers l\'Algérie.',
            storyTitle: 'Notre Histoire',
            storyP1: 'Fondée avec une passion pour l\'agriculture, Khadraoui a commencé comme une petite pépinière familiale. Au fil des années, nous sommes devenus un nom de confiance dans l\'industrie, connus pour notre engagement envers la qualité et la réussite des clients.',
            storyP2: 'Nous croyons que chaque arbre planté est un pas vers un avenir durable. Notre équipe d\'experts sélectionne et nourrit soigneusement chaque plant pour s\'assurer qu\'il prospère dans votre sol.',
            whyTitle: 'Pourquoi nous choisir ?',
            val1Title: 'Qualité Supérieure',
            val1Desc: 'Plants certifiés, exempts de maladies et prêts à planter.',
            val2Title: 'Support Expert',
            val2Desc: 'Conseils de la plantation à la récolte de nos agronomes.',
            val3Title: 'Livraison Rapide',
            val3Desc: 'Expédition sûre et fiable dans 58 wilayas.',
            val4Title: 'Garantie de Croissance',
            val4Desc: 'Nous garantissons la qualité de nos arbres avec une garantie de croissance.'
        }
    };

    const text = t[lang];

    return (
        <div className="bg-white">
            <SEO
                title={text.seoTitle}
                description={text.seoDesc}
                canonical={`https://khadraoui.dz/${isFrench ? 'fr/' : ''}about`}
            />

            {/* Hero Section */}
            <div className="relative bg-green-900 text-white py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{text.heroTitle}</h1>
                    <p className="text-xl text-green-100">
                        {text.heroSubtitle}
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <div className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
                                alt="Our Nursery"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{text.storyTitle}</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {text.storyP1}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {text.storyP2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-green-50 py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{text.whyTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            icon={<Leaf className="w-10 h-10 text-green-600" />}
                            title={text.val1Title}
                            description={text.val1Desc}
                        />
                        <ValueCard
                            icon={<Users className="w-10 h-10 text-green-600" />}
                            title={text.val2Title}
                            description={text.val2Desc}
                        />
                        <ValueCard
                            icon={<Truck className="w-10 h-10 text-green-600" />}
                            title={text.val3Title}
                            description={text.val3Desc}
                        />
                        <ValueCard
                            icon={<Award className="w-10 h-10 text-green-600" />}
                            title={text.val4Title}
                            description={text.val4Desc}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ValueCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default About;
