import React from 'react';
import SEO from '../components/SEO';
import { Leaf, Users, Award, Truck } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white">
            <SEO
                title="About Us"
                description="Learn more about Khadraoui, your trusted partner for premium fruit trees and agricultural solutions."
                canonical="https://khadraoui.dz/about"
            />

            {/* Hero Section */}
            <div className="relative bg-green-900 text-white py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Growing a Greener Future</h1>
                    <p className="text-xl text-green-100">
                        Khadraoui is dedicated to providing high-quality fruit trees and expert agricultural advice to farmers and gardening enthusiasts across Algeria.
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Founded with a passion for agriculture, Khadraoui started as a small family nursery. Over the years, we have grown into a trusted name in the industry, known for our commitment to quality and customer success.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We believe that every tree planted is a step towards a sustainable future. Our team of experts carefully selects and nurtures each sapling to ensure it thrives in your soil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-green-50 py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            icon={<Leaf className="w-10 h-10 text-green-600" />}
                            title="Premium Quality"
                            description="Certified, disease-free saplings ready for planting."
                        />
                        <ValueCard
                            icon={<Users className="w-10 h-10 text-green-600" />}
                            title="Expert Support"
                            description="Guidance from planting to harvest from our agronomists."
                        />
                        <ValueCard
                            icon={<Truck className="w-10 h-10 text-green-600" />}
                            title="Fast Delivery"
                            description="Safe and reliable shipping across 58 wilayas."
                        />
                        <ValueCard
                            icon={<Award className="w-10 h-10 text-green-600" />}
                            title="Guaranteed Growth"
                            description="We stand by the quality of our trees with a growth guarantee."
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
