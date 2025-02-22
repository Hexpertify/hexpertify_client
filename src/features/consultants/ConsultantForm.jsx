/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Input from "../../components/Input";
import { Button } from "../../components/Button";
import ImageUploader from "../../components/ImageUploader";
import Modal from "../../components/Modal";
import { toBase64 } from "../../utils/helperFn";
import SwitchButton from "../../components/Button/SwitchButton";
import useCreateConsultant from "./hooks/useCreateConsultant";
import useUpdateConsultant from "./hooks/useUpdateConsultant";
import MultiSelect from "../../components/Input/MultiInput";
import StarRating from "../../components/Input/StarRating";
import TextArea from "../../components/Input/TextArea";

// Validation schema
const consultantSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(2).max(50),
  about: Yup.string().required("About is required").min(2).max(1000),
  experience: Yup.object()
    .shape({
      year: Yup.number()
        .required("Experience year is required")
        .positive()
        .integer(),
      month: Yup.number()
        .required("Experience month is required")
        .positive()
        .integer(),
    })
    .required("Experience is required"),
  languages: Yup.array()
    .of(Yup.string().required())
    .required("Languages are required")
    .min(1),
  fees: Yup.number()
    .required("Fees are required")
    .min(0, "Fees must be 0 or greater"),
  ratings: Yup.number()
    .required("Ratings are required")
    .min(0, "Ratings must be at least 0")
    .max(5, "Ratings must be at most 5"),
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
  certificationBase64: Yup.string().test(
    "either-base64-or-imageURL",
    "Either base64 or imageURL is required",
    function (value) {
      if (!this.parent.isCertified) {
        return true;
      }
      const { certificationURL } = this.parent;
      return !!value || !!certificationURL;
    },
  ),
  certificationURL: Yup.string().test(
    "either-base64-or-imageURL",
    "Either base64 or imageURL is required",
    function (value) {
      if (!this.parent.isCertified) {
        return true;
      }
      const { certificationBase64 } = this.parent;
      return !!value || !!certificationBase64;
    },
  ),
  isCertified: Yup.boolean().required("Certification status is required"),
});

const ConsultantForm = ({ consultantDetails }) => {
  const [step, setStep] = useState(1);
  const isUpdate = consultantDetails?.isUpdate;
  const { createConsultant, isloading: isCreating } = useCreateConsultant();
  const { updateConsultant, isloading: isUpdateing } = useUpdateConsultant();

  const consultantValues = useMemo(() => {
    return consultantDetails;
  }, [consultantDetails]);

  useEffect(() => {
    setStep(1);
  }, [consultantValues]);

  const isLoading = isCreating || isUpdateing;
  const handleFormSubmit = async (values, onCloseModal) => {
    try {
      if (values.base64) {
        values.base64 = await toBase64(values.base64);
      }
      if (values.certificationBase64) {
        values.certificationBase64 = await toBase64(values.certificationBase64);
      }
      if (isUpdate) {
        await updateConsultant(values);
      } else {
        await createConsultant(values);
      }
      console.log(isUpdate ? "Updating" : "Creating", values);
    } catch (error) {
      console.error(error);
    } finally {
      onCloseModal();
    }
  };

  return (
    <Modal>
      <Modal.Window name="consultantForm">
        {({ onCloseModal }) => (
          <div className="flex items-center justify-center bg-gray-100 p-4 dark:bg-transparent">
            <div className="w-full max-w-3xl rounded-lg">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                {!isUpdate ? "Create Consultant" : "Update Consultant"}
              </h2>

              <Formik
                enableReinitialize
                initialValues={{
                  id: consultantDetails?._id ?? "",
                  name: consultantDetails?.name ?? "",
                  base64: "",
                  ratings: consultantDetails?.ratings ?? 0,
                  imageURL: consultantDetails?.imageURL ?? "",
                  about: consultantDetails?.about ?? "",
                  experience: consultantDetails?.experience ?? {
                    year: "",
                    month: "",
                  },
                  languages: consultantDetails?.languages ?? [],
                  fees: consultantDetails?.fees ?? "",
                  serviceId: consultantDetails?.serviceId ?? "",
                  certificationBase64: "",
                  certificationURL: consultantDetails?.certificationURL ?? "",
                  isCertified: consultantDetails?.isCertified ?? false,
                }}
                validationSchema={consultantSchema}
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
                  <Form className="space-y-4">
                    {step === 1 && (
                      <div>
                        <div className="mb-4">
                          <Input
                            name="name"
                            disabled={isLoading}
                            value={values.name}
                            label="Name"
                            type="text"
                            placeholder="Full Name"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            error={
                              errors.name && touched.name ? errors.name : ""
                            }
                            className="bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-200"
                          />
                        </div>
                        <div className="mb-4">
                          <TextArea
                            name="about"
                            disabled={isLoading}
                            value={values.about}
                            label="About"
                            type="text"
                            placeholder="About"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            error={
                              errors.about && touched.about ? errors.about : ""
                            }
                            className="bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-200"
                          />
                        </div>
                        <div>
                          <MultiSelect
                            value={values?.languages}
                            handleChange={(val) =>
                              setFieldValue("languages", val)
                            }
                            name="languages"
                            error={
                              errors.languages && touched.languages
                                ? errors.languages
                                : ""
                            }
                            placeholder="languages"
                            disabled={isLoading}
                            label="languages"
                            className="bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-200"
                          />
                        </div>
                        <div className="mb-4">
                          <Input
                            name="fees"
                            disabled={isLoading}
                            value={values.fees}
                            label="Fees"
                            type="number"
                            placeholder="Fees"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            error={
                              errors.fees && touched.fees ? errors.fees : ""
                            }
                            className="bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-200"
                          />
                        </div>
                        <div className="mb-4">
                          <StarRating
                            rating={values?.ratings}
                            onChange={(val) => setFieldValue("ratings", val)}
                            className="text-gray-900 dark:text-gray-200"
                          />
                        </div>
                        <div className="mb-4 flex flex-col gap-3 sm:flex-row">
                          <Input
                            name="experience.year"
                            disabled={isLoading}
                            value={values.experience.year}
                            label="Experience Year"
                            type="number"
                            placeholder="Year"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            error={
                              errors.experience?.year &&
                              touched.experience?.year
                                ? errors.experience.year
                                : ""
                            }
                            className="bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-200"
                          />
                          <Input
                            name="experience.month"
                            disabled={isLoading}
                            value={values.experience.month}
                            label="Experience Month"
                            type="number"
                            placeholder="Month"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            error={
                              errors.experience?.month &&
                              touched.experience?.month
                                ? errors.experience.month
                                : ""
                            }
                            className="bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-200"
                          />
                        </div>
                        <div className="flex justify-end gap-4">
                          <Button
                            type="button"
                            disabled={isLoading}
                            title="Next"
                            className="bg-primary hover:bg-primary-dark rounded-md px-4 py-2 font-semibold text-white"
                            handleClick={() => setStep(2)}
                          />
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <div className="mb-4">
                          <ImageUploader
                            value={values.base64 || values.imageURL}
                            onChangeImage={(value) =>
                              setFieldValue("base64", value)
                            }
                            label="Profile Image"
                          />
                          {errors.base64 && touched.base64 ? (
                            <span className="text-red-500 dark:text-red-400">
                              Image is required
                            </span>
                          ) : null}
                        </div>

                        <div className="mb-4">
                          <SwitchButton
                            isOn={values.isCertified}
                            disabled={isLoading}
                            onToggle={() =>
                              setFieldValue("isCertified", !values.isCertified)
                            }
                            label="Certified"
                            className="text-gray-900 dark:text-gray-200"
                          />
                          {values.isCertified && (
                            <div className="mt-4">
                              <ImageUploader
                                value={
                                  values.certificationBase64 ||
                                  values?.certificationURL
                                }
                                onChangeImage={(value) =>
                                  setFieldValue("certificationBase64", value)
                                }
                                label="Certification Image"
                              />
                              {errors.certificationBase64 &&
                              touched.certificationBase64 ? (
                                <span className="text-red-500 dark:text-red-400">
                                  Certification image is required
                                </span>
                              ) : null}
                            </div>
                          )}
                        </div>
                        <div className="flex justify-between gap-4">
                          <Button
                            type="button"
                            disabled={isLoading}
                            title="Back"
                            className="rounded-md bg-gray-500 px-4 py-2 font-semibold text-white hover:bg-gray-600"
                            handleClick={() => setStep(1)}
                          />
                          <Button
                            type="submit"
                            disabled={isLoading}
                            title={!isUpdate ? "Create" : "Update"}
                            className="bg-primary hover:bg-primary-dark rounded-md px-4 py-2 font-semibold text-white"
                          />
                        </div>
                      </div>
                    )}
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

export default ConsultantForm;
