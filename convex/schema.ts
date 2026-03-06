import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  users: defineTable({
    email: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    password: v.string(),
    role: v.union(v.literal("student"), v.literal("alumni"), v.literal("admin")),
    createdAt: v.number(),
  }),

  alumni: defineTable({
    name: v.string(),
    email: v.string(),
    graduationYear: v.number(),
    specialization: v.string(),
    company: v.string(),
    status: v.union(v.literal("Pending"), v.literal("Approved"), v.literal("Rejected")),
    createdAt: v.number(),
  }),

  posts: defineTable({
    title: v.string(),
    content: v.string(),
    approved: v.boolean(),
    createdBy: v.id("users"),
    createdAt: v.number(),
  }),
})
