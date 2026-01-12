const fs = require('fs');
const path = require('path');
require('dotenv').config();

const products = [
  { id: 1, name: "TRUMP 2024 RALLY TEE", category: "apparel" },
  { id: 2, name: "BACK THE BLUE CAP", category: "headwear" },
  { id: 3, name: "ICE ENFORCEMENT HOODIE", category: "apparel" },
  { id: 4, name: "AMERICAN EAGLE FLAG", category: "flags" },
  { id: 5, name: "MAGA EMBROIDERED HAT", category: "headwear" },
  { id: 6, name: "SECURE THE BORDER TEE", category: "apparel" },
  { id: 7, name: "USA STRONG TANK TOP", category: "apparel" },
  { id: 8, name: "PATRIOT COFFEE MUG", category: "accessories" },
  { id: 9, name: "TRUMP 47 BOMBER JACKET", category: "apparel" },
  { id: 10, name: "THIN BLUE LINE FLAG", category: "flags" },
  { id: 11, name: "AMERICA FIRST POLO", category: "apparel" },
  { id: 12, name: "FREEDOM STICKER PACK", category: "accessories" },
];

async function generateImage(product) {
  const prompt = getPromptForProduct(product);
  
  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: '1024x1024',
        quality: 'standard',
        style: 'natural'
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`OpenAI API error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.data[0].url;
  } catch (error) {
    console.error(`Error generating image for ${product.name}:`, error.message);
    throw error;
  }
}

function getPromptForProduct(product) {
  const prompts = {
    1: "Professional product photo of a red t-shirt with 'TRUMP 2024 RALLY' text, patriotic design, white background, high quality, e-commerce style",
    2: "Professional product photo of a blue baseball cap with 'BACK THE BLUE' text and police badge design, white background, high quality, e-commerce style",
    3: "Professional product photo of a black hoodie with 'ICE ENFORCEMENT' text, law enforcement theme, white background, high quality, e-commerce style",
    4: "Professional product photo of an American flag with eagle design, red white and blue colors, white background, high quality, e-commerce style",
    5: "Professional product photo of a red baseball cap with 'MAGA' embroidered text, patriotic design, white background, high quality, e-commerce style",
    6: "Professional product photo of a green t-shirt with 'SECURE THE BORDER' text, patriotic design, white background, high quality, e-commerce style",
    7: "Professional product photo of a blue tank top with 'USA STRONG' text, patriotic design, white background, high quality, e-commerce style",
    8: "Professional product photo of a coffee mug with patriotic American flag design, red white and blue colors, white background, high quality, e-commerce style",
    9: "Professional product photo of a black bomber jacket with 'TRUMP 47' text, premium design, white background, high quality, e-commerce style",
    10: "Professional product photo of a thin blue line flag, black and blue design with one blue stripe, white background, high quality, e-commerce style",
    11: "Professional product photo of a white polo shirt with 'AMERICA FIRST' text, patriotic design, white background, high quality, e-commerce style",
    12: "Professional product photo of a sticker pack with patriotic designs, American flag stickers, white background, high quality, e-commerce style"
  };
  
  return prompts[product.id] || `Professional product photo of ${product.name}, white background, high quality, e-commerce style`;
}

async function downloadImage(url, filepath) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
    console.log(`✓ Downloaded: ${filepath}`);
  } catch (error) {
    console.error(`Error downloading image to ${filepath}:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('Starting image generation for all products...\n');
  
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const results = [];

  for (const product of products) {
    try {
      console.log(`Generating image for: ${product.name}...`);
      const imageUrl = await generateImage(product);
      
      const filename = `product-${product.id}.png`;
      const filepath = path.join(imagesDir, filename);
      
      await downloadImage(imageUrl, filepath);
      
      results.push({
        id: product.id,
        name: product.name,
        image: `/images/${filename}`
      });
      
      // Wait a bit between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`Failed to generate image for ${product.name}:`, error.message);
    }
  }

  console.log('\n=== Generation Complete ===');
  console.log(`Successfully generated ${results.length} images`);
  console.log('\nImage paths:');
  results.forEach(r => console.log(`  ${r.name}: ${r.image}`));
}

main().catch(console.error);
