import Image from "next/image";

export default function ThinkerLogo() {
  return (
    <Image
      src="/ThinkerLogo.png"
      alt="Thinker AI"
      width={120}
      height={50}
      priority
      className="object-contain"
    />
  );
}