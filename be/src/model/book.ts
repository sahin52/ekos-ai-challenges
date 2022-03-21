import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: { type: String, default: null },
  category: { type: String, default: null },
  sellCount: { type: Number, set: function (v: number) { return Math.round(v) ;}, unique: false, default: 0 },
  price_cent: { type: Number, set: function (v: number) { return Math.round(v) ;},default: 0 }
});

export default mongoose.model("book", bookSchema);