import { createSlice } from "@reduxjs/toolkit";

const quotes = createSlice({
  name: "quotesDataInfo",
  initialState: {
    quotesList: [
      {
        quote:
          "Any sufficiently advanced technology is indistinguishable from magic.",
        author: "- Arthur C. Clarke",
      },
      {
        quote: "Quality is not an act, it is a habit.",
        author: "- Aristotle",
      },
      {
        quote: "The best way to predict the future is to invent it.",
        author: "- Alan Kay",
      },
      {
        quote: "The only way to do great work is to love what you do.",
        author: "- Steve Jobs",
      },
      {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "- John D. Rockefeller",
      },
      {
        quote:
          "Marketing is no longer about the stuff that you make, but about the stories you tell.",
        author: "- Seth Godin",
      },
      {
        quote: "Innovation distinguishes between a leader and a follower",
        author: "- Steve Jobs",
      },
      {
        quote:
          "Networking is not about just connecting people. It's about connecting people with people, people with ideas, and people with opportunities.",
        author: "- Michele Jennae",
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
