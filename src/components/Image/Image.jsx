import clsx from "clsx";

export default function Image({
  text,
  image,
  alt,
  vertical = true,
  height = undefined,
  width = undefined,
}) {
  const CONTAINER = clsx(vertical ? "flex flex-col" : "flex gap-3");

  return (
    <div className={CONTAINER}>
      <img
        src={image}
        alt={alt}
        className="object-cover"
        style={{
          height: height ? `${height}px` : "auto",
          width: width ? `${width}px` : "auto",
        }}
      />
      <p className="mt-1 text-center">{text}</p>
    </div>
  );
}
