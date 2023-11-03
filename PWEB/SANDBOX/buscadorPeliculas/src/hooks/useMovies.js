import { useState, useRef, useMemo, useCallback } from 'react';
import { searchMovies } from '../services/movies.service';

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({search}) => {
    if(search === previousSearch.current) return;

    try {
      setLoading(true);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);  
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
  }, []); 

  /* const sortedMovies = sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
    : movies; */

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
      : movies;
  }, [sort, movies]); 

  return { movies: sortedMovies, getMovies, loading };
}