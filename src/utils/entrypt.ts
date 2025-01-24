import CryptoJS from 'crypto-js'

export function encrypt(source: string): string {
  return CryptoJS.SHA256(source).toString()
}
