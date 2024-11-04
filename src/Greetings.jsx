import propTypes from 'prop-types'

function Greeting(props){
  const loggedIn =
    <h4 className="logged-in">Welcome, {props.username} </h4>
  
  const notLoggedIn =
    <h4 className="not-logged-in">Please loggin</h4>
  
  return(
    props.isLoggedIn ? loggedIn:notLoggedIn
    )
}
Greeting.propTypes ={
  username:propTypes.string,
  isLoggedIn:propTypes.bool,
}

Greeting.defaultProps={
  username: "Guest",
  isLoggedIn: false,
}
export default Greeting
