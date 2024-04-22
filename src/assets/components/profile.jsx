import React from 'react';

const ProfilePicture = ({ src, altText }) => {
  return (
    <div className="profile-picture-container">
      <img src={src} alt={altText} className="profile-picture" />
    </div>
  );
};

export default ProfilePicture;
