import React, { useState, useEffect, useMemo } from "react";
import classes from "./FileIngoBox.module.scss";
import iconTxt from "./images/text.png";
import iconPdf from "./images/pdf.png";
import iconImg from "./images/image.png";
import iconFile from "./images/file.png";
import ProgressBar from "../progressBar/ProgressBar";

const FileInfoBox = ({ file, onRemoveFile }) => {
  const [isUploaded, setIsUploaded] = useState(false);
  const handleRemoveFile = (fileName) => {
    onRemoveFile(fileName);
  };

  const [fileIcon, fileSize, loadTime] = useMemo(() => {
    const fileType = file ? file.type.match(/pdf|image|text/) : "file";
    let fileIcon;

    switch (fileType[0]) {
      case "pdf":
        fileIcon = iconPdf;
        break;
      case "text":
        fileIcon = iconTxt;
        break;
      case "image":
        fileIcon = iconImg;
        break;
      default:
        fileIcon = iconFile;
    }

    const fileSize =
      file.size < 10000
        ? (file.size * 0.001).toFixed(2) + " kB"
        : (file.size * 0.000001).toFixed(2) + " MB";

    const loadTime = file.size * 0.001;

    return [fileIcon, fileSize, loadTime];
  }, [file]);

  function delay(ms) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });

    return promise.then((data) => data);
  }

  useEffect(async () => {
    const value = await delay(loadTime);
    setIsUploaded(value);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imgBox}>
        <img src={fileIcon} alt={"file icon"} />
      </div>
      <div>
        <div className={classes.filename}>{file.name}</div>
        <div className={classes.fileField}>
          <span className={classes.tagExt}>
            {file.name.split(".").slice(-1)}
          </span>
          <span className={classes.tagSize}>{fileSize}</span>
          <div className={classes.progBarBox}>
            <ProgressBar loadTime={loadTime} isUploaded={isUploaded} />
          </div>
        </div>
      </div>
      <div
        className={classes.closeBtn}
        onClick={() => handleRemoveFile(file.name)}
      >
        ✖
      </div>
    </div>
  );
};

export default FileInfoBox;
