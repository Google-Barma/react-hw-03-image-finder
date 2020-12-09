import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ galleryPhotos }) {
  return (
    <ul className="ImageGallery">
      {galleryPhotos.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          previewUrl={webformatURL}
          imageUrl={largeImageURL}
        />
      ))}
    </ul>
  );
}
