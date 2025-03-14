declare module 'colorthief' {
  type RGBColor = [number, number, number];

  class ColorThief {
    getColor(img: HTMLImageElement, quality?: number): RGBColor;
    getPalette(
      img: HTMLImageElement,
      colorCount?: number,
      quality?: number
    ): RGBColor[];
  }

  const colorThief: ColorThief;
  export default ColorThief;
}
