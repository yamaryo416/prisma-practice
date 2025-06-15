import { z } from "zod";

export const TagIdsSchema = z.array(z.number());
