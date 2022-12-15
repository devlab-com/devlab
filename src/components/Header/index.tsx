import * as React from "react";
import { useAuthContext } from "@/context/Auth";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const Header: React.FC = () => {
  const { user, isloggedIn, logout } = useAuthContext();

  return (
    <div className="sticky top-0 left-0 right-0 border-primary border-t-4 px-8 py-3 flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0 items-center">
      <Link to="/">
        <h1 className="text-primary font-bold text-3xl">DevLab.</h1>
      </Link>
      <div className="w-full md:w-[400px]">
        {/* <Input placeholder="Aramak istediğiniz konuyu yazın." rightIcon={<Icon icon="search" width={20} height={20} />} /> */}
      </div>
      <div className="space-x-2">
        {!isloggedIn ? (
          <>
            <Link to="/auth/login">giriş</Link>
            <Link to="/auth/register">kaydol</Link>
          </>
        ) : (
          <div className="group relative flex items-center justify-center">
            <button className="py-2 px-4 rounded-lg text-white font-bold flex items-center justify-center gap-x-2">
              <img className="w-6 h-6 rounded-lg" src={`https://avatars.dicebear.com/api/identicon/${user?.name}.svg`} alt="" />
              {user?.name}
            </button>
            <div
              tabIndex={1}
              className="absolute top-12 z-50 hidden group-focus-within:flex w-[130px] bg-[#3D3D3D] rounded font-medium text-white p-2 gap-y-2 flex-col"
            >
              <button className="p-1 hover:bg-primary rounded">profile</button>
              <button
                onClick={logout}
                className="flex items-center justify-center p-1 gap-x-1 text-red-500 hover:bg-red-500 hover:text-white rounded"
              >
                <MdLogout size={18} />
                logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
