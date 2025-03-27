import ColorThief from 'colorthief';

export const getImageColor = (imgSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imgSrc;

    img.onload = () => {
      try {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img);
        resolve(`rgb(${color.join(',')})`);
      } catch (error) {
        reject('Error');
      }
    };

    img.onerror = (error) => reject(error);
  });
};

export const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
