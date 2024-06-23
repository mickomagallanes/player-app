import "server-only";

const GET_OPTIONS = {
  method: "GET",
  headers: { accept: "application/json" },
};

export async function fetchCareerStats(personId: string) {
  const params = `&route=statistics/for/person/in/career/persons/${personId}`;

  return fetchRetry(params);
}

export async function fetchSeasonStats(personId: string) {
  const params = `&route=statistics/for/person/${personId}/in/seasons?include=seasons,entities&fields=statistics,entityId,seasonId,organizationId`;

  return fetchRetry(params);
}

export async function fetchPersonById(personId: string) {
  const params = `&route=persons/${personId}`;

  return fetchRetry(params);
}

export async function fetchRetry(
  params: string,
  options: any = { next: { revalidate: 3600 * 24 } },
) {
  const retries = 3;
  const delay = 3000;

  for (let i = 0; i < retries; i++) {
    try {
      const resp = await fetch(`${process.env.API_URL}${params}`, {
        ...GET_OPTIONS,
        ...options, // revalidate data every 24 hours
      });
      if (!resp.ok) {
        if (i < retries - 1 && shouldRetry(resp.status)) {
          await new Promise((res) => setTimeout(res, delay));
        } else {
          throw new Error("Error has occurred");
        }
      } else {
        return await resp.json();
      }
    } catch (error) {
      throw error;
    }
  }
}

const shouldRetry = (status: number) => {
  if (status >= 500 && status < 600) {
    return true; // Retry on server errors (5xx)
  }

  return false; // Do not retry on client errors (4xx) or other non-retriable errors
};
