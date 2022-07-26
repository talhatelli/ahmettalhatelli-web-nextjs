import "remixicon/fonts/remixicon.css";
import Link from "next/link";

export default function IconLink() {
  return (
    <div>
      <link
        href=" https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css "
        rel=" stil sayfası "
      />
      <div className="social-links">
        <Link href="https://github.com/talhatelli">
          <div>
            <i title="Github" className="ri-github-fill"></i>
          </div>
        </Link>
        <Link href="https://www.instagram.com/ahmet_talha_telli/">
          <div>
            {" "}
            <i title="Instegram" className="ri-instagram-line"></i>
          </div>
        </Link>

        <Link href="https://www.linkedin.com/in/ahmet-talha-telli-09473a230/">
          <div>
            <i title="Linkedin" className="ri-linkedin-box-fill"></i>
          </div>
        </Link>
        <Link href="https://twitter.com/TalhaTelli7">
          <div>
            <i title="Twitter" className="ri-twitter-line"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}
