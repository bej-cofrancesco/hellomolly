import { Json } from '@/types/types';
import fsPromises from 'fs/promises';
import path from 'path'



export async function getData(): Promise<Json> {
  const filePath = path.join(process.cwd(), "/src/json/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  return objectData
}

