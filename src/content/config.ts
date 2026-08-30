import { defineCollection, z } from "astro:content";

const plots = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    status: z.enum(["available", "reserved", "sold"]),
    region: z.string(),
    district: z.string().optional(),
    settlement: z.string().optional(),
    areaHa: z.number().positive(),
    areaSotka: z.number().positive().optional(),
    landCategory: z.enum(["izhs", "agricultural", "other"]),
    priceRub: z.number().positive().optional(),
    pricePerSotkaRub: z.number().positive().optional(),
    cadastralNumber: z.string().optional(),
    coordinates: z
      .object({
        lat: z.number(),
        lng: z.number(),
      })
      .optional(),
    communications: z
      .object({
        electricity: z.boolean().default(false),
        gas: z.boolean().default(false),
        water: z.boolean().default(false),
        sewer: z.boolean().default(false),
        road: z.string().optional(),
      })
      .default({}),
    distance: z
      .object({
        toCityKm: z.number().optional(),
        toHighwayKm: z.number().optional(),
        toLakeKm: z.number().optional(),
      })
      .optional(),
    features: z.array(z.string()).default([]),
    gallery: z.array(z.string()).default([]),
    documents: z.array(z.string()).default([]),
    published: z.boolean().default(true),
    sortOrder: z.number().default(0),
  }),
});

export const collections = { plots };
