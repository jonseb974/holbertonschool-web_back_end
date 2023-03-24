export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const fulfilled = { status: 200, body: 'success' };
      resolve(fulfilled);
    } else {
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });
}
