import React, {Component, Children} from 'react';

class FavoriteMovies extends Component{
	render(){
    	console.log(this.props);
      
      	return(
          
          <p>
          {
            
            this.props.profiles.map((profile)=>{
         
        return(
          
            
          <span key={profile.id}>
			{profile.id}
            {this.props.users[profile.userID].userName};
          </span>
			
        	)})
			
            
          }


          </p>
        )
    }
}
export default FavoriteMovies;