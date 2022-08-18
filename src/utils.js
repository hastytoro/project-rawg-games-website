// Replace and resize media
export const resizeImage = (imagePath, size) => {
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("media/games/", `media/resize/${size}/-/games/`);
  // console.log(image);
  return image;
};
