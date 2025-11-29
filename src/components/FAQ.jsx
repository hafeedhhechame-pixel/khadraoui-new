import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = ({ questions }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
                {questions.map((q, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                    >
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="w-full px-6 py-4 text-right flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <HelpCircle className="w-5 h-5 text-green-600 shrink-0" />
                                <span className="font-bold text-gray-800 text-lg">{q.question}</span>
                            </div>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-green-600" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                        </button>

                        <div
                            className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-50 bg-gray-50/50">
                                {q.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
