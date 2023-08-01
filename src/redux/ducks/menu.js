import { createSlice } from "@reduxjs/toolkit";
// update the code in index, about, contact_us, our services, and portfolio pages
const menuData = createSlice({
  name: "MenuDataInfo",
  initialState: {
    topMenu: {
      mainTopMenu: [
        { path: "/", title: "HOME", status: false },
        // { path: "/portfolio", title: "PORTFOLIO", status: false },
        { path: "/our_services", title: "OUR SERVICES", status: false },
        { path: "/about", title: "ABOUT US", status: false },
        // { path: "/contact_us", title: "CONTACT US", status: false },
      ],
    },
    footerMenu: {
      services: [
        { path: "https", title: "Networking" },
        { path: "https", title: "Web App & Design" },
        // { path: "https", title: "Home Automation" },
        // { path: "https", title: "Marketing & Media" },
      ],
      aboutUs: [
        { path: "https", title: "How we Started" },
        // { path: "https", title: "Careers" },
        // { path: "https", title: "Blogs" },
      ],
      contact: [
        { path: "https", title: "(956) 600-2538" },
        { path: "https", title: "info@teckiee.com" },
      ],
      socialMedia: [
        {
          path: "https://www.facebook.com/",
          imgURL: "./fbMsgLight.svg",
          alt: "Facebook Logo",
        },
        {
          path: "https://www.instagram.com/",
          imgURL: "./instagramLogo.svg",
          alt: "Instagram Logo",
        },
        {
          path: "https://www.twitter.com/",
          imgURL: "./twitterLogo.svg",
          alt: "Twitter Logo",
        },
        {
          path: "https://www.linkedin.com/",
          imgURL: "./linkedinLogo.svg",
          alt: "LinkedIn Logo",
        },
        // {
        //   path: "https://www.youtube.com/",
        //   imgURL: "./test.svg",
        //   alt: "Youtube Logo",
        // },
      ],
    },
  },
  reducers: {
    updateMenu: (state, action) => {
      state.topMenu.mainTopMenu = action.payload;
      // action.payload;
    },
  },
});

export const { updateMenu } = menuData.actions;
export default menuData.reducer;
