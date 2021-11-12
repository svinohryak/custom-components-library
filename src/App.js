import "./styles.css";
import NavBar from "./components/navbar/NavBar";
import IntersectionTest from "./components/intersection-test/IntersectionTest";
import FileUploader from "./components/loader/fileUpload/FileUploader";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.scss";
import classNames from "classnames";
import { useState } from "react";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={classes.container}>
      <div
        className={classNames(
          classes.navbar,
          collapsed ? classes.collapsed : ""
        )}
      >
        <NavBar />
      </div>
      <main className={classes.main}>
        <button onClick={toggleNavbar}>open/close</button>
        <Routes>
          <Route path="/intersection" element={<IntersectionTest />} />
          <Route path="/loader" element={<FileUploader />} />
        </Routes>
      </main>
    </div>
  );
}
