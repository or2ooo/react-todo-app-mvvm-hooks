import { Container } from "inversify";

const container = new Container({ defaultScope: 'Transient', autoBindInjectable: true });

export default container;
