const request = require('supertest');

const app = require('../app')
const { Client } = require('../src/app/models');
const truncate = require('./utils/truncate');


describe("Routes Clients", () => {
    beforeEach(async () => {
        await truncate();
    });
});

describe("GET /", () => {

    it("Should response the GET method", async () => {
        const response = await request(app).get("/")
        expect(response.statusCode).toBe(200);
    });

    describe("POST /client/create", () => {
        it("It responds with the new client", async () => {
            const response = await request(app)
                .post("/client/create")
                .send({
                    name: "Nova Escola",
                    email: "ne@gmail.com",
                    birthday: 20200523
                });

            expect(response.body).toHaveProperty("id");
            expect(response.statusCode).toBe(200);
        });

        describe("GET /client/list", () => {

            it("Should return a list of clients", async () => {
                const response = await request(app)
                    .get("/client/list")

                expect(response.body.count).toBe(1);
                expect(response.statusCode).toBe(200);
            });
        });

        describe("PATH /client/show/{id}", () => {
            it('should show a expecific client', async () => {

                const res = await request(app)
                    .get('/client/detail/1');

                expect(res.body).toHaveProperty('id');
                expect(res.statusCode).toBe(200);
            });

        });

        describe("PUT /client/update/{id}", () => {
            it("Should update a expecific client", async () => {
                const response = await request(app)
                    .put("/client/update/1")
                    .send({
                        name: "Projeto Nova Escola",
                        email: "ne@gmail.com",
                        birthday: 20200524
                    });
                expect(response.body.client).toHaveProperty('name', 'Projeto Nova Escola');
                expect(response.status).toBe(200);
            });
        });
        describe("DELETE /client/delete/{id}", () => {
            it('delete a expecific client', async () => {
                const response = await request(app)
                    .delete('/client/delete/1');

                expect(response.status).toBe(200);
            });
        });
    });
});
