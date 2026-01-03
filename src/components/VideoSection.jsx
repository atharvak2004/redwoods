import MediaElement from "./MediaElement";

export default function VideoSection({ 
  videoSrc, 
  posterSrc,
  title = "Our Approach",
  caption = "" 
}) {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="divider-accent mx-auto mb-6" />
          <h2 className="heading-section text-foreground">{title}</h2>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden aspect-video max-w-5xl mx-auto">
          <MediaElement
            src={videoSrc}
            isVideo={true}
            poster={posterSrc}
            alt="Video showcase"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        
        {caption && (
          <p className="text-center text-muted-foreground text-body-sm mt-6 max-w-2xl mx-auto">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
