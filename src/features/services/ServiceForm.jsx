/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import ImageUploader from "../../components/ImageUploader";
import Modal from "../../components/Modal";
import useCreateService from "./hooks/useCreateService";
import useUpdateService from "./hooks/useUpdateService";
import { toBase64 } from "../../utils/helperFn";

// Validation schema using Yup
const serviceSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(100, "Name must be less than 100 characters long")
    .required("Name is required"),
  base64: Yup.string().test(
    "either-base64-or-imageURL",
    "Either base64 or imageURL is required",
    function (value) {
      const { imageURL } = this.parent;
      return !!value || !!imageURL;
    },
  ),
  imageURL: Yup.string().test(
    "either-base64-or-imageURL",
    "Either base64 or imageURL is required",
    function (value) {
      const { base64 } = this.parent;
      return !!value || !!base64;
    },
  ),
});

const ServiceForm = ({ serviceDetail }) => {
  const { createService, isLoading: isCreating } = useCreateService();
  const { updateService, isLoading: isUpdating } = useUpdateService();
  const isLoading = isCreating || isUpdating;
  const isUpdate = serviceDetail?.isUpdate;

  const handleFormSubmit = async (values, onCloseModal) => {
    try {
      if (values.base64) {
        values.base64 = await toBase64(values?.base64);
      }
      if (isUpdate) {
        await updateService(values, onCloseModal);
      } else {
        await createService(values, onCloseModal);
      }
    } catch (error) {
      console.error(error);
    } finally {
      onCloseModal();
    }
  };

  return (
    <Modal>
      <Modal.Window name="serviceForm">
        {({ onCloseModal }) => (
          <div className="flex items-center justify-center bg-gray-100 p-4 dark:bg-transparent">
            <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                {!isUpdate ? "Create Service" : "Update Service"}
              </h2>

              <Formik
                enableReinitialize
                initialValues={{
                  id: serviceDetail?._id ?? "",
                  name: serviceDetail?.name ?? "",
                  base64: "",
                  imageURL: serviceDetail?.imageURL ?? "",
                }}
                validationSchema={serviceSchema}
                onSubmit={(values) => handleFormSubmit(values, onCloseModal)}
              >
                {({
                  errors,
                  touched,
                  values,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                }) => (
                  <Form>
                    <div className="mb-4">
                      <Input
                        name="name"
                        disabled={isLoading}
                        value={values?.name}
                        label="Name"
                        type="text"
                        placeholder="Full Name"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        error={errors.name && touched.name ? errors.name : ""}
                        className="border-gray-300 bg-gray-100 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                      />
                    </div>
                    <div className="mb-4">
                      <ImageUploader
                        value={values?.base64 || values?.imageURL}
                        onChangeImage={(value) =>
                          setFieldValue("base64", value)
                        }
                        className="bg-gray-100 dark:bg-gray-700"
                      />
                      {errors.base64 && touched.base64 ? (
                        <span className="text-red-500">{errors.base64}</span>
                      ) : null}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        title={!isUpdate ? "Create" : "Update"}
                        className="w-full rounded-md px-4 py-2 font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      />
                      <Modal.Close>
                        <Modal.Button
                          variant="cancel"
                          title="Cancel"
                          className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                        />
                      </Modal.Close>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </Modal.Window>
    </Modal>
  );
};

export default ServiceForm;
