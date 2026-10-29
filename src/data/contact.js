export const WHATSAPP_NUMBER = '254101939326'
export const PHONE_DISPLAY = '+254 101 939 326'
export const PHONE_TEL = '+254101939326'

export function waLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const WHATSAPP_CATALOGUE_LINK = `https://wa.me/c/${WHATSAPP_NUMBER}`
