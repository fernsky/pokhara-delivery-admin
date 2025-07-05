"""
Ward Settlement Demographics Processor

Handles ward settlement data processing and report formatting.
"""

from pathlib import Path
from .base import BaseDemographicsProcessor, BaseReportFormatter
from ..models import WardSettlement
from apps.reports.utils.nepali_numbers import format_nepali_number


class WardSettlementProcessor(BaseDemographicsProcessor):
    """Processor for ward settlement demographics"""

    def __init__(self):
        super().__init__()
        # No charts needed for this processor

    def get_section_title(self):
        return "मुख्य बस्ती र घरपरिवारको विवरण"

    def get_section_number(self):
        return "३.१"

    def get_subsection_title(self):
        return "मुख्य बस्ती"

    def get_subsection_number(self):
        return "३.१.१"

    def get_data(self):
        """Get ward settlement data from the database"""
        ward_data = {}
        for ward_settlement in WardSettlement.objects.all().order_by("ward_number"):
            ward_data[ward_settlement.ward_number] = {
                "ward_number": ward_settlement.ward_number,
                "settlement_areas": ward_settlement.settlement_areas,
                "settlement_count": (
                    len(ward_settlement.settlement_areas)
                    if ward_settlement.settlement_areas
                    else 0
                ),
            }
        total_settlements = sum(
            len(data["settlement_areas"]) if data["settlement_areas"] else 0
            for data in ward_data.values()
        )
        return {
            "ward_data": ward_data,
            "total_settlements": total_settlements,
            "total_wards": len(ward_data),
        }

    def generate_report_content(self, data):
        """Generate ward settlement-specific report content"""
        formatter = self.WardSettlementReportFormatter()
        return formatter.generate_formal_report(data)

    def generate_chart_svg(self, data, chart_type="pie"):
        """Ward settlement doesn't need charts"""
        return None

    def generate_and_save_charts(self, data):
        """Ward settlement doesn't need charts"""
        return {}

    def process_for_pdf(self):
        """Process ward settlement data for PDF generation without charts"""
        # Get raw data
        data = self.get_data()

        # Generate report content
        report_content = self.generate_report_content(data)

        # No charts needed for ward settlement
        charts = {}

        # Calculate totals for summary
        total_settlements = data.get("total_settlements", 0)
        total_wards = data.get("total_wards", 0)

        return {
            "data": data,
            "report_content": report_content,
            "charts": charts,
            "total_settlements": total_settlements,
            "total_wards": total_wards,
            "section_title": self.get_section_title(),
            "section_number": self.get_section_number(),
            "subsection_title": self.get_subsection_title(),
            "subsection_number": self.get_subsection_number(),
        }

    class WardSettlementReportFormatter(BaseReportFormatter):
        """Formatter for ward settlement reports"""

        def generate_formal_report(self, data):
            """Generate formal ward settlement report"""

            # Updated analysis/description for pokhara
            analysis_text = "पोखरा महानगरपालिका तराई–मधेशको दक्षिणी भागमा अवस्थित छ, जहाँ समथर भू–भाग, उप–उष्ण तथा समशीतोष्ण जलवायु पाइन्छ । यहाँका बस्तीहरू मुख्यतया कृषि, पशुपालन, र व्यापारमा आधारित छन् । गाउँपालिकाका अधिकांश बस्तीहरू सडक सञ्जाल, सिंचाइ, खानेपानी, शिक्षा र स्वास्थ्य सेवामा पहुँच भएका छन् । तर, केही बस्तीहरू अझै पनि आधारभूत पूर्वाधार र सेवाबाट वञ्चित छन् । यहाँका बस्तीहरूमा विभिन्न जातजाति, भाषा र संस्कृतिका समुदायहरूको सह–अस्तित्व पाइन्छ । जलवायु अनुकूलता, उर्वर भूमि, र सीमावर्ती क्षेत्रको कारण यहाँ बसोबासको आकर्षण बढ्दो छ । विकासका दृष्टिले, बस्तीहरूको व्यवस्थित विस्तार, पूर्वाधार सुदृढीकरण, र सामाजिक समावेशीकरणमा जोड दिनुपर्ने देखिन्छ ।"

            ward_data = data.get("ward_data", {})
            total_settlements = data.get("total_settlements", 0)
            total_wards = data.get("total_wards", 0)

            summary = f"पोखरा महानगरपालिकामा कुल {format_nepali_number(total_wards)} वडामा {format_nepali_number(total_settlements)} भन्दा बढी मुख्य बस्तीहरू रहेका छन् । "
            report = f"{summary}\n\n{analysis_text}"

            return {
                "coherent_analysis": report,
                "ward_data": ward_data,
                "total_settlements": total_settlements,
                "total_wards": total_wards,
            }
