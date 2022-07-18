import { useState } from 'react';

import StoryCatalog from '../global/storyCatalog';

import VideoData from '../../assets/json/video.json';

import { VideoInterface } from '../../common/style';

export default function Video() {
  const [videoData, setVideoData] = useState<VideoInterface[]>(VideoData as any);

  return (
    <div className="bg-greyred mt-5 pt-4 pb-4">
      <div className="p-main1 pb-1 mt-1">
        <div className="d-flex justify-content-between">
          <div className="font-22">Latest Video</div>
          <button className="btn btn-main font-13 wei-500 px-0">VIEW MORE VIDEOS</button>
        </div>
        <div className="row">
          {videoData.map((data: VideoInterface, ind: number) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={ind}>
              <StoryCatalog propsData={{ ...data, parent: 'story' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
