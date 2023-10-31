import { PORT } from './env.js';
import expressConfig from './express.config.js';

const app = expressConfig();

app.listen(PORT, () => console.log('Server Running on Port ' + PORT));
