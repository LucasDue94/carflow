import {definePreset} from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const CustomTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#1976D2', // Azul principal
      600: '#1565C0',
      700: '#0D47A1',
      800: '#0B3C91',
      900: '#082D71',
      contrast: '#ffffff'
    },
    success: {
      500: '#388E3C',
      contrast: '#ffffff'
    },
    warning: {
      500: '#FFA000',
      contrast: '#212121'
    },
    danger: {
      500: '#D32F2F',
      contrast: '#ffffff'
    },
    info: {
      500: '#1976D2',
      contrast: '#ffffff'
    }
  },
  tokens: {
    // 🎨 Superfícies
    'surface.background': '#F5F5F5',
    'surface.card': '#ffffff',
    'surface.border': '#E0E0E0',

    // ✍️ Tipografia
    'text.color': '#212121',          // Principal
    'text.secondary.color': '#616161',// Secundário
    'text.muted.color': '#9E9E9E',    // Desabilitado
    'text.inverse.color': '#ffffff',  // Em superfícies escuras

    // 🌑 Sombras
    'shadow.sm': '0 1px 2px rgba(0,0,0,0.1)',
    'shadow.md': '0 3px 6px rgba(0,0,0,0.15)',
    'shadow.lg': '0 8px 16px rgba(0,0,0,0.2)'
  },
  extend: {
    css: ({dt}: any) => `
      body {
        background-color: ${dt('surface.background')};
        color: ${dt('text.color')};
      }

      .text-secondary {
        color: ${dt('text.secondary.color')};
      }

      .text-muted {
        color: ${dt('text.muted.color')};
      }

      .p-card {
        background: ${dt('surface.card')};
        border: 1px solid ${dt('surface.border')};
        box-shadow: ${dt('shadow.md')};
      }

      .p-button {
        box-shadow: ${dt('shadow.sm')};
      }

      .p-button:hover {
        box-shadow: ${dt('shadow.md')};
      }

      .p-dialog {
        box-shadow: ${dt('shadow.lg')};
      }
    `
  },
});
