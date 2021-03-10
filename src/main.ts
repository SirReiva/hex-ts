import 'reflect-metadata';
import { App } from './app';
import { UserModule } from './modules/user/user.module';

console.clear();

const app = new App();

app.loadModules([UserModule]).run();
