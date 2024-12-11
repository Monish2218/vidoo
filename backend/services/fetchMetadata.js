import axios from 'axios';
import * as cheerio from 'cheerio';

export const getDriveMetadata = async(fileUrl)=> {
    try {
        // Fetch the HTML content of the page
        const response = await axios.get(fileUrl);
        const html = response.data;

        // Load the HTML into cheerio
        const $ = cheerio.load(html);

        // Extract the title (file name)
        const title = $('meta[property="og:title"]').attr('content');
        const mimeType = $('meta[property="og:type"]').attr('content');
        const description = $('meta[property="og:description"]').attr('content');

        return {
            title: title || "N/A",
            mimeType: mimeType || "N/A",
            description: description || "N/A",
        };
    } catch (error) {
        console.error("Error fetching metadata:", error.message);
        return null;
    }
}
