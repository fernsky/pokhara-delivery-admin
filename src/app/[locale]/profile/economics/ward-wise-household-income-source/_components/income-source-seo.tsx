import Script from "next/script";
import { IncomeSourceEnum } from "@/server/api/routers/profile/economics/ward-wise-household-income-source.schema";

interface IncomeSourceSEOProps {
  overallSummary: Array<{
    incomeSource: string;
    incomeSourceName: string;
    households: number;
  }>;
  totalHouseholds: number;
  incomeSourceLabels: Record<string, string>;
  wardNumbers: number[];
}

export default function IncomeSourceSEO({
  overallSummary,
  totalHouseholds,
  incomeSourceLabels,
  wardNumbers,
}: IncomeSourceSEOProps) {
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
      name: `${INCOME_SOURCE_NAMES_EN[item.incomeSource] || item.incomeSource} households in Pokhara Metropolitan City`,
      observationDate: new Date().toISOString().split("T")[0],
      measuredProperty: {
        "@type": "PropertyValue",
        name: `${INCOME_SOURCE_NAMES_EN[item.incomeSource] || item.incomeSource} dependent households`,
        unitText: "households",
      },
      measuredValue: item.households,
      description: `${item.households.toLocaleString()} households in Pokhara Metropolitan City depend on ${INCOME_SOURCE_NAMES_EN[item.incomeSource] || item.incomeSource} as their primary income source (${((item.households / totalHouseholds) * 100).toFixed(2)}% of total households)`,
    }));

    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "Household Income Sources of Pokhara Metropolitan City (पोखरा महानगरपालिका)",
      description: `Household income source distribution data across ${wardNumbers.length} wards of Pokhara Metropolitan City with a total of ${totalHouseholds.toLocaleString()} households.`,
      keywords: [
        "Pokhara Metropolitan City",
        "पोखरा महानगरपालिका",
        "Household income sources",
        "Ward-wise economic data",
        "Nepal household survey",
        ...Object.values(INCOME_SOURCE_NAMES_EN).map(
          (name) => `${name} households`,
        ),
        ...Object.values(incomeSourceLabels).map((name) => `${name} घरपरिवार`),
      ],
      url: "https://pokhara-rm.gov.np/profile/economics/ward-wise-household-income-source",
      creator: {
        "@type": "Organization",
        name: "Pokhara Metropolitan City",
        url: "https://pokhara-rm.gov.np",
      },
      temporalCoverage: "2021/2023",
      spatialCoverage: {
        "@type": "Place",
        name: "Pokhara Metropolitan City, Banke, Nepal",
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
