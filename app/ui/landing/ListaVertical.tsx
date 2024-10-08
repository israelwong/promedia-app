import React from 'react';

interface Item {
    titulo: string;
    descripcion?: string;
    icon_type?: string;
    icon_content?: string;
}

interface Lista {
    titulo: string;
    items: Item[];
}

interface ListaVerticalProps {
    lista: Lista[];
}

const ListaVertical: React.FC<ListaVerticalProps> = ({ lista }) => {
    return (
        <div className='p-5'>
        <div className=''>
            {lista.map((listaItem, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-xl font-bold mb-4 text-gray-600">{listaItem.titulo}</h2>
                    <ul className='grid grid-cols-1'>
                        {listaItem.items.map((item, idx) => (
                            <li key={idx} className="mb-4 bg-gray-200 p-3 rounded-md">
                                {item.icon_content && (
                                    <img src={item.icon_content} alt={item.titulo} className="w-12 h-12 mr-4" />
                                )}
                                <div>
                                    <h3 className="text-md font-semibold">{item.titulo}</h3>
                                    {item.descripcion && <p className='text-gray-700 text-sm'>{item.descripcion}</p>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        </div>
    );
};

export default ListaVertical;