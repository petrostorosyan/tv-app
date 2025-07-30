import squidGames from "../assets/images/https_specials-1.png";
import squidGamesBg from "../assets/images/squid-games.jpg"
import sanAndreas from "../assets/images/https_specials-2.png";
import sanAndreasBg from "../assets/images/san-andreas.jpg";
import goodDoctor from "../assets/images/https_specials-3.png";
import goodDoctorBg from "../assets/images/good-doctor.png";
import redNotice from "../assets/images/https_specials-4.png";
import redNoticeBg from "../assets/images/red-notice.jpg";
import juliePhantoms from "../assets/images/https_specials-5.png";
import juliePhantomsBg from "../assets/images/julie-phantoms.jpg";
import hannibal from "../assets/images/https_specials-6.png";
import hannibalBg from "../assets/images/hannibal.jpg";
import sherlock from "../assets/images/https_specials-7.png";
import sherlockBg from "../assets/images/sherlock.jpg";
import kate from "../assets/images/https_specials-8.png";
import kateBg from "../assets/images/kate.jpg";
import videoUrl from "../assets/videos/SampleVideo_1280x720_1mb.mp4"

export interface ITrendingNow {
    id: number;
    title: string;
    coverImage: string;
    bgImage: string,
    titleImage: string;
    date: string;
    releaseYear: string;
    mpaRating: string;
    category: string;
    duration: string;
    videoUrl: string;
    description: string;
}


export const trendingNow: ITrendingNow[] = [
    {
        id: 1,
        title: "Squid Games",
        coverImage: squidGames,
        bgImage: squidGamesBg,
        titleImage: "",
        date: "2021-10-24T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "TV Show",
        duration: "2000",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 2,
        title: "San Andreas",
        coverImage: sanAndreas,
        bgImage: sanAndreasBg,
        titleImage: "",
        date: "2021-10-12T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "Movie",
        duration: "2300",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 3,
        title: "The Good Doctor",
        coverImage: goodDoctor,
        bgImage: goodDoctorBg,
        titleImage: "",
        date: "2021-10-11T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "Movie",
        duration: "6000",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 4,
        title: "Red Notice",
        coverImage: redNotice,
        bgImage: redNoticeBg,
        titleImage: "",
        date: "2021-10-10T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "Movie",
        duration: "4000",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 5,
        title: "Julie Phantom",
        coverImage: juliePhantoms,
        bgImage: juliePhantomsBg,
        titleImage: "",
        date: "2021-10-15T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "TV Show",
        duration: "5300",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 6,
        title: "Hannibal",
        coverImage: hannibal,
        bgImage: hannibalBg,
        titleImage: "",
        date: "2021-10-22T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "TV Show",
        duration: "1200",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 7,
        title: "Sherlock",
        coverImage: sherlock,
        bgImage: sherlockBg,
        titleImage: "",
        date: "2021-11-22T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "Movie",
        duration: "4500",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 8,
        title: "Kate",
        coverImage: kate,
        bgImage: kateBg,
        titleImage: "",
        date: "2021-07-14T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "TV Show",
        duration: "2000",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 9,
        title: "Squid Games",
        coverImage: squidGames,
        bgImage: squidGamesBg,
        titleImage: "",
        date: "2021-04-03T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "Movie",
        duration: "2300",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 10,
        title: "San Andreas",
        coverImage: sanAndreas,
        bgImage: sanAndreasBg,
        titleImage: "",
        date: "2021-11-23T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "Movie",
        duration: "6000",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 11,
        title: "The Good Doctor",
        coverImage: goodDoctor,
        bgImage: goodDoctorBg,
        titleImage: "",
        date: "2021-11-04T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "TV Show",
        duration: "1200",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 12,
        title: "Red Notice",
        coverImage: redNotice,
        bgImage: redNoticeBg,
        titleImage: "",
        date: "2021-03-03T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "Movie",
        duration: "3400",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 13,
        title: "Tulie Phantom",
        coverImage: juliePhantoms,
        bgImage: juliePhantomsBg,
        titleImage: "",
        date: "2021-12-30T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "Movie",
        duration: "6500",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 14,
        title: "Hannibal",
        coverImage: hannibal,
        bgImage: hannibalBg,
        titleImage: "",
        date: "2021-07-10T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "Movie",
        duration: "5000",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 15,
        title: "Sherlock",
        coverImage: sherlock,
        bgImage: sherlockBg,
        titleImage: "",
        date: "2021-05-14T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "Movie",
        duration: "1300",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 16,
        title: "Kate",
        coverImage: kate,
        bgImage: kateBg,
        titleImage: "",
        date: "2021-03-25T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "Movie",
        duration: "5000",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 17,
        title: "Squid Games",
        coverImage: squidGames,
        bgImage: squidGamesBg,
        titleImage: "",
        date: "2021-08-24T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "TV Show",
        duration: "400",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 18,
        title: "San Andreas",
        coverImage: sanAndreas,
        bgImage: sanAndreasBg,
        titleImage: "",
        date: "2021-07-21T12:16:50.894556",
        releaseYear: "2021",
        mpaRating: "18+",
        category: "TV Show",
        duration: "1200",
        videoUrl: videoUrl,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
];
