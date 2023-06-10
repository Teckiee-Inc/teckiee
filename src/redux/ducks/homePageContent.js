import { createSlice } from "@reduxjs/toolkit";

const homepageData = createSlice({
  name: "homepageInfo",
  initialState: {
    solutionsInfo: [
      {
        svgURL: "/web.svg",
        title: "Web & App Development",
        p: "We create custom websites and web apps that are fast, user-friendly, and optimized for search engines.",
      },
      {
        svgURL: "/networking.svg",
        title: "Networking Solutions",
        p: "We'll work with you to design and implement secure, reliable networks that meet the unique needs of your business.",
      },
      {
        svgURL: "/design.svg",
        title: "Design & Marketing",
        p: "Our team can help you create a powerful brand through graphic design, branding, social media, and SEO.",
      },
    ],
  },
});

export default homepageData.reducer;
