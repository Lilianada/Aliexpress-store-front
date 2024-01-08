import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import "./style.scss";

export default function HeaderBanner() {
  return (
    <section className="header_banner">
      {/* Header banner */}
      <div className="cover_photo">
        <Image
          src="/images/canvas_moodboard.png"
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
            Providing you with a curated selection of my favorite or recommended
            items from Aliexpress, spanning categories such as activewear,
            clothing, content creation essentials, home decor, and more. 💕
            Follow me on Instagram, Pinterest and TikTok for more content!
          </p>
          {/* social media icons */}
          <div className="social_icons">
            <Link href="https://www.instagram.com/defitcreative/" className="icon">
              <FaInstagram />
            </Link>
            <Link href="https://www.pinterest.com/defitcreative/" className="icon">
              <FaPinterest />
            </Link>
            <Link href="https://www.tiktok.com/@defitcreative" className="icon">
              <FaTiktok />
            </Link>
          </div>
        </div>
        <div className="share_button">
          <button className="share">Share</button>
        </div>
      </div>
    </section>
  );
}
