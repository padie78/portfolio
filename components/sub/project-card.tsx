import Image from "next/image";
import Link from "next/link";

type TechIcon = {
  name: string;
  src: string;
  width?: number;
  height?: number;
};

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  techIcons?: TechIcon[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  techIcons = [],
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-[300px] flex flex-col"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Imagen */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "66.66%", // ratio 3:2
          lineHeight: 0,
        }}
      >
        <Image
          src={src}
          alt={title}
          fill
          style={{
            objectFit: "contain",
            objectPosition: "top center",
            display: "block",
            margin: 0,
          }}
          sizes="(max-width: 768px) 100vw, 300px"
          priority
        />
      </div>

      {/* Texto */}
      <div className="relative p-4 flex-grow">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>

      {/* Tecnologías */}
      {techIcons.length > 0 && (
        <div className="flex flex-wrap gap-2 px-4 pb-4 pt-2 border-[#2A0E61]">
          {techIcons.map((tech) => (
            <div key={tech.name + tech.src} className="flex items-center gap-1">
              <Image
                src={tech.src}
                alt={tech.name}
                width={tech.width ?? 32}  // tamaño aumentado
                height={tech.height ?? 32} // tamaño aumentado
                className="object-contain"
              />
              
            </div>
          ))}
        </div>
      )}
    </Link>
  );
};
