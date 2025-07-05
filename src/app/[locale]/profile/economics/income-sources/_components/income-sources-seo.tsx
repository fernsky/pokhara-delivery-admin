import Script from "next/script";

interface IncomeSourcesSEOProps {
  overallSummary: Array<{
    incomeSource: string;
    incomeName: string;
    households: number;
  }>;
  totalHouseholds: number;
  INCOME_SOURCE_NAMES: Record<string, string>;
  wardNumbers: number[];
}

export default function IncomeSourcesSEO({
  overallSummary,
  totalHouseholds,
  INCOME_SOURCE_NAMES,
  wardNumbers,
}: IncomeSourcesSEOProps) {
  // Create structured data for SEO
  const generateStructuredData = () => {
    // Define English names for income sources
    const INCOME_SOURCE_NAMES_EN: Record<string, string> = {
      JOB: "Job/Service",
      AGRICULTURE: "Agriculture",
      BUSINESS: "Business",
      INDUSTRY: "Industry",
      FOREIGN_EMPLOYMENT: "Foreign Employment",
      LABOUR: "Daily Labour",
      OTHER: "Other",
    };

    // Convert income source stats to structured data format
    const incomeSourceStats = overallSummary.map((item) => ({
      "@type": "Observation",
      name: `${INCOME_SOURCE_NAMES_EN[item.incomeSource] || item.incomeSource} households in Khajura metropolitan city`,
      observationDate: new Date().toISOString().split("T")[0],
      measuredProperty: {
        "@type": "PropertyValue",
        name: `${INCOME_SOURCE_NAMES_EN[item.incomeSource] || item.incomeSource} dependent households`,
        unitText: "households",
      },
      measuredValue: item.households,
      description: `${item.households.toLocaleString()} households in Khajura metropolitan city depend on ${INCOME_SOURCE_NAMES_EN[item.incomeSource] || item.incomeSource} (${((item.households / totalHouseholds) * 100).toFixed(2)}% of total households)`,
    }));

    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "Household Income Sources of Khajura metropolitan city (पोखरा महानगरपालिका)",
      description: `Household income sources distribution data across ${wardNumbers.length} wards of Khajura metropolitan city with a total of ${totalHouseholds.toLocaleString()} households.`,
      keywords: [
        "Khajura metropolitan city",
        "पोखरा महानगरपालिका",
        "Income sources",
        "Household economics",
        "Ward-wise income data",
        "Nepal economic census",
        ...Object.values(INCOME_SOURCE_NAMES_EN).map(
          (name) => `${name} income`,
        ),
        ...Object.values(INCOME_SOURCE_NAMES).map((name) => `${name} आयस्रोत`),
      ],
      url: "https://digital.pokharamun.gov.np/profile/economics/income-sources",
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
      variableMeasured: overallSummary.map((item) => ({
        "@type": "PropertyValue",
        name: `${INCOME_SOURCE_NAMES_EN[item.incomeSource] || item.incomeSource} dependent households`,
        unitText: "households",
        value: item.households,
      })),
      observation: incomeSourceStats,
    };
  };

  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="income-sources-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
