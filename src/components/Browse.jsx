import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  let showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
     {showGptSearch ? <GptSearch/> :
      <>
     <MainContainer/>
     <SecondaryContainer/>
     </>}
    </div>
  );
};

export default Browse;
