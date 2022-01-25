import {Button, Input} from "@chakra-ui/react";
import React, {useRef} from "react";

const FileUploader = ({onFileSelect}) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    onFileSelect(e.target.files[0]);
  };

  return (
    <div className="file-uploader">
      <Input display="block" position={"static"} type="file" onChange={handleFileInput} />
    </div>
  );
};

export default FileUploader;
