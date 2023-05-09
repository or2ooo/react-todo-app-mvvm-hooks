import { Container } from "inversify";
import { CounterModel } from "./CounterModel";
import { CounterViewModel } from "./CounterViewModel";

const container = new Container();
container.bind<CounterModel>('CounterModel').to(CounterViewModel);

export default container;
