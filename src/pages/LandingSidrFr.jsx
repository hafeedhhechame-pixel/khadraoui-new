import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Check, Star, MapPin, ShieldCheck, Truck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import OrderFormFr from '../components/OrderFormFr';
import FAQ from '../components/FAQ';
import TrustBadges from '../components/TrustBadges';
import Testimonials from '../components/Testimonials';
import StickyCTA from '../components/StickyCTA';
import UrgencyBar from '../components/UrgencyBar';

const LandingSidrFr = () => {
    // Facebook Pixel ViewContent Event
    useEffect(() => {
        if (window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: 'Sidr Yéménite Authentique',
                content_ids: ['sidr-001-fr'],
                content_type: 'product',
                value: 1100,
                currency: 'DZD'
            });
        }
    }, []);

    const product = {
        name: "Sidr Yéménite Authentique",
        price: 1100,
        oldPrice: 1900,
        image: "/images/sidr-1.jpg",
        features: [
            "Résiste aux conditions climatiques extrêmes (chaleur et sécheresse)",
            "Croissance rapide et offre une ombre dense",
            "Fruits de jujube délicieux et bénéfiques pour la santé",
            "Ses feuilles sont utilisées dans la médecine prophétique",
            "Parfaitement adapté au climat algérien et du sud"
        ]
    };

    const scrollToOrder = () => {
        document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans pb-20 md:pb-0" dir="ltr">
            <Helmet>
                <title>{product.name} | Khadraoui</title>
                <meta name="description" content="Obtenez l'authentique Sidr Yéménite. Résistant à la chaleur, croissance rapide et très bénéfique. Commandez maintenant à seulement 1100 DZD." />
            </Helmet>

            <StickyCTA price={product.price} onClick={scrollToOrder} lang="fr" />

            {/* Navbar Simple */}
            <nav className="bg-white shadow-sm py-4 border-b border-beige-light">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary">Khadraoui</div>
                    <Link to="/landing/sidr" className="flex items-center gap-2 text-gray-600 hover:text-primary transition">
                        <Globe className="w-5 h-5" />
                        <span className="font-bold">العربية</span>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-white to-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 py-12 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative order-2 md:order-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-beige to-primary-light rounded-3xl transform rotate-3 scale-105 -z-10 opacity-50"></div>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2.5 rounded-full font-bold shadow-lg animate-pulse">
                                <span className="text-lg">🔥 Offre Spéciale</span>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white px-6 py-4 rounded-xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                    </div>
                                    <span className="text-gray-700 text-sm font-bold">5.0</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">+500 Clients Heureux</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 md:order-2">
                            <div className="inline-block bg-beige-light text-primary-hover px-4 py-2 rounded-full text-sm font-bold mb-4">
                                ✨ Le Plus Vendu
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                {product.name}
                            </h1>

                            <p className="text-xl md:text-2xl font-bold text-primary mb-8 leading-relaxed">
                                L'arbre que tout le monde recherche. Résiste à la plupart des conditions climatiques, un arbre d'ombrage pouvant atteindre 10 mètres, et ses feuilles sont un remède. 🌿
                            </p>

                            <UrgencyBar lang="fr" />

                            {/* Price */}
                            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl mb-8 border-2 border-green-200">
                                <div className="flex items-baseline gap-4">
                                    <div className="text-5xl font-bold text-green-700">{product.price} DZD</div>
                                    <div className="text-2xl text-gray-400 line-through">{product.oldPrice} DZD</div>
                                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        Économisez {product.oldPrice - product.price} DZD
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-gray-600 mb-8">
                                <ShieldCheck className="w-5 h-5 text-green-600" />
                                <span className="font-medium">Paiement à la livraison</span>
                                <span className="text-gray-300">•</span>
                                <span className="font-medium">Garantie 100%</span>
                            </div>

                            <button
                                onClick={scrollToOrder}
                                className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white font-bold py-4 px-10 rounded-full shadow-lg transition text-lg animate-bounce"
                            >
                                Commandez Maintenant
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBadges lang="fr" />

            {/* Features Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Pourquoi choisir le Sidr Yéménite ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {product.features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                                    <Check className="w-6 h-6" />
                                </div>
                                <p className="text-lg text-gray-700 font-medium pt-2">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials lang="fr" />

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Questions Fréquentes</h2>
                        <p className="text-gray-600">Tout ce que vous devez savoir sur l'arbre Sidr</p>
                    </div>
                    <FAQ questions={[
                        {
                            question: "Cet arbre est-il adapté à mon climat ?",
                            answer: "Absolument ! Le Sidr Yéménite est connu pour être 'le vainqueur des conditions difficiles'. Il est très résistant à la chaleur extrême, à la sécheresse et même au froid. Il a prouvé son succès dans toutes les wilayas du pays."
                        },
                        {
                            question: "Combien de temps faut-il pour pousser ?",
                            answer: "Le Sidr Yéménite a une croissance très rapide. Il peut atteindre deux mètres en un an avec de bons soins et un arrosage régulier au début."
                        },
                        {
                            question: "Nécessite-t-il des soins particuliers ?",
                            answer: "Non, c'est un arbre très robuste. Il a juste besoin d'un arrosage régulier les premiers mois jusqu'à ce que ses racines s'établissent, après quoi il devient autonome."
                        },
                        {
                            question: "Quand donne-t-il des fruits ?",
                            answer: "Il commence généralement à fructifier dès la deuxième ou troisième année. Ses fruits (Jujube) sont délicieux et très bénéfiques."
                        },
                        {
                            question: "Comment se passe la livraison ?",
                            answer: "Nous livrons jusqu'à votre porte ou au bureau de livraison de votre wilaya. La plante est soigneusement emballée pour garantir qu'elle arrive intacte à 100%."
                        }
                    ]} />
                </div>
            </section>

            {/* Order Form Section */}
            <section id="order-form" className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 max-w-2xl">
                    <OrderFormFr product={product} />
                </div>
            </section>

            {/* Delivery Info */}
            <section className="py-12 bg-white border-t">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-green-50 rounded-full mb-6">
                        <Truck className="w-8 h-8 text-green-600 mr-3" />
                        <span className="text-xl font-bold text-green-800">Livraison disponible pour 58 Wilayas</span>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Nous garantissons que la plante arrivera intacte et en excellent état. Le paiement s'effectue après réception et vérification de la commande.
                    </p>
                    <button
                        onClick={scrollToOrder}
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transition"
                    >
                        Commandez Maintenant
                    </button>
                </div>
            </section>

            {/* Footer Simple */}
            <footer className="bg-gray-900 text-white py-8 text-center">
                <p>© {new Date().getFullYear()} Khadraoui. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default LandingSidrFr;
