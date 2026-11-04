const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
test('MongoDB: Mongoose y sesiones persistidas en Mongo',()=>{assert.match(read('server.js'),/mongoose\.connect/);assert.match(read('server.js'),/MongoStore\.create/)});
test('Atlas: conexión configurable sin credenciales en código',()=>{assert.match(read('server.js'),/process\.env\.MONGODB_URI/);assert.match(read('.gitignore'),/\.env/)});
test('Pedidos con transacciones para consistencia',()=>{assert.match(read('server.js'),/withTransaction/);assert.match(read('server.js'),/cantidad:\{\$gte:i\.cantidad\}/)});
test('Frontend y módulos principales',()=>{for(const module of ['productos','clientes','pedidos','ventas','inventario','residuos'])assert.match(read('public/app.js'),new RegExp(module))});
