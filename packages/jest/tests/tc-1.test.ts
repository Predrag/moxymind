import { headers } from "../config/headers";
import { URL } from "../config/url";
import { ListUsersResponse } from "../types/user.type";

describe('List Users, GET request', () => {
    it('should return correct total, last_name for first and second user, and correct count', async () => {
        const response = await fetch(`${URL}/users?page=1`, {
            method: 'GET',
            headers: headers,
        });
        expect(response.ok).toBe(true);
        const data: ListUsersResponse = await response.json();

        // Assert total
        expect(data).toHaveProperty('total');
        expect(typeof data.total).toBe('number');

        // Assert last_name for first and second user
        expect(Array.isArray(data.data)).toBe(true);
        expect(data.data.length).toBeGreaterThanOrEqual(2);
        expect(data.data[0]).toHaveProperty('last_name');
        expect(typeof data.data[0].last_name).toBe('string');
        expect(data.data[1]).toHaveProperty('last_name');
        expect(typeof data.data[1].last_name).toBe('string');

        // Count number of users and compare to per_page
        expect(data.data.length).toBe(data.per_page);

        // Assert data types for all fields in first user 
        const user = data.data[0];
        expect(typeof user.id).toBe('number');
        expect(typeof user.email).toBe('string');
        expect(typeof user.first_name).toBe('string');
        expect(typeof user.last_name).toBe('string');
        expect(typeof user.avatar).toBe('string');
    });
});
