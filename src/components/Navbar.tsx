import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md dark:bg-gray-900/90">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-sm">
            <span className="text-lg font-bold">AI</span>
          </div>
          <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-xl font-bold text-transparent dark:text-white">
            AI Social Matrix Pro
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex dark:text-gray-300">
          <Link href="/#features" className="transition-colors hover:text-primary">
            产品方案
          </Link>
          <Link href="/tools" className="transition-colors hover:text-primary">
            AI文案中心
          </Link>
          <Link href="/hot-topics" className="transition-colors hover:text-primary">
            热点监控
          </Link>
          <Link href="/analytics" className="transition-colors hover:text-primary">
            数据分析
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-primary">
            定价
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {session ? (
            <div className="group relative">
              <button type="button" className="flex items-center gap-2">
                <span className="hidden text-gray-600 dark:text-gray-300 sm:inline">
                  {session.user?.name || session.user?.email}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {session.user?.name?.charAt(0) || session.user?.email?.charAt(0)}
                  </span>
                </div>
              </button>
              <div className="absolute right-0 z-50 mt-2 hidden w-48 rounded-md border border-gray-100 bg-white py-2 shadow-lg group-hover:block dark:border-gray-700 dark:bg-gray-800">
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  仪表盘
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  个人中心
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  账号设置
                </Link>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  退出登录
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-300"
              >
                登录
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:brightness-110"
              >
                免费开始使用
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
