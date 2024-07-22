import { Link } from "react-router-dom";
import { path } from "src/constants/path.enum";
import useSearchProducts from "src/hooks/useSearchProducts";
import MainNavbar from "./MainNavbar";
import logo from "src/assets/images/logo2.png";
const CartNavbar = () => {
  const { handleSearch, register } = useSearchProducts();

  return (
    <div className="border-b border-b-black/10">
      <MainNavbar bottomCropped={true} />
      <div className=" bg-[#2196f3] pt-1 pb-5">
        <div className="container z-10">
          <nav className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <Link
              to={path.home}
              className="flex flex-shrink-0 items-end"
            >
              <img
                className="h-47 mx-4 w-[91px] fill-white md:h-10"
                src={logo}
                alt="logo"
              />
              <div className="capitalize text-white md:text-xl">Giỏ hàng</div>
            </Link>
            <form
              className="mt-3 w-full md:mt-0 md:w-[50%]"
              onSubmit={handleSearch}
            >
              <div className="flex rounded-sm border-2 border-white bg-white">
                <input
                  type="text"
                  className="w-full flex-grow border-none bg-transparent px-3 py-1 text-black outline-none"
                  placeholder="Nhập tìm kiếm ở đây nhé!"
                  {...register("search")}
                />
                <button className="flex-shrink-0 rounded-sm bg-blue-500 py-2 px-8 hover:opacity-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CartNavbar;
