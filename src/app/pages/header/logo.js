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
                           width={200}
                           height={100}
                           sizes="150vw"
                           className="w-[200px] h-[120px] object-contain"
                           priority
                         />
                       </div>

    );
}
