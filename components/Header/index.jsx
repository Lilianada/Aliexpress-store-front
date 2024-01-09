import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPinterest, FaTiktok, FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./style.scss";

export default function HeaderBanner() {
  const initialWordLimit = 20;
  const [showMore, setShowMore] = useState(false);

  const bioText =
    "Providing you with a curated selection of my favorite or recommended items from Aliexpress, spanning categories such as activewear, clothing, content creation essentials, home decor, and more. 💕 Follow me on Instagram, Pinterest, and TikTok for more content!";

  const words = bioText.split(/\s+/);
  const visibleText = showMore
    ? bioText
    : words.slice(0, initialWordLimit).join(" ");

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="header_banner">
      {/* Header banner */}
      <div className="cover_photo">
        <Image
          src="/images/defitcreative.jpg"
          alt="banner"
          width={1920}
          height={180}
          className="photo"
        />
      </div>
      {/* Profile picture and bio */}
      <div className="bio_wrap">
        <div className="profile_pic">
          <Image
            src="/images/profile.jpg"
            alt="profile picture"
            width={180}
            height={180}
            className="profile"
          />
        </div>
        <div className="bio_texts">
          <h1 className="title">Defitcreative</h1>
          <h2 className="subtitle">Earns Commission on every purchase</h2>
          <p className="bio">
            {visibleText}
            {showMore || words.length < initialWordLimit ? null : "..."}
            {" "}
            <br/>
            {words.length > initialWordLimit && (
              <button className="see_more" onClick={handleShowMore}>
                {showMore ? (
                  <span>
                     See less <FaAngleUp/>
                  </span>
                ) : (
                  <span>
                    See more
                    <FaAngleDown />
                  </span>
                )}
              </button>
            )}
          </p>
          {/* social media icons for desktop */}
          <div className="social_icons">
            <Link
              href="https://www.instagram.com/defitcreative/"
              className="icon"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.pinterest.com/defitcreative/"
              className="icon"
            >
              <FaPinterest />
            </Link>
            <Link href="https://www.tiktok.com/@defitcreative" className="icon">
              <FaTiktok />
            </Link>
          </div>
        </div>

        {/* social media icons and share button for mobile  */}
        <div className="mobile_links">
        <div className="social_icons">
            <Link
              href="https://www.instagram.com/defitcreative/"
              className="icon"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.pinterest.com/defitcreative/"
              className="icon"
            >
              <FaPinterest />
            </Link>
            <Link href="https://www.tiktok.com/@defitcreative" className="icon">
              <FaTiktok />
            </Link>
          </div>
          <div className="share_button">
          <button className="share">Share</button>
        </div>
        </div>
      </div>
    </section>
  );
}
