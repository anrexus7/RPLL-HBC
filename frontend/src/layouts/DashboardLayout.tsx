import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-pink-50 font-sans text-gray-800 overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8 flex flex-col">
        <Header />
        {/* Outlet adalah tempat di mana konten halaman (Page) akan dirender */}
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}