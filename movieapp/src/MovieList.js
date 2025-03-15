import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
    constructor() {
        super() //calling the extended class details
        //as state is a build in object
        this.state = {
            movies: [
                {
                title: "Justice League",
                plot: "Super natural powers shown in the movie.",
                poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jRMZi3YlWRw3sjaBCE1itxz8cY9Q2P9W8A&s',
                rating: 8.9,
                price: 199,
                stars: 0,
                fav: false,
                isInCart: false,
                },
                {
                title: "The Avengers",
                plot: "Super natural powers shown in the movie.",
                poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9U2iWm-3j0JtR0vaUOgln1_DHqRxikTU0VQ&s',
                rating: 10.0,
                price: 399,
                stars: 0,
                fav: false,
                isInCart: false,
                },
                {
                title: "Harry Potter",
                plot: "Magical World Movie From Reknowned Novel",
                poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7J1-uJlPYBUmwRrt_fW5OLrtWVQ179oP6ow&s',
                rating: 9.9,
                price: 99,
                stars: 0,
                fav: false,
                isInCart: false,
                },
            ]  
        }
    }

    //we pass movie to know which movie we are changing
    //We are getting the movie from the child.
    handleIncStar = (movie) => {
        console.log("Called Parent Handle Inc Star for movie", movie.title);
        
        const {movies} = this.state;
        const mid = movies.indexOf(movie);

        if(movies[mid].stars >= 5){
            return;
        }
        movies[mid].stars += 0.5;

        this.setState({
            movies: movies
        })
    }
    

    render() {
        const {movies} = this.state;
       return(
        <>
            {movies.map((movie)=> <MovieCard movies = {movie} addStars = {this.handleIncStar}/>)}
        </>
       ) 
    }
}

export default MovieList;

