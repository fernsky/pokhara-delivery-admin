import { createTRPCRouter } from "@/server/api/trpc";
import { create } from "./procedures/create";
import { 
  getAll, 
  getById, 
  getBusinessDistricts,
  getBusinessProvinces,
  getTotalBusinessCountProcedure,
} from "./procedures/query";
import {
  getBusinessLocationProcedure,
  getBusinessesLocationsProcedure,
} from "./procedures/location";


export const businessRouter = createTRPCRouter({
  create,
  getAll,
  getById,
  getTotalCount: getTotalBusinessCountProcedure,
  getBusinessDistricts,
  getBusinessProvinces,
  getLocation: getBusinessLocationProcedure,
  getLocations: getBusinessesLocationsProcedure,
});
