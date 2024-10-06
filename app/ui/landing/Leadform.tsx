'use client';
import React, { useState } from 'react';

interface LeadformProps {
    id_negocio: number;
}

function Leadform({ id_negocio }: LeadformProps) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};

        if (!nombre) newErrors.nombre = 'El nombre es obligatorio';
        if (!email) {
            newErrors.email = 'El email es obligatorio';
        } else if (!validateEmail(email)) {
            newErrors.email = 'El email no es válido';
        }
        if (!telefono) newErrors.telefono = 'El teléfono es obligatorio';
        if (!mensaje) newErrors.mensaje = 'El mensaje es obligatorio';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Aquí puedes manejar el envío del formulario
            console.log('Formulario enviado:', { id_negocio, nombre, email, telefono, mensaje });
        }
    };

    return (
        <div>
            <div id='wrap-leadform' className='p-5'>
                <div className='p-5 border border-dashed border-gray-400 rounded-md'>
                    <div className='mb-3 space-y-1'>
                        <h1 className='font-bold text-xl text-gray-500'>¿Listo para dar el siguiente paso?</h1>
                        <p>Dejamos tus datos, nosotros te contacteremos lo antes posible.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 gap-4'>
                            <div>
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    placeholder='Nombre'
                                    className='p-2 border border-gray-500 rounded-md w-full'
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                {errors.nombre && <p className='text-red-500 text-sm'>{errors.nombre}</p>}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='Email'
                                    className='p-2 border border-gray-500 rounded-md w-full'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="telefono"
                                    id="telefono"
                                    placeholder='Teléfono'
                                    className='p-2 border border-gray-500 rounded-md w-full'
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                />
                                {errors.telefono && <p className='text-red-500 text-sm'>{errors.telefono}</p>}
                            </div>
                            <div>
                                <textarea
                                    name="mensaje"
                                    id="mensaje"
                                    placeholder='Mensaje'
                                    className='p-2 border border-gray-500 rounded-md w-full'
                                    value={mensaje}
                                    onChange={(e) => setMensaje(e.target.value)}
                                ></textarea>
                                {errors.mensaje && <p className='text-red-500 text-sm'>{errors.mensaje}</p>}
                            </div>
                            <input
                                type="submit"
                                value="Enviar"
                                className='bg-blue-500 text-white p-2 rounded-md cursor-pointer'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Leadform;