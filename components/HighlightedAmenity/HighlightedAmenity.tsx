import { ReactElement, SVGProps } from "react";
import style from "./highlightedAmenity.module.scss";

type HighlightedAmenityProps = {
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  name: string;
};

export const HighlightedAmenity = ({
  icon: Icon,
  name,
}: HighlightedAmenityProps) => {
  return (
    <div className={style.amenityBox}>
      <Icon width="32px" height="32px" />
      <h4 className={style.amenityBox__name}>{name}</h4>
    </div>
  );
};
