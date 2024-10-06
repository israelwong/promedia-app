'use client';
import React, { useState } from "react";
import { Plus } from 'lucide-react';

// Definir la interfaz para los datos FAQ
interface FaqProps {
  lista: {
    answer: string;
    question: string;
  }[];
}

// Modificar el componente para recibir los FAQs como prop
export default function AccordionBasic({ lista }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-5">
    <div className="p-5 border border-dashed border-gray-400 rounded-md bg-blue-100/50">

      <h2 className="text-2xl font-bold text-slate-600">Preguntas frecuentes</h2>

      <section className="w-full divide-y rounded divide-slate-200">
        {lista.map((faq, index) => (
          <details
            className="py-4 group"
            key={index}
            open={openIndex === index}
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                handleToggle(index);
              }}
              className={`relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden ${openIndex === index ? 'active' : 'inactive'}`}
            >
              {faq.question}
              <Plus className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45">
                <title id={`title-ac${index}`}>Open icon</title>
                <desc id={`desc-ac${index}`} >
                  icon that represents the state of the summary
                </desc>
              </Plus>
            </summary>
            <p className="mt-4 text-slate-500 transition duration-300">
              {faq.answer}
            </p>
          </details>
        ))}
      </section>
      </div>
    </div>
  );
}