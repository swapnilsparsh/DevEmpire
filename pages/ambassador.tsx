import { Inter } from "next/font/google";
import Adobe from "../images/ambassador-img/Adobe.png";
import Aleo from "../images/ambassador-img/Aleo.png";
import Alexa from "../images/ambassador-img/Alexa.png";
import Apillon from "../images/ambassador-img/Apillon.png";
import APNAmbassador from "../images/ambassador-img/APNAmbassador.png";
import Appwrite from "../images/ambassador-img/Appwrite.png";
import Archway from "../images/ambassador-img/Archway.png";
import Auth0 from "../images/ambassador-img/Auth0ambassador.png";
import Card from "../components/card";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export default function AmbassadorPage() {
  return (
    <div className={`${inter.className} layout`}>
      <div className="ambassador-padding">
        <h1 className="ambassador-heading">Ambassador</h1>
        <p className="ambassador-description">
          Find the perfect program for you from 75+ ambassador and fellowship
          programs from all over the world.
        </p>
      </div>

      <div className="flex-alignment"
      >
        <Card
          img={Adobe}
          name={"Women-in-Technology"}
          description={
            "Adobe India strive towards creating gender equality by encouraging women."
          }
          url="https://research.adobe.com/adobe-india-women-in-technology-scholarship/"
        />
        <Card
          img={Aleo}
          name={"Aleo Ambassador Program"}
          description={
            "Aleo is a Layer 1 blockchain bringing privacy to the web."
          }
          url="https://aleo.org/post/the-ambassador-program-continues/"
        />
        <Card
          img={Alexa}
          name={"Alexa Student Influencer"}
          description={
            "A campus connect program that aims to form a network of like-minded students across India."
          }
          url="https://developer.amazon.com/en-IN/alexa/alexa-student-influencer/"
        />
        <Card
          img={Apillon}
          name={"Apillon Ambassador Program"}
          description={
            "A Web3 development platform empowering developers to build in the Polkadot ecosystem."
          }
          url="https://apillon.io/community"
        />
        <Card
          img={APNAmbassador}
          name={"APN Ambassador Program"}
          description={
            "A Web3 development platform empowering developers to build in the Polkadot ecosystem."
          }
          url="https://apillon.io/community"
        />
        <Card
          img={Appwrite}
          name={"Appwrite Heroes Program"}
          description={
            "The Appwrite Heroes is an exclusive group of developers who are experts in Appwrite."
          }
          url="https://appwrite.io/heroes"
        />
        <Card
          img={Archway}
          name={"Archway Ambassador Program"}
          description={
            "Join the global program to play a key role in supporting web3 developers."
          }
          url="https://archway.io/ambassador-program/"
        />
        <Card
          img={Auth0}
          name={"Auth0 Ambassador Program"}
          description={
            "Join the global program to play a key role in supporting web3 developers."
          }
          url="https://auth0.com/ambassador-program/"
        />
      </div>
    </div>
  );
}
