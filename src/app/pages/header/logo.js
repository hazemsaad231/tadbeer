import Image from "next/image"
const Logo = () => {
    return (
       <div>
  <Image
    src="/logo.webp"
    alt="logo"
    width={200}
    height={200}
    className="object-contain"
    priority
  />
</div>

    );
}
export default Logo


export const SmallLogo = () => {
    return (
        <div className="z-20">
                         <Image
                           src="/logo.webp"
                           alt="logo"
                           width={150}
                           height={150}
                           sizes="100vw"
                           className="w-[100px] h-[100px] object-contain"
                           priority
                         />
                       </div>

    );
}
