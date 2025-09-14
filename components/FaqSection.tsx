import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "I primarily work with React, Next.js, TypeScript, Node.js, Python, and various databases including PostgreSQL and MongoDB.",
  },
  {
    question: "What type of projects interest you most?",
    answer:
      "I'm passionate about full-stack web applications, data visualization, and projects that solve real-world problems with clean, scalable code.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach me through the contact form on this site, email me directly at danielgeorge922@gmail.com, or connect with me on LinkedIn.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col">
      <h2 className="text-[20px]">Frequently Asked Questions</h2>
      <div className="gap-4 mt-4 flex flex-col">
        {faqs.map((faq, index) => (
          <div className="w-full" key={index}>
            <div
              className="py-4 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-center justify-between w-full">
                <span>{faq.question}</span>
                <div className="bg-gray-200 rounded-full p-2 transition-transform duration-200">
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </div>
              </div>
              <div className={`overflow-hidden transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-96 mt-2' : 'max-h-0'}`}>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
            <div className="border-b border-gray-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
