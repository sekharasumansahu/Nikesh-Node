
export class DbConfig {

	private static MongoCLient: any = require('mongodb').MongoCLient;
	private static url: any = 'mongodb://localhost:27017';
	private static client: any = null;
	private static db: any = null;
	private static conn: any = null;
	private static user_coll: any = null;
	private static options: object = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};

	private static async getDbObj() {

		try {
			if (this.db == null) {
				this.client = await new this.MongoCLient(this.url, this.options);
				this.conn = await this.client.connect();
				this.db = await this.conn.db(process.env.DB);
			}
			return this.db;
		} catch (err) {
			console.log(err);
		}
	};

	public static async getUserColl() {
		try {
			if (this.user_coll == null) {
				this.db = await this.getDbObj();
				this.user_coll = await this.db.collection('user');
			}
			return this.user_coll;
		} catch (err) {
			console.log(err);
			
		}

	};

}











