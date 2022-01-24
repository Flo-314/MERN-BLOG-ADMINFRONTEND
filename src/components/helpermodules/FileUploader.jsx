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
      <Input display="block" type="file" onChange={handleFileInput} />
      <Button
        bg="secondary.strong"
        className="btn btn-primary"
        color="white"
        onClick={(e) => fileInput.current && fileInput.current.click()}
      >
        UPLODEAR imagen
      </Button>
    </div>
  );
};

export default FileUploader;
