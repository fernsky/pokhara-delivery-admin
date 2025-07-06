import { z } from "zod";
import { randomUUID } from "crypto";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { createHouseholdSchema } from "../households.schema";
import { households } from "@/server/db/schema/households/households";
import { eq } from "drizzle-orm";

/**
 * Procedure to create a new household
 */
export const createHouseholdProcedure = publicProcedure
  .input(createHouseholdSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const id = randomUUID();

      // Prepare household data
      const householdData = {
        id,
        tenantId: input.tenantId || "pokhara_metro",

        // Location information
        province: input.province || null,
        district: input.district || null,
        localLevel: input.localLevel || null,
        wardNo: input.wardNo || null,
        houseSymbolNo: input.houseSymbolNo || null,
        familySymbolNo: input.familySymbolNo || null,
        dateOfInterview: input.dateOfInterview || null,
        householdLocation: input.householdLocation || null,
        locality: input.locality || null,
        developmentOrganization: input.developmentOrganization || null,

        // Family information
        familyHeadName: input.familyHeadName,
        familyHeadPhoneNo: input.familyHeadPhoneNo || null,
        totalMembers: input.totalMembers || null,
        maleMembers: input.maleMembers || null,
        femaleMembers: input.femaleMembers || null,
        thirdGenderMembers: input.thirdGenderMembers || null,
        areMembersElsewhere: input.areMembersElsewhere || null,
        totalElsewhereMembers: input.totalElsewhereMembers || null,

        // House details
        houseOwnership: input.houseOwnership || null,
        houseOwnershipOther: input.houseOwnershipOther || null,
        rentAmount: input.rentAmount || null,
        landOwnership: input.landOwnership || null,
        landOwnershipOther: input.landOwnershipOther || null,
        houseBase: input.houseBase || null,
        houseBaseOther: input.houseBaseOther || null,
        houseOuterWall: input.houseOuterWall || null,
        houseOuterWallOther: input.houseOuterWallOther || null,
        houseRoof: input.houseRoof || null,
        houseRoofOther: input.houseRoofOther || null,
        houseFloor: input.houseFloor || null,
        houseFloorOther: input.houseFloorOther || null,
        houseBuiltDate: input.houseBuiltDate || null,
        houseStorey: input.houseStorey || null,
        houseHasUnderground: input.houseHasUnderground || null,

        // Safety information
        isHousePassed: input.isHousePassed || null,
        housePassedStories: input.housePassedStories || null,
        naturalDisasters: input.naturalDisasters || null,
        naturalDisastersOther: input.naturalDisastersOther || null,

        // Water, sanitation and energy
        waterSource: input.waterSource || null,
        waterSourceOther: input.waterSourceOther || null,
        waterPurificationMethods: input.waterPurificationMethods || null,
        toiletType: input.toiletType || null,
        categorizesWaste: input.categorizesWaste || null,
        decomposesWaste: input.decomposesWaste || null,
        hasVehicularWasteCollection: input.hasVehicularWasteCollection || null,
        solidWasteManagement: input.solidWasteManagement || null,
        solidWasteManagementOther: input.solidWasteManagementOther || null,
        primaryCookingFuel: input.primaryCookingFuel || null,
        secondaryCookingFuels: input.secondaryCookingFuels || null,
        primaryEnergySource: input.primaryEnergySource || null,
        primaryEnergySourceOther: input.primaryEnergySourceOther || null,
        secondaryEnergySources: input.secondaryEnergySources || null,
        secondaryEnergySourcesOther: input.secondaryEnergySourcesOther || null,

        // Accessibility
        roadStatus: input.roadStatus || null,
        roadStatusOther: input.roadStatusOther || null,
        timeToPublicBus: input.timeToPublicBus || null,
        publicBusInterval: input.publicBusInterval || null,
        timeToMarket: input.timeToMarket || null,
        distanceToActiveRoad: input.distanceToActiveRoad || null,
        facilities: input.facilities || null,

        // Economic details
        hasPropertiesElsewhere: input.hasPropertiesElsewhere || null,
        hasFemaleNamedProperties: input.hasFemaleNamedProperties || null,
        monthsSustainedFromIncome: input.monthsSustainedFromIncome || null,
        organizationsLoanedFrom: input.organizationsLoanedFrom || null,
        loanUses: input.loanUses || null,
        timeToBank: input.timeToBank || null,
        timeToCooperative: input.timeToCooperative || null,
        financialAccounts: input.financialAccounts || null,

        // Health
        haveHealthInsurance: input.haveHealthInsurance || null,
        haveLifeInsurance: input.haveLifeInsurance || null,
        lifeInsuredFamilyMembers: input.lifeInsuredFamilyMembers || null,
        consultingHealthOrganization: input.consultingHealthOrganization || null,
        consultingHealthOrganizationOther: input.consultingHealthOrganizationOther || null,
        timeToHealthOrganization: input.timeToHealthOrganization || null,
        maxExpense: input.maxExpense || null,
        maxExpenseExcess: input.maxExpenseExcess || null,
        maxIncome: input.maxIncome || null,
        maxIncomeExcess: input.maxIncomeExcess || null,
        incomeSources: input.incomeSources || null,
        otherIncomeSources: input.otherIncomeSources || null,

        // Pets
        haveDog: input.haveDog || null,
        dogNumber: input.dogNumber || null,
        isDogRegistered: input.isDogRegistered || null,
        isDogVaccinated: input.isDogVaccinated || null,

        // Municipal & Suggestions
        municipalSuggestions: input.municipalSuggestions || null,
        municipalSuggestionsOther: input.municipalSuggestionsOther || null,

        // Agriculture & Livestock
        haveAgriculturalLand: input.haveAgriculturalLand || null,
        agriculturalLands: input.agriculturalLands || null,
        areInvolvedInAgriculture: input.areInvolvedInAgriculture || null,
        foodCrops: input.foodCrops || null,
        pulses: input.pulses || null,
        oilSeeds: input.oilSeeds || null,
        vegetables: input.vegetables || null,
        fruits: input.fruits || null,
        spices: input.spices || null,
        cashCrops: input.cashCrops || null,
        haveCultivatedGrass: input.haveCultivatedGrass || null,
        monthSustainedFromAgriculture: input.monthSustainedFromAgriculture || null,
        areInvolvedInHusbandry: input.areInvolvedInHusbandry || null,
        animals: input.animals || null,
        animalProducts: input.animalProducts || null,

        // Aquaculture & Apiary
        haveAquaculture: input.haveAquaculture || null,
        pondNumber: input.pondNumber || null,
        pondArea: input.pondArea || null,
        fishProduction: input.fishProduction || null,
        fishSales: input.fishSales || null,
        fishRevenue: input.fishRevenue || null,
        haveApiary: input.haveApiary || null,
        hiveNumber: input.hiveNumber || null,
        honeyProduction: input.honeyProduction || null,
        honeySales: input.honeySales || null,
        honeyRevenue: input.honeyRevenue || null,

        // Barren land
        isLandBarren: input.isLandBarren || null,
        barrenLandArea: input.barrenLandArea || null,
        barrenLandFoodCropPossibilities: input.barrenLandFoodCropPossibilities || null,
        barrenLandFoodCropPossibilitiesOther: input.barrenLandFoodCropPossibilitiesOther || null,
        wantsToRentBarrenLand: input.wantsToRentBarrenLand || null,

        // Agricultural operations
        hasAgriculturalInsurance: input.hasAgriculturalInsurance || null,
        monthsSustainedFromAgriculture: input.monthsSustainedFromAgriculture || null,
        monthsInvolvedInAgriculture: input.monthsInvolvedInAgriculture || null,
        agricultureInvestment: input.agricultureInvestment || null,
        agriculturalMachines: input.agriculturalMachines || null,
        salesAndDistribution: input.salesAndDistribution || null,
        isFarmerRegistered: input.isFarmerRegistered || null,

        // Remittance
        haveRemittance: input.haveRemittance || null,
        remittanceExpenses: input.remittanceExpenses || null,

        // System fields
        houseImage: input.houseImage || null,
        deviceId: input.deviceId || null,
        name: input.name || null,
      };

      // Insert household into database
      //@ts-ignore
      await ctx.db.insert(households).values(householdData);

      // Retrieve the created household
      const createdHousehold = await ctx.db
        .select()
        .from(households)
        .where(eq(households.id, id))
        .then((rows) => rows[0]);

      return {
        success: true,
        message: "Household created successfully",
        data: createdHousehold,
      };
    } catch (error) {
      console.error("Error creating household:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to create household",
        cause: error,
      });
    }
  });
