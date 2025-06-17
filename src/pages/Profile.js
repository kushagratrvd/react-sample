const Profile = () => {
  return (
    <div className="page-container">
      <div className="mobile-container profile-container">
        <div className="profile-header">
          <div className="profile-image">
            <img src="/profile-image.png" alt="Profile" className="profile-img" />
          </div>

          <div className="profile-info">
            <h2 className="profile-name">Mary Doe</h2>
            <p className="profile-email">Mary@Gmail.com</p>
          </div>

          <p className="profile-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className="profile-divider"></div>

        <div className="profile-settings">
          <h3 className="settings-title">Account Settings</h3>
        </div>
      </div>
    </div>
  )
}

export default Profile
