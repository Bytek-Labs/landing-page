import Image from "next/image";
import symbol from "@/public/bytek-symbol.png";

export function Brand({ label }: { label: string }) {
  return (
    <a href="#topo" className="brand" aria-label={label}>
      <Image src={symbol} alt="" width={22} priority />
      <span className="brand__word"><b>Bytek</b> Labs</span>
    </a>
  );
}
