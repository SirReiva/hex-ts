import 'reflect-metadata';
import { App } from './app';
import { UserModule } from './modules/user/user.module';

const app = new App();

app.loadModules([UserModule]).run();
