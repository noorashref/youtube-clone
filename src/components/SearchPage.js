import React from "react";
import "../styles/SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.ytimg.com/vi/dowKc68Lh2E/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD6_En8wBtNaV4faRpKrGaR8uZthg"
        channel="Mufti Menk"
        verified
        subs="1.1M"
        noOfVideos={1500}
        description="Dr Mufti Ismail Menk is a leading global Islamic scholar  motivational speaker born  raised in Zimbabwe.
      He studied Shariah in Madinah  holds a Doctorate of Social Guidance from Aldersgate University."
      />
      <hr />
      <VideoRow
        title="Should Mufti Menk recite the whole Quran? Leave a comment."
        views="2.3M Views"
        channel="Mufti Menk"
        timestamp="1 day ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwnh1xuZ2neR-CfKSTkau37VIF7cxv8h4ohVu64-6QA=s176-c-k-c0x00ffffff-no-rj-mo"
        image="https://i.ytimg.com/an_webp/ZNgR_KYbfy0/mqdefault_6s.webp?du=3000&sqp=CIH8_f0F&rs=AOn4CLDAPgIdfJJURdS6PC8Dxk1DZ7dMeQ"
        description="He has millions of followers across his social media platforms. Mufti Menk's personable style and down to earth approach has made him one of the most sought after scholars in our time. He has endeared himself to people with his much loved lecture series, a Mufti Menk trademark. "
        subs="10.1M"
      />
    </div>
  );
}

export default SearchPage;
