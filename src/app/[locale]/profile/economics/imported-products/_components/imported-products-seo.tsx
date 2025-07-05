import Script from "next/script";

interface ImportedProductsSEOProps {
  totalProducts: number;
  categoryDistribution: Array<{
    name: string;
    value: number;
    percentage: string;
  }>;
}

export default function ImportedProductsSEO({
  totalProducts,
  categoryDistribution,
}: ImportedProductsSEOProps) {
  // Create structured data for SEO
  const generateStructuredData = () => {
    // Define English names for categories
    const CATEGORY_NAMES_EN: Record<string, string> = {
      "खाद्य पदार्थ": "Food Products",
      "औद्योगिक सामान": "Industrial Goods",
      "निर्माण सामग्री": "Construction Materials",
      "कपडा तथा पोशाक": "Textiles and Clothing",
      इलेक्ट्रोनिक्स: "Electronics",
      अन्य: "Other",
    };

    // Convert category stats to structured data format
    const categoryStats = categoryDistribution.map((item) => ({
      "@type": "Observation",
      name: `${CATEGORY_NAMES_EN[item.name] || item.name} imports in Pokhara Metropolitan City`,
      observationDate: new Date().toISOString().split("T")[0],
      measuredProperty: {
        "@type": "PropertyValue",
        name: `${CATEGORY_NAMES_EN[item.name] || item.name} imported products`,
        unitText: "items",
      },
      measuredValue: item.value,
      description: `${item.value.toLocaleString()} products in ${
        CATEGORY_NAMES_EN[item.name] || item.name
      } category are imported in Pokhara Metropolitan City (${item.percentage}% of total imports)`,
    }));

    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "Imported Products Catalog of Pokhara Metropolitan City (पोखरा महानगरपालिका)",
      description: `Comprehensive catalog of ${totalProducts.toLocaleString()} products imported into Pokhara Metropolitan City, categorized by type and usage.`,
      keywords: [
        "Pokhara Metropolitan City",
        "पोखरा महानगरपालिका",
        "Import catalog",
        "Economic profile",
        "Imported goods",
        "Nepal imports",
        ...Object.values(CATEGORY_NAMES_EN).map((name) => `${name} imports`),
        ...categoryDistribution.map((cat) => `${cat.name} आयातित वस्तु`),
      ],
      url: "https://digital.pokharamun.gov.np/profile/economics/imported-products",
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
      variableMeasured: categoryDistribution.map((item) => ({
        "@type": "PropertyValue",
        name: `${CATEGORY_NAMES_EN[item.name] || item.name} import count`,
        unitText: "products",
        value: item.value,
      })),
      observation: categoryStats,
    };
  };

  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="imported-products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
