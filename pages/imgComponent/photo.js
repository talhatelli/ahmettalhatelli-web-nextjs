import profilePicture from "./profil.jpg";
import Image from "next/image";

function Photo() {
  return (
    <div className="right">
      <Image
        width={250}
        height={250}
        className="profilePicture"
        src={profilePicture}
        alt="Profile picture"
      />
    </div>
  );
}
export default Photo;
