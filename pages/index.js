import Head from "next/head";
import Image from "next/image";
import FirstSection from "../components/ScreenComponents/homeScreen/firstSection";
import FeaturesSection from "../components/ScreenComponents/homeScreen/featuresSection";
import styles from "../styles/Home.module.css";
import RenttoPropertySection from "../components/ScreenComponents/homeScreen/renttoPropertiesSection";
import ClientSection from "../components/ScreenComponents/homeScreen/clientSection";
import SubscriptionSection from "../components/ScreenComponents/homeScreen/subscriptionSection";
import DownloadAppSection from "../components/ScreenComponents/homeScreen/downloadAppSection";
import FAQ from "../components/ScreenComponents/homeScreen/faqSection";


export default function Home() {
  return (
    <div className={styles.container}>
      <FirstSection />
      <FeaturesSection />
      <ClientSection />
      <SubscriptionSection />
      <DownloadAppSection />
      <FAQ />
    </div>
  );
}
