import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  FaHourglassHalf,
  FaRegEye,
  FaFire,
  FaCloudUploadAlt,
  FaTv
} from "react-icons/fa";

export default (VideoDescription = ({ video }) => {
  // render db-data for display
  const postedAgo = moment(video.postedTime).fromNow();
  const views = video.viewCount.toLocaleString() + " views";
  const duration = moment.duration(video.duration, "seconds").humanize();
  const url = `https://youtube.com/watch?v=${video._id}`;
  const vps = (video.viewsPerSec || 0).toFixed(2) + " v/s";

  return (
    <div className="VideoDescription">
      <a
        href={url}
        target="_blank"
        rel="noopener"
        className="VideoDescription__title"
      >
        {video.title}
      </a>

      <div className="VideoDescription__info">
        <Link
          to={`/channel/${video.channelId}/`}
          className="VideoDescription__channel"
        >
          <FaTv /> {video.channelTitle}
        </Link>

        <div className="VideoDescription__text">
          <div>
            <FaCloudUploadAlt /> {postedAgo}
          </div>
          <div>
            <FaFire /> ({vps})
          </div>
          <div>
            <FaHourglassHalf /> {duration}
          </div>
          <div>
            <FaRegEye /> {views}
          </div>
        </div>
      </div>
    </div>
  );
});
