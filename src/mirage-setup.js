import { Server, Model } from 'miragejs';

export function makeServer() {
	let server = new Server({
		environment: 'development',
		models: { user: Model },
		seeds(server) {
      server.create("user", { name: "Bob" })
      server.create("user", { name: "Alice" })
    },
		routes() {
			this.namespace = 'api';
			this.get('/hello', schema => {
				return schema.users.all();
			});
		}
	});

	return server;
}
