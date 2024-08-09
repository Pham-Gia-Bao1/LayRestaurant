This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      login: {
        title: "Login",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        loginButton: "Login",
        successMessage: "Login successful!",
        blockedMessage: "Your account is blocked!",
        emailRequired : "Please! Enter your email address",
        passwordRequired : "Please! Enter your password",
        confirmPasswordRequired : 'Please! Enter your confirm password',
        passwordMinLength : "The minimum length of your password (must be at least 8 characters)",
        emailInvalid : "Please! Enter a valid email address",
        passwordMismatch : "The confirmation password does not match with the password",
        errorMessage: {
          default: "Login failed: ",
          incorrectCredentials: "Your password or email is incorrect!",
          forbidden: "Access forbidden!",
          notFound: "Resource not found!",
          serverError: "Server error! Please try again later.",
          badRequest : "Email address already exists!",
        },
        loadingMessage: "Loading...",
        noAccount: "Don't have an account?",
        register: "Register",
        alreadyHaveAccount : "You already have an account?",
      },
    },
  },
  vi: {
    translation: {
      login: {
        title: "Đăng nhập",
        email: "Email",
        password: "Mật khẩu",
        confirmPassword: "Xác nhận mật khẩu",
        loginButton: "Đăng nhập",
        successMessage: "Đăng nhập thành công!",
        blockedMessage: "Tài khoản của bạn đã bị khóa!",
        emailRequired : "Vui lòng nhập địa chỉ email của bạn",
        passwordRequired : "Vui lòng nhập mật khẩu của bạn",
        confirmPasswordRequired : 'Vui lòng nhập xác nhận mật khẩu của bạn',
        passwordMinLength : "Độ dài tối thiểu của mật khẩu phải ít nhất 8 ký tự",
        emailInvalid : "Vui lòng nhập địa chỉ email hợp lệ",
        passwordMismatch : "Mật khẩu xác nhận không khớp với mật khẩu",
        errorMessage: {
          default: "Đăng nhập thất bại: ",
          incorrectCredentials: "Mật khẩu hoặc email của bạn không đúng!",
          forbidden: "Truy cập bị cấm!",
          notFound: "Không tìm thấy tài nguyên!",
          serverError: "Lỗi máy chủ! Vui lòng thử lại sau.",
          badRequest : "Địa chỉ email đã tồn tại!",
        },
        loadingMessage: "Đang tải...",
        noAccount: "Chưa có tài khoản?",
        register: "Đăng ký",
        alreadyHaveAccount : "Bạn đã có tài khoản?",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
