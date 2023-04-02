import PhotoAlbum, { Photo, RenderPhoto } from "react-photo-album";

const renderPhoto: RenderPhoto = ({ imageProps }) => (
  <img {...imageProps} style={{ ...imageProps.style, borderRadius: "24px" }} />
);

export const Gallery = ({ photos }: { photos: Photo[] }) => {
  return (
    <div className="miniPhotoAlbum">
      <h2 className="miniPhotoAlbum__heading">Gallery</h2>
      <PhotoAlbum layout="rows" photos={photos} renderPhoto={renderPhoto} />
    </div>
  );
};
