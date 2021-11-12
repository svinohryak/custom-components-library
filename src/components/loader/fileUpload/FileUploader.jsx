import React, { useState } from "react";
import icon from "./attachment-clip.png";
// import useRenderLoadedBox from "../../hooks/useRenderLoadedBox.js";
import FileInfoBox from "../fileInfoBox/FileInfoBox";
import classes from "./FileUploader.module.scss";

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  const clearingFilesArr = (array, key) => {
    const filesSet = new Set();
    return array.filter(
      (obj) => !filesSet.has(obj[key]) && filesSet.add(obj[key])
    );
  };

  const handleChange = (e) => {
    const filesObj = e.target.files;
    const arr = [...files, ...filesObj];
    const clearArr = clearingFilesArr(arr, "name");
    setFiles(clearArr);
  };

  const handleRemoveFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  return (
    <div className={classes.wrapper}>
      <label htmlFor="loadFile">
        <img src={icon} alt={""} /> Attach file or files
      </label>
      <form>
        <div>
          <input
            type="file"
            multiple
            id="loadFile"
            style={{ display: "none" }}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className={classes.infoBox}>
        {files.map((file) => (
          <FileInfoBox
            file={file}
            onRemoveFile={handleRemoveFile}
            key={file.lastModified}
          />
        ))}
      </div>
    </div>
  );
};

export default FileUploader;
