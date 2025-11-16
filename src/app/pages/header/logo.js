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

