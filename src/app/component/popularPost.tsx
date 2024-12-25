import Image from "next/image";
import Link from "next/link";

export default function Post() {
  return (
    <div className="flex items-center justify-center bg-gray-100 py-10">
      <div className="grid lg:grid-cols-2 gap-8 p-8 md:grid-cols-1 w-full max-w-[1200px]">
        {/* Popular Posts */}
        <div className="popularpost grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              src: "/wheel-150.jpg.webp",
              title: "Visiting Theme Parks Improves Your Health",
              date: "Dec 19, 2017",
            },
            {
              src: "/img2.webp",
              title: "Absolutely No Sugar Oatmeal Cookies.",
              date: "Dec 19, 2017",
            },
            {
              src: "/img3.webp",
              title: "10 Interesting Facts About Caffeine.",
              date: "Dec 19, 2017",
            },
            {
              src: "/img4.webp",
              title: "Key Benefits Of Family Photography.",
              date: "Dec 19, 2017",
            },
            {
              src: "/img4.webp",
              title: "Throwback To The Good Old Days.",
              date: "Dec 19, 2017",
            },
            {
              src: "/img6.webp",
              title: "Healthy Mediterranean Salad Recipes",
              date: "Dec 19, 2017",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Image src={post.src} alt="image" width={200} height={120} />
              <div className="mt-4 text-sm">
                <Link
                  className="font-bold hover:text-blue-400 block text-base"
                  href={"#"}
                >
                  {post.title}
                </Link>
                <p className="text-gray-500">By John Doe on {post.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* About Us */}
        <div className="aboutUs bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h1 className="font-bold text-2xl mb-4 text-gray-800">
            About Philosophy
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
            malesuada feugiat. Pellentesque in ipsum id orci porta dapibus.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut
            lacinia in, elementum id enim. Donec sollicitudin molestie
            malesuada.
          </p>
          <div className="mt-6">
            <Image src={"/icon.png"} alt="icon" width={240} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
