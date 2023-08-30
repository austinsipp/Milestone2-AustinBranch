//import homeImage from "../images/home-image.png" 


const Home = () =>{
    return <div className="home-container">
        {/*<img src={homeImage} alt="Nutritious foods" className="homeImage"/>*/}
        <img src={"../images/home-image.png"} alt="Nutritious foods" className="homeImage"/>
        <div className="intro">
            <h1>WELCOME!</h1>
            <h3>The world's #1 food and calorie tracking website.
            Let's get you started on a journey toward an healthier lifestyle.</h3>
        </div>
    </div>
}


export default Home