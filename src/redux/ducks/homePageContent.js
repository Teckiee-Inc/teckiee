import { createSlice } from "@reduxjs/toolkit";

const homepageData = createSlice({
  name: "homepageInfo",
  initialState: {
    solutionsInfo: [
      {
        svgURL: "/homePage/web.png",
        title: "Web & App Development",
        p: "We create custom websites and web apps that are fast, user-friendly, and optimized for search engines.",
      },
      {
        svgURL: "/homePage/networking.png",
        title: "Networking Solutions",
        p: "We'll work with you to design and implement secure, reliable networks that meet the unique needs of your business.",
      },
      {
        svgURL: "/homePage/design.png",
        title: "Design & Marketing",
        p: "Our team can help you create a powerful brand through graphic design, branding, social media, and SEO.",
      },
    ],
  },
});

export default homepageData.reducer;
