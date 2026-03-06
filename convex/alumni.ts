import { query, mutation } from "./_generated/server"
import { v } from "convex/values"

/**
 * READ all alumni
 */
export const getAlumni = query({
  args: {}, // Added empty args object - required for Convex queries
  handler: async (ctx) => {
    const alumni = await ctx.db.query("alumni").collect()
    return alumni
  },
})

/**
 * CREATE alumni (default: Pending)
 */
export const addAlumni = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    graduationYear: v.number(),
    specialization: v.string(),
    company: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("alumni", {
      ...args,
      status: "Pending",
      createdAt: Date.now(),
    })
  },
})

/**
 * APPROVE alumni
 */
export const approveAlumni = mutation({
  args: {
    id: v.id("alumni"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: "Approved",
    })
  },
})

/**
 * REJECT alumni
 */
export const rejectAlumni = mutation({
  args: {
    id: v.id("alumni"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: "Rejected",
    })
  },
})

/**
 * DELETE alumni
 */
export const deleteAlumni = mutation({
  args: {
    id: v.id("alumni"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id)
  },
})
