import { approvePublicNetworkUrl } from '../utils/network-trust-policy.ts';
export { isBlockedIpAddress, isBlockedSourceHostname } from '../utils/network-trust-policy.ts';

export async function approveDownloadSourceUrl(
  parsedUrl: URL,
  signal?: AbortSignal,
): Promise<{
  address: string;
  family: 4 | 6;
}> {
  return await approvePublicNetworkUrl(parsedUrl, {
    signal,
    label: 'source URL',
    hint: 'Use a public artifact URL.',
  });
}
