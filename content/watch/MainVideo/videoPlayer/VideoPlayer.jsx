import { useWatchContext } from '@/context/Watch';
import VideoPlayerContainer from './VideoPlayerContainer';

const VideoPlayer = ({ getInstance }) => {
  const { watchInfo } = useWatchContext()
  // return <VideoPlayerContainer getInstance={getInstance} />;
  return watchInfo?.iframe ?
    <iframe src={watchInfo?.url} className="aspect-video" />
    : <VideoPlayerContainer getInstance={getInstance} />;
};

export default VideoPlayer;
