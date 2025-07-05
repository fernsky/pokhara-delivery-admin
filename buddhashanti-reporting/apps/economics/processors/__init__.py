"""
Economics processors package for pokhara Metropolitan City.
"""

from .remittance_expenses import RemittanceExpensesProcessor
from .manager import EconomicsManager, get_economics_manager
from .municipality_wide_foreign_employment_countries import (
    MunicipalityWideForeignEmploymentCountriesProcessor,
)

__all__ = [
    "RemittanceExpensesProcessor",
    "EconomicsManager",
    "get_economics_manager",
    "MunicipalityWideForeignEmploymentCountriesProcessor",
]
