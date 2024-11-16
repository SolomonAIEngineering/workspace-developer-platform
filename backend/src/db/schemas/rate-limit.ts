// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const RateLimitSchema = z.object({
  id: z.string().uuid(),
  readRateLimit: z.number().default(600),
  writeRateLimit: z.number().default(200),
  secretsRateLimit: z.number().default(60),
  authRateLimit: z.number().default(60),
  inviteUserRateLimit: z.number().default(30),
  mfaRateLimit: z.number().default(20),
  publicEndpointLimit: z.number().default(30),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TRateLimit = z.infer<typeof RateLimitSchema>;
export type TRateLimitInsert = Omit<z.input<typeof RateLimitSchema>, TImmutableDBKeys>;
export type TRateLimitUpdate = Partial<Omit<z.input<typeof RateLimitSchema>, TImmutableDBKeys>>;
