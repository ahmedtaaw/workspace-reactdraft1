import React, {Component} from 'react';

class FavoriteMovies extends Component{
	render(){
    	console.log(this.props);
      	return(
          
          <ol>
          {
            
            this.props.profiles.map((profile)=>(
          		<li key={profile.id}>
					{profile.id}
          			</li>
        	))
			
            
          }

          </ol>
        )
    }
}
export default FavoriteMovies;