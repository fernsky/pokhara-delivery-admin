import Script from "next/script";
import { localizeNumber } from "@/lib/utils/localize-number";

interface GenderSEOProps {
  overallSummary: Array<{
    gender: string;
    genderName: string;
    population: number;
  }>;
  totalPopulation: number;
  GENDER_NAMES: Record<string, string>;
  wardNumbers: number[];
}

export default function GenderSEO({
  overallSummary,
  totalPopulation,
  GENDER_NAMES,
  wardNumbers,
}: GenderSEOProps) {
  // Create structured data for SEO
  const generateStructuredData = () => {
    // Define English names for gender
    const GENDER_NAMES_EN: Record<string, string> = {
      MALE: "Male",
      FEMALE: "Female",
      OTHER: "Other",
    };

    // Convert gender stats to structured data format
    const genderStats = overallSummary.map((item) => ({
      "@type": "Observation",
      name: `${GENDER_NAMES_EN[item.gender] || item.gender} household heads in Khajura metropolitan city`,
      observationDate: new Date().toISOString().split("T")[0],
      measuredProperty: {
        "@type": "PropertyValue",
        name: `${GENDER_NAMES_EN[item.gender] || item.gender} household heads`,
        unitText: "people",
      },
      measuredValue: item.population,
      description: `${localizeNumber(item.population.toLocaleString(), "ne")} ${item.genderName} घरमूली पोखरा महानगरपालिकामा रहेका छन् (कुल घरमूलीको ${localizeNumber(((item.population / totalPopulation) * 100).toFixed(2), "ne")}%)`,
    }));

    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "Household Head Gender Distribution in Khajura metropolitan city (पोखरा महानगरपालिका)",
      description: `Ward-wise gender distribution of household heads across ${localizeNumber(wardNumbers.length.toString(), "ne")} wards of Khajura metropolitan city with a total of ${localizeNumber(totalPopulation.toLocaleString(), "ne")} household heads.`,
      keywords: [
        "Khajura metropolitan city",
        "पोखरा महानगरपालिका",
        "Household head gender",
        "Ward-wise househead data",
        "Nepal demographics",
        "Gender analysis",
        "Female household heads",
        "Male household heads",
      ],
      url: "https://digital.pokharamun.gov.np/profile/demographics/ward-wise-househead-gender",
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
        name: `${item.genderName} household heads`,
        unitText: "people",
        value: item.population,
      })),
      observation: genderStats,
    };
  };

  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="househead-gender-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
