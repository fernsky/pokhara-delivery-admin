import Script from "next/script";

interface ReligionSEOProps {
  overallSummary: Array<{
    religion: string;
    religionName: string;
    population: number;
  }>;
  totalPopulation: number;
  RELIGION_NAMES: Record<string, string>;
  wardNumbers: number[];
}

export default function ReligionSEO({
  overallSummary,
  totalPopulation,
  RELIGION_NAMES,
  wardNumbers,
}: ReligionSEOProps) {
  // Create structured data for SEO
  const generateStructuredData = () => {
    // Define English names for religions
    const RELIGION_NAMES_EN: Record<string, string> = {
      HINDU: "Hindu",
      BUDDHIST: "Buddhist",
      KIRANT: "Kirat",
      CHRISTIAN: "Christian",
      ISLAM: "Islam",
      NATURE: "Nature Worship",
      BON: "Bon",
      JAIN: "Jain",
      BAHAI: "Bahai",
      SIKH: "Sikh",
      OTHER: "Other",
    };

    // Convert religion stats to structured data format
    const religionStats = overallSummary.map((item) => ({
      "@type": "Observation",
      name: `${RELIGION_NAMES_EN[item.religion] || item.religion} population in Pokhara Metropolitan City`,
      observationDate: new Date().toISOString().split("T")[0],
      measuredProperty: {
        "@type": "PropertyValue",
        name: `${RELIGION_NAMES_EN[item.religion] || item.religion} adherents`,
        unitText: "people",
      },
      measuredValue: item.population,
      description: `${item.population.toLocaleString()} people in Pokhara Metropolitan City follow ${RELIGION_NAMES_EN[item.religion] || item.religion} religion (${((item.population / totalPopulation) * 100).toFixed(2)}% of total population)`,
    }));

    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "Religious Demographics of Pokhara Metropolitan City (पोखरा महानगरपालिका)",
      description: `Religious population distribution data across ${wardNumbers.length} wards of Pokhara Metropolitan City with a total population of ${totalPopulation.toLocaleString()} people.`,
      keywords: [
        "Pokhara Metropolitan City",
        "पोखरा महानगरपालिका",
        "Religious demographics",
        "Ward-wise religion data",
        "Nepal census",
        ...Object.values(RELIGION_NAMES_EN).map((name) => `${name} population`),
        ...Object.values(RELIGION_NAMES).map((name) => `${name} जनसंख्या`),
      ],
      url: "https://digital.pokharamun.gov.np/profile/demographics/ward-wise-religion-population",
      creator: {
        "@type": "Organization",
        name: "Pokhara Metropolitan City",
        url: "https://digital.pokharamun.gov.np",
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
        name: `${RELIGION_NAMES_EN[item.religion] || item.religion} population`,
        unitText: "people",
        value: item.population,
      })),
      observation: religionStats,
    };
  };

  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="religion-demographics-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
