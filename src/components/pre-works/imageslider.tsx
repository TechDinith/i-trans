import React from "react";
import ImageViewer from "react-simple-image-viewer";
import { iImageSlider } from "../../interfaces/components/iPre-works/iImageSlider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ImageSlider({ images }: iImageSlider) {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const slides = images.map((image: string, i: number) => {
    return {
      key: i,
      content: (
        <img
          src={image}
          alt={i.toString()}
          onClick={() => openImageViewer(i)}
        />
      ),
    };
  });

  const openImageViewer = React.useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <>
      <Carousel showIndicators={false} onClickItem={openImageViewer}>
        {slides.map((slide) => {
          return <div key={slide.key}>{slide.content}</div>;
        })}
      </Carousel>
      {isViewerOpen && (
        <ImageViewer
          backgroundStyle={{ zIndex: 2 }}
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
}
