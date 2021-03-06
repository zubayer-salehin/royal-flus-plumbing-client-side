import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar-open" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-4xl text-secondary font-bold mt-5 ml-3 sm:ml-0'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar-open" className="drawer-overlay"></label>
                <ul className="menu py-4 pl-4 pr-10 overflow-y-auto w-54  mr-3 bg-secondary text-white">
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {admin === true ? "" :
                        <>
                            <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                            <li><Link to="/dashboard/addReveiw">Add Reveiw</Link></li>
                        </>
                    }
                    {admin && <>
                        <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                        <li><Link to="/dashboard/manageProducts">Manage Tools</Link></li>
                        <li><Link to="/dashboard/addProduct">Add Tools</Link></li>
                        <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;