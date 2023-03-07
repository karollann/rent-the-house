import Modal from "react-modal";
import { Amenity, amenityCardData } from "../../data";
import { AmenityCard } from "../AmenityCard/AmenityCard";
import { CloseButton } from "../CloseButton/CloseButton";

import style from "./amenitiesModal.module.scss";

type AmenitiesModalProps = {
  closeModal: () => void;
  modalIsOpen: boolean;
};

type AmenityModalCardProps = {
  heading: string;
  amenities: Amenity[];
};

const AmenityModalCard = ({ heading, amenities }: AmenityModalCardProps) => {
  return (
    <div>
      <h3 className={style.amenityGroupContainer__heading}>{heading}</h3>
      <ul className={style.amenityGroupContainer__list}>
        {amenities.map((amenity) => (
          <AmenityCard
            icon={amenity.icon}
            name={amenity.name}
            containerStyle={style.amenityCard}
            headingStyle={style.amenityCard__name}
            key={amenity.name}
          />
        ))}
      </ul>
    </div>
  );
};

export const AmenitiesModal = ({
  closeModal,
  modalIsOpen,
}: AmenitiesModalProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel="Amenities Modal"
      onRequestClose={closeModal}
      bodyOpenClassName={style["modal__body--open"]}
      overlayClassName={style["modal__overlay"]}
      className={style["modal__content"]}
    >
      <div className={style.modalHeader}>
        <CloseButton close={closeModal} />
      </div>
      <h2 className={style.modalTitle}>What we offer</h2>
      <AmenityModalCard heading="Views" amenities={amenityCardData.views} />
      <AmenityModalCard
        heading="Bathroom"
        amenities={amenityCardData.bathroom}
      />
      <AmenityModalCard heading="Bedroom" amenities={amenityCardData.bedroom} />
      <AmenityModalCard
        heading="Entertainment"
        amenities={amenityCardData.entertainment}
      />
      <AmenityModalCard
        heading="Home safety"
        amenities={amenityCardData.safety}
      />
      <AmenityModalCard
        heading="Kitchen and dining"
        amenities={amenityCardData.kitchen}
      />
      <AmenityModalCard heading="Heating" amenities={amenityCardData.heating} />
      <AmenityModalCard heading="Outdoor" amenities={amenityCardData.outdoor} />
      <AmenityModalCard
        heading="Services"
        amenities={amenityCardData.services}
      />
      <AmenityModalCard
        heading="Not Included"
        amenities={amenityCardData.notIncluded}
      />
    </Modal>
  );
};
