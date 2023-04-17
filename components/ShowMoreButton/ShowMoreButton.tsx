import { useTranslation } from "next-i18next";
import style from "./showMoreButton.module.scss";

type ShowMoreButtonProps = {
  open: () => void;
  numberOfItems: number;
  item: string;
};

export const ShowMoreButton = ({
  open,
  numberOfItems,
  item,
}: ShowMoreButtonProps) => {
  const { t } = useTranslation();

  return (
    <div className={style.showMoreContainer}>
      <button className={style.showMoreButton} onClick={open}>
        <p className={style.showMoreButton__text}>
          {t("showAll", { numberOfItems, item })}
        </p>
      </button>
    </div>
  );
};
