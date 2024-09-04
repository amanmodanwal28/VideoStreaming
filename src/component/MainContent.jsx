import React, { useState } from 'react';
import Tabs from './Tabs';
import VideoCard from './VideoCard';
import '../css/MainContent.css';

const MainContent = () => {
  const categories = ['All', 'Music', 'Entertainment', 'Comedy', 'Bhajan', 'News', 'TV shows', 'Study','Prank', 'Podcasts'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const videos = [
    {
      title: "Most Relaxing Radha Krishna Bhajan",
      channel: "Bhajan Marg",
      views: "10K views",
      timestamp: "1 day ago",
      videoUrl: "https://www.youtube.com/embed/2_fvaHKEJnc",
      thumbnail: "https://img.youtube.com/vi/2_fvaHKEJnc/hqdefault.jpg",
      duration: "4:35",
      category: "Bhajan",
    },
    {
      title: "Most Relaxing song",
      channel: "Mind Relax Lofi Mp3",
      views: "20K views",
      timestamp: "2 days ago",
      videoUrl: "https://www.youtube.com/embed/j-DpAG_y82c",
      thumbnail: "https://img.youtube.com/vi/j-DpAG_y82c/hqdefault.jpg",
      duration: "3:20",
      category: "Music",
    },
    {
      title: "Aesi Kripa kro shree radhey",
      channel: "Sanatan dharma",
      views: "20K views",
      timestamp: "2 days ago",
      videoUrl: "https://www.youtube.com/embed/TpkC2tH4AUE",
      thumbnail: "https://img.youtube.com/vi/TpkC2tH4AUE/hqdefault.jpg",
      duration: "5:10",
      category: "Bhajan",
    },
    {
      title: "Mere banke bihaari laal",
      channel: "Krishna bhakt",
      views: "20K views",
      timestamp: "2 days ago",
      videoUrl: "https://www.youtube.com/embed/P1R6Bk0C_BM",
      thumbnail: "https://img.youtube.com/vi/P1R6Bk0C_BM/hqdefault.jpg",
      duration: "4:00",
      category: "Bhajan",
    },
    {
      title: "Heartless-Badshah ft.",
      channel: "SONGS",
      views: "20K views",
      timestamp: "2 days ago",
      videoUrl: "https://www.youtube.com/embed/Gv_XBMrPvRw",
      thumbnail: "https://img.youtube.com/vi/Gv_XBMrPvRw/hqdefault.jpg",
      duration: "3:45",
      category: "Music",
    },
    {
      title: "Awaara sham h",
      channel: "MB music",
      views: "20K views",
      timestamp: "2 days ago",
      videoUrl: "https://www.youtube.com/embed/P-z3aLhp9w4",
      thumbnail: "https://img.youtube.com/vi/P-z3aLhp9w4/hqdefault.jpg",
      duration: "4:20",
      category: "Music",
    },
    {
      title: "Nishana",
      channel: "Nav Haryani",
      views: "20K views",
      timestamp: "2 days ago",
      videoUrl: "https://www.youtube.com/embed/NiSFTyc9j4I",
      thumbnail: "https://img.youtube.com/vi/NiSFTyc9j4I/hqdefault.jpg",
      duration: "5:00",
      category: "Music",
    },
    {
      title: "Try not to laugh challenge",
      channel: "Triggered Inshan",
      views: "20K views",
      timestamp: "2 hours ago",
      videoUrl: "https://www.youtube.com/embed/Rbna3vCikTE",
      thumbnail: "https://img.youtube.com/vi/Rbna3vCikTE/hqdefault.jpg",
      duration: "2:30",
      category: "Comedy",
    },
    {
      title: "Projects not to say no",
      channel: "LevelUP frontend",
      views: "20K views",
      timestamp: "10 days ago",
      videoUrl: "https://www.youtube.com/embed/SxEhu-voNo4",
      thumbnail: "https://img.youtube.com/vi/SxEhu-voNo4/hqdefault.jpg",
      duration: "6:15",
      category: "Study",
    },
    {
      title: "Complete Backend- Tutorial",
      channel: "Hitesh choudhary",
      views: "50K views",
      timestamp: "1 month ago",
      videoUrl: "https://www.youtube.com/watch?v=7fjOw8ApZ1I",
      thumbnail: "https://img.youtube.com/vi/7fjOw8ApZ1I/hqdefault.jpg",
      duration: "10:00",
      category: "Study",
    },
    {
      title: "Iceberg - a flood",
      channel: "Daily News",
      views: "100K views",
      timestamp: "2 days ago",
      videoUrl: "https://www.youtube.com/watch?v=5F51IukQvnA",
      thumbnail: "https://img.youtube.com/vi/5F51IukQvnA/hqdefault.jpg",
      duration: "7:15",
      category: "News",
    },
    {
      title: "Podcast with real hacker",
      channel: "Technical Dev",
      views: "200K views",
      timestamp: "5 days ago",
      videoUrl: "https://www.youtube.com/watch?v=meBj1o0E-Nc",
      thumbnail: "https://img.youtube.com/vi/meBj1o0E-Nc/hqdefault.jpg",
      duration: "4:50",
      category: "Podcasts",
    },
    {
        title: "Lift Prank 20",
        channel: "RJ Naved",
        views: "200K views",
        timestamp: "5 days ago",
        videoUrl: "https://www.youtube.com/watch?v=OFJTJPMY5Vo",
        thumbnail: "https://img.youtube.com/vi/OFJTJPMY5Vo/hqdefault.jpg",
        duration: "4:50",
        category: "Prank",
      },
  ];

  const filteredVideos = selectedCategory === 'All' ? videos : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="main-content">
      <Tabs categories={categories} onSelect={setSelectedCategory} />
      <div className="video-grid">
        {filteredVideos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            channel={video.channel}
            views={video.views}
            timestamp={video.timestamp}
            thumbnail={video.thumbnail}
            videoUrl={video.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
