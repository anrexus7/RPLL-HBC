import { NavLink } from 'react-router-dom';
import { Home, Folder, Mail, Bell, MapPin, PieChart as PieIcon, User } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { name: 'home', path: '/', icon: Home },
    { name: 'file', path: '/file', icon: Folder },
    { name: 'messages', path: '/messages', icon: Mail },
    { name: 'notification', path: '/notification', icon: Bell },
    { name: 'location', path: '/location', icon: MapPin },
    { name: 'graph', path: '/graph', icon: PieIcon },
  ];

  return (
    <aside className="w-64 bg-pink-600 text-white flex flex-col h-full shadow-lg z-10 flex-shrink-0">
      <div className="flex flex-col items-center mt-10 mb-8">
        <div className="bg-white p-3 rounded-full mb-4 shadow-md">
          <User size={48} className="text-pink-600" />
        </div>
        <h2 className="text-xl font-bold tracking-wider">JOHN DON</h2>
        <p className="text-pink-200 text-sm mt-1">johndon@company.com</p>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-3 rounded-xl transition-colors ${
                isActive
                  ? 'bg-pink-700 font-semibold shadow-inner'
                  : 'hover:bg-pink-500/50 text-pink-100'
              }`
            }
          >
            <item.icon size={20} />
            <span className="capitalize">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}