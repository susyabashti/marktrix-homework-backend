import axios from "axios";
import { Router } from "express";
import { GenderResponse, NationResponse } from "../types/api";
import { AppGetParams } from "../types/get";

export const appRouter = Router();

appRouter.get("/name/:name", async (req, res) => {
  const name = (req.params as AppGetParams).name;

  try {
    const genderRequest = axios.get<GenderResponse>(
      `${process.env.GENDER_ENDPOINT}${name}`
    );
    const nationRequest = axios.get<NationResponse>(
      `${process.env.NATIONALITY_ENDPOINT}${name}`
    );

    const [genderResponse, nationResponse] = await Promise.all([
      genderRequest,
      nationRequest,
    ]);

    const gender = genderResponse.data.gender;
    const nationality = nationResponse.data.country[0].country_id;
    res.json({ gender, nationality });
  } catch (error) {
    res.json({ error: true, message: "Couldn't connect to the api endpoint." });
  }
});
