/**
 * HTTP client for OCM Registry API.
 */
import type { ApiResponse, CliConfig } from '@ocm/shared';
import { API_VERSION } from '@ocm/shared';

export class OcmApiClient {
  private baseUrl: string;
  private apiKey: string;

  constructor(config: CliConfig) {
    this.baseUrl = config.registryUrl.replace(/\/$/, '');
    this.apiKey = config.apiKey;
  }

  private headers(): Record<string, string> {
    return {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };
  }

  async get<T>(path: string): Promise<ApiResponse<T>> {
    const res = await fetch(`${this.baseUrl}/${API_VERSION}${path}`, {
      headers: this.headers(),
    });
    return res.json() as Promise<ApiResponse<T>>;
  }

  async post<T>(path: string, body?: unknown): Promise<ApiResponse<T>> {
    const res = await fetch(`${this.baseUrl}/${API_VERSION}${path}`, {
      method: 'POST',
      headers: this.headers(),
      body: body ? JSON.stringify(body) : undefined,
    });
    return res.json() as Promise<ApiResponse<T>>;
  }

  async postMultipart<T>(path: string, form: FormData): Promise<ApiResponse<T>> {
    const res = await fetch(`${this.baseUrl}/${API_VERSION}${path}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${this.apiKey}` },
      body: form,
    });
    return res.json() as Promise<ApiResponse<T>>;
  }

  async download(url: string, destPath: string): Promise<void> {
    const { createWriteStream } = await import('fs');
    const { pipeline } = await import('stream/promises');
    const res = await fetch(url);
    if (!res.ok || !res.body) {
      throw new Error(`Download failed: ${res.status} ${res.statusText}`);
    }
    const dest = createWriteStream(destPath);
    const { Readable } = await import('stream');
    await pipeline(Readable.fromWeb(res.body as any), dest);
  }
}
