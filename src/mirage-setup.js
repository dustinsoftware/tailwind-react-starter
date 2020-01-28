import { Server, Model } from 'miragejs';

export function makeServer() {
  let server = new Server({
    environment: 'development',
    models: { user: Model },
    seeds(server) {
      server.create('user', { name: 'Bob' });
      server.create('user', { name: 'Alice' });
    },
    routes() {
      this.namespace = 'api';
      this.get('/users', schema => {
        return schema.users.all();
      });
      this.post('/createUser', schema => {
        schema.users.create({ name: 'Tester!' });
      });
    }
  });

  return server;
}
