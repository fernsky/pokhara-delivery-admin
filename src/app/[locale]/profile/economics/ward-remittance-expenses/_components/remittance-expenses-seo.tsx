import Script from "next/script";

interface RemittanceExpensesSEOProps {
  overallSummary: Array<{
    expense: string;
    expenseName: string;
    households: number;
  }>;
  totalHouseholds: number;
  remittanceExpenseLabels: Record<string, string>;
  EXPENSE_NAMES_EN: Record<string, string>;
  wardNumbers: number[];
}

export default function RemittanceExpensesSEO({
  overallSummary,
  totalHouseholds,
  remittanceExpenseLabels,
  EXPENSE_NAMES_EN,
  wardNumbers,
}: RemittanceExpensesSEOProps) {
  // Create structured data for SEO
  const generateStructuredData = () => {
    // Convert remittance expense stats to structured data format
    const expenseStats = overallSummary.map((item) => ({
      "@type": "Observation",
      name: `${EXPENSE_NAMES_EN[item.expense] || item.expense} in Pokhara Metropolitan City`,
      observationDate: new Date().toISOString().split("T")[0],
      measuredProperty: {
        "@type": "PropertyValue",
        name: `${EXPENSE_NAMES_EN[item.expense] || item.expense} spending households`,
        unitText: "households",
      },
      measuredValue: item.households,
      description: `${item.households.toLocaleString()} households in Pokhara Metropolitan City spend their remittance on ${EXPENSE_NAMES_EN[item.expense] || item.expense} (${((item.households / totalHouseholds) * 100).toFixed(2)}% of total households receiving remittances)`,
    }));

    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "Remittance Expense Patterns of Pokhara Metropolitan City (पोखरा महानगरपालिका)",
      description: `Remittance expense distribution data across ${wardNumbers.length} wards of Pokhara Metropolitan City with ${totalHouseholds.toLocaleString()} households receiving remittances.`,
      keywords: [
        "Pokhara Metropolitan City",
        "पोखरा महानगरपालिका",
        "Remittance expenses",
        "Remittance utilization",
        "Ward-wise remittance data",
        "Nepal remittance",
        "Foreign employment earnings",
        ...Object.values(EXPENSE_NAMES_EN).map((name) => `${name} expenses`),
        ...Object.values(remittanceExpenseLabels).map(
          (name) => `${name} विप्रेषण खर्च`,
        ),
      ],
      url: "https://pokhara-rm.gov.np/profile/economics/ward-remittance-expenses",
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
        name: `${EXPENSE_NAMES_EN[item.expense] || item.expense} households`,
        unitText: "households",
        value: item.households,
      })),
      observation: expenseStats,
    };
  };

  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="remittance-expenses-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
