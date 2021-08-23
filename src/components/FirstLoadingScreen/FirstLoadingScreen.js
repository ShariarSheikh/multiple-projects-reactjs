import styles from "./FirstLoadingScreen.module.css";
import logo from "../../images/logo.svg";

const FirstLoadingScreen = () => {
  return (
    <main className={styles.loadingScreen}>
      <div>
        <img className="object-contain" src={logo} alt="logo" />
        <div className="flex justify-center mt-16">
          <progress className={styles.progress_circular} />
        </div>
      </div>
    </main>
  );
};

export default FirstLoadingScreen;
