import IconClose from "../../components/Icons/IconClose";
import style from "./closeButton.module.scss";

type CloseButtonProps = {
  close: () => void;
};

export const CloseButton = ({ close }: CloseButtonProps) => {
  return (
    <div className={style.closeButtonContainer}>
      <button
        onClick={close}
        className={style.closeButtonContainer__closeButton}
      >
        <IconClose width="24px" height="24px" />
      </button>
    </div>
    // <button onClick={close} className={style.closeButton}>
    //   <IconClose width="24px" height="24px" />
    // </button>
  );
};
