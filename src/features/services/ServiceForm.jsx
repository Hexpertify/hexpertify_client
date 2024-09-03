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
  const { createService, isloading: isCreate } = useCreateService();
  const { updateService, isloading: isUpdaeing } = useUpdateService();
  const isloading = isUpdaeing || isCreate;
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
      console.log(error);
    } finally {
      onCloseModal();
    }
  };

  return (
    <Modal>
      <Modal.Window name="serviceForm">
        {({ onCloseModal }) => (
          <div className="flex items-center justify-center bg-primary-background p-4">
            <div className="w-full max-w-lg rounded-lg bg-primary-background">
              <h2 className="font-B mb-2 font-Baloo text-xl font-normal text-black sm:text-2xl md:text-3xl lg:text-4xl">
                {!isUpdate ? "Create service" : "Update service"}
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
                onSubmit={(value) => handleFormSubmit(value, onCloseModal)}
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
                        disabled={isloading}
                        value={values?.name}
                        label="Name"
                        type="text"
                        placeholder="Full Name"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        error={errors.name && touched.name ? errors.name : ""}
                      />
                    </div>
                    <div className="mb-4">
                      <ImageUploader
                        value={values?.base64 || values?.imageURL}
                        onChangeImage={(value) =>
                          setFieldValue("base64", value)
                        }
                      />
                      {errors.base64 && touched.base64 ? (
                        <span className="text-red-500">Image is required</span>
                      ) : null}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        disabled={isloading}
                        title={!isUpdate ? "Create" : "Update"}
                        className="bg-primary hover:bg-primary-dark focus:ring-primary-500 !w-fit rounded-md px-4 py-2 font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      />
                      <Modal.Close>
                        <Modal.Button variant="cancel" title="No, Close" />
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
