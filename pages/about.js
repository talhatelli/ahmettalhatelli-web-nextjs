import Navigation from "./component/header/navigation";
import Head from "next/head";

function About() {
  return (
    <div>
      <Navigation />
      <h1>Öz Biyografi</h1>
      <p>
        Merhabalar <br />
        Adım Ahmet Talha soyadım Telli 21 yaşındayım Üniversite 3. sınıfım. 2001
        de Malatya Battalgazi Alişar körmolla köyünde doğdum. İlk okul hayatımı
        körmolla ilk okulunda bitirdim .Orta okul sürecimi Şehit Servet Aktaş
        orta okulu ve 91.000 Dev Öğrenci orta okulunda bitirdim. Liseyi
        Sadrettin Konevi AİHL den bitirdim .Üniversite hayatımı da Kahramanmaraş
        Sütçü İmam Üniversite sinde devam ediyorum.
      </p>
    </div>
  );
}
export default About;
