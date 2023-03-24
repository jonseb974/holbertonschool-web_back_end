export default function signUpUser(fileName) {
  return new Promise((resolve, reject) => {
    const error = new Error({ fileName }`cannot be processed`);
    reject(error);
  });
}
