type Gender = string;
type MostProbableNationality = [{ country_id: string }];

export type GenderResponse = { gender: Gender };
export type NationResponse = { country: MostProbableNationality };
