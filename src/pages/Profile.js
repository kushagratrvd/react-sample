const Profile = () => {
  return (
    <div className="page-container">
      <div className="mobile-container profile-container">
        {/* Account Settings Header */}
        <div className="profile-settings-header">
          <h1 className="account-settings-title">Account Settings</h1>
        </div>

        {/* Profile Content with dashed border */}
        <div className="profile-content-with-border">
          <div className="profile-section">
            {/* Profile Info Row */}
            <div className="profile-info-row">
              <div className="profile-image-container">
                {/* Profile Image with SVG fallback */}
                <svg
                  className="profile-img"
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="38" cy="38" r="38" fill="#E5E5E5" />
                  <circle cx="38" cy="30" r="12" fill="#999999" />
                  <path d="M20 60c0-10 8-18 18-18s18 8 18 18" fill="#999999" />
                </svg>

                {/* Camera Icon */}
                <svg
                  className="profile-icon"
                  width="21"
                  height="23"
                  viewBox="0 0 21 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10.5" cy="11.5" r="10.5" fill="#6C25FF" />
                  <path d="M7 9h7v6H7V9z" fill="white" />
                  <circle cx="10.5" cy="12" r="2" fill="#6C25FF" />
                </svg>
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
        </div>
      </div>
    </div>
  )
}

export default Profile
