import MyProfile from "../img/my_profile.jpg";

function Home() {
    return (
      <div className="Home" id="home">
        <img src={MyProfile} alt="profile picture"/>
        <h1>Hello <br></br> I'm Estrellita Miranda</h1>
        <section>
          <p>
            "Your time is limited, so don’t waste it living someone else’s life.<br></br>
            Don’t be trapped by dogma – which is living with the results of other people’s thinking."
          </p><br></br>
          <span>– Steve Jobs</span>
        </section>
      </div>
    );
  }
  
export default Home;
  