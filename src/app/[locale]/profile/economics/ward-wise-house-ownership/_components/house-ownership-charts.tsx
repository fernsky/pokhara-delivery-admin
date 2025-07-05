import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import HouseOwnershipPieChart from "./charts/house-ownership-pie-chart";
import HouseOwnershipBarChart from "./charts/house-ownership-bar-chart";
import WardHouseOwnershipPieCharts from "./charts/ward-house-ownership-pie-charts";
import { localizeNumber } from "@/lib/utils/localize-number";

// Define ownership type colors for consistency
const OWNERSHIP_TYPE_COLORS = {
  PRIVATE: "#3498db", // Blue for private
  RENT: "#e74c3c", // Red for rent
  INSTITUTIONAL: "#2ecc71", // Green for institutional
  OTHER: "#95a5a6", // Gray for other
};

interface HouseOwnershipChartsProps {
  overallSummary: Array<{
    ownershipType: string;
    ownershipTypeName: string;
    households: number;
  }>;
  totalHouseholds: number;
  pieChartData: Array<{
    name: string;
    value: number;
    percentage: string;
  }>;
  wardWiseData: Array<Record<string, any>>;
  wardNumbers: number[];
  ownershipData: Array<{
    id?: string;
    wardNumber: number;
    ownershipType: string;
    households: number;
  }>;
  wardWiseAnalysis: Array<{
    wardNumber: number;
    totalHouseholds: number;
    mostCommonType: string;
    mostCommonTypeHouseholds: number;
    mostCommonTypePercentage: string;
    privateHouseholds: number;
    privatePercentage: string;
  }>;
  OWNERSHIP_TYPE_NAMES: Record<string, string>;
}

export default function HouseOwnershipCharts({
  overallSummary,
  totalHouseholds,
  pieChartData,
  wardWiseData,
  wardNumbers,
  ownershipData,
  wardWiseAnalysis,
  OWNERSHIP_TYPE_NAMES,
}: HouseOwnershipChartsProps) {
  return (
    <>
      {/* Overall house ownership distribution - with pre-rendered table and client-side chart */}
      <div
        className="mb-12 border rounded-lg shadow-sm overflow-hidden bg-card"
        itemScope
        itemType="https://schema.org/Dataset"
      >
        <meta
          itemProp="name"
          content="House Ownership Types in Pokhara Metropolitan City"
        />
        <meta
          itemProp="description"
          content={`House ownership distribution of Pokhara with a total of ${totalHouseholds} households`}
        />

        <div className="border-b px-4 py-3">
          <h3 className="text-xl font-semibold" itemProp="headline">
            घर स्वामित्वको प्रकार अनुसार वितरण
          </h3>
          <p className="text-sm text-muted-foreground">
            कुल घरधुरी संख्या:{" "}
            {localizeNumber(totalHouseholds.toLocaleString(), "ne")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          {/* Client-side pie chart */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-medium mb-4 text-center">पाई चार्ट</h4>
            <div className="h-[420px]">
              <HouseOwnershipPieChart
                pieChartData={pieChartData}
                OWNERSHIP_TYPE_NAMES={OWNERSHIP_TYPE_NAMES}
                OWNERSHIP_TYPE_COLORS={OWNERSHIP_TYPE_COLORS}
              />
            </div>
          </div>

          {/* Server-side pre-rendered table for SEO */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-medium mb-4 text-center">तालिका</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted sticky top-0">
                    <th className="border p-2 text-left">क्र.सं.</th>
                    <th className="border p-2 text-left">
                      घर स्वामित्वको प्रकार
                    </th>
                    <th className="border p-2 text-right">घरधुरी संख्या</th>
                    <th className="border p-2 text-right">प्रतिशत</th>
                  </tr>
                </thead>
                <tbody>
                  {overallSummary.map((item, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-muted/40" : ""}>
                      <td className="border p-2">
                        {localizeNumber(i + 1, "ne")}
                      </td>
                      <td className="border p-2">{item.ownershipTypeName}</td>
                      <td className="border p-2 text-right">
                        {localizeNumber(item.households.toLocaleString(), "ne")}
                      </td>
                      <td className="border p-2 text-right">
                        {localizeNumber(
                          ((item.households / totalHouseholds) * 100).toFixed(
                            2,
                          ),
                          "ne",
                        )}
                        %
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="font-semibold bg-muted/70">
                    <td className="border p-2" colSpan={2}>
                      जम्मा
                    </td>
                    <td className="border p-2 text-right">
                      {localizeNumber(totalHouseholds.toLocaleString(), "ne")}
                    </td>
                    <td className="border p-2 text-right">
                      {localizeNumber("100.00", "ne")}%
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 p-4 border-t">
          <h4 className="text-sm font-medium text-muted-foreground mb-4">
            घर स्वामित्व विवरण
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {overallSummary.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor:
                      OWNERSHIP_TYPE_COLORS[
                        item.ownershipType as keyof typeof OWNERSHIP_TYPE_COLORS
                      ] || "#888",
                  }}
                ></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <span>{item.ownershipTypeName}</span>
                    <span className="font-medium">
                      {localizeNumber(
                        ((item.households / totalHouseholds) * 100).toFixed(1),
                        "ne",
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(item.households / totalHouseholds) * 100}%`,
                        backgroundColor:
                          OWNERSHIP_TYPE_COLORS[
                            item.ownershipType as keyof typeof OWNERSHIP_TYPE_COLORS
                          ] || "#888",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ward-wise distribution - pre-rendered table with client-side chart */}
      <div
        className="mt-12 border rounded-lg shadow-sm overflow-hidden bg-card"
        id="ward-wise-house-ownership"
        itemScope
        itemType="https://schema.org/Dataset"
      >
        <meta
          itemProp="name"
          content="Ward-wise House Ownership in Pokhara Metropolitan City"
        />
        <meta
          itemProp="description"
          content="House ownership distribution across wards in Pokhara"
        />

        <div className="border-b px-4 py-3">
          <h3 className="text-xl font-semibold" itemProp="headline">
            वडा अनुसार घर स्वामित्वको वितरण
          </h3>
          <p className="text-sm text-muted-foreground">
            वडा र स्वामित्व प्रकार अनुसार घरधुरी वितरण
          </p>
        </div>

        <div className="p-6">
          <div className="h-[500px]">
            <HouseOwnershipBarChart
              wardWiseData={wardWiseData}
              OWNERSHIP_TYPE_COLORS={OWNERSHIP_TYPE_COLORS}
              OWNERSHIP_TYPE_NAMES={OWNERSHIP_TYPE_NAMES}
            />
          </div>
        </div>
      </div>

      {/* Ward-wise analysis - with pre-rendered HTML table for SEO */}
      <div
        className="mt-12 border rounded-lg shadow-sm overflow-hidden bg-card"
        itemScope
        itemType="https://schema.org/Dataset"
      >
        <meta
          itemProp="name"
          content="Ward-wise House Ownership Analysis in Pokhara Metropolitan City"
        />
        <meta
          itemProp="description"
          content="Most common house ownership types by ward in Pokhara"
        />

        <div className="border-b px-4 py-3">
          <h3 className="text-xl font-semibold" itemProp="headline">
            वडागत घर स्वामित्व विश्लेषण
          </h3>
          <p className="text-sm text-muted-foreground">
            वडा अनुसार घर स्वामित्वको प्रमुख प्रकारहरू र वितरण
          </p>
        </div>

        <div className="p-6">
          <div className="overflow-auto">
            <table className="w-full border-collapse min-w-[800px]">
              <thead className="sticky top-0 z-10">
                <tr className="bg-muted">
                  <th className="border p-2">वडा नं.</th>
                  <th className="border p-2 text-right">जम्मा घरधुरी</th>
                  <th className="border p-2">प्रमुख स्वामित्वको प्रकार</th>
                  <th className="border p-2 text-right">
                    प्रमुख प्रकारको घरधुरी
                  </th>
                  <th className="border p-2 text-right">प्रतिशत</th>
                </tr>
              </thead>
              <tbody>
                {wardWiseAnalysis.map((item, i) => {
                  return (
                    <tr key={i} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                      <td className="border p-2">
                        वडा {localizeNumber(item.wardNumber, "ne")}
                      </td>
                      <td className="border p-2 text-right">
                        {localizeNumber(
                          item.totalHouseholds.toLocaleString(),
                          "ne",
                        )}
                      </td>
                      <td className="border p-2">
                        {OWNERSHIP_TYPE_NAMES[
                          item.mostCommonType as keyof typeof OWNERSHIP_TYPE_NAMES
                        ] || item.mostCommonType}
                      </td>
                      <td className="border p-2 text-right">
                        {localizeNumber(
                          item.mostCommonTypeHouseholds.toLocaleString(),
                          "ne",
                        )}
                      </td>
                      <td className="border p-2 text-right">
                        {localizeNumber(item.mostCommonTypePercentage, "ne")}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="font-semibold bg-muted/70">
                  <td className="border p-2">पालिका जम्मा</td>
                  <td className="border p-2 text-right">
                    {localizeNumber(totalHouseholds.toLocaleString(), "ne")}
                  </td>
                  <td className="border p-2">
                    {OWNERSHIP_TYPE_NAMES[
                      overallSummary[0]
                        ?.ownershipType as keyof typeof OWNERSHIP_TYPE_NAMES
                    ] || overallSummary[0]?.ownershipType}
                  </td>
                  <td className="border p-2 text-right">
                    {localizeNumber(
                      (overallSummary[0]?.households || 0).toLocaleString(),
                      "ne",
                    )}
                  </td>
                  <td className="border p-2 text-right">
                    {localizeNumber(
                      (
                        ((overallSummary[0]?.households || 0) /
                          totalHouseholds) *
                        100
                      ).toFixed(2),
                      "ne",
                    )}
                    %
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Ward pie charts (client component) */}
          <h4 className="text-lg font-medium mt-8 mb-4">
            वडागत घर स्वामित्वको वितरण
          </h4>
          <WardHouseOwnershipPieCharts
            wardNumbers={wardNumbers}
            ownershipData={ownershipData}
            OWNERSHIP_TYPE_NAMES={OWNERSHIP_TYPE_NAMES}
            OWNERSHIP_TYPE_COLORS={OWNERSHIP_TYPE_COLORS}
          />
        </div>
      </div>
    </>
  );
}
