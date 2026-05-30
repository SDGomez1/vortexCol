import { v } from "convex/values";

import { mutation } from "./_generated/server";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    dob: v.string(),
    allowPromotionalEmails: v.boolean(),
    source: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const email = args.email.trim().toLowerCase();
    const lead = {
      name: args.name.trim(),
      email,
      dob: args.dob,
      allowPromotionalEmails: args.allowPromotionalEmails,
      source: args.source,
      updatedAt: now,
    };

    const existing = await ctx.db
      .query("leads")
      .withIndex("by_email", (q) => q.eq("email", email))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, lead);
      return { ok: true, id: existing._id };
    }

    const id = await ctx.db.insert("leads", {
      ...lead,
      createdAt: now,
    });

    return { ok: true, id };
  },
});
