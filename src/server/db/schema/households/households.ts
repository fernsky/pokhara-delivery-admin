import {
  pgTable,
  text,
  integer,
  real,
  timestamp,
  varchar,
  pgEnum,
  numeric,
} from "drizzle-orm/pg-core";
import { postgis } from "../../postgis";

// Enum for household status
export const householdStatusEnum = pgEnum("household_status_enum", [
  "approved",
  "pending",
  "requested_for_edit",
  "rejected",
]);

// Main household table
export const households = pgTable("synth_pokhara_household", {
  // Primary identification
  id: text("id").primaryKey().notNull(),
  tenantId: text("tenant_id"),

  // Location information
  province: text("province"),
  district: text("district"),
  localLevel: text("local_level"),
  wardNo: integer("ward_no"),
  houseSymbolNo: integer("house_symbol_no"),
  familySymbolNo: integer("family_symbol_no"),
  dateOfInterview: timestamp("date_of_interview"),
  householdLocation: numeric("household_location").array(),
  locality: text("locality"),
  developmentOrganization: text("development_organization"),

  // Family information
  familyHeadName: text("family_head_name"),
  familyHeadPhoneNo: text("family_head_phone_no"),
  totalMembers: integer("total_members"),
  maleMembers: integer("male_members"),
  femaleMembers: integer("female_members"),
  thirdGenderMembers: integer("third_gender_members"),
  areMembersElsewhere: text("are_members_elsewhere"),
  totalElsewhereMembers: integer("total_elsewhere_members"),

  // House details
  houseOwnership: text("house_ownership"),
  houseOwnershipOther: text("house_ownership_other"),
  rentAmount: integer("rent_amount"),
  landOwnership: text("land_ownership"),
  landOwnershipOther: text("land_ownership_other"),
  houseBase: text("house_base"),
  houseBaseOther: text("house_base_other"),
  houseOuterWall: text("house_outer_wall"),
  houseOuterWallOther: text("house_outer_wall_other"),
  houseRoof: text("house_roof"),
  houseRoofOther: text("house_roof_other"),
  houseFloor: text("house_floor"),
  houseFloorOther: text("house_floor_other"),
  houseBuiltDate: timestamp("house_built_date"),
  houseStorey: integer("house_storey"),
  houseHasUnderground: text("house_has_underground"),

  // Safety information
  isHousePassed: text("is_house_passed"),
  housePassedStories: integer("house_passed_stories"),
  naturalDisasters: text("natural_disasters").array(),
  naturalDisastersOther: text("natural_disasters_other").array(),

  // Water, sanitation and energy
  waterSource: text("water_source"),
  waterSourceOther: text("water_source_other").array(),
  waterPurificationMethods: text("water_purification_methods").array(),
  toiletType: text("toilet_type"),
  categorizesWaste: text("categorizes_waste"),
  decomposesWaste: text("decomposes_waste"),
  hasVehicularWasteCollection: text("has_vehicular_waste_collection"),
  solidWasteManagement: text("solid_waste_management"),
  solidWasteManagementOther: text("solid_waste_management_other").array(),
  primaryCookingFuel: text("primary_cooking_fuel"),
  secondaryCookingFuels: text("secondary_cooking_fuels").array(),
  primaryEnergySource: text("primary_energy_source"),
  primaryEnergySourceOther: text("primary_energy_source_other"),
  secondaryEnergySources: text("secondary_energy_sources").array(),
  secondaryEnergySourcesOther: text("secondary_energy_sources_other").array(),

  // Accessibility
  roadStatus: text("road_status"),
  roadStatusOther: text("road_status_other"),
  timeToPublicBus: text("time_to_public_bus"),
  publicBusInterval: text("public_bus_interval"),
  timeToMarket: text("time_to_market"),
  distanceToActiveRoad: text("distance_to_active_road"),
  facilities: text("facilities").array(),

  // Economic details
  hasPropertiesElsewhere: text("has_properties_elsewhere"),
  hasFemaleNamedProperties: text("has_female_named_properties"),
  monthsSustainedFromIncome: text("months_sustained_from_income"),
  organizationsLoanedFrom: text("organizations_loaned_from").array(),
  loanUses: text("loan_uses").array(),
  timeToBank: text("time_to_bank"),
  timeToCooperative: text("time_to_cooperative"),
  financialAccounts: text("financial_accounts").array(),

  // Health
  haveHealthInsurance: text("have_health_insurance"),
  haveLifeInsurance: text("have_life_insurance"),
  lifeInsuredFamilyMembers: integer("life_insured_family_members"),
  consultingHealthOrganization: text("consulting_health_organization"),
  consultingHealthOrganizationOther: text("consulting_health_organization_other"),
  timeToHealthOrganization: text("time_to_health_organization"),
  maxExpense: text("max_expense"),
  maxExpenseExcess: integer("max_expense_excess"),
  maxIncome: text("max_income"),
  maxIncomeExcess: integer("max_income_excess"),
  incomeSources: text("income_sources").array(),
  otherIncomeSources: text("other_income_sources").array(),

  // Pets
  haveDog: text("have_dog"),
  dogNumber: integer("dog_number"),
  isDogRegistered: text("is_dog_registered"),
  isDogVaccinated: text("is_dog_vaccinated"),

  // Municipal & Suggestions
  municipalSuggestions: text("municipal_suggestions").array(),
  municipalSuggestionsOther: text("municipal_suggestions_other").array(),

  // Agriculture & Livestock
  haveAgriculturalLand: text("have_agricultural_land"),
  agriculturalLands: text("agricultural_lands").array(),
  areInvolvedInAgriculture: text("are_involved_in_agriculture"),
  foodCrops: text("food_crops").array(),
  pulses: text("pulses").array(),
  oilSeeds: text("oil_seeds").array(),
  vegetables: text("vegetables").array(),
  fruits: text("fruits").array(),
  spices: text("spices").array(),
  cashCrops: text("cash_crops").array(),
  haveCultivatedGrass: text("have_cultivated_grass"),
  monthSustainedFromAgriculture: text("month_sustained_from_agriculture"),
  areInvolvedInHusbandry: text("are_involved_in_husbandry"),
  animals: text("animals").array(),
  animalProducts: text("animal_products").array(),

  // Aquaculture & Apiary
  haveAquaculture: text("have_aquaculture"),
  pondNumber: integer("pond_number"),
  pondArea: real("pond_area"),
  fishProduction: real("fish_production"),
  fishSales: real("fish_sales"),
  fishRevenue: real("fish_revenue"),
  haveApiary: text("have_apiary"),
  hiveNumber: integer("hive_number"),
  honeyProduction: real("honey_production"),
  honeySales: real("honey_sales"),
  honeyRevenue: real("honey_revenue"),

  // Barren land
  isLandBarren: text("is_land_barren"),
  barrenLandArea: real("barren_land_area"),
  barrenLandFoodCropPossibilities: text("barren_land_food_crop_possibilities").array(),
  barrenLandFoodCropPossibilitiesOther: text("barren_land_food_crop_possibilities_other").array(),
  wantsToRentBarrenLand: text("wants_to_rent_barren_land"),

  // Agricultural operations
  hasAgriculturalInsurance: text("has_agricultural_insurance"),
  monthsSustainedFromAgriculture: integer("months_sustained_from_agriculture"),
  monthsInvolvedInAgriculture: text("months_involved_in_agriculture"),
  agricultureInvestment: integer("agriculture_investment"),
  agriculturalMachines: text("agricultural_machines").array(),
  salesAndDistribution: text("sales_and_distribution"),
  isFarmerRegistered: text("is_farmer_registered"),

  // Remittance
  haveRemittance: text("have_remittance"),
  remittanceExpenses: text("remittance_expenses").array(),

  // System fields
  houseImage: text("house_image"),
  deviceId: text("device_id"),
  geom: postgis("geom"),
  latitude: real("latitude"),
  longitude: real("longitude"),
  name: text("name"),
});

// Staging table for data validation - Update to match the same schema as households
export const stagingHouseholds = pgTable("staging_acme_pokhara_household", {
  // Copy the same structure as the main households table
  id: text("id").primaryKey().notNull(),
  tenantId: text("tenant_id"),

  // Location information
  province: text("province"),
  district: text("district"),
  localLevel: text("local_level"),
  wardNo: integer("ward_no"),
  houseSymbolNo: text("house_symbol_no"),
  familySymbolNo: text("family_symbol_no"),
  dateOfInterview: timestamp("date_of_interview"),
  householdLocation: text("household_location").array(),
  locality: text("locality"),
  developmentOrganization: text("development_organization"),

  // Family information
  familyHeadName: text("family_head_name"),
  familyHeadPhoneNo: text("family_head_phone_no"),
  totalMembers: integer("total_members"),
  areMembersElsewhere: text("are_members_elsewhere"),
  totalElsewhereMembers: integer("total_elsewhere_members"),

  // House details
  houseOwnership: text("house_ownership"),
  houseOwnershipOther: text("house_ownership_other"),
  landOwnership: text("land_ownership"),
  landOwnershipOther: text("land_ownership_other"),
  houseBase: text("house_base"),
  houseBaseOther: text("house_base_other"),
  houseOuterWall: text("house_outer_wall"),
  houseOuterWallOther: text("house_outer_wall_other"),
  houseRoof: text("house_roof"),
  houseRoofOther: text("house_roof_other"),
  houseFloor: text("house_floor"),
  houseFloorOther: text("house_floor_other"),

  // Safety information
  isHousePassed: text("is_house_passed"),
  isMapArchived: text("is_map_archived"),
  naturalDisasters: text("natural_disasters").array(),
  isSafe: text("is_safe"),

  // Water, sanitation and energy
  waterSource: text("water_source"),
  waterPurificationMethods: text("water_purification_methods"),
  toiletType: text("toilet_type"),
  solidWasteManagement: text("solid_waste_management"),
  primaryCookingFuel: text("primary_cooking_fuel"),
  primaryEnergySource: text("primary_energy_source"),

  // Accessibility
  roadStatus: text("road_status"),
  timeToPublicBus: text("time_to_public_bus"),
  timeToMarket: text("time_to_market"),
  distanceToActiveRoad: text("distance_to_active_road"),
  facilities: text("facilities").array(),

  // Economic details
  hasPropertiesElsewhere: text("has_properties_elsewhere"),
  hasFemaleNamedProperties: text("has_female_named_properties"),
  organizationsLoanedFrom: text("organizations_loaned_from").array(),
  loanUses: text("loan_uses").array(),
  timeToBank: text("time_to_bank"),
  financialAccounts: text("financial_accounts").array(),
  incomeSources: text("income_sources").array(),

  // Health
  haveHealthInsurance: text("have_health_insurance"),
  consultingHealthOrganization: text("consulting_health_organization"),
  timeToHealthOrganization: text("time_to_health_organization"),

  // Municipal & Suggestions
  municipalSuggestions: text("municipal_suggestions").array(),

  // Agriculture & Livestock
  haveAgriculturalLand: text("have_agricultural_land"),
  agriculturalLands: text("agricultural_lands").array(),
  areInvolvedInAgriculture: text("are_involved_in_agriculture"),
  foodCrops: text("food_crops").array(),
  pulses: text("pulses").array(),
  oilSeeds: text("oil_seeds").array(),
  vegetables: text("vegetables").array(),
  fruits: text("fruits").array(),
  spices: text("spices").array(),
  cashCrops: text("cash_crops").array(),
  areInvolvedInHusbandry: text("are_involved_in_husbandry"),
  animals: text("animals").array(),
  animalProducts: text("animal_products").array(),

  // Aquaculture & Apiary
  haveAquaculture: text("have_aquaculture"),
  pondNumber: integer("pond_number"),
  pondArea: real("pond_area"),
  fishProduction: real("fish_production"),
  haveApiary: text("have_apiary"),
  hiveNumber: integer("hive_number"),
  honeyProduction: real("honey_production"),
  honeySales: real("honey_sales"),
  honeyRevenue: real("honey_revenue"),

  // Agricultural operations
  hasAgriculturalInsurance: text("has_agricultural_insurance"),
  monthsInvolvedInAgriculture: text("months_involved_in_agriculture"),
  agriculturalMachines: text("agricultural_machines").array(),

  // Remittance
  haveRemittance: text("have_remittance"),
  remittanceExpenses: text("remittance_expenses").array(),

  // Migration details
  birthPlace: text("birth_place"),
  birthProvince: text("birth_province"),
  birthDistrict: text("birth_district"),
  birthCountry: text("birth_country"),
  priorLocation: text("prior_location"),
  priorProvince: text("prior_province"),
  priorDistrict: text("prior_district"),
  priorCountry: text("prior_country"),
  residenceReason: text("residence_reason"),

  // Business
  hasBusiness: text("has_business"),

  // System fields
  deviceId: text("device_id"),
  geom: postgis("geom"),
  name: text("name"),
});

// Edit requests for households
export const householdEditRequests = pgTable(
  "acme_pokhara_household_edit_requests",
  {
    id: varchar("id", { length: 48 }).primaryKey(),
    householdId: varchar("household_id", { length: 48 }).references(
      () => households.id,
    ),
    message: text("message").notNull(),
    requestedAt: timestamp("requested_at").defaultNow(),
  },
);

// Export types for TypeScript
export type Household = typeof households.$inferSelect;
export type NewHousehold = typeof households.$inferInsert;
export type StagingHousehold = typeof stagingHouseholds.$inferSelect;
export type HouseholdEditRequest = typeof householdEditRequests.$inferSelect;
