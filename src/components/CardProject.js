import React, { useRef, useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardProject({ videoSrc, title, description, buttonText, buttonLink, setPlayingVideo, playingVideo }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkInView = () => {
      const videoElement = videoRef.current;
      if (videoElement && videoElement.closest('.is-inview')) {
        if (playingVideo && playingVideo !== videoElement) {
          playingVideo.pause();
          playingVideo.currentTime = 0;
        }
        setPlayingVideo(videoElement);
        videoElement.play();
      } else if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    };

    // Vérifie si l'élément est en vue au chargement initial
    checkInView();

    document.addEventListener('scroll', checkInView);

    return () => {
      document.removeEventListener('scroll', checkInView);
    };
  }, [playingVideo, setPlayingVideo]);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsHovered(false);
  };

  const handleCardClick = () => {
    window.location.href = buttonLink;
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="p-1" data-scroll>
      <Card
        className="w-full max-w-[24rem] mx-auto cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        <CardHeader
          color="gray"
          className={`relative h-56 overflow-hidden transition-transform duration-500 ${
            isHovered ? "md:transform md:scale-150 md:z-50" : "md:transform md:scale-100"
          }`}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <div className="w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
            </div>
          )}
          <video
            ref={videoRef}
            src={videoSrc}
            className="h-full w-full object-cover"
            muted
            playsInline
            onLoadedData={handleLoadedData}
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mt-1 mb-2 font-medium"
          >
            {title}
          </Typography>
          <Typography color="gray" className="mb-4 font-normal">
            {description}
          </Typography>
          <Button
            color="gray"
            variant="outlined"
            size="sm"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the card click event
              window.location.href = buttonLink;
            }}
          >
            {buttonText}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardProject;
