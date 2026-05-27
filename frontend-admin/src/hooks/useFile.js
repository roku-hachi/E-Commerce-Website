// src/hooks/useFile.js

import { useEffect, useState } from "react";

export const useFile = ({
  maxFiles = 10,
  maxSize = 5 * 1024 * 1024,
  allowedTypes = ["image/jpeg", "image/png", "image/webp"],
} = {}) => {
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const [errors, setErrors] = useState([]);

  /**
   * Validate file
   */
  const validateFile = (file) => {
    // validate type
    if (allowedTypes.length && !allowedTypes.includes(file.type)) {
      return `${file.name} has invalid file type`;
    }

    // validate size
    if (file.size > maxSize) {
      return `${file.name} exceeds max size`;
    }

    return null;
  };

  /**
   * Handle file
   */
  const handleFile = (e) => {
    const selectedFiles = Array.from(e.target.files || []);

    /**
     * Auto detect multiple
     */
    const isMultiple = e.target.multiple;

    if (!selectedFiles.length) return;

    let validFiles = [];
    let fileErrors = [];

    /**
     * SINGLE
     */
    if (!isMultiple) {
      const file = selectedFiles[0];

      const error = validateFile(file);

      if (error) {
        setErrors([error]);
        return;
      }

      validFiles = [file];
    } else {
      /**
       * MULTIPLE
       */
      if (selectedFiles.length > maxFiles) {
        setErrors([`Maximum ${maxFiles} files allowed`]);

        return;
      }

      selectedFiles.forEach((file) => {
        const error = validateFile(file);

        if (error) {
          fileErrors.push(error);
        } else {
          validFiles.push(file);
        }
      });
    }

    /**
     * Preview
     */
    const previewUrls = validFiles.map((file) => URL.createObjectURL(file));

    setFiles(validFiles);
    setPreview(previewUrls);
    setErrors(fileErrors);
  };

  /**
   * Remove file
   */
  const removeFile = (index) => {
    if (preview[index]) {
      URL.revokeObjectURL(preview[index]);
    }

    setFiles((prev) => prev.filter((_, i) => i !== index));

    setPreview((prev) => prev.filter((_, i) => i !== index));
  };

  /**
   * Reset
   */
  const resetFile = () => {
    preview.forEach((url) => {
      URL.revokeObjectURL(url);
    });

    setFiles([]);
    setPreview([]);
    setErrors([]);
  };

  /**
   * Cleanup memory
   */
  useEffect(() => {
    return () => {
      preview.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [preview]);

  return {
    files,
    preview,
    errors,

    handleFile,
    removeFile,
    resetFile,
  };
};
