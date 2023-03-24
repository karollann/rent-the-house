import { ReactElement, SVGProps } from "react";

type AmenityCardProps = {
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  name: string;
  containerStyle: string;
  headingStyle: string;
};

export const AmenityCard = ({
  icon: Icon,
  name,
  containerStyle,
  headingStyle,
}: AmenityCardProps) => {
  return (
    <li className={containerStyle}>
      <Icon width="32px" height="32px" />
      <h4 className={headingStyle}>{name}</h4>
    </li>
  );
};
