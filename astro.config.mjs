import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://calculadoraintereses.com',
  redirects: {
    '/ir/imagin': 'https://imagin.pwlnk.io/uj$&JA4Qc',
    '/ir/revolut': 'https://revolut.com/referral/?referral-code=rejas99!JAN1-26-AR-CL1H2-CRY&geo-redirect',
    '/ir/traderepublic': 'https://traderepublic.com', // Placeholder
  },
  integrations: [tailwind()],
  vite: {
    server: {
      allowedHosts: ['crocused-hyperlustrously-isabela.ngrok-free.dev']
    }
  }
});