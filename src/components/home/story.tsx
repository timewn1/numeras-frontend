import { useState } from 'react';

import StoryCatalog from '../global/storyCatalog';

import Story_img from '../../assets/images/story.png';

import StoryData from '../../assets/json/stories.json';

import { StoryInterface } from '../../common/style';

export default function Story() {
  const [storyData, SetStoryData] = useState<StoryInterface[]>(StoryData as any);
  return (
    <>
      <div className="position-relative">
        <img width="60%" src={Story_img} alt="story" />
        <div className="position-absolute d-flex align-items-center justify-content-end top-0 h-100">
          <div className="bg-light px-5 py-4 border-1 x-story">
            <div className="px-4 py-4">
              <p className="font-15 wei-500 mb-1">FEATURED STORIES</p>
              <p className="font-22 wei-700 mb-3 text-black">Story Title Goes Here</p>
              <div>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Phasellus ut
                imperdiet justo. Quisque pellentesque ac elit maximus viverra. Suspendisse urna tellus, maximus nec est
                quis, sagittis tincidunt lorem.
              </div>
              <button className="btn btn-main btn-border font-13 my-4 wei-500">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {storyData.map((data: StoryInterface, ind: number) => (
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={ind}>
            <StoryCatalog propsData={{ ...data, parent: 'story' }} />
          </div>
        ))}
      </div>
    </>
  );
}
