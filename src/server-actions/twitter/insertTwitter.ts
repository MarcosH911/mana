"use server";

import { db } from "@/database/db";
import { twitterTable, TwitterType } from "@/database/schemas/twitter";

type InsertTwitterType = Omit<TwitterType, "id" | "isLiked" | "parentTweetId"> & {
  id?: string;
  isLiked?: boolean;
  parentTweetId?: string |null | undefined;
};

export default async function insertTwitter(tweet: InsertTwitterType): Promise<void> {
  await db.insert(twitterTable).values(tweet);
}

