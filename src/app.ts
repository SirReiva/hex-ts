import { Application, json, urlencoded } from 'express';
import { Container, ContainerModule } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import './modules/user/infrastructure/rest/userGet.controller';
import './modules/user/infrastructure/rest/userGetAll.controller';
import './modules/user/infrastructure/rest/userPost.controller';
import { DI } from './shared/DI';
import { IModule } from './shared/DI/module.interface';

export class App {
	private server: InversifyExpressServer;
	private container: Container;

	constructor() {
		this.container = DI.getInstace();
		this.server = new InversifyExpressServer(this.container);
	}

	loadModules(modules: IModule[]): this {
		this.container.load(...modules.map(m => m.container));
		for (const mod of modules) {
			mod.onload();
		}
		return this;
	}

	private async initInfra() {}

	async run() {
		await this.initInfra();
		this.server.setConfig((app: Application) => {
			app.use(json());
			app.use(
				urlencoded({
					extended: true,
				})
			);
		});
		const app = this.server.build();

		return new Promise((resolve, reject) => {
			try {
				app.listen(8080, () => {
					console.log('App running in port 8080');
					resolve(undefined);
				});
			} catch (error) {
				reject(error);
			}
		});
	}
}
