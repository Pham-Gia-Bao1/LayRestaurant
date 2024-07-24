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
