import Navbar from "../components/Navbar";
import styled from "styled-components";

// styled components instead of MUI for profile page
const Avatar = styled.img`
  border-radius: 1rem;
  border: ${(props) => props.pizza};
  height: 30vh;
  margin-left: 1rem;
`;

const UserCard = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid var(--main-orange);
  border-radius: ${(props) => props.radius || ".5rem"};
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 30vw;
  height: 40vh;
`;

const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 2rem;
`;

const Profile = (props) => {
  return (
    <>
      <Navbar mode={props.mode} />
      <UserCard>
        <Avatar src="/images/Gordon.jpg" alt="avatar" pizza="3px solid green" />
        <UserData>
          <h4>
            <span className="profile-info">Name:</span> Gordon Ramsay
          </h4>
          <h4>
            <span className="profile-info">Birthday:</span> 08 November 1966
          </h4>
          <h4>
            <span className="profile-info">Favorite Food:</span> Greasy Fast
            Food
          </h4>
        </UserData>
      </UserCard>
    </>
  );
};

export default Profile;
