import '../App.css';
import Navbar from '../components/Navbar';

const Profile = () => {
  return(
    <>
    <Navbar />
      <section className='user-card'>
        <img src="/images/avatar-default.png" className="avatar" alt="avatar" />
        <div style={{
          alignItems: "flex-start",
          display: "flex", 
          flexDirection: "column"
          }}
        >
          <h4><span className="profile-info">Name:</span> J. Smith</h4> 
          <h4><span className="profile-info">Birthday:</span> Today</h4>
          <h4><span className="profile-info">Favorite Food:</span> Pizza</h4>
        </div>
      </section>
    </>
  );
}

export default Profile;
