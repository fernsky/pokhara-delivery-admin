import { sql } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { users, areas, surveyData, wards } from "@/server/db/schema/basic";
import { productIndividual } from "@/server/db/schema/family/individual";
import { and, count, eq } from "drizzle-orm";
import { db } from "@/server/db";

// export const getDemographicAnalytics = publicProcedure
//   .input(z.object({ wardNumber: z.number().optional() }))
//   .query(async ({ ctx, input }) => {
//     return {
//       gender: await getGenderDistribution({ input: { wardNumber: input.wardNumber }, ctx }),
//       age: await getAgeDistribution({ input: { wardNumber: input.wardNumber }, ctx }),
//       caste: await getCasteDistribution({ input: { wardNumber: input.wardNumber }, ctx }),
//       ancestorLanguage: await getAncestorLanguageDistribution({ input: { wardNumber: input.wardNumber }, ctx }),
//       motherTongue: await getMotherTongueDistribution({ input: { wardNumber: input.wardNumber }, ctx }),
//       religion: await getReligionDistribution({ input: { wardNumber: input.wardNumber }, ctx }),
//       maritalStatus: await getMaritalStatusDistribution({ input: { wardNumber: input.wardNumber }, ctx }),
//       marriageAge: await getMarriageAgeDistribution({ input: { wardNumber: input.wardNumber }, ctx }),
//       disability: await getDisabilityDistribution({ input: { wardNumber: input.wardNumber }, ctx }),
//     };
//   });

export const getGenderDistribution = publicProcedure
  .input(z.object({ wardNumber: z.number().optional() }))
  .query(async ({ ctx, input }) => {
    const query = ctx.db
      .select({
        gender: productIndividual.gender,
        count: sql<number>`count(*)::int`,
      })
      .from(productIndividual);

    if (input.wardNumber) {
      query.where(eq(productIndividual.wardNo, input.wardNumber));
    }

    return await query.groupBy(productIndividual.gender);
  });

export const getAgeDistribution = publicProcedure
  .input(z.object({ wardNumber: z.number().optional() }))
  .query(async ({ ctx, input }) => {
    const ageRanges = `
      CASE 
        WHEN age <= 14 THEN '0-14'
        WHEN age <= 24 THEN '15-24'
        WHEN age <= 54 THEN '25-54'
        WHEN age <= 64 THEN '55-64'
        ELSE '65+'
      END
    `;

    const wardFilter = input.wardNumber
      ? sql`AND ward_no = ${input.wardNumber}`
      : sql``;

    return await ctx.db.execute(sql`
      SELECT ${sql.raw(ageRanges)} as age_group, COUNT(*)::int as count
      FROM ${productIndividual}
      WHERE age IS NOT NULL ${wardFilter}
      GROUP BY age_group
      ORDER BY age_group
    `);
  });

export const getCasteDistribution = publicProcedure
  .input(z.object({ wardNumber: z.number().optional() }))
  .query(async ({ ctx, input }) => {
    const query = ctx.db
      .select({
        caste: productIndividual.caste,
        count: sql<number>`count(*)::int`,
      })
      .from(productIndividual)
      .where(
        input.wardNumber
          ? and(
              sql`${productIndividual.caste} IS NOT NULL`,
              eq(productIndividual.wardNo, input.wardNumber),
            )
          : sql`${productIndividual.caste} IS NOT NULL`,
      );

    return await query.groupBy(productIndividual.caste);
  });

export const getAncestorLanguageDistribution = publicProcedure
  .input(z.object({ wardNumber: z.number().optional() }))
  .query(async ({ ctx, input }) => {
    const query = ctx.db
      .select({
        language: productIndividual.ancestorLanguage,
        count: sql<number>`count(*)::int`,
      })
      .from(productIndividual)
      .where(
        input.wardNumber
          ? and(
              sql`${productIndividual.ancestorLanguage} IS NOT NULL`,
              eq(productIndividual.wardNo, input.wardNumber),
            )
          : sql`${productIndividual.ancestorLanguage} IS NOT NULL`,
      );

    return await query.groupBy(productIndividual.ancestorLanguage);
  });

export const getMotherTongueDistribution = publicProcedure
  .input(z.object({ wardNumber: z.number().optional() }))
  .query(async ({ ctx, input }) => {
    const query = ctx.db
      .select({
        language: productIndividual.primaryMotherTongue,
        count: sql<number>`count(*)::int`,
      })
      .from(productIndividual)
      .where(
        input.wardNumber
          ? and(
              sql`${productIndividual.primaryMotherTongue} IS NOT NULL`,
              eq(productIndividual.wardNo, input.wardNumber),
            )
          : sql`${productIndividual.primaryMotherTongue} IS NOT NULL`,
      );

    return await query.groupBy(productIndividual.primaryMotherTongue);
  });

export const getReligionDistribution = publicProcedure
  .input(z.object({ wardNumber: z.number().optional() }))
  .query(async ({ ctx, input }) => {
    const query = ctx.db
      .select({
        religion: productIndividual.religion,
        count: sql<number>`count(*)::int`,
      })
      .from(productIndividual)
      .where(
        input.wardNumber
          ? and(
              sql`${productIndividual.religion} IS NOT NULL`,
              eq(productIndividual.wardNo, input.wardNumber),
            )
          : sql`${productIndividual.religion} IS NOT NULL`,
      );

    return await query.groupBy(productIndividual.religion);
  });

export const getMaritalStatusDistribution = publicProcedure
  .input(z.object({ wardNumber: z.number().optional() }))
  .query(async ({ ctx, input }) => {
    const query = ctx.db
      .select({
        status: productIndividual.maritalStatus,
        count: sql<number>`count(*)::int`,
      })
      .from(productIndividual)
      .where(
        input.wardNumber
          ? and(
              sql`${productIndividual.maritalStatus} IS NOT NULL`,
              eq(productIndividual.wardNo, input.wardNumber),
            )
          : sql`${productIndividual.maritalStatus} IS NOT NULL`,
      );

    return await query.groupBy(productIndividual.maritalStatus);
  });

export const getMarriageAgeDistribution = publicProcedure
  .input(z.object({ wardNumber: z.number().optional() }))
  .query(async ({ ctx, input }) => {
    const ageRanges = `
      CASE 
        WHEN married_age < 18 THEN 'Under 18'
        WHEN married_age <= 25 THEN '18-25'
        WHEN married_age <= 35 THEN '26-35'
        ELSE 'Above 35'
      END
    `;

    const wardFilter = input.wardNumber
      ? sql`AND ward_no = ${input.wardNumber}`
      : sql``;

    return await ctx.db.execute(sql`
      SELECT ${sql.raw(ageRanges)} as age_group, COUNT(*)::int as count
      FROM ${productIndividual}
      WHERE married_age IS NOT NULL ${wardFilter}
      GROUP BY age_group
      ORDER BY age_group
    `);
  });

export const getDisabilityDistribution = publicProcedure
  .input(z.object({ wardNumber: z.number().optional() }))
  .query(async ({ ctx, input }) => {
    const query = ctx.db
      .select({
        isDisabled: productIndividual.isDisabled,
        count: sql<number>`count(*)::int`,
      })
      .from(productIndividual)
      .where(
        input.wardNumber
          ? and(
              sql`${productIndividual.isDisabled} IS NOT NULL`,
              eq(productIndividual.wardNo, input.wardNumber),
            )
          : sql`${productIndividual.isDisabled} IS NOT NULL`,
      );

    return await query.groupBy(productIndividual.isDisabled);
  });

export const getSubmissionStats = publicProcedure
  .input(
    z.object({
      startDate: z.date().optional(),
      endDate: z.date().optional(),
      wardNumber: z.number().optional(),
    }),
  )
  .query(async ({ ctx, input }) => {
    const { startDate, endDate, wardNumber } = input;
    const query = ctx.db
      .select({
        count: count(surveyData.id),
      })
      .from(surveyData);

    if (startDate && endDate) {
      query.where(
        and(
          sql`${surveyData.created_at} >= ${startDate}`,
          sql`${surveyData.created_at} <= ${endDate}`,
        ),
      );
    }

    const result = await query;
    return result[0];
  });

export const getAreaStats = publicProcedure.query(async ({ ctx }) => {
  const [totalAreas] = await ctx.db
    .select({
      total: count(),
      assigned: sql<number>`count(case when ${areas.assignedTo} is not null then 1 end)::int`,
      completed: sql<number>`count(case when ${areas.areaStatus} = 'completed' then 1 end)::int`,
    })
    .from(areas);

  return {
    total: Number(totalAreas.total),
    assigned: Number(totalAreas.assigned),
    completed: Number(totalAreas.completed),
  };
});

export const getEnumeratorStats = publicProcedure.query(async ({ ctx }) => {
  const [stats] = await ctx.db
    .select({
      total: count(),
      active: sql<number>`count(case when ${users.isActive} = true then 1 end)::int`,
    })
    .from(users)
    .where(eq(users.role, "enumerator"));

  return {
    total: Number(stats.total),
    active: Number(stats.active),
  };
});

export const getWardStats = publicProcedure
  .input(
    z.object({
      wardNumber: z.number().optional(),
    }),
  )
  .query(async ({ ctx, input }) => {
    const query = ctx.db
      .select({
        wardNumber: wards.wardNumber,
        totalAreas: count(areas.id),
        completedAreas: sql<number>`count(case when ${areas.areaStatus} = 'completed' then 1 end)::int`,
      })
      .from(wards)
      .leftJoin(areas, eq(areas.wardNumber, wards.wardNumber))
      .groupBy(wards.wardNumber);

    if (input.wardNumber) {
      query.where(eq(wards.wardNumber, input.wardNumber));
    }

    const results = await query;
    return results.map((row) => ({
      ...row,
      totalAreas: Number(row.totalAreas),
      completedAreas: Number(row.completedAreas),
    }));
  });
