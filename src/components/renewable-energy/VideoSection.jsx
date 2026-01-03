import { motion } from "framer-motion";
import MediaElement from "../media/MediaElement";

export default function VideoSection({
  eyebrow = "Our Commitment",
  title,
  caption,
  videoSrc,
}) {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-8xl mx-auto px-6 space-y-20">

        {/* ================= TITLE ================= */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm tracking-widest uppercase text-brand-lightgreen mb-4">
            {eyebrow}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-brand-blue mb-6">
            {title}
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            {caption}
          </p>
        </motion.div>

        {/* ================= VIDEO ================= */}
        <motion.div
          className="relative rounded-xl overflow-hidden
                     h-[320px] sm:h-[420px] md:h-[420px] lg:h-[60vh]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <MediaElement
            src={videoSrc}
            isVideo
            className="h-full w-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
