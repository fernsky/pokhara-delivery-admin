import Script from "next/script";
import { localizeNumber } from "@/lib/utils/localize-number";

interface WardWiseTimeToMarketCenterSEOProps {
  timeToMarketCenterData: any[];
  totalHouseholds: number;
  timeCategoryTotals: Record<string, number>;
  timeCategoryPercentages: Record<string, number>;
  bestAccessWard: {
    wardNumber: number;
    percentage: number;
  };
  worstAccessWard: {
    wardNumber: number;
    percentage: number;
  };
  TIME_CATEGORIES: Record<
    string,
    {
      name: string;
      nameEn: string;
      color: string;
    }
  >;
  wardNumbers: number[];
  accessibilityIndex: number;
}

export default function WardWiseTimeToMarketCenterSEO({
  timeToMarketCenterData,
  totalHouseholds,
  timeCategoryTotals,
  timeCategoryPercentages,
  bestAccessWard,
  worstAccessWard,
  TIME_CATEGORIES,
  wardNumbers,
  accessibilityIndex,
}: WardWiseTimeToMarketCenterSEOProps) {
  // Create structured data for SEO
  const generateStructuredData = () => {
    // Convert ward-wise time to market center to structured data format
    const accessStats = wardNumbers
      .map((wardNumber) => {
        const wardData = timeToMarketCenterData.filter(
          (item) => item.wardNumber === wardNumber,
        );

        if (!wardData?.length) return null;

        const totalWardHouseholds = wardData.reduce(
          (sum, item) => sum + item.households,
          0,
        );

        // Calculate quick access (under 30 min) percentage for this ward
        const quickAccessCategories = ["UNDER_15_MIN", "UNDER_30_MIN"];
        const quickAccessHouseholds = wardData
          .filter((item) =>
            quickAccessCategories.includes(item.timeToMarketCenter),
          )
          .reduce((sum, item) => sum + item.households, 0);

        const quickAccessPercent =
          totalWardHouseholds > 0
            ? ((quickAccessHouseholds / totalWardHouseholds) * 100).toFixed(2)
            : "0";

        return {
          "@type": "Observation",
          name: `Market Center Access Statistics in Ward ${wardNumber} of Khajura metropolitan city`,
          observationDate: new Date().toISOString().split("T")[0],
          measuredProperty: {
            "@type": "PropertyValue",
            name: "Quick access rate (under 30 minutes)",
            unitText: "percentage",
          },
          measuredValue: parseFloat(quickAccessPercent),
          description: `In Ward ${wardNumber} of Khajura metropolitan city, ${quickAccessHouseholds.toLocaleString()} households (${quickAccessPercent}%) can access market centers within 30 minutes out of a total of ${totalWardHouseholds.toLocaleString()} households.`,
        };
      })
      .filter(Boolean);

    // Calculate quick access percentage (under 30 min)
    const quickAccessTotal =
      timeCategoryTotals.UNDER_15_MIN + timeCategoryTotals.UNDER_30_MIN;
    const quickAccessPercentage = (
      (quickAccessTotal / totalHouseholds) *
      100
    ).toFixed(2);

    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "Time to Market Center in Khajura metropolitan city (पोखरा महानगरपालिका)",
      description: `Analysis of time taken to reach market centers across ${wardNumbers.length} wards of Khajura metropolitan city with a total of ${totalHouseholds.toLocaleString()} households. ${quickAccessTotal.toLocaleString()} households (${quickAccessPercentage}%) can reach market centers within 30 minutes. The best accessibility is in Ward ${bestAccessWard?.wardNumber || ""} with ${bestAccessWard?.percentage.toFixed(2) || ""}% quick access rate.`,
      keywords: [
        "Khajura metropolitan city",
        "पोखरा महानगरपालिका",
        "Market center access",
        "Market accessibility",
        "Ward-wise market access",
        "Rural market access",
        "Nepal market infrastructure",
        "Time to market center",
        "Market travel time",
        "Market proximity",
        "Rural commerce",
        "Market access index",
      ],
      url: "https://digital.pokharamun.gov.np/profile/physical/ward-wise-time-to-market-center",
      creator: {
        "@type": "Organization",
        name: "Khajura metropolitan city",
        url: "https://digital.pokharamun.gov.np",
      },
      temporalCoverage: "2021/2023",
      spatialCoverage: {
        "@type": "Place",
        name: "Khajura metropolitan city, Banke, Nepal",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "28.1356",
          longitude: "81.6314",
        },
      },
      variableMeasured: [
        {
          "@type": "PropertyValue",
          name: "Under 15 minutes access",
          unitText: "households",
          value: timeCategoryTotals.UNDER_15_MIN,
        },
        {
          "@type": "PropertyValue",
          name: "Under 30 minutes access",
          unitText: "households",
          value: timeCategoryTotals.UNDER_30_MIN,
        },
        {
          "@type": "PropertyValue",
          name: "Under 1 hour access",
          unitText: "households",
          value: timeCategoryTotals.UNDER_1_HOUR,
        },
        {
          "@type": "PropertyValue",
          name: "Over 1 hour access",
          unitText: "households",
          value: timeCategoryTotals["1_HOUR_OR_MORE"],
        },
        {
          "@type": "PropertyValue",
          name: "Quick Access Rate (under 30 minutes)",
          unitText: "percentage",
          value: parseFloat(quickAccessPercentage),
        },
        {
          "@type": "PropertyValue",
          name: "Market Accessibility Index",
          unitText: "index",
          value: accessibilityIndex.toFixed(2),
        },
      ],
      observation: accessStats,
      about: [
        {
          "@type": "Thing",
          name: "Market Access",
          description: "Time to reach market centers analysis",
        },
        {
          "@type": "Thing",
          name: "Commercial Access",
          description: "Time it takes for households to reach market centers",
        },
      ],
      isBasedOn: {
        "@type": "GovernmentService",
        name: "Municipality Infrastructure Survey",
        provider: {
          "@type": "GovernmentOrganization",
          name: "Khajura metropolitan city",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Khajura",
            addressRegion: "Banke",
            addressCountry: "Nepal",
          },
        },
      },
    };
  };

  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="time-to-market-center-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
