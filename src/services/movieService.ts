import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieHttpResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}

const URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovies = async (
  query: string,
  page: number,
): Promise<MovieHttpResponse> => {
  const response = await axios.get<MovieHttpResponse>(URL, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page, 
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });
  return response.data;
};

export const imgURL = "https://image.tmdb.org/t/p/w500";
