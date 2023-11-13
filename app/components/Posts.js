import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function Posts(props) {
  return (
    <div className="">
      <div className="flex">
        <div className="border-t-2 border-e-2 w-fit ps-5 pe-2 py-2 whitespace-nowrap text-[#4491cf] font-semibold">
          {props.posts.length} Posts
        </div>
        <div className="border-b-2 w-full"></div>
      </div>

      <ul>
        {props.posts.map((post, index) => (
          <Link href={post.link} key={index} className="item">
            <div className="py-8 border-b-2 px-5 min-h-fit">
              <div className="flex justify-between">
                <h2 className="font-semibold text-xl capitalize">
                  {post.title}
                </h2>
                <div className="bg-yellow-400 w-6 h-6 rounded-full flex align-middle">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    style={{ color: "#ffffff" }}
                    className="m-auto"
                  />
                </div>
              </div>

              <p className="pt-3 font-light line-clamp-3">{post.description}</p>

              <div className="flex justify-between text-xs pt-8">
                <div className="font-semibold text-[#797979]">
                  <span className="text-[#62b9ce]">{post.type}</span> by dixitt
                </div>
                <div className="text-[#aeaeae]">
                  {post.date} <span>•</span>{" "}
                  {`${post.read} ${post.read > 1 ? "mins" : "min"}`} Read{" "}
                  <span>•</span>{" "}
                  {`${post.views} ${post.views > 1 ? "Views" : "View"}`}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
