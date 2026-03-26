import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">AI</span>
          </div>
          <span className="text-xl font-bold text-gray-800 dark:text-white">AI Social Matrix Pro</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
            首页
          </Link>
          <Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
            功能
          </Link>
          <Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
            价格
          </Link>
          
          {session ? (
            <div className="relative group">
              <button className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-300">{session.user?.name || session.user?.email}</span>
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {session.user?.name?.charAt(0) || session.user?.email?.charAt(0)}
                  </span>
                </div>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-50 hidden group-hover:block">
                <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  仪表盘
                </Link>
                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  个人中心
                </Link>
                <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  账号设置
                </Link>
                <button 
                  onClick={() => signOut()}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  退出登录
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                登录
              </Link>
              <Link href="/register" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
                注册
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;