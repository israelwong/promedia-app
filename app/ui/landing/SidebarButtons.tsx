import Link from 'next/link';

interface SidebarButtonsProps {
    paramms:{
        telefono?: string;
        whatsapp?: string;
        correo?: string;
    }
}

function SidebarButtons( { paramms }: SidebarButtonsProps) {

    console.log(paramms)

    return (
        <div className='mr-5'>

        <div className="fixed bottom-0 right-3 z-50 flex flex-col items-center justify-center h-screen space-y-4">
            <Link href="#" className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl">
                <i className="fas fa-plus"></i>
            </Link>
            <Link href="#" className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl">
                <i className="fas fa-search"></i>
            </Link>
            <Link href="#" className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl">
                <i className="fas fa-shopping-cart"></i>
            </Link>
            <Link href="#" className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl">
                <i className="fas fa-user"></i>
            </Link>
        </div>
        </div>
    );
}

export default SidebarButtons;