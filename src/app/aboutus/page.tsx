import Image from "next/image";
export default function Contact() {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center bg-gray-300  ">
        <h1 className="item-center text-center font-bold text-4xl">
          Learn More About Us.
        </h1>
        <Image
          src={"/about.webp"}
          alt="image"
          width={1000}
          height={50}
          className="items-center ml-11"
        />
        <div className="mt-5 mb-10 flex flex-col gap-6 ">
        <p className="item-center justify-center self-center font-bold w-[1000px]">
          Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud
          cupidatat dolor sunt sint sit nisi est eu exercitation incididunt
          adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor
          dolor irure velit commodo cillum sit nulla ullamco magna amet magna
          cupidatat qui labore cillum sit in tempor veniam consequat non laborum
          adipisicing aliqua ea nisi sint.
        </p>

        <p className="item-center justify-center self-center  w-[1000px]">
          Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud
          cupidatat dolor sunt sint sit nisi est eu exercitation incididunt
          adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor
          dolor irure velit commodo cillum sit nulla ullamco magna amet magna
          cupidatat qui labore cillum sit in tempor veniam consequat non laborum
          adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore
          culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate
          enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla
          nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
        </p>

        <p className="item-center justify-center self-center w-[1000px]">
          Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud
          cupidatat dolor sunt sint sit nisi est eu exercitation incididunt
          adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor
          dolor irure velit commodo cillum sit nulla ullamco.
        </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mb-[100px]">
  {/* <!-- First Item --> */}
  <div className="bg-blue-100 p-6 rounded-md shadow-lg">
    <h1 className="text-2xl font-bold mb-4">Who Are We</h1>
    <p className="text-lg">
      Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim
      mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt
      dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute
      ullamco Duis laborum ad non pariatur sit.
    </p>
  </div>
  {/* <!-- Second Item --> */}
  <div className="bg-green-100 p-6 rounded-md shadow-lg">
    <h1 className="text-2xl font-bold mb-4">Our Mission</h1>
    <p className="text-lg">
      Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim
      mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt
      dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute
      ullamco Duis laborum ad non pariatur sit.
    </p>
  </div>
  {/* <!-- Third Item --> */}
  <div className="bg-yellow-100 p-6 rounded-md shadow-lg">
    <h1 className="text-2xl font-bold mb-4">Our Values</h1>
    <p className="text-lg">
      Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim
      mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt
      dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute
      ullamco Duis laborum ad non pariatur sit.
    </p>
  </div>
  {/* <!-- Fourth Item --> */}
  <div className="bg-purple-100 p-6 rounded-md shadow-lg">
    <h1 className="text-2xl font-bold mb-4">Our Vision</h1>
    <p className="text-lg">
      Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim
      mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt
      dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute
      ullamco Duis laborum ad non pariatur sit.
    </p>
  </div>
</div>

    </div>
  );
}
