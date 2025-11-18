import Image from "next/image"
const Logo = () => {
    return (


       <div className="w-28 sm:w-32 md:w-40 lg:w-44 xl:w-48">
        <a href="https://tadbeer-nine.vercel.app/">
  <Image
    src="/logo2.png"
    alt="logo"
    width={60}
    height={60}
    className="object-contain"
    priority
  />
</a>
</div>

    );
}
export default Logo
