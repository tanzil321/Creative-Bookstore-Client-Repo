import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import useBuyer from "../hooks/useUser";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allseller">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyer">All Users</Link>
                </li>
              </>
            )}

            {isBuyer && (
              <>
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add a Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproduct">My Products</Link>
                </li>
              </>
            )}

            {/* <li><Link to="/dashboard">My Orders</Link></li>
                        
                            
                                <li><Link to="/dashboard/alluser">All users</Link></li>
                                <li><Link to="/dashboard/myproduct">My product</Link></li>
                                <li><Link to="/dashboard/addproduct">Add A product</Link></li>
                                <li><Link to="/dashboard/allseller">All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyer">All Buyers</Link></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
