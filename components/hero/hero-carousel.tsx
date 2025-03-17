import { Button, Div } from '@stylin.js/elements';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Div
      zIndex="2"
      width="100%"
      height="100%"
      overflow="hidden"
      position="relative"
    >
      <Div
        display="flex"
        height="400px"
        alignItems="center"
        position="relative"
        justifyContent="center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </Div>
      <Div
        zIndex="1"
        gap="10px"
        left="50%"
        bottom="20px"
        display="flex"
        position="absolute"
        transform="translateX(-50%)"
      >
        {children.map((_, index) => (
          <Button
            key={index}
            width="10px"
            height="10px"
            opacity="0.8"
            border="none"
            cursor="pointer"
            borderRadius="50%"
            transition="background 0.3s ease"
            onClick={() => setCurrentIndex(index)}
            background={currentIndex === index ? '#F6C853' : '#FFFFFF1A'}
          />
        ))}
      </Div>
    </Div>
  );
};

export default Carousel;
