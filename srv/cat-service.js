const cds = require('@sap/cds');

class CatalogService extends cds.ApplicationService {

    async init() {


        const { trainers } = this.entities;

        this.before('CREATE', 'trainers', (req) => {

            if (req.data.duration > 5) {
                req.reject(400, "Duration greater than 5 hours is not allowed");
            }

        });

        this.after('READ', 'trainers', (res) => {

            for( let i = 0; i < res.length ; i++){
                res[i].location = "Room";
            }

        });

        await super.init()
    }
}

module.exports = CatalogService;