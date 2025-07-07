import { publicProcedure } from "@/server/api/trpc";
import { createBusinessSchema } from "../business.schema";
import { business } from "@/server/db/schema/business/business";
import { sql } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

export const create = publicProcedure
  .input(createBusinessSchema)
  .mutation(async ({ ctx, input }) => {
    const id = uuidv4();
    const { 
      businessLocation, 
      registeredBodies, 
      registeredBodiesOther,
      hotelRoomTypes,
      agriculturalBusinesses,
      businessFoodCrops,
      businessPulses,
      businessOilSeeds,
      businessVegetables,
      businessFruits,
      businessSpices,
      businessCashCrops,
      businessAnimals,
      businessAnimalProducts,
      foreignPermanentEmployeeCountries,
      foreignTemporaryEmployeeCountries,
      dateOfInterview,
      ...restInput 
    } = input;

    // Convert dateOfInterview string to Date if it's a string
    const parsedDateOfInterview = dateOfInterview 
      ? (typeof dateOfInterview === 'string' ? new Date(dateOfInterview) : dateOfInterview)
      : null;

    await ctx.db.insert(business).values({
      ...restInput,
      id,
      dateOfInterview: parsedDateOfInterview,
      businessLocation: Array.isArray(businessLocation) ? businessLocation : null,
      registeredBodies: Array.isArray(registeredBodies) ? registeredBodies : null,
      registeredBodiesOther: Array.isArray(registeredBodiesOther) ? registeredBodiesOther : null,
      hotelRoomTypes: Array.isArray(hotelRoomTypes) ? hotelRoomTypes : null,
      agriculturalBusinesses: Array.isArray(agriculturalBusinesses) ? agriculturalBusinesses : null,
      businessFoodCrops: Array.isArray(businessFoodCrops) ? businessFoodCrops : null,
      businessPulses: Array.isArray(businessPulses) ? businessPulses : null,
      businessOilSeeds: Array.isArray(businessOilSeeds) ? businessOilSeeds : null,
      businessVegetables: Array.isArray(businessVegetables) ? businessVegetables : null,
      businessFruits: Array.isArray(businessFruits) ? businessFruits : null,
      businessSpices: Array.isArray(businessSpices) ? businessSpices : null,
      businessCashCrops: Array.isArray(businessCashCrops) ? businessCashCrops : null,
      businessAnimals: Array.isArray(businessAnimals) ? businessAnimals : null,
      businessAnimalProducts: Array.isArray(businessAnimalProducts) ? businessAnimalProducts : null,
      foreignPermanentEmployeeCountries: Array.isArray(foreignPermanentEmployeeCountries) ? foreignPermanentEmployeeCountries : null,
      foreignTemporaryEmployeeCountries: Array.isArray(foreignTemporaryEmployeeCountries) ? foreignTemporaryEmployeeCountries : null,

    });

    return { id };
  });
