
const mockAPI = process.env.NEXT_PUBLIC_MOCKAPI_URI as string;

const getMockData = async (endpoint: string) => {
    const response = await fetch(`${mockAPI}/${endpoint}`);
    const data = await response.json();
    return data;
};

export default getMockData;