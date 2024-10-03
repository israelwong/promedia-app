import React from 'react'

interface LeadformProps {
    id_negocio: number;
}

function Leadform({ id_negocio }: LeadformProps) {

    console.log(id_negocio)
    return (
        <div>
            Leadform
        </div>
    )
}

export default Leadform
