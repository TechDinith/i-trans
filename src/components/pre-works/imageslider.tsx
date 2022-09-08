import React from "react";
import ImageViewer from "react-simple-image-viewer";
import { iImageSlider } from "../../interfaces/components/iPre-works/iImageSlider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { StaticImage } from "gatsby-plugin-image";

export default function ImageSlider({ images }: iImageSlider) {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const slides = [
    {
      key: 0,
      content: (
        <StaticImage
          src="../../images/ecss/ecss_1.jpg"
          alt="0"
          onClick={() => openImageViewer(0)}
        />
      ),
    },
    {
      key: 1,
      content: (
        <StaticImage
          src="../../images/ecss/ecss_2.jpg"
          alt="1"
          onClick={() => openImageViewer(1)}
        />
      ),
    },
    {
      key: 2,
      content: (
        <StaticImage
          src="../../images/ecss/ecss_3.jpg"
          alt="2"
          onClick={() => openImageViewer(2)}
        />
      ),
    },
    {
      key: 3,
      content: (
        <StaticImage
          src="../../images/ecss/ecss_4.jpg"
          alt="3"
          onClick={() => openImageViewer(3)}
        />
      ),
    },
    {
      key: 4,
      content: (
        <StaticImage
          src="../../images/ecss/ecss_5.jpg"
          alt="4"
          onClick={() => openImageViewer(4)}
        />
      ),
    },
    {
      key: 5,
      content: (
        <StaticImage
          src="../../images/ecss/ecss_6.jpg"
          alt="5"
          onClick={() => openImageViewer(5)}
        />
      ),
    },
    {
      key: 6,
      content: (
        <StaticImage
          src="../../images/ecss/ecss_7.jpg"
          alt="6"
          onClick={() => openImageViewer(6)}
        />
      ),
    },
    {
      key: 7,
      content: (
        <StaticImage
          src="../../images/ecss/ecss_8.jpg"
          alt="7"
          onClick={() => openImageViewer(7)}
        />
      ),
    },
    {
      key: 8,
      content: (
        <StaticImage
          src="../../images/ecss/ecss_9.jpg"
          alt="8"
          onClick={() => openImageViewer(8)}
        />
      ),
    },
    {
      key: 9,
      content: (
        <StaticImage
          src="../../images/ecss/ecss_10.jpg"
          alt="9"
          onClick={() => openImageViewer(9)}
        />
      ),
    },
  ];

  console.log(slides[0]);
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
      <Carousel
        showIndicators={false}
        showThumbs={false}
        onClickItem={openImageViewer}
      >
        {slides.map((slide) => {
          return <div key={slide.key}>{slide.content}</div>;
        })}
      </Carousel>
      {isViewerOpen && (
        <ImageViewer
          backgroundStyle={{ zIndex: 2 }}
          src={slides.map(
            (image) => image.content.props.__imageData.images.fallback.src
          )}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
}
