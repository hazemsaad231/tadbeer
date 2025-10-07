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
        <div className="z-20 rounded-2xl bg-white p-1 shadow">
                         <Image
                           src="/logo.webp"
                           alt="logo"
                           width={0}
                           height={0}
                           sizes="100vw"
                           className="w-[56px] h-[56px] object-contain"
                           priority
                         />
                       </div>

    );
}
