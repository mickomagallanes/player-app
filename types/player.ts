// For Career Statistics in Career API
interface CareerAPI {
  statistics: CareerStats;
}

interface CareerStats {
  assists: number;
  assistsDefensive: number;
  assistsPerGame: number;
  assistsTurnoverRatio: number;
  blocks: number;
  blocksPerGame: number;
  blocksReceived: number;
  blocksReceivedPerGame: number;
  doubleDouble: number;
  draws: number;
  dunks: number;
  dunksPerGame: number;
  efficiency: number;
  efficiencyCustom: number;
  fieldGoalsAttempted: number;
  fieldGoalsEffectivePercentage: number;
  fieldGoalsMade: number;
  fieldGoalsPercentage: number;
  foulsCoachDisqualifying: number;
  foulsCoachTechnical: number;
  foulsDisqualifying: number;
  foulsDrawn: number;
  foulsDrawnPerGame: number;
  foulsOffensive: number;
  foulsPersonal: number;
  foulsPersonalPerGame: number;
  foulsTechnical: number;
  foulsTotal: number;
  foulsUnsportsmanlike: number;
  freeThrowsAttempted: number;
  freeThrowsAttemptedPerGame: number;
  freeThrowsMade: number;
  freeThrowsMadePerGame: number;
  freeThrowsPercentage: number;
  games: number;
  gamesPercentage: numOrNull;
  gamesStarted: number;
  indexOfSuccess: number;
  losses: number;
  maxAssists: number;
  maxFreeThrowsMade: number;
  maxPoints: number;
  maxPointsThreeMade: number;
  maxPointsTwoMade: number;
  maxRebounds: number;
  maxReboundsDefensive: number;
  maxReboundsOffensive: number;
  maxSteals: number;
  minus: number;
  minutes: string;
  minutesPerGame: string;
  pir: number;
  plus: number;
  plusMinus: number;
  points: number;
  pointsFastBreak: number;
  pointsFastBreakAttempted: number;
  pointsFastBreakMade: number;
  pointsFromTurnover: number;
  pointsInThePaint: number;
  pointsInThePaintAttempted: number;
  pointsInThePaintMade: number;
  pointsPerGame: number;
  pointsSecondChance: number;
  pointsSecondChanceAttempted: number;
  pointsSecondChanceMade: number;
  pointsThreeAttempted: number;
  pointsThreeAttemptedPerGame: number;
  pointsThreeMade: number;
  pointsThreeMadePerGame: number;
  pointsThreePercentage: number;
  pointsTwoAttempted: number;
  pointsTwoAttemptedPerGame: number;
  pointsTwoMade: number;
  pointsTwoMadePerGame: number;
  pointsTwoPercentage: number;
  powerPlayPoints: number;
  powerPlayPointsAwarded: number;
  rebounds: number;
  reboundsDefensive: number;
  reboundsDefensivePerGame: number;
  reboundsOffensive: number;
  reboundsOffensivePerGame: number;
  reboundsPerGame: number;
  steals: number;
  stealsPerGame: number;
  tripleDouble: number;
  trueShootingAttempts: numOrNull;
  trueShootingPercentage: numOrNull;
  turnovers: number;
  turnoversPerGame: number;
  turnoversPercentage: numOrNull;
  wins: number;
}

interface CareerTransformed {
  id: string;
  games: number;
  pointsPerGame: number;
  fieldGoalsMade: number;
  fieldGoalsAttempted: number;
  fieldGoalsPercentage: number;
  freeThrowsMadePerGame: number;
  freeThrowsAttemptedPerGame: number;
  freeThrowsPercentage: number;
  blocksPerGame: number;
  stealsPerGame: number;
  foulsPersonalPerGame: number;
  reboundsPerGame: number;
  assistsPerGame: number;
}

// For Data Statistics in Season API

interface SeasonAPI {
  statistics: SeasonStats;
  entityId: string;
  organizationId: string;
  seasonId: string;
}

interface SeasonStats {
  assists: number;
  assistsDefensive: number;
  assistsPerGame: number;
  assistsTurnoverRatio: number;
  blocks: number;
  blocksPerGame: number;
  blocksReceived: number;
  blocksReceivedPerGame: number;
  doubleDouble: number;
  draws: number;
  dunks: number;
  dunksPerGame: number;
  efficiency: number;
  efficiencyCustom: number;
  fieldGoalsAttempted: number;
  fieldGoalsEffectivePercentage: number;
  fieldGoalsMade: number;
  fieldGoalsPercentage: number;
  foulsCoachDisqualifying: number;
  foulsCoachTechnical: number;
  foulsDisqualifying: number;
  foulsDrawn: number;
  foulsDrawnPerGame: number;
  foulsOffensive: number;
  foulsPersonal: number;
  foulsPersonalPerGame: number;
  foulsTechnical: number;
  foulsTotal: number;
  foulsUnsportsmanlike: number;
  freeThrowsAttempted: number;
  freeThrowsAttemptedPerGame: number;
  freeThrowsMade: number;
  freeThrowsMadePerGame: number;
  freeThrowsPercentage: number;
  games: number;
  gamesPercentage: number;
  gamesStarted: number;
  indexOfSuccess: number;
  losses: number;
  maxAssists: number;
  maxFreeThrowsMade: number;
  maxPoints: number;
  maxPointsThreeMade: number;
  maxPointsTwoMade: number;
  maxRebounds: number;
  maxReboundsDefensive: number;
  maxReboundsOffensive: number;
  maxSteals: number;
  minus: number;
  minutes: string;
  minutesPerGame: string;
  pir: number;
  plus: number;
  plusMinus: number;
  points: number;
  pointsFastBreak: number;
  pointsFastBreakAttempted: number;
  pointsFastBreakMade: number;
  pointsFromTurnover: number;
  pointsInThePaint: number;
  pointsInThePaintAttempted: number;
  pointsInThePaintMade: number;
  pointsPerGame: number;
  pointsSecondChance: number;
  pointsSecondChanceAttempted: number;
  pointsSecondChanceMade: number;
  pointsThreeAttempted: number;
  pointsThreeAttemptedPerGame: number;
  pointsThreeMade: number;
  pointsThreeMadePerGame: number;
  pointsThreePercentage: number;
  pointsTwoAttempted: number;
  pointsTwoAttemptedPerGame: number;
  pointsTwoMade: number;
  pointsTwoMadePerGame: number;
  pointsTwoPercentage: number;
  powerPlayPoints: number | null;
  powerPlayPointsAwarded: number | null;
  rebounds: number;
  reboundsDefensive: number;
  reboundsDefensivePerGame: number;
  reboundsOffensive: number;
  reboundsOffensivePerGame: number;
  reboundsPerGame: number;
  steals: number;
  stealsPerGame: number;
  tripleDouble: number;
  trueShootingAttempts: number | null;
  trueShootingPercentage: number | null;
  turnovers: number;
  turnoversPerGame: number;
  turnoversPercentage: number | null;
  wins: number;
}

interface SeasonTransformed {
  id: string;
  team: string;
  games: number;
  pointsPerGame: number;
  fieldGoalsMade: number;
  fieldGoalsAttempted: number;
  fieldGoalsPercentage: number;
  freeThrowsMadePerGame: number;
  freeThrowsAttemptedPerGame: number;
  freeThrowsPercentage: number;
  blocksPerGame: number;
  stealsPerGame: number;
  foulsPersonalPerGame: number;
  reboundsPerGame: number;
  assistsPerGame: number;
}

//   For Includes Season in Season Stats API
interface SeasonInfos {
  [key: string]: SeasonInfo;
}

interface SeasonInfo {
  added: string;
  ageGroup: string;
  competition: SeasonCompetition;
  competitionId: string;
  discipline: string | null;
  durationFull: string | null;
  endDate: string;
  eventType: string;
  externalId: string;
  fixtureProfile: SeasonFixtureProfile;
  gender: string;
  grade: string | null;
  images: any[];
  includeInStatistics: boolean;
  internationalReference: string | null;
  leaderCriteriaId: string | null;
  liveDataAvailable: boolean;
  liveVideoAvailable: boolean;
  lockStandings: boolean;
  nameLatin: string;
  nameLocal: string;
  nameShortLatin: string;
  nameShortLocal: string;
  organization: SeasonOrganization;
  organizationId: string;
  profileId: string;
  representation: string;
  rosterConfiguration: any;
  seasonId: string;
  seasonType: string;
  standard: string;
  standingConfiguration: SeasonStandingConfiguration;
  standingConfigurationId: string;
  startDate: string;
  status: string;
  updated: string;
  videoProduction: string;
  year: number;
}

interface SeasonCompetition {
  id: string;
  resourceType: string;
}

interface SeasonFixtureProfile {
  id: string;
  resourceType: string;
}

interface SeasonOrganization {
  id: string;
  resourceType: string;
}

interface SeasonStandingConfiguration {
  id: string;
  resourceType: string;
}

//   For Includes Entities in Season Stats API
interface SeasonEntities {
  [key: string]: SeasonEntity;
}

interface SeasonEntity {
  added: string;
  additionalNames: EntityAdditionalNames;
  ageGroup: string;
  codeLatin: string;
  codeLocal: string;
  colors: EntityColors;
  defaultVenueId: string;
  entityGroup: EntityGroup;
  entityGroupId: string;
  entityId: string;
  externalId: string;
  gender: string;
  grade: strOrNull;
  historicalNames: strOrNull;
  images: EntityImage[];
  internationalReference: string;
  nameFullLatin: string;
  nameFullLocal: string;
  organization: EntityOrganization;
  organizationId: string;
  standard: string;
  status: string;
  updated: string;
  social?: EntitySocial;
}

interface EntityAdditionalNames {
  namePlaceLatin: strOrNull;
  namePlaceLocal: strOrNull;
  nameShortLatin: strOrNull;
  nameShortLocal: strOrNull;
}

interface EntityColors {
  primary: strOrNull;
  secondary: strOrNull;
  tertiary: strOrNull;
}

interface EntityGroup {
  id: string;
  resourceType: string;
}

interface EntityImage {
  added: string;
  baseId: string;
  baseType: string;
  fileType: string;
  imageId: string;
  imageType: string;
  maximumHeight: number;
  maximumWidth: number;
  organization: EntityOrganization;
  organizationId: string;
  rating: string;
  secondaryType: strOrNull;
  updated: string;
  url: string;
}

interface EntityOrganization {
  id: string;
  resourceType: string;
}

interface EntitySocial {
  facebook: string;
  instagram: string;
  website: string;
}
