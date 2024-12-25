// import React from "react";
// import Image from "next/image";
// import Link from "next/link"

// const CommentSection = () => {
//   return (
//     <div>
//         <div className= " flex flex-col gap-5 justify-center items-center  bg-gray-200 py-8 px-4">
//       {/* Post Tags */}
//       <div className="mb-6 ">
        
//         <div className="flex gap-2">
//         <h4 className="font-semibold text-xl text-gray-800 mb-2">Post Tags--------</h4>
//           {["orci", "lectus", "varius", "turpis"].map((tag, index) => (
//             <span
//               key={index}
//               className="px-4 py-1 bg-gray-200 text-gray-700 rounded-full text-lg"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Author Info */}
//       <div className="flex  gap-4 mb-6">
//         <img
//           src="/i1.webp" // Replace with your image path
//           alt="Author"
//           className="w-16 h-16 rounded-full"
//         />
//         <div className="flex flex-col justify-center  gap-5  w-[1000px]">
           
//           <h5 className="font-bold text-gray-900 items-start text-2xl ">Jonathan Doe</h5>
//           <p className="text-gray-700 text-xl ">
//             Alias aperiam at debitis deserunt dignissimos dolorem doloribus,
//             fuga fugiat impedit laudantium magni maxime nihil nisi quidem
//             quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit
//             amet, consectetur adipiscing elit.
            
//             <p  className="text-blue-500 hover:underline text-lg font-bold">Facebook Twitter GooglePlus Instagram</p>
//           </p>
//         </div>

//       </div>


//       {/* Navigation Links */}
//       <div className="flex gap-[130px] justify-between border-t border-gray-400 pt-5">
//         <Link
//           href="#"
//           className="text-gray-600 text-2xl hover:text-gray-800 hover:underline"
//         >
//           Previous Post <br />
//           <span className="font-bold text-[30px] text-black">Tips on Minimalist Design</span>
//         </Link>
//         <Link
//           href="#"
//           className="text-gray-600 text-2xl hover:text-gray-800 hover:underline"
//         >
//           Next Post <br />
//           <span className="font-bold text-[30px] text-black">Less Is More</span>
//         </Link>
//       </div>
//     </div>
//     <div className="max-w-4xl mx-auto p-6 bg-gray-200 mt-10 mb-10">
//       <h2 className="text-2xl font-bold mb-4">5 Comments</h2>

//       {/* Comments */}
//       <div className="space-y-6">
//         {[
//           {
//             name: "Ishita Usaha",
//             date: "Dec 23, 2024",
//             message:
//               "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//           },
//           {
//             name: "John Doe",
//             date: "Nov 25, 2024",
//             message:
//               "Eum temporibus distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//           },
//           {
//             name: "Kishika Hansa",
//             date: "Oct 18, 2024",
//             message:
//               "Dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//           },
//           {
//             name: "John Doe",
//             date: "Sep 09, 2024",
//             message:
//               "Tempore deleniti harum maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//           },
//           {
//             name: "Shikamaru Nara",
//             date: "Aug 15, 2024",
//             message:
//               "TypeScript is an amazing language! Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//           },
//         ].map((comment, index) => (
//           <div key={index} className="border-b pb-4">
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-gray-300 rounded-full">
//                 <Image
//                   src={"/i1.webp"}
//                   alt="image"
//                   width={12}
//                   height={12}
//                   className="w-12 h-12 rounded-full cover"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">{comment.name}</h3>
//                 <p className="text-sm text-gray-500">{comment.date}</p>
//               </div>
//             </div>
//             <p className="mt-2 text-gray-700">{comment.message}</p>
//             <button className="mt-2 text-blue-500 hover:underline">
//               Reply
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Add Comment */}
//       <div className="mt-8">
//         <h3 className="text-xl font-bold mb-4">Add Comment</h3>
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
//           />
//           <input
//             type="text"
//             placeholder="Subject"
//             className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default CommentSection;


"use client"
import React, { useState } from "react";

interface Comment {
  name: string;
  date: string;
  message: string;
  image: string | null;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddComment = (event: React.FormEvent) => {
    event.preventDefault();

    if (name && message) {
      const newComment: Comment = {
        name,
        date: new Date().toLocaleString(),
        message,
        image,
      };

      setComments([...comments, newComment]);

      setName("");
      setMessage("");
      setImage(null);
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-gray-200 py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      {/* Display all comments */}
      <div className="space-y-6 w-full max-w-[1000px]">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full">
                  {comment.image && <img src={comment.image} alt="user" className="w-full h-full rounded-full" />}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-2xl">{comment.name}</h5>
                  <p className="text-sm text-gray-500">{comment.date}</p>
                </div>
              </div>
              <p className="text-gray-700 text-xl mt-2">{comment.message}</p>
              <p className="text-blue-500 hover:underline text-lg font-bold">Facebook Twitter GooglePlus Instagram</p>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to add one!</p>
        )}
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleAddComment} className="space-y-4 mt-8 w-full max-w-[1000px]">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
        ></textarea>

        {/* Image upload */}
        <input
          type="file"
          onChange={handleImageUpload}
          accept="image/*"
          className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Submit
        </button>
      </form>

      {/* Example Comment */}
      <div className="mt-10 w-full max-w-[1000px]">
        <h3 className="text-xl font-semibold">Example:</h3>
        <div className="flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md mt-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full">
              <img
                src="i1.webp"
                alt="user"
                className="w-full h-full rounded-full"
              />
            </div>
            <div>
              <h5 className="font-bold text-gray-900 text-2xl">Jonathan Doe</h5>
              <p className="text-sm text-gray-500">Dec 24, 2024, 1:30 PM</p>
            </div>
          </div>
          <p className="text-gray-700 text-xl mt-2">
            Alias aperiam at debitis deserunt dignissimos dolorem doloribus,
            fuga fugiat impedit laudantium magni maxime nihil nisi quidem
            quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <p className="text-blue-500 hover:underline text-lg font-bold">
            Facebook Twitter GooglePlus Instagram
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
