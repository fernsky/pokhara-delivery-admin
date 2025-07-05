import { localizeNumber } from "@/lib/utils/localize-number";
import TimeToPublicTransportPieChart from "./charts/time-to-public-transport-pie-chart";
import TimeToPublicTransportBarChart from "./charts/time-to-public-transport-bar-chart";
import TimeToPublicTransportComparisonChart from "./charts/time-to-public-transport-comparison-chart";
import WardTimeToPublicTransportPieCharts from "./charts/ward-time-to-public-transport-pie-charts";

interface WardWiseTimeToPublicTransportChartsProps {
  pieChartData: Array<{
    name: string;
    nameEn: string;
    value: number;
    percentage: string;
    color: string;
  }>;
  wardWiseData: Array<any>;
  totalHouseholds: number;
  timeCategoryTotals: Record<string, number>;
  timeMap: Record<string, string>;
  timeCategoryPercentages: Record<string, number>;
  wardWiseQuickAccess: Array<{
    wardNumber: number;
    percentage: number;
  }>;
  bestAccessWard: {
    wardNumber: number;
    percentage: number;
  };
  worstAccessWard: {
    wardNumber: number;
    percentage: number;
  };
  TIME_CATEGORIES: Record<
    string,
    {
      name: string;
      nameEn: string;
      color: string;
    }
  >;
  accessibilityIndex: number;
}

export default function WardWiseTimeToPublicTransportCharts({
  pieChartData,
  wardWiseData,
  totalHouseholds,
  timeCategoryTotals,
  timeMap,
  timeCategoryPercentages,
  wardWiseQuickAccess,
  bestAccessWard,
  worstAccessWard,
  TIME_CATEGORIES,
  accessibilityIndex,
}: WardWiseTimeToPublicTransportChartsProps) {
  return (
    <>
      {/* Overall time to public transport distribution */}
      <div
        className="mb-12 border rounded-lg shadow-sm overflow-hidden bg-card"
        itemScope
        itemType="https://schema.org/Dataset"
      >
        <meta
          itemProp="name"
          content="Time to Public Transport Distribution in Pokhara Metropolitan City"
        />
        <meta
          itemProp="description"
          content={`Distribution of time taken to reach public transportation with a total of ${totalHouseholds} households`}
        />

        <div className="border-b px-4 py-3">
          <h3 className="text-xl font-semibold" itemProp="headline">
            सार्वजनिक यातायात पुग्न लाग्ने समय अनुसार वितरण
          </h3>
          <p className="text-sm text-muted-foreground">
            कुल घरधुरी: {localizeNumber(totalHouseholds.toLocaleString(), "ne")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          {/* Client-side pie chart */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-medium mb-4 text-center">पाई चार्ट</h4>
            <div className="h-[420px]">
              <TimeToPublicTransportPieChart
                pieChartData={pieChartData}
                TIME_CATEGORIES={TIME_CATEGORIES}
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
                      सार्वजनिक यातायात पुग्न लाग्ने समय
                    </th>
                    <th className="border p-2 text-right">घरधुरी</th>
                    <th className="border p-2 text-right">प्रतिशत</th>
                  </tr>
                </thead>
                <tbody>
                  {pieChartData.map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-muted/40" : ""}
                    >
                      <td className="border p-2">
                        {localizeNumber((index + 1).toString(), "ne")}
                      </td>
                      <td className="border p-2">{item.name}</td>
                      <td className="border p-2 text-right">
                        {localizeNumber(item.value.toLocaleString(), "ne")}
                      </td>
                      <td className="border p-2 text-right">
                        {localizeNumber(item.percentage, "ne")}%
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
            सार्वजनिक यातायात पहुँच विवरण
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pieChartData.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <span className="font-medium">
                      {localizeNumber(item.percentage, "ne")}%
                    </span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${parseFloat(item.percentage)}%`,
                        backgroundColor: item.color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ward-wise distribution */}
      <div
        className="mt-12 border rounded-lg shadow-sm overflow-hidden bg-card"
        id="ward-wise-public-transport-access"
        itemScope
        itemType="https://schema.org/Dataset"
      >
        <meta
          itemProp="name"
          content="Ward-wise Time to Public Transport in Pokhara Metropolitan City"
        />
        <meta
          itemProp="description"
          content="Distribution of time to public transport across wards in Pokhara"
        />

        <div className="border-b px-4 py-3">
          <h3 className="text-xl font-semibold" itemProp="headline">
            वडा अनुसार सार्वजनिक यातायात पुग्ने समय
          </h3>
          <p className="text-sm text-muted-foreground">
            वडा अनुसार सार्वजनिक यातायातसम्म पुग्न लाग्ने समयको वितरण
          </p>
        </div>

        <div className="p-6">
          <div className="h-[500px]">
            <TimeToPublicTransportBarChart
              wardWiseData={wardWiseData}
              TIME_CATEGORIES={TIME_CATEGORIES}
            />
          </div>
        </div>
      </div>

      {/* Ward-wise comparison */}
      <div
        className="mt-12 border rounded-lg shadow-sm overflow-hidden bg-card"
        itemScope
        itemType="https://schema.org/Dataset"
      >
        <meta
          itemProp="name"
          content="Quick Access to Public Transport Comparison Across Wards in Pokhara Metropolitan City"
        />
        <meta
          itemProp="description"
          content="Comparison of quick access to public transport across wards in Pokhara"
        />

        <div className="border-b px-4 py-3">
          <h3 className="text-xl font-semibold" itemProp="headline">
            वडागत सार्वजनिक यातायात छिटो पहुँच
          </h3>
          <p className="text-sm text-muted-foreground">
            विभिन्न वडाहरूमा ३० मिनेटभित्र सार्वजनिक यातायात पुग्न सक्ने
            घरधुरीहरूको तुलना
          </p>
        </div>

        <div className="p-6">
          <div className="h-[400px]">
            <TimeToPublicTransportComparisonChart
              wardWiseQuickAccess={wardWiseQuickAccess}
              bestAccessWard={bestAccessWard}
              worstAccessWard={worstAccessWard}
              TIME_CATEGORIES={TIME_CATEGORIES}
            />
          </div>
        </div>
      </div>

      {/* Ward-wise analysis */}
      <div
        className="mt-12 border rounded-lg shadow-sm overflow-hidden bg-card"
        itemScope
        itemType="https://schema.org/Dataset"
      >
        <meta
          itemProp="name"
          content="Ward-wise Public Transport Access Analysis in Pokhara Metropolitan City"
        />
        <meta
          itemProp="description"
          content="Detailed analysis of time to public transport by ward in Pokhara"
        />

        <div className="border-b px-4 py-3">
          <h3 className="text-xl font-semibold" itemProp="headline">
            वडागत सार्वजनिक यातायात पहुँचको विश्लेषण
          </h3>
          <p className="text-sm text-muted-foreground">
            वडा अनुसार सार्वजनिक यातायात पुग्न लाग्ने समयको विस्तृत विश्लेषण
          </p>
        </div>

        <div className="p-6">
          <div className="overflow-auto">
            <table className="w-full border-collapse min-w-[800px]">
              <thead className="sticky top-0 z-10">
                <tr className="bg-muted">
                  <th className="border p-2">वडा नं.</th>
                  <th className="border p-2 text-right">जम्मा घरधुरी</th>
                  {Object.keys(TIME_CATEGORIES).map((key) => (
                    <th key={key} className="border p-2 text-right">
                      {
                        TIME_CATEGORIES[key as keyof typeof TIME_CATEGORIES]
                          .name
                      }
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {wardWiseData.map((item, i) => {
                  const total = item.total;
                  return (
                    <tr key={i} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                      <td className="border p-2">
                        वडा {localizeNumber(item.wardNumber, "ne")}
                      </td>
                      <td className="border p-2 text-right">
                        {localizeNumber(total.toLocaleString(), "ne")}
                      </td>
                      {Object.keys(TIME_CATEGORIES).map((key) => {
                        const timeName =
                          TIME_CATEGORIES[key as keyof typeof TIME_CATEGORIES]
                            .name;
                        const value = item[timeName] || 0;
                        const percentage =
                          total > 0
                            ? ((value / total) * 100).toFixed(2)
                            : "0.00";
                        return (
                          <td key={key} className="border p-2 text-right">
                            {localizeNumber(value.toLocaleString(), "ne")}
                            <div className="text-xs text-muted-foreground">
                              ({localizeNumber(percentage, "ne")}%)
                            </div>
                          </td>
                        );
                      })}
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
                  {Object.keys(TIME_CATEGORIES).map((key) => {
                    const value = timeCategoryTotals[key];
                    const percentage = timeCategoryPercentages[key].toFixed(2);
                    return (
                      <td key={key} className="border p-2 text-right">
                        {localizeNumber(value.toLocaleString(), "ne")}
                        <div className="text-xs">
                          ({localizeNumber(percentage, "ne")}%)
                        </div>
                      </td>
                    );
                  })}
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Ward pie charts (client component) */}
          <h4 className="text-lg font-medium mt-8 mb-4">
            वडागत सार्वजनिक यातायात पहुँचको वितरण
          </h4>
          <WardTimeToPublicTransportPieCharts
            wardWiseData={wardWiseData}
            TIME_CATEGORIES={TIME_CATEGORIES}
          />
        </div>
      </div>
    </>
  );
}
