import React, { useState } from 'react'
import './MovieRow.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


function MovieRow({title, items}) {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0 ) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 150;
        if((window.innerWidth - listWidth ) > x) {
            x = (window.innerWidth - listWidth) - 60;
        }
        setScrollX(x);
    }
    
    return (
        <div className="movie-row">
            <h2 className="movie-row-title">{title}</h2>
            <div className="movie-row-left" onClick={handleLeftArrow}> 
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movie-row-right" onClick={handleRightArrow}> 
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="movie-row-listarea">
                <div className="movie-row-list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results && items.results.map((movie, index) => (
                        <div key={index}  className="movie-row-item">
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow
