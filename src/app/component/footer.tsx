
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {/* Quick Links */}
        <div>
          <h2 className="text-white font-bold uppercase mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/styles" className="hover:underline">Styles</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Archives */}
        <div>
          <h2 className="text-white font-bold uppercase mb-4">Archives</h2>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">January 2018</Link></li>
            <li><Link href="#" className="hover:underline">December 2017</Link></li>
            <li><Link href="#" className="hover:underline">November 2017</Link></li>
            <li><Link href="#"className="hover:underline">October 2017</Link></li>
            <li><Link href="#" className="hover:underline">September 2017</Link></li>
            <li><Link href="#"className="hover:underline">August 2017</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-white font-bold uppercase mb-4">Social</h2>
          <ul className="space-y-2">
            <li><Link href="#"className="hover:underline">Facebook</Link></li>
            <li><Link href="#"className="hover:underline">Instagram</Link></li>
            <li><Link href="#"className="hover:underline">Twitter</Link></li>
            <li><Link href="#"className="hover:underline">Pinterest</Link></li>
            <li><Link href="#"className="hover:underline">Google</Link></li>
            <li><Link href="#"className="hover:underline">LinkedIn</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-bold uppercase mb-4">Our Newsletter</h2>
          <p className="mb-4">
            Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 text-sm bg-gray-800 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © Copyright Philosophy 2018 | Site Template by <Link href="#"className="text-white hover:underline">Colorlib</Link>
      </div>
    </footer>
  );
}
