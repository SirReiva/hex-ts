import {
	Application,
	json,
	NextFunction,
	Request,
	Response,
	urlencoded,
} from 'express';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { DI } from './shared/DI';
import { IModule } from './shared/DI/module.interface';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

export class App {
	private server: InversifyExpressServer;
	private container: Container;

	constructor() {
		this.container = DI.getInstace();
		this.server = new InversifyExpressServer(this.container, null, {
			rootPath: '/api/v1',
		});
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
		this.server
			.setConfig((app: Application) => {
				app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
				app.use(json());
				app.use(
					urlencoded({
						extended: true,
					})
				);
			})
			.setErrorConfig(app => {
				app.use(
					(err: Error, _req: Request, res: Response, _next: NextFunction) => {
						console.error(err.stack);
						res.status(500).send('Something broke!');
					}
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
