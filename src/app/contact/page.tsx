import Image from "next/image";
export default function Contact() {
  return (
    <>
      <div>
        <h1 className="item center text-center font-bold text-4xl">
          FEEL FREE TO CONTACT US
        </h1>
        <Image
          src={"/map.png"}
          alt="image"
          width={800}
          height={100}
          className="items-center ml-[200px] mt-11"
        />
        <div className="para flex flex-col gap-6 justify-center ml-[200px]  mt-10 ">
          <p className="font-bold">
            Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna
            occaecat Excepteur nisi esse <br />
            veniam dolor consectetur minim qui nisi esse deserunt commodo ea
            enim ullamco non voluptate consectetur minim aliquip Ut incididunt
            amet ut cupidatat.
          </p>

          <p>
            Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
            nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
            incididunt adipisicing veniam velit id fugiat enim mollit amet anim
            veniam dolor dolor irure velit commodo cillum sit <br />
            nulla ullamco magna amet magna cupidatat qui labore cillum sit in
            tempor veniam consequat non laborum adipisicing aliqua ea nisi sint
            ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit
            minim cupidatat ut dolor voluptate enim veniam consequat occaecat
            fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua
            laborum mollit quis nostrud sed sed.
          </p>
        </div>
        <div className="div flex flex-row justify-evenly gap-4 items-center text-center mt-12">
          <div className="where  ">
            <h1 className="font-bold text-xl">Where to Find Us</h1>

            <p>
              1600 Amphitheatre Parkway
              <br /> Mountain View,CA
              <br /> 94043 US
            </p>
          </div>

          <div className="contact ml-2">
            <h1 className="font-bold text-xl">Contact Info</h1>

            <p>
              contact@philosophywebsite.com
              <br />
              info@philosophywebsite.com
              <br />
              Phone: +1 123 456
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <form className="w-full max-w-lg  ">
            <h1 className="text-3xl font-bold mb-6">Say Hello.</h1>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="mt-1 block w-full px-3 py-2 border rounded-md "
              />
            </div>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black"
              />
            </div>
            {/* Website Field */}
            <div className="mb-4">
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700"
              >
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                placeholder="Website"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black"
              />
            </div>
            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md font-bold hover:bg-gray-800 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
