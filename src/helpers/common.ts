
export const fetchData = async(url: string) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error: ${error}`);

        return null;
    }
};