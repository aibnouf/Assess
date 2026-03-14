import { GoogleGenerativeAI } from '@google/generative-ai';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const form = formidable({ multiples: false });
  const [fields, files] = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve([fields, files]);
    });
  });

  const imageFile = files.image;
  if (!imageFile) {
    return res.status(400).json({ success: false, error: 'No image uploaded' });
  }

  try {
    const imageData = fs.readFileSync(imageFile.filepath);
    const base64Image = imageData.toString('base64');

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are a medical assistant. Extract the medication name(s) from this image of a drug package or bottle. Return only the drug name(s) as plain text, separated by commas if multiple. Do not include any other text or explanation.`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: imageFile.mimetype || 'image/jpeg',
          data: base64Image
        }
      }
    ]);

    const response = await result.response;
    const medicationName = response.text().trim();

    if (medicationName) {
      res.status(200).json({ success: true, medicationName });
    } else {
      res.status(200).json({ success: false, error: 'No medication name detected' });
    }
  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
