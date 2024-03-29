import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaAngleDown,
  FaAngleUp,
  FaYoutube,
} from "react-icons/fa";
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

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Defitcreative",
          text: bioText,
          url: "https://defitcreative-aliexpress.vercel.app", 
        })
        .then(() => console.log("Successfully shared"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert(
        "Web Share API not supported in your browser. You can manually share the link."
      );
    }
  };

  const handleCopyToClipboard = () => {
    const url = "https://defitcreative-aliexpress.vercel.app";
    navigator.clipboard.writeText(url)
      .then(() => {
        alert("URL copied to clipboard");
        // You can display a success message to the user
      })
      .catch(err => {
        console.error("Failed to copy URL: ", err);
        // Handle errors (show error message to the user)
      });
  };
  

  return (
    <section className="header_banner">
      {/* Header banner */}
      <div className="cover_photo">
        <Image
          src="/images/defitcreative.png"
          alt="banner"
          width={1920}
          height={180}
          className="photo"
          priority
        />
      </div>
      {/* Profile picture and bio */}
      <div className="bio_wrap">
        <div className="profile_pic">
          <Image
            src="/images/Lilian.jpg"
            alt="profile picture"
            width={180}
            height={180}
            className="profile"
            priority
          />
        </div>
        <div className="bio_texts">
          <h1 className="title">Defitcreative</h1>
          <h2 className="subtitle">Earns Commission on every purchase</h2>
          <p className="bio">
            {visibleText}
            {showMore || words.length < initialWordLimit ? null : "..."} <br />
            {words.length > initialWordLimit && (
              <button className="see_more" onClick={handleShowMore}>
                {showMore ? (
                  <span>
                    See less <FaAngleUp />
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
            <Link
              href="https://www.youtube.com/@defitcreative"
              className="icon"
            >
              <FaYoutube />
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
            <Link
              href="https://www.youtube.com/@defitcreative"
              className="icon"
            >
              <FaYoutube />
            </Link>
          </div>
          <div className="share_button">
            <button className="share" onClick={handleCopyToClipboard}>Copy link</button>
          </div>
        </div>
      </div>
    </section>
  );
}
