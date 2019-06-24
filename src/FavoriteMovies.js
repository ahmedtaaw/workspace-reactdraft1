import React, { Component, Children } from 'react';

class FavoriteMovies extends Component {
  render() {
    console.log(this.props);

    return (

      <ul>
        {

          this.props.profiles.map((profile) => {

            return (


              <li key={profile.id}>
                {this.props.users[profile.userID].name}'s favorite movie is  {this.props.movies[profile.favoriteMovieID].name}

              </li>
          

            )
          })


        }


      </ul>
    )
  }
}
export default FavoriteMovies;