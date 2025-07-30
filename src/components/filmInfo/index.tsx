import "./styles.css";
import titleImg from "../../assets/images/FeaturedTitleImage.png";
import playIcon from "../../assets/images/icons/play-icon.png";
import { formatDuration } from "../../utils/formatDuration";
import type { FC } from "react";

export interface IFilmInfo {
  id: number;
  title: string;
  coverImage: string;
  titleImage: string;
  date: string;
  releaseYear: string;
  mpaRating: string;
  category: string;
  duration: string;
  videoUrl: string;
  description: string;
}

interface FilmInfoProps {
  info: IFilmInfo;
}

const FilmInfo: FC<FilmInfoProps> = ({ info }) => {
  return (
    <div className="film-info-container">
      <p>{info.category}</p>
      {info.titleImage ? (
        <img className="film-title-img" src={titleImg} alt="title-image" />
      ) : (
        <h3 className="film-title">{info.title}</h3>
      )}

      <div className="film-information-box">
        <span>{info.releaseYear}</span>
        <span>{info.mpaRating}</span>
        <span>{formatDuration(info.duration)}</span>
      </div>
      <p>{info.description}</p>
      <div className="buttons-box">
        <button>
          <img src={playIcon} alt="play-icon" />
          <span>Play</span>
        </button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default FilmInfo;