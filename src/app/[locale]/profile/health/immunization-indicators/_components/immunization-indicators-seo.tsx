import Script from "next/script";
import { localizeNumber } from "@/lib/utils/localize-number";
import { ImmunizationFiscalYear } from "@/server/api/routers/profile/health/immunization-indicators.schema";

interface ImmunizationIndicatorsSEOProps {
  latestFiscalYear: ImmunizationFiscalYear;
  fiscalYearLabel: string;
  coverageData: any[];
  dropoutData: any[];
  wastageData: any[];
  trendData: any[];
  immunizationQualityIndex: number;
  indicatorLabels: Record<string, string>;
}

export default function ImmunizationIndicatorsSEO({
  latestFiscalYear,
  fiscalYearLabel,
  coverageData,
  dropoutData,
  wastageData,
  trendData,
  immunizationQualityIndex,
  indicatorLabels,
}: ImmunizationIndicatorsSEOProps) {
  // Create structured data for SEO
  const generateStructuredData = () => {
    // Find key indicator values for structured data
    const findIndicatorValue = (indicator: string, data: any[]) => {
      const item = data.find((d) => d.indicator === indicator);
      return item ? item.value || 0 : 0;
    };

    const bcgCoverage = findIndicatorValue("BCG_COVERAGE", coverageData);
    const dpt3Coverage = findIndicatorValue(
      "DPT_HEPB_HIB3_COVERAGE",
      coverageData,
    );
    const measlesRubella1Coverage = findIndicatorValue(
      "MEASLES_RUBELLA1_COVERAGE",
      coverageData,
    );
    const fullyImmunized = findIndicatorValue(
      "FULLY_IMMUNIZED_NIP_SCHEDULE",
      coverageData,
    );

    // Convert immunization indicators to structured data format
    const mainCoverageStats = [
      {
        "@type": "Observation",
        name: "BCG Vaccination Coverage in Pokhara Metropolitan City",
        observationDate: `${fiscalYearLabel.replace("/", "-")}`,
        measuredProperty: {
          "@type": "PropertyValue",
          name: "BCG Coverage Rate",
          unitText: "percentage",
        },
        measuredValue: bcgCoverage,
        description: `BCG vaccination coverage was ${bcgCoverage.toFixed(1)}% in fiscal year ${fiscalYearLabel} in Pokhara Metropolitan City.`,
      },
      {
        "@type": "Observation",
        name: "DPT-HepB-Hib3 Vaccination Coverage in Pokhara Metropolitan City",
        observationDate: `${fiscalYearLabel.replace("/", "-")}`,
        measuredProperty: {
          "@type": "PropertyValue",
          name: "DPT-HepB-Hib3 Coverage Rate",
          unitText: "percentage",
        },
        measuredValue: dpt3Coverage,
        description: `DPT-HepB-Hib3 vaccination coverage was ${dpt3Coverage.toFixed(1)}% in fiscal year ${fiscalYearLabel} in Pokhara Metropolitan City.`,
      },
      {
        "@type": "Observation",
        name: "Measles-Rubella Vaccination Coverage in Pokhara Metropolitan City",
        observationDate: `${fiscalYearLabel.replace("/", "-")}`,
        measuredProperty: {
          "@type": "PropertyValue",
          name: "Measles-Rubella Coverage Rate",
          unitText: "percentage",
        },
        measuredValue: measlesRubella1Coverage,
        description: `Measles-Rubella vaccination coverage was ${measlesRubella1Coverage.toFixed(1)}% in fiscal year ${fiscalYearLabel} in Pokhara Metropolitan City.`,
      },
      {
        "@type": "Observation",
        name: "Full Immunization Coverage in Pokhara Metropolitan City",
        observationDate: `${fiscalYearLabel.replace("/", "-")}`,
        measuredProperty: {
          "@type": "PropertyValue",
          name: "Fully Immunized Rate",
          unitText: "percentage",
        },
        measuredValue: fullyImmunized,
        description: `Full immunization coverage was ${fullyImmunized.toFixed(1)}% in fiscal year ${fiscalYearLabel} in Pokhara Metropolitan City.`,
      },
    ];

    return {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "Immunization Indicators in Pokhara Metropolitan City (पोखरा महानगरपालिका)",
      description: `Analysis of immunization coverage and indicators for fiscal year ${fiscalYearLabel} in Pokhara Metropolitan City. Key indicators include BCG coverage (${bcgCoverage.toFixed(1)}%), DPT-HepB-Hib3 coverage (${dpt3Coverage.toFixed(1)}%), Measles-Rubella coverage (${measlesRubella1Coverage.toFixed(1)}%), and full immunization rate (${fullyImmunized.toFixed(1)}%).`,
      keywords: [
        "Pokhara Metropolitan City",
        "पोखरा महानगरपालिका",
        "Immunization coverage",
        "Vaccination program",
        "Child immunization",
        "DPT coverage",
        "Measles-rubella vaccination",
        "BCG coverage",
        "Full immunization",
        "Vaccine dropout rate",
        "Nepal immunization program",
        "Rural health services",
      ],
      url: "https://digital.pokharamun.gov.np/profile/health/immunization-indicators",
      creator: {
        "@type": "Organization",
        name: "Pokhara Metropolitan City",
        url: "https://digital.pokharamun.gov.np",
      },
      temporalCoverage: fiscalYearLabel,
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
          name: "BCG Coverage",
          unitText: "percentage",
          value: bcgCoverage,
        },
        {
          "@type": "PropertyValue",
          name: "DPT-HepB-Hib3 Coverage",
          unitText: "percentage",
          value: dpt3Coverage,
        },
        {
          "@type": "PropertyValue",
          name: "Measles-Rubella Coverage",
          unitText: "percentage",
          value: measlesRubella1Coverage,
        },
        {
          "@type": "PropertyValue",
          name: "Full Immunization Rate",
          unitText: "percentage",
          value: fullyImmunized,
        },
        {
          "@type": "PropertyValue",
          name: "Immunization Quality Index",
          unitText: "index",
          value: immunizationQualityIndex.toFixed(2),
        },
      ],
      observation: mainCoverageStats,
      about: [
        {
          "@type": "Thing",
          name: "Healthcare",
          description: "Immunization services analysis",
        },
        {
          "@type": "Thing",
          name: "Child Health",
          description: "Vaccination coverage for children",
        },
      ],
      isBasedOn: {
        "@type": "GovernmentService",
        name: "National Immunization Program",
        provider: {
          "@type": "GovernmentOrganization",
          name: "Pokhara Metropolitan City",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pokhara",
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
        id="immunization-indicators-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
