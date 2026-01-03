import MediaElement from "./media/MediaElement";

export default function ProjectCard({
  image,
  title,
  description,
  isVideo = false,
  className = "",
}) {
  return (
    <div
      className={`group rounded-2xl overflow-hidden bg-white
                  border border-gray-200
                  hover:shadow-xl transition
                  ${className}`}
    >
      {/* Media */}
      <div className="aspect-[4/3] overflow-hidden">
        <MediaElement
          src={image}
          alt={title}
          isVideo={isVideo}
          className="w-full h-full object-cover
                     transition-transform duration-700
                     group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-lg font-semibold text-brand-blue mb-2
                     group-hover:text-brand-lightgreen
                     transition-colors duration-300"
        >
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        
        </p>
                <div className="mt-4 h-px w-12 bg-brand-lightgreen" />

      </div>
    </div>
  );
}
