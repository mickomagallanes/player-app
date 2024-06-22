import "server-only";

const GET_OPTIONS = {
  method: "GET",
  headers: { accept: "application/json" },
};

export async function fetchCareerStats(personId: string) {
  const params = `&route=statistics/for/person/in/career/persons/${personId}`;

  return fetchRevalidate(params);
}

export async function fetchSeasonStats(personId: string) {
  const params = `&route=statistics/for/person/${personId}/in/seasons?include=seasons,entities&fields=statistics,entityId,seasonId,organizationId`;

  return fetchRevalidate(params);
}

export async function fetchPersonById(personId: string) {
  const params = `&route=persons/${personId}`;

  return fetchRevalidate(params);
}

async function fetchRevalidate(
  params: string,
  errMsg: string = "Error has occurred",
) {
  const resp = await fetch(`${process.env.API_URL}${params}`, {
    ...GET_OPTIONS,
    next: { revalidate: 3600 * 24 }, // revalidate data every 24 hours
  });

  if (!resp.ok) {
    throw new Error(errMsg);
  } else {
    return resp.json();
  }
}
