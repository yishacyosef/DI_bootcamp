import {Link} from 'react-router-dom'
const Home = (props) => {
  return(
    <>
      <h1>Home</h1>
      <button onClick={()=>props.changePage('about')}> Go to About </button>
      <Link to="/about" > About </Link> |
    </>
  )
}
export default Home
