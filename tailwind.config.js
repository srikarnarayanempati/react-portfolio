/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    safelist: [
    'from-custom-pink',
    'to-custom-purple',
    'from-custom-green',
    'to-custom-green-light',
  ],
  theme: {
  	extend: {
  		colors: {
  			'custom-black': '#0A0A0A',
  			'custom-navy': '#061D42',
  			'custom-dark': '#121A2D',
  			'custom-blue': '#001C54',
  			'custom-blue-light': '#091c45',
  			'custom-blue-accent': '#334d7d',
  			'custom-red': '#ff1e1e',
  			'custom-red-light': '#ff4a4a',
  			'custom-orange': '#ffaf2e',
  			'custom-pink': '#ff007f',
  			'custom-purple': '#8e2de2',
  			'custom-green': '#00ff9f',
  			'custom-green-light': '#00ffa6',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			'instrument-sans': [
  				'Instrument Sans',
  				'sans-serif'
  			],
  			'instrument-serif': [
  				'Instrument Serif',
  				'serif'
  			],
  			'space-mono': [
  				'Space Mono',
  				'monospace'
  			],
  			bricolage: [
  				'Bricolage Grotesque',
  				'sans-serif'
  			],
  			gochi: [
  				'Gochi Hand',
  				'cursive'
  			]
  		},
  		animation: {
  			glow: 'glow 2s ease-in-out infinite alternate',
  			float: 'float 3s ease-in-out infinite',
  			'slide-in': 'slide-in 0.6s ease-out',
  			'fade-in': 'fade-in 0.8s ease-out',
  			'bounce-slow': 'bounce 3s infinite',
  			'pulse-slow': 'pulse 3s ease-in-out infinite',
  			'spin-slow': 'spin 8s linear infinite',
  			wiggle: 'wiggle 1s ease-in-out infinite'
  		},
  		keyframes: {
  			glow: {
  				'0%': {
  					boxShadow: '0 0 20px rgba(255, 30, 30, 0.5)'
  				},
  				'100%': {
  					boxShadow: '0 0 30px rgba(255, 30, 30, 0.8)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'slide-in': {
  				'0%': {
  					transform: 'translateX(-100px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			wiggle: {
  				'0%, 100%': {
  					transform: 'rotate(-3deg)'
  				},
  				'50%': {
  					transform: 'rotate(3deg)'
  				}
  			}
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};