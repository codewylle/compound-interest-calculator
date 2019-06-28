import { types } from "mobx-state-tree";

import { InputNumberModel } from "./InputNumberModel";

function formatInterest(value: number, info?: string): string {
    if (isNaN(value)) {
        return "НЕДОСТАТОЧНО ДАННЫХ";
    }

    const body = `${((value - 1) * 100).toFixed(2)}%`;

    return info ? `${body} ${info}` : body;
}

export const CalcModel = types.model("Calc", {
    primaryLoan: types.optional(InputNumberModel, {}),
    monthlyPayment: types.optional(InputNumberModel, {}),
    numberOfMonths: types.optional(InputNumberModel, {}),
})
    .views(self => ({
        get notEnoughDataToCalcInterest(): boolean {
            return self.primaryLoan.empty || !self.primaryLoan.valid
                || self.monthlyPayment.empty || !self.monthlyPayment.valid
                || self.numberOfMonths.empty || !self.numberOfMonths.valid;
        }
    }))
    .views(self => ({
        get monthlySimpleInterest(): number {
            if (self.notEnoughDataToCalcInterest) {
                return NaN;
            }

            return self.monthlyPayment.value / self.primaryLoan.value;
        },
    }))
    .views(self => ({
        get yearlySimpleInterest(): number {
            return self.monthlySimpleInterest * Math.min(self.numberOfMonths.value, 12);
        },
    }))
    .views(self => ({
        get monthlySimpleInterestFormatted(): string {
            return formatInterest(self.monthlySimpleInterest, "от тела кредита в месяц");
        },
        get yearlySimpleInterestFormatted(): string {
            return formatInterest(self.yearlySimpleInterest, "от тела кредита в год");
        },
        get monthlyCompoundInterestFormatted(): string {
            return "НЕ РЕАЛИЗОВАНО";
        },
        get yearlyCompoundInterestFormatted(): string {
            return "НЕ РЕАЛИЗОВАНО";
        }
    }));
