const Profile = () => {
  return (
    <div className="page-container">
      <div className="mobile-container profile-container">
        {/* Account Settings Header */}
        <div className="profile-settings-header">
          <h1 className="account-settings-title">Account Settings</h1>
        </div>

        {/* Profile Content */}
        <div className="profile-content">
          <div className="profile-section">
            {/* Profile Info Row */}
            <div className="profile-info-row">
              <div className="profile-image-container">
                <img
                  src="/profile-image.webp"
                  alt="Profile"
                  className="profile-img"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='76' height='76' viewBox='0 0 76 76'%3E%3Ccircle cx='38' cy='38' r='38' fill='%23E5E5E5'/%3E%3Ctext x='38' y='42' text-anchor='middle' fill='%23999' font-size='12'%3EProfile%3C/text%3E%3C/svg%3E"
                  }}
                />
                <img
                  src="/purple-icon.webp"
                  alt="Camera"
                  className="profile-icon"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='10' fill='%236C25FF'/%3E%3C/svg%3E"
                  }}
                />
              </div>

              <div className="profile-text-info">
                <h2 className="profile-name">Mary Doe</h2>
                <p className="profile-email">Mary@Gmail.com</p>
              </div>
            </div>

            {/* Description */}
            <p className="profile-description">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore
              Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>

          {/* Dashed Divider */}
          <div className="profile-divider-dashed"></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
