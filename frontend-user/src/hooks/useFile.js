// src/hooks/useFile.js

import { useState } from "react";

export const useFile = ({
  multiple = false,
  maxFiles = 10,
  maxSize = 5 * 1024 * 1024, // 5MB
  allowedTypes = ["image/jpeg", "image/png", "image/webp"],
} = {}) => {
  /**
   * Danh sách file thật để upload API
   */
  const [files, setFiles] = useState([]);

  /**
   * Danh sách preview image
   */
  const [preview, setPreview] = useState([]);

  /**
   * Danh sách lỗi
   */
  const [errors, setErrors] = useState([]);

  /**
   * Validate file
   */
  const validateFile = (file) => {
    // Validate type
    if (allowedTypes.length && !allowedTypes.includes(file.type)) {
      return `${file.name} has invalid file type`;
    }

    // Validate size
    if (file.size > maxSize) {
      return `${file.name} exceeds max size`;
    }

    return null;
  };

  /**
   * Handle select file
   */
  const handleFile = (e) => {
    const selectedFiles = Array.from(e.target.files || []);

    if (!selectedFiles.length) return;

    let validFiles = [];

    let previewUrls = [];

    let fileErrors = [];

    /**
     * Single upload
     */
    if (!multiple) {
      const file = selectedFiles[0];

      const error = validateFile(file);

      if (error) {
        setErrors([error]);

        return;
      }

      validFiles = [file];

      previewUrls = [URL.createObjectURL(file)];
    } else {
      /**
       * Multiple upload
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

          previewUrls.push(URL.createObjectURL(file));
        }
      });
    }

    setErrors(fileErrors);

    setFiles(validFiles);

    setPreview(previewUrls);
  };

  /**
   * Remove single file
   */
  const removeFile = (index) => {
    // Cleanup preview memory
    if (preview[index]) {
      URL.revokeObjectURL(preview[index]);
    }

    setFiles((prev) => prev.filter((_, i) => i !== index));

    setPreview((prev) => prev.filter((_, i) => i !== index));
  };

  /**
   * Reset all files
   */
  const resetFile = () => {
    // Cleanup memory
    preview.forEach((url) => {
      URL.revokeObjectURL(url);
    });

    setFiles([]);

    setPreview([]);

    setErrors([]);
  };

  return {
    files,
    preview,
    errors,
    handleFile,
    removeFile,
    resetFile,
  };
};
