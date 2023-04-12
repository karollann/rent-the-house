import { useState } from "react";
import PhotoAlbum, { Photo, RenderPhoto } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { photos as allPhotos } from "@/data";

import styles from "./gallery.module.scss";
import { MoreButton } from "../MoreButton/MoreButton";

const renderPhoto: RenderPhoto = ({ imageProps }) => (
  <img {...imageProps} style={{ ...imageProps.style, borderRadius: "24px" }} />
);

export const Gallery = ({ photos }: { photos: Photo[] }) => {
  const [index, setIndex] = useState(-1);

  const slide = allPhotos.map((photo) => ({ ...photo, srcSet: photo.images }));

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__headingContainer}>
        <h2 className={styles.gallery__heading}>Gallery</h2>
        <MoreButton onClick={() => setIndex(0)} text="See more" />
      </div>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        renderPhoto={renderPhoto}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slide}
      />
    </div>
  );
};
