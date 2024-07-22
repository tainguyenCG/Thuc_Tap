import { Link, useMatch } from "react-router-dom";

const AuthenticationNavbar = () => {
  const matchRegister = useMatch("/register");
  const isRegisterPage = Boolean(matchRegister);
  return (
    <header className="bg-blue-500 py-5">
      <div className="container">
        <nav className="flex items-end">
          <div className="ml-5 text-xl lg:text-2xl">{isRegisterPage ? "Đăng ký" : "Đăng nhập"}</div>
        </nav>
      </div>
    </header>
  );
};

export default AuthenticationNavbar;
