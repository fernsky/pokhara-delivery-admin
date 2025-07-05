import Script from "next/script";
import { localizeNumber } from "@/lib/utils/localize-number";

interface FarmersGroupSEOProps {
  businessSummary: Array<{
    type: string;
    typeName: string;
    count: number;
    percentage: number;
    icon: string;
  }>;
  totalGroups: number;
  farmsByWard: Array<{
    wardNumber: number;
    farmCount: number;
    farms: Array<{
      id: string;
      name: string;
      type: string;
      typeName: string;
      icon: string;
    }>;
  }>;
  BUSINESS_TYPES: Record<string, string>;
  BUSINESS_TYPES_EN: Record<string, string>;
  statistics: {
    totalGroups: number;
    totalWards: number;
    avgGroupsPerWard: number;
    mostPopularBusinessType: string;
    mostPopularBusinessTypeName: string;
    mostPopularBusinessTypePercentage: number;
    wardWithMostGroups: number;
    maximumGroupsInAWard: number;
  };
}

export default function FarmersGroupSEO({
  businessSummary,
  totalGroups,
  farmsByWard,
  BUSINESS_TYPES,
  BUSINESS_TYPES_EN,
  statistics,
}: FarmersGroupSEOProps) {
  // Create structured data for SEO
  const generateStructuredData = () => {
    // Convert business stats to structured data format
    const businessTypeStats = businessSummary.map((item) => ({
      "@type": "Dataset",
      name: `${BUSINESS_TYPES_EN[item.type] || item.type} Groups in Pokhara Metropolitan City`,
      description: `There are ${item.count} ${BUSINESS_TYPES_EN[item.type] || item.type} groups operating in Pokhara Metropolitan City, representing ${item.percentage.toFixed(2)}% of total agricultural groups.`,
      keywords: [
        item.type,
        BUSINESS_TYPES_EN[item.type],
        "agriculture",
        "farming",
        "Pokhara",
      ],
      creator: {
        "@type": "Organization",
        name: "Pokhara Metropolitan City",
      },
      variableMeasured: [
        {
          "@type": "PropertyValue",
          name: "Number of Groups",
          unitText: "count",
          value: item.count,
        },
        {
          "@type": "PropertyValue",
          name: "Percentage of Total",
          unitText: "percentage",
          value: item.percentage,
        },
      ],
    }));

    // Ward distribution data
    const wardDistributionData = farmsByWard.map((ward) => ({
      "@type": "Dataset",
      name: `Ward ${ward.wardNumber} Agricultural Groups`,
      description: `Ward ${ward.wardNumber} has ${ward.farmCount} agricultural and livestock groups, with farms such as ${ward.farms
        .slice(0, 3)
        .map((farm) => farm.name)
        .join(", ")}${ward.farms.length > 3 ? " and others" : ""}.`,
      creator: {
        "@type": "Organization",
        name: "Pokhara Metropolitan City",
      },
      variableMeasured: {
        "@type": "PropertyValue",
        name: "Number of Groups in Ward",
        unitText: "count",
        value: ward.farmCount,
      },
    }));

    // Find most common business type
    const mostCommonBusinessType = statistics.mostPopularBusinessType;
    const mostCommonBusinessTypeEN =
      BUSINESS_TYPES_EN[mostCommonBusinessType] || mostCommonBusinessType;

    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "Commercial Agricultural and Animal Husbandry Farmers Groups in Pokhara Metropolitan City",
      description: `Comprehensive analysis of ${totalGroups} commercial agricultural and animal husbandry farmers groups in Pokhara Metropolitan City. The most common type is ${mostCommonBusinessTypeEN} (${statistics.mostPopularBusinessTypePercentage.toFixed(1)}%), and Ward ${statistics.wardWithMostGroups} has the highest concentration with ${statistics.maximumGroupsInAWard} groups. This dataset covers all 9 wards of the municipality.`,
      keywords: [
        "Pokhara Metropolitan City",
        "पोखरा महानगरपालिका",
        "Commercial Agriculture",
        "Animal Husbandry",
        "Farmers Groups",
        "Agricultural Economics",
        "Rural Development",
        "Nepal Agriculture",
        "Commercial Farming",
        ...businessSummary.map(
          (item) => BUSINESS_TYPES_EN[item.type] || item.type,
        ),
      ],
      url: "https://digital.pokharamun.gov.np/profile/economics/commercial-agricultural-animal-husbandry-farmers-group",
      creator: {
        "@type": "Organization",
        name: "Pokhara Metropolitan City",
        url: "https://digital.pokharamun.gov.np",
      },
      temporalCoverage: "2023",
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
          name: "Total Farmers Groups",
          unitText: "count",
          value: totalGroups,
        },
        {
          "@type": "PropertyValue",
          name: "Average Groups per Ward",
          unitText: "count",
          value: statistics.avgGroupsPerWard,
        },
        {
          "@type": "PropertyValue",
          name: "Most Common Business Type",
          value: mostCommonBusinessTypeEN,
        },
        {
          "@type": "PropertyValue",
          name: "Most Common Business Type Percentage",
          unitText: "percentage",
          value: statistics.mostPopularBusinessTypePercentage,
        },
      ],
      distribution: businessTypeStats,
      hasPart: wardDistributionData,
      about: [
        {
          "@type": "Thing",
          name: "Agricultural Economics",
          description:
            "The study of agricultural production, distribution, and resource allocation",
        },
        {
          "@type": "Thing",
          name: "Rural Development",
          description: "Economic and social development focused on rural areas",
        },
        {
          "@type": "Thing",
          name: "Cooperative Farming",
          description:
            "Agricultural production carried out by farming groups or cooperatives",
        },
      ],
      isPartOf: {
        "@type": "Dataset",
        name: "Pokhara Metropolitan City Digital Profile",
        url: "https://digital.pokharamun.gov.np",
      },
    };
  };

  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="farmers-group-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
