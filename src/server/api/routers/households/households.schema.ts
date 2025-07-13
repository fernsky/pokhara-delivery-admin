import { z } from "zod";

export const householdSchema = z.object({
  // Primary identification
  id: z.string(),
  tenantId: z.string(),
  
  // Location information
  province: z.string().nullable(),
  district: z.string().nullable(),
  localLevel: z.string().nullable(),
  wardNo: z.number().nullable(),
  houseSymbolNo: z.number().nullable(),
  familySymbolNo: z.number().nullable(),
  dateOfInterview: z.date().nullable(),
  householdLocation: z.array(z.number()).nullable(),
  locality: z.string().nullable(),
  developmentOrganization: z.string().nullable(),
  
  // Family information
  familyHeadName: z.string().nullable(),
  familyHeadPhoneNo: z.string().nullable(),
  totalMembers: z.number().nullable(),
  maleMembers: z.number().nullable(),
  femaleMembers: z.number().nullable(),
  thirdGenderMembers: z.number().nullable(),
  areMembersElsewhere: z.string().nullable(),
  totalElsewhereMembers: z.number().nullable(),
  
  // House details
  houseOwnership: z.string().nullable(),
  houseOwnershipOther: z.string().nullable(),
  rentAmount: z.number().nullable(),
  landOwnership: z.string().nullable(),
  landOwnershipOther: z.string().nullable(),
  houseBase: z.string().nullable(),
  houseBaseOther: z.string().nullable(),
  houseOuterWall: z.string().nullable(),
  houseOuterWallOther: z.string().nullable(),
  houseRoof: z.string().nullable(),
  houseRoofOther: z.string().nullable(),
  houseFloor: z.string().nullable(),
  houseFloorOther: z.string().nullable(),
  houseBuiltDate: z.date().nullable(),
  houseStorey: z.number().nullable(),
  houseHasUnderground: z.string().nullable(),
  
  // Safety information
  isHousePassed: z.string().nullable(),
  housePassedStories: z.number().nullable(),
  naturalDisasters: z.array(z.string()).nullable(),
  naturalDisastersOther: z.array(z.string()).nullable(),
  
  // Water, sanitation and energy
  waterSource: z.string().nullable(),
  waterSourceOther: z.array(z.string()).nullable(),
  waterPurificationMethods: z.array(z.string()).nullable(),
  toiletType: z.string().nullable(),
  categorizesWaste: z.string().nullable(),
  decomposesWaste: z.string().nullable(),
  hasVehicularWasteCollection: z.string().nullable(),
  solidWasteManagement: z.string().nullable(),
  solidWasteManagementOther: z.array(z.string()).nullable(),
  primaryCookingFuel: z.string().nullable(),
  secondaryCookingFuels: z.array(z.string()).nullable(),
  primaryEnergySource: z.string().nullable(),
  primaryEnergySourceOther: z.string().nullable(),
  secondaryEnergySources: z.array(z.string()).nullable(),
  secondaryEnergySourcesOther: z.array(z.string()).nullable(),
  
  // Accessibility
  roadStatus: z.string().nullable(),
  roadStatusOther: z.string().nullable(),
  timeToPublicBus: z.string().nullable(),
  publicBusInterval: z.string().nullable(),
  timeToMarket: z.string().nullable(),
  distanceToActiveRoad: z.string().nullable(),
  facilities: z.array(z.string()).nullable(),
  
  // Economic details
  hasPropertiesElsewhere: z.string().nullable(),
  hasFemaleNamedProperties: z.string().nullable(),
  monthsSustainedFromIncome: z.string().nullable(),
  organizationsLoanedFrom: z.array(z.string()).nullable(),
  loanUses: z.array(z.string()).nullable(),
  timeToBank: z.string().nullable(),
  timeToCooperative: z.string().nullable(),
  financialAccounts: z.array(z.string()).nullable(),
  
  // Health
  haveHealthInsurance: z.string().nullable(),
  haveLifeInsurance: z.string().nullable(),
  lifeInsuredFamilyMembers: z.number().nullable(),
  consultingHealthOrganization: z.string().nullable(),
  consultingHealthOrganizationOther: z.string().nullable(),
  timeToHealthOrganization: z.string().nullable(),
  maxExpense: z.string().nullable(),
  maxExpenseExcess: z.number().nullable(),
  maxIncome: z.string().nullable(),
  maxIncomeExcess: z.number().nullable(),
  incomeSources: z.array(z.string()).nullable(),
  otherIncomeSources: z.array(z.string()).nullable(),
  
  // Pets
  haveDog: z.string().nullable(),
  dogNumber: z.number().nullable(),
  isDogRegistered: z.string().nullable(),
  isDogVaccinated: z.string().nullable(),
  
  // Municipal & Suggestions
  municipalSuggestions: z.array(z.string()).nullable(),
  municipalSuggestionsOther: z.array(z.string()).nullable(),
  
  // Agriculture & Livestock
  haveAgriculturalLand: z.string().nullable(),
  agriculturalLands: z.array(z.string()).nullable(),
  areInvolvedInAgriculture: z.string().nullable(),
  foodCrops: z.array(z.string()).nullable(),
  pulses: z.array(z.string()).nullable(),
  oilSeeds: z.array(z.string()).nullable(),
  vegetables: z.array(z.string()).nullable(),
  fruits: z.array(z.string()).nullable(),
  spices: z.array(z.string()).nullable(),
  cashCrops: z.array(z.string()).nullable(),
  haveCultivatedGrass: z.string().nullable(),
  monthSustainedFromAgriculture: z.string().nullable(),
  areInvolvedInHusbandry: z.string().nullable(),
  animals: z.array(z.string()).nullable(),
  animalProducts: z.array(z.string()).nullable(),
  
  // Aquaculture & Apiary
  haveAquaculture: z.string().nullable(),
  pondNumber: z.number().nullable(),
  pondArea: z.number().nullable(),
  fishProduction: z.number().nullable(),
  fishSales: z.number().nullable(),
  fishRevenue: z.number().nullable(),
  haveApiary: z.string().nullable(),
  hiveNumber: z.number().nullable(),
  honeyProduction: z.number().nullable(),
  honeySales: z.number().nullable(),
  honeyRevenue: z.number().nullable(),
  
  // Barren land
  isLandBarren: z.string().nullable(),
  barrenLandArea: z.number().nullable(),
  barrenLandFoodCropPossibilities: z.array(z.string()).nullable(),
  barrenLandFoodCropPossibilitiesOther: z.array(z.string()).nullable(),
  wantsToRentBarrenLand: z.string().nullable(),
  
  // Agricultural operations
  hasAgriculturalInsurance: z.string().nullable(),
  monthsSustainedFromAgriculture: z.number().nullable(),
  monthsInvolvedInAgriculture: z.string().nullable(),
  agricultureInvestment: z.number().nullable(),
  agriculturalMachines: z.array(z.string()).nullable(),
  salesAndDistribution: z.string().nullable(),
  isFarmerRegistered: z.string().nullable(),
  
  // Remittance
  haveRemittance: z.string().nullable(),
  remittanceExpenses: z.array(z.string()).nullable(),
  
  // System fields
  houseImage: z.string().nullable(),
  deviceId: z.string().nullable(),
  name: z.string().nullable(),
});

export const createHouseholdSchema = householdSchema.omit({ id: true });

export const updateHouseholdSchema = householdSchema.partial();

export const householdQuerySchema = z.object({
  limit: z.number().min(1).max(100).default(10),
  offset: z.number().min(0).default(0),
  sortBy: z
    .enum([
      "family_head_name", 
      "ward_no", 
      "locality", 
      "house_symbol_no",
      "date_of_interview",
      "total_members",
      "province",
      "district",
      "local_level",
    ])
    .default("family_head_name"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  filters: z
    .object({
      // Location filters
      wardNo: z.number().optional(),
      province: z.string().optional(),
      district: z.string().optional(),
      localLevel: z.string().optional(),
      locality: z.string().optional(),
      developmentOrganization: z.string().optional(),
      
      // Family filters
      familyHeadName: z.string().optional(),
      familyHeadPhoneNo: z.string().optional(),
      totalMembersMin: z.number().optional(),
      totalMembersMax: z.number().optional(),
      areMembersElsewhere: z.string().optional(),
      totalElsewhereMembersMin: z.number().optional(),
      totalElsewhereMembersMax: z.number().optional(),
      
      // House ownership filters
      houseOwnership: z.string().optional(),
      landOwnership: z.string().optional(),
      houseBase: z.string().optional(),
      houseOuterWall: z.string().optional(),
      houseRoof: z.string().optional(),
      houseFloor: z.string().optional(),
      
      // Safety filters
      isHousePassed: z.string().optional(),
      isMapArchived: z.string().optional(),
      isSafe: z.string().optional(),
      
      // Water and sanitation filters
      waterSource: z.string().optional(),
      waterPurificationMethods: z.string().optional(),
      toiletType: z.string().optional(),
      solidWasteManagement: z.string().optional(),
      primaryCookingFuel: z.string().optional(),
      primaryEnergySource: z.string().optional(),
      
      // Accessibility filters
      roadStatus: z.string().optional(),
      timeToPublicBus: z.string().optional(),
      timeToMarket: z.string().optional(),
      distanceToActiveRoad: z.string().optional(),
      
      // Economic filters
      hasPropertiesElsewhere: z.string().optional(),
      hasFemaleNamedProperties: z.string().optional(),
      timeToBank: z.string().optional(),
      haveRemittance: z.string().optional(),
      
      // Health filters
      haveHealthInsurance: z.string().optional(),
      consultingHealthOrganization: z.string().optional(),
      timeToHealthOrganization: z.string().optional(),
      
      // Agriculture filters
      haveAgriculturalLand: z.string().optional(),
      areInvolvedInAgriculture: z.string().optional(),
      areInvolvedInHusbandry: z.string().optional(),
      hasAgriculturalInsurance: z.string().optional(),
      monthsInvolvedInAgriculture: z.string().optional(),
      
      // Aquaculture filters
      haveAquaculture: z.string().optional(),
      haveApiary: z.string().optional(),
      
      // Migration filters
      birthProvince: z.string().optional(),
      birthDistrict: z.string().optional(),
      birthCountry: z.string().optional(),
      priorProvince: z.string().optional(),
      priorDistrict: z.string().optional(),
      priorCountry: z.string().optional(),
      residenceReason: z.string().optional(),
      
      // Business filters
      hasBusiness: z.string().optional(),
      
      // Date range filters
      dateOfInterviewFrom: z.date().optional(),
      dateOfInterviewTo: z.date().optional(),
      
      // Array field filters (for fields that contain arrays)
      naturalDisasters: z.array(z.string()).optional(),
      facilities: z.array(z.string()).optional(),
      financialAccounts: z.array(z.string()).optional(),
      incomeSources: z.array(z.string()).optional(),
      foodCrops: z.array(z.string()).optional(),
      pulses: z.array(z.string()).optional(),
      oilSeeds: z.array(z.string()).optional(),
      vegetables: z.array(z.string()).optional(),
      fruits: z.array(z.string()).optional(),
      spices: z.array(z.string()).optional(),
      cashCrops: z.array(z.string()).optional(),
      animals: z.array(z.string()).optional(),
      animalProducts: z.array(z.string()).optional(),
      agriculturalMachines: z.array(z.string()).optional(),
    })
    .optional(),
  search: z.string().optional(),
});

export const householdStatusSchema = z.object({
  householdId: z.string(),
  message: z.string().optional(), // For rejection reason or edit request details
});

export type HouseholdStatusUpdate = z.infer<typeof householdStatusSchema>;

export type Household = z.infer<typeof householdSchema>;
