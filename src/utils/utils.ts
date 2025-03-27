export function openLink(url?: string | URL, target?: string): WindowProxy | null {
  return window.open(url, target)
}
