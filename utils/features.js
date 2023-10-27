import jwt from 'jsonwebtoken';

export const setCookie = (user, res, message, statusCode = 200) => {
   const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

   res.status(statusCode)
      // Sending cookie to login at the same time
      .cookie('token', token, {
         httpOnly: true,
         maxAge: 15 * 60 * 1000, // 15 mins - (n-min)*(1-min)*(1-sec)
         sameSite: process.env.NODE_ENV === 'Development' ? 'lax' : 'none',
         secure: process.env.NODE_ENV === 'Development' ? false : true,
      })
      .json({
         success: true,
         message,
      });
};
