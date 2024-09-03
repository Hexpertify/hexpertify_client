/* eslint-disable react/prop-types */
import { useState } from "react";

const ImageUploader = ({
  value,
  label = "Upload an Image",
  onChangeImage = () => {},
}) => {
  const [image, setImage] = useState(value);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    onChangeImage(file);
  };

  return (
    <div className="mx-auto max-w-md rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
      <label
        htmlFor="file-upload"
        className="mb-4 block text-lg font-semibold text-gray-700"
      >
        {label}
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border file:border-gray-300 file:bg-gray-100 file:px-4 file:py-2 file:text-gray-700 hover:file:bg-gray-200"
      />
      {image && (
        <div className="relative mt-6 h-64 w-full overflow-hidden rounded-lg border border-gray-200">
          <img
            src={image}
            alt="Uploaded Preview"
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
