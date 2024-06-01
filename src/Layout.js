import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="p-5">
      <Outlet />
    </div>
  );
}

export default Layout;
