import Script from "next/script";

interface LandPossessionSEOProps {
  landPossessionData: Array<{
    wardNumber: number;
    households: number;
  }>;
  totalHouseholdsWithLand: number;
  wardNumbers: number[];
  estimatedTotalHouseholds: number;
}

export default function LandPossessionSEO({
  landPossessionData,
  totalHouseholdsWithLand,
  wardNumbers,
  estimatedTotalHouseholds,
}: LandPossessionSEOProps) {
  // Create structured data for SEO
  const generateStructuredData = () => {
    // Convert land possession stats to structured data format
    const landPossessionStats = landPossessionData.map((item) => ({
      "@type": "Observation",
      name: `Ward ${item.wardNumber} land-owning households in Pokhara Metropolitan City`,
      observationDate: new Date().toISOString().split("T")[0],
      measuredProperty: {
        "@type": "PropertyValue",
        name: `Households with land in Ward ${item.wardNumber}`,
        unitText: "households",
      },
      measuredValue: item.households,
      description: `${item.households.toLocaleString()} households in Ward ${item.wardNumber} of Pokhara Metropolitan City own land (${((item.households / totalHouseholdsWithLand) * 100).toFixed(2)}% of total land-owning households)`,
    }));

    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "Household Land Ownership in Pokhara Metropolitan City (पोखरा महानगरपालिका)",
      description: `Land ownership distribution data across ${wardNumbers.length} wards of Pokhara Metropolitan City with a total of ${totalHouseholdsWithLand.toLocaleString()} land-owning households.`,
      keywords: [
        "Pokhara Metropolitan City",
        "पोखरा महानगरपालिका",
        "Land ownership",
        "Household land possession",
        "Ward-wise land data",
        "Nepal economic survey",
        "Land distribution",
        "Rural land ownership",
        "जग्गा स्वामित्व",
        "भूमिको वितरण",
        "आर्थिक सर्वेक्षण",
      ],
      url: "https://pokhara-rm.gov.np/profile/economics/ward-household-land-possessions",
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
      variableMeasured: [
        {
          "@type": "PropertyValue",
          name: "Land-owning households",
          unitText: "households",
          value: totalHouseholdsWithLand,
        },
        {
          "@type": "PropertyValue",
          name: "Landless households (estimated)",
          unitText: "households",
          value: Math.round(estimatedTotalHouseholds - totalHouseholdsWithLand),
        },
        {
          "@type": "PropertyValue",
          name: "Land ownership percentage",
          unitText: "percent",
          value: (
            (totalHouseholdsWithLand / estimatedTotalHouseholds) *
            100
          ).toFixed(2),
        },
      ],
      observation: landPossessionStats,
    };
  };

  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="land-possession-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
