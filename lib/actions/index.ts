'use server';
import { scrapedAmazoneProduct } from '../scraper';
export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    const scrapedProduct = await scrapedAmazoneProduct(productUrl);
    if (!scrapedProduct) return;
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
}
