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
  return (
    <div className={style.showMoreContainer}>
      <button className={style.showMoreButton} onClick={open}>
        <p
          className={style.showMoreButton__text}
        >{`Show all ${numberOfItems} ${item}`}</p>
      </button>
    </div>
  );
};
