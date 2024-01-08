import React from 'react';
import Image from 'next/image';
import './style.scss';

export default function HeaderBanner() {
  return (
    <section className='header_banner'>
      {/* Header banner */}
      <div className="cover_photo">
      <Image
            src="/images/canvas_moodboard.png"
            alt="banner"
            width={1920}
            height={180}
            className='photo'
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
                className='profile'
            />
        </div>
        <div className="bio_texts">
            <h1 className='title'>Jenny Nguyen</h1>
            <h2 className='subtitle'>Front-end Developer</h2>
            <p className='bio'>
                I am a front-end developer with a passion for design and
                technology. I have a background in graphic design and
                marketing, and I am currently working as a front-end
                developer at a digital agency.
            </p>
        </div>
      </div>
    </section>
  )
}
