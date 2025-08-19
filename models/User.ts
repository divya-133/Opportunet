// import mongoose, { Schema, Document } from "mongoose";

// export interface IUser extends Document {
//   name: string;
//   email: string;
//   password: string;
//   resume?: string;
//   linkedin?: string;
//   github?: string;
//   portfolio?: string;
//   role?: string;
//   preferredLocation?: string;
//   interests?: string[];
//   savedOpportunities: mongoose.Types.ObjectId[];
// }

// const UserSchema: Schema = new Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     resume: { type: String },
//     linkedin: { type: String },
//     github: { type: String },
//     portfolio: { type: String },
//     role: { type: String },
//     preferredLocation: { type: String },
//     interests: [{ type: String }],
//     savedOpportunities: [{ type: mongoose.Schema.Types.ObjectId, ref: "Opportunity" }]
//   },
//   { timestamps: true }
// );

// export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
// import mongoose, { Schema, Document, models, model } from "mongoose";

// export interface IUser extends Document {
//   name: string;
//   email: string;
//   password: string;
//   resume?: string;
//   linkedin?: string;
//   github?: string;
//   portfolio?: string;
//   role?: string;
//   preferredLocation?: string;
//   interests?: string[];
//   savedOpportunities: mongoose.Types.ObjectId[];
// }

// const UserSchema = new Schema<IUser>(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     resume: { type: String },
//     linkedin: { type: String },
//     github: { type: String },
//     portfolio: { type: String },
//     role: { type: String },
//     preferredLocation: { type: String },
//     interests: [{ type: String }],
//     savedOpportunities: [{ type: Schema.Types.ObjectId, ref: "Opportunity" }],
//   },
//   { timestamps: true }
// );

// // ✅ Correct export
// export default models.User || model<IUser>("User", UserSchema);
import mongoose, { Schema, Document, model, models } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  resumeUrl?: string;
  savedOpportunities: mongoose.Types.ObjectId[];
}

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resumeUrl: { type: String },

  savedOpportunities: [{ type: Schema.Types.ObjectId, ref: "Opportunity" }]
}, { timestamps: true });

export default models.User || model<IUser>("User", UserSchema);
