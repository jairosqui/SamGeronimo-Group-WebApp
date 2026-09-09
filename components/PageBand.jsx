import Image from "next/image";
import { Reveal } from "./Reveal";

export function PageBand({ kicker, title, image }) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        </>
      )}
      <div className="container-content relative">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
            {kicker}
          </p>
          <h1 className="font-display font-extrabold text-off text-4xl md:text-6xl leading-tight max-w-3xl">
            {title}
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
