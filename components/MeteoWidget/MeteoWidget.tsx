import { useEffect, useState } from "react";
import { meteoWidgetIcons } from "@/data";
import IconWind from "../../components/Icons/IconsMeteo/IconWind";
import IconMapPin from "../../components/Icons/IconMapPin";
import { useTranslation } from "next-i18next";
import { language } from "@/utils";

import styles from "./meteoWidget.module.scss";

type DataType = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: { country: string; sunrise: number; sunset: number };
  timezone: number;
  visibility: number;
  weather: [{ id: number; main: string; description: string; icon: string }];

  wind: { speed: number; deg: number; gust: number };
};

const getMeteoData = async ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: any) => void;
  onError: (err: string) => void;
}) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=54.04&lon=23.36&exclude=minutely,hourly,daily,alerts&units=metric&appid=fa70d275ae14b754a28548e31f8b3047&lang=${language}`
    );
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    let responseData = await response.json();
    onSuccess(responseData);
  } catch (err: unknown) {
    const message =
      err instanceof Error && err.message ? err.message : "Error has occurred!";
    onError(message);
  }
};

export const MeteoWidget = () => {
  const [data, setData] = useState<DataType | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    setIsLoading(true);

    getMeteoData({
      onSuccess: (data) => {
        setData(data);
        setError("");
        setIsLoading(false);
      },
      onError: (errorMessage) => {
        setError(errorMessage);
        setData(null);
        setIsLoading(false);
      },
    });
  }, []);

  if (isLoading) return null;

  if (error || !data) return <p>Can not display weather</p>;

  const iconObject = meteoWidgetIcons.find(
    (icon) => icon.iconCode === data?.weather[0].icon
  );

  const Icon = iconObject?.icon;

  const currentTemp = Math.round(data.main.temp);
  const feelsLikeTemp = Math.round(data.main.feels_like);
  const windSpeed = Math.round(data.wind.speed * 10) / 10;

  const splittedWeatherDesc = data?.weather[0].description.split(" ");
  const weatherDescUpperCased = splittedWeatherDesc
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");

  return (
    <div className={styles.meteoWidget}>
      <div className={styles.meteoWidget__locationContainer}>
        <IconMapPin width="32px" height="32px" />
        <h2 className={styles.meteoWidget__locationHeading}>Giby</h2>
      </div>
      <div className={styles.meteoWidget__infoContainer}>
        <div className={styles.meteoWidget__tempContainer}>
          {Icon && <Icon width="32px" height="32px" color="black" />}
          <p className={styles.meteoWidget__temp}>{currentTemp} °C</p>
        </div>
        <div className={styles.meteoWidget__weatherDescriptionContainer}>
          <p className={styles.meteoWidget__weatherDescription}>
            {weatherDescUpperCased}
          </p>
          <p className={styles.meteoWidget__feelsLike}>
            {t("feelsLike")} {feelsLikeTemp} °C
          </p>
          <div className={styles.meteoWidget__windContainer}>
            <IconWind width="32px" height="32px" color="#222222" />
            <p className={styles.meteoWidget__windSpeed}>{windSpeed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};
