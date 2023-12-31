import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schemas"
import { siteConfig } from "./config/site"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!
const title = siteConfig.name

export default defineConfig({
  // name: "default",
  title,
  projectId,
  dataset,
  apiVersion,

  basePath: "/admin",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
