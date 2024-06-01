export const fetchInstance = {
    baseURL: 'https://www.themealdb.com/api/json/v1/1',

    getData: async function (url) {
        const response = await fetch(this.baseURL + url, {
            headers: {},
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return response.json();
    },
};