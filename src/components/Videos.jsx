import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const Videos = () => {
    const videos = [
        {
            id: 1,
            url: "https://www.facebook.com/share/v/1FBM7eY1fi/",
            title: "فيديو 1",
            thumbnail: "/images/lemon-dwarf.jpg"
        },
        {
            id: 2,
            url: "https://www.facebook.com/share/v/1Bsic5ErxS/",
            title: "فيديو 2",
            thumbnail: "/images/fig.jpg"
        },
        {
            id: 3,
            url: "https://www.facebook.com/share/v/1Fy3aZCFS2/",
            title: "فيديو 3",
            thumbnail: "/images/sidr-1.jpg"
        },
        {
            id: 4,
            url: "https://www.facebook.com/share/r/14TV1SS1MHk/",
            title: "فيديو 4",
            thumbnail: "/images/jasmine.jpg"
        },
        {
            id: 5,
            url: "https://www.facebook.com/share/r/14RhVJEZRuY/",
            title: "فيديو 5",
            thumbnail: "/images/moringa.jpg"
        },
        {
            id: 6,
            url: "https://www.facebook.com/share/r/1GB59YDE8W/",
            title: "فيديو 6",
            thumbnail: "/images/orange.jpg"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <Play className="w-10 h-10 text-green-600 ml-3" />
                        <h2 className="text-4xl font-bold text-gray-800">شاهد منتجاتنا</h2>
                    </div>
                    <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        اكتشف جمال وجودة نباتاتنا من خلال هذه الفيديوهات
                    </p>
                </div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {videos.map((video) => (
                        <a
                            key={video.id}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Thumbnail */}
                            <div className="relative aspect-video bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-full group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                                        <Play className="w-12 h-12 text-green-600 group-hover:text-white fill-current" />
                                    </div>
                                </div>

                                {/* Facebook Badge */}
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    فيسبوك
                                </div>

                                {/* External Link Icon */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-5 h-5 text-green-600" />
                                </div>
                            </div>

                            {/* Title */}
                            <div className="p-4 text-center">
                                <p className="text-gray-700 font-medium group-hover:text-green-600 transition-colors">
                                    اضغط للمشاهدة على فيسبوك
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">هل أعجبتك منتجاتنا؟</p>
                    <a
                        href="https://wa.me/213780248422"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-lg"
                    >
                        اطلب الآن عبر واتساب
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Videos;
