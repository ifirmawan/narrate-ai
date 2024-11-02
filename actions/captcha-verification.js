'use server';

export const verifyToken = (token) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            secret: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
            response: token
          })
        }
      );
      resolve(res.json());
    } catch (error) {
      reject(error);
    }
  });
