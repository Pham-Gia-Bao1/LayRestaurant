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
        emailRequired: "Please! Enter your email address",
        passwordRequired: "Please! Enter your password",
        confirmPasswordRequired: 'Please! Enter your confirm password',
        passwordMinLength: "The minimum length of your password (must be at least 8 characters)",
        emailInvalid: "Please! Enter a valid email address",
        passwordMismatch: "The confirmation password does not match with the password",
        errorMessage: {
          default: "Login failed: ",
          incorrectCredentials: "Your password or email is incorrect!",
          forbidden: "Access forbidden!",
          notFound: "Resource not found!",
          serverError: "Server error! Please try again later.",
          badRequest: "Email address already exists!",
        },
        loadingMessage: "Loading...",
        noAccount: "Don't have an account?",
        register: "Register",
        alreadyHaveAccount: "You already have an account?",
      },
      nav: {
        home: "Home",
        rooms: "Rooms",
        foods: "Foods",
        login: "Login",
        signup: "Sign Up",
        logout: "Logout",
        messages: "Messages",
        about: "About",
      },
      language: {
        vietnamese: "Vietnamese",
        english: "English",
      },
      home: {
        peopleTrustUs: "People Trust us",
        weAreSerious: "We are Serious For",
        foodDelivery: "Food & Delivery.",
        bestCooks: "Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.",
        exclusiveDeals: "Up to -40% 🎉 Order.uk exclusive deals",
        popularRestaurants: "Popular Restaurants",
        "trustText": "People Trust us",
        "discoverTitle": "Discover The Best Restaurant and Hotel In Quảng Bình",
        "discoverDescription": "Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.",
        "searchBoxPlaceholder": "Search for rooms or restaurants...",
        "bestRoomsTitle": "Best Rooms",
        "popularRoomsTitle": "Popular Rooms",
        "visitorsAlt": "Lay restaurant visitors"
      },
      restaurants: {
        chefBurgersLondon: "Chef Burgers London",
        grandAiCafeLondon: "Grand Ai Cafe London",
        butterbrotCafeLondon: "Butterbrot Cafe London",
        restaurantLabel: "Restaurant",
      },
      footer: {
        explore: "Explore",
        home: "Home",
        rooms: "Rooms",
        foods: "Foods",
        about: "About",
        messages: "Messages",
        aboutUs: "About Us",
        ourStory: "Our Story",
        team: "Team",
        careers: "Careers",
        support: "Support",
        helpCenter: "Help Center",
        contactUs: "Contact Us",
        legal: "Legal",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
      },
      settings: {
        title: "Order.uk Popular Categories",
        buttonAll: "All",
        notFound: "Product not found",
        loginRequired: "You need to login first!",
        uploadFailed: "Image upload failed. Please try again.",
        createSuccess: "Food item created successfully!",
        updateSuccess: "Food item updated successfully!",
        createOrUpdateFailed: "Failed to create or update food item.",
        formSubmitFailed: "Failed to submit form!."
      },
      search: {
        placeholder: "Search..."
      },
      aboutUs: {
        mainHeading: 'Restaurant Introduction',
        title: "About Us",
        restaurantImageAlt1: "Our Best Chef",
        chefTitle: "Our Best Chef",
        chefDescription: "Our best chef is dedicated to providing the finest culinary experience.",
        fineDiningImageAlt: "Fine Dining",
        fineDiningTitle: "Fine Dining",
        fineDiningDescription: "Experience the best fine dining with exquisite flavors and ambiance.",
        exquisiteCuisineImageAlt: "Exquisite Cuisine",
        exquisiteCuisineTitle: "Exquisite Cuisine",
        exquisiteCuisineDescription: "Taste our exquisite cuisine crafted by world-class chefs.",
        luxuryRoomsImageAlt: "Luxury Rooms",
        luxuryRoomsTitle: "Luxury Rooms",
        luxuryRoomsDescription: "Stay in our luxury rooms and enjoy the comfort and elegance.",
        ourLocationTitle: "Our Location",
        contactUsTitle: "Contact Us",
        yourName: "Your Name",
        enterName: "Enter your name",
        email: "Email",
        enterEmail: "Enter your email",
        message: "Message",
        enterMessage: "Enter your message",
        sendMessage: "Send Message"
      },
      foodMenu: {
        allProducts: "All Products",
        searchPlaceholder: "Search products...",
        addToCartButton: "Add to Cart"
      },
      messages: {
        loginFirst: "Please log in before adding to cart",
        addToCartError: "An error occurred while adding to cart"
      },

      "profile": {
        "avatarAlt": "Profile",
        "uploadError": "You can only upload JPG/PNG file!",
        "sizeError": "Image must be smaller than 2MB!",
        "uploadAvatar": "Upload your avatar",
        "profileSectionTitle": "Profile",
        "profileDescription": "This is how others will see you on the website.",
        "viewBookingRoomHistory": "View Booking Room History",
        "viewBookingFoodHistory": "View Booking Food History",
        "username": "Username",
        "usernameLabel": "Username",
        "usernameNote": "Your username will be displayed on your profile.",
        "email": "Email",
        "emailLabel": "Email Address",
        "emailNote": "Please enter a valid email address.",
        "address": "Address",
        "addressLabel": "Address",
        "dob": "Date of Birth",
        "dobLabel": "Date of Birth",
        "gender": "Gender",
        "phone": "Phone Number",
        "phoneLabel": "Phone Number",
        "male": "Male",
        "female": "Female",
        "other": "Other",
        "save": "Save",
        "cancel": "Cancel",
        "updateProfile": "Update Profile",
        "logout": "Log Out",
        "bookingRoomHistory": "Booking Room History",
        "hotelName": "Hotel Name",
        "orderer": "Orderer",
        "orderRoomId": "Order Room ID",
        "orderStatus": "Order Status",
        "price": "Price",
        "bookingDate": "Booking Date",
        "viewLess": "View Less",
        "viewMore": "View More",
        "checkInDate": "Check-in Date",
        "checkOutDate": "Check-out Date",
        "roomDetailAlt": "Room Detail",
        "bookingFoodHistory": "Booking Food History",
        "orderFoodId": "Order Food ID",
        "totalAmount": "Total Amount",
        "deliveryAddress": "Delivery Address",
        "paymentMethod": "Payment Method"
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
        emailRequired: "Vui lòng nhập địa chỉ email của bạn",
        passwordRequired: "Vui lòng nhập mật khẩu của bạn",
        confirmPasswordRequired: 'Vui lòng nhập xác nhận mật khẩu của bạn',
        passwordMinLength: "Độ dài tối thiểu của mật khẩu phải ít nhất 8 ký tự",
        emailInvalid: "Vui lòng nhập địa chỉ email hợp lệ",
        passwordMismatch: "Mật khẩu xác nhận không khớp với mật khẩu",
        errorMessage: {
          default: "Đăng nhập thất bại: ",
          incorrectCredentials: "Mật khẩu hoặc email của bạn không đúng!",
          forbidden: "Truy cập bị cấm!",
          notFound: "Không tìm thấy tài nguyên!",
          serverError: "Lỗi máy chủ! Vui lòng thử lại sau.",
          badRequest: "Địa chỉ email đã tồn tại!",
        },
        loadingMessage: "Đang tải...",
        noAccount: "Chưa có tài khoản?",
        register: "Đăng ký",
        alreadyHaveAccount: "Bạn đã có tài khoản?",
      },
      nav: {
        home: "Trang chủ",
        rooms: "Phòng",
        foods: "Món ăn",
        login: "Đăng nhập",
        signup: "Đăng ký",
        logout: "Đăng xuất",
        messages: "Tin nhắn",
        about: "Giới thiệu",
      },
      language: {
        vietnamese: "Tiếng Việt",
        english: "Tiếng Anh",
      },
      home: {
        peopleTrustUs: "Mọi người tin tưởng chúng tôi",
        weAreSerious: "Chúng tôi nghiêm túc về",
        foodDelivery: "Thực phẩm & Giao hàng.",
        bestCooks: "Những đầu bếp giỏi nhất và những người giao hàng tốt nhất luôn phục vụ bạn. Thức ăn nóng ngon sẽ đến với bạn trong vòng 60 phút.",
        exclusiveDeals: "Giảm giá lên đến -40% 🎉 Ưu đãi độc quyền từ Order.uk",
        popularRestaurants: "Nhà hàng phổ biến",
        "trustText": "Khách hàng tin tưởng chúng tôi",
        "discoverTitle": "Khám Phá Nhà Hàng và Khách Sạn Tốt Nhất Tại Quảng Bình",
        "discoverDescription": "Đầu bếp giỏi nhất và nhân viên giao hàng tốt nhất luôn sẵn sàng phục vụ bạn. Thức ăn nóng hổi sẽ đến tay bạn trong vòng 60 phút.",
        "searchBoxPlaceholder": "Tìm kiếm phòng hoặc nhà hàng...",
        "bestRoomsTitle": "Phòng Tốt Nhất",
        "popularRoomsTitle": "Phòng Phổ Biến",
        "visitorsAlt": "Khách thăm nhà hàng"

      },
      restaurants: {
        chefBurgersLondon: "Bánh mì kẹp Chef ở London",
        grandAiCafeLondon: "Cafe Grand Ai ở London",
        butterbrotCafeLondon: "Cafe Butterbrot ở London",
        restaurantLabel: "Nhà hàng",
      },
      footer: {
        explore: "Khám phá",
        home: "Trang chủ",
        rooms: "Phòng",
        foods: "Món ăn",
        about: "Giới thiệu",
        messages: "Tin nhắn",
        aboutUs: "Về chúng tôi",
        ourStory: "Câu chuyện của chúng tôi",
        team: "Đội ngũ",
        careers: "Nghề nghiệp",
        support: "Hỗ trợ",
        helpCenter: "Trung tâm trợ giúp",
        contactUs: "Liên hệ với chúng tôi",
        legal: "Pháp lý",
        privacyPolicy: "Chính sách bảo mật",
        termsOfService: "Điều khoản dịch vụ",
      },
      settings:
      {
        title: "Danh Mục Phổ Biến",
        buttonAll: "Tất Cả",
        notFound: "Không tìm thấy sản phẩm",
        loginRequired: "Bạn cần đăng nhập trước!",
        uploadFailed: "Tải lên hình ảnh thất bại. Vui lòng thử lại.",
        createSuccess: "Món ăn đã được tạo thành công!",
        updateSuccess: "Món ăn đã được cập nhật thành công!",
        createOrUpdateFailed: "Không thể tạo hoặc cập nhật món ăn.",
        formSubmitFailed: "Gửi biểu mẫu thất bại!"
      },
      search: {
        placeholder: "Tìm kiếm..."
      },
      aboutUs: {
        mainHeading: "Giới thiệu về chúng tôi",
        title: "Về chúng tôi",
        restaurantImageAlt1: "Đầu bếp xuất sắc của chúng tôi",
        chefTitle: "Đầu bếp xuất sắc của chúng tôi",
        chefDescription: "Đầu bếp xuất sắc của chúng tôi tận tâm mang đến trải nghiệm ẩm thực tuyệt vời nhất.",
        fineDiningImageAlt: "Ẩm thực cao cấp",
        fineDiningTitle: "Ẩm thực cao cấp",
        fineDiningDescription: "Trải nghiệm ẩm thực cao cấp với hương vị tuyệt vời và không gian sang trọng.",
        exquisiteCuisineImageAlt: "Ẩm thực tinh tế",
        exquisiteCuisineTitle: "Ẩm thực tinh tế",
        exquisiteCuisineDescription: "Thưởng thức món ăn tinh tế được chế biến bởi các đầu bếp hàng đầu thế giới.",
        luxuryRoomsImageAlt: "Phòng cao cấp",
        luxuryRoomsTitle: "Phòng cao cấp",
        luxuryRoomsDescription: "Nghỉ ngơi trong những phòng cao cấp của chúng tôi và tận hưởng sự thoải mái và thanh lịch.",
        ourLocationTitle: "Vị trí của chúng tôi",
        contactUsTitle: "Liên hệ với chúng tôi",
        yourName: "Tên của bạn",
        enterName: "Nhập tên của bạn",
        email: "Email",
        enterEmail: "Nhập email của bạn",
        message: "Tin nhắn",
        enterMessage: "Nhập tin nhắn của bạn",
        sendMessage: "Gửi tin nhắn"
      },
      foodMenu: {
        allProducts: "Tất cả sản phẩm",
        searchPlaceholder: "Tìm kiếm sản phẩm...",
        addToCartButton: "Thêm vào giỏ"
      },
      messages: {
        loginFirst: "Vui lòng đăng nhập trước khi thêm vào giỏ hàng",
        addToCartError: "Có lỗi xảy ra khi thêm vào giỏ hàng"
      },
      "profile": {
        "avatarAlt": "Ảnh đại diện",
        "uploadError": "Bạn chỉ có thể tải lên file JPG/PNG!",
        "sizeError": "Hình ảnh phải nhỏ hơn 2MB!",
        "uploadAvatar": "Tải ảnh đại diện của bạn",
        "profileSectionTitle": "Hồ sơ",
        "profileDescription": "Đây là cách người khác sẽ thấy bạn trên trang web.",
        "viewBookingRoomHistory": "Xem lịch sử đặt phòng",
        "viewBookingFoodHistory": "Xem lịch sử đặt món ăn",
        "username": "Tên người dùng",
        "usernameLabel": "Tên người dùng",
        "usernameNote": "Tên người dùng của bạn sẽ được hiển thị trên hồ sơ của bạn.",
        "email": "Email",
        "emailLabel": "Địa chỉ Email",
        "emailNote": "Vui lòng nhập địa chỉ email hợp lệ.",
        "address": "Địa chỉ",
        "addressLabel": "Địa chỉ",
        "dob": "Ngày sinh",
        "dobLabel": "Ngày sinh",
        "gender": "Giới tính",
        "phone": "Số điện thoại",
        "phoneLabel": "Số điện thoại",
        "male": "Nam",
        "female": "Nữ",
        "other": "Khác",
        "save": "Lưu",
        "cancel": "Hủy",
        "updateProfile": "Cập nhật hồ sơ",
        "logout": "Đăng xuất",
        "bookingRoomHistory": "Lịch sử đặt phòng",
        "hotelName": "Tên khách sạn",
        "orderer": "Người đặt",
        "orderRoomId": "ID phòng đặt",
        "orderStatus": "Trạng thái đặt",
        "price": "Giá",
        "bookingDate": "Ngày đặt",
        "viewLess": "Xem ít hơn",
        "viewMore": "Xem thêm",
        "checkInDate": "Ngày nhận phòng",
        "checkOutDate": "Ngày trả phòng",
        "roomDetailAlt": "Chi tiết phòng",
        "bookingFoodHistory": "Lịch sử đặt món ăn",
        "orderFoodId": "ID đơn hàng món ăn",
        "totalAmount": "Tổng số tiền",
        "deliveryAddress": "Địa chỉ giao hàng",
        "paymentMethod": "Phương thức thanh toán"
      }
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
