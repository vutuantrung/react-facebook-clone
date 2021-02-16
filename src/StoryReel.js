import React from 'react';
import './StoryReel.css';
import Story from './Story';
import * as localImage from './LocalImage';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image={localImage.imgRand0}
        profileSrc={localImage.avatarRand0}
        title="Weldon Petronius"
      />
      <Story
        image={localImage.imgRand1}
        profileSrc={localImage.avatarRand1}
        title="Wischard Berny"
      />
      <Story
        image={localImage.imgRand2}
        profileSrc={localImage.avatarRand2}
        title="Atticus Dionýz"
      />
      <Story
        image={localImage.imgRand3}
        profileSrc={localImage.avatarRand3}
        title="Wafula Swapan"
      />
      <Story
        image={localImage.imgRand4}
        profileSrc={localImage.avatarRand4}
        title="Hróaldr Zephyros"
      />
    </div>
  );
}

export default StoryReel;
//./static/profile/bg-aoi.jpg
