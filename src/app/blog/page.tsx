 

import Image from "next/image";
import CommentSection from "../component/commentSection";

export default function Blog() {
  

  return (
    <div>
        
      <div className="flex flex-col justify-center items-center gap-5 mt-10 mb-10">
        <h1 className="font-bold text-[30px]">
          This Is A Standard Format Post.
        </h1>
        <h5 className="text-[20px]">December 16, 2017 In Lifestyle Travel</h5>
        <Image
          src={"/i2.webp"}
          alt="image"
          width={1000}
          height={50}
          className=""
        />
        <div className="font-bold w-[1000px] text-lg bg-gray-100 p-4 rounded shadow-md">
          <p>
            Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
            nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
            incididunt adipisicing veniam velit id fugiat enim mollit amet anim
            veniam dolor dolor irure velit commodo cillum sit nulla ullamco
            magna amet magna cupidatat qui labore cillum sit in tempor veniam
            consequat non laborum adipisicing aliqua ea nisi sint.
          </p>
        </div>
        <div className="w-[1000px] text-lg bg-gray-100 p-4 rounded shadow-md">
          <p>
            Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
            nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
            incididunt adipisicing veniam velit id fugiat enim mollit amet anim
            veniam dolor dolor irure velit commodo cillum sit nulla ullamco
            magna amet magna cupidatat qui labore cillum sit in tempor veniam
            consequat non laborum adipisicing aliqua ea nisi sint ut quis
            proident ullamco ut dolore culpa occaecat ut laboris in sit minim
            cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat
            in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum
            mollit quis nostrud sed sed.
          </p>
        </div>
        <Image
          src={"/l5.webp"}
          alt="image"
          width={600}
          height={30}
          className="w-[1000px] h-[700px]"
        />

        <div className="flex flex-col gap-6 text-lg justify-center items-center w-[1000px] mb-10 mt-7 bg-gray-100 p-4 rounded shadow-md">
          <h1 className="font-bold text-[35px] ml-0">Large Heading</h1>
          <p>
            Harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus omnis voluptas assumenda est id quod maxime placeat facere
            possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet ut et
          </p>
          <p className="w-[700px] font-bold text-[20px]">
            This is a simple example of a styled blockquote. A blockquote tag
            typically specifies a section that is quoted from another source of
            some sort, or highlighting text in your post.
          </p>
          <p>
            Odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa. Aenean
            eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit
            minim cupidatat ut dolor voluptate enim veniam consequat occaecat
            fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua
            laborum mollit quis nostrud sed sed.
          </p>
          <h1 className="font-bold text-[35px] ml-0">Smaller Heading</h1>
          <p>
            Dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit
            libero, a pharetra augue laboris in sit minim cupidatat ut dolor
            voluptate enim veniam consequat occaecat fugiat in adipisicing in
            amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud
            sed sed.
          </p>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col justify-start text-xl w-[700px]">
            <div className="ml-10 mt-4 mb-5 bg-blue-100 p-6 rounded-md shadow-lg">
              <p>font-size: 1.4rem</p>
              <p>margin: 0 .2rem</p>
              <p>padding: .2rem .6rem</p>
              <p>white-space: nowrap</p>
              <p>background: #F1F1F1</p>
              <p>border: 1px</p>
              <p>solid #E1E1E1</p>
              <p>border-radius: 3px</p>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-gray-100 p-4 rounded shadow-md">
              <p className="mb-4">
                Odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Donec nulla non metus auctor fringilla.
                  <ul className="list-disc list-inside pl-6 space-y-2">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                </li>
                <li>Donec nulla non metus auctor fringilla.</li>
                <li>Donec nulla non metus auctor fringilla.</li>
              </ul>
            </div>
            <div className="mt-4 bg-gray-100 p-4 rounded shadow-md">
              <p>
                Odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum.
              </p>
            </div>
          </div>
        </div>

        <CommentSection />
      </div>
    </div>
  );
}
