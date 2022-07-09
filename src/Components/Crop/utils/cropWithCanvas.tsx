export function teste(imageUrl: string, crop, zoom: number) {
  const canvas = document.createElement("canvas");
  canvas.height = 113;
  canvas.width = 113;

  const context = canvas.getContext("2d");
  if (context) {
    context.imageSmoothingQuality = "low";
  }

  const image = new Image();

  let sx: number = 1920;
  let sy: number = 1040;

  if (!image) return;

  image.onload = function () {
    sx = this.width;
    sy = this.height;
    console.log(sx, sy);
  };

  image.src = imageUrl;

  const divisor = Math.max(sx, sy) / 135;

  context?.drawImage(
    image,
    crop.x,
    crop.y,
    sx,
    sy,
    0,
    0,
    (sx / divisor) * zoom,
    (sy / divisor) * zoom
  );

  const base64Image = canvas.toDataURL("image/jpeg");

  return base64Image;
}
