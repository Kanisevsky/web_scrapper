'use server';
import { scrapedAmazoneProduct } from '../scraper';
import { connectToDB } from '../mongoose';
export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    connectToDB();
    const scrapedProduct = await scrapedAmazoneProduct(productUrl);
    if (!scrapedProduct) return;

    let product = scrapedProduct;
    // const existingProduct = await Product
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
}
