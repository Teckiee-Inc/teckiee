import { createSlice } from "@reduxjs/toolkit";

const quotes = createSlice({
  name: "quotesDataInfo",
  initialState: {
    quotesList: [
      {
        img: "/quote/arthur.png",
        quote:
          "Any sufficiently advanced technology is indistinguishable from magic.",
        author: "- Arthur C. Clarke",
      },
      {
        img: "/quote/aristotle.png",
        quote: "Quality is not an act, it is a habit.",
        author: "- Aristotle",
      },

      {
        img: "/quote/steve.png",
        quote: "The only way to do great work is to love what you do.",
        author: "- Steve Jobs",
      },
      {
        img: "/quote/johnD.png",
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "- John D. Rockefeller",
      },
      {
        img: "/quote/seth.png",
        quote:
          "Marketing is no longer about the stuff that you make, but about the stories you tell.",
        author: "- Seth Godin",
      },
      {
        img: "/quote/steve.png",
        quote: "Innovation distinguishes between a leader and a follower",
        author: "- Steve Jobs",
      },
    ],
    quoteOnLoad: [],
  },
  reducers: {
    randomQuote: state => {
      const randomSelector = Math.floor(
        Math.random() * state.quotesList.length
      );
      console.log(randomSelector);
      state.quoteOnLoad = state.quotesList[randomSelector];
    },
  },
});
export const { randomQuote } = quotes.actions;
export default quotes.reducer;
