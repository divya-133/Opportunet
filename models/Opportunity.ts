import mongoose, { Schema, Document } from "mongoose";

export interface IOpportunity extends Document {
  title: string;
  description: string;
  eligibility: string;
  deadline: string;
  applyLink: string;
  createdBy?: mongoose.Types.ObjectId;
}

const OpportunitySchema: Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    eligibility: { type: String },
    deadline: { type: String },
    applyLink: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

export default mongoose.models.Opportunity || mongoose.model<IOpportunity>("Opportunity", OpportunitySchema);
