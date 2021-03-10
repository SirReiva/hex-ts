import { ContainerModule } from 'inversify';

export interface IModule {
	container: ContainerModule;
	onload: () => void | Promise<void>;
}
