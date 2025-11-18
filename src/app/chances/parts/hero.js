import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaTiktok,FaWhatsapp} from "react-icons/fa";



export const Hero = ({item}) => {


  const socials = item.socials

  console.log(item.icon);

    
    return (
        <div className="w-full clip-slant-bottom">
       <section className="relative w-full h-auto pb-52 pt-24">
        <div className="absolute inset-0 bg-[#030352]"></div>
        <div className="relative z-10">
          <div className="w-full max-w-2xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl m-auto">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-start  md:justify-start gap-3 px-3 md:px-2">
                <Image src={item.icon} alt="logo" width={80} height={80} className="object-contain border-2 text-md md:text-lg lg:text-xl xl:text-2xl border-white rounded-xl" priority />
               <h1 className="text-white font-extrabold text-2xl md:text-4xl">
                {item.name || ''}
              </h1>
              </div>
             
              <p className="text-white font-bold 
              text-base md:text-md lg:text-lg md:leading-relaxed lg:leading-relaxed p-3 md:p-2 w-full max-w-xl md:max-w-xl lg:max-w-2xl xl:max-w-2xl text-right leading-relaxed">
                {item.description || ''}
              </p>

              <div className="flex justify-between items-center max-w-2xl px-3 md:px-2">
               
{socials.length > 0 ? (

<div className="flex gap-1 md:gap-3">
                    {socials.map((social) => (
                      <div key={social.id}>
                        {social.name === 'facebook' && <a href={social.url} className="cursor-pointer text-white/80 hover:text-indigo-400 transition-colors" aria-label="Facebook">
                      <FaFacebook size={28} />
                    </a>}
                    {social.name === 'instagram' && <a href={social.url} className=" cursor-pointer text-white/80 hover:text-indigo-400 transition-colors" aria-label="Instagram">
                      <FaInstagram size={28} />
                    </a>}
                    {social.name === 'youtube' && <a href={social.url} className=" cursor-pointer text-white/80 hover:text-indigo-400 transition-colors" aria-label="WhatsApp">
                      <FaYoutube size={28} />
                    </a>}
                    {social.name === 'twitter' && <a href={social.url} className=" cursor-pointer text-white/80 hover:text-indigo-400 transition-colors" aria-label="Twitter">
                      <FaTwitter size={28} />
                    </a>}
                    {social.name === 'tiktok' && <a href={social.url} className=" cursor-pointer text-white/80 hover:text-indigo-400 transition-colors" aria-label="Tiktok">
                      <FaTiktok size={28} />
                    </a>}
                    {social.name === 'whatsapp' && <a href={`${social.url}`} className=" cursor-pointer text-white/80 hover:text-indigo-400 transition-colors" aria-label="WhatsApp">
                      <FaWhatsapp size={28} />
                    </a>}
                    {social.name === 'linkedin' && <a href={social.url} className=" cursor-pointer text-white/80 hover:text-indigo-400 transition-colors" aria-label="Linkedin">
                      <FaLinkedin size={28} />
                    </a>}
                    </div>
                    ))}
                </div>
                    ): (
  <div className="text-white/80 underline font-semibold text-md md:text-lg shadow-lg hover:shadow-[#dbbb39]/50 hover:scale-105 transition-all">
  {item.site_link || ''}
 </div>
)}
                  
                 <Link href={`${item.site_link}`} className="text-white/80 underline font-semibold text-md md:text-lg shadow-lg hover:shadow-[#dbbb39]/50 hover:scale-105 transition-all">
                 {item.site_link || ''}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
 
        </div>
    );
}