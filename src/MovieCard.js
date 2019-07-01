import React, { Component, Children } from 'react';

class MovieCard extends Component {
    render() {

        console.log(this.props)
        const moviesdata = this.props;
        return (

            <div>
                {
                    Object.keys(moviesdata.movies).map((e, i) => {
                        return (
                            <div key={i} >
                                <h2>{moviesdata.movies[e].name}</h2><p>Liked By:</p>
                                <ul>{
                                    moviesdata.profiles.map((profile) => {
                                        if (profile.favoriteMovieID == moviesdata.movies[e].id) {
                                            return (
                                                <li key={profile.id}>
                                                    {profile.userID}
                                                    {
                                                        Object.keys(moviesdata.users).map((e, i) => {
                                                            if(moviesdata.users[e].id==profile.userID){
                                                                return moviesdata.users[e].name
                                                            }
                                                        })
                                                    }
                                                </li>
                                            )
                                        }

                                    })

                                }
                                </ul>
                            </div>
                        )
                    })

                }
            </div>

        )

    }
}
export default MovieCard;