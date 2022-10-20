import Head from "next/head";
import Image from "next/image";
import FirstSection from "../components/ScreenComponents/homeScreen/firstSection";
import FeaturesSection from "../components/ScreenComponents/homeScreen/featuresSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <FirstSection />
      <FeaturesSection />
    </div>
  );
}
