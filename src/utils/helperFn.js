export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    if (!file) {
      return reject(new Error("No file provided"));
    }
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });

export function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}
