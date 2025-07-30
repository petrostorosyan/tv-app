import homeIcon from "../assets/images/icons/home.png";
import searchIcon from "../assets/images/icons/search-icon.png";
import tvShows from "../assets/images/icons/tv-shows.png";
import movies from "../assets/images/icons/movies.png";
import genres from "../assets/images/icons/genres.png";
import watchLater from "../assets/images/icons/watch-later.png";

interface INavItem {
  id: number;
  iconSource: string;
  title: string;
}

interface IFooterLink {
  id: number;
  link: string;
  title: string;
}


export const navItems: INavItem[] = [
  {
    id: 1,
    iconSource: searchIcon,
    title: "Search",
  },
  {
    id: 2,
    iconSource: homeIcon,
    title: "Home",
  },
  {
    id: 3,
    iconSource: tvShows,
    title: "TV Shows",
  },
  {
    id: 4,
    iconSource: movies,
    title: "Movies",
  },
  {
    id: 5,
    iconSource: genres,
    title: "Genres",
  },
  {
    id: 6,
    iconSource: watchLater,
    title: "Watch Later",
  }
];

export const sidebarFooterLinks: IFooterLink[] = [
  {
    id: 1,
    link: "",
    title: "LANGUAGE"
  },
  {
    id: 2,
    link: "",
    title: "GET HELP"
  },
  {
    id: 3,
    link: "",
    title: "EXIT"
  },
]