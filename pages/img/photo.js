import profilePicture from './profil.jpg';
import Image from 'next/image';

function Photo() {
  return (
    <div className="photo-wrapper">
      <Image width={250} height={250} className="profile-picture" src={profilePicture} alt="Profile picture" />
    </div>
  );
}
export default Photo;
