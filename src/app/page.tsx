// "use client";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";
// import Image from "next/image";
// import Link from "next/link";
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

// export default function Home() {
//   return (
    // <div>
    //   <Image
    //     src={"/home.png"}
    //     alt="image"
    //     width={1000}
    //     height={50}
    //     className="w-full h-screen"
    //   />

    //   {/* blog */}
    //   <div
    //     id="blog"
    //     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
    //   >
    //     {/* b1 */}
    //     <Link href="/blog">
    //       <div className="flex flex-col gap-5 w-[350px] text-xl bg-blue-100 p-6 rounded-md shadow-lg cursor-pointer hover:shadow-xl">
    //         <Image
    //           src={"/l1.jpg"}
    //           alt="image"
    //           width={200}
    //           height={200}
    //           className="w-[400px] h-[300px]"
    //         />
    //         <p>December 15, 2017</p>
    //         <h1 className="font-bold text-3xl">Just a Standard Format Post.</h1>
    //         <p>
    //           Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
    //           incididunt mollit id et sit proident dolor nulla sed commodo est
    //           ad minim elit reprehenderit nisi officia aute incididunt velit
    //           sint in aliqua...
    //         </p>
    //         <span className="text-blue-800 font-bold hover:text-black">
    //           Design, Photography
    //         </span>
    //       </div>
    //     </Link>

    //     {/* b2 */}
    //     <Link href="/blog">
    //       <div className="flex flex-col gap-5 w-[350px] text-xl bg-blue-100 p-6 rounded-md shadow-lg">
    //         <Image
    //           src={"/l2.jpg"}
    //           alt="image"
    //           width={200}
    //           height={200}
    //           className="w-[400px] h-[300px]"
    //         />
    //         <p>December 15, 2017</p>
    //         <h1 className="font-bold text-3xl">
    //           10 Interesting Facts About Caffeine.
    //         </h1>
    //         <p>
    //           Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
    //           incididunt mollit id et sit proident dolor nulla sed commodo est
    //           ad minim elit reprehenderit nisi officia aute incididunt velit
    //           sint in aliqua...
    //         </p>
    //         <Link className="text-blue-800 font-bold hover:text-black" href="#">
    //           Design, Photography
    //         </Link>
    //       </div>
    //     </Link>

    //     {/* b3 */}
    //     <Link href="/blog">
    //       <div className="flex flex-col gap-5 w-[350px] text-xl bg-blue-100 p-6 rounded-md shadow-lg">
    //         <Image
    //           src={"/l3.jpg"}
    //           alt="image"
    //           width={200}
    //           height={200}
    //           className="w-[400px] h-[300px]"
    //         />
    //         <p>December 15, 2017</p>
    //         <h1 className="font-bold text-3xl">No Sugar Oatmeal Cookies.</h1>
    //         <p>
    //           Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
    //           incididunt mollit id et sit proident dolor nulla sed commodo est
    //           ad minim elit reprehenderit nisi officia aute incididunt velit
    //           sint in aliqua...
    //         </p>
    //         <Link className="text-blue-800 font-bold hover:text-black" href="#">
    //           Design, Photography
    //         </Link>
    //       </div>
    //     </Link>

    //     {/* b4 */}
    //     <Link href="/blog">
    //       <div className="flex flex-col gap-5 w-[350px] text-xl bg-blue-100 p-6 rounded-md shadow-lg">
    //         <Image
    //           src={"/l4.jpg"}
    //           alt="image"
    //           width={200}
    //           height={200}
    //           className="w-[400px] h-[300px]"
    //         />
    //         <p>December 15, 2017</p>
    //         <h1 className="font-bold text-3xl">
    //           Visiting Theme Parks Improves Your Health.
    //         </h1>
    //         <p>
    //           Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
    //           incididunt mollit id et sit proident dolor nulla sed commodo est
    //           ad minim elit reprehenderit nisi officia aute incididunt velit
    //           sint in aliqua...
    //         </p>
    //         <Link className="text-blue-800 font-bold hover:text-black" href="#">
    //           Design, Photography
    //         </Link>
    //       </div>
    //     </Link>

    //     {/* b5 */}
    //     <Link href="/blog">
    //       <div className="flex flex-col gap-5 w-[350px] text-xl bg-blue-100 p-6 rounded-md shadow-lg">
    //         <Image
    //           src={"/l5.webp"}
    //           alt="image"
    //           width={200}
    //           height={200}
    //           className="w-[400px] h-[300px]"
    //         />
    //         <p>December 15, 2017</p>
    //         <h1 className="font-bold text-3xl">
    //           What Your Music Preference Says About You and Your Personality.
    //         </h1>
    //         <p>
    //           Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
    //           incididunt mollit id et sit proident dolor nulla sed commodo est
    //           ad minim elit reprehenderit nisi officia aute incididunt velit
    //           sint in aliqua...
    //         </p>
    //         <Link className="text-blue-800 font-bold hover:text-black" href="#">
    //           Design, Photography
    //         </Link>
    //       </div>
    //     </Link>

    //     {/* b6 */}
    //     <Link href="/blog">
    //       <div className="flex flex-col gap-5 w-[350px] text-xl bg-blue-100 p-6 rounded-md shadow-lg">
    //         <Image
    //           src={"/l12.webp"}
    //           alt="image"
    //           width={200}
    //           height={200}
    //           className="w-[400px] h-[300px]"
    //         />
    //         <p>December 15, 2017</p>
    //         <h1 className="font-bold text-3xl">
    //           Key Benefits Of Family Photography.
    //         </h1>
    //         <p>
    //           Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
    //           incididunt mollit id et sit proident dolor nulla sed commodo est
    //           ad minim elit reprehenderit nisi officia aute incididunt velit
    //           sint in aliqua...
    //         </p>
    //         <Link className="text-blue-800 font-bold hover:text-black" href="#">
    //           Design, Photography
    //         </Link>
    //       </div>
    //     </Link>

    //     {/* b7 */}
    //     <Link href="/blog">
    //       <div className="flex flex-col gap-5 w-[350px] text-xl bg-blue-100 p-6 rounded-md shadow-lg">
    //         <Image
    //           src={"/l7.webp"}
    //           alt="image"
    //           width={200}
    //           height={200}
    //           className="w-[400px] h-[300px]"
    //         />
    //         <p>December 15, 2017</p>
    //         <h1 className="font-bold text-3xl">
    //           Create Meaningful Family Moments.
    //         </h1>
    //         <p>
    //           Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
    //           incididunt mollit id et sit proident dolor nulla sed commodo est
    //           ad minim elit reprehenderit nisi officia aute incididunt velit
    //           sint in aliqua...
    //         </p>
    //         <Link className="text-blue-800 font-bold hover:text-black" href="#">
    //           Design, Photography
    //         </Link>
    //       </div>
    //     </Link>

    //     {/* b8 */}
    //     <Link href="/blog">
    //       <div className="flex flex-col gap-5 w-[350px] text-xl bg-blue-100 p-6 rounded-md shadow-lg">
    //         <Image
    //           src={"/l8.webp"}
    //           alt="image"
    //           width={200}
    //           height={200}
    //           className="w-[400px] h-[300px]"
    //         />
    //         <p>December 15, 2017</p>
    //         <h1 className="font-bold text-3xl">
    //           Throwback To The Good Old Days.
    //         </h1>
    //         <p>
    //           Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
    //           incididunt mollit id et sit proident dolor nulla sed commodo est
    //           ad minim elit reprehenderit nisi officia aute incididunt velit
    //           sint in aliqua...
    //         </p>
    //         <Link className="text-blue-800 font-bold hover:text-black" href="#">
    //           Design, Photography
    //         </Link>
    //       </div>
    //     </Link>

    //     {/* b9 */}
    //     <Link href="/blog">
    //       <div className="flex flex-col gap-5 w-[350px] text-xl bg-blue-100 p-6 rounded-md shadow-lg">
    //         <Image
    //           src={"/l9.webp"}
    //           alt="image"
    //           width={200}
    //           height={200}
    //           className="w-[400px] h-[300px]"
    //         />
    //         <p>December 15, 2017</p>
    //         <h1 className="font-bold text-3xl">
    //           Just Another Standard Format Post.
    //         </h1>
    //         <p>
    //           Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
    //           incididunt mollit id et sit proident dolor nulla sed commodo est
    //           ad minim elit reprehenderit nisi officia aute incididunt velit
    //           sint in aliqua...
    //         </p>
    //         <Link className="text-blue-800 font-bold hover:text-black" href="#">
    //           Design, Photography
    //         </Link>
    //       </div>
    //     </Link>

    //     {/* b10 */}
    //     <Link href="/blog">
    //       <div className="flex flex-col gap-5 w-[350px] text-xl bg-blue-100 p-6 rounded-md shadow-lg">
    //         <Image
    //           src={"/l10.webp"}
    //           alt="image"
    //           width={200}
    //           height={200}
    //           className="w-[400px] h-[300px]"
    //         />
    //         <p>December 15, 2017</p>
    //         <h1 className="font-bold text-3xl">
    //           Planning Your First Trip to Sydney.
    //         </h1>
    //         <p>
    //           Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
    //           incididunt mollit id et sit proident dolor nulla sed commodo est
    //           ad minim elit reprehenderit nisi officia aute incididunt velit
    //           sint in aliqua...
    //         </p>
    //         <Link className="text-blue-800 font-bold hover:text-black" href="#">
    //           Design, Photography
    //         </Link>
    //       </div>
    //     </Link>

    //     {/* b12 */}
    //     <Link href="/blog">
    //       <div className="flex flex-col gap-5 w-[350px] text-xl bg-blue-100 p-6 rounded-md shadow-lg">
    //         <Image
    //           src={"/l11.webp"}
    //           alt="image"
    //           width={200}
    //           height={200}
    //           className="w-[400px] h-[300px]"
    //         />
    //         <p>December 15, 2017</p>
    //         <h1 className="font-bold text-3xl">
    //           The Only Resource You Will Need To Start a Blog Using WordPress.
    //         </h1>
    //         <p>
    //           Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
    //           incididunt mollit id et sit proident dolor nulla sed commodo est
    //           ad minim elit reprehenderit nisi officia aute incididunt velit
    //           sint in aliqua...
    //         </p>
    //         <Link className="text-blue-800 font-bold hover:text-black" href="#">
    //           Design, Photography
    //         </Link>
    //       </div>
    //     </Link>
    //   </div>
    // </div>

  

//   );
// }



"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const blogs = [
    {
      id: 1,
      date: "December 15, 2017",
      title: "Just a Standard Format Post.",
      description:
        "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...",
      image: "/l1.jpg",
      category: "Design, Photography",
    },
    {
      id: 2,
      date: "December 15, 2017",
      title: "10 Interesting Facts About Caffeine.",
      description:
        "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...",
      image: "/l2.jpg",
      category: "Design, Photography",
    },
    {
      id: 3,
      date: "December 15, 2017",
      title: "No Sugar Oatmeal Cookies.",
      description:
        "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...",
      image: "/l3.jpg",
      category: "Design, Photography",
    },
    {
      id: 4,
      date: "December 15, 2017",
      title: "Visiting Theme Parks Improves Your Health.",
      description:
        "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...",
      image: "/l4.jpg",
      category: "Design, Photography",
    },
    {
      id: 5,
      date: "December 15, 2017",
      title:
        "What Your Music Preference Says About You and Your Personality.",
      description:
        "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...",
      image: "/l5.webp",
      category: "Design, Photography",
    },
    {
      id: 6,
      date: "December 15, 2017",
      title:
        "What Your Music Preference Says About You and Your Personality.",
      description:
        "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...",
      image: "/l5.webp",
      category: "Design, Photography",
    },
    {
      id: 7,
      date: "December 15, 2017",
      title:
        "What Your Music Preference Says About You and Your Personality.",
      description:
        "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...",
      image: "/l5.webp",
      category: "Design, Photography",
    },
    {
      id: 8,
      date: "December 15, 2017",
      title:
        "What Your Music Preference Says About You and Your Personality.",
      description:
        "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...",
      image: "/l5.webp",
      category: "Design, Photography",
    },
    {
      id: 9,
      date: "December 15, 2017",
      title:
        "What Your Music Preference Says About You and Your Personality.",
      description:
        "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...",
      image: "/l5.webp",
      category: "Design, Photography",
    },

  ];

  return (
    <div>
      {/* Hero Image */}
      <Image
        src={"/home.png"}
        alt="image"
        width={1000}
        height={50}
        className="w-full h-screen"
      />

      {/* Blog Section */}
      <div
        id="blog"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {blogs.map((blog) => (
          <Link key={blog.id} href="/blog">
            <div className="flex flex-col gap-5 w-[350px] text-xl bg-blue-100 p-6 rounded-md shadow-lg cursor-pointer hover:shadow-xl">
              <Image
                src={blog.image}
                alt="Blog image"
                width={200}
                height={200}
                className="w-[400px] h-[300px]"
              />
              <p>{blog.date}</p>
              <h1 className="font-bold text-3xl">{blog.title}</h1>
              <p>{blog.description}</p>
              <span className="text-blue-800 font-bold hover:text-black">
                {blog.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
