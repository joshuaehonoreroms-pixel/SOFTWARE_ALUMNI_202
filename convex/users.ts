import { mutation } from "./_generated/server"
import { v } from "convex/values"

/**
 * CREATE new user during registration
 */
export const createUser = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    role: v.union(v.literal("student"), v.literal("alumni")),
  },
  handler: async (ctx, args) => {
    // Insert user into the users table
    const userId = await ctx.db.insert("users", {
      email: args.email,
      firstName: args.firstName,
      lastName: args.lastName,
      role: args.role,
      createdAt: Date.now(),
    })
    return userId
  },
})
