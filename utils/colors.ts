import ColorThief from 'colorthief';

export const getImageColor = (imgSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imgSrc;
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      const colorThief = new ColorThief();
      const color = colorThief.getColor(img);
      resolve(`rgb(${color.join(',')})`);
    };

    img.onerror = (error) => {
      reject(error);
    };
  });
};
