import './style.scss';

import Home1 from '../../assets/images/home1.png';

import Describe from '../../components/home/describe';
import Syndicates from '../../components/home/syndicates';
import StartSyndicate from '../../components/home/startSyndicate';
import Story from '../../components/home/story';
import Video from '../../components/home/video';
import AutoMobile from '../../components/home/autoMobile';
import Equestrian from '../../components/home/equestrian';
import Watch from '../../components/home/watch';

const Home = () => {
  return (
    <>
      <div className="position-relative">
        <img width="100%" src={Home1} alt="home1" />
        <div className="position-absolute x-home-1">
          <p className="font-35 wei-600 mb-1">Fractionalize&nbsp;what&nbsp;you&nbsp;own.</p>
          <p className="font-35 wei-600 mb-0 mt-1">Own&nbsp;a&nbsp;piece&nbsp;of&nbsp;what&nbsp;you&nbsp;want.</p>
        </div>
      </div>
      <div className="p-main1">
        <Describe />
        <Syndicates />
        <StartSyndicate />
        <Story />
      </div>
      <Video />
      <div className="p-main1">
        <AutoMobile />
        <Equestrian />
        <Watch />
      </div>
    </>
  );
};

export default Home;
