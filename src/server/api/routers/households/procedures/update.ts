import { z } from "zod";
import { protectedProcedure } from "@/server/api/trpc";
import { updateHouseholdSchema } from "../households.schema";
import { sql } from "drizzle-orm";
import { TRPCError } from "@trpc/server";

export const updateHouseholdProcedure = protectedProcedure
  .input(updateHouseholdSchema.extend({ id: z.string() }))
  .mutation(async ({ ctx, input }) => {
    let { id: rawId, ...data } = input;

    // Ensure proper UUID format with 'uuid:' prefix
    const id = rawId.startsWith("uuid:") ? rawId : `uuid:${rawId}`;

    console.log("Using household ID for update:", id);

    // First check if the household exists and belongs to the right profile
    const checkQuery = sql`
      SELECT COUNT(*) as count 
      FROM synth_pokhara_household
      WHERE id = ${id} AND tenant_id = ${"pokhara_metro"}
    `;

    const checkResult = await ctx.db.execute(checkQuery);
    const count = parseInt(checkResult[0].count as string, 10);

    if (count === 0) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message:
          "Household not found or you do not have permission to update it",
      });
    }

    // Prepare column updates for the SET clause
    const updates: { column: string; value: any }[] = [];

    // Helper function to add a field to the update array
    const addField = (fieldName: string, value: any) => {
      if (value !== undefined) {
        updates.push({ column: fieldName, value });
      }
    };

    // Add all fields that need updating
    if (data.tenantId !== undefined) addField("tenant_id", data.tenantId);
    if (data.province !== undefined) addField("province", data.province);
    if (data.district !== undefined) addField("district", data.district);
    if (data.localLevel !== undefined) addField("local_level", data.localLevel);
    if (data.wardNo !== undefined) addField("ward_no", data.wardNo);
    if (data.houseSymbolNo !== undefined)
      addField("house_symbol_no", data.houseSymbolNo);
    if (data.familySymbolNo !== undefined)
      addField("family_symbol_no", data.familySymbolNo);
    if (data.dateOfInterview !== undefined)
      addField("date_of_interview", data.dateOfInterview);
    if (data.householdLocation !== undefined)
      addField("household_location", data.householdLocation);
    if (data.locality !== undefined) addField("locality", data.locality);
    if (data.developmentOrganization !== undefined)
      addField("development_organization", data.developmentOrganization);

    // Family information
    if (data.familyHeadName !== undefined)
      addField("family_head_name", data.familyHeadName);
    if (data.familyHeadPhoneNo !== undefined)
      addField("family_head_phone_no", data.familyHeadPhoneNo);
    if (data.totalMembers !== undefined)
      addField("total_members", data.totalMembers);
    if (data.areMembersElsewhere !== undefined)
      addField("are_members_elsewhere", data.areMembersElsewhere);
    if (data.totalElsewhereMembers !== undefined)
      addField("total_elsewhere_members", data.totalElsewhereMembers);

    // House details
    if (data.houseOwnership !== undefined)
      addField("house_ownership", data.houseOwnership);
    if (data.houseOwnershipOther !== undefined)
      addField("house_ownership_other", data.houseOwnershipOther);
    if (data.landOwnership !== undefined)
      addField("land_ownership", data.landOwnership);
    if (data.landOwnershipOther !== undefined)
      addField("land_ownership_other", data.landOwnershipOther);
    if (data.houseBase !== undefined) addField("house_base", data.houseBase);
    if (data.houseBaseOther !== undefined)
      addField("house_base_other", data.houseBaseOther);
    if (data.houseOuterWall !== undefined)
      addField("house_outer_wall", data.houseOuterWall);
    if (data.houseOuterWallOther !== undefined)
      addField("house_outer_wall_other", data.houseOuterWallOther);
    if (data.houseRoof !== undefined) addField("house_roof", data.houseRoof);
    if (data.houseRoofOther !== undefined)
      addField("house_roof_other", data.houseRoofOther);
    if (data.houseFloor !== undefined) addField("house_floor", data.houseFloor);
    if (data.houseFloorOther !== undefined)
      addField("house_floor_other", data.houseFloorOther);
    if (data.houseBuiltDate !== undefined)
      addField("house_built_date", data.houseBuiltDate);
    if (data.houseStorey !== undefined)
      addField("house_storey", data.houseStorey);
    if (data.houseHasUnderground !== undefined)
      addField("house_has_underground", data.houseHasUnderground);
    if (data.rentAmount !== undefined)
      addField("rent_amount", data.rentAmount);

    // Safety information
    if (data.isHousePassed !== undefined)
      addField("is_house_passed", data.isHousePassed);
    if (data.housePassedStories !== undefined)
      addField("house_passed_stories", data.housePassedStories);
    if (data.naturalDisasters !== undefined)
      addField("natural_disasters", data.naturalDisasters);
    if (data.naturalDisastersOther !== undefined)
      addField("natural_disasters_other", data.naturalDisastersOther);

    // Water, sanitation and energy
    if (data.waterSource !== undefined)
      addField("water_source", data.waterSource);
    if (data.waterSourceOther !== undefined)
      addField("water_source_other", data.waterSourceOther);
    if (data.waterPurificationMethods !== undefined)
      addField("water_purification_methods", data.waterPurificationMethods);
    if (data.categorizesWaste !== undefined)
      addField("categorizes_waste", data.categorizesWaste);
    if (data.decomposesWaste !== undefined)
      addField("decomposes_waste", data.decomposesWaste);
    if (data.hasVehicularWasteCollection !== undefined)
      addField("has_vehicular_waste_collection", data.hasVehicularWasteCollection);
    if (data.solidWasteManagementOther !== undefined)
      addField("solid_waste_management_other", data.solidWasteManagementOther);
    if (data.secondaryCookingFuels !== undefined)
      addField("secondary_cooking_fuels", data.secondaryCookingFuels);
    if (data.primaryEnergySourceOther !== undefined)
      addField("primary_energy_source_other", data.primaryEnergySourceOther);
    if (data.secondaryEnergySources !== undefined)
      addField("secondary_energy_sources", data.secondaryEnergySources);
    if (data.secondaryEnergySourcesOther !== undefined)
      addField("secondary_energy_sources_other", data.secondaryEnergySourcesOther);
    if (data.toiletType !== undefined) addField("toilet_type", data.toiletType);
    if (data.solidWasteManagement !== undefined)
      addField("solid_waste_management", data.solidWasteManagement);
    if (data.primaryCookingFuel !== undefined)
      addField("primary_cooking_fuel", data.primaryCookingFuel);
    if (data.primaryEnergySource !== undefined)
      addField("primary_energy_source", data.primaryEnergySource);

    // Accessibility
    if (data.roadStatus !== undefined) addField("road_status", data.roadStatus);
    if (data.roadStatusOther !== undefined) addField("road_status_other", data.roadStatusOther);
    if (data.timeToPublicBus !== undefined)
      addField("time_to_public_bus", data.timeToPublicBus);
    if (data.publicBusInterval !== undefined)
      addField("public_bus_interval", data.publicBusInterval);
    if (data.timeToMarket !== undefined)
      addField("time_to_market", data.timeToMarket);
    if (data.distanceToActiveRoad !== undefined)
      addField("distance_to_active_road", data.distanceToActiveRoad);
    if (data.facilities !== undefined) addField("facilities", data.facilities);

    // Economic details
    if (data.hasPropertiesElsewhere !== undefined)
      addField("has_properties_elsewhere", data.hasPropertiesElsewhere);
    if (data.hasFemaleNamedProperties !== undefined)
      addField("has_female_named_properties", data.hasFemaleNamedProperties);
    if (data.monthsSustainedFromIncome !== undefined)
      addField("months_sustained_from_income", data.monthsSustainedFromIncome);
    if (data.organizationsLoanedFrom !== undefined)
      addField("organizations_loaned_from", data.organizationsLoanedFrom);
    if (data.timeToCooperative !== undefined)
      addField("time_to_cooperative", data.timeToCooperative);
    if (data.loanUses !== undefined) addField("loan_uses", data.loanUses);
    if (data.timeToBank !== undefined)
      addField("time_to_bank", data.timeToBank);
    if (data.financialAccounts !== undefined)
      addField("financial_accounts", data.financialAccounts);
    if (data.incomeSources !== undefined)
      addField("income_sources", data.incomeSources);
    if (data.haveRemittance !== undefined)
      addField("have_remittance", data.haveRemittance);
    if (data.remittanceExpenses !== undefined)
      addField("remittance_expenses", data.remittanceExpenses);

    // Health
    if (data.haveHealthInsurance !== undefined)
      addField("have_health_insurance", data.haveHealthInsurance);
    if (data.haveLifeInsurance !== undefined)
      addField("have_life_insurance", data.haveLifeInsurance);
    if (data.lifeInsuredFamilyMembers !== undefined)
      addField("life_insured_family_members", data.lifeInsuredFamilyMembers);
    if (data.consultingHealthOrganization !== undefined)
      addField(
        "consulting_health_organization",
        data.consultingHealthOrganization,
      );
    if (data.consultingHealthOrganizationOther !== undefined)
      addField(
        "consulting_health_organization_other",
        data.consultingHealthOrganizationOther,
      );
    if (data.timeToHealthOrganization !== undefined)
      addField("time_to_health_organization", data.timeToHealthOrganization);
    if (data.maxExpense !== undefined)
      addField("max_expense", data.maxExpense);
    if (data.maxExpenseExcess !== undefined)
      addField("max_expense_excess", data.maxExpenseExcess);
    if (data.maxIncome !== undefined)
      addField("max_income", data.maxIncome);
    if (data.maxIncomeExcess !== undefined)
      addField("max_income_excess", data.maxIncomeExcess);
    if (data.otherIncomeSources !== undefined)
      addField("other_income_sources", data.otherIncomeSources);
    if (data.haveDog !== undefined)
      addField("have_dog", data.haveDog);
    if (data.dogNumber !== undefined)
      addField("dog_number", data.dogNumber);
    if (data.isDogRegistered !== undefined)
      addField("is_dog_registered", data.isDogRegistered);
    if (data.isDogVaccinated !== undefined)
      addField("is_dog_vaccinated", data.isDogVaccinated);

    // Municipal & Suggestions
    if (data.municipalSuggestions !== undefined)
      addField("municipal_suggestions", data.municipalSuggestions);
    if (data.municipalSuggestionsOther !== undefined)
      addField("municipal_suggestions_other", data.municipalSuggestionsOther);

    // Agriculture & Livestock
    if (data.haveAgriculturalLand !== undefined)
      addField("have_agricultural_land", data.haveAgriculturalLand);
    if (data.agriculturalLands !== undefined)
      addField("agricultural_lands", data.agriculturalLands);
    if (data.areInvolvedInAgriculture !== undefined)
      addField("are_involved_in_agriculture", data.areInvolvedInAgriculture);
    if (data.foodCrops !== undefined) addField("food_crops", data.foodCrops);
    if (data.pulses !== undefined) addField("pulses", data.pulses);
    if (data.oilSeeds !== undefined) addField("oil_seeds", data.oilSeeds);
    if (data.vegetables !== undefined) addField("vegetables", data.vegetables);
    if (data.fruits !== undefined) addField("fruits", data.fruits);
    if (data.spices !== undefined) addField("spices", data.spices);
    if (data.cashCrops !== undefined) addField("cash_crops", data.cashCrops);
    if (data.haveCultivatedGrass !== undefined)
      addField("have_cultivated_grass", data.haveCultivatedGrass);
    if (data.monthSustainedFromAgriculture !== undefined)
      addField("month_sustained_from_agriculture", data.monthSustainedFromAgriculture);
    if (data.areInvolvedInHusbandry !== undefined)
      addField("are_involved_in_husbandry", data.areInvolvedInHusbandry);
    if (data.animals !== undefined) addField("animals", data.animals);
    if (data.animalProducts !== undefined)
      addField("animal_products", data.animalProducts);

    // Aquaculture & Apiary
    if (data.haveAquaculture !== undefined)
      addField("have_aquaculture", data.haveAquaculture);
    if (data.pondNumber !== undefined) addField("pond_number", data.pondNumber);
    if (data.pondArea !== undefined) addField("pond_area", data.pondArea);
    if (data.fishProduction !== undefined)
      addField("fish_production", data.fishProduction);
    if (data.fishSales !== undefined)
      addField("fish_sales", data.fishSales);
    if (data.fishRevenue !== undefined)
      addField("fish_revenue", data.fishRevenue);
    if (data.haveApiary !== undefined) addField("have_apiary", data.haveApiary);
    if (data.hiveNumber !== undefined) addField("hive_number", data.hiveNumber);
    if (data.honeyProduction !== undefined)
      addField("honey_production", data.honeyProduction);
    if (data.honeySales !== undefined) addField("honey_sales", data.honeySales);
    if (data.honeyRevenue !== undefined)
      addField("honey_revenue", data.honeyRevenue);

    // Barren land
    if (data.isLandBarren !== undefined)
      addField("is_land_barren", data.isLandBarren);
    if (data.barrenLandArea !== undefined)
      addField("barren_land_area", data.barrenLandArea);
    if (data.barrenLandFoodCropPossibilities !== undefined)
      addField("barren_land_food_crop_possibilities", data.barrenLandFoodCropPossibilities);
    if (data.barrenLandFoodCropPossibilitiesOther !== undefined)
      addField("barren_land_food_crop_possibilities_other", data.barrenLandFoodCropPossibilitiesOther);
    if (data.wantsToRentBarrenLand !== undefined)
      addField("wants_to_rent_barren_land", data.wantsToRentBarrenLand);

    // Agricultural operations
    if (data.hasAgriculturalInsurance !== undefined)
      addField("has_agricultural_insurance", data.hasAgriculturalInsurance);
    if (data.monthsSustainedFromAgriculture !== undefined)
      addField("months_sustained_from_agriculture", data.monthsSustainedFromAgriculture);
    if (data.monthsInvolvedInAgriculture !== undefined)
      addField(
        "months_involved_in_agriculture",
        data.monthsInvolvedInAgriculture,
      );
    if (data.agricultureInvestment !== undefined)
      addField("agriculture_investment", data.agricultureInvestment);
    if (data.agriculturalMachines !== undefined)
      addField("agricultural_machines", data.agriculturalMachines);
    if (data.salesAndDistribution !== undefined)
      addField("sales_and_distribution", data.salesAndDistribution);
    if (data.isFarmerRegistered !== undefined)
      addField("is_farmer_registered", data.isFarmerRegistered);



    // Update timestamp
    addField("updated_at", new Date());

    // If there are fields to update
    if (updates.length > 0) {
      // Build update parts with proper sql parameter binding
      const setParts = updates.map((update) => {
        return sql.raw(`${update.column} = ${sql.placeholder(update.column)}`);
      });

      const setClause = sql.join(setParts, sql`, `);

      // Create parameter object dynamically
      const params = updates.reduce(
        (acc, update) => {
          acc[update.column] = update.value;
          return acc;
        },
        {} as Record<string, any>,
      );

      // Build the complete update query with parameters
      const updateQuery = sql`
        UPDATE synth_pokhara_household
        SET ${setClause}
        WHERE id = ${id} AND tenant_id = ${"pokhara_metro"}
        RETURNING id
      `;

      // Execute the query
      const result = await ctx.db.execute(updateQuery);

      return { id: result[0]?.id, success: true };
    } else {
      // No fields to update
      return { id, success: true };
    }
  });
