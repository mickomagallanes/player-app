"use server";

import { fetchRetry } from "./data";

export async function fetchAllPlayers(offset: number) {
  const params = `&route=persons&limit=20&offset=${offset}`;

  return fetchRetry(params);
}
