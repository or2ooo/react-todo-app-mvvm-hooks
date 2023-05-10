import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
import { CounterModel } from "./CounterModel";

@injectable()
export class CounterViewModel implements CounterModel {
    @observable count: number = 0;

    constructor() {
        makeObservable(this);
    }
    
    @action
    increment(): void {
        this.count += 1;
    }

    @action
    decrement(): void {
        this.count -= 1;
    }
}
