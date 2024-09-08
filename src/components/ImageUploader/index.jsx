/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { isValidURL, toBase64 } from "../../utils/helperFn";

const ImageUploader = ({
  value,
  label = "Upload an Image",
  onChangeImage = () => {},
}) => {
  const [image, setImage] = useState();
  console.log(value, "value", image, "image");

  useEffect(() => {
    if (isValidURL(value)) {
      setImage(value);
    } else {
      toBase64(value).then((data) => {
        setImage(data);
      });
    }
  }, [value]);

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
    <div className="mx-auto max-w-md rounded-lg border border-gray-300 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <label
        htmlFor="file-upload"
        className="mb-4 block text-lg font-semibold text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border file:border-gray-300 file:bg-gray-100 file:px-4 file:py-2 file:text-gray-700 hover:file:bg-gray-200 dark:file:border-gray-600 dark:file:bg-gray-700 dark:file:text-gray-300 dark:hover:file:bg-gray-600"
      />
      {image && (
        <div className="relative mt-6 h-64 w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600">
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
