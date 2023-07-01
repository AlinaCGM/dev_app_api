export const fetchReportData = async () => {
    try {
      const response = await fetch('https://startdeliver-mock-api.glitch.me/report');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching report data:', error);
      throw error;
    }
  };