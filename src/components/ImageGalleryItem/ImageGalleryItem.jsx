export default function ImageGalleryItem({
  previewUrl,
  imageUrl,
  onClickImage,
}) {
  return (
    <li className="ImageGalleryItem" onClick={e => onClickImage(e)}>
      <img
        src={previewUrl}
        alt=""
        className="ImageGalleryItem-image"
        data-url={imageUrl}
        width="150"
      />
    </li>
  );
}
