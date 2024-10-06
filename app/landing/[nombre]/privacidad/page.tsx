import React from 'react'

function privacidad() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Aviso de Privacidad</h1>

            <p className="text-gray-600 mb-4">
                <strong>PROMEDIA MÉXICO</strong>, con domicilio en [Dirección de tu empresa], Tecámac, Estado de México, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, y su Reglamento, es responsable del tratamiento de sus datos personales.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mb-4">1. Finalidad del tratamiento de datos personales</h2>
            <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Proveer los servicios solicitados de creación y administración de landing pages, CRM, pasarelas de pago y otros servicios integrados.</li>
                <li>Gestionar consultas, cotizaciones y/o solicitudes de información.</li>
                <li>Facilitar la administración de la relación comercial, incluyendo la facturación y seguimiento a pagos.</li>
                <li>Ofrecer soporte técnico y atención personalizada.</li>
                <li>Enviar información relacionada con mejoras, promociones, actualizaciones y eventos relacionados con nuestros servicios.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 mb-4">2. Datos personales que recabamos</h2>
            <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Nombre</li>
                <li>Teléfono</li>
                <li>Correo electrónico</li>
                <li>Información de facturación</li>
                <li>Datos de su negocio</li>
                <li>Información relacionada con el uso de nuestros servicios SaaS (como estadísticas de uso, leads generados, entre otros).</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 mb-4">3. Transferencia de datos personales</h2>
            <p className="text-gray-600 mb-4">
                Sus datos personales no serán transferidos a terceros sin su consentimiento, excepto en los casos previstos por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mb-4">4. Derechos ARCO</h2>
            <p className="text-gray-600 mb-4">
                Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, deberá enviar una solicitud por escrito al correo electrónico [tu correo] acompañada de la siguiente información:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Su nombre y datos de contacto.</li>
                <li>Documentos que acrediten su identidad o la representación legal.</li>
                <li>Descripción clara y precisa de los datos personales sobre los que desea ejercer algún derecho.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 mb-4">5. Medidas de seguridad</h2>
            <p className="text-gray-600 mb-4">
                Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales de pérdida, mal uso o acceso no autorizado.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mb-4">6. Cambios en el aviso de privacidad</h2>
            <p className="text-gray-600 mb-4">
                Este aviso de privacidad puede sufrir modificaciones. Cualquier cambio será notificado a través de nuestra página web <a href="https://www.promedia.mx" className="text-blue-500 hover:underline">www.promedia.mx</a>.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mb-4">7. Contacto</h2>
            <p className="text-gray-600 mb-4">
                Si tiene preguntas o desea más información sobre cómo manejamos sus datos personales, puede contactarnos al correo electrónico: [tu correo] o al teléfono: [tu teléfono].
            </p>

            <p className="text-gray-500 text-sm">Fecha de última actualización: [Fecha actual]</p>
        </div>

    )
}

export default privacidad
