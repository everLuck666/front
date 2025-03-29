import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold">
          MyForum
        </Link>
        <div className="space-x-6">
          <Link href="/forum/post" className="hover:text-blue-600 text-black">创建帖子</Link>
          <Link href="/categories" className="hover:text-blue-600">版块</Link>
        </div>
      </nav>
    </header>
  )};