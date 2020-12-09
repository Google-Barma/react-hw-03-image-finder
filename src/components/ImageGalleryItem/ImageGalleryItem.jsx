export default function ImageGalleryItem({ previewUrl, imageUrl }) {
  return (
    <li className="ImageGalleryItem">
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
