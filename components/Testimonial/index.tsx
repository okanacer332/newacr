"use client";
import SectionHeader from "../Common/SectionHeader";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";
import { useTranslations } from "next-intl"; // EKLENDİ
import { useViewMode } from "@/app/context/ViewModeContext"; // EKLENDİ

const Testimonial = () => {
  const t = useTranslations("Testimonial");
  const { mode } = useViewMode();
  const isDesign = mode === "design";
  const modeKey = isDesign ? "design" : "code";

  // Veriyi dinamik oluştur: Resimler sabit dosyadan + Metinler JSON'dan
  const dynamicTestimonials = testimonialData.map((item) => ({
    ...item,
    name: t(`reviews.${modeKey}.${item.id}.name`),
    designation: t(`reviews.${modeKey}.${item.id}.designation`),
    content: t(`reviews.${modeKey}.${item.id}.content`),
  }));

  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: t("title"),
                subtitle: t("subtitle"),
                description: t("description"),
              }}
            />
          </div>
          {/* */}
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            {/* */}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {dynamicTestimonials.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SingleTestimonial review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;