import { types } from "mobx-state-tree";

export const InputNumberModel = types.model("InputNumber", {
    input: ""
})
    .views(self => ({
        get empty(): boolean {
            return self.input === "";
        },
        get value(): number {
            return Number(self.input);
        },
    }))
    .views(self => ({
        get valid(): boolean {
            return self.empty || !isNaN(self.value);
        }
    }))
    .actions(self => ({
        setInput(input: string) {
            self.input = input;
        }
    }));
