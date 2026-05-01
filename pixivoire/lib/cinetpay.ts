const CINETPAY_API_URL = 'https://api-checkout.cinetpay.com/v2/payment'

export interface CinetPayInitPayload {
  amount: number
  currency: string
  transaction_id: string
  description: string
  notify_url: string
  return_url: string
  customer_email: string
  customer_name: string
}

export interface CinetPayResponse {
  code: string
  message: string
  data?: { payment_url: string; payment_token: string }
}

export async function initierPaiement(payload: CinetPayInitPayload): Promise<CinetPayResponse> {
  const response = await fetch(CINETPAY_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apikey: process.env.CINETPAY_API_KEY,
      site_id: process.env.CINETPAY_SITE_ID,
      ...payload,
      channels: 'ALL',
      lang: 'fr',
    }),
  })
  if (!response.ok) throw new Error(`Erreur CinetPay : ${response.statusText}`)
  return response.json()
}

export async function verifierTransaction(transactionId: string): Promise<{ statut: string; montant: number }> {
  const response = await fetch('https://api-checkout.cinetpay.com/v2/payment/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apikey: process.env.CINETPAY_API_KEY,
      site_id: process.env.CINETPAY_SITE_ID,
      transaction_id: transactionId,
    }),
  })
  const data = await response.json()
  return { statut: data.data?.status || 'REFUSED', montant: data.data?.amount || 0 }
}

export const PLAN_PRIX = {
  PRO: 5000,
  STUDIO: 12000,
} as const
