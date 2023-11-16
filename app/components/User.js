"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faStar,
  faThumbsUp,
  faEye,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function User(props) {
  const handleScroll = () => {
    const banner = document.querySelector(".banner-image");
    const scrollValue = window.scrollY;
    banner.style.transform = `translateY(${scrollValue * 0.5}px)`;
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="relative h-48 overflow-hidden">
        <Image
          className="w-full absolute top-0 left-0 transform translate3d(0, 0, 0) banner-image"
          src={`/${props.data.username}_banner.png`}
          alt="Profile Banner"
          width={390}
          height={192}
          priority
        />
      </div>
      <div className="relative px-7 -top-8">
        <div className="flex flex-row items-end ">
          <div>
            <Image
              className="rounded-full border-2 border-gray-600"
              src={`/${props.data.username}_profile.png`}
              alt="Profile Picture"
              width={120}
              height={120}
            />
          </div>
          <div className="ml-3">
            <div className="flex items-center">
              <p className="font-semibold">{props.data.name} </p>
              {props.data.pro ? (
                <div className="rounded-full w-4 h-4 bg-[#361e6d] flex align-middle text-xs mx-1">
                  <FontAwesomeIcon
                    icon={faGem}
                    style={{ color: "#fff" }}
                    className="m-auto"
                  />
                </div>
              ) : null}
              {props.data.verified ? (
                <div className="rounded-full w-4 h-4 bg-[#58e69b] flex align-middle text-xs">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#000" }}
                    className="m-auto"
                  />
                </div>
              ) : null}
            </div>
            <div className="flex flex-row text-gray-400">
              <div className="pr-2 pt-2 text-center cursor-pointer">
                <div className="border rounded-md px-3 font-bold min-w-20">
                  <p>{props.data.followers}</p>
                </div>
                <p className="text-xs">Followers</p>
              </div>
              <div className="pr-2 pt-2 text-center cursor-pointer">
                <div className="border rounded-md px-3 font-bold min-w-20">
                  <p>{props.data.following}</p>
                </div>
                <p className="text-xs">Following</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 text-[15px]">
          {props.data.bio} <br />
          <Link
            href={`https://instagram.com/${props.data.instagram}`}
            className="text-[#62b9ce] text-sm"
          >
            https://instagram.com/{props.data.instagram}
          </Link>
          <div className="grid grid-rows-1 grid-flow-col text-xs w-3/4 pt-3">
            <div className="flex items-center">
              <div className="bg-[#62b9ce] w-6 h-6 rounded-full flex align-middle me-1">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#ffffff" }}
                  className="m-auto"
                />
              </div>
              <p>{props.data.stars}</p>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow-400 w-6 h-6 rounded-full flex align-middle me-1">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  style={{ color: "#ffffff" }}
                  className="m-auto"
                />
              </div>
              <p>{props.data.upvotes}</p>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-500 w-6 h-6 rounded-full flex align-middle me-1">
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ color: "#ffffff" }}
                  className="m-auto"
                />
              </div>
              <p>{props.data.views}</p>
            </div>
            <div className="flex items-center">
              <div className="bg-pink-600 w-6 h-6 rounded-full flex align-middle me-1">
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "#ffffff" }}
                  className="m-auto"
                />
              </div>
              <p>{props.data.likes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
