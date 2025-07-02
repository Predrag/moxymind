import { headers } from "../config/headers";
import { URL } from "../config/url";

describe('Create User, POST request', () => {
    const limit = 400; // ms
    const testUsers = [
        { name: 'Martin', job: 'QA' },
        { name: 'Jarmila', job: 'Developer' },
        { name: 'Karol', job: 'BE Developer' },
    ];

    testUsers.forEach((userData) => {
        it(`should create user '${userData.name}' with job '${userData.job}'`, async () => {
            const start = Date.now();
            const response = await fetch(`${URL}/users`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(userData),
            });
            const duration = Date.now() - start;

            // Assert HTTP code
            expect(201).toBe(response.status);

            const data = await response.json();

            // Assert ID and createdAt
            expect(data).toHaveProperty('id');
            expect(typeof data.id).toBe('string');
            expect(data).toHaveProperty('createdAt');
            expect(new Date(data.createdAt).toString()).not.toBe('Invalid Date');

            // Assert response time
            expect(duration).toBeLessThan(limit);

            // Assert response schema
            expect(typeof data.name).toBe('string');
            expect(typeof data.job).toBe('string');
            expect(typeof data.id).toBe('string');
            expect(typeof data.createdAt).toBe('string');
        });
    });
});
