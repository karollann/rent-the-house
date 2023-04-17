import Modal from "react-modal";
import { Amenity, amenityCardData } from "../../data";
import { AmenityCard } from "../AmenityCard/AmenityCard";
import { CloseButton } from "../CloseButton/CloseButton";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation();
  return (
    <div>
      <h3 className={style.amenityGroupContainer__heading}>{heading}</h3>
      <ul className={style.amenityGroupContainer__list}>
        {amenities.map((amenity) => (
          <AmenityCard
            icon={amenity.icon}
            name={t(amenity.translationKeyName)}
            containerStyle={style.amenityCard}
            headingStyle={style.amenityCard__name}
            key={amenity.translationKeyName}
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
  const { t } = useTranslation();

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
      <AmenityModalCard
        heading={t("amenitiesModal.headings.views")}
        amenities={amenityCardData.views}
      />
      <AmenityModalCard
        heading={t("amenitiesModal.headings.bathroom")}
        amenities={amenityCardData.bathroom}
      />
      <AmenityModalCard heading="Bedroom" amenities={amenityCardData.bedroom} />
      <AmenityModalCard
        heading={t("amenitiesModal.headings.entertainment")}
        amenities={amenityCardData.entertainment}
      />
      <AmenityModalCard
        heading={t("amenitiesModal.headings.homeSafety")}
        amenities={amenityCardData.safety}
      />
      <AmenityModalCard
        heading={t("amenitiesModal.headings.kitchenAndDining")}
        amenities={amenityCardData.kitchen}
      />
      <AmenityModalCard
        heading={t("amenitiesModal.headings.heating")}
        amenities={amenityCardData.heating}
      />
      <AmenityModalCard
        heading={t("amenitiesModal.headings.outdoor")}
        amenities={amenityCardData.outdoor}
      />
      <AmenityModalCard
        heading={t("amenitiesModal.headings.services")}
        amenities={amenityCardData.services}
      />
      <AmenityModalCard
        heading={t("amenitiesModal.headings.notIncluded")}
        amenities={amenityCardData.notIncluded}
      />
    </Modal>
  );
};
