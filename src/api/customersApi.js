export const fetchCustomersData = async () => {
  try {
    const response = await fetch(
      "https://startdeliver-mock-api.glitch.me/customer"
    );
    const data = await response.json();
    // console.log(data, "data");

    return data;
  } catch (error) {
    console.error("Error fetching customer data:", error);
    throw error;
  }
};
