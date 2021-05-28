import React from 'react'
import { useHistory } from 'react-router-dom'

const About =() =>  {
    let history = useHistory();
    
        return <div>
            <h4>About</h4>
            <p>This is about page</p>
            <input type='button' value='Back' onClick={() => history.goBack()}/>
        </div>
  
}
export default About;