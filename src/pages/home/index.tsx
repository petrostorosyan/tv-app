import FilmInfo from "../../components/filmInfo";
import FilmsCarousel from "../../components/filmsCarousel";
import Sidebar from "../../components/sidebar";
import "./styles.css";
import { trendingNow } from "../../data/trendingData";
import { useEffect, useMemo, useState } from "react";

const lastViewedMovieId = "lastViewedMovieId";

const HomePage = () => {
  const [activeId, setActiveId] = useState<number>(trendingNow[0].id);
  const [showVideo, setShowVideo] = useState(false);
  const [worksVideoPlayer, setWorksVideoPlayer] = useState(false);

  const sortedTrendingData = useMemo(() => {
    const lastId = sessionStorage.getItem(lastViewedMovieId);
    const parsedId = lastId ? parseInt(lastId, 10) : null;

    if (!parsedId) return [...trendingNow];

    const lastViewed = trendingNow.find((item) => item.id === parsedId);
    const rest = trendingNow.filter((item) => item.id !== parsedId);

    return lastViewed ? [lastViewed, ...rest] : [...trendingNow];
  }, [activeId]);

  useEffect(() => {
    const lastId = sessionStorage.getItem(lastViewedMovieId);
    const parsedId = lastId ? parseInt(lastId, 10) : null;

    if (parsedId && trendingNow.some((item) => item.id === parsedId)) {
      setActiveId(parsedId);
    } else {
      setActiveId(trendingNow[0].id);
    }
  }, []);

  const carouselData = useMemo(() => {
    return trendingNow.map((item) => ({
      id: item.id,
      title: item.title,
      coverImage: item.coverImage,
    }));
  }, []);

  const handleSetActiveId = (id: number) => {
    sessionStorage.setItem(lastViewedMovieId, id.toString());
    setActiveId(id);
    setWorksVideoPlayer(true);
  };

  const activeFilmData = useMemo(() => {
    return (
      sortedTrendingData.find((item) => item.id === activeId) ||
      sortedTrendingData[0]
    );
  }, [activeId, sortedTrendingData]);

  useEffect(() => {
    if (worksVideoPlayer) {
      setShowVideo(false);
      const timeout = setTimeout(() => setShowVideo(true), 2000);
      return () => clearTimeout(timeout);
    }
  }, [activeId, worksVideoPlayer]);

  // useEffect(() => {
  //   console.log(activeId, "idddd");
  //   console.log(activeFilmData, "activeFilmData");
  // }, [activeId]);

  return (
    <div className="home-page-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div
        className="about-films-info"
        style={{
          backgroundImage: showVideo ? "" : `url(${activeFilmData.bgImage})`,
        }}
      >
        <FilmInfo info={activeFilmData} />
        {showVideo && (
          <video
            // controls
            autoPlay={true}
            muted
            loop
            playsInline
            src={activeFilmData.videoUrl}
            className="home-page-video-player"
          />
        )}
      </div>

      <div className="films-carousel">
        <FilmsCarousel
          data={carouselData}
          onChangeActiveId={handleSetActiveId}
        />
      </div>
    </div>
  );
};

export default HomePage;
