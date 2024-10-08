import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSpotify } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { SiWhatsapp } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

interface FooterProps {
  negocio: {
    iconUrl: string;
    name: string;
    description: string;
    correo?: string;
    telefono?: string;
    direccion?: string;
    maps_url?: string;
    web_url?: string;
    whatsapp?: string;
    social_links?: {
      name: string;
      url: string;
    }[]
  }
}

const socialIcons: { [key: string]: JSX.Element } = {
  facebook: <FaFacebook className='text-blue-700' />,
  instagram: <FaInstagram className='text-pink-900' />,
  linkedin: <FaLinkedin className='text-blue-950' />,
  tiktok: <IoLogoTiktok className='text-black' />,
  x: <FaXTwitter className='text-black' />,
  youtube: <CiYoutube className='text-red-600' />,
  spotify: <FaSpotify className='text-green-600' />

};

function getLastSegment(url: string): string {
  const segments = url.split('/');
  return segments[segments.length - 1];
}

function Footer({ negocio }: FooterProps) {
  return (
    <footer className='border-t border-t-gray-500 border-dashed mt-5 bg-gradient-to-b from-gray-200 to-gray-100 max-w-screen-sm'>

      {/* FOOTER CLIENTE */}
      <div className='p-5'>
        <div className='grid grid-col-2 py-5'>

          <div className='pb-3'>
            <div className='flex mb-2'>
              <Image
                width={30}
                height={30}
                src={negocio.iconUrl}
                className='h-6'
                alt="icono" />
              <h1 className='inline-block uppercase font-bold text-gray-600 tracking-wider'>{negocio.name}</h1>
            </div>
            <p className='text-sm text-gray-600 italic py-2'>{negocio.description}</p>
          </div>

          <div className='mb-5'>
            <p className='text-gray-500 font-semibold pb-2'>Siguenos en nuestras redes</p>
            <ul className='text-md space-y-1'>
              {negocio.social_links?.map((social, index) => (
                <li key={index} className='flex space-x-2'>
                  {socialIcons[social.name.toLowerCase()] || null}
                  <Link href={social.url} target='_blank' className='text-gray-600'>
                    <span className='ml-2'>{getLastSegment(social.url)}</span>
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          <div>
            <p className='text-gray-500 font-semibold pb-2'>Contactanos</p>
            <ul className='list-disc list-inside spacing-y-3'>
              <li className='flex gap-3'><IoIosCall /> {negocio.telefono}</li>
              <li className='flex gap-3' ><SiWhatsapp /> {negocio.whatsapp}</li>
              <li className='flex gap-3' ><MdOutlineMailOutline />{negocio.correo}</li>
              <li className='flex gap-3'>
                <SiGooglemaps />
                <div className='inline-block'>
                  {negocio.direccion} (
                  <Link
                    href={negocio.maps_url || ''}
                    target='_blank'
                    rel="noopener noreferrer"
                    className='text-blue-500 underline-600 text-sm italic'
                  >
                    Abrir Google Maps
                  </Link>

                  )
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className='bg-zinc-800 text-zinc-400 items-center justify-center flex py-10' id='footer_promedia'>
        <div className='flex flex-col items-center justify-center text-center'>

          <Image
            src='https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logo_fullcolor.svg'
            width={150}
            height={100}
            alt='logo'
            className='pb-2'
          />
          <p>Todos los derechos reservados &copy; 2024</p>
          <a href='/' target='_blank' className='text-white tracking-wide text-sm'>
            www.promedia.mx
          </a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
