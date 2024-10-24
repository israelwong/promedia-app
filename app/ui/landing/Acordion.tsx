import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


interface FaqProps {
    lista: {
        answer: string;
        question: string;
    }[];
}

function Acordion({ lista }: FaqProps) {
    return (
        <div className='p-5'>
        <div className='p-2'>
            <h2 className='text-2xl opacity-80'>Por que contratarnos</h2>
            <Accordion type="single" collapsible>
                {lista.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>
                            <h2>{item.question}</h2>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>{item.answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
                </div>
    );
}

export default Acordion;