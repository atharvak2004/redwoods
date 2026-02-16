import { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaExpand, 
  FaChevronLeft, 
  FaChevronRight, 
  FaTimes 
} from "react-icons/fa";

const ImageItem = memo(({ image, index, open }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    onClick={() => open(index)}
    className="relative cursor-pointer group 
               overflow-hidden rounded-3xl 
               shadow-lg hover:shadow-xl transition"
  >
    <div className="aspect-square">
      <img
        src={image}
        alt={`Gallery ${index + 1}`}
        loading="lazy"            // 🔥 lazy load
        decoding="async"         // 🔥 faster decode
        className="w-full h-full object-cover
                   group-hover:scale-105
                   transition-transform duration-700"
      />
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/0 
                    group-hover:bg-black/40 
                    transition flex items-center justify-center">
      <FaExpand
        className="w-8 h-8 text-white 
                   opacity-0 
                   group-hover:opacity-100"
      />
    </div>
  </motion.div>
));

export default function ImageGallery({ gallery = [] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImage((p) => (p + 1) % gallery.length);
  }, [gallery.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((p) => (p - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  return (
    // <>
    //   {/* ================= GALLERY SECTION ================= */}
    //   <section className="relative py-24 bg-white overflow-hidden">

    //     <div className="absolute inset-0 bg-gradient-to-r 
    //                     from-gray-50 via-white to-gray-50" />

    //     <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

    //       {/* Header */}
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         className="text-center mb-16"
    //       >
    //         <span className="inline-block mb-4 text-sm tracking-widest 
    //                          text-brand-lightgreen uppercase">
    //           Visual Highlights
    //         </span>

    //         <h2 className="text-3xl md:text-4xl xl:text-5xl 
    //                        font-semibold text-brand-blue">
    //           Project <span className="text-[#373e68]">Gallery</span>
    //         </h2>
    //       </motion.div>

    //       {/* Grid */}
    //       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    //         {gallery.map((img, i) => (
    //           <ImageItem
    //             key={i}
    //             image={img}
    //             index={i}
    //             open={openLightbox}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* ================= LIGHTBOX ================= */}
    //   <AnimatePresence>
    //     {lightboxOpen && (
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         className="fixed inset-0 z-50 bg-black/90 
    //                    flex items-center justify-center p-6"
    //         onClick={() => setLightboxOpen(false)}
    //       >
    //         {/* Close */}
    //         <button
    //           className="absolute top-6 right-6 text-white"
    //           onClick={() => setLightboxOpen(false)}
    //         >
    //           <FaTimes size={28} />
    //         </button>

    //         {/* Prev */}
    //         <button
    //           className="absolute left-6 top-1/2 -translate-y-1/2 text-white"
    //           onClick={(e) => {
    //             e.stopPropagation();
    //             prevImage();
    //           }}
    //         >
    //           <FaChevronLeft size={26} />
    //         </button>

    //         {/* Next */}
    //         <button
    //           className="absolute right-6 top-1/2 -translate-y-1/2 text-white"
    //           onClick={(e) => {
    //             e.stopPropagation();
    //             nextImage();
    //           }}
    //         >
    //           <FaChevronRight size={26} />
    //         </button>

    //         <motion.img
    //           key={currentImage}
    //           initial={{ opacity: 0, scale: 0.9 }}
    //           animate={{ opacity: 1, scale: 1 }}
    //           exit={{ opacity: 0 }}
    //           src={gallery[currentImage]}
    //           loading="lazy"
    //           decoding="async"
    //           className="max-w-full max-h-[85vh] 
    //                      object-contain rounded-2xl"
    //           onClick={(e) => e.stopPropagation()}
    //         />
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </>
    <></>
  );
}
 